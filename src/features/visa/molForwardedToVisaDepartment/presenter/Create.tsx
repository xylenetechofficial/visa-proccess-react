import { useEffect, useState } from "react";
// import CreateModal from './Create'
// import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { MolForwardedTovisaDepartmentDataInterface } from "../type";
import {
  readMolForwardedTovisaDept,
  updateMolForwardedToVisaDeptData,
} from "../repository";
import Table from "./Table";
import { BlueButton, GreenButton } from "../../../../componenets/CustomButton";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import EditModel from './Edit'
import { FullScreenModal } from "../../../../componenets/Modal";
const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main(props:{onClose:()=>void}) {
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

  const [JobOrderList, setJobOrderList] = useState<
    MolForwardedTovisaDepartmentDataInterface[]
  >([]);

  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (
    query: string,
    data: MolForwardedTovisaDepartmentDataInterface[]
  ) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, JobOrderList);



  const onClickCreate = async () => {
    const res = await updateMolForwardedToVisaDeptData(JobOrderList);
  };

  const fetchMolForwardedToDepartment = async (page?: number) => {
    const data = await readMolForwardedTovisaDept(page ?? 1);
    console.log(data);
    setJobOrderList(data);
    setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetchMolForwardedToDepartment(additionalData.pagination.page);
  }, []);

  return (
    <FullScreenModal
    // buttonName="submit"
    handleClick={onClickCreate}
    title="Add Mol Forwarded To Visa Department"
    onClose={props.onClose}
>
  
      {/*  indexVisa stable */}
      <Table
       snoBase={additionalData.pagination.sno_base}
        jobOrderList={JobOrderList}
        onChange={(value) => setJobOrderList(value)}
        onClick={()=> {console.log("edit modal"),setModalName('edit') }}
      />
      <br />
      <GreenButton onClick={onClickCreate} text="Create" />
      <br />
      <br />
      
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchMolForwardedToDepartment(e);
        }}
      />
     
    </FullScreenModal>
  );
}
