// import { useEffect, useState } from "react";

// import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
// import { DateInput, FileInput, FileInputUnlabel, StandardInput } from "../../../../componenets/Input";
// import { SectorInterface } from "../../../masters/sector/type";
// import { CustomRadioButton } from "../../../../componenets/RadioButton";
// import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
// import { BDEList, OPManagerList, rcList, recruitManagerList, rsList } from "../../db/user";
// import { CompanyInterface } from "../../../masters/company/type";
// import { CountryInterface } from "../../../masters/country/type";
// import { readJobOrder, updateJobOrder } from "../repository";
// import ActualProfessionTable from "./ActualProfessionTable";
// import { InterviewSectorInterface } from "../../../masters/interviewSector/type";
// import SelectSectorSection from "./SelectSectorSection";
// import { readInterviewSectorList } from "../../../masters/interviewSector/repository";
// import { InterviewModeInterface } from "../../../masters/interviewMode/type";
// import { readInterviewModeList } from "../../../masters/interviewMode/repository";
// import { GreenButton } from "../../../../componenets/CustomButton";
// import FinalActualProfessionTable from "./FinalActualProfessionTable";
// import SpecialInstructionTable from "./SpecialInstructionTable";
// import { AgentInterface } from "../../../masters/agent/type";
// import { readAgentList } from "../../../masters/agent/repository";
// import { Heading6, SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
// import { JobOrderInterface } from "../type";
// import { ActualProfessionInterface, EdocInterface, SpecialInstructionInterface } from "../../Extra/type";
// import EdocTable from "./EdocTable";



// export default function Main(props: {
//     onClose: any, fetchJobOrderList: any,
//     sectorList: SectorInterface[],
//     companyList: CompanyInterface[],
//     countryList: CountryInterface[],
//     currentElement: JobOrderInterface,
// }) {

//     const initValue: JobOrderInterface = {
//         type: "",
//         date: "",
//         CountryId: 0,
//         MOL: 0,
//         workPermit: 0,
//         sectorId: 0,
//         bde_id: 0,
//         companyId: 0,
//         division: "",
//         departureSectorId: 0,
//         operationManagerId: 0,
//         rcId: 0,
//         recruitmentManagerId: 0,
//         rsId: 0,
//         interviewModeId: 0

//     }
//     const [jobOrder, setJobOrder] = useState(initValue)
//     const [actualProfesionList, setActualProfesionList] = useState<ActualProfessionInterface[]>();
//     const [EdocList, setEDOCList] = useState<EdocInterface[]>();
//     const [specialInstructionList, setSpecialInstructionList] = useState<SpecialInstructionInterface[]>();

//     //fetching joborder
//     const fetchJobOrder = async () => {
//         const data = await readJobOrder(props.currentElement.id ?? 0)
//         // console.log(data);
//         setJobOrder(data)
//         // console.log("*&*^%$%^R%^$^$%^$&^%&^")
//         // console.log(data.actualProfesionList)
//         setActualProfesionList(jobOrder.actualProfesionList);
//         setSpecialInstructionList(jobOrder.specialInstructionList);
//         setEDOCList(jobOrder.EdocList)
//         setIsEdocListUpdated(new Date().toTimeString())
//         setIsActualProfessionUpdated(new Date().toTimeString())
//         setIsJobOrderUpdated(new Date().toTimeString())
//     }



//     const [isactualProfessionUpdated, setIsActualProfessionUpdated] = useState("")
//     const [isJobOrderUpdated, setIsJobOrderUpdated] = useState("")
//     const [isEdocListpdated, setIsEdocListUpdated] = useState("")

//     const [interviewSectionList, setInterviewSectorList] = useState<InterviewSectorInterface[]>([]);


//     const fetchInterviewSectorList = async () => {
//         const data = await readInterviewSectorList();
//         setInterviewSectorList(data)
//     }





//     const [interviewModeList, setInterviewModeList] = useState<InterviewModeInterface[]>([])
//     const fetchInterviewMode = async () => {
//         const data = await readInterviewModeList();
//         setInterviewModeList(data)
//     }

//     async function onClickAdd() {

//         // call create
//         await updateJobOrder(props.currentElement.id ?? 0, jobOrder)


