import { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ClientAdditionalInvoicePaymentAddTable from "./Table";
import ClientSuspenceAdd from "./Create";
import ClientSuspenceEdit from "./Edit";
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { createBulkClientPayment, createClientPayment, deleteAdditionalPayment, readClientAdditionalPaymentList, updateBulkClientPaymentList, updateClientSinglePayment } from '../repository';
import { BlueButton, GreenButton } from '../../../../componenets/CustomButton';
import { ClientPaymentSingleAddInterface } from '../type';


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
  const fetchClientAdditionalPaymentList = async ()=>{
    console.log("called")
    const data = await readClientAdditionalPaymentList();
    if(data){
        setClientPaymentData(data)
    }

}
  const updatePaymentList = async (item:any)=>{
    console.log("called",item)
    const datas :any = await updateBulkClientPaymentList(item);
    if(datas){
        fetchClientAdditionalPaymentList()
    }

}
  const createPayment = async (id:number, item:any)=>{
    console.log("called111111",id,item)
    const datas :any = await updateClientSinglePayment(id, item);
    if(datas){
        fetchClientAdditionalPaymentList()
    }

}
  const createBulkPayment = async (item:any)=>{
    console.log("called")
    const datas :any = await createBulkClientPayment(item);
    if(datas){
        fetchClientAdditionalPaymentList()
    }

}
  const deleteAdditionalPaymentByid = async (id:number)=>{
    console.log("called")
    const datas :any = await deleteAdditionalPayment(id);
    if(datas){
        fetchClientAdditionalPaymentList()
    }

}
    useEffect(() => {
        fetchClientAdditionalPaymentList()
    }, [])
    return (
        <div className='h-screen'>

            <CustomNavbarV3 pageName="CLIENT  ADDITIONAL PAYMENT " searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
                <GreenButton text="Add" onClick={() => { setModal('create') }} />
            </CardHeader>
            <ClientAdditionalInvoicePaymentAddTable
                clientPaymentData={clientPaymentData}
                onClickEdit={(value) => setClientSingle(value)}
                onChange={(value) => setClientPaymentData(value)}
                data={data}
                setData={setData}
                setModal={setModal}
                deleteAdditionalPaymentByid={deleteAdditionalPaymentByid}
            />
            {
                modal === 'create' ?
                <ClientSuspenceAdd
                onClose={()=>setModal('')}
                fetchClientAdditionalInvoiceList={fetchClientAdditionalPaymentList}               
                />
                :''
            }
            {
                modal === 'edit' ?
                <ClientSuspenceEdit
                setModal={setModal}
                clientPaymentData={clientPaymentData}
                onClose={()=>setModal('')}
                clientSingle={clientSingle}
                onChange={(value)=>setClientSingle(value)}
                createSinglePayment={(id,value)=>{createPayment(id, value)}}
                createBulkPayment={(value)=>{createBulkPayment(value)}}
                fetchClientAdditionalInvoiceList={fetchClientAdditionalPaymentList}
                deleteAdditionalPaymentByid={deleteAdditionalPaymentByid}
                />
                :''
            }
            {
                modal === 'suspenseAmount' ?
                <ClientSuspenceEdit
                clientPaymentData={clientPaymentData}
                setModal={setModal}
                onClose={()=>setModal('')}
                clientSingle={clientSingle}
                onChange={(value)=>setClientSingle(value)}
                createSinglePayment={createPayment}
                createBulkPayment={createBulkPayment}
                fetchClientAdditionalInvoiceList={fetchClientAdditionalPaymentList}
                deleteAdditionalPaymentByid={deleteAdditionalPaymentByid}
                />
                :''
            }
            <BlueButton text="Submit" onClick={()=>{updatePaymentList(data)}} />
        </div>

    );


}
