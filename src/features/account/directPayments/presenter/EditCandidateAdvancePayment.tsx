
import { useState } from "react";
import ModalContent from "../../../../componenets/Modal";
import { DateInput, StandardInput } from "../../../../componenets/Input";

import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CompanyInterface } from "../../../masters/company/type";
import { RedButton } from "../../../../componenets/CustomButton";


export default function Main(props: {
    onClose: any,
    fetchcandidateAdvancePaymentList: any,
    singleAdvancePaymentList:any
    setSingleAdvancePaymentEdit:any
   
}) {
    const [candidateAdvancePayment, setCandidateAdvancePayment] = useState({
        company:'',
        fromDate:'',
        toDate:'',


    })
    const onClickAdd =()=>{
        console.log("call the api")
        props.onClose()
    }
    return (

        <ModalContent
            title="Edit Candidate Advance Payment"
            onClose={props.onClose}
            buttonName="Save"
            handleClick={onClickAdd}
        >

         <StandardInput  value={props.singleAdvancePaymentList.name} label="Name" type="text" onChangeValue={(value:string)=>props.setSingleAdvancePaymentEdit({ ...props.singleAdvancePaymentList, name: value })}/>
         <StandardInput  value={props.singleAdvancePaymentList.passport_no} label="Passport" type="text" onChangeValue={(value:string)=>props.setSingleAdvancePaymentEdit({ ...props.singleAdvancePaymentList, passport_no: value })}/>
         <StandardInput  value={props.singleAdvancePaymentList.amount} label="Advance Amount" type="number" onChangeValue={(value:string)=>props.setSingleAdvancePaymentEdit({ ...props.singleAdvancePaymentList, amount: value })}/>
         <DateInput
                id="candidateAdvancePaymentFromdate"
                label="Received Date date"
                required
                onChange={(value: string) => props.setSingleAdvancePaymentEdit({ ...props.singleAdvancePaymentList, received_date: value })}
                value={props.singleAdvancePaymentList.received_date}
            />
         <StandardInput  value={props.singleAdvancePaymentList.remarks} label="Remarks" type="text" onChangeValue={(value:string)=>console.log(value)}/>
           
        </ModalContent>


    )
}