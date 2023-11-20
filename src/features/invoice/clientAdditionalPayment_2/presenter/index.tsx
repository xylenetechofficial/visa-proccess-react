import { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ClientAdditionalInvoicePaymentAddTable from "./Table";
import CreateModal from "./Create";
import EditModal from "./Edit";
import DeleteModal from "./Delete";
import AdjustModal from "./SuspenseAdjust";
import PaymentListModal from "./PaymentList";

import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { ClientAdditionalPaymentInterface } from '../type';
import { readClientAdditionalPaymentList } from '../repository';


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
    const [clientAdditionalPaymentList, setClientAdditionalPaymentList] = useState<ClientAdditionalPaymentInterface[]>([])
    const [clientAdditionalPayment, setClientAdditionalPayment] = useState<ClientAdditionalPaymentInterface>({} as ClientAdditionalPaymentInterface)


    const fetchClientAdditionalPaymentList = async () => {
        const data = await readClientAdditionalPaymentList();
        setClientAdditionalPaymentList(data)
    }

    useEffect(() => {
        fetchClientAdditionalPaymentList()
    }, [])

    return (
        <div className='h-screen'>

            <CustomNavbarV3 pageName="CLIENT  ADDITIONAL PAYMENT " searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>
            <ClientAdditionalInvoicePaymentAddTable
            
                clientAdditionalPaymentList={clientAdditionalPaymentList}
                onClickPaymentList={(value) => {
                    setClientAdditionalPayment(value)
                    setModal('payment_list')
                }}
                
                onClickAdjust={(value) => {
                    setClientAdditionalPayment(value)
                    setModal('adjust')
                }}
                
                onClickAdd={(value) => {
                    setClientAdditionalPayment(value)
                    setModal('add')
                }}

                onClickEdit={(value) => {
                    setClientAdditionalPayment(value)
                    setModal('edit')
                }}

                onClickDelete={(value) => {
                    setClientAdditionalPayment(value)
                    setModal('delete')
                }}
            />
            {
                modal === 'payment_list' ?
                    <PaymentListModal
                        onClose={() => setModal('')}
                        clientAdditionalPayment={clientAdditionalPayment}
                        fetchClientAdditionalInvoiceList={fetchClientAdditionalPaymentList}
                    />
                    : ''
            }
            {
                modal === 'adjust' ?
                    <AdjustModal
                        onClose={() => setModal('')}
                        clientAdditionalPayment={clientAdditionalPayment}
                        fetchClientAdditionalInvoiceList={fetchClientAdditionalPaymentList}
                    />
                    : ''
            }
            {
                modal === 'add' ?
                    <CreateModal
                        onClose={() => setModal('')}
                        clientAdditionalPayment={clientAdditionalPayment}
                        fetchClientAdditionalInvoiceList={fetchClientAdditionalPaymentList}
                    />
                    : ''
            }
            {
                modal === 'edit' ?
                    <EditModal
                        onClose={() => setModal('')}
                        clientAdditionalPayment={clientAdditionalPayment}
                        fetchClientAdditionalInvoiceList={fetchClientAdditionalPaymentList}
                    />
                    : ''
            }
            {
                modal === 'delete' ?
                    <DeleteModal
                        onClose={() => setModal('')}
                        clientAdditionalPayment={clientAdditionalPayment}
                        fetchClientAdditionalInvoiceList={fetchClientAdditionalPaymentList}
                    />
                    : ''
            }
        </div>

    );


}
