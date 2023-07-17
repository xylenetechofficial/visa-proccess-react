import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./Edit";
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
  deleteAccountDashboard,
  readAccountDashboardList,
} from "../repository";
import { SectorInterface } from "../../../masters/sector/type";
import { readSectorList } from "../../../masters/sector/repository";
import { readCompanyList } from "../../../masters/company/repository";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { readCountryList } from "../../../masters/country/repository";


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

  const onClickCreate = () => {
    setModalName("create");
  };

  const onClickEdit = (accountDashboard: AgentPaymentReceivedInterface) => {
    console.log(accountDashboard,"CCCCCC")
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
    setAccountDashboardList(data);
  };
  useEffect(() => {
    fetchAccountDashboardList();
    fetchSectorList();
    fetchcomapanyList();
    fetchCountryList();
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Agent Payment Received"
        searchFunction={(query) => setSearchQuery(query)}
      />

<CardHeader>
     
          

        
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

       
      </CardHeader>
    

      {/*  AccountDashboard stable */}
      <AccountDashboardTable
        accountDashboardList={dataFiltered}
        onClickEdit={onClickEdit}      
      />

      {/* <!-- Modal --> */}

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
            {modalName !== "edit" ? "" :
            <Modal open={true}
            
            onClose={() => setModalName("")}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                <EditModal
                    currentElement={editAccountDashboard}
                    onClose={() => {setModalName(""),console.log(
                      modalName,"SSSSSSSSS"
                    )}}
                    fetchAccountDashboardList={fetchAccountDashboardList}
                    companyList={companyList}
                    countryList={countryList}
                    sectorList={sectorList}
                />
                </Modal>}
     {/* <CustomButton2 buttonText="Submit" onClick={()=>console.log("sd")} /> */}
    </div>
  );
}
