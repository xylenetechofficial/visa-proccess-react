import { useEffect, useState } from "react";
import { updateInterviewMode } from "../repository";
import { InterviewModeInterface } from "../type";
import { CustomSelectComponent } from "../../../../componenets/SelectBox";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";


export default function Main(props: { interviewMode: InterviewModeInterface, onClose: any, fetchInterviewModeList: any }) {
    const [name, setName] = useState('')
    const [selectionType, setSelectionType] = useState("")





    async function onClickSave() {

        // call update
        await updateInterviewMode(props.interviewMode.id ?? 0, {
            name: name,
            selectionType: selectionType
        })

        props.fetchInterviewModeList()
        props.onClose()
    }

    useEffect(() => {
        setName(props.interviewMode.name)
        setSelectionType(props.interviewMode.selectionType)
    }, [])

    return (

        <ModalContent
        buttonName="Update"
        handleClick={onClickSave}
        title="Update Interview Mode"
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