import { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ClientAdditionalInvoiceTable from "./Table";
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { RedButton } from '../../../../componenets/CustomButton';
import IndexForEwakalaTable from './Table';
import { readIndexEwakalaList } from '../repository';




export default function Main() {


    const [searchQuery, setSearchQuery] = useState("")
    const [data, setData] = useState('')

    const [indexForEwakala, setIndexForEwakala] = useState([])

    const fetchIndexEwakalaList = async () => {
        const data: any = await readIndexEwakalaList();
        if (data) {
            setIndexForEwakala(data)
        }
    }
    useEffect(() => {
        fetchIndexEwakalaList();
    }, [])
    return (
        <div>

            <CustomNavbarV3 pageName="Index For Ewakala" searchFunction={(query) => setSearchQuery(query)} />


            <IndexForEwakalaTable
                indexForEwakala={indexForEwakala}
                setIndexForEwakala={setIndexForEwakala}
                data={data}
                setData={setData}
            />
        </div>

    );


}
