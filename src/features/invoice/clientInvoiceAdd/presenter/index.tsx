import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import ClientInvoicesCandidateInvoiceRaiseTable from "./Table";
import { Box,  styled } from "@mui/material";

export default function Main() {

  const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

  const [ClientInvoiceAddList, setClientInvoiceAddList] = useState<any>([]);

  const [searchQuery, setSearchQuery] = useState('');

  

  return (
    <div>
      <CustomNavbarV3
        pageName="Client Invoice Add"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <ClientInvoicesCandidateInvoiceRaiseTable
        ClientInvoiceAddList={ClientInvoiceAddList}
        setClientInvoiceAddList={ClientInvoiceAddList}
        onChange={(value)=>setClientInvoiceAddList(value)}
      />
    </div>
  );
}
