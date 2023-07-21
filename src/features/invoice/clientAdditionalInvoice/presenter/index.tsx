import { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ClientAdditionalInvoiceTable from "./Table";
import ClientAdditionalInvoiceAdd from "./Create";
import ClientAdditionalInvoiceAddEdit from "./Edit";
import { ClientAdditionalInvoiceInterface } from '../type';
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { RedButton } from '../../../../componenets/CustomButton';
import { readClientAdditionalInvoiceList } from '../repository';

const DataList: ClientAdditionalInvoiceInterface[] = [{
    id: 1,
    company_id: 1,
    invoice_number:"string",
    invoice_date:"string",
    invoice_amount:"string",
},
{
    id: 1,
    company_id: 1,
    invoice_number:"string",
    invoice_date:"string",
    invoice_amount:"string",
},
{
    id: 1,
    company_id: 1,
    invoice_number:"string",
    invoice_date:"string",
    invoice_amount:"string",
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
    const [immigrationData, setImmigrationData] = useState<ClientAdditionalInvoiceInterface[]>([])


    const fetchClientAdditionalInvoiceList = async ()=>{
        console.log("called")
        const data = await readClientAdditionalInvoiceList();
        if(data){
            setImmigrationData(data)
        }

    }
    const createClientAdditionalInvoiceTemp = async (data:any)=>{
        setImmigrationData([...immigrationData,data])
    }
    useEffect(() => {
        setImmigrationData(DataList)
        fetchClientAdditionalInvoiceList();
    }, [])
    return (
        <div className='h-screen'>

            <CustomNavbarV3 pageName="CLIENT ADDITIONAL INVOICE" searchFunction={(query) => setSearchQuery(query)} />
            <CardHeader>
                <RedButton text="Add Client Additional Invoice" onClick={()=>setModal('create')} />
            </CardHeader>
            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>
            <ClientAdditionalInvoiceTable
                immigrationData={immigrationData}
                onClickEdit={(value) => setImmigrationData([value])}
                onChange={(value) => setImmigrationData(value)}
                setModal={setModal}
            />
            {
                modal === 'create' ?
                <ClientAdditionalInvoiceAdd
                onClose={()=>setModal('')}
                fetchClientAdditionalInvoiceList={fetchClientAdditionalInvoiceList}
                />
                :''
            }
            {
                modal === 'edit' ?
                <ClientAdditionalInvoiceAddEdit
                immigrationData={immigrationData}
                onClose={()=>setModal('')}
                fetchClientAdditionalInvoiceList={fetchClientAdditionalInvoiceList}
                />
                :''
            }
        </div>

    );


}
