import { useEffect, useState } from "react";
import CreateModal from './Create'
import EditModal from './Edit'
import { Box, Button, Icon, IconButton, TextField, styled } from "@mui/material";
import AgentSpecialNoteTable from "./Table";
import { confirmationMessage, showMessage } from "../../../../utils/alert";
import { Heading1, Heading3 } from "../../../../componenets/CoustomHeader";
import { GreenButton, YellowButton } from "../../../../componenets/CustomButton";
import { CustomButton, CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { AgentSpecialNoteInterface } from "../type";
import { deleteAgentSpecialNote, readAgentSpecialNoteList } from "../repository";
import { AgentInterface } from "../../agent/type";
import { readAgentList } from "../../agent/repository";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {
    const [agentSpecialNoteList, setAgentSpecialNoteList] = useState<AgentSpecialNoteInterface[]>([])

    const [editAgentSpecialNote, setEditAgentSpecialNote] = useState<AgentSpecialNoteInterface>({} as AgentSpecialNoteInterface)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")
    const filterData = (query: string, data: AgentSpecialNoteInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.note.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, agentSpecialNoteList);

    const [agentList, setAgentList] = useState<AgentInterface[]>([])

    const fetchAgentList = async () => {
        const data = await readAgentList();
        setAgentList(data)
    }
    useEffect(() => {
        fetchAgentList()
    }, [])
    const onClickCreate = () => {
        setModalName('create');

    }

    const onClickEdit = (agentSpecialNote: AgentSpecialNoteInterface) => {
        setEditAgentSpecialNote(agentSpecialNote)
        console.log("onClickEdit");   // Only Dev
        console.log(agentSpecialNote);   // Only Dev
        setModalName('edit')
    }

    const onClickDelete = async (agentSpecialNote: AgentSpecialNoteInterface) => {
        const flag = await confirmationMessage("Do you really want to delete?")
        if (flag && agentSpecialNote.id) {
            await deleteAgentSpecialNote(agentSpecialNote.id);
            fetchAgentSpecialNoteList()
        }
    }

    // useEffect(() => {
    // }, [editAgentSpecialNote, modalName])

    const fetchAgentSpecialNoteList = async () => {
        setAgentSpecialNoteList(await readAgentSpecialNoteList(true))
    }
    useEffect(() => {

        fetchAgentSpecialNoteList()

    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Agent Special Note" searchFunction={(query) => setSearchQuery(query)} />
            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

                <GreenButton text={"Add +"} onClick={() => {
                    setModalName("create")
                }} />

            </CardHeader>


            {/*  agentSpecialNote stable */}
            <AgentSpecialNoteTable
                agentSpecialNoteList={dataFiltered}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
                agentList={agentList}
            />

            {/* <!-- Modal --> */}

            {/* Create */}
            {modalName !== "create" ? "" : <CreateModal onClose={() => setModalName("")} fetchAgentSpecialNoteList={fetchAgentSpecialNoteList} agentList={agentList} />}

            {/* Edit */}
            {modalName !== "edit" ? "" : <EditModal agentSpecialNote={editAgentSpecialNote} onClose={() => setModalName("")} fetchAgentSpecialNoteList={fetchAgentSpecialNoteList} agentList={agentList}
            />}
        </div>
    )
}