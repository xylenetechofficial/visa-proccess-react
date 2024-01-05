import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import IncentiveTable from "./Table";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";

import { createIncentive, readIncentiveList } from "../repository";
import { AddIncentiveInterface } from "../type";
import Pagination from "../../../../componenets/Pagination";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import { BlueButton } from "../../../../componenets/CustomButton";
import EditIncentiveTable from "./Edit";
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
  const { authPermissionList } = useUserAuth();
  const [status, setStatus] = useState("yes");
  const [data, setData] = useState<any>({ job_order_list: [] });
  const [updateIncentive, setUpdateIncentive] = useState<any>({
    job_order_list: [
      {
        id: 0,
        manager_incentive: 0,
        staff_incentive: 0,
      },
    ],
  });
  const [addIncentive, setIncentive] = useState<AddIncentiveInterface[]>([]);
  const onClickCreate = async (data: AddIncentiveInterface) => {
    // console.log(data, "DDDDDDDDDDDDDDDDDDDDDD", addIncentive);
    await createIncentive(addIncentive);
    await fetchIncentiveList(status);
  };

  const [incentiveList, setIncentiveList] = useState<any>([]);
  const [modalName, setModalName] = useState("");
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
  const dataFiltered = filterData(searchQuery, incentiveList);

  const fetchIncentiveList = async (value?: string, page?: number) => {
    const data = await readIncentiveList(value ?? "", {
      page: page ?? additionalData.pagination.page,
      status: "no",
    });
    // console.log(data, "AAAAAAAAA");
    if (data) {
      setIncentiveList(data);
    }
    setAdditionalData(await PaginationManager.getData());
    // setAccountDashboardList(data);
  };
  useEffect(() => {
    fetchIncentiveList(status, additionalData.pagination.page);
  }, [status]);

  return (
    <div>
      <CustomNavbarV3
        pageName="Incentives"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => fetchIncentiveList()}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
        {authPermissionList.url_has("update") ? (
          <BlueButton
            text="Edit"
            onClick={() => {
              setModalName("edit");
            }}
          />
        ) : (
          ""
        )}
      </CardHeader>

      {/*  Incentive Table */}
      <IncentiveTable
        snoBase={additionalData.pagination.sno_base}
        incentiveList={incentiveList}
        setIncentiveList={setIncentiveList}
        updateIncentive={updateIncentive}
        setUpdateIncentive={setUpdateIncentive}
        data={data}
        setData={setData}
        onChange={(value) => setIncentive(value)}
        onClick={onClickCreate}
      />
      <br />
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchIncentiveList(status, e);
        }}
      />
      {modalName === "edit" ? (
        <EditIncentiveTable setModalName={setModalName} />
      ) : (
        ""
      )}
    </div>
  );
}
