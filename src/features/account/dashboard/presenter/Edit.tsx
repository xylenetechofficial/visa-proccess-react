import {  readAccountDashboard, updateAccountDashboard } from "../repository";
import { useEffect, useState } from "react";
import  { FullScreenModal } from "../../../../componenets/Modal";
import { UnlabeledInput } from "../../../../componenets/Input";
import { AccountDashboardInterface, CandidateRejectInterface } from "../type";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { readVisaAuthorisationList } from "../../../masters/visaAuthorization/repository";
import { Box } from "@mui/material";
import { GreenButton, RedButton } from "../../../../componenets/CustomButton";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
};
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
            account_dashboard_client_invoice: '',
            account_dashboard_penalty_amount: 0,
            account_dashboard_mistake_by: '',
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
        if (numberRegex.test(value) || value =='') {
            setVisaProfessionList((prev)=> { return {...prev, account_dashboard_penalty_amount: value }})
        }
    };
    return (

        // <FullScreenModal
        //     buttonName="submit"
        //     handleClick={onClickAdd}
        //     title="Candidate Reject"
        //     onClose={props.onClose}
        // >
    
        <Box sx={style}>
            <h3 className="mb-4 text-2xl align-center font-medium text-gray-900 dark:text-white">Candidate Reject</h3>
            <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => props.onClose()}
            >
                <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>

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
                    <CustomRadioButton value={visaProfessionList.account_dashboard_client_invoice}
                        onChange={(value) => setVisaProfessionList({ ...visaProfessionList, account_dashboard_client_invoice: value })}
                        // onChange={(value) => console.log(value)}
                        option={[
                            { name: "Yes", value: 1 },
                            { name: "No", value: 0 },

                        ]} />
                </UpdateContentBox>
                <UpdateContentBox>
                    <SubHeading1 text="Penalty Amount   :" />
                    <UnlabeledInput type="text" value={visaProfessionList.account_dashboard_penalty_amount} onchange={(value) =>
                    handleInputChange(value)
                        // setVisaProfessionList({ ...visaProfessionList, account_dashboard_penalty_amount: Number(value) })
                        } />
                </UpdateContentBox>
                <UpdateContentBox>
                    <SubHeading1 text="Mistake by   :" />

                    <CustomRadioButton
                        value={visaProfessionList.account_dashboard_mistake_by}
                        onChange={(value) => setVisaProfessionList({ ...visaProfessionList, account_dashboard_mistake_by: value })}
                        // onChange={(value) => console.log(value)}
                        option={[
                            { name: "Agent/Candidate", value: 0 },
                            { name: "Soundlines", value: 1 },
                            { name: "client", value: 2 },
                        ]}
                    />
                </UpdateContentBox>
                <div className="grid grid-cols-2 shadow ">
                <GreenButton text="Submit" onClick={()=>{onClickAdd()}}/>
                <RedButton text="cancel" onClick={()=>{props.onClose()}}/>
                </div>
            </div>



        </Box>
    )
}