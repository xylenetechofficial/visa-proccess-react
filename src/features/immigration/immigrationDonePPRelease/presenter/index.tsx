import { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ClientAdditionalInvoiceTable from "./Table";
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { RedButton } from '../../../../componenets/CustomButton';
import ImmigrationDOnePPReleaseTable from './Table';




export default function Main() {


    const [searchQuery, setSearchQuery] = useState("")
    const [data, setData] = useState('')

  const [RcPPRecieved, setRcRcPPRecieved] = useState([])

    return (
        <div>

            <CustomNavbarV3 pageName="Immigration Done PP Release" searchFunction={(query) => setSearchQuery(query)} />
           

            <ImmigrationDOnePPReleaseTable
                RcPPRecieved={RcPPRecieved}
                setRcRcPPRecieved={setRcRcPPRecieved}
                data={data}
                setData={setData}
            />
        </div>

    );


}
