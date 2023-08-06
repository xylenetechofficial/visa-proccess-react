import { useEffect, useState } from 'react';
import CourierDateTable from './Table';
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { AllSelectionInvoiceDateInterface, CourierDateInterface } from '../type';
import { createInvoiceDate, readCourierDateEntrylist } from '../repository';
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
    const [courierDateList, setCourierDateList] = useState<CourierDateInterface[]>([])
    const [additionalInvoiceList, setAdditionalInvoiceList] = useState<CourierDateInterface[]>([])

    const fetchCourierDateEntryData =async()=>{
     const data : any =   await readCourierDateEntrylist()
     if(data){
      setCourierDateList(data.invoice_list)
      setAdditionalInvoiceList(data.additional_invoice_list)
     }
    }
    const onClickAdd =async ()=>{
      const list :any ={
        invoice_list:courierDateList
      }
      await createInvoiceDate(list)
    }
    useEffect(()=>{

        fetchCourierDateEntryData()
    },[])
    return (

        <>
         <CustomNavbarV3
        pageName="Client Invoice Courier Date Entry"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

            <CourierDateTable
                onChange ={(value)=>setCourierDateList(value)}
                CourierDateList={courierDateList} />
        <GreenButton text='Submit' onClick={()=>onClickAdd()} />
        </>
    )
}