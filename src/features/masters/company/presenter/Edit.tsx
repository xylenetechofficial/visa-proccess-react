import { useEffect, useState } from "react";
import { updateCompany } from "../repository";
import { CompanyInterface } from "../type";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CountryInterface } from "../../country/type";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";







export default function Main(props: { company: CompanyInterface, onClose: any, fetchCompanyList: any,countryList:CountryInterface[] }) {


    const initValue: CompanyInterface = {
        name: "",
        code:"",
        country:0,
    }
    const [company, setCompany] = useState(initValue)

   
    useEffect(() => {
        setCompany(props.company)
        
    }, [])


    async function onClickSave() {
         await updateCompany(props.company.id ?? 0, company)
       
        props.fetchCompanyList()
        props.onClose()
    }

    return (

        <ModalContent
            title="Update Company"
            onClose={props.onClose}
            buttonName="Update"
            handleClick={onClickSave}
        >
            {/* name Input */}
            <StandardInput
                value={company.name}
                onChangeValue={(value: string) => {
                    setCompany({ ...company, name: value })

                }}
                label="Agency Name"
            />


            {/* Location */}
            <CustomSelectComponent
                value={company.country}
                label="Country"
                options={
                    selectOptionConveter({ options: props.countryList, options_struct: { name: "name", value: "id" } })}

                onChange={(value) => {
                    setCompany({ ...company, country: value })

                }} />


            {/* name Input */}
            <StandardInput
                value={company.code}
                onChangeValue={(e: string) => {
                    setCompany({ ...company, code: e })

                }}
                label="Company Code"
            />
            



        </ModalContent>
    )
}