import { useEffect, useState } from 'react';
import { CustomButton2, CustomNavbarV3 } from '../../../componenets/CustomComponents';
import { DateInput, TextAreaInput } from '../../../componenets/Input';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ImmigrationTable from "./Table";
import { ImmigrationInterface } from '../type';

const DataList: ImmigrationInterface[] = [{
    id: 1,

    name: "string",
    company_name: "string",
    passport_no: "string",
    isChecked: 1,
    arn: "string",
    immigration_required: "string",
    submission_date: "string",
    received_date: "string",
    party_code: 1,
    division: "string",
    passport_issued_date: "string",
    passport_expiry_date: "string",
    place_of_issue: "string",
    date_of_birth: "string",
    address: "string",
    nominee_name: "string",
    nominee_relation: "string",
    place_of_birth: "string",
    visa_number: "string",
    actual_profession: "string",
    visa_profession: "string",
    agent_name: "string",
    agent_location: "string",
    visa_authorization: "string",
    visa_issued_date: "string",
    visa_received_date: "string",
    visa_expire_date: "string",
    mol_number: 0,
    reject: 0
},
{
    id: 2,

    name: "string",
    company_name: "string",
    passport_no: "string",
    isChecked: 2,
    arn: "string",
    immigration_required: "string",
    submission_date: "string",
    received_date: "string",
    party_code: 2,
    division: "string",
    passport_issued_date: "string",
    passport_expiry_date: "string",
    place_of_issue: "string",
    date_of_birth: "string",
    address: "string",
    nominee_name: "string",
    nominee_relation: "string",
    place_of_birth: "string",
    visa_number: "string",
    actual_profession: "string",
    visa_profession: "string",
    agent_name: "string",
    agent_location: "string",
    visa_authorization: "string",
    visa_issued_date: "string",
    visa_received_date: "string",
    visa_expire_date: "string",
    mol_number: 2,
    reject: 2
},
{
    id: 3,

    name: "string",
    company_name: "string",
    passport_no: "string",
    isChecked: 3,
    arn: "string",
    immigration_required: "string",
    submission_date: "string",
    received_date: "string",
    party_code: 3,
    division: "string",
    passport_issued_date: "string",
    passport_expiry_date: "string",
    place_of_issue: "string",
    date_of_birth: "string",
    address: "string",
    nominee_name: "string",
    nominee_relation: "string",
    place_of_birth: "string",
    visa_number: "string",
    actual_profession: "string",
    visa_profession: "string",
    agent_name: "string",
    agent_location: "string",
    visa_authorization: "string",
    visa_issued_date: "string",
    visa_received_date: "string",
    visa_expire_date: "string",
    mol_number: 3,
    reject: 3
}]

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

    useEffect(() => {
        setImmigrationData(DataList)
    }, [])
    return (
        <div className='h-screen'>

            <CustomNavbarV3 pageName="Reject Cancel Approve" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>
            <ImmigrationTable
                immigrationData={immigrationData}
                onClickEdit={() => console.log("first")}
                onChange={(value) => setImmigrationData(value)}
            />
        </div>

    );


}
