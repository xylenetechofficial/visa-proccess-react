import { useEffect, useState } from "react";
import { updateBank } from "../repository";
import { BankInterface } from "../type";
import { VisaAuthorisationInterface } from "../../visaAuthorization/type";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";

export default function Main(props: { bank: BankInterface, onClose: any, fetchBankList: any, visaAuthorisationList: VisaAuthorisationInterface[] }) {
    const [name, setName] = useState('')
    const [visaAuthorisation, setVisaAuthorisation] = useState(0)


    async function onClickSave() {

        // call update
        await updateBank(props.bank.id ?? 0, {
            name: name,
            visaAuthorisation: visaAuthorisation
        })

        props.fetchBankList()
        props.onClose()
    }

    useEffect(() => {
        setName(props.bank.name)
        setVisaAuthorisation(props.bank.visaAuthorisation)
    }, [])

    return (

        <ModalContent
            buttonName="Update"
            handleClick={onClickSave}
            title="Update Bank"
            onClose={props.onClose}
        >


            {/* name Input */}
            <StandardInput
                label="Name"
                value={name}
                onChangeValue={(value: string) => {
                    setName(value);
                }}
            />

           

            {/* visaa authorisation */}
            <CustomSelectComponent
                value={visaAuthorisation}
                label="Visa Authorisation"
                options={
                    selectOptionConveter({ options: props.visaAuthorisationList, options_struct: { name: "name", value: "id" } })}

                onChange={(value) => {
                    setVisaAuthorisation(value)

                }} />

           
          
        </ModalContent>
    )
}