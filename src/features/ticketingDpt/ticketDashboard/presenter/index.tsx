import TicketDashboard from './Table'
import { useState } from "react";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import BookingTable from "./Table";
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
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
    return (

        <>
            <CustomNavbarV3
                pageName="Ticket Dashboard"
                searchFunction={(query) => setSearchQuery(query)}
            />
            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>

    <TicketDashboard />
        </>
    )
}