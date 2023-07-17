import { useEffect, useState } from "react";
import CreateModal from './DocumentChagesModal'
// import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { SubmissionDashboardInterface } from "../type";
import { readSubmissionDashboardData, updateSubmissionDashboardData } from "../repository";
import Table from "./Table";
import { BlueButton, GreenButton } from "../../../../componenets/CustomButton";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));
const initValue: SubmissionDashboardInterface = {
    id: 0,
    party_code: "",
    company_name: "",
    name: "",
    passport_no: "",


    mofa_number: "",
    visa_profession: "",
    visa_authorization: "",
    visa_submission: "",
    visa_no: "",


    submission_date: "",
    visa_issue_date: "",
    visa_received_date: "",
    arabic_sponsor_name: "",
    arabic_visa_category: "",
    visa_arabic_date: "",


    pp_issued_date: "",
    pp_expiry_date: "",
    place_of_issue: "",


    date_of_birth: "",
    place_of_birth: "",
    address: "",

    actual_profession: "",

    agent_name: "",
    division: "",
    rm_name: "",
    rs_name: "",
    rc_name: "",

    cancelled_candidates: "",
    document_charges: 0,
    consulate_charges: 0,

    remarks: "",
    is_without:0,

reject:0

}
export default function Main() {
    const [submissionDashboardDataList, setSubmissionDashboardDataList] = useState<SubmissionDashboardInterface[]>([])

    const [searchQuery, setSearchQuery] = useState("")
    const [change_string, set_change_string] = useState("")

    const filterData = (query: string, data: SubmissionDashboardInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.name.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, submissionDashboardDataList);



    const fetchSubmisionDashboardDataList = async () => {
        const data = await readSubmissionDashboardData();
        console.log(data);
        setSubmissionDashboardDataList(data)
        set_change_string((new Date()).toISOString())
    }

    const UpdateSubmissionDashboardDataList = async () => {
        const newArray = []
        for(let i=0;i<submissionDashboardDataList.length;i++){
            if(submissionDashboardDataList[i].checked){
                newArray.push(submissionDashboardDataList[i])
            }
        }
        const data = await updateSubmissionDashboardData(newArray)
        fetchSubmisionDashboardDataList()

    }
    useEffect(() => {

        fetchSubmisionDashboardDataList()


    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Submission Dashboard" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

            </CardHeader>


            <Table
                submissionDashboardDataList={submissionDashboardDataList}
                onChange={(value) => setSubmissionDashboardDataList(value)}
                fetchSubmisionDashboardDataList={fetchSubmisionDashboardDataList}
                change_string={change_string}
            />

            <BlueButton text="Update" onClick={UpdateSubmissionDashboardDataList} />
        </div>
    )
}