import { useState, useEffect } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { BlueButton, GreenButton } from "../../../../componenets/CustomButton";
import TicketAgencyInvoiceAwaitingTable from "./Table";
import { useUserAuth } from "../../../context/UserAuthContext";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import { TicketAgencyInvoiceAwaitingInterface } from "../type";
import { readTicketAgencyInvoiceAwaitingList } from "../repository";
import Pagination from "../../../../componenets/Pagination";
import CreateModal from './Add';
import EditModal from './Edit';

export default function Main() {
  const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
  }));

    const { authPermissionList } = useUserAuth()

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
  const [searchQuery, setSearchQuery] = useState("");
  
  const [modalName, setModalName] = useState("");

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
  return (
    <>
      <CustomNavbarV3
        pageName="Ticket Agency Invoice Awaiting"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
        <div>
        {authPermissionList.url_has('create') ? <GreenButton
            text={"Add"}
            onClick={() => {
              setModalName("Add");
            }}
          /> : ""}
          {authPermissionList.url_has('update') ? <BlueButton
            text={"Edit"}
            onClick={() => {
              setModalName("Edit");
            }}
          /> : ""}
        </div>
      </CardHeader>

      <TicketAgencyInvoiceAwaitingTable
       snoBase={additionalData.pagination.sno_base}
       ticketAgencyInvoiceAwaitingList={ticketAgencyInvoiceAwaitingList}
       actionType="read"
       onChange={(value) => setTicketAgencyInvoiceAwaitingList(value)}
      />
    
      <br />
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchTicketAgencyInvoiceAwaitingList(e);
        }}
      />


            {/* Create */}
            {modalName !== "Add" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => {
            setModalName("")
            fetchTicketAgencyInvoiceAwaitingList()
          }}
        />
      )}

      {/* Edit */}
      {modalName !== "Edit" ? (
        ""
      ) : (
        <EditModal
          onClose={() => {
            setModalName("")
            fetchTicketAgencyInvoiceAwaitingList()
          }}
        />
      )}
    </>
  );
}
