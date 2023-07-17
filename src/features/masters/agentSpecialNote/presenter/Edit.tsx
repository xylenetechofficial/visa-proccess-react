import { useEffect, useState } from "react";
import { updateAgentSpecialNote } from "../repository";
import { AgentSpecialNoteInterface } from "../type";
import { AgentInterface } from "../../agent/type";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import ModalContent from "../../../../componenets/Modal";
import { DateInput, TextAreaInput } from "../../../../componenets/Input";






export default function Main(props: { agentSpecialNote: AgentSpecialNoteInterface, onClose: any, fetchAgentSpecialNoteList: any, agentList: AgentInterface[] }) {
    const [name, setName] = useState('')

    const initialValue: AgentSpecialNoteInterface = {
        agent: 0,
        date: "",
        note: ""
    }
    const [agentSpecialNote, setAgentSpecialNote] = useState<AgentSpecialNoteInterface>(initialValue)



    async function onClickSave() {

        // call update
        await updateAgentSpecialNote(props.agentSpecialNote.id ?? 0, {
            agent: agentSpecialNote.agent,
            date: agentSpecialNote.date,
            note: agentSpecialNote.note
        })

        props.fetchAgentSpecialNoteList()
        props.onClose()
    }

    useEffect(() => {
        setAgentSpecialNote(props.agentSpecialNote)

    }, [])

    return (

        <ModalContent
            buttonName="Update"
            handleClick={onClickSave}
            title="Update Agent Special Note"
            onClose={props.onClose}
        >

            {/* agent select */}
            <CustomSelectComponent
                value={agentSpecialNote.agent}
                label="Agent"
                options={
                    selectOptionConveter({ options: props.agentList, options_struct: { name: "name", value: "id" } })}

                onChange={(value) => {
                    setAgentSpecialNote({ ...agentSpecialNote, agent: value })

                }} />

            {/* date */}
            <DateInput
                id="agent_special_note_date"
                label="Date"
                value={agentSpecialNote.date}
                onChange={(value) => {
                    setAgentSpecialNote({ ...agentSpecialNote, date: value })
                }}
            />
            {/* note */}

            <TextAreaInput
                id="agent_special_note_textarea"
                label="Note"
                value={agentSpecialNote.note}
                onChange={(value) => {
                    setAgentSpecialNote({ ...agentSpecialNote, note: value })
                }} />



        </ModalContent>
    )
}