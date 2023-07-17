import { useEffect, useState } from "react";
// import CreateModal from './Create'
// import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import DeployCandidateTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { DeployCandidatesInterface,  } from "../type";
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

    // const [editBlockVisa, setEditBlockVisa] = useState<BlockVisaInterface>({} as BlockVisaInterface)

    // const [modalName, setModalName] = useState('')

    // const onClickCreate = () => {
    //     setModalName('create');

    // }

    // const onClickEdit = (blockVisa: BlockVisaInterface) => {
    //     setEditBlockVisa(blockVisa)
    //     console.log("onClickEdit");   // Only Dev
    //     console.log(blockVisa);   // Only Dev
    //     setModalName('edit')
    // }

    // const onClickDelete = async (blockVisa: BlockVisaInterface) => {
    //     const flag = await confirmationMessage("Do you really want to delete?")
    //     if (flag && blockVisa.id) {
    //         await deleteBlockVisa(blockVisa.id);
    //         fetchBlockVisaList()
    //     }
    // }

    // useEffect(() => {
    // }, [editBlockVisa, modalName])
    // const [sectorList, setSectorList] = useState<SectorInterface[]>([])
    // const fetchSectorList = async () => {
    //     const data = await readSectorList();
    //     if (data) {
    //         setSectorList(data);
    //     }
    // }

    // const [companyList, setCompanyList] = useState<CompanyInterface[]>([])
    // const fetchcomapanyList = async () => {
    //     const data = await readCompanyList();
    //     if (data) {
    //         setCompanyList(data);
    //     }
    // }

    // const [countryList, setCountryList] = useState<CountryInterface[]>([])
    // const fetchCountryList = async () => {
    //     const data = await readCountryList();
    //     if (data) {
    //         setCountryList(data);
    //     }
    // }

    // const [BDEList, setBDEList] = useState<CountryInterface[]>([])
    // const fetchCountryList = async () => {
    //     const data = await readCompanyList();
    //     if(data){
    //         setCompanyList(data);
    //     }
    // }
    const [deployCandidateList, setdeployCandidateList] = useState<DeployCandidatesInterface[]>([
        {party_code:13650,
        company_name:"JOY THOMAS ELECTRO-MECHANICAL ENGINEERING (ABU DHABI-UAE)",
        candidate_name:"MRITYUNJOY MUDI",
        pp_no:"L7842668",
        actual_profession:"HVAC TECHNICIANS",
        visa_profession:"TOURS REPRESENTATIVE",
        agent:"DIRECT",
        rc_name:"SHOEB2",
        air_line:"UK",
        pnr_no:"SRDMSQ",
        departure_date:"26 MAY 2023",
        amount:10700,
        deployed:"",

        }
    ])

    const [searchQuery, setSearchQuery] = useState("")

    // const filterData = (query: string, data: BlockVisaInterface[]) => {
    //     if (!query) {
    //         return data;
    //     } else {
    //         return data.filter((d) =>
    //             d.index_date.toLowerCase().includes(query.toLowerCase())
    //         );
    //     }
    // };
    // const dataFiltered = filterData(searchQuery, blockVisaList);

    // const [visaprofession, setVisaProfessionList] = useState<VisaProfesionInterface[]>([])

    // const fetchBlockVisaList = async () => {
    //     const data = await readBlockVisaList();
    //     console.log(data);
    //     if(data){
    //         setBlockVisaList(data);

    //     }
    //     setBlockVisaList(data)

    // }
    useEffect(() => {

        // fetchBlockVisaList()
        // fetchSectorList()
        // fetchcomapanyList()
        // fetchCountryList()

    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Deploy Candidates" searchFunction={(query) => setSearchQuery(query)} />

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
                    Add BlockVisa +
                </Button> */}
                {/* <IconButton>
                    <Icon color="primary">refresh</Icon>
                </IconButton> */}
            </CardHeader>


            {/*  blockVisa stable */}
            <DeployCandidateTable
                deployCandidateList={deployCandidateList}
                // onClickEdit={onClickEdit}
                // onClickDelete={onClickDelete}
                // companyList={companyList}
                // countryList={countryList}
                // sectorList={sectorList}
            />

            {/* <!-- Modal --> */}

            {/* Create */}
            {/* {modalName !== "create" ? "" :
                <CreateModal
                    onClose={() => setModalName("")}
                    fetchBlockVisaList={fetchBlockVisaList}
                    companyList={companyList}
                    countryList={countryList}
                    sectorList={sectorList}
                />} */}

            {/* Edit */}
            {/* {modalName !== "edit" ? "" :
                <EditModal
                    currentElement={editBlockVisa}
                    onClose={() => setModalName("")}
                    fetchBlockVisaList={fetchBlockVisaList}
                    companyList={companyList}
                    countryList={countryList}
                    sectorList={sectorList}
                />} */}
        </div>
    )
}