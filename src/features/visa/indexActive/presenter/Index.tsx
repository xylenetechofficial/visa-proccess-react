import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import TicketReissueTable from './Table'
import { FaFilter } from "react-icons/fa";
import { GreenButton } from "../../../../componenets/CustomButton";


export default function Main(){

    const CardHeader = styled(Box)(() => ({
        display: "flex",
        flexWrap: "wrap",
        paddingRight: "24px",
        marginBottom: "18px",
        alignItems: "center",
        justifyContent: "space-between",
    }));

    const [searchQuery, setSearchQuery] = useState('');

    const [modalName, setModalName] = useState('')

    const [reIssue, setReIssue] = useState({})
    const [ticketReissueList, setTicketReissueList] = useState<[]>([])



    return(
        <>
            <CustomNavbarV3
                pageName="Index Active"
                searchFunction={(query) => setSearchQuery(query)}
            />
            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>


           


            <div className="flex justify-end items-center mt-3">

            <GreenButton text='Submit'  />
            </div>
        </>
    )
}