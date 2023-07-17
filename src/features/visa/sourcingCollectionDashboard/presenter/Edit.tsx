import { readSourcingCollectionDashboardCandidate, updateSourcingCollectionDashboardCandidate } from "../repository";
import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import { Src_Col_Dash_CandidateInterface, Src_Col_Dash_JobOrderInterface, } from "../type";

import CandidateTable from "./CandidateTable";


export default function Main(props: {
    onClose: any,
    currentElement: Src_Col_Dash_JobOrderInterface
}) {





    async function onClickAdd() {
        // call create
        const res = await updateSourcingCollectionDashboardCandidate(candidateList)
        if (res.code != 201) {
            return;
        }
        fetchSourcingCollectionDashboardCandidate();


    }

    const [candidateList, setCandidateList] = useState<Src_Col_Dash_CandidateInterface[]>([])
    const fetchSourcingCollectionDashboardCandidate = async () => {
        const data = await readSourcingCollectionDashboardCandidate(props.currentElement.id ?? 0, "yes");
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
            buttonName="Update"
            handleClick={onClickAdd}
            title="Update Sourcing Collection Dashboard"
            onClose={props.onClose}
        >
            <CandidateTable
                candidateList={candidateList}
                onChange={(ele) => setCandidateList(ele)}

            />
        </FullScreenModal>
    )
}