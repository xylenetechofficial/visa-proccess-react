// import { createIndexVisa, updateIndexVisa } from "../repository";
// import { useEffect, useState } from "react";
// import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
// import { DateInput, FileInput, StandardInput, UnlabeledInput } from "../../../../componenets/Input";
// import { SectorInterface } from "../../../masters/sector/type";
// import { CompanyInterface } from "../../../masters/company/type";
// import { IndexVisaInterface, VisaProfesionInterface } from "../type";
// import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
// import { CustomRadioButton } from "../../../../componenets/RadioButton";
// import { CountryInterface } from "../../../masters/country/type";
// import ActualAllocationTable from "./VisaAllocationTable";
// import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
// import { readVisaAuthorisationList } from "../../../masters/visaAuthorization/repository";
// import { VisaAuthorisationInterface } from "../../../masters/visaAuthorization/type";
// // import { OPManagerList, rcList, recruitManagerList } from "../../../job-dpt/db/user";
// import VisaAllocationTable from "./VisaAllocationTable";


// export default function Main(props: {
//     onClose: ()=>void, 
//     fetchIndexVisaList: ()=>void,
//     currentElement:IndexVisaInterface, 
//     sectorList: SectorInterface[],
//     companyList: CompanyInterface[],
//     countryList: CountryInterface[],
// }) {

//     const initValue: IndexVisaInterface = {
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

//     const [indexVisa, setIndexVisa] = useState(initValue)
//     const [visaAllocationList, setVisaAllocationList] = useState<VisaProfesionInterface[]>([])



//     async function onClickAdd() {

//         // call create
//         const flag = await updateIndexVisa(props.currentElement.id??0,indexVisa)

       
//         setIndexVisa(initValue)
//         props.fetchIndexVisaList()
//     }
//     const [visaAuhorisationList, setvisaAuhorisationList] = useState<VisaAuthorisationInterface[]>([])
//     const fetchvisaAuhorisationList = async () => {
//         const data = await readVisaAuthorisationList();
//         if (data) {
//             setvisaAuhorisationList(data);
//         }
//     }
//     useEffect(() => {
//         fetchvisaAuhorisationList();
//         setIndexVisa(props.currentElement)
//     }, [])

//     return (

//         <FullScreenModal
//             buttonName="Add"
//             handleClick={onClickAdd}
//             title="Add Job Order"
//             onClose={props.onClose}
//         >

//             <div className=" grid grid-cols-1 py-3  gap-2 shadow">
//                 <UpdateContentBox>

//                     <SubHeading1 text="Index Date  :" />
//                     <DateInput
//                         id="sd;fksdakj"
//                         value={indexVisa.index_date}
//                         onChange={(value) => setIndexVisa({ ...indexVisa, index_date: value })}
//                     />
//                 </UpdateContentBox>



//                 <UpdateContentBox>
//                     <SubHeading1 text=" COMPANY :" />
//                     <CustomSelectComponentUnlabeled
//                         onChange={(value) => setIndexVisa({ ...indexVisa, company: value })}

//                         options={selectOptionConveter({ options: props.companyList, options_struct: { name: "name", value: "id" } })}
//                         value={indexVisa.company}
//                     />
//                 </UpdateContentBox>

//                 <UpdateContentBox>
//                     <SubHeading1 text=" Country :" />
//                     <CustomSelectComponentUnlabeled
//                         onChange={(value) => setIndexVisa({ ...indexVisa, country: value })}

//                         options={selectOptionConveter({ options: props.companyList, options_struct: { name: "name", value: "id" } })}
//                         value={indexVisa.country}
//                     />
//                 </UpdateContentBox>

//                 <UpdateContentBox>

//                     <SubHeading1 text="Quantity  :" />
//                     <UnlabeledInput
//                         value={indexVisa.quantity}
//                         onchange={(value) => setIndexVisa({ ...indexVisa, quantity: parseInt(value) })}
//                     />
//                 </UpdateContentBox>


//                 <UpdateContentBox>

//                     <SubHeading1 text="Visa Date(Arabic) :" />
//                     <UnlabeledInput
//                         value={indexVisa.visa_date_arabic}
//                         onchange={(value) => setIndexVisa({ ...indexVisa, visa_date_arabic: value })}
//                     />
//                 </UpdateContentBox>
//                 <UpdateContentBox>

//                     <SubHeading1 text="Visa number:" />
//                     <UnlabeledInput
//                         value={indexVisa.visa_number}
//                         onchange={(value) => setIndexVisa({ ...indexVisa, visa_number: value })}
//                     />
//                 </UpdateContentBox>
//                 <UpdateContentBox>

