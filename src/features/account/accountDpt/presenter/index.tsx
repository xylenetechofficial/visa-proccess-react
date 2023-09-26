import { useEffect, useState } from 'react';
import { CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import AgentPaymentReceivedDetailTable from './Table';
import EditModal from './Edit'
import { PaymentReceivedInterface } from '../type';
import { readPaymentReceivedList } from '../repository';

export default function Main() {
    const [searchQuery, setSearchQuery] = useState("")
    const [modal, setModal] = useState('')
    const [paymentReceivedList, setPaymentReceivedList] = useState<PaymentReceivedInterface[]>([])
    const fetchList = async()=>{
        const res :any=await readPaymentReceivedList();
        if(res){
            setPaymentReceivedList(res)
        }
    }
    useEffect(()=>{
        fetchList()
    },[])
    return (
        <div>

            <CustomNavbarV3 pageName="AGENT PAYMENTS RECEIVED" searchFunction={(query) => setSearchQuery(query)} />
            <AgentPaymentReceivedDetailTable
                paymentReceivedList={paymentReceivedList}
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
