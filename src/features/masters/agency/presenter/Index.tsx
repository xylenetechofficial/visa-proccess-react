import { useEffect, useState } from "react";
import CreateModal from './Create'
import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import AgencyTable from "./AgencyTable";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { AgencyInterface } from "../type";
import { deleteAgency, readAgencyList } from "../repository";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {
    const [agencyList, setAgencyList] = useState<AgencyInterface[]>([])

    const [editAgency, setEditAgency] = useState<AgencyInterface>({} as AgencyInterface)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")


    const [dataFiltered, setDataFiltered] = useState<AgencyInterface[]>([])
    const filterData = (query: string, data: AgencyInterface[]) => {
        if (!query) {
            setDataFiltered(data)
            return;
        } else {
            const d = data.filter((d) =>
                d.name.toLowerCase().includes(query.toLowerCase())
            );
            setDataFiltered(d);
            return;
        }
    };

    const searchFunction = async (query: string) => {
        filterData(query, agencyList)

    }




    const onClickEdit = (agency: AgencyInterface) => {
        setEditAgency(agency)
        console.log("onClickEdit");   // Only Dev
        console.log(agency);   // Only Dev
        setModalName('edit')
    }

    const onClickDelete = async (agency: AgencyInterface) => {
        const flag = await confirmationMessage("Do you really want to delete?")
        if (flag && agency.id) {
            await deleteAgency(agency.id);
            fetchAgencyList()
        }
    }

    // useEffect(() => {
    // }, [editAgency, modalName])

    const fetchAgencyList = async () => {
        const data = await readAgencyList(true)
        setAgencyList(data)
        filterData("", data)
    }

    useEffect(() => {

        fetchAgencyList()

    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Agency" searchFunction={searchFunction} />
            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

                {/* Add */}
                <GreenButton text={"Add +"} onClick={() => {
                    setModalName("create")
                }} />

            </CardHeader>


            {/*  agency stable */}
            <AgencyTable
                agencyList={dataFiltered}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
            />

            {/* <!-- Modal --> */}

            {/* Create */}
            {modalName !== "create" ? "" : <CreateModal onClose={() => setModalName("")} fetchAgencyList={fetchAgencyList} />}

            {/* Edit */}
            {modalName !== "edit" ? "" : <EditModal agency={editAgency} onClose={() => setModalName("")} fetchAgencyList={fetchAgencyList}
            />}
        </div>
    )
}