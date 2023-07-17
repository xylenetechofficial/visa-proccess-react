import { useEffect, useState } from "react";
import CreateModal from './Create'
// import EditModal from './Edit'
import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, styled } from "@mui/material";
import IndexVisaTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { CancelPartyCodeInterface, IndexVisaInterface } from "../type";
import { deleteIndexVisa, readCancelPartyCodeList, readIndexVisaList } from "../repository";
import { SectorInterface } from "../../../masters/sector/type";
import { readSectorList } from "../../../masters/sector/repository";
import { readCompanyList } from "../../../masters/company/repository";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { readCountryList } from "../../../masters/country/repository";
import { Table3, TableBody2, TableCell2, TableCell2lastColumn, TableHead3, TableHeadCell3, TableHeadRow3, TableRow2 } from "../../../../componenets/Table";
import { convertDateFormat } from "../../../../utils/function";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {
    const [cancelPartyCodeList, setCancelPartyCodeList] = useState<CancelPartyCodeInterface[]>([])
    
    const [searchQuery, setSearchQuery] = useState("")

    const filterData = (query: string, data: CancelPartyCodeInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.company_name.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, cancelPartyCodeList);

    const [countryList, setCountryList] = useState<CountryInterface[]>([])
    const fetchCountryList = async () => {
        const data = await readCountryList();
        if (data) {
            setCountryList(data);
        }
    }

    const fetchCancelPartyCodeList = async () => {
        const data = await readCancelPartyCodeList();
        console.log(data);
        setCancelPartyCodeList(data)
    }
    useEffect(() => {

        fetchCancelPartyCodeList()
        fetchCountryList()
    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Cancel Party Codes" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
                <RefreshIcon
                onClick={fetchCancelPartyCodeList}
                />
            </CardHeader>


            <div className='overflow-auto'>


                <Table3  >
                    <TableHead3 >
                        <TableHeadRow3  >
                            <TableHeadCell3  > Sr No.</TableHeadCell3>
                            <TableHeadCell3 > DATE</TableHeadCell3>
                            <TableHeadCell3 > COMPANY NAME</TableHeadCell3>
                            <TableHeadCell3 > Party Code</TableHeadCell3>
                            <TableHeadCell3 > Generate By</TableHeadCell3>

                        </TableHeadRow3>
                    </TableHead3>
                    <TableBody2>
                        {cancelPartyCodeList.map((ele, index) => (

                            <TableRow2 key={index}>
                                <TableCell2 >{index + 1}</TableCell2>
                                <TableCell2 > {convertDateFormat(ele.created_at??"")}</TableCell2>
                                <TableCell2 > {ele.company_name}</TableCell2>
                                <TableCell2 > {ele.party_code}</TableCell2>
                                <TableCell2lastColumn > {ele.user_name}</TableCell2lastColumn>
                            </TableRow2>
                        ))}
                    </TableBody2>
                </Table3>

            </div>
        </div>
    )
}