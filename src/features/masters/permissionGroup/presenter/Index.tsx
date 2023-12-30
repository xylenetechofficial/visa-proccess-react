import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { Box, styled } from "@mui/material";
import PermissionGroupTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import Pagination from "../../../../componenets/Pagination";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import { PermissionGroupInterface, PermissionInterface } from "../type";
import { deletePermissionGroup, readPermissionGroupList, readSinglePermissionGroup } from "../repository";
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
  const [permissionGroupList, setPermissionGroupList] = useState<PermissionInterface[]>([]);
  const [additionalData, setAdditionalData] = useState<AdditionalDataInterface>({
    pagination: {
      page: 1,
      page_count: 1,
      item_count: 0,
      sno_base: 0,
    }
  });

  const initValue: PermissionGroupInterface = {
    id: 0,
    name: "",
    dpt_list: []
  }
  const [permissionGroup, setPermissionGroup] = useState<PermissionGroupInterface>(initValue);

  const [modalName, setModalName] = useState("");
  const [actionType, setActionType] = useState("");


  const [dataFiltered, setDataFiltered] = useState<any[]>([]);
  const filterData = (query: string, data: any[]) => {
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
    filterData(query, permissionGroupList);
  };


  const onClickDuplicate = async (permission: PermissionInterface) => {
    setPermissionGroup(permission);
    setModalName("create");
    setActionType("copy");
  }

  const onClickEdit = async (permission: PermissionInterface) => {
    // const res: any = await readSinglePermissionGroup(permission.id)
    setPermissionGroup(permission);
    // console.log("onClickEdit"); // Only Dev
    // console.log(permission); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (permission: any) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && permission.id) {
      await deletePermissionGroup(permission.id);
      fetchPermissionGroupList();
    }
  };

  const fetchPermissionGroupList = async (page?: number) => {
    const res = await readPermissionGroupList(true, page ?? additionalData.pagination.page);
    setPermissionGroupList(res);
    setAdditionalData(await PaginationManager.getData());
    filterData("", res);
  };

  useEffect(() => {
    fetchPermissionGroupList();
  }, []);

  console.log(dataFiltered, "+++", permissionGroupList)
  const onClickCreate = async () => {
    const res: any = await readSinglePermissionGroup(0)
    setPermissionGroup(res);
    console.log(res, "Only dev")

  }
  return (
    <div>
      <CustomNavbarV3 pageName="Permission Group" searchFunction={searchFunction} />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

        {/* Add */}
        {/* <GreenButton
          text={"Add +"}
          onClick={() => {
            setPermissionGroup({ ...permissionGroup, id: 0 })
            setModalName("create");
            // onClickCreate()
          }}
        /> */}
      </CardHeader>

      {/*  agency stable */}
      <PermissionGroupTable
        snoBase={additionalData.pagination.sno_base}
        permission={dataFiltered}
        onClickEdit={onClickEdit}
        onClickDuplicate={onClickDuplicate}
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
          permission={permissionGroup}
          onClose={() => {
            setModalName("")
            setActionType("")
            fetchPermissionGroupList()
          }}
          actionType={actionType}
        />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          permission={permissionGroup}
          onClose={() => {
            setModalName("")
            fetchPermissionGroupList
          }}
        />
      )}
    </div>
  );
}
