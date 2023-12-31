import { useEffect, useState } from "react";
import EditModal from './Edit'
import EditModal_2 from './Edit_2'
import { Box, styled } from "@mui/material";
import JobOrderTable from "./Table";
// import { confirmationMessage } from "../../../../utils/alert";
// import { GreenButton } from "../../../../componenets/CustomButton";
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
import { InterviewSectorInterface } from "../../../masters/interviewSector/type";
import { readInterviewSectorList } from "../../../masters/interviewSector/repository";
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
    // const [actualProfesion, setActualProfesion] = useState<JobOrderInterface>({} as JobOrderInterface)

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

    const onClickEdit_2 = () => {
        setModalName('edit-2');

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


    const [interviewSectorList, setInterviewSectorList] = useState<InterviewSectorInterface[]>([]);
    const fetchInterviewSectorList = async () => {
        const data = await readInterviewSectorList();
        setInterviewSectorList(data)
    }
    useEffect(() => {
        fetchInterviewSectorList()
        fetchJobOrderList()
        fetchSectorList()
        fetchcomapanyList()
        fetchCountryList()

    }, [])


    useEffect(() => {
        console.log("=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#");   // Only Dev
        console.log(editJobOrder);   // Only Dev
    }, [editJobOrder])

    return (

        <div >
            <CustomNavbarV3 pageName="Vacancy" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
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
                    setCurrentElement={(e: JobOrderInterface) => setEditJobOrder(e)}
                    onClose={(val:string) => setModalName(val)}
                    fetchJobOrderList={fetchJobOrderList}
                    companyList={companyList}
                    countryList={countryList}
                    sectorList={sectorList}
                    interviewSectorList={interviewSectorList}
                />}

            {/* Edit 2 */}
            {modalName !== "edit-2" ? "" :
                <EditModal_2
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