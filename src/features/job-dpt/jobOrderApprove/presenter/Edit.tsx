import { useEffect, useState } from "react";

import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { DateInput, FileInput, FileInputUnlabel, FileOpenPopup, StandardInput, TextAreaInput } from "../../../../componenets/Input";
import { SectorInterface } from "../../../masters/sector/type";
// import { CustomRadioButton } from "../../../../componenets/RadioButton";
// import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
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
import { GreenButton, RedButton } from "../../../../componenets/CustomButton";
import FinalActualProfessionTable from "./FinalActualProfessionTable";
import SpecialInstructionTable from "./SpecialInstructionTable";
import { AgentInterface } from "../../../masters/agent/type";
import { readAgentList } from "../../../masters/agent/repository";
import { BodyText1, Heading5, Heading6, SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { JobOrderInterface } from "../type";
import { ActualProfessionInterface, EdocInterface, SpecialInstructionInterface } from "../../Extra/type";
import EdocTable from "./EdocTable";
import { convertDateFormat } from "../../../../utils/function";

function FindUniqueActualProfessionAndsetToEDOC(data: EdocInterface[], actualProfesionList: ActualProfessionInterface[], jobOrder: JobOrderInterface) {

    // finding uniques names from actual profession list 
    const uniqueNames: string[] = [];
    actualProfesionList && actualProfesionList.filter(e => {
        if (uniqueNames.indexOf(e.actual_profession ?? "") === -1) {
            uniqueNames.push(e.actual_profession ?? "");
            return true;
        }
    });

    console.log(uniqueNames);   // Only Dev
    console.log(data)

    const newarray: EdocInterface[] = [];
    for (let i = 0; i < uniqueNames.length; i++) {
        let found = 0;

        // seaching data already present
        for (let j = 0; j < data.length; j++) {
            if (data[j].actualProfession == uniqueNames[i]) {
                newarray.push(data[j]);
                found = 1;
                break;
            }
        }

        // if not present
        if (!found) {
            newarray.push({
                jobOrder_id: jobOrder.id ?? 0,
                actualProfession: uniqueNames[i],
                EDOC: 0,
                visaCost: 0,
                commission: 0
            })
        }


    }
    console.log(newarray)
    return newarray;
    // setOnchange(Date.now().toString())
}


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
        approve: "",
        remarks: "",
        differed_sector_ids: [],
        master_sector_ids: [],

    }

    const [jobOrder, setJobOrder] = useState(initValue)
    const [actualProfesionList, setActualProfesionList] = useState<ActualProfessionInterface[]>();
    const [EdocList, setEdocList] = useState<EdocInterface[]>();
    const [specialInstructionList, setSpecialInstructionList] = useState<SpecialInstructionInterface[]>();

    //fetching joborder
    const fetchJobOrder = async () => {
        const data = await readJobOrder(props.currentElement.id ?? 0)
        // console.log(data);
        setJobOrder(data)
        // console.log("*&*^%$%^R%^$^$%^$&^%&^")
        // console.log(data.actualProfesionList)
        setActualProfesionList(data.actualProfesionList);
        setSpecialInstructionList(data.specialInstructionList);
        const arr = FindUniqueActualProfessionAndsetToEDOC(data.EdocList ?? [], data.actualProfesionList ?? [], data)
        setEdocList(arr);
        setIsActualProfessionUpdated(new Date().toTimeString())
        setIsJobOrderUpdated(new Date().toTimeString())
    }



    const [isactualProfessionUpdated, setIsActualProfessionUpdated] = useState("")
    const [isJobOrderUpdated, setIsJobOrderUpdated] = useState("")
    const [isEdocListpdated, setIsEdocListUpdated] = useState("")

    const [interviewSectionList, setInterviewSectorList] = useState<InterviewSectorInterface[]>([]);


    const fetchInterviewSectorList = async () => {
        const data = await readInterviewSectorList();
        setInterviewSectorList(data)
    }





    const [interviewModeList, setInterviewModeList] = useState<InterviewModeInterface[]>([])
    const fetchInterviewMode = async () => {
        const data = await readInterviewModeList();
        setInterviewModeList(data)
    }

    async function handleApprove() {

        setJobOrder({ ...jobOrder, approve: "yes" })

        const newJobOrder = {
            ...jobOrder,
            approve: "yes",
            actualProfesionList:actualProfesionList,
            specialInstructionList: specialInstructionList,
            EdocList: EdocList
        } as JobOrderInterface
        console.log(newJobOrder)
        // call create
        await updateJobOrder(props.currentElement.id ?? 0, newJobOrder)


        setJobOrder(initValue)

        props.fetchJobOrderList()
        props.onClose()
    }

    async function handleReject() {

        setJobOrder({ ...jobOrder, approve: "reject" })

        const newJobOrder = {
            ...jobOrder,
            approve: "reject",
            actualProfesionList:actualProfesionList,
            specialInstructionList: specialInstructionList,
            EdocList: EdocList
        } as JobOrderInterface
        console.log(newJobOrder)
        // call create
        await updateJobOrder(props.currentElement.id ?? 0, newJobOrder)


        setJobOrder(initValue)

        props.fetchJobOrderList()
        props.onClose()
    }


    const [agentList, setAgentList] = useState<AgentInterface[]>([])

    const fetchAgentList = async () => {
        const data = await readAgentList()
        setAgentList(data)
    }


    // if actual professionlist chages
    // useEffect(() => {
    //     const arr = FindUniqueActualProfessionAndsetToEDOC(EdocList ?? [], actualProfesionList ?? [], jobOrder)
    //     setEdocList(arr)
    // }, [actualProfesionList])


    useEffect(() => {
        // setJobOrder(props.currentElement)
        fetchAgentList()
        fetchJobOrder()

        fetchInterviewSectorList()

        fetchInterviewMode()
    }, [])
    return (

        <FullScreenModal
            handleClick={handleApprove}
            title="Update Job Order"
            onClose={props.onClose}
        >


            <div className=" grid grid-cols-1 py-3  gap-2 shadow">

                <UpdateContentBox >
                    <SubHeading1 text="Date :" />
                    <BodyText1>
                        {convertDateFormat(jobOrder.date)}
                    </BodyText1>
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text="Type :" />
                    <BodyText1>
                        {jobOrder.type}
                    </BodyText1>

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

                    <SubHeading1 text="Division :" />
                    <BodyText1>
                        {jobOrder.division}
                    </BodyText1>
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="Departure Sector :" />
                    <BodyText1>

                        {props.sectorList.map((sector) => sector.id == jobOrder.sectorId ? sector.name : "")}
                    </BodyText1>
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
                    <FileOpenPopup
                        label="File 1"
                        url={jobOrder.file1_url}
                    />                </> : ""}


                {jobOrder.file2_url ? <>
                    <FileOpenPopup
                        label="File 2"
                        url={jobOrder.file2_url}
                    />
                </> : ""}



                {jobOrder.file3_url ? <>
                    <FileOpenPopup
                        label="File 3"
                        url={jobOrder.file3_url}
                    />                </> : ""}



                {jobOrder.file4_url ? <>
                    <FileOpenPopup
                        label="File 4"
                        url={jobOrder.file4_url}
                    />
                </> : ""}


                {jobOrder.file5_url ? <>
                    <FileOpenPopup
                        label="File 5"
                        url={jobOrder.file5_url}
                    />
                </> : ""}

                <UpdateContentBox>
                    <SubHeading1 text="Interview Mode :" />
                    <BodyText1>
                        {interviewModeList.map((ele) => ele.id == jobOrder.interviewModeId ? ele.name : "")}

                    </BodyText1>

                    {/* <SubHeading1 text="Interview Mode :" />{jobOrder.interviewModeId} */}
                    {/* <div className="w-[180px]">
                        <CustomSelectComponentUnlabeled
                            required={true}
                            value={jobOrder.interviewModeId}
                            onChange={(value) => setJobOrder({ ...jobOrder, interviewModeId: value })}
                            options={selectOptionConveter({ options: interviewModeList, options_struct: { name: "name", value: "id" } })}

                        />
                    </div> */}
                </UpdateContentBox>


                {/* {jobOrder.momFileUrl ? <>
                    <UpdateContentBox>
                        <SubHeading1 text=" Mom File :" />
                        <BodyText1>

                            <a href={jobOrder.momFileUrl} target="_blank" rel="noopener noreferrer">View Uploaded File</a>
                        </BodyText1>

                    </UpdateContentBox>
                </> : ""} */}
                {jobOrder.momFileUrl ? <>
                    <FileOpenPopup
                        label="File 5"
                        url={jobOrder.momFileUrl}
                    />
                </> : ""}

                {/* select interview mode */}

            </div>




            <Heading6 text="Final Actual Profession Table " />


            {actualProfesionList && actualProfesionList.length ?
                <FinalActualProfessionTable
                    // interViewSectorList={interviewSectionList}
                    actualProfessionList={actualProfesionList}
                    jobOrder={jobOrder}
                    onChange={(ele) => {
                        setActualProfesionList(ele)
                        // setIsJobOrderUpdated(new Date().toTimeString())
                    }}
                    isChanged={isactualProfessionUpdated}
                /> : ""}






            <Heading6 text="Special Instruction " />
            <SpecialInstructionTable
                specialInstructionList={jobOrder.specialInstructionList ?? []}
                jobOrder={jobOrder}
                agentList={agentList}
                onChange={(ele) => {
                    setJobOrder({ ...jobOrder, specialInstructionList: ele })
                }}
                isChanged={isactualProfessionUpdated}
            />




            <Heading6 text="EDOC Table" />

            {EdocList && EdocList.length ?
                <EdocTable
                    onChange={(ele) => setEdocList(ele)}
                    jobOrder={jobOrder}
                    actualProfessionList={jobOrder.actualProfesionList ?? []}
                    EDOCList={EdocList}
                    isChanged={isEdocListpdated}

                /> : ""}

            <Heading5 text="Remarks" />
            <TextAreaInput
                id="remarksJobOrderApprve"
                onChange={(value) => { setJobOrder({ ...jobOrder, remarks: value }) }}
                label="Remarks"
                value={jobOrder.remarks}
            />

            <RedButton text="Reject" onClick={handleReject} />
            <GreenButton text="Approve" onClick={handleApprove} />
        </FullScreenModal>

    )
}