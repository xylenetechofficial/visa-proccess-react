import { useEffect, useState } from "react";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";

import ClientLoginTable from "./Table";
import CreateModal from "./Create";
import EditModal from "./Edit";

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

  const onClickEdit = () => {
    console.log("onClickEdit"); // Only Dev
    setModalName("edit");
  };

  useEffect(() => {
    return;
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Client Login"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

        {/* Add */}
        <GreenButton
          text={"Add +"}
          onClick={() => {
            setModalName("create");
          }}
        />
      </CardHeader>

      <ClientLoginTable onClickEdit={onClickEdit} />

      {/* Open Modal */}
      {/* Create */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal onClose={() => setModalName("")} />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal onClose={() => setModalName("")} />
      )}
    </div>
  );
}
