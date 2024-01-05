import { useEffect, useState } from 'react';
import InvoicedispatchTable from './Table';
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import {   readinvoiceSubmitList } from '../repository';
import { InvoiceSubmitInterface } from '../type';
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { AgentInterface } from "../../../masters/agent/type";
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

/*  const [editAgent, setEditAgent] = useState<AgentInterface>(
    {} as AgentInterface
  );*/


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
  
  const [invoiceContactPersonList, setInvoiceContactPersonList] = useState<InvoiceSubmitInterface[]>([])

  const fetchInvoiceContactPerson = async (page?: number) => {
    const data = await readinvoiceSubmitList({page:page ?? additionalData.pagination.page});
    if (data) {
      setInvoiceContactPersonList(data);


      filterData("", agentList);
      // setAgentList(data);
      
      
      setAdditionalData(await PaginationManager.getData());
    }
    console.log(invoiceContactPersonList,"")
  }
  useEffect(() => {
    fetchInvoiceContactPerson(additionalData.pagination.page)
  }, [])

  return (

    <>
      <CustomNavbarV3
        pageName="View Submitted Invoices"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <InvoicedispatchTable
      snoBase={additionalData.pagination.sno_base}
        onChange={(value) => setInvoiceContactPersonList(value)}
        invoiceContactPersonList={invoiceContactPersonList}
        
        />


<Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchInvoiceContactPerson(e);
        }}
      />
      
    </>

  )
}