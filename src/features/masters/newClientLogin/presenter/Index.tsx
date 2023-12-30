import { useEffect, useState } from "react";
import { deleteClientLogin, readClientLoginList } from "../repository";
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
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { ClientLogin } from "../type";
import { useUserAuth } from "../../../context/UserAuthContext";

const CardHeader = styled(Box)(() => ({
  display: "flex",

  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
  const [clientLoginList, setClientLoginList] = useState<ClientLogin[]>([]);
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

  const { authPermissionList } = useUserAuth();
  const [editClientLogin, setEditClientLogin] = useState<ClientLogin>(
    {} as ClientLogin
  );

  const [modalName, setModalName] = useState("");

  const onClickEdit = (user: ClientLogin) => {
    setEditClientLogin(user);
    console.log("onClickEdit"); // Only Dev
    console.log(user); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (user: ClientLogin) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && user.id) {
      const res = await deleteClientLogin(user.id);
      // showMessage(res.message);
      fetchClientLogin();
    }
  };

  const fetchClientLogin = async (page?: number) => {
    const data = await readClientLoginList({
      page: page ?? additionalData.pagination.page,
    });
    console.log(data); // Only Dev
    setClientLoginList(data);
    setAdditionalData(await PaginationManager.getData());
  };

  useEffect(() => {
    fetchClientLogin();
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Client Login"
        searchFunction={(query) => ""}
        refresh={() =>
          readClientLoginList({
            page: additionalData.pagination.page,
          })
        }
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
        {authPermissionList.url_has("create") ? (
          <GreenButton
            text={"Add +"}
            onClick={() => {
              setModalName("create");
            }}
          />
        ) : (
          ""
        )}
      </CardHeader>

      {/*  user stable */}
      <UserTable
        snoBase={additionalData.pagination.sno_base}
        clientLoginList={clientLoginList}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchClientLogin(e);
        }}
      />

      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => {
            setModalName("");
            fetchClientLogin();
          }}
        />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          clientLogin={editClientLogin}
          onClose={() => {
            setModalName("");
            fetchClientLogin();
          }}
        />
      )}
    </div>
  );
}
