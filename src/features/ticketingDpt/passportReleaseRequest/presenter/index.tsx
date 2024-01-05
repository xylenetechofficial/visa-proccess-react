import PassportReleaseRequest from "./Table";
import EditModal from "./Edit";
import { useState, useEffect } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { PassportReleaseRequestInterface } from "../type";
import {
  createPassportReleaseRequest,
  readPassportReleaseRequestList,
} from "../repository";
import { BlueButton, GreenButton } from "../../../../componenets/CustomButton";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [modalName, setModalName] = useState("");
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
  const [PassportReleaseRequestList, setPassportReleaseRequestList] = useState<
    PassportReleaseRequestInterface[]
  >([]);
  async function fetchPassportReleaseRequest(page?: number) {
    const data = await readPassportReleaseRequestList({
      page: page ?? additionalData.pagination.page,
      status: "no",
    });
    if (data) {
      setPassportReleaseRequestList(data);
    }
    setAdditionalData(await PaginationManager.getData());
  }
  const onClickCreate = async (item: PassportReleaseRequestInterface[]) => {
    await createPassportReleaseRequest(item);
  };

  useEffect(() => {
    fetchPassportReleaseRequest(additionalData.pagination.page);
  }, []);

  return (
    <>
      <CustomNavbarV3
        pageName="Passport Release Request"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
        {authPermissionList.url_has("update") ? (
          <BlueButton text="Edit" onClick={() => setModalName("edit")} />
        ) : (
          ""
        )}
      </CardHeader>
      <PassportReleaseRequest
        PassportReleaseRequestList={PassportReleaseRequestList}
        onChange={(value) => setPassportReleaseRequestList(value)}
        snoBase={additionalData.pagination.sno_base}
      />
      <br />

      {authPermissionList.url_has("create") ? (
        <GreenButton
          text="Submit"
          onClick={() => onClickCreate(PassportReleaseRequestList)}
        />
      ) : (
        ""
      )}

      <br />
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchPassportReleaseRequest(e);
        }}
      />
      {modalName === "edit" ? (
        <EditModal onClose={(value) => setModalName(value)} />
      ) : (
        ""
      )}
    </>
  );
}
