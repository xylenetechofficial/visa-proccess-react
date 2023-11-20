import { useEffect, useState } from 'react';
import InvoiceAdminRemarkTable from './Table';
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { createInvoiceAdminRemark, readInvoiceAdminRemarkList } from '../repository';
import { AddInvoiceAdminInterface, InvoiceAdminRemarkInterface } from '../type';
import { GreenButton } from '../../../../componenets/CustomButton';
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { AgentInterface } from "../../../masters/agent/type";
export default function Main() {
  const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
  }));
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
  const [InvoiceAdminData, setInvoiceAdminData] = useState<AddInvoiceAdminInterface[]>([]);
  const [InvoiceAdminRemarkList, setInvoiceAdminRemarkList] = useState<InvoiceAdminRemarkInterface[]>([])
  const onCreate = async (item: AddInvoiceAdminInterface[]) => {

    const data = await createInvoiceAdminRemark(item);
    if(data){
      fetchInvoiceAdminRemarked();
    }
  }
  const fetchInvoiceAdminRemarked = async (page?: number) => {
    const data = await readInvoiceAdminRemarkList({page:page ?? additionalData.pagination.page});
    if (data) {
      filterData("", agentList);
      setInvoiceAdminRemarkList(data);
      setAdditionalData(await PaginationManager.getData());
    }
  }
  useEffect(() => {

    fetchInvoiceAdminRemarked(additionalData.pagination.page)
  }, [])
console.log(InvoiceAdminData,"Data",InvoiceAdminRemarkList)
  return (

    <>
      <CustomNavbarV3
        pageName=" Invoice Admin Remarks"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <InvoiceAdminRemarkTable
      snoBase={additionalData.pagination.sno_base}
        setInvoiceAdminData={setInvoiceAdminData}
        onChange={(value) => setInvoiceAdminRemarkList(value)}
        InvoiceAdminRemarkList={InvoiceAdminRemarkList} />
      <GreenButton text='Submit' onClick={() => { onCreate(InvoiceAdminData) }} />


      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchInvoiceAdminRemarked(e);
        }}
      />
    </>

  )
}