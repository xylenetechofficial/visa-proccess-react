import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { Box, styled } from "@mui/material";
import AgencyTable from "./AgencyTable";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import Pagination from "../../../../componenets/Pagination";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import { PermissionIndexInterface } from "../type";
import { deletePermissionGroup, readPermissionGroupList } from "../repository";
const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
  const [agencyList, setAgencyList] = useState<PermissionIndexInterface[]>([]);
  const [additionalData, setAdditionalData] = useState<AdditionalDataInterface>({
    pagination: {
        page: 1,
        page_count: 1,
        item_count: 0,
        sno_base: 0,
    }
});

  const [permissionGroup, setPermissionGroup] = useState<PermissionIndexInterface>(
    {} as PermissionIndexInterface
  );

  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const [dataFiltered, setDataFiltered] = useState<PermissionIndexInterface[]>([]);
  const filterData = (query: string, data: PermissionIndexInterface[]) => {
    if (!query) {
      setDataFiltered(data);
      return;
    } else {
      const d = data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      );
      setDataFiltered(d);
      return;
    }
  };

  const searchFunction = async (query: string) => {
    filterData(query, agencyList);
  };

  const onClickEdit = (permission: PermissionIndexInterface) => {
    setPermissionGroup(permission);
    console.log("onClickEdit"); // Only Dev
    console.log(permission); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (permission: PermissionIndexInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && permission.id) {
      await deletePermissionGroup(permission.id);
      fetchPermissionGroupList();
    }
  };

  const fetchPermissionGroupList = async (page?: number) => {
    const res = await readPermissionGroupList(true,  page);
    setAgencyList(res);
    setAdditionalData(await PaginationManager.getData());
    filterData("", res);
  };

  useEffect(() => {
    fetchPermissionGroupList(additionalData.pagination.page);   
  }, []);



    return (
    <div>
      <CustomNavbarV3 pageName="Agency" searchFunction={searchFunction} />
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

      {/*  agency stable */}
      <AgencyTable
        snoBase={additionalData.pagination.sno_base}
        permission={dataFiltered}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchPermissionGroupList(e);
        }}
      />

      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => setModalName("")}
          fetchAgencyList={fetchPermissionGroupList}
        />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          permission={permissionGroup}
          onClose={() => setModalName("")}
          fetchPermissionGroupList={fetchPermissionGroupList}
        />
      )}
    </div>
  );
}