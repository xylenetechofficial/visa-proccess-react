import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import TicketReissueTable from "./Table";
import { FaFilter } from "react-icons/fa";
import EditModal from "./Edit";
import AddModal from "./Add";
import { readTicketIssueList } from "../repository";
import { TicketIssueInterface } from "../type";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { BlueButton } from "../../../../componenets/CustomButton";
import { useUserAuth } from "../../../context/UserAuthContext";

export default function Main() {
  const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
  }));
  const { authPermissionList } = useUserAuth();
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

  const onClickAdd = (reissue: any) => {
    setReIssue(reissue);
    console.log("onClickAdd"); // Only Dev
    console.log(reissue); // Only Dev
    setModalName("add");
  };
  const [ticketIssueList, setTicketIssueList] = useState<
    TicketIssueInterface[]
  >([]);
  const fetchTicketissue = async (page?: number) => {
    const res: any = await readTicketIssueList({
      page: page ?? additionalData.pagination.page,
      status: "no",
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

        <div>
          {/* {authPermissionList.url_has('create') ? <GreenButton
            text={"Add"}
            onClick={() => {
              setModalName("add");
            }}
          /> : ""} */}
          {authPermissionList.url_has("update") ? (
            <BlueButton
              text={"Edit"}
              onClick={() => {
                setModalName("edit");
              }}
            />
          ) : (
            ""
          )}
        </div>
      </CardHeader>

      <TicketReissueTable
        snoBase={additionalData.pagination.sno_base}
        onClickAdd={onClickAdd}
        ticketIssueList={ticketIssueList}
        onChange={(list) => setTicketIssueList(list)}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchTicketissue(e);
        }}
      />

      {modalName !== "add" ? (
        ""
      ) : (
        <AddModal
          reIssue={reIssue}
          setReIssue={setReIssue}
          onClose={() => {
            setModalName("");
            fetchTicketissue();
          }}
        />
      )}

      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
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