//         setJobOrder(initValue)

//         props.fetchJobOrderList()
//         props.onClose()
//     }



//     const [agentList, setAgentList] = useState<AgentInterface[]>([])

//     const fetchAgentList = async () => {
//         const data = await readAgentList()
//         setAgentList(data)
//     }

//     function FindUniqueActualProfessionAndsetToEDOC(data: EdocInterface[]) {
//         const uniqueNames: string[] = [];

//         actualProfesionList && actualProfesionList.filter(e => {
//             if (uniqueNames.indexOf(e.actual_profession ?? "") === -1) {
//                 uniqueNames.push(e.actual_profession ?? "");
//                 return true;
//             }
//         });
//         console.log(uniqueNames);   // Only Dev
//         console.log(data)
//         // EDOC table
//         const newarray: EdocInterface[] = [];

//         for (let i = 0; i < uniqueNames.length; i++) {
//             let found = 0;


//             // seaching data already present
//             for (let j = 0; j < data.length; j++) {
//                 if (data[j].actualProfession == uniqueNames[i]) {
//                     newarray.push(data[j]);
//                     found = 1;
//                     break;
//                 }
//             }

//             // if not present
//             if (!found) {
//                 newarray.push({
//                     jobOrder_id: jobOrder.id ?? 0,
//                     actualProfession: uniqueNames[i],
//                     EDOC: 0,
//                     visaCost: 0,
//                     commission: 0
//                 })
//             }


//         }
//         console.log(newarray)
//         setEDOCList(newarray)
//         setIsEdocListUpdated(Date.now().toString())
//         // setOnchange(Date.now().toString())
//     }
//     // if actual professionlist chages
//     useEffect(() => {
//         FindUniqueActualProfessionAndsetToEDOC(EdocList ?? [])
//     }, [actualProfesionList])


//     useEffect(() => {
//         // setJobOrder(props.currentElement)
//         fetchAgentList()
//         fetchJobOrder()

//         fetchInterviewSectorList()

//         fetchInterviewMode()
//     }, [])
//     return (

//         <FullScreenModal
//             buttonName="Update"
//             handleClick={onClickAdd}
//             title="Update Job Order"
//             onClose={props.onClose}
//         >


//             <div className=" grid grid-cols-1 py-3  gap-2 shadow">

//                 <UpdateContentBox >
//                     <SubHeading1 text="Date :" /> {jobOrder.date}
//                 </UpdateContentBox>

//                 <UpdateContentBox>
//                     <SubHeading1 text="Type :" /> {jobOrder.type}

//                 </UpdateContentBox>
//                 <UpdateContentBox>

//                     <SubHeading1 text="Country :" /> {props.countryList.map((ele) => ele.id == jobOrder.CountryId ? ele.name : "")}
//                 </UpdateContentBox>
//                 <UpdateContentBox>

//                     <SubHeading1 text="BDE :" /> {jobOrder.bde_name ?? ""}
//                 </UpdateContentBox>
//                 <UpdateContentBox>

//                     <SubHeading1 text="Company :" /> {props.companyList.map((ele) => ele.id == jobOrder.companyId ? ele.name : "")}
//                 </UpdateContentBox>
//                 <UpdateContentBox>

//                     <SubHeading1 text="Division :" /> {jobOrder.division}
//                 </UpdateContentBox>
//                 <UpdateContentBox>

//                     <SubHeading1 text="Departure Sector :" /> {props.sectorList.map((sector) => sector.id == jobOrder.sectorId ? sector.name : "")}
//                 </UpdateContentBox>
//                 <UpdateContentBox>

//                     <SubHeading1 text="OP Manager:" /> {OPManagerList.map((op) => op.id == jobOrder.operationManagerId ? op.name : "")}
//                 </UpdateContentBox>
//                 <UpdateContentBox>

//                     <SubHeading1 text="Recruit Manager:" /> {recruitManagerList.map((op) => op.id == jobOrder.recruitmentManagerId ? op.name : "")}
//                 </UpdateContentBox>
//                 <UpdateContentBox>

//                     <SubHeading1 text="RC :" /> {rsList.map((rs) => rs.id == jobOrder.rsId ? rs.name : "")}
//                 </UpdateContentBox>
//                 <UpdateContentBox>

