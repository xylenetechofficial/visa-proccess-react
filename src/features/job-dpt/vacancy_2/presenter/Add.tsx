import { useEffect, useState } from "react";

import { FullScreenModal } from "../../../../componenets/Modal";
import { SectorInterface } from "../../../masters/sector/type";
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { readJobOrder, updateJobOrder } from "../repository";
import ActualProfessionTable from "./ActualProfessionTable";
import { InterviewSectorInterface } from "../../../masters/interviewSector/type";
import SelectSectorSection from "./SelectSectorSection";
import { InterviewModeInterface } from "../../../masters/interviewMode/type";
import { readInterviewModeList } from "../../../masters/interviewMode/repository";
import { Heading6, SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { JobOrderInterface } from "../type";
import { ActualProfessionInterface } from "../../Extra/type";
// import { filter_unique_sector, generate_final_actual_profession_v2 } from "../../Extra/function";
import { convertDateFormat } from "../../../../utils/function";
import { showMessage_v2 } from "../../../../utils/alert";
import { generate_final_actual_profession } from "../../Extra/function";



export default function Main(props: {
    onClose: (value: string) => void,
    fetchJobOrderList: () => void,
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

    const is_exists = (actual_profession: string, sector: number) => {

        for (let i = 0; i < actualProfesionList_old.length; i++) {
            const element = actualProfesionList_old[i];
            // console.log("Match Call");   // Only Dev
            // console.log(`${element.actual_profession} == ${actual_profession} && ${element.sector} == ${sector}`);   // Only Dev
            if (element.actual_profession == actual_profession && element.sector == sector) return true
        }

        return false
    }
    const generate_new_job_order = async (ap_list: ActualProfessionInterface[]) => {
        const data_list: ActualProfessionInterface[] = []
        const data_list2: ActualProfessionInterface[] = []

        // let is_duplicate = false
        const seen: any = {}
        for (let i = 0; i < ap_list.length; i++) {

            if (seen[ap_list[i].actual_profession]) {
                showMessage_v2({ message: "Duplicate Actual Profession", status: 400 })

                return undefined
            } else {
                seen[ap_list[i].actual_profession] = true
            }

            for (let j = 0; j < selectedDifferedSector.length; j++) {
                const sector = selectedDifferedSector[j];

                if (is_exists(ap_list[i].actual_profession ?? "", sector.id ?? 0)) {
                    continue
                }
                data_list.push({
                    jobOrder_id: ap_list[i].jobOrder_id,
                    actual_profession: ap_list[i].actual_profession,
                    grade: ap_list[i].grade,
                    // aka
                    sector: sector.id,
                    sector_charge: ap_list[i].sector_charge,
                    quantity: ap_list[i].quantity,
                    seletion_target_quantity: ap_list[i].seletion_target_quantity,
                    min_salary: ap_list[i].min_salary,
                    max_salary: ap_list[i].max_salary,
                    job_description: ap_list[i].job_description,
                    master_service_charges: ap_list[i].master_service_charges,
                    differed_service_charges: ap_list[i].differed_service_charges,
                    // aka
                    service_charges: ap_list[i].differed_service_charges,
                    partial_charges: ap_list[i].partial_charges,
                    consodilate_charges: ap_list[i].consodilate_charges,
                    consodilate_charges_name: ap_list[i].consodilate_charges_name,
                    consodilate_charges_value: ap_list[i].consodilate_charges_value,
                    consolidate_charges_id: ap_list[i].consolidate_charges_id,
                    agent_commission: ap_list[i].agent_commission,
                    air_ticket: ap_list[i].air_ticket,
                    is_invoice: ap_list[i].is_invoice,
                    invoice_service_charges: ap_list[i].invoice_service_charges,
                    invoice_ticket_charges: ap_list[i].invoice_ticket_charges,
                    invoice_service_charges_currency: ap_list[i].invoice_service_charges_currency,

                })
            }

            for (let j = 0; j < selectedMasterSector.length; j++) {
                const sector = selectedMasterSector[j];
                console.log(`M: ${ap_list[i].actual_profession} AND ${sector.id}`);   // Only Dev
                if (is_exists(ap_list[i].actual_profession ?? "", sector.id ?? 0)) {
                    continue
                }

                data_list.push({
                    jobOrder_id: ap_list[i].jobOrder_id,
                    actual_profession: ap_list[i].actual_profession,
                    grade: ap_list[i].grade,
                    // aka
                    sector: sector.id,
                    sector_charge: ap_list[i].sector_charge,
                    quantity: ap_list[i].quantity,
                    seletion_target_quantity: ap_list[i].seletion_target_quantity,
                    min_salary: ap_list[i].min_salary,
                    max_salary: ap_list[i].max_salary,
                    job_description: ap_list[i].job_description,
                    master_service_charges: ap_list[i].master_service_charges,
                    differed_service_charges: ap_list[i].differed_service_charges,
                    // aka
                    service_charges: ap_list[i].master_service_charges,
                    partial_charges: ap_list[i].partial_charges,
                    consodilate_charges: ap_list[i].consodilate_charges,
                    consodilate_charges_name: ap_list[i].consodilate_charges_name,
                    consodilate_charges_value: ap_list[i].consodilate_charges_value,
                    consolidate_charges_id: ap_list[i].consolidate_charges_id,
                    agent_commission: ap_list[i].agent_commission,
                    air_ticket: ap_list[i].air_ticket,
                    is_invoice: ap_list[i].is_invoice,
                    invoice_service_charges: ap_list[i].invoice_service_charges,
                    invoice_ticket_charges: ap_list[i].invoice_ticket_charges,
                    invoice_service_charges_currency: ap_list[i].invoice_service_charges_currency,

                })
            }
        }

        return { ...jobOrder, actualProfesionList: data_list }
    }

    async function onClickAdd() {

        for (let i = 0; i < actualProfesionList.length; i++) {
            if (actualProfesionList[i].actual_profession.trim() == "") {
                showMessage_v2({ message: "Actual Profession Empty", status: 404 });
                return
            }
        }


        const data = await generate_new_job_order(actualProfesionList)

        // console.log("selectedMasterSector");   // Only Dev
        // console.log(selectedMasterSector.length);   // Only Dev
        // console.log('selectedDifferedSector');   // Only Dev
        // console.log(selectedDifferedSector.length);   // Only Dev
        // console.log("========= New Data =========");   // Only Dev
        // console.log(data?.actualProfesionList);   // Only Dev

        if (!data)
            return
        // console.log('onClickAdd');   // Only Dev
        // return
        const flag = await updateJobOrder(props.currentElement.id ?? 0, data)

        if (flag) {
            // props.fetchJobOrderList()
            props.setCurrentElement(data)
            props.onClose('edit')
        }
    }


    const [interviewModeList, setInterviewModeList] = useState<InterviewModeInterface[]>([])
    const fetchInterviewMode = async () => {
        const data = await readInterviewModeList();
        setInterviewModeList(data)
    }

    const fetchJobOrder = async () => {
        const data = await readJobOrder(props.currentElement.id ?? 0)
        data.actualProfesionList?.forEach(element => {
            console.log(`AP: ${element.actual_profession} Sector: ${element.sector}`);   // Only Dev
        });
        // console.log(data.actualProfesionList);   // Only Dev
        setJobOrder(data)

        setActualProfesionList_old(data.actualProfesionList ?? [])
        setInterviewSectorList(props.interviewSectorList)
    }

    useEffect(() => {
        fetchInterviewMode()
        fetchJobOrder()
    }, [])
    return (

        <FullScreenModal
            buttonName="Submit"
            handleClick={onClickAdd}
            title={props.currentElement.actual_profession_count ? "Update Vacancy" : "Add Vacancy"}
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

        </FullScreenModal>
    )
}