import { Box, Modal, styled } from "@mui/material";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { GreenButton } from "../../../../componenets/CustomButton";
import { UnlabeledInput } from "../../../../componenets/Input";
import { useState } from "react";

export default function Main(props:{
    setModalName:(value:boolean)=>void
}){
    const [paymentValue,setPaymentValue]=useState('')
    const CardHeader = styled(Box)(() => ({
        display: "flex",
        flexWrap: "wrap",
        paddingRight: "24px",
        marginBottom: "18px",
        alignItems: "center",
        justifyContent: "space-between",
      }));
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
    <>
   <Modal open={true}
            onClose={() => props.setModalName(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
              
        <Box sx={style}>
              <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">Agent Commission</h3>
            <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => props.setModalName(false)}
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
                    <SubHeading1 text="Candidate Name   :" />
                    <SubHeading1 text={""} />
                </UpdateContentBox>


                <UpdateContentBox>
                    <SubHeading1 text="Agent Name   :" />
                    <SubHeading1 text={""} />
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text="Date  :" />
                    <SubHeading1 text={""} />
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text="Payment Received   :" />
                    <UnlabeledInput placeholder="Enter payment received amount" value={paymentValue} onchange={(value)=>setPaymentValue(value)}/>
                </UpdateContentBox>
          
                <div className=" flex justify-center">

                    <GreenButton text="Submit" onClick={()=>{console.log("agentPaymentReceivedList","AAAA"),props.setModalName(false)}}/>
                    <GreenButton text="Back" onClick={()=>{props.setModalName(false)}}/>

                </div>
            </div>
        </Box>


                </Modal>
    </>
)
}