import { useEffect, useState } from "react";
import CreateModal from './Create'
import EditModal from './Edit'
import { Box,  styled } from "@mui/material";
import MofaPaymentTable from "./MofaPaymentTable";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {  CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { MofaPaymentInterface } from "../type";
import { deleteMofaPayment, readMofaPaymentList } from "../repository";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {
    const [mofaPaymentList, setMofaPaymentList] = useState<MofaPaymentInterface[]>([])

    const [editMofaPayment, setEditMofaPayment] = useState<MofaPaymentInterface>({} as MofaPaymentInterface)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")

    const filterData = (query: string, data: MofaPaymentInterface[]) => {
        return data;
        if (!query) {
            return data;
        } else {
            // return data.filter((d) =>
            //     d.name.toLowerCase().includes(query.toLowerCase())
            // );
        }
    };
    const dataFiltered = filterData(searchQuery, mofaPaymentList);

    const onClickCreate = () => {
        setModalName('create');

    }

    const onClickEdit = (mofaPayment: MofaPaymentInterface) => {
        setEditMofaPayment(mofaPayment)
        console.log("onClickEdit");   // Only Dev
        console.log(mofaPayment);   // Only Dev
        setModalName('edit')
    }

    const onClickDelete = async (mofaPayment: MofaPaymentInterface) => {
        const flag = await confirmationMessage("Do you really want to delete?")
        if (flag && mofaPayment.id) {
            await deleteMofaPayment(mofaPayment.id);
            fetchMofaPaymentList()
        }
    }

    // useEffect(() => {
    // }, [editMofaPayment, modalName])

    const fetchMofaPaymentList = async () => {
        setMofaPaymentList(await readMofaPaymentList(true))
    }
    useEffect(() => {

        fetchMofaPaymentList()

    }, [])


    return (

        <div >
            <CustomNavbarV3 pageName="Mofa Payment" searchFunction={(query) => setSearchQuery(query)} />

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
                    Add MofaPayment +
                </Button> */}
                {/* <IconButton>
                    <Icon color="primary">refresh</Icon>
                </IconButton> */}
            </CardHeader>


            {/*  mofaPayment stable */}
            <MofaPaymentTable
                mofaPaymentList={dataFiltered}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
            />

            {/* <!-- Modal --> */}

            {/* Create */}
            {modalName !== "create" ? "" : <CreateModal onClose={() => setModalName("")} fetchMofaPaymentList={fetchMofaPaymentList} />}

            {/* Edit */}
            {modalName !== "edit" ? "" : <EditModal mofaPayment={editMofaPayment} onClose={() => setModalName("")} fetchMofaPaymentList={fetchMofaPaymentList}
            />}
        </div>
    )
}