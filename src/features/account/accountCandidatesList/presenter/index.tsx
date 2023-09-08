import { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ClientAdditionalInvoiceTable from "./Table";
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { RedButton } from '../../../../componenets/CustomButton';
import AccountCandidatesListTable from './Table';
import { readCandidateDiscountList, updateCandidate } from '../repository';
import { AccountCandidateCancelInterface, AccountCandidateInterface } from '../type';
import CandidateCancel from './CandidateCancel';



export default function Main() {

    const initailState :AccountCandidateCancelInterface ={
        
    "is_without": 0,
    "visa_cancel_penalty": 0,
    "visa_cancel_remarks": ""
    }
    const [searchQuery, setSearchQuery] = useState("")
    const [data, setData] = useState('')
    const [candidatesList, setCandidatesList] = useState<AccountCandidateInterface[]>([])

    const fetchAccoundCandidates =async ()=>{

    const data :any = await readCandidateDiscountList();
    console.log(data,"ddd")
    if(data){
        setCandidatesList(data);
    }
    }
    const [modalName,setModalName]= useState('')
    const [currentData, setCurrentData]= useState<AccountCandidateInterface>()
    const onClickEdit =(data:any)=>{
        setCurrentData(data);
        setModalName('cancel');
    }
    const [updateCandidateData,setUpdateCandidateData] = useState(initailState)
    const onCLickUpdate =async()=>{
        const data:any = await updateCandidate(1,updateCandidateData)
    }
    useEffect(()=>{
        fetchAccoundCandidates();
    },[])
    return (
        <div>

            <CustomNavbarV3 pageName="Account Candidates List" searchFunction={(query) => setSearchQuery(query)} />
           

            <AccountCandidatesListTable
                candidatesList={candidatesList}
                setCandidatesList={setCandidatesList}
                data={data}
                setData={setData}
                onClickEdit={(value)=>onClickEdit(value)}
            />
            {modalName ==='cancel'?  
            <CandidateCancel onClose={()=>setModalName('')} currentData={currentData} /> :''}
        </div>
        

    );


}
