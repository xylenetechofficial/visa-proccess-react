import { useEffect, useState } from "react";
import EditModal from "./AgentCommission";
import PaymentDetail from "./PaymentDetail";
import { Box, Modal, styled } from "@mui/material";
import AccountDashboardTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { AccountDashboardInterface, AgentPaymentReceivedInterface, BulkPaymentInterface } from "../type";
import {
  createBulkPayment,
  createCashPayment,
  deleteAccountDashboard,
  readAccountDashboardList,
  readAgentPaymentReceivedList,
} from "../repository";


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
    useState<AccountDashboardInterface>({} as AccountDashboardInterface);

  const [modalName, setModalName] = useState("");
  const [agentPaymentReceivedList,setAgentPaymentReceivedList]= useState([])
  const onClickEdit = (modaltype: string, accountDashboard: AccountDashboardInterface) => {
    console.log(accountDashboard, "CCCCCC", modaltype)
    setAccountDashboard(accountDashboard);
    console.log("onClickEdit", modaltype); // Only Dev
    console.log(accountDashboard, modaltype); // Only Dev
    setModalName(modaltype);
  };



  const onAddBulkPayment = async (bulkPayment: BulkPaymentInterface) => {
    console.log("first", bulkPayment);
    await createBulkPayment(bulkPayment)

  }
  const onAddCashPayment = async (bulkPayment: BulkPaymentInterface) => {
    console.log("first", bulkPayment);
    await createCashPayment(bulkPayment)

  }

  const onAmountReceived =async (id:number)=>{
    const data :any=await readAgentPaymentReceivedList(id)
    console.log(data)
    if(data){
      setAgentPaymentReceivedList(data)
    }
  }

  

  const [accountDashboardList, setAccountDashboardList] = useState<
    AccountDashboardInterface[]
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
    // setAccountDashboardList(data);
  };
  useEffect(() => {
    fetchAccountDashboardList();
    
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Agent Commission"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>




        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />


      </CardHeader>


      {/*  AccountDashboard stable */}
      <AccountDashboardTable
        accountDashboardList={dataFiltered}
        onClickEdit={onClickEdit}
        onAmountReceived={onAmountReceived}
      />

      {/* <!-- Modal --> */}
      {/*  Payment details  */}
      {modalName !== "paymentdetails" ? "" :
        <Modal open={true}
          onClose={() => setModalName("")}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <PaymentDetail
            currentElement={editAccountDashboard}
            agentPaymentReceivedList={agentPaymentReceivedList}
            onClose={() => {
              setModalName(""), console.log(
                modalName, "SSSSSSSSS"
              )
            }}
            fetchAccountDashboardList={fetchAccountDashboardList}
          
          />
        </Modal>}
    

      {/* Agent Commission */}
      {modalName !== "agentcommission" ? "" :
        <Modal open={true}
          onClose={() => setModalName("")}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <EditModal
            currentElement={editAccountDashboard}
            onClose={() => {
              setModalName(""), console.log(
                modalName, "SSSSSSSSS"
              )
            }}
            fetchAccountDashboardList={fetchAccountDashboardList}
            onAddBulkPayment={onAddBulkPayment}
            onAddCashPayment={onAddCashPayment}
          />
        </Modal>
      }
      {/* <div className="mt-4">
        <CustomButton2 buttonText="Submit" onClick={() => console.log("sd")} />
      </div> */}
    </div>
  );
}
