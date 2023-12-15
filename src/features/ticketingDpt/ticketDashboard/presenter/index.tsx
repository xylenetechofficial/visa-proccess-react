import TicketDashboard from "./Table";
import { useState, useEffect } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import {  readAgencyInvoiceAwaiting, readTicketDashboardList, readTicketToBeBookedList, readTrying, readUnderProcessList } from "../repository";
import { TickeDashboardInterface2,  TicketInterface } from "../type";
import TicketToBeBookedModal from "./TicketToBeBooked";
import UnderProcess from "./UnderProcess";
import Trying from "./Trying";
import AgencyInvoiceAwaitingTable from "./AgencyInvoiceAwaiting";
import { TypingInterface } from "../tryingType";
import { AgentInvoiceAwaitingInterface } from "../agentInvoiceAwaitingType";
import { UnderprocessInterface } from "../underprocessType";
import { AgencyInterface } from "../../../masters/agency/type";
import { readAgencyList } from "../../../masters/agency/repository";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import EditModal from './Edit';
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


  const [openTicketToBeBooked, setOpenTicketToBeBooked] =
    useState<TicketInterface[]>([]);

  const [openUnderProcess, setOpenUnderProcess] =
    useState<UnderprocessInterface[]>([] as UnderprocessInterface[]);

  const [agencyInvoiceAwaiting, setAgencyInvoiceAwaiting] =
    useState<AgentInvoiceAwaitingInterface[]>([]);

  const [tryingList, setTrying] =
    useState<TypingInterface[]>([]);

  const [modalName, setModalName] = useState("");

  const TicketToBeBooked = async (ticketDashboard: TickeDashboardInterface2) => {

    console.log("onClickEdit"); // Only Dev
    console.log(ticketDashboard); // Only Dev
    setModalName("TicketToBeBooked");
    const res: any = await readTicketToBeBookedList(ticketDashboard)
    if (res) {
      console.log("REs=", res)
      setOpenTicketToBeBooked(res)
    }
  };

  const underProcess = async (ticketDashboard: TickeDashboardInterface2) => {

    console.log("onClickEdit"); // Only Dev
    console.log(ticketDashboard); // Only Dev
    setModalName("underProcess");
    const res: any = await readUnderProcessList(ticketDashboard);
    console.log(res, "RESLL")
    if (res) {
      setOpenUnderProcess(res)
    }
  };

  const AgencyInvoiceAwaiting = async (ticketDashboard: TickeDashboardInterface2) => {

    console.log("onClickEdit"); // Only Dev
    console.log(ticketDashboard); // Only Dev
    setModalName("agencyinvoiceawaiting");
    const res: any = await readAgencyInvoiceAwaiting(ticketDashboard)
    if (res) {
      setAgencyInvoiceAwaiting(res)
    }
  };
  const tryingFunction = async (ticketDashboard: TickeDashboardInterface2) => {

    console.log("onClickEdit"); // Only Dev
    console.log(ticketDashboard); // Only Dev
    setModalName("typingmodal");
    const res: any = await readTrying(ticketDashboard)
    if (res) {
      setTrying(res)
    }
  };
  const [agencyList, setAgencyList] = useState<AgencyInterface[]>([]);
  const fetchAgencyList = async () => {
    const res = await readAgencyList();
    setAgencyList(res);
  };
  
  useEffect(() => {
    fetchTicketDashboard();
    fetchAgencyList();
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
        <div>
          <BlueButton text="Edit" onClick={()=>setModalName('edit')} /> 
          {/* <RedButton text="Delete" onClick={()=>setModalName('delete')} /> */}
        </div>
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
          agencyList={agencyList}
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
          agencyList={agencyList}
        />
      )}

      {modalName === 'edit' ? <EditModal onClose={()=>setModalName('')} setModalName={(value)=>setModalName(value)}/> :''}
      {/* <GreenButton text='Submit' onClick={()=>onClickCreate(TicketDashboardList)} /> */}
    </>
  );
}
