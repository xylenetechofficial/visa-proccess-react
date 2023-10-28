import { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ClientPaymentListPaymentAddTable from "./Table";
import CreateModal from "./Create";
import EditModal from "./Edit";
import DeleteModal from "./Delete";
import AdjustModal from "./SuspenseAdjust";
import PaymentListModal from "./PaymentList";
import CandidateListModal from "./CandidateList";

import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { ClientPaymentInterface } from '../type';
import { readClientPaymentList } from '../repository';


export default function Main() {

    const CardHeader = styled(Box)(() => ({
        display: "flex",
        flexWrap: "wrap",
        paddingRight: "24px",
        marginBottom: "18px",
        alignItems: "center",
        justifyContent: "space-between",
    }));
    const [searchQuery, setSearchQuery] = useState("")
    const [modal, setModal] = useState("");
    const [ClientPaymentList, setClientPaymentList] = useState<ClientPaymentInterface[]>([])
    const [ClientPayment, setClientPayment] = useState<ClientPaymentInterface>({} as ClientPaymentInterface)


    const fetchClientPaymentList = async () => {
        const data = await readClientPaymentList();
        setClientPaymentList(data)
    }

    useEffect(() => {
        fetchClientPaymentList()
    }, [])

    return (
        <div className='h-screen'>

            <CustomNavbarV3 pageName="CLIENT   PAYMENT "
                refresh={() => fetchClientPaymentList()}
                searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>
            <ClientPaymentListPaymentAddTable
                ClientPaymentList={ClientPaymentList}

                onClickCandidateList={(value) => {
                    setClientPayment(value)
                    setModal('candidate_list')
                }}

                onClickPaymentList={(value) => {
                    setClientPayment(value)
                    setModal('payment_list')
                }}

                onClickAdjust={(value) => {
                    setClientPayment(value)
                    setModal('adjust')
                }}

                onClickAdd={(value) => {
                    setClientPayment(value)
                    setModal('add')
                }}

                onClickEdit={(value) => {
                    setClientPayment(value)
                    setModal('edit')
                }}

                onClickDelete={(value) => {
                    setClientPayment(value)
                    setModal('delete')
                }}
            />
            {
                modal === 'candidate_list' ?
                    <CandidateListModal
                        onClose={() => setModal('')}
                        ClientPayment={ClientPayment}
                        fetchClientPaymentList={fetchClientPaymentList}
                    />
                    : ''
            }
            {
                modal === 'payment_list' ?
                    <PaymentListModal
                        onClose={() => setModal('')}
                        ClientPayment={ClientPayment}
                        fetchClientPaymentList={fetchClientPaymentList}
                    />
                    : ''
            }
            {
                modal === 'adjust' ?
                    <AdjustModal
                        onClose={() => setModal('')}
                        ClientPayment={ClientPayment}
                        fetchClientPaymentList={fetchClientPaymentList}
                    />
                    : ''
            }
            {
                modal === 'add' ?
                    <CreateModal
                        onClose={() => setModal('')}
                        ClientPayment={ClientPayment}
                        fetchClientPaymentList={fetchClientPaymentList}
                    />
                    : ''
            }
            {
                modal === 'edit' ?
                    <EditModal
                        onClose={() => setModal('')}
                        ClientPayment={ClientPayment}
                        fetchClientPaymentList={fetchClientPaymentList}
                    />
                    : ''
            }
            {
                modal === 'delete' ?
                    <DeleteModal
                        onClose={() => setModal('')}
                        ClientPayment={ClientPayment}
                        fetchClientPaymentList={fetchClientPaymentList}
                    />
                    : ''
            }
        </div>

    );


}
