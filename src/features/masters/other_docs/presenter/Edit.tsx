import { useEffect, useState } from "react";
import { updateOtherDocs } from "../repository";
import { OtherDocsInterface } from "../type";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";



export default function Main(props: { otherDocs: OtherDocsInterface, onClose: any, fetchOtherDocsList: any }) {
    const [name, setName] = useState('')





    async function onClickSave() {

        // call update
        await updateOtherDocs(props.otherDocs.id ?? 0, {
            name: name,
        })

        props.fetchOtherDocsList()
        props.onClose()
    }

    useEffect(() => {
        setName(props.otherDocs.name)

    }, [])

    return (

        <ModalContent
            buttonName="Update"
            handleClick={onClickSave}
            title="Update Other Docs"
            onClose={props.onClose}
        >

            {/* name Input */}
            <StandardInput
                label="Name"
                value={name}
                onChangeValue={(value: string) => {
                    setName(value);
                }}
            />



        </ModalContent>
    )
}