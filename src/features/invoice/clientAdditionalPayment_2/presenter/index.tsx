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
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { AgentInterface } from "../../../masters/agent/type";

export default function Main() {


    const [agentList, setAgentList] = useState<AgentInterface[]>([]);
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
  
    const [editAgent, setEditAgent] = useState<AgentInterface>(
      {} as AgentInterface
    );
  
  
    const [searchQuery, setSearchQuery] = useState("");
    const filterData = (query: string, data: AgentInterface[]) => {
      if (!query) {
        return data;
      } else {
        return data.filter((d) =>
          d.name.toLowerCase().includes(query.toLowerCase())
        );
      }
    };
    const dataFiltered = filterData(searchQuery, agentList);

    const CardHeader = styled(Box)(() => ({
        display: "flex",
        flexWrap: "wrap",
        paddingRight: "24px",
        marginBottom: "18px",
        alignItems: "center",
        justifyContent: "space-between",
    }));
    
    const [modal, setModal] = useState("");
    const [clientAdditionalPaymentList, setClientAdditionalPaymentList] = useState<ClientAdditionalPaymentInterface[]>([])
    const [clientAdditionalPayment, setClientAdditionalPayment] = useState<ClientAdditionalPaymentInterface>({} as ClientAdditionalPaymentInterface)


    const fetchClientAdditionalPaymentList = async (page?: number) => {
        const data = await readClientAdditionalPaymentList({page:page ?? additionalData.pagination.page});
        filterData("", agentList);
        setClientAdditionalPaymentList(data);
        
        setAdditionalData(await PaginationManager.getData());
    }

    useEffect(() => {
        fetchClientAdditionalPaymentList(additionalData.pagination.page)
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


<Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchClientAdditionalPaymentList(e);
        }}
      />
        </div>

    );


}
