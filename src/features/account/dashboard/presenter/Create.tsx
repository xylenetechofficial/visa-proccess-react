import { createAccountDashboard } from "../repository";
import { useEffect, useState } from "react";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import {
  DateInput,
  FileInput,
  StandardInput,
  UnlabeledInput,
} from "../../../../componenets/Input";
import { SectorInterface } from "../../../masters/sector/type";
import { CompanyInterface } from "../../../masters/company/type";
import { AccountDashboardInterface, VisaProfesionInterface } from "../type";
import {
  CustomSelectComponent,
  CustomSelectComponentUnlabeled,
  selectOptionConveter,
} from "../../../../componenets/SelectBox";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { CountryInterface } from "../../../masters/country/type";
import ActualProfessionTable from "./VisaProfessionTable";
import {
  SubHeading1,
  UpdateContentBox,
} from "../../../../componenets/CoustomHeader";
import { readVisaAuthorisationList } from "../../../masters/visaAuthorization/repository";
import { VisaAuthorisationInterface } from "../../../masters/visaAuthorization/type";
import {
  OPManagerList,
  rcList,
  recruitManagerList,
} from "../../../job-dpt/db/user";
import VisaProfessionTable from "./VisaProfessionTable";

export default function Main(props: {
  onClose: () => void;
  fetchaccountDashboardList: () => void;
  sectorList: SectorInterface[];
  companyList: CompanyInterface[];
  countryList: CountryInterface[];
}) {
  // const initValue: AccountDashboardInterface = {
  const initValue: any = {
    id: 0,
    arabic_sponsor_name: "",
    company: 0,
    country: 0,
    division: "",
    index_date: "",
    om: 0,
    quantity: 0,
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
    visaProfessionList: [],
  };

  const [accountDashboard, setAccountDashboard] = useState(initValue);
  const [visaProfessionList, setVisaProfessionList] = useState<
    VisaProfesionInterface[]
  >([]);

  async function onClickAdd() {
    // call create
    const newArray = {
      ...accountDashboard,
      visaProfessionList: visaProfessionList,
    };
    const flag = await createAccountDashboard(newArray);

    if (!flag) {
      return;
    }
    setAccountDashboard(initValue);
    setVisaProfessionList([]);
    props.fetchaccountDashboardList();
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
  useEffect(() => {
    fetchvisaAuhorisationList();
  }, []);

  return (
    <FullScreenModal
      buttonName="Add"
      handleClick={onClickAdd}
      title="Add Block Visa"
      onClose={props.onClose}
    >
      <div className=" grid grid-cols-1 py-3  gap-2 shadow">
        <UpdateContentBox>
          <SubHeading1 text="Index Date  :" />
          <DateInput
            id="sd;fksdakj"
            value={accountDashboard.index_date}
            onChange={(value) =>
              setAccountDashboard({ ...accountDashboard, index_date: value })
            }
          />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text=" COMPANY :" />
          <CustomSelectComponentUnlabeled
            onChange={(value) =>
              setAccountDashboard({ ...accountDashboard, company: value })
            }
            options={selectOptionConveter({
              options: props.companyList,
              options_struct: { name: "name", value: "id" },
            })}
            value={accountDashboard.company}
          />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text=" Country :" />
          <CustomSelectComponentUnlabeled
            onChange={(value) =>
              setAccountDashboard({ ...accountDashboard, country: value })
            }
            options={selectOptionConveter({
              options: props.countryList,
              options_struct: { name: "name", value: "id" },
            })}
            value={accountDashboard.country}
          />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="Quantity  :" />
          <UnlabeledInput
            value={accountDashboard.quantity}
            onchange={(value) =>
              setAccountDashboard({
                ...accountDashboard,
                quantity: parseInt(value),
              })
            }
          />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="Visa Date(Arabic) :" />
          <UnlabeledInput
            value={accountDashboard.visa_date_arabic}
            onchange={(value) =>
              setAccountDashboard({
                ...accountDashboard,
                visa_date_arabic: value,
              })
            }
          />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="Visa number:" />
          <UnlabeledInput
            value={accountDashboard.visa_number}
            onchange={(value) =>
              setAccountDashboard({ ...accountDashboard, visa_number: value })
            }
          />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="Visa fee :" />
          <UnlabeledInput
            value={accountDashboard.visa_fee}
            onchange={(value) =>
              setAccountDashboard({
                ...accountDashboard,
                visa_fee: parseInt(value),
              })
            }
          />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="Visa Issue DAte :" />
          <DateInput
            id="asdfsadfsadfsdfsa"
            value={accountDashboard.visa_issued_date}
            onChange={(value) =>
              setAccountDashboard({
                ...accountDashboard,
                visa_issued_date: value,
              })
            }
          />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="VISA AUTHORIZATION:  :" />

          <CustomSelectComponentUnlabeled
            value={accountDashboard.visa_authorization}
            onChange={(value) =>
              setAccountDashboard({
                ...accountDashboard,
                visa_authorization: value,
              })
            }
            options={selectOptionConveter({
              options: visaAuhorisationList,
              options_struct: { name: "name", value: "id" },
            })}
          />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="visa submission:" />
          <CustomSelectComponentUnlabeled
            options={[
              { name: "Mumbai", value: "Mumbai" },
              { name: "Delhi", value: "Delhi" },
            ]}
            value={accountDashboard.visa_submission}
            onChange={(value) =>
              setAccountDashboard({
                ...accountDashboard,
                visa_submission: value,
              })
            }
          />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="Arabic Sponsor Name :" />
          <UnlabeledInput
            value={accountDashboard.arabic_sponsor_name}
            onchange={(value) =>
              setAccountDashboard({
                ...accountDashboard,
                arabic_sponsor_name: value,
              })
            }
          />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="Sponsor Id:" />
          <UnlabeledInput
            value={accountDashboard.sponsor_id}
            onchange={(value) =>
              setAccountDashboard({ ...accountDashboard, sponsor_id: value })
            }
          />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="Visa expiry date :" />
          <DateInput
            id="adsfdsfadfsdafdsfdsafas"
            value={accountDashboard.visa_expiry_date}
            onChange={(value) =>
              setAccountDashboard({
                ...accountDashboard,
                visa_expiry_date: value,
              })
            }
          />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="Division :" />
          <UnlabeledInput
            value={accountDashboard.division}
            onchange={(value) =>
              setAccountDashboard({ ...accountDashboard, division: value })
            }
          />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="OM:  :" />

          <CustomSelectComponentUnlabeled
            value={accountDashboard.om}
            onChange={(value) =>
              setAccountDashboard({ ...accountDashboard, om: value })
            }
            options={selectOptionConveter({
              options: OPManagerList,
              options_struct: { name: "name", value: "id" },
            })}
          />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="RM:  :" />

          <CustomSelectComponentUnlabeled
            value={accountDashboard.rm}
            onChange={(value) =>
              setAccountDashboard({ ...accountDashboard, rm: value })
            }
            options={selectOptionConveter({
              options: recruitManagerList,
              options_struct: { name: "name", value: "id" },
            })}
          />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="RC:  :" />

          <CustomSelectComponentUnlabeled
            value={accountDashboard.rc}
            onChange={(value) =>
              setAccountDashboard({ ...accountDashboard, rc: value })
            }
            options={selectOptionConveter({
              options: rcList,
              options_struct: { name: "name", value: "id" },
            })}
          />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="RC:  :" />

          <CustomRadioButton
            value={accountDashboard.visa_accountable}
            onChange={(value) =>
              setAccountDashboard({
                ...accountDashboard,
                visa_accountable: value,
              })
            }
            option={[
              { name: "Yes", value: 1 },
              { name: "No", value: 0 },
            ]}
          />
        </UpdateContentBox>
      </div>

      <VisaProfessionTable
        visaProfessionList={visaProfessionList}
        onChange={(value) => setVisaProfessionList(value)}
      />
    </FullScreenModal>
  );
}
