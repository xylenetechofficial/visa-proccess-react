import TicketDashboard from './Table'
import { useState, useEffect } from "react";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import BookingTable from "./Table";
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { createTicketDashboard, readTicketDashboardList } from '../repository';
import { TicketDashboardInterface } from '../type';
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
    const [TicketDashboardList,setTicketDashboardList] = useState<TicketDashboardInterface[]>([])
 async   function fetchTicketDashboard(){
    const data= await readTicketDashboardList();
    if(data){
        setTicketDashboardList(data)
    }

    }
    const onClickCreate = async(item: TicketDashboardInterface)=>{
        await createTicketDashboard(item)
    }
    useEffect(()=>{
        fetchTicketDashboard();
    },[])
    
    return (

        <>
            <CustomNavbarV3
                pageName="Ticket Dashboard"
                searchFunction={(query) => setSearchQuery(query)}
            />
            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>

    <TicketDashboard TicketDashboardList={TicketDashboardList} onChange={(value)=>setTicketDashboardList(value)}/>
    {/* <GreenButton text='Submit' onClick={()=>onClickCreate(TicketDashboardList[0])} /> */}
        </>
    )
}