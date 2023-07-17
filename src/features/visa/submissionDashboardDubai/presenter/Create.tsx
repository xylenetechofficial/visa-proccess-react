import { createSourcingCollectionDashboardCandidate, readSourcingCollectionDashboardCandidate, updateSourcingCollectionDashboardCandidate } from "../repository";
import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import {  Submission_Dash_CandidateInterface, Submission_Dash_JobOrderInterface,} from "../type";

import CandidateTable from "./CandidateTable";


export default function Main(props: {
    onClose: any,
    currentElement: Submission_Dash_JobOrderInterface
}) {

   

    

    async function onClickAdd() {
        // call create
        const newArray = []
        for(let i=0;i<candidateList.length;i++){
            if(candidateList[i].checked){
                newArray.push(candidateList[i])
            }
        }
        const res = await createSourcingCollectionDashboardCandidate(newArray)
     
        if(res.code!=201){
            return;
        }
        fetchSourcingCollectionDashboardCandidate();
        props.onClose()
    }

    const [candidateList, setCandidateList] = useState<Submission_Dash_CandidateInterface[]>([])
    const fetchSourcingCollectionDashboardCandidate = async () => {
        console.log(props.currentElement)
        const data = await readSourcingCollectionDashboardCandidate(props.currentElement.id??0,"no");
        if (data) {
            setCandidateList(data);
        }
    }
    useEffect(() => {
        fetchSourcingCollectionDashboardCandidate();
    }, [])



    // unset function



    return (

        <FullScreenModal
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add Submission Department Dashboard"
            onClose={props.onClose}
        >
            <CandidateTable
                candidateList={candidateList}
                onChange={(ele)=>setCandidateList(ele)}
            
            />
        </FullScreenModal>
    )
}