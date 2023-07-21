import { useEffect, useState } from 'react';
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import RcCandidatesListTable from './Table';

export default function Main() {


    const [searchQuery, setSearchQuery] = useState("")
    const [data, setData] = useState('')
    const [RcCandidatesList, setRcCandidatesList] = useState([])


    return (
        <div className='h-screen'>

            <CustomNavbarV3 pageName="RC - CANDIDATES LIST" searchFunction={(query) => setSearchQuery(query)} />

            <RcCandidatesListTable
                RcCandidatesList={RcCandidatesList}
                setRcCandidatesList={setRcCandidatesList}
                data={data}
                setData={setData}
            />

        </div>

    );


}
