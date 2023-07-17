import { useEffect, useState } from "react";
import CreateModal from './Create'
import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import ConsolidateChargeTable from "./ConsolidateChargeTable";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { ConsolidateChargeInterface } from "../type";
import { deleteConsolidateCharge, readConsolidateChargeList } from "../repository";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {
    const [consolidateChargeList, setConsolidateChargeList] = useState<ConsolidateChargeInterface[]>([])

    const [editConsolidateCharge, setEditConsolidateCharge] = useState<ConsolidateChargeInterface>({} as ConsolidateChargeInterface)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")

    const filterData = (query: string, data: ConsolidateChargeInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.name.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, consolidateChargeList);

    const onClickCreate = () => {
        setModalName('create');

    }

    const onClickEdit = (consolidateCharge: ConsolidateChargeInterface) => {
        setEditConsolidateCharge(consolidateCharge)
        console.log("onClickEdit");   // Only Dev
        console.log(consolidateCharge);   // Only Dev
        setModalName('edit')
    }

    const onClickDelete = async (consolidateCharge: ConsolidateChargeInterface) => {
        const flag = await confirmationMessage("Do you really want to delete?")
        if (flag && consolidateCharge.id) {
            await deleteConsolidateCharge(consolidateCharge.id);
            fetchConsolidateChargeList()
        }
    }

    // useEffect(() => {
    // }, [editConsolidateCharge, modalName])

    const fetchConsolidateChargeList = async () => {
        setConsolidateChargeList(await readConsolidateChargeList(true))
    }
    useEffect(() => {

        fetchConsolidateChargeList()

    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Consolidate Charge" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>

                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

                <GreenButton text={"Add +"} onClick={() => {
                    setModalName("create")
                }} />

            </CardHeader>


            {/*  consolidateCharge stable */}
            <ConsolidateChargeTable
                consolidateChargeList={dataFiltered}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
            />

            {/* <!-- Modal --> */}

            {/* Create */}
            {modalName !== "create" ? "" : <CreateModal onClose={() => setModalName("")} fetchConsolidateChargeList={fetchConsolidateChargeList} />}

            {/* Edit */}
            {modalName !== "edit" ? "" : <EditModal consolidateCharge={editConsolidateCharge} onClose={() => setModalName("")} fetchConsolidateChargeList={fetchConsolidateChargeList}
            />}
        </div>
    )
}