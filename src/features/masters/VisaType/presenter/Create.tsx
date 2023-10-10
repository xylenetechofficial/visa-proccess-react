import { createVisaType } from "../repository";
import { useState } from "react";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";
import { VisaTypeInterface } from "../type";


export default function Main(props: { onClose: any, fetchVisaTypeList: any }) {
    const initValue: VisaTypeInterface = {
        id: 0,
        name: '',
        mofa_fee: 0,
        visa_fee: 0,
        visa_validity_single_entry: 0,
        visa_validity_multiple_entry: 0
    }

    const [visaType, setVisaType] = useState(initValue)

    async function onClickAdd() {

        // call create
        await createVisaType(visaType)

        setVisaType(initValue)
        props.fetchVisaTypeList()
        props.onClose()
    }

    return (

        <ModalContent
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add Visa Type"
            onClose={props.onClose}
        >

            {/* name Input */}
            <StandardInput
                label="Name"
                value={visaType.name}
                onChangeValue={(value: string) => {
                    setVisaType({ ...visaType, name: value });
                }}
            />


            {/* visaType Input */}
            <StandardInput
                label="Mofa Fees"
                type="number"
                value={visaType.mofa_fee}
                onChangeValue={(value: string) => {
                    setVisaType({ ...visaType, mofa_fee: parseInt(value) });
                }}
            />

            <StandardInput
                label="Visa Fees"
                type="number"
                value={visaType.visa_fee}
                onChangeValue={(value: string) => {
                    setVisaType({ ...visaType, visa_fee: parseInt(value) });
                }}
            />

            <StandardInput
                label="Single Entry"
                type="number"
                value={visaType.visa_validity_single_entry}
                onChangeValue={(value: string) => {
                    setVisaType({ ...visaType, visa_validity_single_entry: parseInt(value) });
                }}
            />

            <StandardInput
                label="Multiple Entry"
                type="number"
                value={visaType.visa_validity_multiple_entry}
                onChangeValue={(value: string) => {
                    setVisaType({ ...visaType, visa_validity_multiple_entry: parseInt(value) });
                }}
            />


        </ModalContent>
    )
}