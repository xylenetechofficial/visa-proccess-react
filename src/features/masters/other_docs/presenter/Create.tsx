import { createOtherDocs } from "../repository";
import { useState } from "react";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";


export default function Main(props: { onClose: any, fetchOtherDocsList: any }) {
    const [name, setName] = useState('')




    async function onClickAdd() {

        // call create
        await createOtherDocs({
            name: name,
        })


        setName('')

        props.fetchOtherDocsList()
        props.onClose()
    }

    return (

        <ModalContent
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add Other Docs"
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