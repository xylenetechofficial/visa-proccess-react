import {  readCandidateDiscount, updateCandidateDiscount } from "../repository";
import { useEffect, useState } from "react";
import  { FullScreenModal } from "../../../../componenets/Modal";
import { DateInput,  UnlabeledInput } from "../../../../componenets/Input";
import { CompanyInterface } from "../../../masters/company/type";
import { CandidateDiscountInterface, VisaProfesionInterface } from "../type";
import {  CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { CountryInterface } from "../../../masters/country/type";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { readVisaAuthorisationList } from "../../../masters/visaAuthorization/repository";
import { VisaAuthorisationInterface } from "../../../masters/visaAuthorization/type";
import { OPManagerList, rcList, recruitManagerList } from "../../../job-dpt/db/user";
import VisaProfessionTable from "./VisaProfessionTable";


export default function Main(props: {
    onClose: ()=>void, 
    fetchCandidateDiscountList: ()=>void,
    currentElement:CandidateDiscountInterface, 
    
    companyList: CompanyInterface[],
    countryList: CountryInterface[],
}) {

    const initValue: CandidateDiscountInterface = {
        id: 0,
        arabic_sponsor_name: "",
        company: 0,
        country: 0,
        division: "",
        index_date: "",
        om: 0,
        quantity: 0,
        rc: 0,
        rm: 0,
        sponsor_id: "",
        visa_accountable: 0,
        visa_authorization: 0,
        visa_authorization_name: 0,
        visa_number: "",
        visa_date_arabic: "",
        visa_expiry_date: "",
        visa_fee: 0,
        visa_issued_date: "",
        visa_submission: "",
    }

    const [CandidateDiscount, setCandidateDiscount] = useState(initValue)
    const [visaProfessionList, setVisaProfessionList] = useState<VisaProfesionInterface[]>([])



    async function onClickAdd() {

        // call create
        const newArray :any={...CandidateDiscount,visaProfessionList:visaProfessionList}
   
        // const flag = await updateCandidateDiscount(props.currentElement.id??0,newArray)
        const flag = await updateCandidateDiscount(newArray)

       
        setCandidateDiscount(initValue)
        props.fetchCandidateDiscountList()
    }
    const [visaAuhorisationList, setvisaAuhorisationList] = useState<VisaAuthorisationInterface[]>([])
    const fetchvisaAuhorisationList = async () => {
        const data = await readVisaAuthorisationList();
        if (data) {
            setvisaAuhorisationList(data);
        }
    }
    const fetchCandidateDiscount= async () => {
        const data = await readCandidateDiscount(props.currentElement.id??0);
        if (data) {
            setCandidateDiscount(data);
            setVisaProfessionList(data.visaProfessionList??[])
        }
    }
    useEffect(() => {
        fetchvisaAuhorisationList();
        fetchCandidateDiscount()
        
    }, [])

    return (

        <FullScreenModal
            buttonName="Update"
            handleClick={onClickAdd}
            title="Update Block Visa"
            onClose={props.onClose}
        >

            <div className=" grid grid-cols-1 py-3  gap-2 shadow">
                <UpdateContentBox>

                    <SubHeading1 text="Index Date  :" />
                    <DateInput
                        id="sd;fksdakj"
                        value={CandidateDiscount.index_date}
                        onChange={(value) => setCandidateDiscount({ ...CandidateDiscount, index_date: value })}
                    />
                </UpdateContentBox>



                <UpdateContentBox>
                    <SubHeading1 text=" COMPANY :" />
                    <CustomSelectComponentUnlabeled
                        onChange={(value) => setCandidateDiscount({ ...CandidateDiscount, company: value })}

                        options={selectOptionConveter({ options: props.companyList, options_struct: { name: "name", value: "id" } })}
                        value={CandidateDiscount.company}
                    />
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text=" Country :" />
                    <CustomSelectComponentUnlabeled
                        onChange={(value) => setCandidateDiscount({ ...CandidateDiscount, country: value })}

                        options={selectOptionConveter({ options: props.countryList, options_struct: { name: "name", value: "id" } })}
                        value={CandidateDiscount.country}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="Quantity  :" />
                    <UnlabeledInput
                        value={CandidateDiscount.quantity}
                        onchange={(value) => setCandidateDiscount({ ...CandidateDiscount, quantity: parseInt(value) })}
                    />
                </UpdateContentBox>


                <UpdateContentBox>

                    <SubHeading1 text="Visa Date(Arabic) :" />
                    <UnlabeledInput
                        value={CandidateDiscount.visa_date_arabic}
                        onchange={(value) => setCandidateDiscount({ ...CandidateDiscount, visa_date_arabic: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="Visa number:" />
                    <UnlabeledInput
                        value={CandidateDiscount.visa_number}
                        onchange={(value) => setCandidateDiscount({ ...CandidateDiscount, visa_number: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="Visa fee :" />
                    <UnlabeledInput
                        value={CandidateDiscount.visa_fee}
                        onchange={(value) => setCandidateDiscount({ ...CandidateDiscount, visa_fee: parseInt(value) })}
                    />
                </UpdateContentBox>


                <UpdateContentBox>

                    <SubHeading1 text="Visa Issue DAte :" />
                    <DateInput
                        id="asdfsadfsadfsdfsa"
                        value={CandidateDiscount.visa_issued_date}
                        onChange={(value) => setCandidateDiscount({ ...CandidateDiscount, visa_issued_date: value })}
                    />
                </UpdateContentBox>





                <UpdateContentBox>

                    <SubHeading1 text="VISA AUTHORIZATION:  :" />

                    <CustomSelectComponentUnlabeled
                        value={CandidateDiscount.visa_authorization}
                        onChange={(value) => setCandidateDiscount({ ...CandidateDiscount, visa_authorization: value })}
                        options={selectOptionConveter({ options: visaAuhorisationList, options_struct: { name: "name", value: "id" } })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="visa submission:" />
                    <CustomSelectComponentUnlabeled
                        options={[
                            { name: "Mumbai", value: "Mumbai" },
                            { name: "Delhi", value: "Delhi" },

                        ]}
                        value={CandidateDiscount.visa_submission}
                        onChange={(value) => setCandidateDiscount({ ...CandidateDiscount, visa_submission: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="Arabic Sponsor Name :" />
                    <UnlabeledInput
                        value={CandidateDiscount.arabic_sponsor_name}
                        onchange={(value) => setCandidateDiscount({ ...CandidateDiscount, arabic_sponsor_name: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="Sponsor Id:" />
                    <UnlabeledInput
                        value={CandidateDiscount.sponsor_id}
                        onchange={(value) => setCandidateDiscount({ ...CandidateDiscount, sponsor_id: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="Visa expiry date :" />
                    <DateInput
                        id="adsfdsfadfsdafdsfdsafas"
                        value={CandidateDiscount.visa_expiry_date}
                        onChange={(value) => setCandidateDiscount({ ...CandidateDiscount, visa_expiry_date: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="Division :" />
                    <UnlabeledInput
                        value={CandidateDiscount.division}
                        onchange={(value) => setCandidateDiscount({ ...CandidateDiscount, division: value })}
                    />
                </UpdateContentBox>


                <UpdateContentBox>

                    <SubHeading1 text="OM:  :" />

                    <CustomSelectComponentUnlabeled
                        value={CandidateDiscount.om}
                        onChange={(value) => setCandidateDiscount({ ...CandidateDiscount, om: value })}
                        options={selectOptionConveter({ options: OPManagerList, options_struct: { name: "name", value: "id" } })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="RM:  :" />

                    <CustomSelectComponentUnlabeled
                        value={CandidateDiscount.rm}
                        onChange={(value) => setCandidateDiscount({ ...CandidateDiscount, rm: value })}
                        options={selectOptionConveter({ options: recruitManagerList, options_struct: { name: "name", value: "id" } })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="RC:  :" />

                    <CustomSelectComponentUnlabeled
                        value={CandidateDiscount.rc}
                        onChange={(value) => setCandidateDiscount({ ...CandidateDiscount, rc: value })}
                        options={selectOptionConveter({ options: rcList, options_struct: { name: "name", value: "id" } })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="RC:  :" />

                    <CustomRadioButton
                        value={CandidateDiscount.visa_accountable}
                        onChange={(value) => setCandidateDiscount({ ...CandidateDiscount, visa_accountable: value })}
                        option={[
                            { name: "Yes", value: 1 },
                            { name: "No", value: 0 },
                        ]}
                    />
                </UpdateContentBox>



            </div>


            <VisaProfessionTable
                visaProfessionList={visaProfessionList}
                onChange={(value) => setVisaProfessionList(value)}
            />

        </FullScreenModal>
    )
}