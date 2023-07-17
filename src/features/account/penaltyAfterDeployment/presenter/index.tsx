import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./AgentCommission";
import PaymentDetail from "./PaymentDetail";
import { Box, Input, Modal, styled } from "@mui/material";
import AccountDashboardTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { AccountDashboardInterface, VisaProfesionInterface, AgentPaymentReceivedInterface } from "../type";
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
import { SubHeading2 } from "../../../../componenets/CoustomHeader";
import { CustomSelectComponent, CustomSelectComponentUnlabeled } from "../../../../componenets/SelectBox";


const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main(
  //     props: {
  //   onClose: () => void;
  //   fetchAccountDashboardList: () => void;
  //   currentElement: AccountDashboardInterface;
  //   sectorList: SectorInterface[];
  //   companyList: CompanyInterface[];
  //   countryList: CountryInterface[];
  // }
) {



  const [editAccountDashboard, setAccountDashboard] =
    useState<AgentPaymentReceivedInterface>({} as AgentPaymentReceivedInterface);

  const [modalName, setModalName] = useState("");
  const [status, setStatus]= useState("yes");
  const [data, setData] = useState<any>({ selection_list: [] })
  const onClickCreate = async (data: any) => {
    console.log(data, "aaaaa");
    await createAccountDashboard(data)
  };

  const onClickUpdate = async(modaltype: string, accountDashboard: AgentPaymentReceivedInterface) => {
      await updateAccountDashboard(data);
  };

  const onClickDelete = async (accountDashboard: AccountDashboardInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && accountDashboard.id) {
      await deleteAccountDashboard(accountDashboard.id);
      fetchAccountDashboardList(status);
    }
  };

  const [sectorList, setSectorList] = useState<SectorInterface[]>([]);
  const fetchSectorList = async () => {
    const data = await readSectorList();
    if (data) {
      setSectorList(data);
    }
  };

  const [companyList, setCompanyList] = useState<CompanyInterface[]>([]);
  const fetchcomapanyList = async () => {
    const data = await readCompanyList();
    if (data) {
      setCompanyList(data);
    }
  };

  const [countryList, setCountryList] = useState<CountryInterface[]>([]);
  const fetchCountryList = async () => {
    const data = await readCountryList();
    if (data) {
      setCountryList(data);
    }
  };

  const [accountDashboardList, setAccountDashboardList] = useState<any>([])
  // AccountDashboardInterface[]
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
    const data = await readAccountDashboardList(status);

    if (data) {
      setAccountDashboardList(data);
    }
    // setAccountDashboardList(data);
  };
  useEffect(() => {
    fetchAccountDashboardList(status);
    fetchSectorList();
    fetchcomapanyList();
    fetchCountryList();
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
      {modalName !== "paymentdetails" ? "" :
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
        </Modal>}
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
            // fetchAccountDashboardList={fetchAccountDashboardList}

          />
        </Modal>}

    </div>
  );
}
