import { useEffect, useState } from "react";
import { updateVisaType } from "../repository";
import { VisaTypeInterface } from "../type";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";


export default function Main(props: { visaType: VisaTypeInterface, onClose: any, fetchVisaTypeList: any }) {
    const initValue: VisaTypeInterface = {
        id: 0,
        name: '',
        mofa_fee: 0,
        visa_fee: 0,
        visa_validity_single_entry: 0,
        visa_validity_multiple_entry: 0
    }

    const [visaType, setVisaType] = useState(initValue)

    async function onClickSave() {

        // call update
        await updateVisaType(props.visaType.id ?? 0, visaType)

        props.fetchVisaTypeList()
        props.onClose()
    }

    useEffect(() => {
        setVisaType(props.visaType)

    }, [])

    return (

        <ModalContent
            buttonName="Update"
            handleClick={onClickSave}
            title="Update Visa Type"
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