import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import TicketReissueTable from './Table'
import { FaFilter } from "react-icons/fa";
import EditModal from './Edit'
import { readTicketIssueList } from "../repository";
import { TicketIssueInterface } from "../type";

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

    const [reIssue, setReIssue] = useState<TicketIssueInterface>({}as TicketIssueInterface)

    const onClickEdit = (reissue: any) => {
        setReIssue(reissue)
        console.log("onClickEdit");   // Only Dev
        console.log(reissue);   // Only Dev
        setModalName('edit')
    }
    const [ticketIssueList, setTicketIssueList]= useState<TicketIssueInterface[]>([])
    const fetchTicketissue =async()=>{
        const res :any= await readTicketIssueList();
        if(res){
            setTicketIssueList(res)
        }
    }
    useEffect(()=>{
        fetchTicketissue()
    },[])

    return (
        <>
            <CustomNavbarV3
                pageName="Ticket Reissue"
                searchFunction={(query) => setSearchQuery(query)}
            />
            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>


            <TicketReissueTable
                onClickEdit={onClickEdit}
                ticketIssueList={ticketIssueList}
                

            />


            {
                modalName !== "edit" ? "" :
                    <EditModal
                        reIssue={reIssue}
                        setReIssue={setReIssue}
                        onClose={() => setModalName("")}
                    />
            }

            {/* <GreenButton text='Submit'  /> */}
        </>
    )
}