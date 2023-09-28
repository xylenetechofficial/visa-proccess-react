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
import AgencyInvoiceAwaitingTable from "./AgencyInvoiceAwaiting";
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

  console.log(TicketDashboardList, "Amit")
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
    useState<TicketInterface[]>([]);

  const [agencyInvoiceAwaiting, setAgencyInvoiceAwaiting] =
    useState<TicketDashboardInterface[]>([]);

  const [tryingList, setTrying] =
    useState<TicketDashboardInterface[]>([]);

  const [modalName, setModalName] = useState("");

  const TicketToBeBooked = async(ticketDashboard: TicketDashboardInterface) => {
    // setOpenTicketToBeBooked(ticketDashboard);
    console.log("onClickEdit"); // Only Dev
    console.log(ticketDashboard); // Only Dev
    setModalName("TicketToBeBooked");
    const res :any= await readTicketToBeBookedList(ticketDashboard)
    if(res){
      console.log("REs=",res)
      setOpenTicketToBeBooked(res)
    }
  };

  const underProcess = async(ticketDashboard: TicketDashboardInterface) => {
    // setOpenUnderProcess(ticketDashboard);
    console.log("onClickEdit"); // Only Dev
    console.log(ticketDashboard); // Only Dev
    setModalName("underProcess");
    const res :any = await readUnderProcessList(ticketDashboard);
    console.log(res,"RESLL")
    if(res){
      setOpenUnderProcess(res)
    }
  };

  const AgencyInvoiceAwaiting = async(ticketDashboard: TicketDashboardInterface) => {
    // setOpenUnderProcess(ticketDashboard);
    console.log("onClickEdit"); // Only Dev
    console.log(ticketDashboard); // Only Dev
    setModalName("agencyinvoiceawaiting");
    const res :any =await readAgencyInvoiceAwaiting(ticketDashboard)
    if(res){
      setAgencyInvoiceAwaiting(res)
    }
  };
  const tryingFunction = async(ticketDashboard: TicketDashboardInterface) => {
    // setOpenUnderProcess(ticketDashboard);
    console.log("onClickEdit"); // Only Dev
    console.log(ticketDashboard); // Only Dev
    setModalName("underProcess");
    const res :any =await readTrying(ticketDashboard)
    if(res){
      setAgencyInvoiceAwaiting(res)
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
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <TicketDashboard
        TicketDashboardList={TicketDashboardList}
        // onChange={(value)=>setTicketDashboardList(value)}
        TicketToBeBooked={TicketToBeBooked}
        underProcess={underProcess}
        AgencyInvoiceAwaiting={AgencyInvoiceAwaiting}
        tryingFunction={tryingFunction}
      />

      {modalName !== "TicketToBeBooked" ? (
        ""
      ) : (
        <TicketToBeBookedModal
          onClose={() => {setModalName(""), fetchTicketDashboard()}}
          onChange={(value)=>setOpenTicketToBeBooked(value)}
          openTicketToBeBooked={openTicketToBeBooked}
          TicketDashboardList={TicketDashboardList}
        />
      )}

      {modalName !== "underProcess" ? (
        ""
      ) : (
        <UnderProcess
        onClose={() => {setModalName(""), fetchTicketDashboard()}}
        onChange={(value)=>setOpenTicketToBeBooked(value)}
          // TicketDashboardList={TicketDashboardList}
          openUnderProcess={openUnderProcess}
        />
      )}


{modalName !== "agencyinvoiceawaiting" ? (
        ""
      ) : (
        <AgencyInvoiceAwaitingTable
          onClose={() => setModalName("")}
          TicketDashboardList={TicketDashboardList}
        />
      )}
      {/* <GreenButton text='Submit' onClick={()=>onClickCreate(TicketDashboardList)} /> */}
    </>
  );
}
