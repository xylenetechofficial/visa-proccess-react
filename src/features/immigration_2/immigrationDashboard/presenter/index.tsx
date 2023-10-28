import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { BlueButton, GreenButton } from "../../../../componenets/CustomButton";
import { CustomNavbarV3, CustomButton2 } from "../../../../componenets/CustomComponents";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import { FaFilter } from "react-icons/fa";

import EditModal from './edit';
import CreateModal from './add';
import RejectModal from './RejectModal';
import Pagination from "../../../../componenets/Pagination";
import { ImmigrationInterface } from "../type";
import { readImmigrationList } from "../repository";
import ImmigrationTable from "./Table";
import { useUserAuth } from "../../../context/UserAuthContext";
const CardHeader = styled(Box)(() => ({
  display: "flex",

  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
  const { authPermissionList } = useUserAuth()

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


  const [immigrationList, setImmigrationList] = useState<ImmigrationInterface[]>([]);


  const fetchImmigrationDashboardList = async (page?: number) => {
    const data = await readImmigrationList({
      page: page ?? 1,
      status: "yes"
    });
    setImmigrationList(data);
    setAdditionalData(await PaginationManager.getData());
  };

  const [singleImmigration, setSingleImmigration] =
  useState<ImmigrationInterface>({} as ImmigrationInterface);
  function onClickReject(item: ImmigrationInterface) {
    setSingleImmigration(item);
    setModalName("reject");
  }

  useEffect(() => {
    fetchImmigrationDashboardList(additionalData.pagination.page);
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Immigration Dashboard"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => fetchImmigrationDashboardList(additionalData.pagination.page)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

        <div>
          {authPermissionList.url_has('create') ? <GreenButton
            text={"Add"}
            onClick={() => {
              setModalName("add");
            }}
          /> : ""}
          {authPermissionList.url_has('update') ? <BlueButton
            text={"Edit"}
            onClick={() => {
              setModalName("edit");
            }}
          /> : ""}
        </div>
      </CardHeader>
      {/*  agent stable */}
      <ImmigrationTable
        snoBase={additionalData.pagination.sno_base}
        list={immigrationList}
        onClickReject={onClickReject}
        actionType="read"
        onChange={(list) => setImmigrationList(list)}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchImmigrationDashboardList(e);
        }}
      />

      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "add" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => {
            setModalName("")
            fetchImmigrationDashboardList()
          }}
        />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          onClose={() => {
            setModalName("")
            fetchImmigrationDashboardList()
          }}
        />
      )}

      {/* Reject */}
      {modalName !== "reject" ? (
        ""
      ) : (
        <RejectModal
          immigration={singleImmigration}
          onClose={() => {
            setModalName("")
            fetchImmigrationDashboardList()
          }}
        />
      )}
    </div>
  );
}
