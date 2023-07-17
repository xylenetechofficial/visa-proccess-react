import { createRejectCancelApprove } from "../repository";
import { useEffect, useState } from "react";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { DateInput, FileInput, StandardInput, UnlabeledInput } from "../../../../componenets/Input";
import { SectorInterface } from "../../../masters/sector/type";
import { CompanyInterface } from "../../../masters/company/type";
import { RejectCancelApproveInterface } from "../type";
// import { RejectCancelApproveInterface, VisaProfesionInterface } from "../type";
import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { CountryInterface } from "../../../masters/country/type";
import ActualProfessionTable from "./VisaProfessionTable";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { readVisaAuthorisationList } from "../../../masters/visaAuthorization/repository";
import { VisaAuthorisationInterface } from "../../../masters/visaAuthorization/type";
import { OPManagerList, rcList, recruitManagerList } from "../../../job-dpt/db/user";
import VisaProfessionTable from "./VisaProfessionTable";


export default function Main(props: {
    onClose: any, fetchRejectCancelApproveList: any,
    sectorList: SectorInterface[],
    companyList: CompanyInterface[],
    countryList: CountryInterface[],
}) {

    const initValue: any = {
    // const initValue: RejectCancelApproveInterface = {
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
        visaProfessionList:[]
    }

    const [RejectCancelApprove, setRejectCancelApprove] = useState(initValue)
    // const [visaProfessionList, setVisaProfessionList] = useState<VisaProfesionInterface[]>([])
    const [visaProfessionList, setVisaProfessionList] = useState<any[]>([])



    async function onClickAdd() {

        // call create
        const newArray={...RejectCancelApprove,visaProfessionList:visaProfessionList}
        const flag = await createRejectCancelApprove(newArray)

        if (!flag) {
            return;
        }
        setRejectCancelApprove(initValue)
        setVisaProfessionList([])
        props.fetchRejectCancelApproveList()
    }
    const [visaAuhorisationList, setvisaAuhorisationList] = useState<VisaAuthorisationInterface[]>([])
    const fetchvisaAuhorisationList = async () => {
        const data = await readVisaAuthorisationList();
        if (data) {
            setvisaAuhorisationList(data);
        }
    }
    useEffect(() => {
        fetchvisaAuhorisationList();
        
    }, [])

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
                        value={RejectCancelApprove.index_date}
                        onChange={(value) => setRejectCancelApprove({ ...RejectCancelApprove, index_date: value })}
                    />
                </UpdateContentBox>



                <UpdateContentBox>
                    <SubHeading1 text=" COMPANY :" />
                    <CustomSelectComponentUnlabeled
                        onChange={(value) => setRejectCancelApprove({ ...RejectCancelApprove, company: value })}

                        options={selectOptionConveter({ options: props.companyList, options_struct: { name: "name", value: "id" } })}
                        value={RejectCancelApprove.company}
                    />
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text=" Country :" />
                    <CustomSelectComponentUnlabeled
                        onChange={(value) => setRejectCancelApprove({ ...RejectCancelApprove, country: value })}

                        options={selectOptionConveter({ options: props.countryList, options_struct: { name: "name", value: "id" } })}
                        value={RejectCancelApprove.country}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="Quantity  :" />
                    <UnlabeledInput
                        value={RejectCancelApprove.quantity}
                        onchange={(value) => setRejectCancelApprove({ ...RejectCancelApprove, quantity: parseInt(value) })}
                    />
                </UpdateContentBox>


                <UpdateContentBox>

                    <SubHeading1 text="Visa Date(Arabic) :" />
                    <UnlabeledInput
                        value={RejectCancelApprove.visa_date_arabic}
                        onchange={(value) => setRejectCancelApprove({ ...RejectCancelApprove, visa_date_arabic: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="Visa number:" />
                    <UnlabeledInput
                        value={RejectCancelApprove.visa_number}
                        onchange={(value) => setRejectCancelApprove({ ...RejectCancelApprove, visa_number: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="Visa fee :" />
                    <UnlabeledInput
                        value={RejectCancelApprove.visa_fee}
                        onchange={(value) => setRejectCancelApprove({ ...RejectCancelApprove, visa_fee: parseInt(value) })}
                    />
                </UpdateContentBox>


                <UpdateContentBox>

                    <SubHeading1 text="Visa Issue DAte :" />
                    <DateInput
                        id="asdfsadfsadfsdfsa"
                        value={RejectCancelApprove.visa_issued_date}
                        onChange={(value) => setRejectCancelApprove({ ...RejectCancelApprove, visa_issued_date: value })}
                    />
                </UpdateContentBox>





                <UpdateContentBox>

                    <SubHeading1 text="VISA AUTHORIZATION:  :" />

                    <CustomSelectComponentUnlabeled
                        value={RejectCancelApprove.visa_authorization}
                        onChange={(value) => setRejectCancelApprove({ ...RejectCancelApprove, visa_authorization: value })}
                        options={selectOptionConveter({ options: visaAuhorisationList, options_struct: { name: "name", value: "id" } })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="visa submission:" />
                    <CustomSelectComponentUnlabeled
                        options={[
                            { name: "Mumbai", value: "Mumbai" },
                            { name: "Delhi", value: "Delhi" },

                        ]}
                        value={RejectCancelApprove.visa_submission}
                        onChange={(value) => setRejectCancelApprove({ ...RejectCancelApprove, visa_submission: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="Arabic Sponsor Name :" />
                    <UnlabeledInput
                        value={RejectCancelApprove.arabic_sponsor_name}
                        onchange={(value) => setRejectCancelApprove({ ...RejectCancelApprove, arabic_sponsor_name: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="Sponsor Id:" />
                    <UnlabeledInput
                        value={RejectCancelApprove.sponsor_id}
                        onchange={(value) => setRejectCancelApprove({ ...RejectCancelApprove, sponsor_id: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="Visa expiry date :" />
                    <DateInput
                        id="adsfdsfadfsdafdsfdsafas"
                        value={RejectCancelApprove.visa_expiry_date}
                        onChange={(value) => setRejectCancelApprove({ ...RejectCancelApprove, visa_expiry_date: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="Division :" />
                    <UnlabeledInput
                        value={RejectCancelApprove.division}
                        onchange={(value) => setRejectCancelApprove({ ...RejectCancelApprove, division: value })}
                    />
                </UpdateContentBox>


                <UpdateContentBox>

                    <SubHeading1 text="OM:  :" />

                    <CustomSelectComponentUnlabeled
                        value={RejectCancelApprove.om}
                        onChange={(value) => setRejectCancelApprove({ ...RejectCancelApprove, om: value })}
                        options={selectOptionConveter({ options: OPManagerList, options_struct: { name: "name", value: "id" } })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="RM:  :" />

                    <CustomSelectComponentUnlabeled
                        value={RejectCancelApprove.rm}
                        onChange={(value) => setRejectCancelApprove({ ...RejectCancelApprove, rm: value })}
                        options={selectOptionConveter({ options: recruitManagerList, options_struct: { name: "name", value: "id" } })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="RC:  :" />

                    <CustomSelectComponentUnlabeled
                        value={RejectCancelApprove.rc}
                        onChange={(value) => setRejectCancelApprove({ ...RejectCancelApprove, rc: value })}
                        options={selectOptionConveter({ options: rcList, options_struct: { name: "name", value: "id" } })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="RC:  :" />

                    <CustomRadioButton
                        value={RejectCancelApprove.visa_accountable}
                        onChange={(value) => setRejectCancelApprove({ ...RejectCancelApprove, visa_accountable: value })}
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
    )
}