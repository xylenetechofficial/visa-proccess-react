import { createReturnPayment, readBulkPaymentList } from "../repository";
import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import { BulkPaymentInterface } from "../type";

import CandidateTable from "./CandidateTable";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
import { readAgentList } from "../../../masters/agent/repository";
import { AgentInterface } from "../../../masters/agent/type";
import { TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";
import { showMessage_v2 } from "../../../../utils/alert";


export default function Main(props: {
    onClose: any,
    fetchAgentReturnPaymentList: any
}) {

    async function onClickAdd() {
        const newArray = []
        let amount_to_be_deduct = totalAmount

        for (let i = 0; i < bulkPaymentList.length; i++) {
            if (amount_to_be_deduct < 1)
                continue

            if (bulkPaymentList[i].checked) {
                amount_to_be_deduct -= bulkPaymentList[i].available_amount
                newArray.push(bulkPaymentList[i].id)
            }
        }

        if (amount_to_be_deduct > 0)
            return showMessage_v2({ message: "Not Enough", status: 400 });

        console.log(newArray);   // Only Dev
        // return
        // call create
        const res = await createReturnPayment({
            agent_id: agent,
            amount: totalAmount,
            description: description,
            bulk_payment_id_list: newArray,
        })

        if (!res)
            return;

        props.fetchAgentReturnPaymentList()
        props.onClose()
    }

    const [agentList, setAgentList] = useState<AgentInterface[]>([])
    const [totalAmount, setTotalAmount] = useState(0)
    const [description, setDescription] = useState('')
    // const [bulkPaymentIDList, setBulkPaymentIDList] = useState<number[]>([])


    const [agent, setAgent] = useState(0)

    const fetchAgentList = async () => {
        const data = await readAgentList();
        console.log(data);
        setAgentList(data)
    }
    useEffect(() => {
        fetchAgentList()
    }, [])

    const [bulkPaymentList, setBulkPaymentList] = useState<BulkPaymentInterface[]>([])

    const fetchBulkPaymentList = async (ag: any) => {
        const data = await readBulkPaymentList(ag);
        console.log(data);
        setBulkPaymentList(data)
    }

    return (

        <FullScreenModal
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add Return Entry"
            onClose={props.onClose}
        >
            <UpdateContentBox>
                <SubHeading1 text="Agent: " />
                <CustomSelectComponentUnlabeled
                    onChange={(value) => {
                        setAgent(parseInt(value))
                        fetchBulkPaymentList(parseInt(value))
                    }}
                    options={selectOptionConveter({ options: agentList, options_struct: { name: "name", value: "id" } })}
                    value={agent}
                />
            </UpdateContentBox>
            <UpdateContentBox>
                <SubHeading1 text="Amount :" />
                <UnlabeledInput 
type="number"
                     value={totalAmount} onchange={(value) =>
                    setTotalAmount(parseInt(value))
                } />
            </UpdateContentBox>
            <UpdateContentBox>
                <SubHeading1 text="Description :" />
                <TextAreaInput
                    id="Dfs"
                    onChange={(value) =>
                        setDescription(value)
                    } />
            </UpdateContentBox>

            <CandidateTable
                bulkPaymentList={bulkPaymentList}
                onChange={(ele) => {
                    setBulkPaymentList(ele)
                }}
            />
        </FullScreenModal>
    )
}