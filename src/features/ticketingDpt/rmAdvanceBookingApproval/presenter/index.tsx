import RMAdvanceBookingAproval from "./Table";
import { useState, useEffect } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { RMAdvanceBookingApprovalInterface } from "../type";
import {
  createRMAdvanceBookingApproval,
  readRMAdvanceBookingApprovalList,
} from "../repository";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";

export default function Main() {
  const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
  }));
  const [searchQuery, setSearchQuery] = useState("");

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

  const [RMAdvanceBookingApprovalList, setRMAdvanceBookingApprovalList] =
    useState<RMAdvanceBookingApprovalInterface[]>([]);

  async function fetchRMAdvanceBookingApproval(page?: number) {
    const data = await readRMAdvanceBookingApprovalList({
      page: page ?? additionalData.pagination.page,
      status: "yes",
    });
    if (data) {
      setRMAdvanceBookingApprovalList(data);
    }
    setAdditionalData(await PaginationManager.getData());
  }
  const onClickCreate = async (item: RMAdvanceBookingApprovalInterface) => {
    await createRMAdvanceBookingApproval(item);
    fetchRMAdvanceBookingApproval();
  };

  useEffect(() => {
    fetchRMAdvanceBookingApproval(additionalData.pagination.page);
  }, []);

  return (
    <>
      <CustomNavbarV3
        pageName="RM Advance Booking Approval"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => fetchRMAdvanceBookingApproval()}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <RMAdvanceBookingAproval
        snoBase={additionalData.pagination.sno_base}
        RMAdvanceBookingApprovalList={RMAdvanceBookingApprovalList}
        onChange={(value) => setRMAdvanceBookingApprovalList(value)}
        onClickCreate={onClickCreate}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchRMAdvanceBookingApproval(e);
        }}
      />
    </>
  );
}
