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

export default function Main() {
  const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
  }));

  const [ClientInvoiceCandidatesTicketChargesList, setClientInvoiceCandidatesTicketChargesList] = useState<CandidatesTicketChargesInterface[]>([]);

  const [searchQuery, setSearchQuery] = useState('');

  const fetchClientAdditionalInvoiceList = async ()=>{
    console.log("called")
    const data = await readCandidatesTicketChargesList();
    if(data){
      setClientInvoiceCandidatesTicketChargesList(data)
    }

}
const onUpdate =async()=>{
  await createCandidatesTicketCharges(ClientInvoiceCandidatesTicketChargesList as any);
   fetchClientAdditionalInvoiceList();
}
useEffect(() => {
  fetchClientAdditionalInvoiceList();
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
        ClientInvoiceCandidatesTicketChargesList={ClientInvoiceCandidatesTicketChargesList}
        onChange={(value)=>setClientInvoiceCandidatesTicketChargesList(value)}
      />

<CustomButton2 buttonText="Submit" onClick={()=>onUpdate()}  />
    
    </div>
  );
}
