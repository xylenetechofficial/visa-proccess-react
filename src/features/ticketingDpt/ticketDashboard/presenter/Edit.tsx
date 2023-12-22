import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import { TickeDashboardInterface2, TicketInterface } from "../type";
import Table from './Table';
import { readAgencyInvoiceAwaiting, readTicketDashboardList, readTicketToBeBookedList, readTrying, readUnderProcessList } from "../repository";
import { TypingInterface } from "../tryingType";
import { UnderprocessInterface } from "../underprocessType";
import { AgentInvoiceAwaitingInterface } from "../agentInvoiceAwaitingType";
export default function Main(props:
    {
        onClose: () => void,
        setModalName: (value: string) => void,
    }) {
    const [TicketDashboardList, setTicketDashboardList] =
        useState<TickeDashboardInterface2[]>([]);

    const [tryingList, setTrying] =
        useState<TypingInterface[]>([]);

    const [openUnderProcess, setOpenUnderProcess] =
        useState<UnderprocessInterface[]>([] as UnderprocessInterface[]);
    const [openTicketToBeBooked, setOpenTicketToBeBooked] =
        useState<TicketInterface[]>([]);

    const [agencyInvoiceAwaiting, setAgencyInvoiceAwaiting] =
        useState<AgentInvoiceAwaitingInterface[]>([]);

    async function fetchTicketDashboard() {
        const data = await readTicketDashboardList({ page: 0, status: "yes" });
        console.log(data, "s")
        if (data) {
            setTicketDashboardList(data);
        }
    }



    const TicketToBeBooked = async (ticketDashboard: TickeDashboardInterface2) => {

        console.log("onClickEdit"); // Only Dev
        console.log(ticketDashboard); // Only Dev
        props.setModalName("TicketToBeBooked");
        const res: any = await readTicketToBeBookedList(ticketDashboard)
        if (res) {
            console.log("REs=", res)
            setOpenTicketToBeBooked(res)
        }
    };

    const tryingFunction = async (ticketDashboard: TickeDashboardInterface2) => {

        console.log("onClickEdit"); // Only Dev
        console.log(ticketDashboard); // Only Dev
        props.setModalName("typingmodal");
        const res: any = await readTrying(ticketDashboard, { page: 0, status: "yes" });
        if (res) {
            setTrying(res)
        }
    };


    const underProcess = async (ticketDashboard: TickeDashboardInterface2) => {

        console.log("onClickEdit"); // Only Dev
        console.log(ticketDashboard); // Only Dev
        props.setModalName("underProcess");
        const res: any = await readUnderProcessList(ticketDashboard, { page: 0, status: "yes" });
        console.log(res, "RESLL")
        if (res) {
            setOpenUnderProcess(res)
        }
    };

    const AgencyInvoiceAwaiting = async (ticketDashboard: TickeDashboardInterface2) => {

        console.log("onClickEdit"); // Only Dev
        console.log(ticketDashboard); // Only Dev
        props.setModalName("agencyinvoiceawaiting");
        const res: any = await readAgencyInvoiceAwaiting(ticketDashboard, { page: 0, status: "yes" });
        if (res) {
            setAgencyInvoiceAwaiting(res)
        }
    };


    const handleClick = () => {
        console.log("first")
    }
    useEffect(() => {
        fetchTicketDashboard();
    }, [])

    return (
        <FullScreenModal
            buttonName=""
            handleClick={() => handleClick()}
            title="Ticket Dashboard"
            onClose={props.onClose}
        >

            <Table
                //  TicketToBeBooked={TicketToBeBooked}
                TicketDashboardList={TicketDashboardList}
                tryingFunction={tryingFunction}
                underProcess={underProcess}
            // AgencyInvoiceAwaiting={AgencyInvoiceAwaiting}
            />
        </FullScreenModal>
    )
}