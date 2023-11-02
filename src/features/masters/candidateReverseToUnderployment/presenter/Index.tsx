import { useEffect, useState } from "react";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";

import CandidateReverseToUnderployment from "./Table";
import ReverseModal from './Reverse'

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

  const onClickReverse = () => {
    console.log("onClickReverse"); // Only Dev
    setModalName("Reverse");
  };

  useEffect(() => {
    return;
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Candidate Reverse To Underployment"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

        {/* Add */}
        {/* <GreenButton
          text={"Add +"}
          onClick={() => {
            setModalName("create");
          }}
        /> */}
      </CardHeader>

      <CandidateReverseToUnderployment
      onClickReverse={onClickReverse}
      />

      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "Reverse" ? (
        ""
      ) : (
        <ReverseModal
          onClose={() => setModalName("")}
        />
      )}
    </div>
  );
}
