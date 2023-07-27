import { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ClientAdditionalInvoiceTable from "./Table";
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { RedButton } from '../../../../componenets/CustomButton';
import RcPPRecievedTable from './Table';




export default function Main() {


    const [searchQuery, setSearchQuery] = useState("")
    const [data, setData] = useState('')

  const [RcPPRecieved, setRcRcPPRecieved] = useState([])

    return (
        <div>

            <CustomNavbarV3 pageName="RC - PP Received " searchFunction={(query) => setSearchQuery(query)} />
           

            <RcPPRecievedTable
                RcPPRecieved={RcPPRecieved}
                setRcRcPPRecieved={setRcRcPPRecieved}
                data={data}
                setData={setData}
            />
        </div>

    );


}
