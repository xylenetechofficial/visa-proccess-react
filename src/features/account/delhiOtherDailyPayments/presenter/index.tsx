import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
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
  DelhiOtherDailyPaymentInterface,
} from "../type";
import {
  deleteAccountDashboard,
  readAccountDashboardList,
} from "../repository";
import { SectorInterface } from "../../../masters/sector/type";
import { readSectorList } from "../../../masters/sector/repository";
import { readCompanyList } from "../../../masters/company/repository";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { readCountryList } from "../../../masters/country/repository";
import EditDelhiOtherPayment from "./Edit";
import AddInAccountPage from "./PaymentDetail";
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
    useState<DelhiOtherDailyPaymentInterface>(
      {} as DelhiOtherDailyPaymentInterface
    );

  const [modalName, setModalName] = useState("");

  const onClickCreate = () => {
    setModalName("create");
  };

  const onClickEdit = (
    modaltype: string,
    accountDashboard: DelhiOtherDailyPaymentInterface
  ) => {
    console.log(accountDashboard, "CCCCCC", modaltype);
    setAccountDashboard(accountDashboard);
    console.log("onClickEdit", modaltype); // Only Dev
    console.log(accountDashboard, modaltype); // Only Dev
    setModalName(modaltype);
  };

  const onClickDelete = async (accountDashboard: AccountDashboardInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && accountDashboard.id) {
      await deleteAccountDashboard(accountDashboard.id);
      fetchAccountDashboardList();
    }
  };

  const [accountDashboardList, setAccountDashboardList] = useState<
    DelhiOtherDailyPaymentInterface[]
  >([]);

  const [searchQuery, setSearchQuery] = useState("");

  // const filterData = (query: string, data: AccountDashboardInterface[]) => {
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
      status: "no",
    });

    if (data) {
      setAccountDashboardList(data);
    }
    setAccountDashboardList(data);
    setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetchAccountDashboardList(additionalData.pagination.page);
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Delhi/Other Daily Payments"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      {/*  AccountDashboard stable */}
      <AccountDashboardTable
      snoBase={additionalData.pagination.sno_base}
        accountDashboardList={dataFiltered}
        onClickEdit={onClickEdit}
        modalName={modalName}
        setModalName={setModalName}
      />

      <br />
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchAccountDashboardList(e);
        }}
      />

      {modalName === "editdelhiotherdailypayments" ? (
        <EditDelhiOtherPayment
          onClickEdit={() => console.log("edit")}
          setModalName={setModalName}
        />
      ) : (
        ""
      )}
      {modalName === "addinAccount" ? (
        <AddInAccountPage
          onClose={() => setModalName("")}
          fetchAccountDashboardList={() => fetchAccountDashboardList()}
          currentElement={editAccountDashboard}
          setAccountDashboard={setAccountDashboard}
        />
      ) : (
        ""
      )}

      <div className="mt-3">
        <CustomButton2 buttonText="Submit" onClick={() => console.log("sd")} />
      </div>
    </div>
  );
}
