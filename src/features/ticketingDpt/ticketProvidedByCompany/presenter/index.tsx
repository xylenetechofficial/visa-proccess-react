import TicketProvidedByCompanyTable from "./Table";
import { useEffect, useState } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import {
  createTicketProvidedByCompany,
  readTicketProvidedByCompanyList,
} from "../repository";
import { TicketProvidedByCompanyInterface } from "../type";
import { readSectorList } from "../../../masters/sector/repository";
import { SectorInterface } from "../../../masters/sector/type";
import { GreenButton } from "../../../../componenets/CustomButton";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
export default function Main() {
  const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
  }));
  const [searchQuery, setSearchQuery] = useState("");

  const [TicketProvidedByCompanyList, setTicketProvidedByCompanyList] =
    useState<TicketProvidedByCompanyInterface[]>([]);
  const [TicketProvidedByCompanyData, setTicketProvidedByCompanyData] =
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

  async function fetchTicketProvidedByCompany(page?:number) {
    const data = await readTicketProvidedByCompanyList( {page: page ?? additionalData.pagination.page,
    status: "no",
  });
    if (data) {
      setTicketProvidedByCompanyList(data);
    }
    setAdditionalData(await PaginationManager.getData());
  }
  const onClickCreate = async (item: TicketProvidedByCompanyInterface[]) => {
    console.log(item);
    await createTicketProvidedByCompany(item);
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
      <CustomNavbarV3
        pageName="Ticket Provided by Company"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => fetchTicketProvidedByCompany()}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <TicketProvidedByCompanyTable
      snoBase={additionalData.pagination.sno_base}
        TicketProvidedByCompanyList={TicketProvidedByCompanyList}
        sectorList={sectorList}
        setTicketProvidedByCompanyData={setTicketProvidedByCompanyData}
        onChange={(value) => setTicketProvidedByCompanyList(value)}
      />
      <br />
      <GreenButton
        text="Submit"
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

    </>
  );
}
