import { useEffect, useState } from "react";
// import CreateModal from './Create'
// import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { MolReceivedInterface } from "../type";
import { ReadMolRecievedData, updateMolReceivedData } from "../repository";
import Table from "./Table";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
  const [JobOrderList, setJobOrderList] = useState<MolReceivedInterface[]>([]);

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

  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (query: string, data: MolReceivedInterface[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, JobOrderList);

  const onClickCreate = () => {
    setModalName("create");
  };

  // useEffect(() => {
  // }, [editIndexVisa, modalName])
  const onClickSubmit = async () => {
    const res = await updateMolReceivedData(JobOrderList);
    fetchMofaRecievedData();
  };

  const fetchMofaRecievedData = async (page?: number) => {
    const data = await ReadMolRecievedData(page ?? 1);
    console.log(data);
    setJobOrderList(data);
    setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetchMofaRecievedData(additionalData.pagination.page);
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Mol received"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      {/*  indexVisa stable */}
      <Table
       snoBase={additionalData.pagination.sno_base}
        jobOrderList={JobOrderList}
        onChange={(value) => setJobOrderList(value)}
      />
      <br />
      <GreenButton onClick={onClickSubmit} text="Submit" />
      <br />
      <br />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchMofaRecievedData(e);
        }}
      />
    </div>
  );
}
