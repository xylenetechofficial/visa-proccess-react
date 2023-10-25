
import { useEffect, useState } from "react";
import ModalContent from "../../../../componenets/Modal";
import { DateInput, FileInput, StandardInput, UnlabeledInput } from "../../../../componenets/Input";
import { SectorInterface } from "../../../masters/sector/type";
import { CompanyInterface } from "../../../masters/company/type";
import { SubmissionDashboardInterface } from "../type";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";



export default function Main(props: {
    onClose: () => void,
    currentElement: SubmissionDashboardInterface,
    onClickSubmit:(ele:SubmissionDashboardInterface)=>void
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
                    {props.currentElement.name}
                </UpdateContentBox>



                <UpdateContentBox>
                    <SubHeading1 text=" COMPANY :" />
                    {props.currentElement.company_name}
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text=" Passport No :" />
                    {props.currentElement.passport_no}
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text=" Agent :" />
                    {props.currentElement.agent_name}
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text=" Document Charges :" />
                    <UnlabeledInput
                        value={element.document_charges}
                        
// type="number"
                    
                        onchange={(value) => setElement({ ...element, document_charges: parseInt(value) })}
                    />
                </UpdateContentBox>



            </div>




        </ModalContent>
    )
}