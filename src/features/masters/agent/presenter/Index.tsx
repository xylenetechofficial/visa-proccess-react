import { useEffect, useState } from "react";
import { deleteAgent, readAgentList } from "../repository";
import { AgentInterface } from "../type";
import CreateModal from './Create'
import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import AgentTable from "./AgentTable";
import { confirmationMessage, showMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";

const CardHeader = styled(Box)(() => ({
    display: "flex",

    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {
    const [agentList, setAgentList] = useState<AgentInterface[]>([])

    const [editAgent, setEditAgent] = useState<AgentInterface>({} as AgentInterface)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")
    const filterData = (query: string, data: AgentInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.name.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, agentList);

    const onClickEdit = (agent: AgentInterface) => {
        setEditAgent(agent)
        console.log("onClickEdit");   // Only Dev
        console.log(agent);   // Only Dev
        setModalName('edit')
    }

    const onClickDelete = async (agent: AgentInterface) => {
        const flag = await confirmationMessage("Do you really want to delete?")
        if (flag && agent.id) {
            const res = await deleteAgent(agent.id);
            showMessage(res.message)
            fetchAgentList()
        }
    }

    // useEffect(() => {
    // }, [editAgent, modalName])

    const fetchAgentList = async () => {
        const data = await readAgentList(true);
        filterData("", agentList)
        setAgentList(data)
    }
    useEffect(() => {

        fetchAgentList()

    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Agent" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

                <GreenButton text={"Add +"} onClick={() => {
                    setModalName("create")
                }} />

            </CardHeader>


            {/*  agent stable */}
            <AgentTable
                agentList={dataFiltered}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
            />

            {/* <!-- Modal --> */}

            {/* Create */}
            {modalName !== "create" ? "" :
                <CreateModal onClose={() => setModalName("")} fetchAgentList={fetchAgentList} />}


            {/* Edit */}
            {modalName !== "edit" ? "" : <EditModal agent={editAgent} onClose={() => setModalName("")} fetchAgentList={fetchAgentList}
            />}
        </div>
    )
}