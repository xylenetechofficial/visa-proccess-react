import { useEffect, useState } from "react";
import { deleteUser, readUserList, readUserRoleList } from "../repository";
import { UserInterface, UserRole } from "../type";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { Box, styled } from "@mui/material";
import UserTable from "./Table";
import { confirmationMessage, showMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { PermissionGroupInterface } from "../../permissionGroup/type";
import { readPermissionGroupList } from "../../permissionGroup/repository";

const CardHeader = styled(Box)(() => ({
  display: "flex",

  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
  const [userList, setUserList] = useState<UserInterface[]>([]);
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

  const [editUser, setEditUser] = useState<UserInterface>(
    {} as UserInterface
  );

  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const filterData = (query: string, data: UserInterface[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, userList);

  const onClickEdit = (user: UserInterface) => {
    setEditUser(user);
    console.log("onClickEdit"); // Only Dev
    console.log(user); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (user: UserInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && user.id) {
      const res = await deleteUser(user.id);
      // showMessage(res.message);
      fetchUserList();
    }
  };


  const fetchUserList = async (page?: number) => {
    const data = await readUserList({
      user_role_id: 0,
      active: 2,
      page: page ?? additionalData.pagination.page
    }, true);
    filterData("", userList);
    setUserList(data);
    setAdditionalData(await PaginationManager.getData());
  };


  const [permissionGroupList, setPermissionGroupList] = useState<PermissionGroupInterface[]>([])

  const fetchPermissionGroupList = async () => {
    const res = await readPermissionGroupList()
    setPermissionGroupList(res)
  }


  const [userRoleList, setUserRoleList] = useState<UserRole[]>([])

  const fetchUserRoleList = async () => {
    const res = await readUserRoleList()
    setUserRoleList(res)
  }
  useEffect(() => {
    fetchUserList();
    fetchPermissionGroupList()
    fetchUserRoleList()
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="User"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => readUserList({
          user_role_id: 0,
          active: 0,
          page: additionalData.pagination.page
        }, true)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

        <GreenButton
          text={"Add +"}
          onClick={() => {
            setModalName("create");
          }}
        />
      </CardHeader>

      {/*  user stable */}
      <UserTable
        snoBase={additionalData.pagination.sno_base}
        userList={dataFiltered}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchUserList(e);
        }}
      />

      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => {
            setModalName("")
            fetchUserList()
          }}
          permissionGroupList={permissionGroupList}
          userRoleList={userRoleList}
        />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          user={editUser}
          onClose={() => {
            setModalName("")
            fetchUserList()
          }}
          permissionGroupList={permissionGroupList}
          userRoleList={userRoleList}
        />
      )}
    </div>
  );
}
