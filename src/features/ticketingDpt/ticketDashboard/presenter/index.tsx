import TicketDashboard from "./Table";
import { useState, useEffect } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import BookingTable from "./Table";
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { createTicketDashboard, readTicketDashboardList } from "../repository";
import { TicketDashboardInterface } from "../type";
import { GreenButton } from "../../../../componenets/CustomButton";
import OpenSectorModal from "./TicketToBeBooked";
import UnderProcess from "./UnderProcess";
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
  const [TicketDashboardList, setTicketDashboardList] = useState<
    TicketDashboardInterface[]
  >([]);
  async function fetchTicketDashboard() {
    const data = await readTicketDashboardList();
    if (data) {
      setTicketDashboardList(data);
    }
  }
  const onClickCreate = async (item: TicketDashboardInterface[]) => {
    const data = await createTicketDashboard(item);
    if (data) {
      fetchTicketDashboard();
    }
  };

  const [openTicketToBeBooked, setOpenTicketToBeBooked] =
    useState<TicketDashboardInterface>({} as TicketDashboardInterface);

  const [openUnderProcess, setOpenUnderProcess] =
    useState<TicketDashboardInterface>({} as TicketDashboardInterface);

  const [modalName, setModalName] = useState("");

  const TicketToBeBooked = (ticketDashboard: TicketDashboardInterface) => {
    setOpenTicketToBeBooked(ticketDashboard);
    console.log("onClickEdit"); // Only Dev
    console.log(ticketDashboard); // Only Dev
    setModalName("TicketToBeBooked");
  };

  const underProcess = (ticketDashboard: TicketDashboardInterface) => {
    setOpenUnderProcess(ticketDashboard);
    console.log("onClickEdit"); // Only Dev
    console.log(ticketDashboard); // Only Dev
    setModalName("underProcess");
  };

  const AgencyInvoiceAwaiting = (ticketDashboard: TicketDashboardInterface) => {
    setOpenUnderProcess(ticketDashboard);
    console.log("onClickEdit"); // Only Dev
    console.log(ticketDashboard); // Only Dev
    setModalName("underProcess");
  };

  useEffect(() => {
    fetchTicketDashboard();
  }, []);

  return (
    <>
      <CustomNavbarV3
        pageName="Ticket Dashboard"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <TicketDashboard
        // TicketDashboardList={TicketDashboardList}
        // onChange={(value)=>setTicketDashboardList(value)
        TicketToBeBooked={TicketToBeBooked}
        underProcess={underProcess}
        AgencyInvoiceAwaiting={AgencyInvoiceAwaiting}
      />

      {modalName !== "TicketToBeBooked" ? (
        ""
      ) : (
        <OpenSectorModal
          onClose={() => setModalName("")}
          TicketDashboardList={TicketDashboardList}
        />
      )}

      {modalName !== "underProcess" ? (
        ""
      ) : (
        <UnderProcess
          onClose={() => setModalName("")}
          TicketDashboardList={TicketDashboardList}
        />
      )}


{modalName !== "underProcess" ? (
        ""
      ) : (
        <UnderProcess
          onClose={() => setModalName("")}
          TicketDashboardList={TicketDashboardList}
        />
      )}
      {/* <GreenButton text='Submit' onClick={()=>onClickCreate(TicketDashboardList)} /> */}
    </>
  );
}
