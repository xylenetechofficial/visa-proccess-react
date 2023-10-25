import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import IndexActiveTable from "./Table";
import EditProVisa from "./VisaEdit";
import ViewVisaProEdit from "./ViewVisaEdit";
import ViewVisaProTable from "./View";
import EditVisaProTable from "./Edit";
import { FaFilter } from "react-icons/fa";
import { ActiveIndexInterface } from "../type/IndexVisa";
import { readActiveIndexList, readVisaProEditList, updateEditedSingleIndexActiveItem, updateVisaProEdit } from "../repository";
import { ActiveIndexListInterface, VisaProfessionEditInterface } from "../type2";
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

  const [indexActiveList, setIndexActiveList] = useState<ActiveIndexListInterface[]>([]);
  const [editindexActiveList, setEditIndexActiveList] = useState<ActiveIndexListInterface>({} as ActiveIndexListInterface);
  
  const [currentActiveIndex, setCurrentActiveIndex] = useState<ActiveIndexInterface>(
    {} as ActiveIndexInterface
  );
  const [editProVisaList, setEditProVisaList] = useState<[]>([]);
  const [visaProEditList, setVisaProEditList] = useState<VisaProfessionEditInterface>({} as VisaProfessionEditInterface);


  const onClickEditProVisa = async (item: any) => {
    console.log("onClickEdit"); // Only Dev
    setModalName("Visa Prof. Edit");
    console.log(item, "IT")
    const res: any = await readVisaProEditList(item.party_code)
    if (res) {
      setEditProVisaList(res)
    }
  };

  const onClickVisaProEdit = (item: VisaProfessionEditInterface) => {
    console.log("onClickEdit", item); // Only Dev
    setModalName("Visa Edit");
    setVisaProEditList(item)
  };

  const onClickProView = (ActiveIndex: ActiveIndexInterface) => {
    setCurrentActiveIndex(ActiveIndex);
    console.log("on Click view"); // Only Dev
    setModalName("View Visa Prof");
  };

  const onClickVisaEdit = (item: ActiveIndexListInterface) => {
    console.log("onClickEdit"); // Only Dev
    setModalName("Edit");
    setEditIndexActiveList(item)
  };

  const fetchIndexVisaList = async () => {
    const data = await readActiveIndexList();
    console.log(data);
    setIndexActiveList(data);
  };

  const onClickUpdateVisaProEdit = async () => {
    console.log("onClickUpdateVisaProEdit"); // Only Dev
    const res: any = await updateVisaProEdit(visaProEditList)
    if (res) {
      fetchIndexVisaList();
      setModalName('')
    }
  }
  const onClickUpdatEditIndexActiveList = async () => {
    const res = await updateEditedSingleIndexActiveItem(editindexActiveList)
    fetchIndexVisaList()
  }

  useEffect(() => {
    fetchIndexVisaList();
  }, []);

  return (
    <>
      <CustomNavbarV3
        pageName="Index Active"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => fetchIndexVisaList()}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <IndexActiveTable
        indexActiveList={indexActiveList}
        onClickEditProVisa={(value: any) => onClickEditProVisa(value)}
        onClickProView={onClickProView}
        onClickVisaEdit={(value) => onClickVisaEdit(value)}
      />

      {/* Modal  */}

      {modalName !== "Visa Prof. Edit" ? (
        ""
      ) : (
        <EditProVisa
          editProVisaList={editProVisaList}
          onClose={() => setModalName("")}
          onClickVisaProEdit={(value) => onClickVisaProEdit(value)}
        />
      )}

      {modalName !== "Visa Edit" ? (
        ""
      ) : (
        <ViewVisaProEdit
          visaProEditList={visaProEditList}
          onClose={() => setModalName("")}
          onClickUpdateVisaProEdit={onClickUpdateVisaProEdit}
          setVisaProEditList={setVisaProEditList}
        />
      )}

      {modalName !== "View Visa Prof" ? (
        ""
      ) : (
        <ViewVisaProTable onClose={() => setModalName("")}
          currentActiveIndex={currentActiveIndex}
        />
      )}

      {/* {modalName !== "View Visa Prof" ? (
        ""
      ) : (
        <ViewVisaProTable onClose={() => setModalName("")} />
      )} */}

      {modalName !== "Edit" ? (
        ""
      ) : (
        <EditVisaProTable
          onClose={() => setModalName("")}
          editindexActiveList={editindexActiveList}
          setEditIndexActiveList={setEditIndexActiveList}
          onClickUpdatEditIndexActiveList={onClickUpdatEditIndexActiveList} />
      )}

      {/* <div className="flex justify-end items-center mt-3">

            <GreenButton text='Submit'  />
            </div> */}
    </>
  );
}
