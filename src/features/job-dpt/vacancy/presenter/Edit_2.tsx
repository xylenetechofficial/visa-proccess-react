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
// import { filter_unique_sector, generate_final_actual_profession } from "../../Extra/function";
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
        master_sector_ids: [],
        differed_sector_ids: [],

    }
    const [jobOrder, setJobOrder] = useState(initValue)
    const [isactualProfessionUpdated, setIsActualProfessionUpdated] = useState("")

    // const [selectedMasterSector, setSelectedMasterSector] = useState<InterviewSectorInterface[]>([]);
    const [interviewSectionList, setInterviewSectorList] = useState<InterviewSectorInterface[]>([]);
    // const [selectedDifferedSector, setSelectedDifferedSector] = useState<InterviewSectorInterface[]>([]);
    // const [actualProfesionList, setActualProfesionList] = useState<ActualProfessionInterface[]>([]);

    const fetchInterviewSectorList = async () => {
        const data = await readInterviewSectorList();
        setInterviewSectorList(data)
    }

    const [interviewModeList, setInterviewModeList] = useState<InterviewModeInterface[]>([])
    const fetchInterviewMode = async () => {
        const data = await readInterviewModeList();
        setInterviewModeList(data)
    }

    async function onClickAdd() {

        console.log('update call')
        // console.log(props.currentElement.differed_sector_ids);   // Only Dev
        // console.log(props.currentElement.master_sector_ids);   // Only Dev
        // console.log(jobOrder.actualProfesionList)
        const job_order_data=jobOrder
        
        // call create
        await updateJobOrder(props.currentElement.id ?? 0, job_order_data)


        // setJobOrder(initValue)

        props.fetchJobOrderList()
        // props.onClose()
    }

    const fetchJobOrder = async () => {
        const data = await readJobOrder(props.currentElement.id ?? 0)
        // data.actualProfesionList=props.currentElement.actualProfesionList
        const old_list = data.actualProfesionList ?? []
        const new_actual_profession_list = props.currentElement.actualProfesionList ?? []

        // if actual profetion is old then opdate 
        for (let index = 0; index < new_actual_profession_list.length; index++) {
            const element = new_actual_profession_list[index];

            for (let j = 0; j < old_list.length; j++) {

                if (old_list[j].id == element.id) {
                    new_actual_profession_list[index].agent_commission = old_list[j].agent_commission
                    new_actual_profession_list[index].air_ticket = old_list[j].air_ticket
                    new_actual_profession_list[index].consodilate_charges = old_list[j].consodilate_charges
                    new_actual_profession_list[index].consolidate_charges_id = old_list[j].consolidate_charges_id
                    new_actual_profession_list[index].consodilate_charges_name = old_list[j].consodilate_charges_name
                    new_actual_profession_list[index].consodilate_charges_value = old_list[j].consodilate_charges_value
                    new_actual_profession_list[index].grade = old_list[j].grade
                    new_actual_profession_list[index].invoice_service_charges = old_list[j].invoice_service_charges
                    new_actual_profession_list[index].invoice_service_charges_currency = old_list[j].invoice_service_charges_currency
                    new_actual_profession_list[index].invoice_ticket_charges = old_list[j].invoice_ticket_charges
                    new_actual_profession_list[index].is_invoice = old_list[j].is_invoice
                    new_actual_profession_list[index].jobOrder_id = old_list[j].jobOrder_id
                    new_actual_profession_list[index].partial_charges = old_list[j].partial_charges
                    // new_actual_profession_list[index].service_charges = old_list[j].service_charges
                    new_actual_profession_list[index].sector_charge = old_list[j].sector_charge

                    break
                }
            }

        }
        data.actualProfesionList = new_actual_profession_list
        data.differed_sector_ids=props.currentElement.differed_sector_ids
        data.master_sector_ids=props.currentElement.master_sector_ids
        console.log(props.currentElement.differed_sector_ids);   // Only Dev
        console.log(props.currentElement.master_sector_ids);   // Only Dev
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
        // console.log('edit 2');   // Only Dev
        // console.log(props.currentElement.actualProfesionList);   // Only Dev

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
                {/* select interview mode */}

            </div>





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