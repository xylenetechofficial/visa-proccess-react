import { useEffect, useState } from "react";
// import CreateModal from './Create'
// import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { MolForwardedTovisaDepartmentDataInterface } from "../type";
import {
  readMolForwardedTovisaDept,
  updateMolWorkPermitCancelData,
} from "../repository";
import Table from "./Table";
import { GreenButton } from "../../../../componenets/CustomButton";
import CancelModal from "./CancelModal";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
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
  const [MolWorkPermitList, setMolWorkPermitList] = useState<
    MolForwardedTovisaDepartmentDataInterface[]
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

  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [currentData, setCurrentData] = useState<any>({});
  const filterData = (
    query: string,
    data: MolForwardedTovisaDepartmentDataInterface[]
  ) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, MolWorkPermitList);

  const onClickCreate = () => {
    setModalName("create");
  };

  // useEffect(() => {
  // }, [editIndexVisa, modalName])
  const onClickSubmit = async () => {
    const res = await updateMolWorkPermitCancelData(MolWorkPermitList);
  };

  const fetchMolForwardedToDepartment = async (page?: number) => {
    const data = await readMolForwardedTovisaDept(page ?? 1);
    console.log(data);
    setMolWorkPermitList(data);
    setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetchMolForwardedToDepartment(additionalData.pagination.page);
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Mol /Work Permit Cancel"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => fetchMolForwardedToDepartment()}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      {/*  indexVisa stable */}
      <Table
       snoBase={additionalData.pagination.sno_base}
        MolWorkPermitList={MolWorkPermitList}
        onChange={(value) => setMolWorkPermitList(value)}
        setModalName={(value) => setModalName(value)}
        setCurrentData={setCurrentData}
      />
      {modalName === "cancel" ? (
        <CancelModal
          currentData={currentData}
          setModalName={(value) => setModalName(value)}
        />
      ) : (
        ""
      )}
      <br />
      <GreenButton onClick={onClickSubmit} text="Submit" />
      <br />
      <br />
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchMolForwardedToDepartment(e);
        }}
      />
    </div>
  );
}
