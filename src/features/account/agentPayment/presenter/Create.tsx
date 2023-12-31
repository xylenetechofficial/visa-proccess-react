import { createAgentPayment } from "../repository";
import { useEffect, useState } from "react";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { DateInput, FileInput, StandardInput, UnlabeledInput } from "../../../../componenets/Input";
import { SectorInterface } from "../../../masters/sector/type";
import { CompanyInterface } from "../../../masters/company/type";
import { AgentPaymentInterface, VisaProfesionInterface } from "../type";
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
    onClose: any, fetchAgentPaymentList: any,
    sectorList: SectorInterface[],
    companyList: CompanyInterface[],
    countryList: CountryInterface[],
}) {

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
        visaProfessionList:[]
    }

    const [AgentPayment, setAgentPayment] = useState(initValue)
    const [visaProfessionList, setVisaProfessionList] = useState<VisaProfesionInterface[]>([])



    async function onClickAdd() {

        // call create
        const newArray={...AgentPayment,visaProfessionList:visaProfessionList}
        const flag = await createAgentPayment(newArray)

        if (!flag) {
            return;
        }
        setAgentPayment(initValue)
        setVisaProfessionList([])
        props.fetchAgentPaymentList()
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
                        value={AgentPayment.index_date}
                        onChange={(value) => setAgentPayment({ ...AgentPayment, index_date: value })}
                    />
                </UpdateContentBox>



                <UpdateContentBox>
                    <SubHeading1 text=" COMPANY :" />
                    <CustomSelectComponentUnlabeled
                        onChange={(value) => setAgentPayment({ ...AgentPayment, company: value })}

                        options={selectOptionConveter({ options: props.companyList, options_struct: { name: "name", value: "id" } })}
                        value={AgentPayment.company}
                    />
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text=" Country :" />
                    <CustomSelectComponentUnlabeled
                        onChange={(value) => setAgentPayment({ ...AgentPayment, country: value })}

                        options={selectOptionConveter({ options: props.countryList, options_struct: { name: "name", value: "id" } })}
                        value={AgentPayment.country}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="Quantity  :" />
                    <UnlabeledInput
                        value={AgentPayment.quantity}
                        onchange={(value) => setAgentPayment({ ...AgentPayment, quantity: parseInt(value) })}
                    />
                </UpdateContentBox>


                <UpdateContentBox>

                    <SubHeading1 text="Visa Date(Arabic) :" />
                    <UnlabeledInput
                        value={AgentPayment.visa_date_arabic}
                        onchange={(value) => setAgentPayment({ ...AgentPayment, visa_date_arabic: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="Visa number:" />
                    <UnlabeledInput
                        value={AgentPayment.visa_number}
                        onchange={(value) => setAgentPayment({ ...AgentPayment, visa_number: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="Visa fee :" />
                    <UnlabeledInput
                        value={AgentPayment.visa_fee}
                        onchange={(value) => setAgentPayment({ ...AgentPayment, visa_fee: parseInt(value) })}
                    />
                </UpdateContentBox>


                <UpdateContentBox>

                    <SubHeading1 text="Visa Issue DAte :" />
                    <DateInput
                        id="asdfsadfsadfsdfsa"
                        value={AgentPayment.visa_issued_date}
                        onChange={(value) => setAgentPayment({ ...AgentPayment, visa_issued_date: value })}
                    />
                </UpdateContentBox>





                <UpdateContentBox>

                    <SubHeading1 text="VISA AUTHORIZATION:  :" />

                    <CustomSelectComponentUnlabeled
                        value={AgentPayment.visa_authorization}
                        onChange={(value) => setAgentPayment({ ...AgentPayment, visa_authorization: value })}
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
                        value={AgentPayment.visa_submission}
                        onChange={(value) => setAgentPayment({ ...AgentPayment, visa_submission: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="Arabic Sponsor Name :" />
                    <UnlabeledInput
                        value={AgentPayment.arabic_sponsor_name}
                        onchange={(value) => setAgentPayment({ ...AgentPayment, arabic_sponsor_name: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="Sponsor Id:" />
                    <UnlabeledInput
                        value={AgentPayment.sponsor_id}
                        onchange={(value) => setAgentPayment({ ...AgentPayment, sponsor_id: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="Visa expiry date :" />
                    <DateInput
                        id="adsfdsfadfsdafdsfdsafas"
                        value={AgentPayment.visa_expiry_date}
                        onChange={(value) => setAgentPayment({ ...AgentPayment, visa_expiry_date: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="Division :" />
                    <UnlabeledInput
                        value={AgentPayment.division}
                        onchange={(value) => setAgentPayment({ ...AgentPayment, division: value })}
                    />
                </UpdateContentBox>


                <UpdateContentBox>

                    <SubHeading1 text="OM:  :" />

                    <CustomSelectComponentUnlabeled
                        value={AgentPayment.om}
                        onChange={(value) => setAgentPayment({ ...AgentPayment, om: value })}
                        options={selectOptionConveter({ options: OPManagerList, options_struct: { name: "name", value: "id" } })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="RM:  :" />

                    <CustomSelectComponentUnlabeled
                        value={AgentPayment.rm}
                        onChange={(value) => setAgentPayment({ ...AgentPayment, rm: value })}
                        options={selectOptionConveter({ options: recruitManagerList, options_struct: { name: "name", value: "id" } })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="RC:  :" />

                    <CustomSelectComponentUnlabeled
                        value={AgentPayment.rc}
                        onChange={(value) => setAgentPayment({ ...AgentPayment, rc: value })}
                        options={selectOptionConveter({ options: rcList, options_struct: { name: "name", value: "id" } })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="RC:  :" />

                    <CustomRadioButton
                        value={AgentPayment.visa_accountable}
                        onChange={(value) => setAgentPayment({ ...AgentPayment, visa_accountable: value })}
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