import { useEffect, useState } from "react";

import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
// import { DateInput, FileInput, StandardInput } from "../../../../componenets/Input";
import { SectorInterface } from "../../../masters/sector/type";
// import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
// import { BDEList, OPManagerList, rcList, recruitManagerList, rsList } from "../../db/user";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { readJobOrder, updateJobOrder } from "../repository";
import ActualProfessionTable from "./ActualProfessionTable";
import { InterviewSectorInterface } from "../../../masters/interviewSector/type";
import SelectSectorSection from "./SelectSectorSection";
// import { readInterviewSectorList } from "../../../masters/interviewSector/repository";
import { InterviewModeInterface } from "../../../masters/interviewMode/type";
import { readInterviewModeList } from "../../../masters/interviewMode/repository";
// import { GreenButton } from "../../../../componenets/CustomButton";
// import FinalActualProfessionTable from "./FinalActualProfessionTable";
// import SpecialInstructionTable from "./SpecialInstructionTable";
import { AgentInterface } from "../../../masters/agent/type";
import { readAgentList } from "../../../masters/agent/repository";
import { Heading6, SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { JobOrderInterface } from "../type";
import { ActualProfessionInterface } from "../../Extra/type";
import { filter_unique_sector, generate_final_actual_profession, generate_final_actual_profession_v2, get_unique_actual_profession } from "../../Extra/function";
import { convertDateFormat } from "../../../../utils/function";



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
    const [isactualProfessionUpdated, setIsActualProfessionUpdated] = useState("")

    const [selectedMasterSector, setSelectedMasterSector] = useState<InterviewSectorInterface[]>([]);
    const [interviewSectorList, setInterviewSectorList] = useState<InterviewSectorInterface[]>([]);
    const [selectedDifferedSector, setSelectedDifferedSector] = useState<InterviewSectorInterface[]>([]);
    const [actualProfesionList, setActualProfesionList] = useState<ActualProfessionInterface[]>([]);
    const [actualProfesionList_old, setActualProfesionList_old] = useState<ActualProfessionInterface[]>([]);

    // const fetchInterviewSectorList = async () => {
    //     const data = await readInterviewSectorList();
    //     setInterviewSectorList(data)
    // }

    const handleOnClickGenerate = async () => {
        const newarray = await generate_final_actual_profession_v2(actualProfesionList_old ?? [], actualProfesionList, selectedDifferedSector, selectedMasterSector)

        console.log('new actual proffesion')
        console.log(newarray)
        const newJobOrder = jobOrder
        // const oldActualProfesionList = newJobOrder.actualProfesionList ?? [];
        // const newActualProfesionList = [...oldActualProfesionList, ...newarray];
        // newJobOrder.actualProfesionList = newActualProfesionList
        newJobOrder.actualProfesionList = newarray

        const new_differed_array = await filter_unique_sector(selectedDifferedSector, jobOrder.differed_sector_ids);

        const new_master_array = await filter_unique_sector(selectedDifferedSector, jobOrder.differed_sector_ids);


        const master_array = [...jobOrder.master_sector_ids ?? [], ...new_master_array];
        const differed_array = [...jobOrder.differed_sector_ids ?? [], ...new_differed_array];
        const new_job_order = { ...newJobOrder, master_sector_ids: master_array, differed_sector_ids: differed_array }
        props.setCurrentElement(new_job_order)
        props.onClose("edit-2")
    }



    const [interviewModeList, setInterviewModeList] = useState<InterviewModeInterface[]>([])
    const fetchInterviewMode = async () => {
        const data = await readInterviewModeList();
        setInterviewModeList(data)
    }

    // async function onClickAdd() {

    //     console.log(jobOrder)
    //     // call create
    //     await updateJobOrder(props.currentElement.id ?? 0, jobOrder)


    //     // setJobOrder(initValue)

    //     props.fetchJobOrderList()
    //     // props.onClose()
    // }

    const fetchJobOrder = async () => {
        const data = await readJobOrder(props.currentElement.id ?? 0)
        console.log("fetch job order");   // Only Dev
        setJobOrder(data)

        // ? get master and differ sector
        const i_list: InterviewSectorInterface[] = []
        const m_list: InterviewSectorInterface[] = []
        const d_list: InterviewSectorInterface[] = []
        for (let i = 0; i < props.interviewSectorList.length; i++) {
            const element = props.interviewSectorList[i];
            if (props.currentElement.master_sector_ids.includes((element.id ?? 0).toString())) {
                m_list.push(element)
            } else if (props.currentElement.differed_sector_ids.includes((element.id ?? 0).toString())) {
                d_list.push(element)
            } else {
                i_list.push(element)
            }
        }
        setSelectedMasterSector(m_list)
        setInterviewSectorList(i_list)
        setSelectedDifferedSector(d_list)

        setActualProfesionList_old(data.actualProfesionList ?? [])
        setActualProfesionList(await get_unique_actual_profession(data.actualProfesionList ?? []))
        setIsActualProfessionUpdated(new Date().toTimeString())
    }

    const [agentList, setAgentList] = useState<AgentInterface[]>([])
    const fetchAgentList = async () => {
        const data = await readAgentList()
        setAgentList(data)
    }

    useEffect(() => {
        // setJobOrder(props.currentElement)
        // setInterviewSectorList(props.interviewSectorList)
        fetchInterviewMode()
        fetchAgentList()
        fetchJobOrder()

        // fetchInterviewSectorList()

    }, [])
    return (

        <FullScreenModal
            buttonName="Submit"
            handleClick={handleOnClickGenerate}
            title="Add Vacancy"
            onClose={()=>props.onClose('')}
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





            {/* select interview section */}
            <SelectSectorSection
                interviewSector={interviewSectorList}
                selectedDifferedSector={selectedDifferedSector}
                selectedMasterSector={selectedMasterSector}
                changeInterviewSector={(ele) => setInterviewSectorList(ele)}
                changeSelectedDifferedSector={(ele) => setSelectedDifferedSector(ele)}
                changeSelectedMasterSector={(ele) => setSelectedMasterSector(ele)}
            />




            <Heading6 text="Actual Profession Table" />

            <ActualProfessionTable
                actualProfessionList={actualProfesionList}
                jobOrder={jobOrder}
                onChange={(value) => setActualProfesionList(value)}
                isChanged={isactualProfessionUpdated}
            />

            {/* generate final Actual profession table */}
            {/* <GreenButton text="Submit" onClick={handleOnClickGenerate} /> */}

        </FullScreenModal>
    )
}