import TicketAgencyInvoiceTable from "./Table";
import { useState, useEffect } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { TicketAgencyInvoicesInterface } from "../type";
import {
  createTicketAgencyInvoices,
  readTicketAgencyInvoicesList,
} from "../repository";
import { GreenButton } from "../../../../componenets/CustomButton";
import { number } from "prop-types";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
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
  const [TicketAgencyInvoicesList, setTicketAgencyInvoicesList] = useState<
    TicketAgencyInvoicesInterface[]
  >([]);
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
    const data = await readTicketAgencyInvoicesList({
      page: page ?? additionalData.pagination.page,
      status: "yes",
    });
    if (data) {
      setTicketAgencyInvoicesList(data);
    }
    setAdditionalData(await PaginationManager.getData());
  }
  const onClickCreate = async (item: TicketAgencyInvoicesInterface[]) => {
    await createTicketAgencyInvoices(item);
  };

  useEffect(() => {
    fetchTicketProvidedByCompany(additionalData.pagination.page);
  }, []);

  return (
    <>
      <CustomNavbarV3
        pageName="Ticket Agency - Invoices"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => fetchTicketProvidedByCompany()}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>
      <TicketAgencyInvoiceTable
        snoBase={additionalData.pagination.sno_base}
        TicketAgencyInvoicesList={TicketAgencyInvoicesList}
        onChange={(value) => setTicketAgencyInvoicesList(value)}
      />

      <br />

      <GreenButton
        text="Submit"
        onClick={() => onClickCreate(TicketAgencyInvoicesList)}
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
