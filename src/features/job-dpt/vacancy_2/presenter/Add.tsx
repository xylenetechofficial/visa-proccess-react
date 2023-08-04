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
import { filter_unique_sector, generate_final_actual_profession_v2 } from "../../Extra/function";
import { convertDateFormat } from "../../../../utils/function";



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

    const is_exists = async (actual_profession: string, sector: number) => {

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

        // console.log('selectedDifferedSector');   // Only Dev
        // console.log(selectedDifferedSector);   // Only Dev
        // console.log('selectedMasterSector');   // Only Dev
        // console.log(selectedMasterSector);   // Only Dev
        for (let i = 0; i < ap_list.length; i++) {
            // console.log("master_service_charges: " + ap_list[i].master_service_charges);   // Only Dev
            // console.log("differed_service_charges: " + ap_list[i].differed_service_charges);   // Only Dev

            // let differed_matched = false
            for (let j = 0; j < selectedDifferedSector.length; j++) {
                const sector = selectedDifferedSector[j];
                if (await is_exists(ap_list[i].actual_profession ?? "", sector.id ?? 0)) {
                    // differed_matched = true
                    continue
                }

                console.log(`D: service_charges for ${ap_list[i].actual_profession} ${sector.id} = ${ap_list[i].differed_service_charges}`);   // Only Dev
                console.log('old:');   // Only Dev
                console.log(JSON.stringify(ap_list[i]));   // Only Dev

                const data = ap_list[i]
                data.service_charges = ap_list[i].differed_service_charges
                data.sector = sector.id

                data.quantity = ap_list[i].quantity;
                data.seletion_target_quantity =
                    ap_list[i].seletion_target_quantity;
                data.min_salary = ap_list[i].min_salary;
                data.max_salary = ap_list[i].max_salary;
                data.job_description = ap_list[i].job_description;
                data.master_service_charges =
                    ap_list[i].master_service_charges;
                data.differed_service_charges =
                    ap_list[i].differed_service_charges;

                console.log('new: ');   // Only Dev
                console.log(JSON.stringify(data));   // Only Dev
                data_list.push(data)
            }
        }
        // console.log("" + data_list.toString());   // Only Dev
        for (let i = 0; i < ap_list.length; i++) {

            for (let j = 0; j < selectedMasterSector.length; j++) {
                const sector = selectedMasterSector[j];
                if (await is_exists(ap_list[i].actual_profession ?? "", sector.id ?? 0)) {
                    // masters_matched = true
                    continue
                }

                console.log(`M: service_charges for ${ap_list[i].actual_profession} ${sector.id} = ${ap_list[i].master_service_charges}`);   // Only Dev
                console.log(`old: `)   // Only Dev
                console.log(JSON.stringify(ap_list[i]));   // Only Dev

                const data = ap_list[i]
                data.service_charges = ap_list[i].master_service_charges
                data.sector = sector.id

                data.quantity = ap_list[i].quantity;
                data.seletion_target_quantity =
                    ap_list[i].seletion_target_quantity;
                data.min_salary = ap_list[i].min_salary;
                data.max_salary = ap_list[i].max_salary;
                data.job_description = ap_list[i].job_description;
                data.master_service_charges =
                    ap_list[i].master_service_charges;
                data.differed_service_charges =
                    ap_list[i].differed_service_charges;

                console.log('new: ');   // Only Dev
                console.log(JSON.stringify(data));   // Only Dev

                data_list2.push(data)
            }
        }

        console.log('data_list');   // Only Dev
        console.log(data_list);   // Only Dev
        console.log('data_list2');   // Only Dev
        console.log(data_list2);   // Only Dev
        const new_job_order = jobOrder
        new_job_order.actualProfesionList = [...data_list, ...data_list2]

        return new_job_order
    }

    async function onClickAdd() {
        const data = await generate_new_job_order(actualProfesionList)
        console.log(data.actualProfesionList ?? []);   // Only Dev
        return
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
            title="Add Vacancy"
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