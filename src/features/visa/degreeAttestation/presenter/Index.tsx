import { useState } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import DegreeAttestationTable from "./Table";
import { GreenButton } from "../../../../componenets/CustomButton";
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import CreateModal from "./Create";

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
  const [sendDegreeAttestation, setSendDegreeAttestation] = useState([]);

  const onClickCreate = () => {
    setModalName("create");
  };

  return (
    <>
      <CustomNavbarV3
        pageName="Degree Attestation"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

        <GreenButton
          text={"Add +"}
          onClick={() => {
            setModalName("create");
          }}
        />
      </CardHeader>

      <DegreeAttestationTable />

      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal onClose={() => setModalName("")} />
      )}
    </>
  );
}
