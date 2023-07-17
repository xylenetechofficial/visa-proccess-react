import { useEffect, useState } from "react";
import { updateInterviewSector } from "../repository";
import { InterviewSectorInterface } from "../type";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";

export default function Main(props: { interviewSector: InterviewSectorInterface, onClose: any, fetchInterviewSectorList: any }) {
    const [name, setName] = useState('')

    async function onClickSave() {

        // call update
        await updateInterviewSector(props.interviewSector.id ?? 0, {
            name: name,
        })

        props.fetchInterviewSectorList()
        props.onClose()
    }

    useEffect(() => {
        setName(props.interviewSector.name)

    }, [])

    return (

        <ModalContent
            buttonName="Update"
            handleClick={onClickSave}
            title="Update Interview Sector"
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