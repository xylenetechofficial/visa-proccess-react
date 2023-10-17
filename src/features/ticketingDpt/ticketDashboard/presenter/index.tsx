import TicketDashboard from "./Table";
import { useState, useEffect } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import BookingTable from "./Table";
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { createTicketDashboard, readAgencyInvoiceAwaiting, readTicketDashboardList, readTicketToBeBookedList, readTrying, readUnderProcessList } from "../repository";
import { TickeDashboardInterface2, TicketDashboardInterface, TicketInterface } from "../type";
import { GreenButton } from "../../../../componenets/CustomButton";
import TicketToBeBookedModal from "./TicketToBeBooked";
import UnderProcess from "./UnderProcess";
import Trying from "./Trying";
import AgencyInvoiceAwaitingTable from "./AgencyInvoiceAwaiting";
import { TypingInterface } from "../tryingType";
import { AgentInvoiceAwaitingInterface } from "../agentInvoiceAwaitingType";
import { UnderprocessInterface } from "../underprocessType";
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
  const [TicketDashboardList, setTicketDashboardList] = useState<TickeDashboardInterface2[]>([]);

  // console.log(TicketDashboardList, "Amit")
  async function fetchTicketDashboard() {
    const data = await readTicketDashboardList();
    if (data) {
      setTicketDashboardList(data);
    }
  }
  // const onClickCreate = async (item: TicketDashboardInterface[]) => {
  //   const data = await createTicketDashboard(item);
  //   if (data) {
  //     fetchTicketDashboard();
  //   }
  // };

  const [openTicketToBeBooked, setOpenTicketToBeBooked] =
    useState<TicketInterface[]>([]);

  const [openUnderProcess, setOpenUnderProcess] =
    useState<UnderprocessInterface[]>([] as UnderprocessInterface[]);

  const [agencyInvoiceAwaiting, setAgencyInvoiceAwaiting] =
    useState<AgentInvoiceAwaitingInterface[]>([]);

  const [tryingList, setTrying] =
    useState<TypingInterface[]>([]);

  const [modalName, setModalName] = useState("");

  const TicketToBeBooked = async (ticketDashboard: TicketDashboardInterface) => {

    console.log("onClickEdit"); // Only Dev
    console.log(ticketDashboard); // Only Dev
    setModalName("TicketToBeBooked");
    const res: any = await readTicketToBeBookedList(ticketDashboard)
    if (res) {
      console.log("REs=", res)
      setOpenTicketToBeBooked(res)
    }
  };

  const underProcess = async (ticketDashboard: TicketDashboardInterface) => {

    console.log("onClickEdit"); // Only Dev
    console.log(ticketDashboard); // Only Dev
    setModalName("underProcess");
    const res: any = await readUnderProcessList(ticketDashboard);
    console.log(res, "RESLL")
    if (res) {
      setOpenUnderProcess(res)
    }
  };

  const AgencyInvoiceAwaiting = async (ticketDashboard: TicketDashboardInterface) => {

    console.log("onClickEdit"); // Only Dev
    console.log(ticketDashboard); // Only Dev
    setModalName("agencyinvoiceawaiting");
    const res: any = await readAgencyInvoiceAwaiting(ticketDashboard)
    if (res) {
      setAgencyInvoiceAwaiting(res)
    }
  };
  const tryingFunction = async (ticketDashboard: TicketDashboardInterface) => {

    console.log("onClickEdit"); // Only Dev
    console.log(ticketDashboard); // Only Dev
    setModalName("typingmodal");
    const res: any = await readTrying(ticketDashboard)
    if (res) {
      setTrying(res)
    }
  };

  useEffect(() => {
    fetchTicketDashboard();
  }, []);

  return (
    <>
      <CustomNavbarV3
        pageName="Ticket Dashboard"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => fetchTicketDashboard()}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <TicketDashboard
        TicketDashboardList={TicketDashboardList}
        TicketToBeBooked={TicketToBeBooked}
        underProcess={underProcess}
        AgencyInvoiceAwaiting={AgencyInvoiceAwaiting}
        tryingFunction={tryingFunction}
      />

      {modalName !== "TicketToBeBooked" ? (
        ""
      ) : (
        <TicketToBeBookedModal
          onClose={() => { setModalName(""), fetchTicketDashboard() }}
          onChange={(value) => setOpenTicketToBeBooked(value)}
          openTicketToBeBooked={openTicketToBeBooked}
          TicketDashboardList={TicketDashboardList}
        />
      )}

      {modalName !== "underProcess" ? (
        ""
      ) : (
        <UnderProcess
          onClose={() => { setModalName(""), fetchTicketDashboard() }}
          onChange={(value) => { setOpenUnderProcess(value), console.log(value, "AAA") }}
          openUnderProcess={openUnderProcess}
        />
      )}


      {modalName !== "agencyinvoiceawaiting" ? (
        ""
      ) : (
        <AgencyInvoiceAwaitingTable
          onClose={() => { setModalName(""), fetchTicketDashboard() }}
          onChange={(value) => setAgencyInvoiceAwaiting(value)}
          agencyInvoiceAwaiting={agencyInvoiceAwaiting}
        />
      )}
      {modalName !== "typingmodal" ? (
        ""
      ) : (
        <Trying
          onClose={() => { setModalName(""), fetchTicketDashboard() }}
          tryingList={tryingList}
          onChange={(value) => setTrying(value)}
        />
      )}
      {/* <GreenButton text='Submit' onClick={()=>onClickCreate(TicketDashboardList)} /> */}
    </>
  );
}
