import { useEffect, useState } from 'react';
import InvoicedispatchTable from './Table';
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import {  createInvoiceSubmit, readinvoiceSubmitList } from '../repository';
import { GreenButton } from '../../../../componenets/CustomButton';
import { InvoiceSubmitInterface } from '../type';
export default function Main() {
  const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
  }));
  const [searchQuery, setSearchQuery] = useState('');
  const [invoiceContactPersonList, setInvoiceContactPersonList] = useState<InvoiceSubmitInterface[]>([])
  const onCreate = async (id:number,item: InvoiceSubmitInterface) => {

    await createInvoiceSubmit(id,item);
  }
  const fetchInvoiceContactPerson = async () => {
    const data = await readinvoiceSubmitList();
    if (data) {
      setInvoiceContactPersonList(data);
    }
    console.log(invoiceContactPersonList,";;")
  }
  useEffect(() => {
    fetchInvoiceContactPerson()
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
        onChange={(value) => setInvoiceContactPersonList(value)}
        invoiceContactPersonList={invoiceContactPersonList}
        
        />
      
    </>

  )
}