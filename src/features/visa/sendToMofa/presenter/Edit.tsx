import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import CandidateTable from "./CandidateTable";
import { SendToMofa_JobOrderInterface } from "../type";
import { readSendToMofaJobOrder, updateSendToMofaCandidate } from "../repository";


export default function Main(props: {
    onClose: ()=>void,
    currentElement: SendToMofa_JobOrderInterface

}) {

    const [candidateList, setCandidateList] = useState<SendToMofa_JobOrderInterface[]>([])

    const fetchSendToMofaCandidate = async () => {
        const data = await readSendToMofaJobOrder("no",props.currentElement.id ?? 0);
        if (data) {
            setCandidateList(data);
        }
    }
    useEffect(() => {
        fetchSendToMofaCandidate();
    }, [])

    async function onClickAdd() {
        const newArray = []
        for(let i=0;i<candidateList.length;i++){
            if(candidateList[i].checked){
                newArray.push(candidateList[i])
            }
        }
        // call create
        const res = await updateSendToMofaCandidate(newArray)
        props.onClose();
        if (res.code != 201) {
            return;
        }
        fetchSendToMofaCandidate();
    }


    return (

        <FullScreenModal
            buttonName="Update"
            handleClick={onClickAdd}
            title="Update Send to Mofa"
            onClose={props.onClose}
        >
            <CandidateTable
                candidateList={candidateList}
                onChange={(ele) => setCandidateList(ele)}

            />
        </FullScreenModal>
    )
}