//                     <SubHeading1 text="RS :" />{rcList.map((rc) => rc.id == jobOrder.rcId ? rc.name : "")}
//                 </UpdateContentBox>


//                 {jobOrder.file1_url ? <>
//                     <UpdateContentBox>
//                         <SubHeading1 text=" File 1 :" />
//                         <a href={jobOrder.file1_url} target="_blank" rel="noopener noreferrer">View Uploaded File</a>
//                     </UpdateContentBox>

//                 </> : ""}


//                 {jobOrder.file2_url ? <>
//                     <UpdateContentBox>
//                         <SubHeading1 text=" File 2 :" />
//                         <a href={jobOrder.file2_url} target="_blank" rel="noopener noreferrer">View Uploaded File</a>
//                     </UpdateContentBox>

//                 </> : ""}



//                 {jobOrder.file3_url ? <>
//                     <UpdateContentBox>
//                         <SubHeading1 text=" File 3 :" />
//                         <a href={jobOrder.file3_url} target="_blank" rel="noopener noreferrer">View Uploaded File</a>
//                     </UpdateContentBox>
//                 </> : ""}



//                 {jobOrder.file4_url ? <>
//                     <UpdateContentBox>
//                         <SubHeading1 text=" File 4 :" />
//                         <a href={jobOrder.file4_url} target="_blank" rel="noopener noreferrer">View Uploaded File</a>

//                     </UpdateContentBox>
//                 </> : ""}


//                 {jobOrder.file5_url ? <>
//                     <UpdateContentBox>
//                         <SubHeading1 text=" File 5 :" />
//                         <a href={jobOrder.file5_url} target="_blank" rel="noopener noreferrer">View Uploaded File</a>

//                     </UpdateContentBox>
//                 </> : ""}

//                 <UpdateContentBox>
//                     <SubHeading1 text="Interview Mode :" />
//                     <div className="w-[180px]">
//                         <CustomSelectComponentUnlabeled
//                             required={true}
//                             value={jobOrder.interviewModeId}
//                             onChange={(value) => setJobOrder({ ...jobOrder, interviewModeId: value })}
//                             options={selectOptionConveter({ options: interviewModeList, options_struct: { name: "name", value: "id" } })}

//                         />
//                     </div>
//                 </UpdateContentBox>


//                 {jobOrder.momFileUrl ? <>
//                     <UpdateContentBox>
//                         <SubHeading1 text=" Mom File :" />
//                         <a href={jobOrder.momFileUrl} target="_blank" rel="noopener noreferrer">View Uploaded File</a>

//                     </UpdateContentBox>
//                 </> : ""}

//                 {/* select interview mode */}

//             </div>



           
//             <Heading6 text="Final Actual Profession Table " />
//             <FinalActualProfessionTable
//                 // interViewSectorList={interviewSectionList}
//                 actualProfessionList={jobOrder.actualProfesionList ?? []}
//                 jobOrder={jobOrder}
//                 onChange={(ele) => {
//                     setJobOrder({ ...jobOrder, actualProfesionList: ele })
//                     // setIsJobOrderUpdated(new Date().toTimeString())
//                 }}
//                 isChanged={isactualProfessionUpdated}
//             />






//             <Heading6 text="Special Instruction " />
//             <SpecialInstructionTable
//                 specialInstructionList={jobOrder.specialInstructionList ?? []}
//                 jobOrder={jobOrder}
//                 agentList={agentList}
//                 onChange={(ele) => {
//                     setJobOrder({ ...jobOrder, specialInstructionList: ele })
//                 }}
//                 isChanged={isactualProfessionUpdated}
//             />





//             {jobOrder.actualProfesionList && jobOrder.actualProfesionList.length ?
//                 <EdocTable
//                     onChange={(ele) => setJobOrder({ ...jobOrder, EdocList: ele })}
//                     jobOrder={jobOrder}
//                     actualProfessionList={jobOrder.actualProfesionList ?? []}
//                     EDOCList={EdocList??[]}
//                     isChanged={isEdocListpdated}

//                 /> : ""}
//         </FullScreenModal>

//     )
// }