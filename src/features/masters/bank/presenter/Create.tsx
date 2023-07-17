import { createBank } from "../repository";
import { useState } from "react";
import { VisaAuthorisationInterface } from "../../visaAuthorization/type";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";

export default function Main(props: { onClose: any, fetchBankList: any, visaAuthorisationList: VisaAuthorisationInterface[] }) {
    const [name, setName] = useState('')
    const [visaAuthorisation, setVisaAuthorisation] = useState(0)

    async function onClickAdd() {

        // call create
        await createBank({
            name: name,
            visaAuthorisation: visaAuthorisation
        })


        setName('')

        props.fetchBankList()
    }

    return (

        <ModalContent
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add Bank"
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