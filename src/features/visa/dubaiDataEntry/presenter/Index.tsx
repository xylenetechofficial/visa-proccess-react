import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { BlueButton, GreenButton } from "../../../../componenets/CustomButton";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { DubaiDataEntryInterface, } from "../type";
import { readDubaiDataEntryList, updateDubaiDataEntry } from "../repository";
import DubaiDataEntryTable from "./DubaiDataentryTable";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {


    const [dubaiDateEntryList, setDubaiDateEntryList] = useState<DubaiDataEntryInterface[]>([])

    const [searchQuery, setSearchQuery] = useState("")

    const filterData = (query: string, data: DubaiDataEntryInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.candidateName.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, dubaiDateEntryList);


    const handleUpdateDubaiDataEntryList = async () => {
        const newArray=[];
        for(let i=0; i<dubaiDateEntryList.length; i++) {
            if(dubaiDateEntryList[i].ppReceived){
                newArray.push(dubaiDateEntryList[i])
            }
        }
        const data = await updateDubaiDataEntry(newArray)
        fetchDubaiDataEntryList()
    }

    const fetchDubaiDataEntryList = async () => {
        const data = await readDubaiDataEntryList();
        console.log(data);
        if (data) {
            setDubaiDateEntryList(data);

        }


    }
    // const [change_detect]
    useEffect(() => {

        fetchDubaiDataEntryList()


    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Dubai Data Entry" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

                {/* 
                <GreenButton text={"Add +"} onClick={() => {
                    setModalName("create")
                }} /> */}

            </CardHeader>


            <DubaiDataEntryTable
                dubaiDataEntryList={dubaiDateEntryList}
                onChange={(value) => setDubaiDateEntryList(value)}
                fetchDubaiDataEntryList={() => {
                    fetchDubaiDataEntryList()
                }
                }
            />

            <BlueButton text="Update" onClick={handleUpdateDubaiDataEntryList} />

        </div>
    )
}