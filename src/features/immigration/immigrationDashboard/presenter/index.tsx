import { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import ImmigrationTable from "./Table";
import { ImmigrationInterface } from '../type';
import { createImmigrationList, readImmigrationList } from '../repository';

export default function Main() {

    const CardHeader = styled(Box)(() => ({
        display: "flex",
        flexWrap: "wrap",
        paddingRight: "24px",
        marginBottom: "18px",
        alignItems: "center",
        justifyContent: "space-between",
    }));
    const [searchQuery, setSearchQuery] = useState("")
    const [immigrationData, setImmigrationData] = useState<ImmigrationInterface[]>([])

        const fetchImmigrationList =async()=>{
            const data :any = await readImmigrationList();
            if(data){
                setImmigrationData(data)
            }
        }

        const createImmigration =async(item:any)=>{
            const data:any = await createImmigrationList(item);
            if(data){
                fetchImmigrationList();
            }
        }
    useEffect(() => {
        fetchImmigrationList()
    }, [])
    return (
        <div className='h-screen'>

            <CustomNavbarV3 pageName="Immigration Dashboard" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>
            <ImmigrationTable
                immigrationData={immigrationData}
                onClickEdit={() => console.log("first")}
                onChange={(value) => setImmigrationData(value)}
                fetchImmigrationList={fetchImmigrationList}
            />
            <BlueButton text='Submit' onClick={()=>{createImmigration(immigrationData)}} />
        </div>

    );


}
