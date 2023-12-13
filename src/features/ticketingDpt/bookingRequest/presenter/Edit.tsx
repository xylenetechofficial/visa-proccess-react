import { useState, useEffect } from "react";
import BookingTable from "./Table";
import { BookingRequestInterface } from "../type";
import {
    readTicketBookingRequestList,
    updateTicketBookingRequestList,
} from "../repository";
import { GreenButton } from "../../../../componenets/CustomButton";
import { SectorInterface } from "../../../masters/sector/type";
import { readSectorList } from "../../../masters/sector/repository";
import {
    AdditionalDataInterface,
    PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { FullScreenModal } from "../../../../componenets/Modal";
export default function Main(props: {
    onClose: () => void,
}) {


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

    const [ticketBookingRequestList, setTicketBookingRequestList] = useState<
        BookingRequestInterface[]
    >([]);
    async function fetchTicketBookingRequest(page?: number) {
        const data = await readTicketBookingRequestList({
            page: page ?? additionalData.pagination.page,
            status: "yes",
        }
        );
        if (data) {
            setTicketBookingRequestList(data);
        }
        // setAdditionalData(await PaginationManager.getData());
    }
    const onClickUpdate = async (item: BookingRequestInterface[]) => {
        const new_data: BookingRequestInterface[] = [];
        for (let i = 0; i < item.length; i++) {
            const element = item[i];
            // console.log(item);   // Only Dev
            // console.log(element);   // Only Dev
            if (element.check == "Yes") new_data.push(element);
        }

        // await createTicketBookingRequest(new_data);
        await updateTicketBookingRequestList(new_data)
        fetchTicketBookingRequest();
    };
    const [sectorList, setSectorList] = useState<SectorInterface[]>([]);
    const fetchSectorList = async () => {
        const data = await readSectorList();
        if (data) {
            setSectorList(data);
        }
    };

    useEffect(() => {
        fetchTicketBookingRequest(additionalData.pagination.page);
        fetchSectorList();
    }, []);

    return (
        <>
            <FullScreenModal
                handleClick={() => props.onClose()}
                title="Edit Ticket Booking Request"
                onClose={() => props.onClose()}>


                <BookingTable
                    snoBase={additionalData.pagination.sno_base}
                    ticketBookingRequestList={ticketBookingRequestList}
                    sectorList={sectorList}
                    onChange={(value) => setTicketBookingRequestList(value)}
                />
                <br />
                <GreenButton
                    text="Update"
                    onClick={() => onClickUpdate(ticketBookingRequestList)}
                />

                <br />
                <Pagination
                    data={additionalData}
                    onPageChange={(e) => {
                        console.log(e); // Only Dev
                        fetchTicketBookingRequest(e);
                    }}
                />
            </FullScreenModal>
        </>
    );
}
