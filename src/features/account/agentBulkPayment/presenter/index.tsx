import { useEffect, useState } from "react";
import PaymentDetail from "./PaymentDetail";
import { Box, Modal, styled } from "@mui/material";
import AccountDashboardTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { AccountDashboardInterface, VisaProfesionInterface ,AgentPaymentReceivedInterface} from "../type";
import {
  createAccountDashboard,
  deleteAccountDashboard,
  readAccountDashboardList,
  updateAccountDashboard,
} from "../repository";
import { SectorInterface } from "../../../masters/sector/type";
import { readSectorList } from "../../../masters/sector/repository";
import { readCompanyList } from "../../../masters/company/repository";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { readCountryList } from "../../../masters/country/repository";
import EditModal from './Edit';


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
    useState<AgentPaymentReceivedInterface>({} as AgentPaymentReceivedInterface);

  const [modalName, setModalName] = useState("");

  const onClickCreate = async(data:any) => {
 await createAccountDashboard(data)
 fetchAccountDashboardList();
  
  };

  const onClickEdit = ( accountDashboard: AgentPaymentReceivedInterface) => {
    console.log(accountDashboard,"CCCCCC")
    setAccountDashboard(accountDashboard);
    console.log("onClickEdit"); // Only Dev
    console.log(accountDashboard); // Only Dev
    // setModalName(modaltype);
  };
  const onClickUpdate = async( id:number ,accountDashboard: AgentPaymentReceivedInterface) => {
    console.log(id,accountDashboard,"CCCCCC")
    await updateAccountDashboard(id, accountDashboard);
    console.log("onClickUpdate"); // Only Dev
    console.log(accountDashboard); // Only Dev
    // setModalName(modaltype);
    await  fetchAccountDashboardList();
  };

  const onClickDelete = async (accountDashboard: any) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && accountDashboard.id) {
      await deleteAccountDashboard(accountDashboard.id);
    await  fetchAccountDashboardList();
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

  const fetchAccountDashboardList = async () => {
    const data = await readAccountDashboardList();
    
    if (data) {
      setAccountDashboardList(data);
    }
    // setAccountDashboardList(data);
  };
  useEffect(() => {
    fetchAccountDashboardList();
   
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Agent Bulk Payment "
        searchFunction={(query) => setSearchQuery(query)}
      />

<CardHeader>
     
          

        
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
        <CustomButton2 buttonText="Add AGENT BULK PAYMENT" onClick={()=>{setModalName("addAgentBulkPayment")}} />

       
      </CardHeader>
    

      {/*  AccountDashboard stable */}
      <AccountDashboardTable
        accountDashboardList={dataFiltered}
        onClickEdit={onClickEdit}      
        onClickDelete={onClickDelete}
        setModalName={setModalName}      
      />

      {/* <!-- Modal --> */}
      {modalName !== "addAgentBulkPayment" ? "" :
            <Modal open={true}
            onClose={() => setModalName("")}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                <PaymentDetail
                    accountDashboardList={dataFiltered}
                    currentElement={editAccountDashboard}
                    onClose={() => {setModalName(""),console.log(
                      modalName,"SSSSSSSSS"
                    )}}
                    fetchAccountDashboardList={fetchAccountDashboardList}
                    onClickCreate={onClickCreate}
                />
                </Modal>}
            {/* Create */}
            {modalName !== "edit" ? "" :
              <Modal open={true}
              onClose={() => setModalName("")}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">
                <EditModal
                    onClose={() => setModalName("")}
                    fetchAccountDashboardList={fetchAccountDashboardList}
                      currentElement={editAccountDashboard}
                      onClickUpdate={onClickUpdate}
                />
               </Modal> }

            
          <div className="mt-3">
     {/* <CustomButton2 buttonText="Submit" onClick={()=>console.log("sd")} /> */}
    </div>
    </div>
  );
}
