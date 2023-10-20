import { useEffect, useState } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import DegreeAttestationTable from "./Table";
import { GreenButton, YellowButton } from "../../../../componenets/CustomButton";
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { DegreeAttestationInterface } from "../type/DegreeAttestation";
import { readDegreeAttestationList } from "../repository";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [modalName, setModalName] = useState("");
  const [degreAttestationList, setDegreAttestationList] = useState<DegreeAttestationInterface[]>([])
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
    const res = await readDegreeAttestationList({ page_number: page })
    setDegreAttestationList(res);
    setAdditionalData(await PaginationManager.getData());

  }
  useEffect(() => {
    fetch_list()
  }, [])

  return (
    <>
      <CustomNavbarV3
        pageName="Degree Attestation"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => fetch_list()}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

        <div>

          <GreenButton
            text={"ADD"}
            onClick={() => {
              setModalName("create");
            }}
          />
          <YellowButton
            text={"EDIT"}
            onClick={() => {
              setModalName("edit");
            }}
          />
        </div>
      </CardHeader>

      <DegreeAttestationTable degreAttestationList={degreAttestationList} fetch_list={fetch_list} />

      {/* <Pagination data={additionalData} onPageChange={(e) => { fetch_list(e) }} /> */}

      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal onClose={() => {
          fetch_list()
          setModalName("")
        }} />
      )}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal onClose={() => {
          fetch_list()
          setModalName("")
        }} />
      )}
    </>
  );
}
