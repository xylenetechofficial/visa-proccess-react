import { useEffect, useState } from "react";
import EditModal from "./Edit";
import { Box, styled } from "@mui/material";
import AccountDashboardTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import {CustomButton2,CustomNavbarV3,} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { AccountDashboardInterface, VisaProfesionInterface } from "../type";
import {deleteAccountDashboard,readAccountDashboardList} from "../repository";
import { AdditionalDataInterface } from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";

const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main( ) {

   
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
    
  const [editAccountDashboard, setAccountDashboard] =
    useState<AccountDashboardInterface>({} as AccountDashboardInterface);

  const [modalName, setModalName] = useState("");

  const onClickEdit = (accountDashboard: AccountDashboardInterface) => {
    setAccountDashboard(accountDashboard);
    console.log("onClickEdit"); // Only Dev
    console.log(accountDashboard); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (accountDashboard: AccountDashboardInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && accountDashboard.id) {
      await deleteAccountDashboard(accountDashboard.id);
      fetchAccountDashboardList();
    }
  };

  const [accountDashboardList, setAccountDashboardList] = useState<
    AccountDashboardInterface[]
  >([]);

  const [searchQuery, setSearchQuery] = useState("");

  // const filterData = (query: string, data: AccountDashboardInterface[]) => {
  const filterData = (query: string, data: any) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d:any) =>
        d.index_date.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, accountDashboardList);

  const [visaprofession, setVisaProfessionList] = useState<
    VisaProfesionInterface[]
  >([]);

  const fetchAccountDashboardList = async (page?:number) => {
    const data = await readAccountDashboardList({page: page ?? additionalData.pagination.page,
      status: "yes"});
    
    if (data) {
      setAccountDashboardList(data);
    }
    setAccountDashboardList(data);
  };
  useEffect(() => {
    fetchAccountDashboardList(additionalData.pagination.page);
   }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Account Dashboard"
        searchFunction={(query) => setSearchQuery(query)}
      />

<CardHeader>
     
          

        
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

       
      </CardHeader>
    

      {/*  AccountDashboard stable */}
      <AccountDashboardTable
        accountDashboardList={dataFiltered}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        snoBase={additionalData.pagination.sno_base}
  
      />
     

      {/* <!-- Modal --> */}

            {/* Edit */}
            {modalName !== "edit" ? "" :
                <EditModal
                    currentElement={editAccountDashboard}
                    onClose={() => setModalName("")}
                    fetchAccountDashboardList={fetchAccountDashboardList}
                    
                />}
                <br />
     <CustomButton2 buttonText="Submit" onClick={()=>console.log("sd")} />

     <br />
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchAccountDashboardList(e);
        }}
      />
    </div>
  );
}
