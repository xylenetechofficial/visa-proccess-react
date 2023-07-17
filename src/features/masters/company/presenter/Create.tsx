
import { useState } from "react";
import { CompanyInterface } from "../type";
import { CountryInterface } from "../../country/type";
import { createCompany } from "../repository";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";






export default function Main(props: { onClose: any, fetchCompanyList: any, countryList: CountryInterface[] }) {
    const initValue: CompanyInterface = {
        name: "",
        code: "",
        country: 0,

    }
    const [company, setCompany] = useState(initValue)


    async function onClickAdd() {
        // call create
        await createCompany(company)

        setCompany(initValue)

        props.fetchCompanyList()
    }





    return (

        <ModalContent
            title="Add Company"
            onClose={props.onClose}
            buttonName="Add"
            handleClick={onClickAdd}
        >
            {/* name Input */}
            <StandardInput
                value={company.name}
                onChangeValue={(value: string) => {
                    setCompany({ ...company, name: value })

                }}
                label="Company Name"
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