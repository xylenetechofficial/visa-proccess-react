import { createMofaEntry, readMofaEntryCandiateList } from "../repository";
import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import { Mofa_Entry_Candidate_Interface } from "../type";

import CandidateTable from "./CandidateTable";


export default function Main(props: {
    onClose: any,
    fetchMofaEntryCandiateList: any
}) {

   

    // const [JobOrderList, setJobOrderList] = useState<SendToMofa_JobOrderInterface[]>([])
    

    async function onClickAdd() {
        const newArray = []
        for(let i=0;i<candidateList.length;i++){
            if(candidateList[i].checked){
                newArray.push(candidateList[i])
            }
        }
        // call create
        const res = await createMofaEntry(newArray)
     
        if(res.code!=201){
            return;
        }
        // props.fetchMofaEntryCandiateList();
        fetchMofaEntryCandiateList();
        props.onClose()
    }

    const [candidateList, setCandidateList] = useState<Mofa_Entry_Candidate_Interface[]>([])
  
    const fetchMofaEntryCandiateList = async () => {
        const data = await readMofaEntryCandiateList("no");
        console.log(data);
        setCandidateList(data)
    }
    useEffect(() => {

        fetchMofaEntryCandiateList()


    }, [])



    // unset function



    return (

        <FullScreenModal
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add MOFA Entry"
            onClose={props.onClose}
        >
            <CandidateTable
                candidateList={candidateList}
                onChange={(ele)=>setCandidateList(ele)}
            
            />
        </FullScreenModal>
    )
}