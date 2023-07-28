import { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { BlueButton } from '../../../../componenets/CustomButton';
import PP_RC_CandidateTable from "./Table";
import { PP_RC_CandidateInterface } from '../type';
import { readPP_RC_CandidateList } from '../repository';

export default function Main() {

    const CardHeader = styled(Box)(() => ({
        display: "flex",
        flexWrap: "wrap",
        paddingRight: "24px",
        marginBottom: "18px",
        alignItems: "center",
        justifyContent: "space-between",
    }));
    const [searchQuery, setSearchQuery] = useState("")
    const [pp_rc_candidateDataList, setPP_RC_CandidateDataList] = useState<PP_RC_CandidateInterface[]>([])


    const fetchPP_RC_CandidateList = async () => {
        const data: any = await readPP_RC_CandidateList();
        setPP_RC_CandidateDataList(data)
    }

    
    useEffect(() => {
        fetchPP_RC_CandidateList()
    }, [])
    return (
        <div className='h-screen'>

            <CustomNavbarV3 pageName="RC - Candidate List" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>
            <PP_RC_CandidateTable
                pp_rc_candidateDataList={pp_rc_candidateDataList}
                onChange={(value: any) => setPP_RC_CandidateDataList(value)}
                fetchPP_RC_CandidateList={fetchPP_RC_CandidateList}
            />

        </div>

    );


}
