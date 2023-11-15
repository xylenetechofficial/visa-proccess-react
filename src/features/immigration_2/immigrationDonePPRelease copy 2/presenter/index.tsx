import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { BlueButton, GreenButton } from "../../../../componenets/CustomButton";
import { CustomNavbarV3, CustomButton2 } from "../../../../componenets/CustomComponents";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import { FaFilter } from "react-icons/fa";

import EditModal from './edit';
import CreateModal from './add';
import Pagination from "../../../../componenets/Pagination";
import { ImmigrationDonePPReleaseInterface } from "../type";
import { readImmigrationDonePPReleaseList } from "../repository";
import ImmigrationDOnePPReleaseTable from "./Table";
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


  const [immigrationDonePPReleaseList, setImmigrationDonePPReleaseList] = useState<ImmigrationDonePPReleaseInterface[]>([]);

  const fetchImmigrationDoneList = async (page?: number) => {
    const data = await readImmigrationDonePPReleaseList({
      page: page ?? 1,
      status: "yes"
    });
    setImmigrationDonePPReleaseList(data);
    setAdditionalData(await PaginationManager.getData());
  };

  useEffect(() => {
    fetchImmigrationDoneList(additionalData.pagination.page);
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Immigration Done PP Release"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => fetchImmigrationDoneList(additionalData.pagination.page)}
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
      <ImmigrationDOnePPReleaseTable
        snoBase={additionalData.pagination.sno_base}
        RcPPRecieved_list={immigrationDonePPReleaseList}
        onChange={(list) => setImmigrationDonePPReleaseList(list)}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchImmigrationDoneList(e);
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
            fetchImmigrationDoneList()
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
            fetchImmigrationDoneList()
          }}
        />
      )}
    </div>
  );
}
