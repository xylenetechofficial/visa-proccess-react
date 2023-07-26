import { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ClientAdditionalInvoiceTable from "./Table";
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { RedButton } from '../../../../componenets/CustomButton';
import CandidatesListTable from './Table';




export default function Main() {


    const [searchQuery, setSearchQuery] = useState("")
    const [data, setData] = useState('')
    const [candidatesList, setCandidatesList] = useState([])

    return (
        <div>

            <CustomNavbarV3 pageName="Account Candidates List" searchFunction={(query) => setSearchQuery(query)} />
           

            <CandidatesListTable
                candidatesList={candidatesList}
                setCandidatesList={setCandidatesList}
                data={data}
                setData={setData}
            />
        </div>

    );


}
