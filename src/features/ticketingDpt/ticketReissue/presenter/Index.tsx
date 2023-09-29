import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import TicketReissueTable from './Table'
import { FaFilter } from "react-icons/fa";
import EditModal from './Edit'
import { TicketReissueInterface } from "../type";
import { readTicketReissueList } from "../repository";

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
    const [ticketReissueList, setTicketReissueList] = useState<TicketReissueInterface[]>([])

    // const fetchTicketReissueList = async () => {
    //     const data: any = await readTicketReissueList();
    //     if(data){
    //         setTicketReissueList(data)
    //     }
    //     console.log(data, "Amit")
    // }

    async function fetchTicketReissueList() {
        const data = await readTicketReissueList();
        if (data) {
            setTicketReissueList(data);
        }
      }

    const onClickEdit = (reissue: any) => {
        setReIssue(reissue)
        console.log("onClickEdit");   // Only Dev
        console.log(reissue);   // Only Dev
        setModalName('edit')
    }

    useEffect(() => {
        fetchTicketReissueList()
    }, [])
    return(
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
             ticketReissueList={ticketReissueList}
             fetchTicketReissueList={fetchTicketReissueList}

            />


{
modalName !== "edit" ? "" : 
<EditModal 
reIssue={reIssue}
 onClose={() => setModalName("")}
 />
    } 

            {/* <GreenButton text='Submit'  /> */}
        </>
    )
}