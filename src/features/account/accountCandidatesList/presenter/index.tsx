import { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ClientAdditionalInvoiceTable from "./Table";
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { RedButton } from '../../../../componenets/CustomButton';
import AccountCandidatesListTable from './Table';
import { readCandidateDiscountList } from '../repository';
import { AccountCandidateInterface } from '../type';




export default function Main() {


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
            />
        </div>

    );


}
