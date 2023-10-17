import RMAdvanceBooking from './Table'
import { useState, useEffect } from "react";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { RMAdvanceBookingInterface } from '../type';
import { createRMAdvanceBooking, readRMAdvanceBookingList } from '../repository';
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
    const [RMAdvanceBookingList, setRMAdvanceBookingList] = useState<RMAdvanceBookingInterface[]>([])
    async function fetchRMAdvanceBooking() {
        const data = await readRMAdvanceBookingList();
        if (data) {
            setRMAdvanceBookingList(data)
        }

    }
    const onClickCreate = async (item: RMAdvanceBookingInterface[]) => {

        const new_data: RMAdvanceBookingInterface[] = []
        for (let i = 0; i < item.length; i++) {
            const element = item[i];
            // console.log(item);   // Only Dev
            // console.log(element);   // Only Dev
            if (element.advance == "Yes")
                new_data.push(element)
        }
        await createRMAdvanceBooking(new_data)
        fetchRMAdvanceBooking()
        // window.location.reload()
    }


    useEffect(() => {
        fetchRMAdvanceBooking();

    }, [])



    return (

        <>
            <CustomNavbarV3
                pageName="RM Advance Booking"
                searchFunction={(query) => setSearchQuery(query)}
                refresh={()=>{
                    fetchRMAdvanceBooking()
                }}
            />
            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>
            <RMAdvanceBooking RMAdvanceBookingList={RMAdvanceBookingList} onChange={(value) => setRMAdvanceBookingList(value)} />
            <GreenButton text='Submit' onClick={() => onClickCreate(RMAdvanceBookingList)} />
        </>
    )
}