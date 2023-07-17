import { useEffect, useState } from "react";
import CreateModal from './Create'
import EditModal from './Edit'
import { Box, Button, Icon, IconButton, TextField, styled } from "@mui/material";
import OtherDocsTable from "./OtherDocsTable";
import { confirmationMessage, showMessage } from "../../../../utils/alert";
import { Heading1, Heading3 } from "../../../../componenets/CoustomHeader";
import { GreenButton, YellowButton } from "../../../../componenets/CustomButton";
import { CustomButton, CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { OtherDocsInterface } from "../type";
import { deleteOtherDocs, readOtherDocsList } from "../repository";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {
    const [otherDocsList, setOtherDocsList] = useState<OtherDocsInterface[]>([])

    const [editOtherDocs, setEditOtherDocs] = useState<OtherDocsInterface>({} as OtherDocsInterface)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")

    const filterData = (query: string, data: OtherDocsInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.name.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, otherDocsList);

    const onClickCreate = () => {
        setModalName('create');

    }

    const onClickEdit = (otherDocs: OtherDocsInterface) => {
        setEditOtherDocs(otherDocs)
        console.log("onClickEdit");   // Only Dev
        console.log(otherDocs);   // Only Dev
        setModalName('edit')
    }

    const onClickDelete = async (otherDocs: OtherDocsInterface) => {
        const flag = await confirmationMessage("Do you really want to delete?")
        if (flag && otherDocs.id) {
            await deleteOtherDocs(otherDocs.id);
            fetchOtherDocsList()
        }
    }

    // useEffect(() => {
    // }, [editOtherDocs, modalName])

    const fetchOtherDocsList = async () => {
        setOtherDocsList(await readOtherDocsList(true))
    }
    useEffect(() => {

        fetchOtherDocsList()

    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Other Docs" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

                <GreenButton text={"Add +"} onClick={() => {
                    setModalName("create")
                }} />

            </CardHeader>


            {/*  otherDocs stable */}
            <OtherDocsTable
                otherDocsList={dataFiltered}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
            />

            {/* <!-- Modal --> */}

            {/* Create */}
            {modalName !== "create" ? "" : <CreateModal onClose={() => setModalName("")} fetchOtherDocsList={fetchOtherDocsList} />}

            {/* Edit */}
            {modalName !== "edit" ? "" : <EditModal otherDocs={editOtherDocs} onClose={() => setModalName("")} fetchOtherDocsList={fetchOtherDocsList}
            />}
        </div>
    )
}