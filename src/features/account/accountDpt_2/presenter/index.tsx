import { useEffect, useState } from 'react';
import { CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import AgentPaymentReceivedDetailTable from './Table';
import EditModal from './Edit'

export default function Main() {
    const [searchQuery, setSearchQuery] = useState("")
    const [modal, setModal] = useState('')
    return (
        <div>

            <CustomNavbarV3 pageName="AGENT PAYMENTS RECEIVED" searchFunction={(query) => setSearchQuery(query)} />
            <AgentPaymentReceivedDetailTable
                candidatesList={[]}
                setCandidatesList={[]}
                data={[]}
                setData={[]}
                onClickEdit={(value) => setModal('edit')}
            />
            {modal === "edit" ? <EditModal
                setModal={(value) => setModal(value)}
            /> : ''}


        </div>


    );


}
