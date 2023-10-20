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
import { FullIndexListInterface, VisaProfessionEditInterface } from "../type";
import { readFullIndexList, readVisaProEditList, updateEditedSingleIndexFullItem, updateVisaProEdit } from "../repository";
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

  const [indexFullList, setIndexFullList] = useState<FullIndexListInterface[]>([]);
  const [editindexFullList, setEditIndexFullList] = useState<FullIndexListInterface>({} as FullIndexListInterface);
  const [editProVisaList, setEditProVisaList] = useState<[]>([]);
  const [visaProEditList, setVisaProEditList] = useState<VisaProfessionEditInterface>({} as VisaProfessionEditInterface);

  const onClickEditProVisa =async (item:any) => {
    console.log("onClickEdit"); // Only Dev
    setModalName("Visa Prof. Edit");
    console.log(item,"IT")
   
  };

  const onClickVisaProEdit = () => {
    console.log("onClickEdit"); // Only Dev
    setModalName("Visa Edit");
  };

  const onClickProView = async (item:any) => {
    console.log("onClickEdit"); // Only Dev
    setModalName("View Visa Prof");
    const res :any = await readVisaProEditList(item.party_code)
    if(res){
      setEditProVisaList(res)
    }
  };

  const onClickVisaEdit = () => {
    console.log("onClickEdit"); // Only Dev
    setModalName("Edit");
  };

  
  const fetchIndexVisaList = async () => {
    const data = await readFullIndexList();
    console.log(data);
    setIndexFullList(data);
  };

  const onClickUpdateVisaProEdit =async ()=>{
    console.log("onClickUpdateVisaProEdit"); // Only Dev
    const res :any = await updateVisaProEdit(visaProEditList)
    if(res){
      fetchIndexVisaList();
      setModalName('')
    }
  }
  const onClickUpdatEditIndexFullList =async ()=>{
    const res = await updateEditedSingleIndexFullItem(editindexFullList)
  }

  useEffect(() => {
    fetchIndexVisaList();
  }, []);
  return (
    <>
      <CustomNavbarV3
        pageName="Index Active"
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
          onClickUpdateVisaProEdit={onClickUpdateVisaProEdit}
          setVisaProEditList={setVisaProEditList}
        
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
        <EditVisaProTable 
         onClose={() => setModalName("")} 
        editindexFullList={editindexFullList} 
        setEditIndexFullList={setEditIndexFullList}
        onClickUpdatEditIndexFullList={onClickUpdatEditIndexFullList}/>
      )}

      {/* <div className="flex justify-end items-center mt-3">

            <GreenButton text='Submit'  />
            </div> */}
    </>
  );
}
