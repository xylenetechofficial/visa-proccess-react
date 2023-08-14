import { useEffect, useState } from 'react';
import InvoicedispatchTable from './Table';
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { createInvoiceDispatch, readinvoiceDispatchedList } from '../repository';
import { AddInvoiceInterface, InvoiceDispatchInterface } from '../type';
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
  const [invoiceDispatchData, setInvoiceDispatchData]= useState<AddInvoiceInterface[]>([])
  const onCreate = async (item: AddInvoiceInterface[]) => {

    const data = await createInvoiceDispatch(item);
    if(data){
      fetchInvoiceDispatched();
    }
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
        pageName=" Invoice Dispatch"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <InvoicedispatchTable
        onChange={(value) =>{ setInvoiceDispatchList(value)}}
        invoiceDispatchList={invoiceDispatchList} 
        setInvoiceDispatchData={setInvoiceDispatchData}
        />
      <GreenButton text='Submit' onClick={() => { onCreate(invoiceDispatchData) }} />
    </>

  )
}