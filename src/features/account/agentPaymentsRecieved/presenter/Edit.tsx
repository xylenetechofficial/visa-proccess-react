import {  readAccountDashboard, updateAccountDashboard } from "../repository";
import { useEffect, useState } from "react";
import {  UnlabeledInput } from "../../../../componenets/Input";
import { SectorInterface } from "../../../masters/sector/type";
import { CompanyInterface } from "../../../masters/company/type";
import {  AgentPaymentReceivedInterface, CandidateRejectInterface } from "../type";
import { CountryInterface } from "../../../masters/country/type";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { readVisaAuthorisationList } from "../../../masters/visaAuthorization/repository";
import { Box } from "@mui/material";
import { GreenButton } from "../../../../componenets/CustomButton";


export default function Main(props: {
    onClose: () => void,
    fetchAccountDashboardList: () => void,
    currentElement: AgentPaymentReceivedInterface,
    
}) {
    
    const [agentPaymentReceivedList, setagentPaymentReceivedList] = useState<CandidateRejectInterface>(
        {
            client_invoice: '',
            penalty_amount: 0,
            mistake_by: '',
        })  
   
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
    return (

       

        <Box sx={style}>
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
            <div className="grid grid-cols-1 py-3  gap-2 shadow justify-center">
            <div className="text-xl p-3 font-bold text-gray-500 uppercase bg-[#F1F2F6] dark:bg-gray-500 dark:text-gray-500 w-auto">
       Agent payments edit
      </div>
                <UpdateContentBox>
                    <SubHeading1 text="Candidate Name   :" />
                    <SubHeading1 text={props.currentElement?.name} />
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text="Agent Name   :" />
                    <SubHeading1 text={String(props.currentElement?.party_code)} />
                </UpdateContentBox>
                <UpdateContentBox>
                    <SubHeading1 text="Payment Received   :" />
                    <UnlabeledInput 
type="number"
                     value={agentPaymentReceivedList.penalty_amount} onchange={(value) => {
                        // handleInputChange(value)
                        setagentPaymentReceivedList({ ...agentPaymentReceivedList, penalty_amount: parseInt(value) })
                    }
                    } />
                </UpdateContentBox>
                <div className=" flex justify-center">

                    <GreenButton text="Submit" onClick={()=>{console.log(agentPaymentReceivedList,"AAAA"),props.onClose()}}/>
                    <GreenButton text="Back" onClick={()=>props.onClose()}/>

                </div>
            </div>
        </Box>



        
    )
}