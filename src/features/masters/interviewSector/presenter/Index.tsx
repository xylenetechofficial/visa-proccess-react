import { useEffect, useState } from "react";
import CreateModal from './Create'
import EditModal from './Edit'
import { Box, Button, Icon, IconButton, TextField, styled } from "@mui/material";
import InterviewSectorTable from "./InterviewSectorTable";
import { confirmationMessage, showMessage } from "../../../../utils/alert";
import { Heading1, Heading3 } from "../../../../componenets/CoustomHeader";
import { GreenButton, YellowButton } from "../../../../componenets/CustomButton";
import { CustomButton, CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { InterviewSectorInterface } from "../type";
import { deleteInterviewSector, readInterviewSectorList } from "../repository";
import Pagination from "../../../../componenets/Pagination";
import { AdditionalDataInterface } from "../../../../utils/api_helper";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {
    const [interviewSectorList, setInterviewSectorList] = useState<InterviewSectorInterface[]>([])
    const [additionalData, setAdditionalData] = useState<AdditionalDataInterface>(
        {
          pagination: {
            page: 1,
            page_count: 1,
            item_count: 0,
            sno_base: 0,
          },
        }
      );


    const [editInterviewSector, setEditInterviewSector] = useState<InterviewSectorInterface>({} as InterviewSectorInterface)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")

    const filterData = (query: string, data: InterviewSectorInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.name.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, interviewSectorList);

    const onClickCreate = () => {
        setModalName('create');

    }

    const onClickEdit = (interviewSector: InterviewSectorInterface) => {
        setEditInterviewSector(interviewSector)
        console.log("onClickEdit");   // Only Dev
        console.log(interviewSector);   // Only Dev
        setModalName('edit')
    }

    const onClickDelete = async (interviewSector: InterviewSectorInterface) => {
        const flag = await confirmationMessage("Do you really want to delete?")
        if (flag && interviewSector.id) {
            await deleteInterviewSector(interviewSector.id);
            fetchInterviewSectorList()
        }
    }

    // useEffect(() => {
    // }, [editInterviewSector, modalName])

    const fetchInterviewSectorList = async (page?:number) => {
        const res = await readInterviewSectorList(true , page)
        setInterviewSectorList(res.data)
        setAdditionalData(res.additional_data)
    }
    useEffect(() => {

        fetchInterviewSectorList()

    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Interview Sector" searchFunction={(query)=>setSearchQuery(query)} />

            <CardHeader>
                
                    <CustomButton2 buttonText="Add filter" icon={<FaFilter />}  />
                   

                
                <GreenButton text={"Add +"} onClick={() => {
                    setModalName("create")
                }} />
               
            </CardHeader>


            {/*  interviewSector stable */}
            <InterviewSectorTable
            snoBase={additionalData.pagination.sno_base}
                interviewSectorList={dataFiltered}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
            />

            
<Pagination
        data={additionalData}
        onPageChange={(e) => {
            fetchInterviewSectorList(e);
        }}
      />
            {/* <!-- Modal --> */}

            {/* Create */}
            {modalName !== "create" ? "" : <CreateModal onClose={() => setModalName("")} fetchInterviewSectorList={fetchInterviewSectorList} />}

            {/* Edit */}
            {modalName !== "edit" ? "" : <EditModal interviewSector={editInterviewSector} onClose={() => setModalName("")} fetchInterviewSectorList={fetchInterviewSectorList}
            />}
        </div>
    )
}