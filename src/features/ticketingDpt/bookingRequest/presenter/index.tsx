import { useState, useEffect, Children } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import BookingTable from "./Table";
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { BookingRequestInterface } from "../type";
import {
  createTicketBookingRequest,
  readTicketBookingRequestList,
} from "../repository";
import { GreenButton } from "../../../../componenets/CustomButton";
import { SectorInterface } from "../../../masters/sector/type";
import { readSectorList } from "../../../masters/sector/repository";
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

  const [ticketBookingRequestList, setTicketBookingRequestList] = useState<
    BookingRequestInterface[]
  >([]);
  async function fetchTicketBookingRequest(page?: number) {
    const data = await readTicketBookingRequestList({
        page: page ?? additionalData.pagination.page,
        status: "no",
      }
    );
    if (data) {
      setTicketBookingRequestList(data);
    }
    setAdditionalData(await PaginationManager.getData());
  }
  const onClickCreate = async (item: BookingRequestInterface[]) => {
    const new_data: BookingRequestInterface[] = [];
    for (let i = 0; i < item.length; i++) {
      const element = item[i];
      // console.log(item);   // Only Dev
      // console.log(element);   // Only Dev
      if (element.check == "Yes") new_data.push(element);
    }

    await createTicketBookingRequest(new_data);
    fetchTicketBookingRequest();
  };
  const [sectorList, setSectorList] = useState<SectorInterface[]>([]);
  const fetchSectorList = async () => {
    const data = await readSectorList();
    if (data) {
      setSectorList(data);
    }
  };

  useEffect(() => {
    fetchTicketBookingRequest(additionalData.pagination.page);
    fetchSectorList();
  }, []);

  return (
    <>
      <CustomNavbarV3
        pageName="Ticket Booking Request"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={()=>fetchTicketBookingRequest()}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <BookingTable
      snoBase={additionalData.pagination.sno_base}
        ticketBookingRequestList={ticketBookingRequestList}
        sectorList={sectorList}
        onChange={(value) => setTicketBookingRequestList(value)}
      />
      <br />
      <GreenButton
        text="Submit"
        onClick={() => onClickCreate(ticketBookingRequestList)}
      />

      <br />
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchTicketBookingRequest(e);
        }}
      />
    </>
  );
}
