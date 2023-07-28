import { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { BlueButton } from '../../../../componenets/CustomButton';
import CandidateTable from "./Table";
import { CandidateInterface } from '../type';
import { createCandidateList, readCandidateList } from '../repository';

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
    const [candidateDataList, setCandidateDataList] = useState<CandidateInterface[]>([])


    const fetchCandidateList = async () => {
        const data: any = await readCandidateList();
        setCandidateDataList(data)
    }

    const createCandidate = async (data_list: CandidateInterface[]) => {

        const new_list = []
        for (let index = 0; index < data_list.length; index++) {
            const element = data_list[index];
            // if (!element.checked) continue

            // // if candidate_required 
            // if (element.candidate_required.toLowerCase() == 'yes')
            //     // then received_date and submission_date required
            //     if (element.candidate_received_date == '' || element.candidate_submission_date == '')
            //         continue

            new_list.push(element);
        }

        const data: any = await createCandidateList(new_list);
        fetchCandidateList();
    }
    useEffect(() => {
        fetchCandidateList()
    }, [])
    return (
        <div className='h-screen'>

            <CustomNavbarV3 pageName="Candidate List" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>
            <CandidateTable
                candidateDataList={candidateDataList}
                onChange={(value:any) => setCandidateDataList(value)}
                fetchCandidateList={fetchCandidateList}
            />
            <BlueButton text='Submit' onClick={() => { createCandidate(candidateDataList) }} />

        </div>

    );


}
