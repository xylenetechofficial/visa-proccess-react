import { useEffect, useState } from 'react';
import InvoicedispatchTable from './Table';
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { createInvoiceDispatch, readinvoiceDispatchedList } from '../repository';
import { InvoiceDispatchInterface } from '../type';
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
  const [invoiceDispatchList, setInvoiceDispatchList] = useState<InvoiceDispatchInterface[]>([])
  const onCreate = async (item: InvoiceDispatchInterface[]) => {

    const data = await createInvoiceDispatch(item);
  }
  const fetchInvoiceDispatched = async () => {
    const data = await readinvoiceDispatchedList();
    if (data) {
      setInvoiceDispatchList(data);
    }
  }
  useEffect(() => {

    fetchInvoiceDispatched()
  }, [])

  return (

    <>
      <CustomNavbarV3
        pageName="Client Invoice Courier Date Entry"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <InvoicedispatchTable
        onChange={(value) => setInvoiceDispatchList(value)}
        invoiceDispatchList={invoiceDispatchList} />
      <GreenButton text='Submit' onClick={() => { onCreate(invoiceDispatchList) }} />
    </>

  )
}