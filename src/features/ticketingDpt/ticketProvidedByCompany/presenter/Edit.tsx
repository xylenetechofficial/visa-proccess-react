import TicketProvidedByCompanyTable from "./Table";
import { useEffect, useState } from "react";
import {
    readTicketProvidedByCompanyList,
    updateTicketProvidedByCompanyList,
} from "../repository";
import { TicketProvidedByCompanyInterface } from "../type";
import { readSectorList } from "../../../masters/sector/repository";
import { SectorInterface } from "../../../masters/sector/type";
import { GreenButton } from "../../../../componenets/CustomButton";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { FullScreenModal } from "../../../../componenets/Modal";
export default function Main(props: {
    onClose: () => void,
}) {
 

    const [TicketProvidedByCompanyList, setTicketProvidedByCompanyList] =
        useState<TicketProvidedByCompanyInterface[]>([]);

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

    async function fetchTicketProvidedByCompany(page?: number) {
        const data = await readTicketProvidedByCompanyList({
            page: page ?? additionalData.pagination.page,
            status: "yes",
        });
        if (data) {
            setTicketProvidedByCompanyList(data);
        }
        setAdditionalData(await PaginationManager.getData());
    }
    const onClickCreate = async (item: TicketProvidedByCompanyInterface[]) => {
        console.log(item);
        
        const newArray = []
        for (let i = 0; i < item.length; i++) {
            if (item[i].checked) newArray.push(item[i])
        }
        await updateTicketProvidedByCompanyList(newArray)
    };
    const [sectorList, setSectorList] = useState<SectorInterface[]>([]);
    const fetchSectorList = async () => {
        const data = await readSectorList();
        if (data) {
            setSectorList(data);
        }
    };

    useEffect(() => {
        fetchTicketProvidedByCompany(additionalData.pagination.page);
        fetchSectorList();
    }, []);

    return (
        <>

            <FullScreenModal
                handleClick={() => props.onClose()}
                title="Edit Ticket Provided By Company"
                onClose={() => props.onClose()}>

                <TicketProvidedByCompanyTable
                    snoBase={additionalData.pagination.sno_base}
                    TicketProvidedByCompanyList={TicketProvidedByCompanyList}
                    sectorList={sectorList}
                    onChange={(value) => setTicketProvidedByCompanyList(value)}
                />
                <br />
                <GreenButton
                    text="Update"
                    onClick={() => onClickCreate(TicketProvidedByCompanyList)}
                />

                <br />
                <Pagination
                    data={additionalData}
                    onPageChange={(e) => {
                        console.log(e); // Only Dev
                        fetchTicketProvidedByCompany(e);
                    }}
                />
            </FullScreenModal>
        </>
    );
}
