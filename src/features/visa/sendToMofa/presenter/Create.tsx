import {  createSendToMofaCandidate, readSendToMofaJobOrder, } from "../repository";
import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import {  SendToMofa_JobOrderInterface} from "../type";

import CandidateTable from "./CandidateTable";


export default function Main(props: {
    onClose: any,
    fetchSendToMofaJobOrder: any
}) {

   

    // const [JobOrderList, setJobOrderList] = useState<SendToMofa_JobOrderInterface[]>([])
    
    const [candidateList, setCandidateList] = useState<SendToMofa_JobOrderInterface[]>([])

    async function onClickAdd() {
        const newArray = []
        for(let i=0;i<candidateList.length;i++){
            if(candidateList[i].checked){
                newArray.push(candidateList[i])
            }
        }
        // call create
        const res = await createSendToMofaCandidate(newArray)
     
        if(res.code!=201){
            return;
        }
        props.fetchSendToMofaJobOrder();
        props.onClose()
    }

    const fetchSendToMofaJobOrder = async () => {
        const data = await readSendToMofaJobOrder("no");
        console.log(data);
        setCandidateList(data)
    }
    useEffect(() => {

        fetchSendToMofaJobOrder()


    }, [])



    // unset function



    return (

        <FullScreenModal
            buttonName="Add"
            handleClick={onClickAdd}
            title="Send to Mofa"
            onClose={props.onClose}
        >
            <CandidateTable
                candidateList={candidateList}
                onChange={(ele)=>setCandidateList(ele)}
            
            />
        </FullScreenModal>
    )
}