import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { Box, styled } from "@mui/material";
import TicketIssueTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { TicketIssueInterface } from "../type";
import { deleteTicketIssue, readTicketIssueList } from "../repository";
import { readCompanyList } from "../../../masters/company/repository";
import { CompanyInterface } from "../../../masters/company/type";
import { InterviewSchedulePeriodInterface } from "../../interviewSchedulePeriod/type";
import { readInterviewSchedulePeriodList } from "../../interviewSchedulePeriod/repository";
import { SectorInterface } from "../../../masters/sector/type";
import { readSectorList } from "../../../masters/sector/repository";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { useUserAuth } from "../../../context/UserAuthContext";
const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
  const { authPermissionList } = useUserAuth();
  const [ticketIssueList, setTicketIssueList] = useState<
    TicketIssueInterface[]
  >([]);

  const [editTicketIssue, setEditTicketIssue] = useState<TicketIssueInterface>(
    {} as TicketIssueInterface
  );

  const [modalName, setModalName] = useState("");

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

  // const filterData = (query: string, data: TicketIssueInterface[]) => {
  //   if (!query) {
  //     return data;
  //   } else {
  //     return data.filter((d) =>
  //       d..toLowerCase().includes(query.toLowerCase())
  //     );
  //   }
  // };
  // const dataFiltered = filterData(searchQuery, ticketIssueList);

  const onClickEdit = (interviewSchedule: TicketIssueInterface) => {
    setEditTicketIssue(interviewSchedule);
    // console.log("onClickEdit"); // Only Dev
    // console.log(interviewSchedule); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (interviewSchedule: TicketIssueInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && interviewSchedule.id) {
      await deleteTicketIssue(interviewSchedule.id);
      fetchTicketIssueList();
    }
  };

  // useEffect(() => {
  // }, [editTicketIssue, modalName])

  const fetchTicketIssueList = async (page?: number) => {
    const data = await readTicketIssueList({
      page: page ?? additionalData.pagination.page,
      status: "yes",
    });
    setTicketIssueList(data);
    // filterData("", data);
    setAdditionalData(await PaginationManager.getData());
  };
  const [companyList, setCompanyList] = useState<CompanyInterface[]>([]);

  const fetchCompanyList = async () => {
    const data = await readCompanyList();
    setCompanyList(data);
  };

  const [interviewschedulePeriodList, setInterviewschedulePeriodList] =
    useState<InterviewSchedulePeriodInterface[]>([]);
  const fetchTicketIssuePeriodList = async () => {
    const data = await readInterviewSchedulePeriodList();
    setInterviewschedulePeriodList(data);
  };

  const [sectorList, setSectorList] = useState<SectorInterface[]>([]);

  const fetchSectorList = async () => {
    const data = await readSectorList();
    setSectorList(data);
  };
  useEffect(() => {
    fetchTicketIssuePeriodList();
    fetchTicketIssueList(additionalData.pagination.page);
    fetchCompanyList();
    fetchSectorList();
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Ticket Issue"
        searchFunction={(value) => setSearchQuery(value)}
        refresh={() => fetchTicketIssueList()}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

        {/* Add */}
        {authPermissionList.url_has("create") ? (
          <GreenButton
            text={"Add +"}
            onClick={() => {
              setModalName("create");
            }}
          />
        ) : (
          ""
        )}
      </CardHeader>

      {/*  interviewSchedule stable */}
      <TicketIssueTable
        snoBase={additionalData.pagination.sno_base}
        companyList={companyList}
        interviewScheduleList={ticketIssueList}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        InterviewSchedulePeriodList={interviewschedulePeriodList}
        sectorList={sectorList}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchTicketIssueList(e);
        }}
      />
      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal
          companyList={companyList}
          onClose={() => setModalName("")}
          fetchTicketIssueList={fetchTicketIssueList}
          interviewSchedulePeriodList={interviewschedulePeriodList}
          sectorList={sectorList}
        />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          companyList={companyList}
          currentElement={editTicketIssue}
          onClose={() => setModalName("")}
          fetchTicketIssueList={fetchTicketIssueList}
          interviewSchedulePeriodList={interviewschedulePeriodList}
          sectorList={sectorList}
        />
      )}
    </div>
  );
}
