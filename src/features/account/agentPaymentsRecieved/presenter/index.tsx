import { useEffect, useState } from "react";
import EditModal from "./Edit";
import { Box, Modal, styled } from "@mui/material";
import AccountDashboardTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";

import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import {
  AccountDashboardInterface,
  AgentPaymentReceivedInterface,
} from "../type";
import {
  deleteAccountDashboard,
  readAccountDashboardList,
} from "../repository";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";

const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
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

  const [editAccountDashboard, setAccountDashboard] =
    useState<AgentPaymentReceivedInterface>(
      {} as AgentPaymentReceivedInterface
    );

  const [modalName, setModalName] = useState("");

  const onClickEdit = (accountDashboard: AgentPaymentReceivedInterface) => {
    // console.log(accountDashboard, "CCCCCC");
    setAccountDashboard(accountDashboard);
    // console.log("onClickEdit"); // Only Dev
    // console.log(accountDashboard); // Only Dev
    setModalName("edit");
  };

  const [accountDashboardList, setAccountDashboardList] = useState<
    AccountDashboardInterface[]
  >([]);

  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (query: string, data: any) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d: any) =>
        d.index_date.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, accountDashboardList);

  const fetchAccountDashboardList = async (page?: number) => {
    const data = await readAccountDashboardList({
      page: page ?? additionalData.pagination.page,
      status: "no"
    });

    if (data) {
      setAccountDashboardList(data);
    }
    // setAccountDashboardList(data);
    setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetchAccountDashboardList(additionalData.pagination.page);
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Agent Payment Received"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      {/*  AccountDashboard stable */}
      <AccountDashboardTable
        accountDashboardList={dataFiltered}
        onClickEdit={onClickEdit}
        snoBase={additionalData.pagination.sno_base}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchAccountDashboardList(e);
        }}
      />

      {/* <!-- Modal --> */}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <Modal
          open={true}
          onClose={() => setModalName("")}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <EditModal
            currentElement={editAccountDashboard}
            onClose={() => {
              setModalName("");
            }}
            fetchAccountDashboardList={fetchAccountDashboardList}
          />
        </Modal>
      )}
    </div>
  );
}
