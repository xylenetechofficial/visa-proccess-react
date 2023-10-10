import { createInterviewSector } from "../repository";
import { useState } from "react";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";

export default function Main(props: { onClose: any, fetchInterviewSectorList: any }) {
    const [name, setName] = useState('')




    async function onClickAdd() {

        // call create
        await createInterviewSector({
            name: name,
        })


        setName('')

        props.fetchInterviewSectorList()
        props.onClose()
    }

    return (
        <ModalContent
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add Interview Sector"
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