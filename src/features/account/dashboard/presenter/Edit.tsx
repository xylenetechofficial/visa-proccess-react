import {  readAccountDashboard, updateAccountDashboard } from "../repository";
import { useEffect, useState } from "react";
import  { FullScreenModal } from "../../../../componenets/Modal";
import { UnlabeledInput } from "../../../../componenets/Input";
import { AccountDashboardInterface, CandidateRejectInterface } from "../type";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { readVisaAuthorisationList } from "../../../masters/visaAuthorization/repository";


export default function Main(props: {
    onClose: () => void,
    fetchAccountDashboardList: () => void,
    currentElement: AccountDashboardInterface,
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
    }

    const [accountDashboard, setAccountDashboard] = useState(initValue)
    const [visaProfessionList, setVisaProfessionList] = useState<CandidateRejectInterface>(
        {
            client_invoice: '',
            penalty_amount: 0,
            mistake_by: '',
        })
    // const [visaProfessionList, setVisaProfessionList] = useState<any>({})



    async function onClickAdd() {

        // call create
        // const newArray: any = { ...visaProfessionList, visaProfessionList: visaProfessionList }
        const newArray: any = { ...visaProfessionList }
        console.log(newArray, "AAAAAAA")
        const flag = await updateAccountDashboard(props.currentElement.id ?? 0, newArray)


        setAccountDashboard(initValue)
        props.fetchAccountDashboardList()
    }
    // const [visaAuhorisationList, setvisaAuhorisationList] = useState<VisaAuthorisationInterface[]>([])
    const [visaAuhorisationList, setvisaAuhorisationList] = useState<any>([])
    const fetchvisaAuhorisationList = async () => {
        const data = await readVisaAuthorisationList();
        if (data) {
            setvisaAuhorisationList(data);
        }
    }
    const fetchAccountDashboard = async () => {
        const data: any = await readAccountDashboard(props.currentElement.id ?? 0);
        if (data) {
            setAccountDashboard(data);
            setVisaProfessionList(data.visaProfessionList ?? [])
        }
    }
    useEffect(() => {
        // fetchvisaAuhorisationList();
        // fetchAccountDashboard()
        // setAccountDashboard(props.currentElement)
        // setVisaProfessionList(props.currentElement.visaProfessionList??[])
    }, [])



    const handleInputChange = (value: any) => {
        const numberRegex = /[0-9]+$/;
        if (numberRegex.test(value)) {
            
            setVisaProfessionList((prev)=> { return {...prev, penalty_amount: value }})
        }
    };
    return (

        <FullScreenModal
            buttonName="submit"
            handleClick={onClickAdd}
            title="Candidate Reject"
            onClose={props.onClose}
        >


            <div className="grid grid-cols-1 py-3  gap-2 shadow">

                <UpdateContentBox>
                    <SubHeading1 text="Company Name   :" />
                    <SubHeading1 text={props.currentElement?.company_name} />
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text="pARTY cODE   :" />
                    <SubHeading1 text={String(props.currentElement?.party_code)} />
                </UpdateContentBox>
                <UpdateContentBox>
                    <SubHeading1 text="Candidate Name   :" />
                    <SubHeading1 text={props.currentElement?.name} />
                </UpdateContentBox>
                <UpdateContentBox>
                    <SubHeading1 text="Passport No   :" />
                    <SubHeading1 text={props.currentElement?.passport_no} />
                </UpdateContentBox>
                <UpdateContentBox>
                    <SubHeading1 text="Agent    :" />
                    <SubHeading1 text={props.currentElement?.agent_name} />
                </UpdateContentBox>
                <UpdateContentBox>
                    <SubHeading1 text="Client invoice   :" />
                    <CustomRadioButton value={visaProfessionList.client_invoice}
                        onChange={(value) => setVisaProfessionList({ ...visaProfessionList, client_invoice: value })}
                        // onChange={(value) => console.log(value)}
                        option={[
                            { name: "Yes", value: 1 },
                            { name: "No", value: 0 },

                        ]} />
                </UpdateContentBox>
                <UpdateContentBox>
                    <SubHeading1 text="Penalty Amount   :" />
                    <UnlabeledInput type="text" value={visaProfessionList.penalty_amount} onchange={(value) =>
                    handleInputChange(value)
                        // setVisaProfessionList({ ...visaProfessionList, penalty_amount: Number(value) })
                        } />
                </UpdateContentBox>
                <UpdateContentBox>
                    <SubHeading1 text="Mistake by   :" />

                    <CustomRadioButton
                        value={visaProfessionList.mistake_by}
                        onChange={(value) => setVisaProfessionList({ ...visaProfessionList, mistake_by: value })}
                        // onChange={(value) => console.log(value)}
                        option={[
                            { name: "Agent/Candidate", value: 0 },
                            { name: "Soundlines", value: 1 },
                            { name: "client", value: 2 },
                        ]}
                    />
                </UpdateContentBox>
            </div>



        </FullScreenModal>
    )
}