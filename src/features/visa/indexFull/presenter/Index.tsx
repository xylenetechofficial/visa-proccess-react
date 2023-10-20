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
import { FullIndexInterface } from "../type/IndexVisa";
import { readFullIndexList, readVisaProEditList, updateEditedSingleIndexFullItem, updateVisaProEdit } from "../repository";
import { FullIndexListInterface, VisaProfessionEditInterface } from "../type2";
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
  const [currentFullIndex, setCurrentFullIndex] = useState<FullIndexInterface>(
    {} as FullIndexInterface
  );
  const [editProVisaList, setEditProVisaList] = useState<[]>([]);
  const [visaProEditList, setVisaProEditList] = useState<VisaProfessionEditInterface>({} as VisaProfessionEditInterface);
 

  const onClickEditProVisa = async(item:any) => {
    console.log("onClickEdit"); // Only Dev
    setModalName("Visa Prof. Edit");
    console.log(item,"IT")
    const res :any = await readVisaProEditList(item.party_code)
    if(res){
      setEditProVisaList(res)
    }
  };

  const onClickVisaProEdit = (item:VisaProfessionEditInterface) => {
    console.log("onClickEdit",item); // Only Dev
    setModalName("Visa Edit");
    setVisaProEditList(item)
  };

  const onClickProView = (fullIndex: FullIndexInterface) => {
    setCurrentFullIndex(fullIndex);
    console.log("on Click view"); // Only Dev
    setModalName("View Visa Prof");
  };

  const onClickVisaEdit = (item:FullIndexListInterface) => {
    console.log("onClickEdit"); // Only Dev
    setModalName("Edit");
    setEditIndexFullList(item)
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
        pageName="Index Full"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <IndexFullTable
        indexFullList={indexFullList}
        onClickEditProVisa={(value :any)=>onClickEditProVisa(value)}
        onClickProView={onClickProView}
        onClickVisaEdit={(value)=>onClickVisaEdit(value)}
      />

      {/* Modal  */}

      {modalName !== "Visa Prof. Edit" ? (
        ""
      ) : (
        <EditProVisa
          editProVisaList={editProVisaList}
          onClose={() => setModalName("")}
          onClickVisaProEdit={(value)=>onClickVisaProEdit(value)}
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
        currentFullIndex={currentFullIndex}
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
