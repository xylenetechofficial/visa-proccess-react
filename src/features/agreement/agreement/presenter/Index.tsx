import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";

import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { AgreementInterface } from "../type";
import AgreementTable from "./Table";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import { BlueButton, GreenButton } from "../../../../componenets/CustomButton";
import { useUserAuth } from "../../../context/UserAuthContext";

import CreateModal from "./Create";
import EditModal from "./Edit";
import { readAgreementList } from "../repository";
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
  const { authPermissionList } = useUserAuth();

  const [agreementList, setAgreementList] = useState<AgreementInterface[]>([]);

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

  const fetchAgreementList = async (page?: number) => {
    const data = await readAgreementList({
      page: page ?? 1,
      status: "yes",
    });
    setAgreementList(data);
    setAdditionalData(await PaginationManager.getData());
  };

  useEffect(() => {
    fetchAgreementList(additionalData.pagination.page);
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Agreement"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

        <div>
          {authPermissionList.url_has("create") ? (
            <GreenButton
              text={"Add"}
              onClick={() => {
                setModalName("create");
              }}
            />
          ) : (
            ""
          )}
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

      {/*  blockVisa stable */}
      <AgreementTable
        agreementList={agreementList}
        snoBase={additionalData.pagination.sno_base}
        actionType="read"
        onChange={(list) => setAgreementList(list)}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchAgreementList(e);
        }}
      />

      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal onClose={() =>{
          setModalName("")
          fetchAgreementList()
        }} />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal onClose={() => {
            setModalName("")
            fetchAgreementList()
          }} />
      )}
    </div>
  );
}
