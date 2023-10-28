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
import { AgencyInterface } from "../type";
import { createUser, deleteAgency, deleteUser, readAgencyList, readRoleList, readSingleUser, readUserList, updateUser } from "../repository";
import Pagination from "../../../../componenets/Pagination";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import { UserInterface } from "../../user/type";
const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
  const [agencyList, setAgencyList] = useState<AgencyInterface[]>([]);
  const [additionalData, setAdditionalData] = useState<AdditionalDataInterface>({
    pagination: {
        page: 1,
        page_count: 1,
        item_count: 0,
        sno_base: 0,
    }
});

  const [editAgency, setEditAgency] = useState<AgencyInterface>(
    {} as AgencyInterface
  );

  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const [dataFiltered, setDataFiltered] = useState<AgencyInterface[]>([]);
  const filterData = (query: string, data: AgencyInterface[]) => {
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

  const onClickEdit = (agency: AgencyInterface) => {
    setEditAgency(agency);
    console.log("onClickEdit"); // Only Dev
    console.log(agency); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (agency: AgencyInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && agency.id) {
      await deleteAgency(agency.id);
      fetchAgencyList();
    }
  };

  // useEffect(() => {
  // }, [editAgency, modalName])

  const fetchAgencyList = async (page?: number) => {
    const res = await readAgencyList(true,  page);
    setAgencyList(res);
    setAdditionalData(await PaginationManager.getData());
    filterData("", res);
  };

  useEffect(() => {
    fetchAgencyList(additionalData.pagination.page);
    fetchRoleList();
    
  }, []);

  const fetchRoleList = async()=>{
  const res=  await readRoleList();
  console.log(res,"WWWW")
  
  }

  //call it on any click or any event to fetch users list
  const fetchUserList =async()=>{
    const user = await readUserList({user_role_id:1,active:1},false)
  // after getting result store it o any state for further
  }

  // call it any event for create user and send payload also instead empty curly braces
  const createNewUser = async ()=>{
    const res = await createUser({}as UserInterface)
  }
  // call it for read single user data 
  const readUser = async(id: number)=>{
    const res = await readSingleUser(id) 
  }
// call it on any event for update single user
  const updateSingleUser=async(id:number, user:UserInterface)=>{
    const res= await updateUser(id,user)
  }
  // call it on any event for delete single user
  const deleteSingleUser = async(id:number)=>{
    const res  = await deleteUser(id)
  }
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
        agencyList={dataFiltered}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchAgencyList(e);
        }}
      />

      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => setModalName("")}
          fetchAgencyList={fetchAgencyList}
        />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          agency={editAgency}
          onClose={() => setModalName("")}
          fetchAgencyList={fetchAgencyList}
        />
      )}
    </div>
  );
}
