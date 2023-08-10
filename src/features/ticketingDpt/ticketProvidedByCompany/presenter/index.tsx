import TicketProvidedByCompanyTable from './Table'
import { useEffect, useState } from "react";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { createTicketProvidedByCompany, readTicketProvidedByCompanyList } from '../repository';
import { TicketProvidedByCompanyInterface } from '../type';
import { readSectorList } from '../../../masters/sector/repository';
import { SectorInterface } from '../../../masters/sector/type';
export default function Main() {

    const CardHeader = styled(Box)(() => ({
        display: "flex",
        flexWrap: "wrap",
        paddingRight: "24px",
        marginBottom: "18px",
        alignItems: "center",
        justifyContent: "space-between",
    }));
    const [searchQuery, setSearchQuery] = useState('');

    const [TicketProvidedByCompanyList, setTicketProvidedByCompanyList] = useState<TicketProvidedByCompanyInterface[]>([])
    async function fetchTicketProvidedByCompany() {
        const data = await readTicketProvidedByCompanyList();
        if (data) {
            setTicketProvidedByCompanyList(data)
        }

    }
    const onClickCreate = async (item: TicketProvidedByCompanyInterface) => {
        await createTicketProvidedByCompany(item)
    }
    const [sectorList, setSectorList] = useState<SectorInterface[]>([]);
    const fetchSectorList = async () => {
        const data = await readSectorList();
        if (data) {
            setSectorList(data);
        }
    };

    useEffect(() => {
        fetchTicketProvidedByCompany();
        fetchSectorList();
    }, [])


    return (

        <>
            <CustomNavbarV3
                pageName="Ticket Provided by Company"
                searchFunction={(query) => setSearchQuery(query)}
            />
            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>


            <TicketProvidedByCompanyTable
                TicketProvidedByCompanyList={TicketProvidedByCompanyList}
                sectorList={sectorList}
                onChange={(value) => setTicketProvidedByCompanyList(value)}
            />
        </>
    )
}