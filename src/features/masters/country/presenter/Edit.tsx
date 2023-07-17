import { useEffect, useState } from "react";
import { updateCountry } from "../repository";
import { CountryInterface } from "../type";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";


export default function Main(props: { country: CountryInterface, onClose: any, fetchCountryList: any }) {
    const [name, setName] = useState('')





    async function onClickSave() {

        // call update
        await updateCountry(props.country.id ?? 0, {
            name: name,
        })

        props.fetchCountryList()
        props.onClose()
    }

    useEffect(() => {
        setName(props.country.name)

    }, [])

    return (
        <ModalContent
            buttonName="Update"
            handleClick={onClickSave}
            title="Update Country"
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