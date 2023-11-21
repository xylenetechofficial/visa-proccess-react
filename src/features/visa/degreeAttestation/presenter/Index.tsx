import { useEffect, useState } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import DegreeAttestationTable from "./Table";
import {
  BlueButton,
  GreenButton,
  YellowButton,
} from "../../../../componenets/CustomButton";
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import CreateModal from "./Create";
import EditModal from "./Edit";
import CancelModal from "./CancelModal";

import { DegreeAttestationInterface } from "../type/DegreeAttestation";
import { readDegreeAttestationList } from "../repository";
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

  const [searchQuery, setSearchQuery] = useState("");
  const [modalName, setModalName] = useState("");
  const [degreAttestationCurrent, setDegreAttestationCurrent] = useState<DegreeAttestationInterface>({} as DegreeAttestationInterface);
  const [degreAttestationList, setDegreAttestationList] = useState<
    DegreeAttestationInterface[]
  >([]);
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

  const fetch_list = async (page?: number) => {
    const res = await readDegreeAttestationList({ page_number: page ?? additionalData.pagination.page });
    setDegreAttestationList(res);
    setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetch_list();
  }, []);

  return (
    <div className="h-screen">
      <CustomNavbarV3
        pageName="Degree Attestation"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => fetch_list()}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

        <div>
          {authPermissionList.url_has("create") ? (
            <GreenButton
              text={"Add"}
              onClick={() => {
                setModalName("add");
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

      <DegreeAttestationTable
        snoBase={additionalData.pagination.sno_base}
        degreAttestationList={degreAttestationList}
        fetch_list={fetch_list}
        onClickCancel={(ele) => {
          setDegreAttestationCurrent(ele)
          setModalName('cancel')
        }}
      />

      {/* <Pagination data={additionalData} onPageChange={(e) => { fetch_list(e) }} /> */}
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetch_list(e);
        }}
      />

      {modalName !== "add" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => {
            fetch_list();
            setModalName("");
          }}
        />
      )}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          onClose={() => {
            fetch_list();
            setModalName("");
          }}
        />
      )}

      {modalName !== "cancel" ? (
        ""
      ) : (
        <CancelModal
          currentData={degreAttestationCurrent}
          setModalName={(name: string) => {
            setModalName("");
          }}
        />
      )}
    </div>
  );
}
