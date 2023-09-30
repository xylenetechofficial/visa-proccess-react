import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import IndexFullTable from "./Table";
import EditProVisa from "./VisaEdit";
import ViewVisaProEdit from "./ViewVisaEdit";
import ViewVisaProTable from "./View";
import EditVisaProTable from "./Edit";
import { FaFilter } from "react-icons/fa";
// import { GreenButton } from "../../../../componenets/CustomButton";

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

  const [indexFullList, setIndexFullList] = useState<[]>([]);
  const [editProVisaList, setEditProVisaList] = useState<[]>([]);
  const [visaProEditList, setVisaProEditList] = useState<[]>([]);

  const onClickEditProVisa = () => {
    console.log("onClickEdit"); // Only Dev
    setModalName("Visa Prof. Edit");
  };

  const onClickVisaProEdit = () => {
    console.log("onClickEdit"); // Only Dev
    setModalName("Visa Edit");
  };

  const onClickProView = () => {
    console.log("onClickEdit"); // Only Dev
    setModalName("View Visa Prof");
  };

  const onClickVisaEdit = () => {
    console.log("onClickEdit"); // Only Dev
    setModalName("Edit");
  };

  return (
    <>
      <CustomNavbarV3
        pageName="Index Full"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <IndexFullTable
        indexFullList={indexFullList}
        onClickEditProVisa={onClickEditProVisa}
        onClickProView={onClickProView}
        onClickVisaEdit={onClickVisaEdit}
      />

      {/* Modal  */}

      {modalName !== "Visa Prof. Edit" ? (
        ""
      ) : (
        <EditProVisa
          editProVisaList={editProVisaList}
          onClose={() => setModalName("")}
          onClickVisaProEdit={onClickVisaProEdit}
        />
      )}

      {modalName !== "Visa Edit" ? (
        ""
      ) : (
        <ViewVisaProEdit
          visaProEditList={visaProEditList}
          onClose={() => setModalName("")}
        />
      )}

      {modalName !== "View Visa Prof" ? (
        ""
      ) : (
        <ViewVisaProTable onClose={() => setModalName("")} />
      )}

      {modalName !== "View Visa Prof" ? (
        ""
      ) : (
        <ViewVisaProTable onClose={() => setModalName("")} />
      )}

      {modalName !== "Edit" ? (
        ""
      ) : (
        <EditVisaProTable onClose={() => setModalName("")} />
      )}

      {/* <div className="flex justify-end items-center mt-3">

            <GreenButton text='Submit'  />
            </div> */}
    </>
  );
}
