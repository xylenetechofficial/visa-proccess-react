import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import TicketReissueTable from "./Table";
import { FaFilter } from "react-icons/fa";
import EditModal from "./Edit";
import { readTicketIssueList } from "../repository";
import { TicketIssueInterface } from "../type";
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

  const [modalName, setModalName] = useState("");

  const [reIssue, setReIssue] = useState<TicketIssueInterface>(
    {} as TicketIssueInterface
  );

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

  const onClickEdit = (reissue: any) => {
    setReIssue(reissue);
    console.log("onClickEdit"); // Only Dev
    console.log(reissue); // Only Dev
    setModalName("edit");
  };
  const [ticketIssueList, setTicketIssueList] = useState<
    TicketIssueInterface[]
  >([]);
  const fetchTicketissue = async (page?: number) => {
    const res: any = await readTicketIssueList({
      page: page ?? additionalData.pagination.page,
      status: "yes",
    });
    if (res) {
      setTicketIssueList(res);
    }

    setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetchTicketissue(additionalData.pagination.page);
  }, []);

  return (
    <>
      <CustomNavbarV3
        pageName="Ticket Reissue"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => fetchTicketissue()}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <TicketReissueTable
        snoBase={additionalData.pagination.sno_base}
        onClickEdit={onClickEdit}
        ticketIssueList={ticketIssueList}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchTicketissue(e);
        }}
      />

      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          reIssue={reIssue}
          setReIssue={setReIssue}
          onClose={() => {
            setModalName("");
            fetchTicketissue();
          }}
        />
      )}

      {/* <GreenButton text='Submit'  /> */}
    </>
  );
}
