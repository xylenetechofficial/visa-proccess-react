import { useEffect, useState } from "react";
import CreateModal from './Create'
import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { MofaPaymentInterface, AgentReturnPaymentInterface } from "../type";
import { readAgentReturnPaymentList, readMofaPaymentList } from "../repository";
import Table from "./Table";
import { GreenButton } from "../../../../componenets/CustomButton";
// import { Heading6 } from "../../../../componenets/CoustomHeader";
// import MofaPaymentTable from "./MofaPaymentTable";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));
const initValue: AgentReturnPaymentInterface = {
    id: 0,
    agent_id: 0,
    agent_name: '',
    amount: 0,
    description: '',
    created_at: '',
}
export default function Main() {
    const [CandidateList, setCandidateList] = useState<AgentReturnPaymentInterface[]>([])
    const [currentElement, setCurrentElement] = useState<AgentReturnPaymentInterface>(initValue)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")

    const filterData = (query: string, data: AgentReturnPaymentInterface[]) => {
        // if (!query) {
        // return data;
        // } else {
        // return data.filter((d) =>
        //     d.name.toLowerCase().includes(query.toLowerCase())
        // );
        // }
        return data;

    };
    const dataFiltered = filterData(searchQuery, CandidateList);

    const onClickCreate = () => {
        setModalName('create');

    }

    const onClickEdit = (ele: AgentReturnPaymentInterface) => {
        setCurrentElement(ele)
        setModalName('edit');
    }

    const onClickAdd = async (ele: AgentReturnPaymentInterface) => {
        setCurrentElement(ele);
        setModalName('add');
    }
    
    // useEffect(() => {
    // }, [editIndexVisa, modalName])



    const fetchAgentReturnPaymentList = async () => {
        const data = await readAgentReturnPaymentList("yes");
        console.log(data);
        setCandidateList(data)
    }

    useEffect(() => {
        fetchAgentReturnPaymentList()
    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Manage Agent Payment Return" searchFunction={(query) => setSearchQuery(query)}
                refresh={() => {
                    fetchAgentReturnPaymentList()
                }} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
                <GreenButton onClick={() => setModalName("add")} text="Add" />
            </CardHeader>

            <Table
                candidateList={CandidateList}
                onClickAdd={onClickAdd}
                onClickEdit={onClickEdit}
                fetchAgentReturnPaymentList={fetchAgentReturnPaymentList}
            />

            {/* <!-- Modal --> */}

            {/* Create */}
            {modalName !== "add" ? "" :
                <CreateModal
                    onClose={() => {
                        fetchAgentReturnPaymentList()
                        setModalName("")
                    }}
                    fetchAgentReturnPaymentList={fetchAgentReturnPaymentList}
                />}

            {/* Edit */}
            {modalName !== "edit" ? "" :
                <>
                    <EditModal
                    currentElement={currentElement}
                    onClose={() => {
                        fetchAgentReturnPaymentList()
                        setModalName("")
                    }}
                    fetchAgentReturnPaymentList={fetchAgentReturnPaymentList}
                />
                </>
            }
        </div>
    )
}