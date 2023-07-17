import { createInterviewMode } from "../repository";
import { useState } from "react";
import { CustomSelectComponent } from "../../../../componenets/SelectBox";
import { StandardInput } from "../../../../componenets/Input";
import ModalContent from "../../../../componenets/Modal";


export default function Main(props: { onClose: any, fetchInterviewModeList: any }) {
    const [name, setName] = useState('')
    const [selectionType, setSelectionType] = useState("")



    async function onClickAdd() {

        // call create
        await createInterviewMode({
            name: name,
            selectionType: selectionType
        })


        setName('')

        props.fetchInterviewModeList()
    }

    return (
        <ModalContent
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add Interview Mode"
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
          
            {/* selection type */}
            <CustomSelectComponent
                value={selectionType}
                label="Selection Type"
                options={
                    [{ name: "SOUNDLINES SELECTION", value: "SOUNDLINES SELECTION" },
                    { name: "CLIENT SELECTION", value: "CLIENT SELECTION" }]
                }

                onChange={(value) => {
                    setSelectionType(value)

                }} />
        </ModalContent>
    )
}