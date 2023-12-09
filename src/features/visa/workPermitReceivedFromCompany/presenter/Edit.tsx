import { useEffect, useState } from "react";
// import CreateModal from './Create'
// import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import { ReadMolRecievedData, updateMolReceivedData } from "../repository";
import Table from "./Table";
import { GreenButton } from "../../../../componenets/CustomButton";
import { MolReceivedInterface } from "../type";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { FullScreenModal } from "../../../../componenets/Modal";

export default function Main(props:{onClose:()=>void}) {
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

  const onClickUpdate = async () => {
    const res = await updateMolReceivedData(JobOrderList);
    fetchMofaRecievedData();
  };

  const fetchMofaRecievedData = async (page?: number) => {
    const data = await ReadMolRecievedData(page ?? 1, "yes");
    console.log(data);
    setJobOrderList(data);
    setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetchMofaRecievedData(additionalData.pagination.page);
  }, []);

  return (
    <FullScreenModal
    // buttonName="submit"
    handleClick={onClickUpdate}
    title="Edit Work permit received from company"
    onClose={props.onClose}
>

      {/*  indexVisa stable */}
      <Table
      snoBase={additionalData.pagination.sno_base}
        jobOrderList={JobOrderList}
        onChange={(value) => setJobOrderList(value)}
      />
      <br />
      <GreenButton onClick={onClickUpdate} text="Update" />
      <br />
      <br />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchMofaRecievedData(e);
        }}
      />
    </FullScreenModal>
  );
}
