import { useEffect, useState } from "react";
// import CreateModal from './Create'
// import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { VisaReceivedInterface } from "../type";
import { readVisaReceivedDate, updateVisaReceivedData } from "../repository";
import Table from "./Table";
import { GreenButton } from "../../../../componenets/CustomButton";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));
const initValue: VisaReceivedInterface = {
    candidateNo: 0,
    partyCode: "",
    companyName: "",
    candiddateName: "",
    passportNo: "",
    actualProfession: "",
    visaProfession: "",
    agent: "",
    rc: "",
    mofaNumber: "",
    visaAuthorization: "",
    division: "",
    visaFee: "",
    ppCopy: "",
    visaNo: "",
    submissionDate: "",
    visaReceivedDate: "",
    documentCharges: "",
    status: "",
    folderLocation: "",
    placeOfIssue: "",
    is_without: 0,

}
export default function Main() {
    const [JobOrderList, setJobOrderList] = useState<VisaReceivedInterface[]>([])
    const [currentElement, setCurrentElement] = useState<VisaReceivedInterface>(initValue)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")

    const filterData = (query: string, data: VisaReceivedInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.candiddateName.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, JobOrderList);


    const fetchVisaReceiveData = async () => {
        const data = await readVisaReceivedDate();
        console.log(data);
        setJobOrderList(data)
    }

    const OnClickSubmit = async () => {
        console.log(JobOrderList)
        const newArray = []
        for (let i = 0; i < JobOrderList.length; i++) {
            if (JobOrderList[i].checked) {
                newArray.push(JobOrderList[i])
            }
        }
        const res = updateVisaReceivedData(newArray)
        fetchVisaReceiveData()

    }
    useEffect(() => {

        fetchVisaReceiveData()


    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Visa received" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>


            {/*  indexVisa stable */}
            <Table
                jobOrderList={JobOrderList}
                onChange={(value) => setJobOrderList(value)}

            />

            <GreenButton onClick={OnClickSubmit} text="Submit" />
        </div>
    )
}