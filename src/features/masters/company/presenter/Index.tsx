import { useEffect, useState } from "react";
import { deleteCompany, readCompanyList } from "../repository";
import { CompanyInterface } from "../type";
import CreateModal from './Create'
import EditModal from './Edit'
import { Box, Button, Icon, IconButton, TextField, styled } from "@mui/material";
import CompanyTable from "./CompanyTable";
import { confirmationMessage, showMessage } from "../../../../utils/alert";
import { Heading1, Heading3 } from "../../../../componenets/CoustomHeader";
import { GreenButton } from "../../../../componenets/CustomButton";
import { CountryInterface } from "../../country/type";
import { readCountryList } from "../../country/repository";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";

const CardHeader = styled(Box)(() => ({
    display: "flex",

    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {
    const [CompanyList, setCompanyList] = useState<CompanyInterface[]>([])

    const [editCompany, setEditCompany] = useState<CompanyInterface>({} as CompanyInterface)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")

    const filterData = (query: string, data: CompanyInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.name.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, CompanyList);

    const [countryList, setCountryList] = useState<CountryInterface[]>([])

    const fetchCountryList = async () => {
        setCountryList(await readCountryList())

    }

    useEffect(() => {
        fetchCountryList()
    }, [])

    const onClickEdit = (Company: CompanyInterface) => {
        setEditCompany(Company)
        console.log("onClickEdit");   // Only Dev
        console.log(Company);   // Only Dev
        setModalName('edit')
    }

    const onClickDelete = async (Company: CompanyInterface) => {
        const flag = await confirmationMessage("Do you really want to delete?")
        if (flag && Company.id) {
            await deleteCompany(Company.id);

            fetchCompanyList()
        }
    }

    // useEffect(() => {
    // }, [editCompany, modalName])

    const fetchCompanyList = async () => {
        setCompanyList(await readCompanyList(true))
    }
    useEffect(() => {

        fetchCompanyList()

    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Company" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

                <GreenButton text={"Add +"} onClick={() => {
                    setModalName("create")
                }} />

            </CardHeader>


            {/*  Company stable */}
            <CompanyTable
                companyList={dataFiltered}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
                countryList={countryList}
            />

            {/* <!-- Modal --> */}

            {/* Create */}
            {modalName !== "create" ? "" :
                <CreateModal onClose={() => setModalName("")} fetchCompanyList={fetchCompanyList} countryList={countryList} />}


            {/* Edit */}
            {modalName !== "edit" ? "" :
                <EditModal company={editCompany}
                    onClose={() => setModalName("")}
                    fetchCompanyList={fetchCompanyList}
                    countryList={countryList}
                />}
        </div>
    )
}