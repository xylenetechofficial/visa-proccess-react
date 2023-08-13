import TicketAgencyInvoiceTable from './Table';
import { useState, useEffect } from "react";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { TicketAgencyInvoicesInterface } from '../type';
import { createTicketAgencyInvoices, readTicketAgencyInvoicesList } from '../repository';
import { GreenButton } from '../../../../componenets/CustomButton';
export default function Main() {

    const CardHeader = styled(Box)(() => ({
        display: "flex",
        flexWrap: "wrap",
        paddingRight: "24px",
        marginBottom: "18px",
        alignItems: "center",
        justifyContent: "space-between",
    }));
    const [searchQuery, setSearchQuery] = useState('');
    const [TicketAgencyInvoicesList, setTicketAgencyInvoicesList] = useState<TicketAgencyInvoicesInterface[]>([])
    async function fetchTicketProvidedByCompany() {
        const data = await readTicketAgencyInvoicesList();
        if (data) {
            setTicketAgencyInvoicesList(data)
        }

    }
    const onClickCreate = async (item: TicketAgencyInvoicesInterface) => {
        await createTicketAgencyInvoices(item)
    }


    useEffect(() => {
        fetchTicketProvidedByCompany();

    }, [])


    return (

        <>
            <CustomNavbarV3
                pageName="Ticket Agency - Invoices"
                searchFunction={(query) => setSearchQuery(query)}
            />
            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>
            <TicketAgencyInvoiceTable TicketAgencyInvoicesList={TicketAgencyInvoicesList} onChange={(value)=>setTicketAgencyInvoicesList(value)}/>
            {/* <GreenButton text='Submit' onClick={() => onClickCreate(TicketAgencyInvoicesList[0])} /> */}
        </>
    )
}