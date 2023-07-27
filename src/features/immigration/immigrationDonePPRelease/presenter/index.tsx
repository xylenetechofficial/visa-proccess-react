import { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ClientAdditionalInvoiceTable from "./Table";
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import ImmigrationDOnePPReleaseTable from './Table';
import { createImmigrationDonePPRelease, readImmigrationDonePPReleaseList } from '../repository';




export default function Main() {


    const [searchQuery, setSearchQuery] = useState("")
    const [data, setData] = useState('')

  const [RcPPRecieved, setRcRcPPRecieved] = useState([])
    const fetchImmigrationDoneList =async()=>{
      const data:any= await  readImmigrationDonePPReleaseList();
      if(data){
        setRcRcPPRecieved(data)
      }
    }

    const createImmigrationDonePPReleaseList = async (item:any)=>{
        const data :any = await createImmigrationDonePPRelease(item);
        if(data){
            fetchImmigrationDoneList();
        }
    }
    useEffect(()=>{
        fetchImmigrationDoneList();
    },[])
    return (
        <div>

            <CustomNavbarV3 pageName="Immigration Done PP Release" searchFunction={(query) => setSearchQuery(query)} />
           

            <ImmigrationDOnePPReleaseTable
                RcPPRecieved={RcPPRecieved}
                setRcRcPPRecieved={setRcRcPPRecieved}
                onChange={(value:any)=>setRcRcPPRecieved(value)}
                data={data}
                setData={setData}
            />
            <BlueButton text='Submit' onClick={()=>{createImmigrationDonePPReleaseList(RcPPRecieved)}} />
        </div>

    );


}
