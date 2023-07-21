import { useEffect, useState } from "react";

import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { DateInput, FileInput, FileInputUnlabel, StandardInput } from "../../../../componenets/Input";
import { SectorInterface } from "../../../masters/sector/type";
// import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
// import { BDEList, OPManagerList, rcList, recruitManagerList, rsList } from "../../db/user";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { readJobOrder, updateJobOrder } from "../repository";
// import ActualProfessionTable from "./ActualProfessionTable";
import { InterviewSectorInterface } from "../../../masters/interviewSector/type";
// import SelectSectorSection from "./SelectSectorSection";
import { readInterviewSectorList } from "../../../masters/interviewSector/repository";
import { InterviewModeInterface } from "../../../masters/interviewMode/type";
import { readInterviewModeList } from "../../../masters/interviewMode/repository";
// import { GreenButton } from "../../../../componenets/CustomButton";
import FinalActualProfessionTable from "./FinalActualProfessionTable";
import SpecialInstructionTable from "./SpecialInstructionTable";
import { AgentInterface } from "../../../masters/agent/type";
import { readAgentList } from "../../../masters/agent/repository";
import { Heading6, SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { JobOrderInterface } from "../type";
import { ActualProfessionInterface } from "../../Extra/type";
import { generate_final_actual_profession } from "../../Extra/function";
import { convertDateFormat } from "../../../../utils/function";



export default function Main(props: {
    onClose: any, fetchJobOrderList: any,
    sectorList: SectorInterface[],
    companyList: CompanyInterface[],
    countryList: CountryInterface[],
    currentElement: JobOrderInterface,
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
        differed_sector_ids:[],
        master_sector_ids:[]

    }
    const [jobOrder, setJobOrder] = useState(initValue)
    const [isactualProfessionUpdated, setIsActualProfessionUpdated] = useState("")

    const [selectedMasterSector, setSelectedMasterSector] = useState<InterviewSectorInterface[]>([]);
    const [interviewSectionList, setInterviewSectorList] = useState<InterviewSectorInterface[]>([]);
    const [selectedDifferedSector, setSelectedDifferedSector] = useState<InterviewSectorInterface[]>([]);
    const [actualProfesionList, setActualProfesionList] = useState<ActualProfessionInterface[]>([]);

    const fetchInterviewSectorList = async () => {
        const data = await readInterviewSectorList();
        setInterviewSectorList(data)
    }

    const handleOnClickGenerate =async () => {
        // console.log("actualProfesionList: ")
        // console.log(actualProfesionList)

        // console.log("selectedDifferedSector: ")
        // console.log(selectedDifferedSector)

        // console.log("selectedMasterSector: ")
        // console.log(selectedMasterSector)

        // const newarray: ActualProfessionInterface[] = [];

        // for (let i = 0; i < actualProfesionList.length; i++) {
        //     const actualProfesion = actualProfesionList[i];

        //     // Differed Sector
        //     for (let j = 0; j < selectedDifferedSector.length; j++) {
        //         const differedSector = selectedDifferedSector[j]
        //         newarray.push({
        //             jobOrder_id: actualProfesion.id ?? 0,
        //             actual_profession: actualProfesion.actual_profession,
        //             quantity: actualProfesion.quantity,
        //             seletion_target_quantity: actualProfesion.seletion_target_quantity,
        //             min_salary: actualProfesion.min_salary,
        //             max_salary: actualProfesion.max_salary,
        //             job_description: actualProfesion.job_description,
        //             master_service_charges: actualProfesion.master_service_charges,
        //             differed_service_charges: actualProfesion.differed_service_charges,
        //             sector: differedSector.id,
        //             agent_commission: 0,
        //             air_ticket: "",
        //             consodilate_charges: "0",
        //             grade: 0,
        //             invoice_service_charges: 0,
        //             invoice_service_charges_currency: 0,
        //             invoice_ticket_charges: 0,
        //             is_invoice: 0,
        //             partial_charges: 0,
        //             service_charges: 0
        //         })
        //     }

        //     // Master Sector
        //     for (let j = 0; j < selectedMasterSector.length; j++) {
        //         const masterSector = selectedMasterSector[j]
        //         newarray.push({
        //             jobOrder_id: actualProfesion.id ?? 0,
        //             actual_profession: actualProfesion.actual_profession,
        //             quantity: actualProfesion.quantity,
        //             seletion_target_quantity: actualProfesion.seletion_target_quantity,
        //             min_salary: actualProfesion.min_salary,
        //             max_salary: actualProfesion.max_salary,
        //             job_description: actualProfesion.job_description,
        //             master_service_charges: actualProfesion.master_service_charges,
        //             differed_service_charges: actualProfesion.differed_service_charges,
        //             sector: masterSector.id,
        //         })

        //     }

        // }


        const newarray =await generate_final_actual_profession(actualProfesionList, selectedDifferedSector, selectedMasterSector)


        // console.log(newarray)
        const newJobOrder = jobOrder
        const oldActualProfesionList = newJobOrder.actualProfesionList ?? [];
        const newActualProfesionList = [...oldActualProfesionList, ...newarray];
        newJobOrder.actualProfesionList = newActualProfesionList

        // clean actual profesion, master and differed
        setActualProfesionList([])
        setSelectedDifferedSector([])
        setSelectedMasterSector([])

        setJobOrder(newJobOrder)
        fetchInterviewSectorList()
        setIsActualProfessionUpdated(new Date().toTimeString())
    }



    const [interviewModeList, setInterviewModeList] = useState<InterviewModeInterface[]>([])
    const fetchInterviewMode = async () => {
        const data = await readInterviewModeList();
        setInterviewModeList(data)
    }

    async function onClickAdd() {

        // call create
        await updateJobOrder(props.currentElement.id ?? 0, jobOrder)


        setJobOrder(initValue)

        props.fetchJobOrderList()
        props.onClose()
    }

    const fetchJobOrder = async () => {
        const data = await readJobOrder(props.currentElement.id ?? 0)
        console.log(data);
        setJobOrder(data)
        // console.log("*&*^%$%^R%^$^$%^$&^%&^")
        // console.log(data.actualProfesionList)
        setIsActualProfessionUpdated(new Date().toTimeString())
    }

    const [agentList, setAgentList] = useState<AgentInterface[]>([])
    const fetchAgentList = async () => {
        const data = await readAgentList()
        setAgentList(data)
    }

    useEffect(() => {
        // setJobOrder(props.currentElement)
        fetchAgentList()
        fetchJobOrder()

        fetchInterviewSectorList()

        fetchInterviewMode()
    }, [])
    return (

        <FullScreenModal
            buttonName="Update"
            handleClick={onClickAdd}
            title="Update Job Order"
            onClose={props.onClose}
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

                <UpdateContentBox>
                    <SubHeading1 text=" Mom File:" />
                    <div className="">
                        <FileInputUnlabel
                            required
                            url={jobOrder.momFileUrl}
                            handleFileChange={(file) => setJobOrder({ ...jobOrder, momFile: file })} />
                    </div>
                </UpdateContentBox>

                {/* select interview mode */}

            </div>





            {/* select interview section */}
            {/* <SelectSectorSection
                interviewSector={interviewSectionList}
                selectedDifferedSector={selectedDifferedSector}
                selectedMasterSector={selectedMasterSector}
                changeInterviewSector={(ele) => setInterviewSectorList(ele)}
                changeSelectedDifferedSector={(ele) => setSelectedDifferedSector(ele)}
                changeSelectedMasterSector={(ele) => setSelectedMasterSector(ele)}
            /> */}




            {/* <Heading6 text="Actual Profession Table" /> */}

            {/* <ActualProfessionTable
                actualProfessionList={actualProfesionList}
                jobOrder={jobOrder}
                onChange={(value) => setActualProfesionList(value)}
                isChanged={isactualProfessionUpdated}
            /> */}

            {/* generate final Actual profession table */}
            {/* <GreenButton text="Generate" onClick={handleOnClickGenerate} /> */}

            <h1></h1>
            <Heading6 text="Final Actual Profession Table " />
            <FinalActualProfessionTable
                // interViewSectorList={interviewSectionList}
                actualProfessionList={jobOrder.actualProfesionList ?? []}
                jobOrder={jobOrder}
                onChange={(ele) => setJobOrder({ ...jobOrder, actualProfesionList: ele })}
                isChanged={isactualProfessionUpdated}
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