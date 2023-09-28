import { Box } from "@mui/material";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";
import { GreenButton, RedButton } from "../../../../componenets/CustomButton";
import { useState } from 'react';
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { AccountCandidateCancelInterface2 } from "../type";
import { createAccountCandidateCancel } from "../repository";
export default function Main(props: {
    onClose: any,
    currentData: any
}) {
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
    console.log(props.currentData)
    const initailState: AccountCandidateCancelInterface2 = {

        "candidate_id": props.currentData.id,
        "client_invoice": '',
        "penalty_amount": 0,
        "mistake_by": ''
    }
    const [candidateCancelData, setCandidateCancelData] = useState<AccountCandidateCancelInterface2>(initailState)
    async function onClickAdd() {

        // call create
        // const newArray: any = { ...candidateCancelData, candidateCancelData: candidateCancelData }
        const newArray: any = { ...candidateCancelData }
        // newArray.candidate_id =props.currentData.id
        console.log(newArray, "AAAAAAA")
        const flag = await createAccountCandidateCancel(newArray)


        setCandidateCancelData(initailState)
        // props.fetchAccountDashboardList()
        props.onClose()
    }
    return (
        <>

            {/* 
        <Box sx={style}>
              <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">Agent Commission</h3>
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

                <UpdateContentBox>
                    <SubHeading1 text="Candidate Name   :" />{props.currentData.name}
                    
                </UpdateContentBox>
                <UpdateContentBox>
                    <SubHeading1 text="Passport No   :" />{props.currentData.passport_no}
                    
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text="Agent Name   :" />{props.currentData.agent_name}
                   
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text="Agent Commission   :" />{props.currentData.agent}
                    </UpdateContentBox>
                <UpdateContentBox>
                    <SubHeading1 text="Remarks   :" />
                    <TextAreaInput id="remarks" 
                    value={data.visa_cancel_remarks}
                    onChange={(value)=>{setData({...data, visa_cancel_remarks:value})}}
                    // value={String(agentPaymentReceivedList.penalty_amount)} onChange={(value) => {
                    //    setagentPaymentReceivedList({ ...agentPaymentReceivedList, penalty_amount: parseInt(value) })
                    // }
                    // }
                     />
                </UpdateContentBox>
                <div className=" flex justify-center">

                    <GreenButton text="Paid" onClick={()=>{console.log("agentPaymentReceivedList","AAAA"),props.onClose()}}/>
                    <GreenButton text="Cancel" onClick={()=>props.onClose()}/>

                </div>
            </div>
        </Box> */}



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
                        <SubHeading1 text={props.currentData?.company_name} />
                    </UpdateContentBox>

                    <UpdateContentBox>
                        <SubHeading1 text="pARTY cODE   :" />
                        <SubHeading1 text={String(props.currentData?.party_code)} />
                    </UpdateContentBox>
                    <UpdateContentBox>
                        <SubHeading1 text="Candidate Name   :" />
                        <SubHeading1 text={props.currentData?.name} />
                    </UpdateContentBox>
                    <UpdateContentBox>
                        <SubHeading1 text="Passport No   :" />
                        <SubHeading1 text={props.currentData?.passport_no} />
                    </UpdateContentBox>
                    <UpdateContentBox>
                        <SubHeading1 text="Agent    :" />
                        <SubHeading1 text={props.currentData?.agent_name} />
                    </UpdateContentBox>
                    <UpdateContentBox>
                        <SubHeading1 text="Client invoice   :" />
                        <CustomRadioButton value={candidateCancelData.client_invoice}
                            onChange={(value) => {
                                if (value == "yes")
                                    setCandidateCancelData({ ...candidateCancelData, client_invoice: value, mistake_by: "", penalty_amount: 0 })
                                else
                                    setCandidateCancelData({ ...candidateCancelData, client_invoice: value })
                            }}
                            // onChange={(value) => console.log(value)}
                            option={[
                                { name: "Yes", value: "yes" },
                                { name: "No", value: "no" },

                            ]} />
                    </UpdateContentBox>
                    {candidateCancelData.client_invoice == "yes" ? <></> : <>
                        <UpdateContentBox>
                            <SubHeading1 text="Penalty Amount   :" />
                            <UnlabeledInput type="number" value={candidateCancelData.penalty_amount} onchange={(value) =>
                                // handleInputChange(value)
                                setCandidateCancelData({ ...candidateCancelData, penalty_amount: Number(value) })
                            } />
                        </UpdateContentBox>
                        <UpdateContentBox>
                            <SubHeading1 text="Mistake by   :" />

                            <CustomRadioButton
                                value={candidateCancelData.mistake_by}
                                onChange={(value) => setCandidateCancelData({ ...candidateCancelData, mistake_by: value })}
                                // onChange={(value) => console.log(value)}
                                option={[
                                    { name: "Agent/Candidate", value: "Agent/Candidate" },
                                    { name: "Soundlines", value: "Soundlines" },
                                    { name: "client", value: "client" },
                                ]}
                            />
                        </UpdateContentBox>
                    </>}
                    <div className="grid grid-cols-2 shadow ">
                        <GreenButton text="Submit" onClick={() => { onClickAdd() }} />
                        <RedButton text="cancel" onClick={() => { props.onClose() }} />
                    </div>
                </div>



            </Box>


        </>
    )
}