//                     <SubHeading1 text="Visa fee :" />
//                     <UnlabeledInput
//                         value={indexVisa.visa_fee}
//                         onchange={(value) => setIndexVisa({ ...indexVisa, visa_fee: parseInt(value) })}
//                     />
//                 </UpdateContentBox>


//                 <UpdateContentBox>

//                     <SubHeading1 text="Visa Issue DAte :" />
//                     <DateInput
//                         id="asdfsadfsadfsdfsa"
//                         value={indexVisa.visa_issued_date}
//                         onChange={(value) => setIndexVisa({ ...indexVisa, visa_issued_date: value })}
//                     />
//                 </UpdateContentBox>





//                 <UpdateContentBox>

//                     <SubHeading1 text="VISA AUTHORIZATION:  :" />

//                     <CustomSelectComponentUnlabeled
//                         value={indexVisa.visa_authorization}
//                         onChange={(value) => setIndexVisa({ ...indexVisa, visa_authorization: value })}
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
//                         value={indexVisa.visa_submission}
//                         onChange={(value) => setIndexVisa({ ...indexVisa, visa_submission: value })}
//                     />
//                 </UpdateContentBox>

//                 <UpdateContentBox>

//                     <SubHeading1 text="Arabic Sponsor Name :" />
//                     <UnlabeledInput
//                         value={indexVisa.arabic_sponsor_name}
//                         onchange={(value) => setIndexVisa({ ...indexVisa, arabic_sponsor_name: value })}
//                     />
//                 </UpdateContentBox>

//                 <UpdateContentBox>

//                     <SubHeading1 text="Sponsor Id:" />
//                     <UnlabeledInput
//                         value={indexVisa.sponsor_id}
//                         onchange={(value) => setIndexVisa({ ...indexVisa, sponsor_id: value })}
//                     />
//                 </UpdateContentBox>

//                 <UpdateContentBox>

//                     <SubHeading1 text="Visa expiry date :" />
//                     <DateInput
//                         id="adsfdsfadfsdafdsfdsafas"
//                         value={indexVisa.visa_expiry_date}
//                         onChange={(value) => setIndexVisa({ ...indexVisa, visa_expiry_date: value })}
//                     />
//                 </UpdateContentBox>

//                 <UpdateContentBox>

//                     <SubHeading1 text="Division :" />
//                     <UnlabeledInput
//                         value={indexVisa.division}
//                         onchange={(value) => setIndexVisa({ ...indexVisa, division: value })}
//                     />
//                 </UpdateContentBox>


//                 <UpdateContentBox>

//                     <SubHeading1 text="OM:  :" />

//                     <CustomSelectComponentUnlabeled
//                         value={indexVisa.om}
//                         onChange={(value) => setIndexVisa({ ...indexVisa, om: value })}
//                         options={selectOptionConveter({ options: OPManagerList, options_struct: { name: "name", value: "id" } })}
//                     />
//                 </UpdateContentBox>
//                 <UpdateContentBox>

//                     <SubHeading1 text="RM:  :" />

//                     <CustomSelectComponentUnlabeled
//                         value={indexVisa.rm}
//                         onChange={(value) => setIndexVisa({ ...indexVisa, rm: value })}
//                         options={selectOptionConveter({ options: recruitManagerList, options_struct: { name: "name", value: "id" } })}
//                     />
//                 </UpdateContentBox>
//                 <UpdateContentBox>

//                     <SubHeading1 text="RC:  :" />

//                     <CustomSelectComponentUnlabeled
//                         value={indexVisa.rc}
//                         onChange={(value) => setIndexVisa({ ...indexVisa, rc: value })}
//                         options={selectOptionConveter({ options: rcList, options_struct: { name: "name", value: "id" } })}
//                     />
//                 </UpdateContentBox>

//                 <UpdateContentBox>

//                     <SubHeading1 text="RC:  :" />

//                     <CustomRadioButton
//                         value={indexVisa.visa_accountable}
//                         onChange={(value) => setIndexVisa({ ...indexVisa, visa_accountable: value })}
//                         option={[
//                             { name: "Yes", value: 1 },
//                             { name: "No", value: 0 },
//                         ]}
//                     />
//                 </UpdateContentBox>



//             </div>


//             <VisaAllocationTable
//                 visaAllocationList={visaAllocationList}
//                 onChange={(value) => setVisaAllocationList(value)}
//             />

//         </FullScreenModal>
//     )
// }