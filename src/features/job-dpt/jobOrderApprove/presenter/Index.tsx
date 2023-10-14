import { useEffect, useState } from "react";
import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import JobOrderTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { JobOrderInterface } from "../type";
import { readJobOrderList } from "../repository";
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

    const fetchJobOrderList = async () => {
        const data = await readJobOrderList();
        console.log(data);
        setJobOrderList(data)
    }
    useEffect(() => {

        fetchJobOrderList()
        fetchSectorList()
        fetchcomapanyList()
        fetchCountryList()

    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Job Order Approve" searchFunction={(query) => setSearchQuery(query)} refresh={()=>{
                fetchJobOrderList()
            }}/>

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />


                {/* <GreenButton text={"Add +"} onClick={() => {
                    setModalName("create")
                }} /> */}
                {/* <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                        setModalName("create")
                    }}
                >
                    Add JobOrder +
                </Button> */}
                {/* <IconButton>
                    <Icon color="primary">refresh</Icon>
                </IconButton> */}
            </CardHeader>


            {/*  jobOrder stable */}
            <JobOrderTable
                jobOrderList={dataFiltered}
                onClickEdit={onClickEdit}
                companyList={companyList}
                countryList={countryList}
                sectorList={sectorList}
            />

            {/* <!-- Modal --> */}

          
          

            {/* Edit */}
            {modalName !== "edit" ? "" :
                <EditModal
                    currentElement={editJobOrder}
                    onClose={() => setModalName("")}
                    fetchJobOrderList={fetchJobOrderList}
                    companyList={companyList}
                    countryList={countryList}
                    sectorList={sectorList}
                />}
        </div>
    )
}