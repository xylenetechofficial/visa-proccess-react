import { useEffect, useState } from "react";
import { updateAgentReturnPayment } from "../repository";
import { AgentReturnPaymentInterface } from "../type";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput, TextAreaInput } from "../../../../componenets/Input";


export default function Main(props: { currentElement: AgentReturnPaymentInterface, onClose: any, fetchAgentReturnPaymentList: any }) {
    const [amount, setAmount] = useState(0)
    const [description, setDescription] = useState('')





    async function onClickSave() {

        // call update
        await updateAgentReturnPayment(props.currentElement.id ?? 0, {
            agent_id: 0,
            amount: amount,
            description: description,
        })

        props.fetchAgentReturnPaymentList()
        props.onClose()
    }

    useEffect(() => {
        setAmount(props.currentElement.amount)
        setDescription(props.currentElement.description)

    }, [])

    return (


        <ModalContent
            buttonName="Update"
            handleClick={onClickSave}
            title="Update"
            onClose={props.onClose}
        >

            {/* name Input */}
            <StandardInput
                label="Amount"
                value={amount}
                onChangeValue={(value: string) => {
                    setAmount(parseInt(value));
                }}
            />
            <TextAreaInput
                label="Description"
                id="Dfs"
                value={description}
                onChange={(value) =>
                    setDescription(value)
                } />

        </ModalContent>
    )
}