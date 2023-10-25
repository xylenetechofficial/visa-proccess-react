import {  createCandidateAdvancePayment } from "../repository";
import { useEffect, useState } from "react";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { DateInput, FileInput, StandardInput, TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";
import { SectorInterface } from "../../../masters/sector/type";
import { CompanyInterface } from "../../../masters/company/type";
import {  CandidateAdvancePaymentInterface } from "../type";
import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { CountryInterface } from "../../../masters/country/type";

import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { readVisaAuthorisationList } from "../../../masters/visaAuthorization/repository";
import { VisaAuthorisationInterface } from "../../../masters/visaAuthorization/type";
import { OPManagerList, rcList, recruitManagerList } from "../../../job-dpt/db/user";
import CandidateAdvancePaymentTable from "./CandidateAdvancePaymentTable";
import { GreenButton } from "../../../../componenets/CustomButton";
import { convertDateFormat } from "../../../../utils/function";



export default function Main(props: {
    onClose: any,
    readAdvancePaymentList: any,   
    }) {

    const initValue: CandidateAdvancePaymentInterface = {
        name:"",
        passport_no:"",
        amount:0,
        received_date:"",
        remarks:""
    }

    const [AgentPayment, setAgentPayment] = useState(initValue)
    const [candidateAdvancePayment, setCandidateAdvancePayment] = useState(initValue)
    



    async function onClickAdd() {

        // call create
        // const newArray = { ...AgentPayment, visaProfessionList: visaProfessionList }
        const newArray = { ...candidateAdvancePayment}
        const flag = await createCandidateAdvancePayment(candidateAdvancePayment)

        if (!flag) {
            return;
        }
        setAgentPayment(initValue)
        // setVisaProfessionList([])
        props.readAdvancePaymentList()
    }
    const [visaAuhorisationList, setvisaAuhorisationList] = useState<VisaAuthorisationInterface[]>([])
    const fetchvisaAuhorisationList = async () => {
        const data = await readVisaAuthorisationList();
        if (data) {
            // setvisaAuhorisationList(data);
        }
    }
    useEffect(() => {
        fetchvisaAuhorisationList();

    }, [])

    return (

        <FullScreenModal
            // buttonName="Submit"
            handleClick={onClickAdd}
            title="Candidate Advance Payment Details"
            onClose={props.onClose}
        >

            <div className=" grid grid-cols-1 py-3  gap-2 shadow">

                <UpdateContentBox>

                    <SubHeading1 text="Candidate Name :" />
                    <UnlabeledInput
                        value={candidateAdvancePayment.name}
                        onchange={(value) =>{ setCandidateAdvancePayment({ ...candidateAdvancePayment, name: value ,received_date:convertDateFormat(String(new Date))})}}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="Passport no:" />
                    <UnlabeledInput
                        value={candidateAdvancePayment.passport_no}
                        onchange={(value) => setCandidateAdvancePayment({ ...candidateAdvancePayment, passport_no: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="Advance Amount :" />
                    <UnlabeledInput
                        
// type="number"
                    
                        value={candidateAdvancePayment.amount}
                        onchange={(value) => setCandidateAdvancePayment({ ...candidateAdvancePayment, amount: parseInt(value) })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>
                    <SubHeading1 text="Remarks :" />
                    <TextAreaInput
                        id="remarks"
                        value={candidateAdvancePayment.remarks}
                        onChange={(value) => setCandidateAdvancePayment({ ...candidateAdvancePayment, remarks: value })} />
                </UpdateContentBox>
                <div className="flex justify-center p-2">
                    

                        <GreenButton text="Submit" onClick={()=>{onClickAdd()}}/>
                        <GreenButton text="Cancel" onClick={()=>{props.onClose()}}/>
                    
                </div>


                <CandidateAdvancePaymentTable CandidateAdvancePaymentList={[candidateAdvancePayment]} onChange={() => { console.log("first") }} />
            </div>




        </FullScreenModal>
    )
}