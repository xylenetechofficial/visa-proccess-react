import {
  cancelPartyCode,
  createIndexVisa,
  createPartyCode,
  readJobOrderQuantity,
  updateIndexVisa,
} from "../repository";
import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { SectorInterface } from "../../../masters/sector/type";
import { CompanyInterface } from "../../../masters/company/type";
import {
  IndexVisaInterface,
  JobOrderQuantity,
  VisaAllocationAdapter,
  VisaAllocationConverter,
  VisaAllocationInterface,
  selectConverForBlockVisa,
} from "../type";
import {
  CustomSelectComponentUnlabeled,
  selectOptionConveter,
} from "../../../../componenets/SelectBox";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { CountryInterface } from "../../../masters/country/type";
import { UserInterface } from "../../../context/Model";
import {
  readOperationManagerist,
  readRecruitCoordinatorList,
  readRecruitManagerList,
  readRecruitSuperVisorList,
} from "../../../masters/user/repository";
import {
  SubHeading1,
  UpdateContentBox,
} from "../../../../componenets/CoustomHeader";
import { readVisaAuthorisationList } from "../../../masters/visaAuthorization/repository";
import { VisaAuthorisationInterface } from "../../../masters/visaAuthorization/type";
// import { OPManagerList, rcList, recruitManagerList } from "../../../job-dpt/db/user";
import VisaAllocationTable from "./VisaAllocationTable";
import { JobOrderInterface } from "../../../job-dpt/jobOrder/type";
// import { readJobOrder } from "../../../job-dpt/jobOrder/repository";
import { readBlockVisaList } from "../../blockVisa/repository";
import { BlockVisaInterface } from "../../blockVisa/type";
// import { number } from "prop-types";
import VisaProfessionTable from "./VisaProfessionTable";
// import { BlueButton } from "../../../../componenets/CustomButton";
import { addDaysToDate } from "../../../../utils/function";
import { showMessage_v2 } from "../../../../utils/alert";
import { readJobOrderList } from "../../../job-dpt/jobOrder/repository";

