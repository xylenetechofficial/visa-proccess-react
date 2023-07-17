import { useEffect, useState } from "react";
// import CreateModal from './Create'
// import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";

import { ReadMolRecievedData,  updateMolReceivedData } from "../repository";
import Table from "./Table";
import { GreenButton } from "../../../../componenets/CustomButton";
import { MolReceivedInterface } from "../type";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {
    const [JobOrderList, setJobOrderList] = useState<MolReceivedInterface[]>([])

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")

    const filterData = (query: string, data: MolReceivedInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.name.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, JobOrderList);

    const onClickCreate = () => {
        setModalName('create');

    }



    // useEffect(() => {
    // }, [editIndexVisa, modalName])
    const onClickSubmit =async () => {
            const res=await  updateMolReceivedData(JobOrderList)
            fetchMofaRecievedData()
    
        }


    const fetchMofaRecievedData = async () => {
        const data = await ReadMolRecievedData();
        console.log(data);
        setJobOrderList(data)
    }
    useEffect(() => {

        fetchMofaRecievedData()


    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Work permit received from company" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>


            {/*  indexVisa stable */}
            <Table
                jobOrderList={JobOrderList}
                onChange={(value) => setJobOrderList(value)}

            />
            <GreenButton onClick={onClickSubmit} text="Submit" />


        </div>
    )
}