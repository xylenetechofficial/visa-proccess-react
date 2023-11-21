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
import { readCompanyList } from '../../../masters/company/repository';
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { AgentInterface } from "../../../masters/agent/type";

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



    const [agentList, setAgentList] = useState<AgentInterface[]>([]);
    const [additionalData, setAdditionalData] = useState<AdditionalDataInterface>(
      {
        pagination: {
          page: 1,
          page_count: 1,
          item_count: 0,
          sno_base: 0,
        },
      }
    );
  
    const [editAgent, setEditAgent] = useState<AgentInterface>(
      {} as AgentInterface
    );
  
  
    const [searchQuery, setSearchQuery] = useState("");
    const filterData = (query: string, data: AgentInterface[]) => {
      if (!query) {
        return data;
      } else {
        return data.filter((d) =>
          d.name.toLowerCase().includes(query.toLowerCase())
        );
      }
    };
    const dataFiltered = filterData(searchQuery, agentList);

    const CardHeader = styled(Box)(() => ({
        display: "flex",
        flexWrap: "wrap",
        paddingRight: "24px",
        marginBottom: "18px",
        alignItems: "center",
        justifyContent: "space-between",
    }));
    
    const [modal,setModal]=useState('')
    const [clientSuspence, setClientSuspence] = useState<ClientSuspenseInterface[]>([])


    const fetchClientAdditionalInvoiceList = async (page?: number)=>{
        const data = await readClientSuspenseList({page:page ?? additionalData.pagination.page});
        if(data){
            setClientSuspence(data)
        }
    }
    const createClientAdditionalInvoiceTemp = async (data:any)=>{
        setClientSuspence([...clientSuspence,data])
    }
    
    useEffect(() => {
         fetchClientAdditionalInvoiceList(additionalData.pagination.page);
         
    }, [])
    return (
        <div className='h-screen'>

            <CustomNavbarV3 pageName="CLIENT SUSPENCE LIST" searchFunction={(query) => setSearchQuery(query)} />
            <CardHeader>
                <RedButton text="Add Client Suspence Amount" onClick={()=>setModal('create')} />
            </CardHeader>
            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>
            <ClientSuspenseTable
            snoBase={additionalData.pagination.sno_base}
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

<Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchClientAdditionalInvoiceList(e);
        }}
      />
        </div>

    );


}
