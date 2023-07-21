import { useEffect, useState } from "react";
import EditModal from "./AgentCommission";
import PaymentDetail from "./PaymentDetail";
import { Box,  Modal, styled } from "@mui/material";
import AccountDashboardTable from "./Table";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import {
  createAccountDashboard,
  readAccountDashboardList,
} from "../repository";
import {  CustomSelectComponentUnlabeled } from "../../../../componenets/SelectBox";
import { AddSelectionPenaltyAfterDeploymentInterface, PenaltyAfterDeploymentDashboardInterface } from "../type";


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
    useState<any>({} as any);

  const [modalName, setModalName] = useState("");
  const [status, setStatus]= useState("yes");
  const [data, setData] = useState<AddSelectionPenaltyAfterDeploymentInterface>()
  const onClickCreate = async (data: any) => {
    console.log(data, "aaaaa");
    await createAccountDashboard(data)
  };

  // const onClickUpdate = async(modaltype: string, accountDashboard: AgentPaymentReceivedInterface) => {
  //     await updateAccountDashboard(data);
  // };

  const [accountDashboardList, setAccountDashboardList] = useState<PenaltyAfterDeploymentDashboardInterface[]>([])
  // PenaltyAfterDeploymentDashboardInterface[]
  // ([]);

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

  const fetchAccountDashboardList = async (status:string) => {
    const data :PenaltyAfterDeploymentDashboardInterface[] = await readAccountDashboardList(status);

    if (data) {
      setAccountDashboardList(data);
    }
    // setAccountDashboardList(data);
  };
  useEffect(() => {
    fetchAccountDashboardList(status);
  }, [status]);

  return (
    <div>
      <CustomNavbarV3
        pageName="Penalty After Deployment"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>

        {/* <SubHeading2 text="Company :"/>
        <Input /> */}

        {/* <CustomSelectComponent label="" value="" options={[]} onChange={()=>{console.log("first")}}/> */}

        {/* <SubHeading2 text="Party Code :"/>
        <Input /> */}
        {/* <CustomSelectComponent label="" value="" options={[]} onChange={()=>{console.log("first")}}/> */}

        {/* <SubHeading2 text="Agent :"/>
        <Input /> */}
        {/* <CustomSelectComponent label="" value="" options={[]} onChange={()=>{console.log("first")}}/> */}

        {/* <SubHeading2 text="Status"/>
        <Input /> */}
        {/* <CustomSelectComponent label="" value="" options={[]} onChange={()=>{console.log("first")}}/> */}

        {/* <SubHeading2 text="Company"/>
        <Input /> */}
        {/* <CustomSelectComponent label="" value="" options={[]} onChange={()=>{console.log("first")}}/> */}


        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
        <CustomSelectComponentUnlabeled value={status} onChange={(value)=>setStatus(value)} options={[{name:"Yes",value:"yes"},{name:"No",value:"no"}]} />

      </CardHeader>


      {/*  AccountDashboard stable */}
      <AccountDashboardTable
        accountDashboardList={dataFiltered}
        setAccountDashboardList={setAccountDashboardList}
        onClickCreate={onClickCreate}
        data={data}
        setData={setData}
        fetchAccountDashboardList={fetchAccountDashboardList}
      />

      {/* <!-- Modal --> */}
      {/* {modalName !== "paymentdetails" ? "" :
        <Modal open={true}
          onClose={() => setModalName("")}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <PaymentDetail
            currentElement={editAccountDashboard}
            onClose={() => {
              setModalName(""), console.log(
                modalName, "SSSSSSSSS"
              )
            }}
            // fetchAccountDashboardList={fetchAccountDashboardList}
            companyList={companyList}
            countryList={countryList}
            sectorList={sectorList}
          />
        </Modal>} */}
      {/* Create */}
      {/* {modalName !== "create" ? "" :
                <CreateModal
                    onClose={() => setModalName("")}
                    fetchAccountDashboardList={fetchAccountDashboardList}
                    companyList={companyList}
                    countryList={countryList}
                    sectorList={sectorList}
                />
                } */}

      {/* Edit */}
      {/* {modalName !== "agentcommission" ? "" :
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
            // fetchAccountDashboardList={fetchAccountDashboardList}

          />
        </Modal>} */}

    </div>
  );
}
