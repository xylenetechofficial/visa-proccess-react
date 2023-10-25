import { useEffect, useState } from "react";
import { TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { Box } from "@mui/material";
import { GreenButton } from "../../../../componenets/CustomButton";
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
import { readAgentList } from "../../../masters/agent/repository";


export default function Main(props: {
    onClose: () => void,
    fetchAccountDashboardList: () => void,
    currentElement: any,
    onClickUpdate:any

}) {
    console.log(props?.currentElement, "ALLLLLLLLL");
    const [data, setData]= useState(props?.currentElement);
    const [updateData,setUpdateData]= useState({})
    const [currentID, setCurrentID]= useState<any>();
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
    const [agentList,setAgentList]= useState([])
    const agentLocater= async()=>{
       const data:any = await readAgentList(true);
       console.log(data,"agent")
       setAgentList(data)
    }

    // const currentAgent =()=> agentList.find((ele:any)=> ele?.id===data.agent_id)
    const currentAgent = (data:any) => {
        const foundAgent :any = agentList.find((ele:any) => ele?.id === data.agent_id);
        if (foundAgent) {
          console.log(foundAgent.id);
          setCurrentID(foundAgent.id)
        }
      };
    useEffect(()=>{
        agentLocater();
        currentAgent(data)
    },[])
    
    return (

          <Box sx={style}>
            <div className="text-xl p-3 font-bold text-gray-500 uppercase bg-[#F1F2F6] dark:bg-gray-500 dark:text-gray-500 w-auto">
                    edit  Agent Bulk payment
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
                            value={data.agent_id}
                            options={selectOptionConveter({
                                
                                options: agentList,
                                options_struct: { name: "name", value: "id" },
                            })}
                            onChange={(value) => {
                                   setData({
                                    ...data,
                                    agent_id:parseInt(value)
                                })
                                console.log(value)
                            }
                            } />
                    </UpdateContentBox>
                    <UpdateContentBox>
                        <SubHeading1 text="description of payment :" />
                        <TextAreaInput id='description' value={data?.description}
                            onChange={(value) => { 
                                //  setAgentBulkPayment({...agentBulkPayment,description:value})
                                // console.log("first")
                                // setUpdateData({
                                //     ...updateData,
                                //     description:parseInt(value)
                                // })
                                setData({
                                    ...data,
                                    description:value
                                })
                            }
                        }
                        />
                    </UpdateContentBox>
                </div>
                <div className="grid grid-cols-1 justify-between space-y-6 m-4">
                    <UpdateContentBox>
                        <SubHeading1 text=" Amount :" />
                        <UnlabeledInput
                            
// type="number"
                    
                            value={data.amount}
                            onchange={(value) => 
                                // setAgentBulkPayment({ ...agentBulkPayment, amount: parseInt(value) })
                                // setUpdateData({
                                //     ...updateData,
                                //     amount:parseInt(value)
                                // })
                                setData({
                                    ...data,
                                    amount:parseInt(value)
                                })
                            }
                        />
                    </UpdateContentBox>


                </div>
                </div> 
                <div className=" flex justify-center">

                    <GreenButton text="Submit" onClick={() => { console.log("agentPaymentReceivedList", "AAAA"), props.onClose(),props.onClickUpdate(data.id,data)}} />
                    <GreenButton text="Back" onClick={() => props.onClose()} />

                </div>
            </div>
        </Box>



        // </FullScreenModal>
    )
}