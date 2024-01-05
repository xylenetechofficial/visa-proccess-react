import { useEffect, useState } from "react";
import CreateModal from "./Create";
// import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { MolForwardedTovisaDepartmentDataInterface } from "../type";
import {
  createMolForwardedToVisaDeptData,
  readMolForwardedTovisaDept,
  updateMolForwardedToVisaDeptData,
} from "../repository";
import Table from "./Table";
import { BlueButton, GreenButton } from "../../../../componenets/CustomButton";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import EditModel from "./Edit";
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

  const [JobOrderList, setJobOrderList] = useState<
    MolForwardedTovisaDepartmentDataInterface[]
  >([]);
  const { authPermissionList } = useUserAuth();
  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

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
  const dataFiltered = filterData(searchQuery, JobOrderList);

  const onClickCreate = () => {
    setModalName("create");
  };

  const onClickSubmit = async () => {
    // const res = await updateMolForwardedToVisaDeptData(JobOrderList);
    const res = await createMolForwardedToVisaDeptData(JobOrderList);
    if (res) {
      fetchMolForwardedToDepartment();
    }
  };

  const fetchMolForwardedToDepartment = async (page?: number) => {
    const data = await readMolForwardedTovisaDept(page ?? 1);
    console.log(data);
    setJobOrderList(data);
    setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetchMolForwardedToDepartment(additionalData.pagination.page);
  }, []);

  return (
    <div className="h-screen">
      <CustomNavbarV3
        pageName="Mol Forwarded To Visa Department"
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
          console.log(e); // Only Dev
          fetchMolForwardedToDepartment(e);
        }}
      />
      {modalName === "create" ? (
        <CreateModal onClose={() => setModalName("")} />
      ) : (
        ""
      )}
      {modalName === "edit" ? (
        <EditModel
          onClose={() => {
            setModalName("");
            fetchMolForwardedToDepartment();
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
}
