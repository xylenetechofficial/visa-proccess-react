import { Box, styled } from "@mui/material";
import { useState } from "react";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { GreenButton } from "../../../../componenets/CustomButton";
import TicketReissueTable from './Table'
import { FaFilter } from "react-icons/fa";
import EditModal from './Edit'

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

    const onClickEdit = (reissue: any) => {
        setReIssue(reissue)
        console.log("onClickEdit");   // Only Dev
        console.log(reissue);   // Only Dev
        setModalName('edit')
    }

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