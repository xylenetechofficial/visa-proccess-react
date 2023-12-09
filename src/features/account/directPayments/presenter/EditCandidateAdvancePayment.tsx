
import { useEffect, useState } from "react";
import ModalContent from "../../../../componenets/Modal";
import { DateInput, StandardInput } from "../../../../componenets/Input";

import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CompanyInterface } from "../../../masters/company/type";
import { RedButton } from "../../../../componenets/CustomButton";
import { AdvancePaymentInterface } from "../type";
import { updateAdvancePayment } from "../repository";


export default function Main(props: {
    onClose: any,
    fetchcandidateAdvancePaymentList: any,
    singleAdvancePaymentList: any
    setSingleAdvancePaymentEdit: any

}) {
    const [candidateAdvancePayment, setCandidateAdvancePayment] = useState<AdvancePaymentInterface>({
        id: 0,
        name: '',
        amount: 0,
        passport_no: '',
        received_date: '',
        remarks: '',
        used: '',
        created_at: '',
        updated_at: "",
    })
    const onClickAdd = async () => {
        const flag = await updateAdvancePayment(candidateAdvancePayment)
        console.log("Update Status");   // Only Dev
        console.log("flag: ", flag ? "true" : "false");   // Only Dev
        // if (!flag) return
        props.onClose()
    }

    useEffect(() => {
        setCandidateAdvancePayment(props.singleAdvancePaymentList);
    }, [props.singleAdvancePaymentList]);

    return (

        <ModalContent
            title="Edit Candidate Advance Payment"
            onClose={props.onClose}
            buttonName="Save"
            handleClick={onClickAdd}
        >

            <StandardInput value={candidateAdvancePayment.name} label="Name" type="text" onChangeValue={(value: string) => setCandidateAdvancePayment({ ...candidateAdvancePayment, name: value })} />
            <StandardInput value={candidateAdvancePayment.passport_no} label="Passport" type="text" onChangeValue={(value: string) => setCandidateAdvancePayment({ ...candidateAdvancePayment, passport_no: value })} />
            <StandardInput value={candidateAdvancePayment.amount} label="Advance Amount" type="number" onChangeValue={(value: number) => setCandidateAdvancePayment({ ...candidateAdvancePayment, amount: value })} />
            {/* <DateInput
                id="candidateAdvancePaymentFromdate"
                label="Received Date date"
                required
                onChange={(value: string) => props.setSingleAdvancePaymentEdit({ ...candidateAdvancePayment, received_date: value })}
                value={candidateAdvancePayment.received_date}
            /> */}
            <StandardInput value={candidateAdvancePayment.remarks} label="Remarks" type="text" onChangeValue={(value: string) => setCandidateAdvancePayment({ ...candidateAdvancePayment, remarks: value })} />

        </ModalContent>


    )
}