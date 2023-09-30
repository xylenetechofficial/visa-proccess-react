import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import AccountDashboardTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { AccountDashboardInterface, AgentPaymentReceivedInterface, DelhiOtherDailyPaymentInterface } from "../type";
import {
  deleteAccountDashboard,
  readAccountDashboardList,
} from "../repository";
import { SectorInterface } from "../../../masters/sector/type";
import { readSectorList } from "../../../masters/sector/repository";
import { readCompanyList } from "../../../masters/company/repository";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { readCountryList } from "../../../masters/country/repository";
import  EditDelhiOtherPayment  from "./Edit";
import  AddInAccountPage  from "./PaymentDetail";


const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {



  const [editAccountDashboard, setAccountDashboard] =
    useState<DelhiOtherDailyPaymentInterface>({}as DelhiOtherDailyPaymentInterface);

  const [modalName, setModalName] = useState("");

  const onClickCreate = () => {
    setModalName("create");
  };

  const onClickEdit = (modaltype: string, accountDashboard: DelhiOtherDailyPaymentInterface) => {
    console.log(accountDashboard, "CCCCCC", modaltype)
    setAccountDashboard(accountDashboard);
    console.log("onClickEdit", modaltype); // Only Dev
    console.log(accountDashboard, modaltype); // Only Dev
    setModalName(modaltype);
  };

  const onClickDelete = async (accountDashboard: AccountDashboardInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && accountDashboard.id) {
      await deleteAccountDashboard(accountDashboard.id);
      fetchAccountDashboardList();
    }
  };



  const [accountDashboardList, setAccountDashboardList] = useState<
  DelhiOtherDailyPaymentInterface[]
  >([]);

  const [searchQuery, setSearchQuery] = useState("");

  // const filterData = (query: string, data: AccountDashboardInterface[]) => {
  const filterData = (query: string, data: any) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d: any) =>
        d.index_date.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, accountDashboardList);

  const fetchAccountDashboardList = async () => {
    const data = await readAccountDashboardList();

    if (data) {
      setAccountDashboardList(data);
    }
    setAccountDashboardList(data);
  };
  useEffect(() => {
    fetchAccountDashboardList();
    
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Delhi/Other Daily Payments"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />


      </CardHeader>


      {/*  AccountDashboard stable */}
      <AccountDashboardTable
        accountDashboardList={dataFiltered}
        onClickEdit={onClickEdit}
        modalName={modalName}
        setModalName={setModalName}
      />
  {modalName ==="editdelhiotherdailypayments" ?(
    <EditDelhiOtherPayment  onClickEdit={()=>console.log("edit")} setModalName={setModalName}/>
 ):""}
 {modalName==="addinAccount"? <AddInAccountPage 
     onClose= {()=>setModalName('')}
     fetchAccountDashboardList= {()=>fetchAccountDashboardList()}
     currentElement={editAccountDashboard}
     setAccountDashboard={setAccountDashboard}
     />
     :""
    }

      <div className="mt-3">
        <CustomButton2 buttonText="Submit" onClick={() => console.log("sd")} />
      </div>
    </div>
  );
}
