import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { Box, styled } from "@mui/material";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import {
  ReadMolRecievedData,
  createMolReceivedData,
  updateMolReceivedData,
} from "../repository";
import Table from "./Table";
import { BlueButton, GreenButton } from "../../../../componenets/CustomButton";
import { MolReceivedInterface } from "../type";
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
  const [JobOrderList, setJobOrderList] = useState<MolReceivedInterface[]>([]);

  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

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

  const filterData = (query: string, data: MolReceivedInterface[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, JobOrderList);
  const { authPermissionList } = useUserAuth();
  const onClickSubmit = async () => {
    // const res = await updateMolReceivedData(JobOrderList);
    await createMolReceivedData(JobOrderList);
    fetchMofaRecievedData();
  };

  const fetchMofaRecievedData = async (page?: number) => {
    const data = await ReadMolRecievedData(page ?? 1, "no");
    console.log(data);
    setJobOrderList(data);
    setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetchMofaRecievedData(additionalData.pagination.page);
  }, []);

  return (
    <div className="h-screen">
      <CustomNavbarV3
        pageName="Mol submitted to company"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
        <div>
          {/* <GreenButton
            text={"Add"}
            onClick={() => {
              setModalName("create");
            }}
          /> */}
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

      {/*  indexVisa stable */}
      <Table
        snoBase={additionalData.pagination.sno_base}
        jobOrderList={JobOrderList}
        onChange={(value) => setJobOrderList(value)}
      />
      <br />
      {authPermissionList.url_has("create") ? (
        <GreenButton onClick={onClickSubmit} text="Submit" />
      ) : (
        ""
      )}
      <br />
      <br />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          // console.log(e); // Only Dev
          fetchMofaRecievedData(e);
        }}
      />
      {modalName === "create" ? (
        <CreateModal onClose={() => setModalName("")} />
      ) : (
        ""
      )}
      {modalName === "edit" ? (
        <EditModal onClose={() => setModalName("")} />
      ) : (
        ""
      )}
    </div>
  );
}
