import { useEffect, useState } from "react";
// import CreateModal from './Create'
import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import JobOrderTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { JobOrderInterface } from "../type";
import { deleteJobOrder, readAssignToOpsMgrList } from "../repository";
import { SectorInterface } from "../../../masters/sector/type";
import { readSectorList } from "../../../masters/sector/repository";
import { readCompanyList } from "../../../masters/company/repository";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { readCountryList } from "../../../masters/country/repository";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {
    const [jobOrderList, setJobOrderList] = useState<JobOrderInterface[]>([])

    const [editJobOrder, setEditJobOrder] = useState<JobOrderInterface>({} as JobOrderInterface)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")

    const filterData = (query: string, data: JobOrderInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.date.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, jobOrderList);

    const onClickCreate = () => {
        setModalName('create');

    }

    const onClickEdit = (jobOrder: JobOrderInterface) => {
        setEditJobOrder(jobOrder)
        console.log("onClickEdit");   // Only Dev
        console.log(jobOrder);   // Only Dev
        setModalName('edit')
    }

    const onClickDelete = async (jobOrder: JobOrderInterface) => {
        const flag = await confirmationMessage("Do you really want to delete?")
        if (flag && jobOrder.id) {
            await deleteJobOrder(jobOrder.id);
            // fetchJobOrderList()
        }
    }

    // useEffect(() => {
    // }, [editJobOrder, modalName])
    const [sectorList, setSectorList] = useState<SectorInterface[]>([])
    const fetchSectorList = async () => {
        const data = await readSectorList();
        if (data) {
            setSectorList(data);
        }
    }

    const [companyList, setCompanyList] = useState<CompanyInterface[]>([])
    const fetchcomapanyList = async () => {
        const data = await readCompanyList();
        if (data) {
            setCompanyList(data);
        }
    }

    const [countryList, setCountryList] = useState<CountryInterface[]>([])
    const fetchCountryList = async () => {
        const data = await readCountryList();
        if (data) {
            setCountryList(data);
        }
    }

    // const [BDEList, setBDEList] = useState<CountryInterface[]>([])
    // const fetchCountryList = async () => {
    //     const data = await readCompanyList();
    //     if(data){
    //         setCompanyList(data);
    //     }
    // }

    // const fetchJobOrderList = async () => {
    //     const data = await readJobOrderList();
    //     console.log(data);
    //     setJobOrderList(data)
    // }

    const fetchAsignToOpMGRList = async () => {
        const data = await readAssignToOpsMgrList();
        console.log(data)
        setJobOrderList(data)
    }
    useEffect(() => {

        // fetchJobOrderList()
        fetchAsignToOpMGRList()
        fetchSectorList()
        fetchcomapanyList()
        fetchCountryList()

    }, [])



    return (

        <div>
            <CustomNavbarV3 pageName="Assign Operation Manager" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

            </CardHeader>


            {/*  jobOrder stable */}
            <JobOrderTable
                jobOrderList={dataFiltered}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
                companyList={companyList}
                countryList={countryList}
                sectorList={sectorList}
            />

            {/* <!-- Modal --> */}

            {/* Create */}
            {/* {modalName !== "create" ? "" :
                <CreateModal
                    onClose={() => setModalName("")}
                    fetchJobOrderList={fetchAsignToOpMGRList}
                    companyList={companyList}
                    countryList={countryList}
                    sectorList={sectorList}
                />} */}

            {/* Edit */}
            {modalName !== "edit" ? "" :
                <EditModal
                    currentElement={editJobOrder}
                    onClose={() => setModalName("")}
                    fetchJobOrderList={fetchAsignToOpMGRList}
                    companyList={companyList}
                    countryList={countryList}
                    sectorList={sectorList}
                />}
        </div>
    )
}