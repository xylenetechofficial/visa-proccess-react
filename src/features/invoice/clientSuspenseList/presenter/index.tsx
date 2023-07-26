import { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ClientSuspenseTable from "./Table";
import ClientSuspenceAdd from "./Create";
import ClientSuspenceEdit from "./Edit";
import { ClientSuspenseInterface } from '../type';
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { RedButton } from '../../../../componenets/CustomButton';
import { readClientSuspenseList } from '../repository';

const DataList: ClientSuspenseInterface[] = [{
    id: 1,
    company_id:1,
    company_name: "string",
    payment_received_date:"string",
    amount_received:1,
    payment_description:"string",
},
{
  id: 1,
  company_id:2,
  company_name: "string",
  payment_received_date:"string",
  amount_received:1,
  payment_description:"string",
},
{
  id: 1,
  company_id:3,
  company_name: "string",
  payment_received_date:"string",
  amount_received:1,
  payment_description:"string",
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
    const [modal,setModal]=useState('')
    const [clientSuspence, setClientSuspence] = useState<ClientSuspenseInterface[]>([])


    const fetchClientAdditionalInvoiceList = async ()=>{
        const data = await readClientSuspenseList();
        if(data){
            setClientSuspence(data)
        }
    }
    const createClientAdditionalInvoiceTemp = async (data:any)=>{
        setClientSuspence([...clientSuspence,data])
    }
    useEffect(() => {
         fetchClientAdditionalInvoiceList()
    }, [])
    return (
        <div className='h-screen'>

            <CustomNavbarV3 pageName="CLIENT ADDITIONAL INVOICE" searchFunction={(query) => setSearchQuery(query)} />
            <CardHeader>
                <RedButton text="Add Client Suspence Amount" onClick={()=>setModal('create')} />
            </CardHeader>
            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>
            <ClientSuspenseTable
                clientSuspence={clientSuspence}
                onClickEdit={(value) =>setClientSuspence([value])}
                onChange={(value) => setClientSuspence(value)}
                setModal={setModal}
            />
            {
                modal === 'create' ?
                <ClientSuspenceAdd
                onClose={()=>setModal('')}
                fetchClientAdditionalInvoiceList={fetchClientAdditionalInvoiceList}
                createClientAdditionalInvoiceTemp={createClientAdditionalInvoiceTemp}
               
                />
                :''
            }
            {
                modal === 'edit' ?
                <ClientSuspenceEdit
                onClose={()=>{fetchClientAdditionalInvoiceList(),setModal('') }}
                clientSuspence={clientSuspence}
                fetchClientAdditionalInvoiceList={fetchClientAdditionalInvoiceList}
                createClientAdditionalInvoiceTemp={createClientAdditionalInvoiceTemp}
               
                />
                :''
            }
        </div>

    );


}
