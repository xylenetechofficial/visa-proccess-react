import { createConsolidateCharge } from "../repository";
import { useState } from "react";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";


export default function Main(props: { onClose: any, fetchConsolidateChargeList: any }) {
    const [name, setName] = useState('')
    const [charge, setCharge] = useState(0)



    async function onClickAdd() {

        // call create
        await createConsolidateCharge({
            name: name,
            charge: charge
        })


        setName('')

        props.fetchConsolidateChargeList()
        props.onClose()
    }

    return (

        <ModalContent
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add Consolidate Charge"
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
            <StandardInput
                label="Charge"
                value={charge}
                
type="number"
                    
                onChangeValue={(value: string) => {
                    setCharge(parseInt(value));
                }}
            />

        </ModalContent>

    )
}