import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import Table from "./Table";
import { AdditionalDataInterface } from "../../../../utils/api_helper";
import { VisaReceivedInterface } from "../type";
import { readVisaReceivedDate, updateVisaReceivedData } from "../repository";


export default function Main(props: {
    onClose: ()=>void,
    currentElement: any

}) {

    const [JobOrderList, setJobOrderList] = useState<VisaReceivedInterface[]>([]);
    const [additionalData, setAdditionalData] = useState<AdditionalDataInterface>(
        {
          pagination: {
            page: 1,
            page_count: 1,
            item_count: 0,
            sno_base: 0,
          },
        }
      );
    

    const [candidateList, setCandidateList] = useState<any[]>([])

    const fetchVisareceived = async () => {
        const data = await readVisaReceivedDate(props.currentElement.id ?? 0,"no");
        if (data) {
            setJobOrderList(data);
            setCandidateList(data)
        }
    }
    useEffect(() => {
        fetchVisareceived();
    }, [])

    async function onClickAdd() {
        const newArray = []
        for(let i=0;i<candidateList.length;i++){
            if(candidateList[i].checked){
                newArray.push(candidateList[i])
            }
        }
        // call create
        const res = await updateVisaReceivedData(newArray)
        props.onClose();
        if (res.code != 201) {
            return;
        }
        fetchVisareceived()
    }


    return (

        <FullScreenModal
            buttonName="Update"
            handleClick={onClickAdd}
            title="Update Visa Received "
            onClose={props.onClose}
        >
           <Table 
              snoBase={additionalData.pagination.sno_base}
              jobOrderList={candidateList}
              onChange={(value) => setCandidateList(value)}/>
        </FullScreenModal>
    )
}