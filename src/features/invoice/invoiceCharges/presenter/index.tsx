import { useState , useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import ClientInvoiceChargesListTable from "./Table";
import { Box, styled } from "@mui/material";
import { AddCandidateInvoiceChargesInterface } from "../type";
import { createCandidatesInvoiceCharges, readCandidateInvoiceChargessList } from "../repository";
import { BlueButton } from "../../../../componenets/CustomButton";

export default function Main() {

  const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
  }));

  const [ClientInvoiceChargesList, setClientInvoiceChargesList] = useState<any>([]);
  const [data, setData] = useState<AddCandidateInvoiceChargesInterface[]>([])
  const [searchQuery, setSearchQuery] = useState('');


  const createCandidateCharges = async (item: any) => {
    await createCandidatesInvoiceCharges(item)
  }

  const fetchCandidateNumbersList = async () => {
    const data = await readCandidateInvoiceChargessList();
    if (data) {
      setClientInvoiceChargesList(data);
    }
  }

  useEffect(() => {
    fetchCandidateNumbersList();
  }, [])


  return (
    <div>
      <CustomNavbarV3
        pageName=" Invoice Charges"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={()=>fetchCandidateNumbersList()}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <ClientInvoiceChargesListTable
        ClientInvoiceChargesList={ClientInvoiceChargesList}
        onChange={(value) => setClientInvoiceChargesList(value)}
        setData={setData}
      />
      <BlueButton text="Submit" onClick={()=>{createCandidateCharges(data)}} />
    </div>
  );
}
