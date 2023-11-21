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
import { AdditionalDataInterface, PaginationManager } from '../../../../utils/api_helper';
import { AgentInterface } from '../../invoiceNumbers/type';
import Pagination from "../../../../componenets/Pagination";
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
    const [immigrationData, setImmigrationData] = useState<ClientAdditionalInvoiceInterface[]>([])


    const fetchClientAdditionalInvoiceList = async (page?: number)=>{
        console.log("called")
        const data = await readClientAdditionalInvoiceList({page:page ?? additionalData.pagination.page});
        if(data){
            setImmigrationData(data)
            filterData("", agentList);
      setAdditionalData(await PaginationManager.getData());
        }

    }
    const createClientAdditionalInvoiceTemp = async (data:any)=>{
        setImmigrationData([...immigrationData,data])
    }
    useEffect(() => {
        // setImmigrationData(DataList)
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
            snoBase={additionalData.pagination.sno_base}
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
