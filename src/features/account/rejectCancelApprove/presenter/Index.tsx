import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import RejectCancelApproveTable from "./Table";
import { RedButton, YellowButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { RejectCancelApproveInterface } from "../type";
import {
  readRejectCancelApproveList,
  updateRejectCancelApprove,
} from "../repository";
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
  // const [btnClicked, setBtnClicked] = useState("");
  const { authPermissionList } = useUserAuth();
  const [RejectCancelApproveList, setRejectCancelApproveList] = useState<
    RejectCancelApproveInterface[]
  >([]);

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

  const fetchRejectCancelApproveList = async (page?: number) => {
    const data = await readRejectCancelApproveList({
      page: page ?? additionalData.pagination.page,
      status: "no",
    });

    if (data) {
      setRejectCancelApproveList(data);
    }
    setAdditionalData(await PaginationManager.getData());
  };
  const updateRejectCancelApproveList = async (
    id: number,
    item: RejectCancelApproveInterface[]
  ) => {
    const list: RejectCancelApproveInterface[] = item.filter(
      (ele) => ele.is_checked !== undefined || null
    );
    list.map((ele) => {
      return (ele.status = id);
    });

    const res: any = await updateRejectCancelApprove(id, list);
    if (res) {
      fetchRejectCancelApproveList();
    }
  };
  useEffect(() => {
    fetchRejectCancelApproveList(additionalData.pagination.page);
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Reject Cancel Approve"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>
      {/*  RejectCancelApprove stable */}
      <RejectCancelApproveTable
        snoBase={additionalData.pagination.sno_base}
        RejectCancelApproveList={RejectCancelApproveList}
        onChange={(value) => setRejectCancelApproveList(value)}
      />
      <br />
      {authPermissionList.url_has("update") ? (
        <YellowButton
          text={"Reject"}
          onClick={() => {
            // setBtnClicked("Reject")
            updateRejectCancelApproveList(1, RejectCancelApproveList);
          }}
        />
      ) : (
        ""
      )}

      {authPermissionList.url_has("update") ? (
        <RedButton
          text={"Cancel / Approve"}
          onClick={() => {
            // setBtnClicked("Cancel / Approve")
            updateRejectCancelApproveList(2, RejectCancelApproveList);
          }}
        />
      ) : (
        ""
      )}

      <br />
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchRejectCancelApproveList(e);
        }}
      />
    </div>
  );
}
