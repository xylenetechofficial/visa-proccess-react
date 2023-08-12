import { useEffect, useState } from 'react';
import CourierDateTable from './Table';
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { AllSelectionInvoiceDateInterface, CourierDateInterface } from '../type';
import { createInvoiceDate, readCourierDateEntrylist } from '../repository';
import { GreenButton } from '../../../../componenets/CustomButton';
import { readSectorList } from '../../../masters/sector/repository';
import { SectorInterface } from '../../../masters/sector/type';
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

    const [sectorList, setSectorList] = useState<SectorInterface[]>([]);
    const fetchSectorList = async () => {
        const data = await readSectorList();
        if (data) {
            setSectorList(data);
        }
    };

    useEffect(()=>{
      fetchSectorList();
        fetchCourierDateEntryData()
    },[])
    return (

        <>
         <CustomNavbarV3
        pageName=" Invoice Courier Date "
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

            <CourierDateTable
                onChange ={(value)=>setCourierDateList(value)}
                CourierDateList={courierDateList}
                sectorList={sectorList}
                />
        <GreenButton text='Submit' onClick={()=>onClickAdd()} />
        </>
    )
}