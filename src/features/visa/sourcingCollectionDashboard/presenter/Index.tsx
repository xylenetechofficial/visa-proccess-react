import { useEffect, useState } from "react";
import CreateModal from './Create'
import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import IndexVisaTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { Src_Col_Dash_CandidateInterface, Src_Col_Dash_JobOrderInterface } from "../type";
import { readSourcingCollectionDashboardJobOrder } from "../repository";
import { SectorInterface } from "../../../masters/sector/type";
import { readSectorList } from "../../../masters/sector/repository";
import { readCompanyList } from "../../../masters/company/repository";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { readCountryList } from "../../../masters/country/repository";
import Table from "./Table";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));
const initValue: Src_Col_Dash_JobOrderInterface = {
    BackedOutUnfit: 0,
    company: "",
    division: "",
    docsBalanceForCollections: 0,
    docsCollectedQty: 0,
    jobOrderNo: "",
    quantityAsPerJob: 0,
    selectionQty: 0,

}
export default function Main() {
    const [JobOrderList, setJobOrderList] = useState<Src_Col_Dash_JobOrderInterface[]>([])
    const [currentElement, setCurrentElement] = useState<Src_Col_Dash_JobOrderInterface>(initValue)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")

    const filterData = (query: string, data: Src_Col_Dash_JobOrderInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.jobOrderNo.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, JobOrderList);

    const onClickCreate = () => {
        setModalName('create');

    }

    const onClickEdit = (ele: Src_Col_Dash_JobOrderInterface) => {
        setCurrentElement(ele)
        setModalName('edit');
    }

    const onClickAdd = async (ele: Src_Col_Dash_JobOrderInterface) => {
        setCurrentElement(ele);
        setModalName('add');
    }

    // useEffect(() => {
    // }, [editIndexVisa, modalName])



    const fetchSourcingCollectionDashboardJobOrder = async () => {
        const data = await readSourcingCollectionDashboardJobOrder();
        console.log(data);
        setJobOrderList(data)
    }
    useEffect(() => {

        fetchSourcingCollectionDashboardJobOrder()


    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Sourcing Collection Dashboard" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>


            {/*  indexVisa stable */}
            <Table
                jobOrderList={JobOrderList}
                onClickAdd={onClickAdd}
                onClickEdit={onClickEdit}

            />

            {/* <!-- Modal --> */}

            {/* Create */}
            {modalName !== "add" ? "" :
                <CreateModal
                    onClose={() => setModalName("")}
                    currentElement={currentElement}
                />}

            {/* Edit */}
            {modalName !== "edit" ? "" :
                <EditModal
                    currentElement={currentElement}
                    onClose={() => setModalName("")}

                />}
        </div>
    )
}