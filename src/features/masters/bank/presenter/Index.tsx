import { useEffect, useState } from "react";
import CreateModal from './Create'
import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import BankTable from "./BankTable";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { BankInterface } from "../type";
import { deleteBank, readBankList } from "../repository";
import { readVisaAuthorisationList } from "../../visaAuthorization/repository";
import { VisaAuthorisationInterface } from "../../visaAuthorization/type";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {
    const [bankList, setBankList] = useState<BankInterface[]>([])

    const [editBank, setEditBank] = useState<BankInterface>({} as BankInterface)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")

    const [visaAuthorisationList, setVisaAuthorisationList] = useState<VisaAuthorisationInterface[]>([])

    const fetchVisaAuthorisationList = async () => {
        setVisaAuthorisationList(await readVisaAuthorisationList())
    }

    useEffect(() => {
        fetchVisaAuthorisationList()

    }, [])


    const filterData = (query: string, data: BankInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.name.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, bankList);

    const onClickCreate = () => {
        setModalName('create');

    }

    const onClickEdit = (bank: BankInterface) => {
        setEditBank(bank)
        console.log("onClickEdit");   // Only Dev
        console.log(bank);   // Only Dev
        setModalName('edit')
    }

    const onClickDelete = async (bank: BankInterface) => {
        const flag = await confirmationMessage("Do you really want to delete?")
        if (flag && bank.id) {
            await deleteBank(bank.id);
            fetchBankList()
        }
    }

    // useEffect(() => {
    // }, [editBank, modalName])

    const fetchBankList = async () => {
        setBankList(await readBankList(true))
    }
    useEffect(() => {

        fetchBankList()

    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Bank" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>


                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />



                <GreenButton text={"Add +"} onClick={() => {
                    setModalName("create")
                }} />

            </CardHeader>


            {/*  bank stable */}
            <BankTable
                bankList={dataFiltered}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
                visaAuthorisationList={visaAuthorisationList}
            />

            {/* <!-- Modal --> */}

            {/* Create */}
            {modalName !== "create" ? "" : <CreateModal onClose={() => setModalName("")} fetchBankList={fetchBankList} visaAuthorisationList={visaAuthorisationList} />}

            {/* Edit */}
            {modalName !== "edit" ? "" : <EditModal bank={editBank} onClose={() => setModalName("")} fetchBankList={fetchBankList} visaAuthorisationList={visaAuthorisationList}
            />}
        </div>
    )
}