export default function Main(props: {
  onClose: () => void;
  fetchIndexVisaList: () => void;
  sectorList: SectorInterface[];
  companyList: CompanyInterface[];
  countryList: CountryInterface[];
}) {
  const initValue: IndexVisaInterface = {
    id: 0,
    arabic_sponsor_name: "",
    company: 0,
    country: 0,
    division: "",
    index_date: "",
    om: 0,
    quantity: 0,
    block_visa_id: 0,
    rc: 0,
    rm: 0,
    sponsor_id: "",
    visa_accountable: 0,
    visa_authorization: 0,
    visa_number: "",
    visa_date_arabic: "",
    visa_expiry_date: "",
    visa_fee: 0,
    visa_issued_date: "",
    visa_submission: "",
    jobOrderNo: "",
    party_code: "",
    visaAllocationList: [],
    visaProfessionList: [],
    days: 709,
  };

  const [indexVisa, setIndexVisa] = useState(initValue);
  const [visaAllocationList, setVisaAllocationList] = useState<
    VisaAllocationInterface[]
  >([]);

  async function onClickAdd() {
    // const visaAllocationListAdapter:VisaAllocationAdapter[]=VisaAllocationConverter.toAdapterList(visaAllocationList)
    const visa_profession_len = indexVisa.visaProfessionList?.length ?? 0;
    // if (visa_profession_len < 1) {
    //     showMessage_v2({ message: "Visa Profession Required", status: 404 });
    //     return
    // }

    for (let i = 0; i < visa_profession_len; i++) {
      if (indexVisa.visaProfessionList[i].visa_profession.trim() == "") {
        showMessage_v2({ message: "Visa Profession Empty", status: 404 });
        return;
      }
    }

    const newArray = { ...indexVisa, visaAllocationList: visaAllocationList };
    // call create
    // const flag = await createIndexVisa(newArray)
    const flag = await updateIndexVisa(
      parseInt(indexVisa.party_code ?? "0"),
      newArray
    );

    if (!flag) {
      return;
    }
    setIndexVisa(initValue);
    setVisaAllocationList([]);
    props.fetchIndexVisaList();
    props.onClose();
  }

  const [visaAuhorisationList, setvisaAuhorisationList] = useState<
    VisaAuthorisationInterface[]
  >([]);
  const fetchvisaAuhorisationList = async () => {
    const data = await readVisaAuthorisationList();
    if (data) {
      setvisaAuhorisationList(data);
    }
  };
  // useEffect(() => {
  //     fetchvisaAuhorisationList();
  // }, [])

  const [showDataFromBlockVisa, setShowBlockFromBlockVisa] = useState(0);
  const [blockVisaList, setBlockVisaList] = useState<BlockVisaInterface[]>();
  const [selectedBlockVisa, setSelectedBlockVisa] = useState(0);
  const [blockVisa, setBlockVisa] = useState<BlockVisaInterface>();

  const fetchBlockVisaList = async () => {
    const data = await readBlockVisaList();
    if (data) {
      setBlockVisaList(data);
    }

    console.log(data);
  };

  // set function to set value from block visa
  const setValueFormBlockVisa = () => {
    if (selectedBlockVisa && blockVisaList) {
      for (let i = 0; i < blockVisaList.length; i++) {
        if (blockVisaList[i].id == selectedBlockVisa) {
          setBlockVisa(blockVisaList[i]);
          setIndexVisa({
            ...indexVisa,
            block_visa_id: blockVisaList[i].id ?? 0,
            visa_number: blockVisaList[i].visa_number,
            visa_date_arabic: blockVisaList[i].visa_date_arabic,
            visa_expiry_date: blockVisaList[i].visa_expiry_date,
            visa_fee: blockVisaList[i].visa_fee,
            visa_issued_date: blockVisaList[i].visa_issued_date,
            visa_submission: blockVisaList[i].visa_submission,
            visa_accountable: blockVisaList[i].visa_accountable,
            visa_authorization: blockVisaList[i].visa_authorization,
            arabic_sponsor_name: blockVisaList[i].arabic_sponsor_name,
            division: blockVisaList[i].division,
            sponsor_id: blockVisaList[i].sponsor_id,
            // om: blockVisaList[i].om,

            // rc: blockVisaList[i].rc,
            // rm: blockVisaList[i].rm,
            visaProfessionList: blockVisaList[i].visaProfessionList,
          });
        }
      }
    }
  };

  // unset function

  const UnSetValueFormBlockVisa = () => {
    if (selectedBlockVisa && blockVisaList) {
      for (let i = 0; i < blockVisaList.length; i++) {
        if (blockVisaList[i].id == selectedBlockVisa) {
          setIndexVisa({
            ...indexVisa,
            block_visa_id: 0,
            visa_number: "",
            visa_date_arabic: "",
            visa_expiry_date: "",
            visa_fee: 0,
            visa_issued_date: "",
            visa_submission: "",
            visa_accountable: 0,
            visa_authorization: 0,
            arabic_sponsor_name: "",
            division: "",
            sponsor_id: "",
            // om: 0,
            // rc: 0,
            // rm: 0,
            visaProfessionList: [],
          });
        }
      }
    }
  };
  const [JobOrderList, setJobOrderList] = useState<JobOrderInterface[]>([]);
  const fetchJobOrderList = async () => {
    let data;
    if (indexVisa.company) {
      // data = await readJobOrderList({ companyId: indexVisa.company ?? 0 });
      data = await readJobOrderList(0, { company_id: indexVisa.company });
    }
    if (data) {
      setJobOrderList(data);
    }
  };

  const [joOrderQuatity, setJobOrderQuantity] = useState<JobOrderQuantity>();

  const fetchJobOrderQuantity = async () => {
    if (indexVisa.jobOrderNo) {
      const parts = indexVisa.jobOrderNo.split("/");
      const lastPart = parseInt(parts[parts.length - 1]);
      const data = await readJobOrderQuantity(lastPart);
      console.log(data);
      setJobOrderQuantity(data);
    }
  };

  const [RecruitSuperVisorList, setRecruitSuperVisorList] = useState<
    UserInterface[]
  >([]);
  const fetchRecruitSuperVisorList = async () => {
    const data = await readRecruitSuperVisorList();
    setRecruitSuperVisorList(data);
  };

  const [RecruitCoordinatorList, setRecruitCoordinatorList] = useState<
    UserInterface[]
  >([]);
  const fetchRecruitCoordinatorList = async () => {
    const data = await readRecruitCoordinatorList();
    setRecruitCoordinatorList(data);
  };

  const [RecruitManagerList, setRecruitManagerList] = useState<UserInterface[]>(
    []
  );
  const fetchRecruitManagerList = async () => {
    const data = await readRecruitManagerList();
    setRecruitManagerList(data);
  };

  const [OperationManagerist, setOperationManagerist] = useState<
    UserInterface[]
  >([]);
  const fetchOperationManagerist = async () => {
    const data = await readOperationManagerist();
    console.log(data);
    setOperationManagerist(data);
  };

  useEffect(() => {
    fetchOperationManagerist();
    fetchRecruitManagerList();
    fetchRecruitCoordinatorList();
    fetchRecruitSuperVisorList();

    fetchBlockVisaList();
    fetchvisaAuhorisationList();
  }, []);

  useEffect(() => {
    fetchJobOrderList();
  }, [indexVisa.company]);

  async function getPartCode() {
    const data = await createPartyCode(indexVisa);
    setIndexVisa({ ...indexVisa, party_code: data.party_code });
  }
  useEffect(() => {
    if (indexVisa.party_code == "" && indexVisa.jobOrderNo != "") getPartCode();
    fetchJobOrderQuantity();
  }, [indexVisa.jobOrderNo]);

  // useEffect(() => {
  //     fetchBlockVisaList();
  // }, [])

  useEffect(() => {
    setValueFormBlockVisa();
  }, [selectedBlockVisa]);

  useEffect(() => {
    if (!showDataFromBlockVisa) {
      UnSetValueFormBlockVisa();
    }
  }, [showDataFromBlockVisa]);

  return (
    <FullScreenModal
      buttonName="Add"
      handleClick={onClickAdd}
      title="Add Visa Index"
      onClose={async () => {
        if (indexVisa.party_code != "") await cancelPartyCode(indexVisa);
        props.onClose();
      }}
    >
      <div className=" grid grid-cols-1 py-3  gap-2 shadow">
        <UpdateContentBox>
          <SubHeading1 text="Index Date  :" />
          <DateInput
            id="sd;fksdakj"
            value={indexVisa.index_date}
            onChange={(value) =>
              setIndexVisa({ ...indexVisa, index_date: value })
            }
          />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text=" COMPANY :" />
          <CustomSelectComponentUnlabeled
            onChange={(value) => setIndexVisa({ ...indexVisa, company: value })}
            options={selectOptionConveter({
              options: props.companyList,
              options_struct: { name: "name", value: "id" },
            })}
            value={indexVisa.company}
          />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text=" Job order :" />
          <CustomSelectComponentUnlabeled
            onChange={(value) => {
              for (let i = 0; i < JobOrderList.length; i++) {
                const element = JobOrderList[i];
                if (value == element.jobOrderNumber) {
                  console.log({
                    jobOrderNo: element.jobOrderNumber ?? "",
                    country: element.CountryId ?? 0,
                    om: element.operationManagerId ?? 0,
                    rc: element.rcId ?? 0,
                    rm: element.recruitmentManagerId ?? 0,
                  }); // Only Dev
                  setIndexVisa({
                    ...indexVisa,
                    jobOrderNo: element.jobOrderNumber ?? "",
                    country: element.CountryId ?? 0,
                    om: element.operationManagerId ?? 0,
                    rc: element.rcId ?? 0,
                    rm: element.recruitmentManagerId ?? 0,
                  });
                }
              }
            }}
            options={selectOptionConveter({
              options: JobOrderList,
              options_struct: {
                name: "jobOrderNumber",
                value: "jobOrderNumber",
              },
            })}
            value={indexVisa.jobOrderNo}
          />
        </UpdateContentBox>

        {indexVisa.party_code != "" ? (
          <UpdateContentBox>
            <SubHeading1 text="Party Code :" />
            <UnlabeledInput
              value={indexVisa.party_code}
              onchange={(_) => _}
              disabled
            />
          </UpdateContentBox>
        ) : (
          ""
        )}

        <UpdateContentBox>
          <SubHeading1 text="Use form" />
          <CustomRadioButton
            value={showDataFromBlockVisa}
            onChange={(value) => setShowBlockFromBlockVisa(parseInt(value))}
            option={[
              { name: "New Visa", value: 0 },
              { name: "Block visa", value: 1 },
            ]}
          />
        </UpdateContentBox>

        {/* from block visa */}
        {showDataFromBlockVisa ? (
          <>
            {" "}
            <UpdateContentBox>
              <SubHeading1 text=" Block Visa :" />
              <CustomSelectComponentUnlabeled
                onChange={(value) => setSelectedBlockVisa(value)}
                options={selectConverForBlockVisa(
                  blockVisaList ?? [],
                  props.companyList
                )}
                value={selectedBlockVisa}
              />
            </UpdateContentBox>
            <UpdateContentBox>
              <SubHeading1 text=" Balance Quantity :" />{" "}
              {blockVisa?.balanceQuantity}
            </UpdateContentBox>
          </>
        ) : (
          ""
        )}

        <UpdateContentBox>
          <SubHeading1 text=" Country :" />
          <CustomSelectComponentUnlabeled
            onChange={(value) => setIndexVisa({ ...indexVisa, country: value })}
            options={selectOptionConveter({
              options: props.countryList,
              options_struct: { name: "name", value: "id" },
            })}
            value={indexVisa.country}
          />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="Quantity  :" />
          <UnlabeledInput
            type="number"
            value={indexVisa.quantity}
            onchange={(value) =>
              setIndexVisa({ ...indexVisa, quantity: parseInt(value) })
            }
          />
          {indexVisa.jobOrderNo ? (
            <>
              {"   TOTAL JOB ORDER QTY :  " + joOrderQuatity?.total_quantity}
              <br />
              {"   QTY USED IN INDEX :" + joOrderQuatity?.used_quantity}
              <br />
              {"   BALANCE QTY :" + joOrderQuatity?.balance_quantity}
            </>
          ) : (
            ""
          )}
        </UpdateContentBox>

        {indexVisa.country != 8 ? (
          ""
        ) : (
          <>
            <UpdateContentBox>
              <SubHeading1 text="Visa Date(Arabic) :" />
              <UnlabeledInput
                value={indexVisa.visa_date_arabic}
                onchange={(value) =>
                  setIndexVisa({ ...indexVisa, visa_date_arabic: value })
                }
              />
            </UpdateContentBox>
            <UpdateContentBox>
              <SubHeading1 text="Visa number :" />
              <UnlabeledInput
                value={indexVisa.visa_number}
                onchange={(value) =>
                  setIndexVisa({ ...indexVisa, visa_number: value })
                }
              />
            </UpdateContentBox>
            <UpdateContentBox>
              <SubHeading1 text="Visa fee :" />
              <UnlabeledInput
                type="number"
                value={indexVisa.visa_fee}
                onchange={(value) =>
                  setIndexVisa({ ...indexVisa, visa_fee: parseInt(value) })
                }
              />
            </UpdateContentBox>

            <UpdateContentBox>
              <SubHeading1 text="Visa Issue Date :" />
              <DateInput
                id="asdfsadfsfsa"
                value={indexVisa.visa_issued_date}
                onChange={(value) => {
                  const date = addDaysToDate(value, indexVisa.days);
                  console.log(value);
                  console.log(date);
                  setIndexVisa({
                    ...indexVisa,
                    visa_issued_date: value,
                    visa_expiry_date: date,
                  });
                }}
              />
            </UpdateContentBox>
          </>
        )}

        <UpdateContentBox>
          <SubHeading1 text="VISA AUTHORIZATION :" />

          <CustomSelectComponentUnlabeled
            value={indexVisa.visa_authorization}
            onChange={(value) =>
              setIndexVisa({ ...indexVisa, visa_authorization: value })
            }
            options={selectOptionConveter({
              options: visaAuhorisationList,
              options_struct: { name: "name", value: "id" },
            })}
          />
        </UpdateContentBox>

        {indexVisa.country != 8 ? (
          ""
        ) : (
          <>
            <UpdateContentBox>
              <SubHeading1 text="visa submission :" />
              <CustomSelectComponentUnlabeled
                options={[
                  { name: "Mumbai", value: "Mumbai" },
                  { name: "Delhi", value: "Delhi" },
                ]}
                value={indexVisa.visa_submission}
                onChange={(value) =>
                  setIndexVisa({ ...indexVisa, visa_submission: value })
                }
              />
            </UpdateContentBox>

            <UpdateContentBox>
              <SubHeading1 text="Arabic Sponsor Name :" />
              <UnlabeledInput
                value={indexVisa.arabic_sponsor_name}
                onchange={(value) =>
                  setIndexVisa({ ...indexVisa, arabic_sponsor_name: value })
                }
              />
            </UpdateContentBox>

            <UpdateContentBox>
              <SubHeading1 text="Sponsor Id :" />
              <UnlabeledInput
                value={indexVisa.sponsor_id}
                onchange={(value) =>
                  setIndexVisa({ ...indexVisa, sponsor_id: value })
                }
              />
            </UpdateContentBox>

            <UpdateContentBox>
              <SubHeading1 text="Visa expiry date :" />
              <DateInput
                id="adsfdsfadfsdafdsfdsafas"
                value={indexVisa.visa_expiry_date}
                onChange={(v) => {
                  setBlockVisa({ ...indexVisa, visa_expiry_date: v });
                }}
              />
              {/* <UnlabeledInput
                        value={indexVisa.days}
                        onchange={(value) => {
                            const date = addDaysToDate(indexVisa.visa_issued_date, parseInt(value))
                            setBlockVisa({ ...indexVisa, days: parseInt(value), visa_expiry_date: date })

                        }}
                    /> */}
            </UpdateContentBox>
          </>
        )}
        <UpdateContentBox>
          <SubHeading1 text="Division :" />
          <UnlabeledInput
            value={indexVisa.division}
            onchange={(value) =>
              setIndexVisa({ ...indexVisa, division: value })
            }
          />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="OM :" />

          <CustomSelectComponentUnlabeled
            value={indexVisa.om}
            onChange={(value) => setIndexVisa({ ...indexVisa, om: value })}
            options={selectOptionConveter({
              options: OperationManagerist,
              options_struct: { name: "name", value: "id" },
            })}
          />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="RM :" />

          <CustomSelectComponentUnlabeled
            value={indexVisa.rm}
            onChange={(value) => setIndexVisa({ ...indexVisa, rm: value })}
            options={selectOptionConveter({
              options: RecruitManagerList,
              options_struct: { name: "name", value: "id" },
            })}
          />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="RC :" />

          <CustomSelectComponentUnlabeled
            value={indexVisa.rc}
            onChange={(value) => setIndexVisa({ ...indexVisa, rc: value })}
            options={selectOptionConveter({
              options: RecruitCoordinatorList,
              options_struct: { name: "name", value: "id" },
            })}
          />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="Visa Accountable :" />

          <CustomRadioButton
            inlined
            value={indexVisa.visa_accountable}
            onChange={(value) =>
              setIndexVisa({ ...indexVisa, visa_accountable: value })
            }
            option={[
              { name: "Yes", value: 1 },
              { name: "No", value: 0 },
            ]}
          />
        </UpdateContentBox>
      </div>
      <VisaProfessionTable
        visaProfessionList={indexVisa.visaProfessionList ?? []}
        onChange={(value) =>
          setIndexVisa({ ...indexVisa, visaProfessionList: value })
        }
      />
      <VisaAllocationTable
        indexVisa={indexVisa}
        visaAllocationList={visaAllocationList}
        onChange={(value) => setVisaAllocationList(value)}
        RecruitCoordinatorList={RecruitCoordinatorList}
      />
    </FullScreenModal>
  );
}
