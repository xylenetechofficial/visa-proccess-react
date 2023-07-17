import { useEffect, useState } from "react";
import { updateGrade } from "../repository";
import { GradeInterface } from "../type";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";


export default function Main(props: { grade: GradeInterface, onClose: any, fetchGradeList: any }) {
    const [name, setName] = useState('')
    const [point, setPoint] = useState(0)





    async function onClickSave() {

        // call update
        await updateGrade(props.grade.id ?? 0, {
            name: name,
            point: point
        })

        props.fetchGradeList()
        props.onClose()
    }

    useEffect(() => {
        setName(props.grade.name)
        setPoint(props.grade.point)

    }, [])

    return (

        <ModalContent
        buttonName="Update"
        handleClick={onClickSave}
        title="Update Grade"
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