import PassportReleaseRequest from './Table';
import { useState, useEffect } from "react";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { PassportReleaseRequestInterface } from '../type';
import { createPassportReleaseRequest, readPassportReleaseRequestList } from '../repository';
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
    const [PassportReleaseRequestList, setPassportReleaseRequestList] = useState<PassportReleaseRequestInterface[]>([])
    async function fetchPassportReleaseRequest() {
        const data = await readPassportReleaseRequestList();
        if (data) {
            setPassportReleaseRequestList(data)
        }

    }
    const onClickCreate = async (item: PassportReleaseRequestInterface) => {
        await createPassportReleaseRequest(item)
    }

    useEffect(() => {
        fetchPassportReleaseRequest();

    }, [])


    return (

        <>
            <CustomNavbarV3
                pageName="Passport Release Request"
                searchFunction={(query) => setSearchQuery(query)}
            />
            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>
            <PassportReleaseRequest PassportReleaseRequestList={PassportReleaseRequestList} onChange={(value)=>setPassportReleaseRequestList(value)} />
       <GreenButton text="Submit" onClick={()=>onClickCreate(PassportReleaseRequestList[0])} />
        </>
    )
}