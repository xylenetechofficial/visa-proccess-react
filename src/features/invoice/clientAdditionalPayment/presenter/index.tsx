import { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ClientAdditionalInvoicePaymentAddTable from "./Table";
import ClientSuspenceAdd from "./Create";
import ClientSuspenceEdit from "./Edit";
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { createClientPayment, readClientAdditionalPaymentList, updateBulkClientPaymentList } from '../repository';
import { BlueButton } from '../../../../componenets/CustomButton';
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
    console.log("called")
    const datas :any = await updateBulkClientPaymentList(data);
    if(datas){
        setClientPaymentData(data)
    }

}
  const createPayment = async (item:any)=>{
    console.log("called")
    const datas :any = await createClientPayment(item);
    if(datas){
        setClientPaymentData(data)
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
            </CardHeader>
            <ClientAdditionalInvoicePaymentAddTable
                clientPaymentData={clientPaymentData}
                onClickEdit={(value) => setClientSingle(value)}
                onChange={(value) => setClientPaymentData(value)}
                data={data}
                setData={setData}
                setModal={setModal}
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
                fetchClientAdditionalInvoiceList={fetchClientAdditionalPaymentList}
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
                fetchClientAdditionalInvoiceList={fetchClientAdditionalPaymentList}
                />
                :''
            }
            <BlueButton text="Submit" onClick={()=>{updatePaymentList(data)}} />
        </div>

    );


}
