import { useEffect, useState } from "react";
import CreateModal from './Create'
import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import MofaEntryTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { MofaEntryInterface, MofaPaymentInterface } from "../type";
import { deleteMofaEntry, readMofaEntryList, readMofaPaymentList } from "../repository";
import { SectorInterface } from "../../../masters/sector/type";
import { readSectorList } from "../../../masters/sector/repository";
import { readCompanyList } from "../../../masters/company/repository";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { readCountryList } from "../../../masters/country/repository";
import MofaPaymentTable from "./MofaPaymentTable";
import { Heading2, Heading6 } from "../../../../componenets/CoustomHeader";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {
    
    const [mofaEntryList, setMofaEntryList] = useState<MofaEntryInterface[]>([])
    const [mofaPaymentList, setMofaPaymentList] = useState<MofaPaymentInterface[]>([])

    const [editMofaEntry, setEditMofaEntry] = useState<MofaEntryInterface>({} as MofaEntryInterface)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")

    const filterData = (query: string, data: MofaEntryInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.name.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, mofaEntryList);



    const onClickEdit = (mofaEntry: MofaEntryInterface) => {
        setEditMofaEntry(mofaEntry)
        console.log("onClickEdit");   // Only Dev
        console.log(mofaEntry);   // Only Dev
        setModalName('edit')
    }

    const onClickDelete = async (mofaEntry: MofaEntryInterface) => {
        const flag = await confirmationMessage("Do you really want to delete?")
        if (flag && mofaEntry.id) {
            await deleteMofaEntry(mofaEntry.id);
            fetchMofaEntryList()
        }
    }

    // useEffect(() => {
    // }, [editMofaEntry, modalName])
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



    const fetchMofaEntryList = async () => {
        const data = await readMofaEntryList({});
        console.log(data);
        setMofaEntryList(data)
    }


    const fetchMofaPaymentList = async () => {
        const data = await readMofaPaymentList();
        // console.log(data);
        setMofaPaymentList(data)
    }
    useEffect(() => {

        fetchMofaEntryList()
        fetchMofaPaymentList()
        fetchSectorList()
        fetchcomapanyList()
        fetchCountryList()

    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="MofaEntry" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />


                <GreenButton text={"Add +"} onClick={() => {
                    setModalName("create")
                }} />
                {/* <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                        setModalName("create")
                    }}
                >
                    Add MofaEntry +
                </Button> */}
                {/* <IconButton>
                    <Icon color="primary">refresh</Icon>
                </IconButton> */}
            </CardHeader>


            {/*  mofa payment stable */}
            <Heading6 text="Visa Authorisation"/>
            <MofaPaymentTable mofaPaymentList={mofaPaymentList}/>
            {/*  mofaEntry stable */}
            <div className="mt-6"></div>
            <Heading6 text="Mofa entry"/>
            <MofaEntryTable
                mofaEntryList={dataFiltered}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
                companyList={companyList}
                countryList={countryList}
                sectorList={sectorList}
            />

            {/* <!-- Modal --> */}

            {/* Create */}
            {modalName !== "create" ? "" :
                <CreateModal
                    onClose={() => {
                        setModalName("")
                        fetchMofaEntryList()
                        fetchMofaPaymentList()
                    }

                    }
                    fetchMofaEntryList={fetchMofaEntryList}
                    companyList={companyList}
                    countryList={countryList}
                    sectorList={sectorList}
                />}

            {/* Edit */}
            {modalName !== "edit" ? "" :
                <EditModal
                    currentElement={editMofaEntry}
                    onClose={() => setModalName("")}
                    fetchMofaEntryList={fetchMofaEntryList}
                    companyList={companyList}
                    countryList={countryList}
                    sectorList={sectorList}
                />}
        </div>
    )
}