import { updateDubaiDataEntry, updateDubaiDataEntryOne } from "../repository";
import { useEffect, useState } from "react";
import ModalContent from "../../../../componenets/Modal";
import { DateInput, FileInput, StandardInput, UnlabeledInput } from "../../../../componenets/Input";
// import { SectorInterface } from "../../../masters/sector/type";
// import { CompanyInterface } from "../../../masters/company/type";
import { DubaiDataEntryInterface } from "../type";
// import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
// import { CustomRadioButton } from "../../../../componenets/RadioButton";
// import { CountryInterface } from "../../../masters/country/type";
// import ActualProfessionTable from "./DubaiDataentryTable";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
// import { readVisaAuthorisationList } from "../../../masters/visaAuthorization/repository";
// import { VisaAuthorisationInterface } from "../../../masters/visaAuthorization/type";
// import { OPManagerList, currencyList, rcList, recruitManagerList } from "../../../job-dpt/db/user";
// import VisaProfessionTable from "./DubaiDataentryTable";
// import { GreenButton } from "../../../../componenets/CustomButton";


export default function Main(props: {
    onClose: () => void,
    currentElement: DubaiDataEntryInterface,
    onClickSubmit:(ele:DubaiDataEntryInterface)=>void
    fetchDubaiDataEntryList:()=>void
}) {

    const [element, setElement] = useState(props.currentElement)
   

    useEffect(() => {
        setElement(props.currentElement)
    }, [])
    return (

        <ModalContent
            buttonName="Submit"
            handleClick={()=>{
                props.onClickSubmit(element)
                
            }}
            title="CANDIDATE DOCUMENT CHARGES"
            onClose={props.onClose}
        >

            <div className=" grid grid-cols-1 py-3  gap-2 shadow">
                <UpdateContentBox>

                    <SubHeading1 text="Candidate Name  :" />
                    {props.currentElement.candidateName}
                </UpdateContentBox>



                <UpdateContentBox>
                    <SubHeading1 text=" COMPANY :" />
                    {props.currentElement.companyName}
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text=" Passport No :" />
                    {props.currentElement.passportNo}
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text=" Agent :" />
                    {props.currentElement.agent}
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text=" Document Charges :" />
                    <UnlabeledInput
                        value={element.documentCharges}
                        type="number"
                        onchange={(value) => setElement({ ...element, documentCharges: parseInt(value) })}
                    />
                </UpdateContentBox>



            </div>




        </ModalContent>
    )
}