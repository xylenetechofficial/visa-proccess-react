import { useEffect, useState } from "react";
import { updateMofaPayment } from "../repository";
import { MofaPaymentInterface } from "../type";
import ModalContent from "../../../../componenets/Modal";
import { DateInput, StandardInput } from "../../../../componenets/Input";
import { VisaAuthorisationInterface } from "../../visaAuthorization/type";
import { readVisaAuthorisationList } from "../../visaAuthorization/repository";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";


export default function Main(props: { mofaPayment: MofaPaymentInterface, onClose: any, fetchMofaPaymentList: any }) {
    const [visa_authorisation_id, set_visa_authorisation_id] = useState(0)
    const [payment, set_payment] = useState(0)
    const [date, set_date] = useState('')
    const [narration, set_narration] = useState('')


    const [visaAuthorizationList, setVisaAuthorizationList] = useState<VisaAuthorisationInterface[]>([])

    const fetchVisaAuthorisation = async () => {
        setVisaAuthorizationList(await readVisaAuthorisationList())
    }
    useEffect(() => {
        fetchVisaAuthorisation()
    }, [])



    async function onClickSave() {

        // call update
        await updateMofaPayment(props.mofaPayment.id ?? 0, {
            date: date,
            narration: narration,
            payment: payment,
            visa_authorisation_id: visa_authorisation_id
        })

        props.fetchMofaPaymentList()
        props.onClose()
    }

    useEffect(() => {
        set_visa_authorisation_id(props.mofaPayment.visa_authorisation_id)
        set_payment(props.mofaPayment.payment)
        set_date(props.mofaPayment.date)
        set_narration(props.mofaPayment.narration)

    }, [])

    return (

        <ModalContent
            buttonName="Update"
            handleClick={onClickSave}
            title="Update Mofa Payment"
            onClose={props.onClose}
        >

            <CustomSelectComponent
                value={visa_authorisation_id}
                label="Visa Authorisation"
                options={
                    selectOptionConveter({
                        options: visaAuthorizationList,
                        options_struct: { name: "name", value: "id" }
                    })}

                onChange={(value) => {
                    set_visa_authorisation_id(value)

                }} />


            {/* mofaPayment Input */}
            <StandardInput
                label="Payment"
                
type="number"
                    
                value={payment}
                onChangeValue={(value: string) => {
                    set_payment(parseInt(value));
                }}
            />

            {/* mofaPayment Input */}
            <DateInput
                label="Date"
                value={date}
                onChange={(value: string) => {
                    set_date(value);
                }}
                id="sfvhstydu"
            />

            <StandardInput
                label="Narration"
                type="text"
                value={narration}
                onChangeValue={(value: string) => {
                    set_narration(value);
                }}
            />


        </ModalContent>
    )
}