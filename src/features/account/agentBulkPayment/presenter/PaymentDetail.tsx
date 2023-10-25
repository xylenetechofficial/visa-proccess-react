import {  readAccountDashboard, updateAccountDashboard } from "../repository";
import { useEffect, useState } from "react";
import { TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";
import {  CandidateRejectInterface } from "../type";
import {  CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { readVisaAuthorisationList } from "../../../masters/visaAuthorization/repository";
import { Box } from "@mui/material";
import { GreenButton } from "../../../../componenets/CustomButton";
import { readAgentList } from "../../../masters/agent/repository";


export default function Main(props: {
    onClose: () => void,
    fetchAccountDashboardList: () => void,
    accountDashboardList:any
    currentElement: any,
    onClickCreate:any
}) {
    console.log(props.currentElement, "ALLLLLLLLL",props.accountDashboardList)
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
    const [agentPaymentReceivedList, setagentPaymentReceivedList] = useState<CandidateRejectInterface>(
        {
            client_invoice: '',
            penalty_amount: 0,
            mistake_by: '',
        })
    
    async function onClickAdd() {

       const newArray: any = { ...agentPaymentReceivedList }
        console.log(newArray, "AAAAAAA")
        const flag = await updateAccountDashboard(props.currentElement.id ?? 0, newArray)


        setAccountDashboard(initValue)
        props.fetchAccountDashboardList()
    }
  
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
            setagentPaymentReceivedList(data.agentPaymentReceivedList ?? [])
        }
    }

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

    const uniqueAgentId = Array.from(new Set(props.accountDashboardList.map((obj:any) => obj.agent_id)))
  .map(agent_id => props.accountDashboardList.find((obj:any) => obj.agent_id === agent_id));
  console.log(uniqueAgentId)
  const [agentBulkPayment,setAgentBulkPayment]= useState({
    "agent_id":0,
    "amount":0,
    "description":""
  })
  console.log(agentBulkPayment)
  const [agentList,setAgentList]= useState([])
    const agentLocater= async()=>{
       const data:any = await readAgentList(true);
       console.log(data,"agent")
       setAgentList(data)
    }
 useEffect(()=>{
        agentLocater();
    },[])
    return (



        <Box sx={style}>
            {/* <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">Payment Detail</h3> */}
            <div className="text-xl p-3 font-bold text-gray-500 uppercase bg-[#F1F2F6] dark:bg-gray-500 dark:text-gray-500 w-auto">
            Add Agent Bulk payment 
                        </div>
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

            {/* <div className="grid grid-cols-1 py-3  gap-2 shadow justify-center"> */}




                <div className='overflow-auto' style={{ justifyContent: "center" }}>

                    <div className="  rounded-lg justify-center">
                      
                        <div className="grid grid-cols-1 justify-between space-y-6 m-4">
                        <UpdateContentBox>
                                <SubHeading1 text="Agent ID:" />
                                <CustomSelectComponentUnlabeled
                                 options={selectOptionConveter({
                                    options: agentList,
                                    options_struct: { name: "name", value: "id" },
                                  })}
                                    onChange={(value)=>{
                                        setAgentBulkPayment({
                                            ...agentBulkPayment,
                                            agent_id:parseInt(value)
                                        })}}  />
                            </UpdateContentBox>
                            <UpdateContentBox>
                                <SubHeading1 text="description of payment :" />
                                <TextAreaInput id='description' value={agentBulkPayment.description} onChange={(value) =>
                                     setAgentBulkPayment({...agentBulkPayment,description:value})
                                    // console.log("first")
                                }
                                />
                            </UpdateContentBox>
                        </div>
                        <div className="grid grid-cols-1 justify-between space-y-6 m-4">
                            <UpdateContentBox>
                                <SubHeading1 text=" Amount :" />
                                <UnlabeledInput
                                    
// type="number"
                    
                                    value={agentBulkPayment.amount}
                                    onchange={(value) =>
                                        setAgentBulkPayment({ ...agentBulkPayment, amount: parseInt(value) })
                                        
                                    }
                                />
                            </UpdateContentBox>

                            <div className="grid grid-cols-2 gap-0 place-items-center p-2">
                                <GreenButton
                                    text={"Submit"}
                                    onClick={() => {
                                        props.onClickCreate(agentBulkPayment);
                                        props.onClose();
                                    }}
                                />
                                <GreenButton
                                    text={"Cancel"}
                                onClick={() => {
                                   
                                  props.onClose();
                                }}
                                />
                            </div>
                        </div>
                    </div>


                </div>

            {/* </div> */}
        </Box>




    )
}