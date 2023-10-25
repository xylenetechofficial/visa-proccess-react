import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import TicketReissueTable from './Table'
import { FaFilter } from "react-icons/fa";
import { GreenButton } from "../../../../componenets/CustomButton";
import { TicketReIssueApprovedInterface } from "../type";
import { createTicketReIssueApprovedList, readTicketReIssueApprovedList } from "../repository";


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

    const [modalName, setModalName] = useState('')
    const [reIssueApprove, setReIssueApprove] = useState<TicketReIssueApprovedInterface[]>([] as TicketReIssueApprovedInterface[])


    const [ticketReissueApproveList, setTicketReissueApproveList] = useState<TicketReIssueApprovedInterface[]>([] as TicketReIssueApprovedInterface[])

    const fetchTicketissue = async () => {
        const res: any = await readTicketReIssueApprovedList();
        if (res) {
            setTicketReissueApproveList(res)
        }
    }

    useEffect(() => {
        fetchTicketissue()
    }, [])

    const handleClick = async () => {
        const newarry = [];

        for (let i = 0; i < ticketReissueApproveList.length; i++) {
            const element = ticketReissueApproveList[i];

            if (element.is_select) {
                newarry.push(element)
            }

        }
        console.log(newarry);   // Only Dev
        const res = await createTicketReIssueApprovedList(newarry)

        if (res) {
            fetchTicketissue()
        }
    }

    return (
        <>
            <CustomNavbarV3
                pageName="Ticket Reissue Approve"
                searchFunction={(query) => setSearchQuery(query)}
                refresh={() => fetchTicketissue()}
            />
            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>


            <TicketReissueTable
                // onChange={(value:any)=>setReIssueApprove(value)}
                setTicketReissueApproveList={(value) => setTicketReissueApproveList(value)}
                ticketReissueApproveList={ticketReissueApproveList}
            />


            <div className="flex justify-end items-center mt-3">

                <GreenButton text='Submit' onClick={() => handleClick()} />
            </div>
        </>
    )
}