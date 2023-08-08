import { useEffect, useState } from 'react';
import InvoicedispatchTable from './Table';
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { createInvoiceDispatch, readinvoiceContactPersonList } from '../repository';
import { ContactPersonInterface } from '../type';
import { GreenButton } from '../../../../componenets/CustomButton';
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
  const [invoiceContactPersonList, setInvoiceContactPersonList] = useState<ContactPersonInterface[]>([])
  const onCreate = async (item: ContactPersonInterface[]) => {

  const data =  await createInvoiceDispatch(item);
  if(data){
    fetchInvoiceContactPerson();
  }
  }
  const fetchInvoiceContactPerson = async () => {
    const data = await readinvoiceContactPersonList();
    if (data) {
      setInvoiceContactPersonList(data);
    }
  }
  useEffect(() => {
    fetchInvoiceContactPerson()
  }, [])

  return (

    <>
      <CustomNavbarV3
        pageName="Invoice Contact Person"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <InvoicedispatchTable
        onChange={(value) => setInvoiceContactPersonList(value)}
        invoiceContactPersonList={invoiceContactPersonList} />
      <GreenButton text='Submit' onClick={() => { onCreate(invoiceContactPersonList) }} />
    </>

  )
}