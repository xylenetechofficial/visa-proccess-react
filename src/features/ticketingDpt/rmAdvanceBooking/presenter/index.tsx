import RMAdvanceBooking from "./Table";
import { useState, useEffect } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { RMAdvanceBookingInterface } from "../type";
import {
  createRMAdvanceBooking,
  readRMAdvanceBookingList,
} from "../repository";
import { GreenButton } from "../../../../componenets/CustomButton";
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

  const [RMAdvanceBookingList, setRMAdvanceBookingList] = useState<
    RMAdvanceBookingInterface[]
  >([]);
  async function fetchRMAdvanceBooking(page?: number) {
    const data = await readRMAdvanceBookingList({
      page: page ?? additionalData.pagination.page,
      status: "no",
    });
    if (data) {
      setRMAdvanceBookingList(data);
    }
    setAdditionalData(await PaginationManager.getData());
  }
  const onClickCreate = async (item: RMAdvanceBookingInterface[]) => {
    const new_data: RMAdvanceBookingInterface[] = [];
    for (let i = 0; i < item.length; i++) {
      const element = item[i];
      // console.log(item);   // Only Dev
      // console.log(element);   // Only Dev
      if (element.advance == "Yes") new_data.push(element);
    }
    await createRMAdvanceBooking(new_data);
    fetchRMAdvanceBooking();
    // window.location.reload()
  };

  useEffect(() => {
    fetchRMAdvanceBooking(additionalData.pagination.page);
  }, []);

  return (
    <>
      <CustomNavbarV3
        pageName="RM Advance Booking"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => {
          fetchRMAdvanceBooking();
        }}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>
      <RMAdvanceBooking
      snoBase={additionalData.pagination.sno_base}
        RMAdvanceBookingList={RMAdvanceBookingList}
        onChange={(value) => setRMAdvanceBookingList(value)}
      />
      <br />
      <GreenButton
        text="Submit"
        onClick={() => onClickCreate(RMAdvanceBookingList)}
      />
      <br />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchRMAdvanceBooking(e);
        }}
      />
    </>
  );
}
