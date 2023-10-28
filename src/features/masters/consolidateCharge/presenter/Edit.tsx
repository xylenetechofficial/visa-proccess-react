import { useEffect, useState } from "react";
import { updateConsolidateCharge } from "../repository";
import { ConsolidateChargeInterface } from "../type";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";


export default function Main(props: { consolidateCharge: ConsolidateChargeInterface, onClose: any, fetchConsolidateChargeList: any }) {
    const [name, setName] = useState('')
    const [charge, setCharge] = useState(0)





    async function onClickSave() {

        // call update
        await updateConsolidateCharge(props.consolidateCharge.id ?? 0, {
            name: name,
            charge: charge
        })

        props.fetchConsolidateChargeList()
        props.onClose()
    }

    useEffect(() => {
        setName(props.consolidateCharge.name)
        setCharge(props.consolidateCharge.charge)

    }, [])

    return (

      
        <ModalContent
            buttonName="Update"
            handleClick={onClickSave}
            title="Update Consolidate Charge"
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