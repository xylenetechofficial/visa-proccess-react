import { createAgentSpecialNote } from "../repository";
import { useState } from "react";
import { AgentInterface } from "../../agent/type";
import { AgentSpecialNoteInterface } from "../type";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { DateInput, TextAreaInput } from "../../../../componenets/Input";
import ModalContent from "../../../../componenets/Modal";





export default function Main(props: { onClose: any, fetchAgentSpecialNoteList: any, agentList: AgentInterface[] }) {

    const initialValue: AgentSpecialNoteInterface = {
        agent: 0,
        date: "",
        note: ""
    }
    const [agentSpecialNote, setAgentSpecialNote] = useState<AgentSpecialNoteInterface>(initialValue)


    async function onClickAdd() {

        // call create
        await createAgentSpecialNote({
            agent: agentSpecialNote.agent,
            date: agentSpecialNote.date,
            note: agentSpecialNote.note
        })


        setAgentSpecialNote(initialValue)

        props.fetchAgentSpecialNoteList()
        props.onClose()
    }

    return (

        <ModalContent
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add Special Note"
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
            <DateInput id="agent_special_note_date_id"
                label="Date"
                value={agentSpecialNote.date}
                onChange={(value) => {
                    setAgentSpecialNote({ ...agentSpecialNote, date: value })
                }}
            />
            {/* note */}

            <TextAreaInput id="agent_special_note_textarea_id"
                label="Note"
                value={agentSpecialNote.note}
                onChange={(value) => {
                    setAgentSpecialNote({ ...agentSpecialNote, note: value })
                }} />



        </ModalContent>
    )
}