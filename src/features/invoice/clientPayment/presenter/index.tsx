import { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ClientAdditionalInvoicePaymentAddTable from "./Table";
import ClientSuspenceAdd from "./Create";
import ClientSuspenceEdit from "./Edit";
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { createClientPayment, readClientPaymentList, updateBulkClientPaymentList } from '../repository';
import { BlueButton, GreenButton } from '../../../../componenets/CustomButton';
import { ClientPaymentSingleAddInterface } from '../type';
import { createBulkClientPayment, deleteAdditionalPayment, updateClientSinglePayment } from '../../clientAdditionalPayment/repository';

const DataList: any[] = [{

    id: 1,
    company_name: "string",
    invoice_number: "string",
    invoice_date: "string",
    invoice_amount: "string",
    payment_received: "string",
    balance_payment: "string",
    suspense_amount: "string",
    payment: "string",
    payment_date: "string",
    payment_description: "string",
},
{

    id: 1,
    company_name: "string",
    invoice_number: "string",
    invoice_date: "string",
    invoice_amount: "string",
    payment_received: "string",
    balance_payment: "string",
    suspense_amount: "string",
    payment: "string",
    payment_date: "string",
    payment_description: "string",
},
{

    id: 1,
    company_name: "string",
    invoice_number: "string",
    invoice_date: "string",
    invoice_amount: "string",
    payment_received: "string",
    balance_payment: "string",
    suspense_amount: "string",
    payment: "string",
    payment_date: "string",
    payment_description: "string",
}]

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
    const [clientPaymentData, setClientPaymentData] = useState<any[]>([])
    const [modal,setModal]=useState("");
     const [data, setData]=useState([{
        "amount":4,
        "date":"4-7-23",
        "description":"add payment"
    }])
    const [clientSingle,setClientSingle]= useState<ClientPaymentSingleAddInterface[]>([])
  const fetchClientPaymentList = async ()=>{
    console.log("called")
    const data = await readClientPaymentList();
    if(data){
        setClientPaymentData(data)
    }

}
  const updatePaymentList = async (item:any)=>{
    console.log("called")
    const datas :any = await updateBulkClientPaymentList(data);
    if(datas){
        fetchClientPaymentList()
    }

}
const createPayment = async (id:number, item:any)=>{
    console.log("called111111",id,item)
    const datas :any = await updateClientSinglePayment(id, item);
    if(datas){
        fetchClientPaymentList()
    }

}
  const createBulkPayment = async (item:any)=>{
    console.log("called")
    const datas :any = await createBulkClientPayment(item);
    if(datas){
        fetchClientPaymentList()
    }

}
const deleteAdditionalPaymentByid = async (id:number)=>{
    console.log("called")
    const datas :any = await deleteAdditionalPayment(id);
    if(datas){
        fetchClientPaymentList()
    }

}
    useEffect(() => {
        fetchClientPaymentList()
    }, [])
    return (
        <div className='h-screen'>

            <CustomNavbarV3 pageName="CLIENT   PAYMENT " searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
                <GreenButton text="Add" onClick={()=>{setModal('create')}} />
            </CardHeader>
            <ClientAdditionalInvoicePaymentAddTable
                clientPaymentData={clientPaymentData}
                onClickEdit={(value) => setClientSingle(value)}
                onChange={(value) => setClientPaymentData(value)}
                data={data}
                setData={setData}
                setModal={setModal}
                deleteAdditionalPaymentByid={(value)=>deleteAdditionalPaymentByid(value)}
            />
            {
                modal === 'create' ?
                <ClientSuspenceAdd
                onClose={()=>setModal('')}
                fetchClientAdditionalInvoiceList={fetchClientPaymentList}               
                />
                :''
            }
            {
                modal === 'edit' ?
                <ClientSuspenceEdit
                setModal={setModal}
                onClose={()=>setModal('')}
                clientSingle={clientSingle}
                clientPaymentData={clientPaymentData}
                createSinglePayment={(id,value)=>{createPayment(id, value)}}
                createBulkPayment={(value)=>{createBulkPayment(value)}}
                fetchClientAdditionalInvoiceList={fetchClientPaymentList}
                deleteAdditionalPaymentByid={deleteAdditionalPaymentByid}
                />
                :''
            }
            {
                modal === 'suspenseAmount' ?
                <ClientSuspenceEdit
                setModal={setModal}
                onClose={()=>setModal('')}
                clientSingle={clientSingle}
                clientPaymentData={clientPaymentData}
                createSinglePayment={(id,value)=>{createPayment(id, value)}}
                createBulkPayment={(value)=>{createBulkPayment(value)}}
                fetchClientAdditionalInvoiceList={fetchClientPaymentList}
                deleteAdditionalPaymentByid={deleteAdditionalPaymentByid}
                />
                :''
            }
            <BlueButton text="Submit" onClick={()=>{updatePaymentList(data)}} />
        </div>

    );


}
