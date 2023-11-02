import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import TicketReissueTable from "./Table";
import { FaFilter } from "react-icons/fa";
import { GreenButton } from "../../../../componenets/CustomButton";
import { TicketReIssueApprovedInterface } from "../type";
import {
  createTicketReIssueApprovedList,
  readTicketReIssueApprovedList,
} from "../repository";
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

  const [modalName, setModalName] = useState("");
  const [reIssueApprove, setReIssueApprove] = useState<
    TicketReIssueApprovedInterface[]
  >([] as TicketReIssueApprovedInterface[]);

  const [ticketReissueApproveList, setTicketReissueApproveList] = useState<
    TicketReIssueApprovedInterface[]
  >([] as TicketReIssueApprovedInterface[]);

  const fetchTicketissue = async (page?: number) => {
    const res: any = await readTicketReIssueApprovedList({
      page: page ?? additionalData.pagination.page,
      status: "yes",
    });
    if (res) {
      setTicketReissueApproveList(res);
    }
    setAdditionalData(await PaginationManager.getData());
  };

  useEffect(() => {
    fetchTicketissue(additionalData.pagination.page);
  }, []);

  const handleClick = async () => {
    const newarry = [];

    for (let i = 0; i < ticketReissueApproveList.length; i++) {
      const element = ticketReissueApproveList[i];

      if (element.is_select) {
        newarry.push(element);
      }
    }
    console.log(newarry); // Only Dev
    const res = await createTicketReIssueApprovedList(newarry);

    if (res) {
      fetchTicketissue();
    }
  };

  return (
    <>
      <CustomNavbarV3
        pageName="Ticket Reissue Approve"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => fetchTicketissue()}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <TicketReissueTable
        // onChange={(value:any)=>setReIssueApprove(value)}
        snoBase={additionalData.pagination.sno_base}
        setTicketReissueApproveList={(value) =>
          setTicketReissueApproveList(value)
        }
        ticketReissueApproveList={ticketReissueApproveList}
      />

      <div className="flex justify-end items-center mt-3">
        <GreenButton text="Submit" onClick={() => handleClick()} />
      </div>

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchTicketissue(e);
        }}
      />
    </>
  );
}
