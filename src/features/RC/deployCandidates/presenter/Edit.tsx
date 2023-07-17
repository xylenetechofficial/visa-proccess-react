// import { createBlockVisa, readBlockVisa, updateBlockVisa } from "../repository";
// import { useEffect, useState } from "react";
// import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
// import { DateInput, FileInput, StandardInput, UnlabeledInput } from "../../../../componenets/Input";
// import { SectorInterface } from "../../../masters/sector/type";
// import { CompanyInterface } from "../../../masters/company/type";
// import { BlockVisaInterface, VisaProfesionInterface } from "../type";
// import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
// import { CustomRadioButton } from "../../../../componenets/RadioButton";
// import { CountryInterface } from "../../../masters/country/type";
// import ActualProfessionTable from "./VisaProfessionTable";
// import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
// import { readVisaAuthorisationList } from "../../../masters/visaAuthorization/repository";
// import { VisaAuthorisationInterface } from "../../../masters/visaAuthorization/type";
// // import { OPManagerList, rcList, recruitManagerList } from "../../../job-dpt/db/user";
// import VisaProfessionTable from "./VisaProfessionTable";


// export default function Main(props: {
//     onClose: ()=>void, 
//     fetchBlockVisaList: ()=>void,
//     currentElement:BlockVisaInterface, 
//     sectorList: SectorInterface[],
//     companyList: CompanyInterface[],
//     countryList: CountryInterface[],
// }) {

//     const initValue: BlockVisaInterface = {
//         id: 0,
//         arabic_sponsor_name: "",
//         company: 0,
//         country: 0,
//         division: "",
//         index_date: "",
//         om: 0,
//         quantity: 0,
//         rc: 0,
//         rm: 0,
//         sponsor_id: "",
//         visa_accountable: 0,
//         visa_authorization: 0,
//         visa_number: "",
//         visa_date_arabic: "",
//         visa_expiry_date: "",
//         visa_fee: 0,
//         visa_issued_date: "",
//         visa_submission: "",
//     }

//     const [blockVisa, setBlockVisa] = useState(initValue)
//     const [visaProfessionList, setVisaProfessionList] = useState<VisaProfesionInterface[]>([])



//     async function onClickAdd() {

//         // call create
//         const newArray={...blockVisa,visaProfessionList:visaProfessionList}
   
//         const flag = await updateBlockVisa(props.currentElement.id??0,newArray)

       
//         setBlockVisa(initValue)
//         props.fetchBlockVisaList()
//     }
//     const [visaAuhorisationList, setvisaAuhorisationList] = useState<VisaAuthorisationInterface[]>([])
//     const fetchvisaAuhorisationList = async () => {
//         const data = await readVisaAuthorisationList();
//         if (data) {
//             setvisaAuhorisationList(data);
//         }
//     }
//     const fetchBlockVisa= async () => {
//         const data = await readBlockVisa(props.currentElement.id??0);
//         if (data) {
//             setBlockVisa(data);
//             setVisaProfessionList(data.visaProfessionList??[])
//         }
//     }
//     useEffect(() => {
//         fetchvisaAuhorisationList();
//         fetchBlockVisa()
//         // setBlockVisa(props.currentElement)
//         // setVisaProfessionList(props.currentElement.visaProfessionList??[])
//     }, [])

//     return (

//         <FullScreenModal
//             buttonName="Update"
//             handleClick={onClickAdd}
//             title="Update Block Visa"
//             onClose={props.onClose}
//         >

//             <div className="grid grid-cols-1 gap-2 py-3 shadow ">
//                 <UpdateContentBox>

//                     <SubHeading1 text="Index Date  :" />
//                     <DateInput
//                         id="sd;fksdakj"
//                         value={blockVisa.index_date}
//                         onChange={(value) => setBlockVisa({ ...blockVisa, index_date: value })}
//                     />
//                 </UpdateContentBox>



//                 <UpdateContentBox>
//                     <SubHeading1 text=" COMPANY :" />
//                     <CustomSelectComponentUnlabeled
//                         onChange={(value) => setBlockVisa({ ...blockVisa, company: value })}

//                         options={selectOptionConveter({ options: props.companyList, options_struct: { name: "name", value: "id" } })}
//                         value={blockVisa.company}
//                     />
//                 </UpdateContentBox>

//                 <UpdateContentBox>
//                     <SubHeading1 text=" Country :" />
//                     <CustomSelectComponentUnlabeled
//                         onChange={(value) => setBlockVisa({ ...blockVisa, country: value })}

//                         options={selectOptionConveter({ options: props.countryList, options_struct: { name: "name", value: "id" } })}
//                         value={blockVisa.country}
//                     />
//                 </UpdateContentBox>

//                 <UpdateContentBox>

//                     <SubHeading1 text="Quantity  :" />
//                     <UnlabeledInput
//                         value={blockVisa.quantity}
//                         onchange={(value) => setBlockVisa({ ...blockVisa, quantity: parseInt(value) })}
//                     />
//                 </UpdateContentBox>


//                 <UpdateContentBox>

//                     <SubHeading1 text="Visa Date(Arabic) :" />
//                     <UnlabeledInput
//                         value={blockVisa.visa_date_arabic}
//                         onchange={(value) => setBlockVisa({ ...blockVisa, visa_date_arabic: value })}
//                     />
//                 </UpdateContentBox>
//                 <UpdateContentBox>

