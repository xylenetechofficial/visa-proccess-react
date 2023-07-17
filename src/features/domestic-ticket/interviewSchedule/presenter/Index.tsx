import { useEffect, useState } from "react";
import CreateModal from './Create'
import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import InterviewScheduleTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { InterviewScheduleInterface } from "../type";
import { deleteInterviewSchedule, readInterviewScheduleList } from "../repository";
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
    const [interviewScheduleList, setInterviewScheduleList] = useState<InterviewScheduleInterface[]>([])

    const [editInterviewSchedule, setEditInterviewSchedule] = useState<InterviewScheduleInterface>({} as InterviewScheduleInterface)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")


    const [dataFiltered, setDataFiltered] = useState<InterviewScheduleInterface[]>([])

    const filterData = (query: string, data: InterviewScheduleInterface[]) => {
        if (!query) {
            setDataFiltered(data)
            return;
        } else {
            const d = data.filter((d) =>
                d.staff.toLowerCase().includes(query.toLowerCase())
            );
            setDataFiltered(d);
            return;
        }
    };

    const searchFunction = async (query: string) => {
        filterData(query, interviewScheduleList)

    }




    const onClickEdit = (interviewSchedule: InterviewScheduleInterface) => {
        setEditInterviewSchedule(interviewSchedule)
        console.log("onClickEdit");   // Only Dev
        console.log(interviewSchedule);   // Only Dev
        setModalName('edit')
    }

    const onClickDelete = async (interviewSchedule: InterviewScheduleInterface) => {
        const flag = await confirmationMessage("Do you really want to delete?")
        if (flag && interviewSchedule.id) {
            await deleteInterviewSchedule(interviewSchedule.id);
            fetchInterviewScheduleList()
        }
    }

    // useEffect(() => {
    // }, [editInterviewSchedule, modalName])

    const fetchInterviewScheduleList = async () => {
        const data = await readInterviewScheduleList()
        setInterviewScheduleList(data)
        filterData("", data)
    }
    const [companyList, setCompanyList] = useState<CompanyInterface[]>([])

    const fetchCompanyList = async () => {
        const data = await readCompanyList();
        setCompanyList(data)
    }


    const [interviewschedulePeriodList, setInterviewschedulePeriodList] = useState<InterviewSchedulePeriodInterface[]>([])
    const fetchInterviewSchedulePeriodList = async () => {
        const data = await readInterviewSchedulePeriodList();
        setInterviewschedulePeriodList(data);
    }

    const [sectorList, setSectorList] = useState<SectorInterface[]>([])

    const fetchSectorList = async () => {
        const data = await readSectorList();
        setSectorList(data)
    }
    useEffect(() => {
        fetchInterviewSchedulePeriodList()
        fetchInterviewScheduleList()
        fetchCompanyList()
        fetchSectorList()
    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Interview Schedule" searchFunction={searchFunction} />
            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

                {/* Add */}
                <GreenButton text={"Add +"} onClick={() => {
                    setModalName("create")
                }} />

            </CardHeader>


            {/*  interviewSchedule stable */}
            <InterviewScheduleTable
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
                    fetchInterviewScheduleList={fetchInterviewScheduleList}
                    InterviewSchedulePeriodList={interviewschedulePeriodList}
                    sectorList={sectorList}
                />}

            {/* Edit */}
            {modalName !== "edit" ? "" :
                <EditModal
                    companyList={companyList}
                    currentElement={editInterviewSchedule}
                    onClose={() => setModalName("")}
                    fetchInterviewScheduleList={fetchInterviewScheduleList}
                    InterviewSchedulePeriodList={interviewschedulePeriodList}
                    sectorList={sectorList}
                />}
        </div>
    )
}