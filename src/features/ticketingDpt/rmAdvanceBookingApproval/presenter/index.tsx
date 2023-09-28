import RMAdvanceBookingAproval from './Table';
import { useState, useEffect } from "react";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { RMAdvanceBookingApprovalInterface } from '../type';
import { createRMAdvanceBookingApproval, readRMAdvanceBookingApprovalList } from '../repository';
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

    const [RMAdvanceBookingApprovalList, setRMAdvanceBookingApprovalList] = useState<RMAdvanceBookingApprovalInterface[]>([])
    async function fetchRMAdvanceBookingApproval() {
        const data = await readRMAdvanceBookingApprovalList();
        if (data) {
            setRMAdvanceBookingApprovalList(data)
        }

    }
    const onClickCreate = async (item: RMAdvanceBookingApprovalInterface) => {
        await createRMAdvanceBookingApproval(item)
        fetchRMAdvanceBookingApproval()
    }

    useEffect(() => {
        fetchRMAdvanceBookingApproval();

    }, [])


    return (

        <>
            <CustomNavbarV3
                pageName="RM Advance Booking Approval"
                searchFunction={(query) => setSearchQuery(query)}
            />
            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>

            <RMAdvanceBookingAproval
                RMAdvanceBookingApprovalList={RMAdvanceBookingApprovalList}
                onChange={(value) => setRMAdvanceBookingApprovalList(value)} onClickCreate={onClickCreate} />
            {/* <GreenButton onClick={()=>onClickCreate(RMAdvanceBookingApprovalList[0])} /> */}
        </>
    )
}