//                     <SubHeading1 text="Visa number:" />
//                     <UnlabeledInput
//                         value={blockVisa.visa_number}
//                         onchange={(value) => setBlockVisa({ ...blockVisa, visa_number: value })}
//                     />
//                 </UpdateContentBox>
//                 <UpdateContentBox>

//                     <SubHeading1 text="Visa fee :" />
//                     <UnlabeledInput
//                         value={blockVisa.visa_fee}
//                         onchange={(value) => setBlockVisa({ ...blockVisa, visa_fee: parseInt(value) })}
//                     />
//                 </UpdateContentBox>


//                 <UpdateContentBox>

//                     <SubHeading1 text="Visa Issue DAte :" />
//                     <DateInput
//                         id="asdfsadfsadfsdfsa"
//                         value={blockVisa.visa_issued_date}
//                         onChange={(value) => setBlockVisa({ ...blockVisa, visa_issued_date: value })}
//                     />
//                 </UpdateContentBox>





//                 <UpdateContentBox>

//                     <SubHeading1 text="VISA AUTHORIZATION:  :" />

//                     <CustomSelectComponentUnlabeled
//                         value={blockVisa.visa_authorization}
//                         onChange={(value) => setBlockVisa({ ...blockVisa, visa_authorization: value })}
//                         options={selectOptionConveter({ options: visaAuhorisationList, options_struct: { name: "name", value: "id" } })}
//                     />
//                 </UpdateContentBox>

//                 <UpdateContentBox>

//                     <SubHeading1 text="visa submission:" />
//                     <CustomSelectComponentUnlabeled
//                         options={[
//                             { name: "Mumbai", value: "Mumbai" },
//                             { name: "Delhi", value: "Delhi" },

//                         ]}
//                         value={blockVisa.visa_submission}
//                         onChange={(value) => setBlockVisa({ ...blockVisa, visa_submission: value })}
//                     />
//                 </UpdateContentBox>

//                 <UpdateContentBox>

//                     <SubHeading1 text="Arabic Sponsor Name :" />
//                     <UnlabeledInput
//                         value={blockVisa.arabic_sponsor_name}
//                         onchange={(value) => setBlockVisa({ ...blockVisa, arabic_sponsor_name: value })}
//                     />
//                 </UpdateContentBox>

//                 <UpdateContentBox>

//                     <SubHeading1 text="Sponsor Id:" />
//                     <UnlabeledInput
//                         value={blockVisa.sponsor_id}
//                         onchange={(value) => setBlockVisa({ ...blockVisa, sponsor_id: value })}
//                     />
//                 </UpdateContentBox>

//                 <UpdateContentBox>

//                     <SubHeading1 text="Visa expiry date :" />
//                     <DateInput
//                         id="adsfdsfadfsdafdsfdsafas"
//                         value={blockVisa.visa_expiry_date}
//                         onChange={(value) => setBlockVisa({ ...blockVisa, visa_expiry_date: value })}
//                     />
//                 </UpdateContentBox>

//                 <UpdateContentBox>

//                     <SubHeading1 text="Division :" />
//                     <UnlabeledInput
//                         value={blockVisa.division}
//                         onchange={(value) => setBlockVisa({ ...blockVisa, division: value })}
//                     />
//                 </UpdateContentBox>


//                 <UpdateContentBox>

//                     <SubHeading1 text="OM:  :" />

//                     <CustomSelectComponentUnlabeled
//                         value={blockVisa.om}
//                         onChange={(value) => setBlockVisa({ ...blockVisa, om: value })}
//                         options={selectOptionConveter({ options: OPManagerList, options_struct: { name: "name", value: "id" } })}
//                     />
//                 </UpdateContentBox>
//                 <UpdateContentBox>

//                     <SubHeading1 text="RM:  :" />

//                     <CustomSelectComponentUnlabeled
//                         value={blockVisa.rm}
//                         onChange={(value) => setBlockVisa({ ...blockVisa, rm: value })}
//                         options={selectOptionConveter({ options: recruitManagerList, options_struct: { name: "name", value: "id" } })}
//                     />
//                 </UpdateContentBox>
//                 <UpdateContentBox>

//                     <SubHeading1 text="RC:  :" />

//                     <CustomSelectComponentUnlabeled
//                         value={blockVisa.rc}
//                         onChange={(value) => setBlockVisa({ ...blockVisa, rc: value })}
//                         options={selectOptionConveter({ options: rcList, options_struct: { name: "name", value: "id" } })}
//                     />
//                 </UpdateContentBox>

//                 <UpdateContentBox>

//                     <SubHeading1 text="RC:  :" />

//                     <CustomRadioButton
//                         value={blockVisa.visa_accountable}
//                         onChange={(value) => setBlockVisa({ ...blockVisa, visa_accountable: value })}
//                         option={[
//                             { name: "Yes", value: 1 },
//                             { name: "No", value: 0 },
//                         ]}
//                     />
//                 </UpdateContentBox>



//             </div>


//             <VisaProfessionTable
//                 visaProfessionList={visaProfessionList}
//                 onChange={(value) => setVisaProfessionList(value)}
//             />

//         </FullScreenModal>
//     )
// }