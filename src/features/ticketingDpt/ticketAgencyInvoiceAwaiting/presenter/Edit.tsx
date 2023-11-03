import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import {  readTicketAgencyInvoiceAwaitingList,  updateTicketAgencyInvoiceAwaitingList } from "../repository";
import ImmigrationTable from "./Table";
import { TicketAgencyInvoiceAwaitingInterface } from "../type";
import Pagination from "../../../../componenets/Pagination";

export default function Main(props: {
    onClose: any,
}) {
    
    const [ticketAgencyInvoiceAwaitingList, setTicketAgencyInvoiceAwaitingList] =
    useState<TicketAgencyInvoiceAwaitingInterface[]>([]);

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

    const fetchTicketAgencyInvoiceAwaitingList = async (page?: number) => {
        const data = await readTicketAgencyInvoiceAwaitingList({
            page: page ?? 1,
            status: "no",
        });
        setTicketAgencyInvoiceAwaitingList(data);
        setAdditionalData(await PaginationManager.getData());
    };
    useEffect(() => {
        fetchTicketAgencyInvoiceAwaitingList(additionalData.pagination.page);
    }, []);


    const onClickSubmit = async () => {
        const newArray = []

        for (let i = 0; i < ticketAgencyInvoiceAwaitingList.length; i++) {
            if (ticketAgencyInvoiceAwaitingList[i].checked) newArray.push(ticketAgencyInvoiceAwaitingList[i])
        }
        const update = await updateTicketAgencyInvoiceAwaitingList(newArray)
        if (update) {
            props.onClose();
            fetchTicketAgencyInvoiceAwaitingList()
        }
    }

    return (
        
        <FullScreenModal
            buttonName="submit"
            handleClick={onClickSubmit}
            title="Edit"
            onClose={props.onClose}
        >
            <div className="overflow-auto">
                <ImmigrationTable
                    snoBase={additionalData.pagination.sno_base}
                    ticketAgencyInvoiceAwaitingList={ticketAgencyInvoiceAwaitingList}
                    actionType="edit"
                    onChange={(list) => setTicketAgencyInvoiceAwaitingList(list)}
                />
                <Pagination
                    data={additionalData}
                    onPageChange={(e) => {
                        fetchTicketAgencyInvoiceAwaitingList(e);
                    }}
                />
            </div>
        </FullScreenModal>
    );
}
