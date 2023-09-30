import { useEffect, useState } from 'react';
import { CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import AgentPaymentReceivedDetailTable from './Table';
import EditModal from './Edit'
import { PaymentReceivedInterface } from '../type';
import { readEditPaymentReceivedList, readPaymentReceivedList } from '../repository';

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
    const [editPaymentList, setEditPaymentList]= useState<any>([])
    const fetchEditPaymentList= async(ele:PaymentReceivedInterface)=>{
        console.log("first");
     const res  = await   readEditPaymentReceivedList(ele)
     if(res){
        setEditPaymentList(res)
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
                onClickEdit={(value) => {setModal('edit'),fetchEditPaymentList(value)}}
            />
            {modal === "edit" ? <EditModal
            editPaymentList={editPaymentList}
                setModal={(value) => setModal(value)}
            /> : ''}


        </div>


    );


}
