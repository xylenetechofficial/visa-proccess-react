import { useEffect, useState } from 'react';
import InvoiceAdminRemarkTable from './Table';
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { createInvoiceAdminRemark, readInvoiceAdminRemarkList } from '../repository';
import { AddInvoiceAdminInterface, InvoiceAdminRemarkInterface } from '../type';
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
  const [InvoiceAdminData, setInvoiceAdminData] = useState<AddInvoiceAdminInterface[]>([]);
  const [InvoiceAdminRemarkList, setInvoiceAdminRemarkList] = useState<InvoiceAdminRemarkInterface[]>([])
  const onCreate = async (item: AddInvoiceAdminInterface[]) => {

    const data = await createInvoiceAdminRemark(item);
  }
  const fetchInvoiceAdminRemarked = async () => {
    const data = await readInvoiceAdminRemarkList();
    if (data) {
      setInvoiceAdminRemarkList(data);
    }
  }
  useEffect(() => {

    fetchInvoiceAdminRemarked()
  }, [])

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
        setInvoiceAdminData={setInvoiceAdminData}
        onChange={(value) => setInvoiceAdminRemarkList(value)}
        InvoiceAdminRemarkList={InvoiceAdminRemarkList} />
      <GreenButton text='Submit' onClick={() => { onCreate(InvoiceAdminData) }} />
    </>

  )
}