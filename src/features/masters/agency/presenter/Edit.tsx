import { useEffect, useState } from "react";
import { updateAgency } from "../repository";
import { AgencyInterface } from "../type";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";




export default function Main(props: { agency: AgencyInterface, onClose: any, fetchAgencyList: any }) {
    const [name, setName] = useState('')





    async function onClickSave() {

        // call update
        await updateAgency(props.agency.id ?? 0, {
            name: name,
        })

        props.fetchAgencyList()
        props.onClose()
    }

    useEffect(() => {
        setName(props.agency.name)

    }, [])

    return (

        <ModalContent
            title="Update Agency"
            onClose={props.onClose}
            buttonName="Update"
            handleClick={onClickSave}
        >


            {/* name Input */}
            <StandardInput
                value={name}
                onChangeValue={(e: string) => {
                    setName(e)
                }}
                label="Agency Name"
            />


        </ModalContent>
    )
}