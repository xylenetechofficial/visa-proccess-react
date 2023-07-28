import { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { BlueButton } from '../../../../componenets/CustomButton';
import RC_CandidateTable from "./Table";
import { RC_CandidateInterface } from '../type';
import { createRC_CandidateList, readRC_CandidateList } from '../repository';

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
    const [rc_candidateDataList, setRC_CandidateDataList] = useState<RC_CandidateInterface[]>([])


    const fetchRC_CandidateList = async () => {
        const data: any = await readRC_CandidateList();
        setRC_CandidateDataList(data)
    }

    const createRC_Candidate = async (data_list: RC_CandidateInterface[]) => {

        const new_list = []
        for (let index = 0; index < data_list.length; index++) {
            const element = data_list[index];
            // if (!element.checked) continue

            // // if rc_candidate_required 
            // if (element.rc_candidate_required.toLowerCase() == 'yes')
            //     // then received_date and submission_date required
            //     if (element.rc_candidate_received_date == '' || element.rc_candidate_submission_date == '')
            //         continue

            new_list.push(element);
        }

        const data: any = await createRC_CandidateList(new_list);
        fetchRC_CandidateList();
    }
    useEffect(() => {
        fetchRC_CandidateList()
    }, [])
    return (
        <div className='h-screen'>

            <CustomNavbarV3 pageName="RC - Candidate List" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>
            <RC_CandidateTable
                rc_candidateDataList={rc_candidateDataList}
                onChange={(value:any) => setRC_CandidateDataList(value)}
                fetchRC_CandidateList={fetchRC_CandidateList}
            />
            <BlueButton text='Submit' onClick={() => { createRC_Candidate(rc_candidateDataList) }} />

        </div>

    );


}
