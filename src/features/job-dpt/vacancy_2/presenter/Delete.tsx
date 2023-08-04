import { useEffect, useState } from "react";

import { FullScreenModal } from "../../../../componenets/Modal";
import { SectorInterface } from "../../../masters/sector/type";
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { readJobOrder, updateJobOrder } from "../repository";
import { InterviewSectorInterface } from "../../../masters/interviewSector/type";
import { InterviewModeInterface } from "../../../masters/interviewMode/type";
import { readInterviewModeList } from "../../../masters/interviewMode/repository";
import { AgentInterface } from "../../../masters/agent/type";
import { readAgentList } from "../../../masters/agent/repository";
import { Heading6, SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { JobOrderInterface } from "../type";
import { ActualProfessionInterface } from "../../Extra/type";
import { convertDateFormat } from "../../../../utils/function";
import FinalActualProfessionTable from "./FinalActualProfessionTableDelete";
import SpecialInstructionTable from "./SpecialInstructionTable";



export default function Main(props: {
    onClose: (val: string) => void,
    fetchJobOrderList: any,
    sectorList: SectorInterface[],
    interviewSectorList: InterviewSectorInterface[]
    companyList: CompanyInterface[],
    countryList: CountryInterface[],
    currentElement: JobOrderInterface,
    setCurrentElement: (e: JobOrderInterface) => void
}) {

    const initValue: JobOrderInterface = {
        type: "",
        date: "",
        CountryId: 0,
        MOL: 0,
        workPermit: 0,
        sectorId: 0,
        bde_id: 0,
        companyId: 0,
        division: "",
        departureSectorId: 0,
        operationManagerId: 0,
        rcId: 0,
        recruitmentManagerId: 0,
        rsId: 0,
        interviewModeId: 0,
        master_sector_ids: [],
        differed_sector_ids: [],

    }
    const [jobOrder, setJobOrder] = useState(initValue)
    const [actualProfesionList, setActualProfesionList] = useState<ActualProfessionInterface[]>([]);
    const [isactualProfessionUpdated, setIsActualProfessionUpdated] = useState("")


    const [interviewModeList, setInterviewModeList] = useState<InterviewModeInterface[]>([])
    const fetchInterviewMode = async () => {
        const data = await readInterviewModeList();
        setInterviewModeList(data)
    }

    const [agentList, setAgentList] = useState<AgentInterface[]>([])
    const fetchAgentList = async () => {
        const data = await readAgentList()
        setAgentList(data)
    }

    async function onClickAdd() {
        await updateJobOrder(props.currentElement.id ?? 0, jobOrder)
        props.fetchJobOrderList()
    }

    const fetchJobOrder = async () => {
        const data = await readJobOrder(props.currentElement.id ?? 0)
        setJobOrder(data)
        setActualProfesionList(data.actualProfesionList ?? [])
        console.log("----------------");   // Only Dev
        console.log(data);   // Only Dev
        setIsActualProfessionUpdated(new Date().toTimeString())
    }


    useEffect(() => {
        fetchInterviewMode()
        fetchJobOrder()
        fetchAgentList()
    }, [])
    return (

        <FullScreenModal
            buttonName="Submit"
            handleClick={onClickAdd}
            title="Edit Vacancy"
            onClose={() => props.onClose('')}
        >


            <div className=" grid grid-cols-1 py-3  gap-2 shadow">

                <UpdateContentBox >
                    <SubHeading1 text="Date :" /> {convertDateFormat(jobOrder.date)}
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text="Type :" /> {jobOrder.type}

                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="Country :" /> {jobOrder.client_country_name ?? ""}
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="BDE :" /> {jobOrder.bde_name ?? ""}
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="Company :" /> {jobOrder.company_name ?? ""}
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="Division :" /> {jobOrder.division}
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="Departure Sector :" /> {props.sectorList.map((sector) => sector.id == jobOrder.sectorId ? sector.name : "")}
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="OP Manager:" /> {jobOrder.operation_manager_name ?? ""}
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="Recruit Manager:" /> {jobOrder.recruitment_manager_name ?? ""}
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="RC :" /> {jobOrder.rs_name ?? ""}
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="RS :" />{jobOrder.rc_name ?? ""}
                </UpdateContentBox>


                {jobOrder.file1_url ? <>
                    <UpdateContentBox>
                        <SubHeading1 text=" File 1 :" />
                        <a href={jobOrder.file1_url} target="_blank" rel="noopener noreferrer">View Uploaded File</a>
                    </UpdateContentBox>

                </> : ""}


                {jobOrder.file2_url ? <>
                    <UpdateContentBox>
                        <SubHeading1 text=" File 2 :" />
                        <a href={jobOrder.file2_url} target="_blank" rel="noopener noreferrer">View Uploaded File</a>
                    </UpdateContentBox>

                </> : ""}



                {jobOrder.file3_url ? <>
                    <UpdateContentBox>
                        <SubHeading1 text=" File 3 :" />
                        <a href={jobOrder.file3_url} target="_blank" rel="noopener noreferrer">View Uploaded File</a>
                    </UpdateContentBox>
                </> : ""}



                {jobOrder.file4_url ? <>
                    <UpdateContentBox>
                        <SubHeading1 text=" File 4 :" />
                        <a href={jobOrder.file4_url} target="_blank" rel="noopener noreferrer">View Uploaded File</a>

                    </UpdateContentBox>
                </> : ""}


                {jobOrder.file5_url ? <>
                    <UpdateContentBox>
                        <SubHeading1 text=" File 5 :" />
                        <a href={jobOrder.file5_url} target="_blank" rel="noopener noreferrer">View Uploaded File</a>

                    </UpdateContentBox>
                </> : ""}

                <UpdateContentBox>
                    <SubHeading1 text="Interview Mode :" />
                    <div className="w-[180px]">
                        <CustomSelectComponentUnlabeled
                            required={true}
                            value={jobOrder.interviewModeId}
                            onChange={(value) => setJobOrder({ ...jobOrder, interviewModeId: value })}
                            options={selectOptionConveter({ options: interviewModeList, options_struct: { name: "name", value: "id" } })}

                        />
                    </div>
                </UpdateContentBox>
                {/* select interview mode */}

            </div>





            <Heading6 text="Final Actual Profession Table " />
            <FinalActualProfessionTable
                isChanged={isactualProfessionUpdated}
                actualProfessionList={actualProfesionList}
                jobOrder={jobOrder}
                onChange={(ele) => setJobOrder({ ...jobOrder, actualProfesionList: ele })}
            />

            <Heading6 text="Special Instruction " />
            <SpecialInstructionTable
                specialInstructionList={jobOrder.specialInstructionList ?? []}
                jobOrder={jobOrder}
                agentList={agentList}
                onChange={(ele) => setJobOrder({ ...jobOrder, specialInstructionList: ele })}
                isChanged={isactualProfessionUpdated}
            />
        </FullScreenModal>
    )
}