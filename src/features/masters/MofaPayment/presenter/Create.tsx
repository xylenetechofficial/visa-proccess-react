import { createMofaPayment } from "../repository";
import { useState, useEffect } from "react";
import ModalContent from "../../../../componenets/Modal";
import { DateInput, StandardInput } from "../../../../componenets/Input";
import { VisaAuthorisationInterface } from "../../visaAuthorization/type";
import { readVisaAuthorisationList } from "../../visaAuthorization/repository";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";


export default function Main(props: { onClose: any, fetchMofaPaymentList: any }) {
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
    async function onClickAdd() {

        // call create
        await createMofaPayment({
            date: date,
            narration: narration,
            payment: payment,
            visa_authorisation_id: visa_authorisation_id
        })


        set_visa_authorisation_id(0)
        set_payment(0)
        set_date('')
        set_narration('')

        props.fetchMofaPaymentList()
        props.onClose()
    }

    return (

        <ModalContent
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add Mofa Payment"
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
                
// type="number"
                    
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