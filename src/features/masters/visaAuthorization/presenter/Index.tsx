import { useEffect, useState } from "react";
import CreateModal from './Create'
import EditModal from './Edit'
import { Box, Button, Icon, IconButton, TextField, styled } from "@mui/material";
import VisaAuthorisationTable from "./VisaAuthorisationTable";
import { confirmationMessage, showMessage } from "../../../../utils/alert";
import { Heading1, Heading3 } from "../../../../componenets/CoustomHeader";
import { GreenButton, YellowButton } from "../../../../componenets/CustomButton";
import { CustomButton, CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { VisaAuthorisationInterface } from "../type";
import { deleteVisaAuthorisation, readVisaAuthorisationList } from "../repository";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {
    const [visaAuthorisationList, setVisaAuthorisationList] = useState<VisaAuthorisationInterface[]>([])

    const [editVisaAuthorisation, setEditVisaAuthorisation] = useState<VisaAuthorisationInterface>({} as VisaAuthorisationInterface)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")

    const filterData = (query: string, data: VisaAuthorisationInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.name.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, visaAuthorisationList);

    const onClickCreate = () => {
        setModalName('create');

    }

    const onClickEdit = (visaAuthorisation: VisaAuthorisationInterface) => {
        setEditVisaAuthorisation(visaAuthorisation)
        console.log("onClickEdit");   // Only Dev
        console.log(visaAuthorisation);   // Only Dev
        setModalName('edit')
    }

    const onClickDelete = async (visaAuthorisation: VisaAuthorisationInterface) => {
        const flag = await confirmationMessage("Do you really want to delete?")
        if (flag && visaAuthorisation.id) {
            await deleteVisaAuthorisation(visaAuthorisation.id);
            fetchVisaAuthorisationList()
        }
    }

    // useEffect(() => {
    // }, [editVisaAuthorisation, modalName])

    const fetchVisaAuthorisationList = async () => {
        setVisaAuthorisationList(await readVisaAuthorisationList(true))
    }
    useEffect(() => {

        fetchVisaAuthorisationList()

    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Visa Authorisation" searchFunction={(query)=>setSearchQuery(query)} />

            <CardHeader>
                

                    <CustomButton2 buttonText="Add filter" icon={<FaFilter />}  />
                   

                <GreenButton text={"Add  +"} onClick={() => {
                    setModalName("create")
                }} />
              
            </CardHeader>


            {/*  visaAuthorisation stable */}
            <VisaAuthorisationTable
                visaAuthorisationList={dataFiltered}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
            />

            {/* <!-- Modal --> */}

            {/* Create */}
            {modalName !== "create" ? "" : <CreateModal onClose={() => setModalName("")} fetchVisaAuthorisationList={fetchVisaAuthorisationList} />}

            {/* Edit */}
            {modalName !== "edit" ? "" : <EditModal visaAuthorisation={editVisaAuthorisation} onClose={() => setModalName("")} fetchVisaAuthorisationList={fetchVisaAuthorisationList}
            />}
        </div>
    )
}