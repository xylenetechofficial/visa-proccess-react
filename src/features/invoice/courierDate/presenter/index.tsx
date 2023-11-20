import { useEffect, useState } from 'react';
import CourierDateTable from './Table';
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { AddCourierDateInterface, AllSelectionInvoiceDateInterface, CourierDateInterface } from '../type';
import { createInvoiceDate, readCourierDateEntrylist } from '../repository';
import { GreenButton } from '../../../../componenets/CustomButton';
import { readSectorList } from '../../../masters/sector/repository';
import { SectorInterface } from '../../../masters/sector/type';
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

  const [editAgent, setEditAgent] = useState<AgentInterface>(
    {} as AgentInterface
  );


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
    const CardHeader = styled(Box)(() => ({
        display: "flex",
        flexWrap: "wrap",
        paddingRight: "24px",
        marginBottom: "18px",
        alignItems: "center",
        justifyContent: "space-between",
      }));
      
    const [courierDateList, setCourierDateList] = useState<CourierDateInterface[]>([])
    const [additionalInvoiceList, setAdditionalInvoiceList] = useState<CourierDateInterface[]>([])
    const [courierDateData, setCourierDateData]= useState<AddCourierDateInterface[]>([])
    const fetchCourierDateEntryData =async(page?: number)=>{
     const data : any =   await readCourierDateEntrylist({page:page ?? additionalData.pagination.page})
     if(data){

      filterData("", agentList);
      // setAgentList(data);
      
      

      setCourierDateList(data.invoice_list)
      setAdditionalInvoiceList(data.additional_invoice_list)
      setAdditionalData(await PaginationManager.getData());
     }
    }
    const onClickAdd =async ()=>{
      const list :any ={
        invoice_list:courierDateList
      }
     const data = await createInvoiceDate(list);
     if(data){
      fetchCourierDateEntryData(additionalData.pagination.page);
     }
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
        fetchCourierDateEntryData(additionalData.pagination.page)
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
            snoBase={additionalData.pagination.sno_base}
                onChange ={(value)=>setCourierDateList(value)}
                CourierDateList={courierDateList}
                sectorList={sectorList}
                setCourierDateData={setCourierDateData}
                />
        <GreenButton text='Submit' onClick={()=>onClickAdd()} />

        <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchCourierDateEntryData(e);
        }}
      />
        </>
    )
}