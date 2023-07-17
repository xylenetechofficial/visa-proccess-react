import { useEffect, useState } from "react";
import CreateModal from './Create'
import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import TicketIssueTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { TicketIssueInterface } from "../type";
import { deleteTicketIssue, readTicketIssueList } from "../repository";
import { readCountryList } from "../../../masters/country/repository";
import { readCompanyList } from "../../../masters/company/repository";
import { CompanyInterface } from "../../../masters/company/type";
import { InterviewSchedulePeriodInterface } from "../../interviewSchedulePeriod/type";
import { readInterviewSchedulePeriodList } from "../../interviewSchedulePeriod/repository";
import { SectorInterface } from "../../../masters/sector/type";
import { readSectorList } from "../../../masters/sector/repository";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {
    const [ticketIssueList, setTicketIssueList] = useState<TicketIssueInterface[]>([])

    const [editTicketIssue, setEditTicketIssue] = useState<TicketIssueInterface>({} as TicketIssueInterface)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")


    const filterData = (query: string, data: TicketIssueInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.date.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, ticketIssueList);

    




    const onClickEdit = (interviewSchedule: TicketIssueInterface) => {
        setEditTicketIssue(interviewSchedule)
        console.log("onClickEdit");   // Only Dev
        console.log(interviewSchedule);   // Only Dev
        setModalName('edit')
    }

    const onClickDelete = async (interviewSchedule: TicketIssueInterface) => {
        const flag = await confirmationMessage("Do you really want to delete?")
        if (flag && interviewSchedule.id) {
            await deleteTicketIssue(interviewSchedule.id);
            fetchTicketIssueList()
        }
    }

    // useEffect(() => {
    // }, [editTicketIssue, modalName])

    const fetchTicketIssueList = async () => {
        const data = await readTicketIssueList()
        setTicketIssueList(data)
        filterData("", data)
    }
    const [companyList, setCompanyList] = useState<CompanyInterface[]>([])

    const fetchCompanyList = async () => {
        const data = await readCompanyList();
        setCompanyList(data)
    }


    const [interviewschedulePeriodList, setInterviewschedulePeriodList] = useState<InterviewSchedulePeriodInterface[]>([])
    const fetchTicketIssuePeriodList = async () => {
        const data = await readInterviewSchedulePeriodList();
        setInterviewschedulePeriodList(data);
    }

    const [sectorList, setSectorList] = useState<SectorInterface[]>([])

    const fetchSectorList = async () => {
        const data = await readSectorList();
        setSectorList(data)
    }
    useEffect(() => {
        fetchTicketIssuePeriodList()
        fetchTicketIssueList()
        fetchCompanyList()
        fetchSectorList()
    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Ticket Issue" searchFunction={(value)=>setSearchQuery(value)} />
            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

                {/* Add */}
                <GreenButton text={"Add +"} onClick={() => {
                    setModalName("create")
                }} />

            </CardHeader>


            {/*  interviewSchedule stable */}
            <TicketIssueTable
                companyList={companyList}
                interviewScheduleList={dataFiltered}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
                InterviewSchedulePeriodList={interviewschedulePeriodList}
                sectorList={sectorList}
            />

            {/* <!-- Modal --> */}

            {/* Create */}
            {modalName !== "create" ? "" :
                <CreateModal
                    companyList={companyList}
                    onClose={() => setModalName("")}
                    fetchTicketIssueList={fetchTicketIssueList}
                    interviewSchedulePeriodList={interviewschedulePeriodList}
                    sectorList={sectorList}
                />}

            {/* Edit */}
            {modalName !== "edit" ? "" :
                <EditModal
                    companyList={companyList}
                    currentElement={editTicketIssue}
                    onClose={() => setModalName("")}
                    fetchTicketIssueList={fetchTicketIssueList}
                    TicketIssuePeriodList={interviewschedulePeriodList}
                    sectorList={sectorList}
                />}
        </div>
    )
}