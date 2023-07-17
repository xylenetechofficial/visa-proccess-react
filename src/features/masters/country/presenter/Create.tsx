import { createCountry } from "../repository";
import { useState } from "react";
import { StandardInput } from "../../../../componenets/Input";
import ModalContent from "../../../../componenets/Modal";


export default function Main(props: { onClose: any, fetchCountryList: any }) {
    const [name, setName] = useState('')

    async function onClickAdd() {

        // call create
        await createCountry({
            name: name,
        })


        setName('')

        props.fetchCountryList()
    }

    return (
        <ModalContent
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add Country"
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

        </ModalContent>



    )
}