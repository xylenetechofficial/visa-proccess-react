// import { createJobOrder } from "../repository";
// import { useState } from "react";
// import ModalContent from "../../../../componenets/Modal";
// import { DateInput, FileInput, StandardInput } from "../../../../componenets/Input";
// import { SectorInterface } from "../../../masters/sector/type";
// import { CompanyInterface } from "../../../masters/company/type";
// import { JobOrderInterface } from "../type";
// import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
// import { CustomRadioButton } from "../../../../componenets/RadioButton";
// import { CountryInterface } from "../../../masters/country/type";
// import { BDEList, } from "../../db/user";


// export default function Main(props: {
//     onClose: any, fetchJobOrderList: any,
//     sectorList: SectorInterface[],
//     companyList: CompanyInterface[],
//     countryList: CountryInterface[],
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

//     }
//     const [jobOrder, setJobOrder] = useState(initValue)




//     async function onClickAdd() {

//         // call create
//         await createJobOrder(jobOrder)


//         setJobOrder(initValue)

//         props.fetchJobOrderList()
//     }

//     return (

//         <ModalContent
//             buttonName="Add"
//             handleClick={onClickAdd}
//             title="Add Job Order"
//             onClose={props.onClose}
//         >

//             {/* Date */}
//             <DateInput
//                 id="dateInputJobOrder"
//                 label="Name"
//                 value={jobOrder.date}
//                 onChange={(value) => {
//                     setJobOrder({ ...jobOrder, date: value })
//                 }}
//             />

//             {/* type */}
//             <CustomRadioButton
//                 option={[{ name: "Comapny", value: "Company" }, { name: "Domestic", value: "Domestic" }]}
//                 onChange={(value) => setJobOrder({ ...jobOrder, type: value })}
//                 label="Type"
//                 value={jobOrder.type}
//             />

//             {/* country */}
//             <CustomSelectComponent
//                 value={jobOrder.CountryId}
//                 options={selectOptionConveter({ options: props.countryList, options_struct: { name: "name", value: "id" } })}
//                 onChange={(value) => setJobOrder({ ...jobOrder, CountryId: value })}
//                 label="Country"
//             />

//             {/* sector */}
//             <CustomSelectComponent
//                 value={jobOrder.sectorId}
//                 options={selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })}
//                 onChange={(value) => setJobOrder({ ...jobOrder, sectorId: value })}
//                 label="Sector"
//             />

//             {/* jobOrder BDE */}
//             <CustomSelectComponent
//                 value={jobOrder.BDEName}
//                 options={selectOptionConveter({ options: BDEList, options_struct: { name: "name", value: "id" } })}
//                 onChange={(value) => setJobOrder({ ...jobOrder, BDEName: value })}
//                 label="BDEName"
//             />

//             {/* company */}
//             <CustomSelectComponent
//                 value={jobOrder.companyId}
//                 options={selectOptionConveter({ options: props.companyList, options_struct: { name: "name", value: "id" } })}
//                 onChange={(value) => setJobOrder({ ...jobOrder, companyId: value })}
//                 label="Company"
//             />

//             {/* division */}
//             <StandardInput
//                 onChangeValue={(value: string) => setJobOrder({ ...jobOrder, division: value })}
//                 label="Division"
//                 value={jobOrder.division}
//             />

//             {/* depature sector */}
//             <CustomSelectComponent
//                 value={jobOrder.departureSectorId}
//                 options={selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })}
//                 onChange={(value) => setJobOrder({ ...jobOrder, departureSectorId: value })}
//                 label="Departure Sector"
//             />

//             <FileInput handleFileChange={(file) => setJobOrder({ ...jobOrder, file1: file })} />

//             <FileInput handleFileChange={(file) => setJobOrder({ ...jobOrder, file2: file })} />

//             <FileInput handleFileChange={(file) => setJobOrder({ ...jobOrder, file3: file })} />

//             <FileInput handleFileChange={(file) => setJobOrder({ ...jobOrder, file4: file })} />

//             <FileInput handleFileChange={(file) => setJobOrder({ ...jobOrder, file5: file })} />

//         </ModalContent>
//     )
// }