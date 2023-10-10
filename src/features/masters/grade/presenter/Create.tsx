import { createGrade } from "../repository";
import { useState } from "react";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";


export default function Main(props: { onClose: any, fetchGradeList: any }) {
    const [name, setName] = useState('')
    const [point, setPoint] = useState(0)



    async function onClickAdd() {

        // call create
        await createGrade({
            name: name,
            point: point
        })


        setName('')

        props.fetchGradeList()
        props.onClose()
    }

    return (

        <ModalContent
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add Agent"
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
           

            {/* grade Input */}
            <StandardInput
                label="Point"
                type="number"
                value={point}
                onChangeValue={(value: string) => {
                    setPoint(parseInt(value));
                }}
            />

            
        </ModalContent>
    )
}