import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import ClientInvoicesCandidateInvoiceRaiseTable from "./Table";
import { Box, styled } from "@mui/material";
import { AddCandidatesTicketChargesInterface, CandidatesTicketChargesInterface } from "../type";
import { createCandidatesTicketCharges, readCandidatesTicketChargesList } from "../repository";
import { GreenButton } from "../../../../componenets/CustomButton";
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
  ); */

  const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
  }));

  const [ClientInvoiceCandidatesTicketChargesList, setClientInvoiceCandidatesTicketChargesList] = useState<CandidatesTicketChargesInterface[]>([]);

  




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

  const fetchClientAdditionalInvoiceList = async (page?: number)=>{
    console.log("called")
    const data = await readCandidatesTicketChargesList({page:page ?? additionalData.pagination.page});
    if(data){
      filterData("", agentList);
      // setAgentList(data);
      // fetchClientAdditionalInvoiceList(data);
      setAdditionalData(await PaginationManager.getData());
      setClientInvoiceCandidatesTicketChargesList(data)
    }

}
const onUpdate =async()=>{
  await createCandidatesTicketCharges(ClientInvoiceCandidatesTicketChargesList as any);
   fetchClientAdditionalInvoiceList();
}
useEffect(() => {
  fetchClientAdditionalInvoiceList(additionalData.pagination.page);
}, [])
  return (
    <div>
      <CustomNavbarV3
        pageName="Candidates Ticket Charges"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <ClientInvoicesCandidateInvoiceRaiseTable
      snoBase={additionalData.pagination.sno_base}
        ClientInvoiceCandidatesTicketChargesList={ClientInvoiceCandidatesTicketChargesList}
        onChange={(value)=>setClientInvoiceCandidatesTicketChargesList(value)}
      />




<CustomButton2 buttonText="Submit" onClick={()=>onUpdate()}  />



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
