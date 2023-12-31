import { useEffect, useState } from "react";
import { Box, Modal, styled } from "@mui/material";
import AccountDashboardTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";

import {
  createAccountDashboard,
  readAccountDashboardList,
} from "../repository";
import { SectorInterface } from "../../../masters/sector/type";
import { readSectorList } from "../../../masters/sector/repository";
import { readCompanyList } from "../../../masters/company/repository";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { readCountryList } from "../../../masters/country/repository";
import { CustomSelectComponentUnlabeled } from "../../../../componenets/SelectBox";
import { AddIncentiveInterface } from "../type";


const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {

   

  const [modalName, setModalName] = useState("");
  const [status, setStatus]= useState("yes");
  const [data, setData] = useState<any>({ job_order_list: [] })
  const [updateIncentive,setUpdateIncentive]=useState<any>({
    job_order_list:[
      {
        id:0,
        manager_incentive:0,
        staff_incentive:0
      }
    ]
  });
  const [addIncentive,setIncentive]=useState<AddIncentiveInterface[]>([])
  const onClickCreate = async(data:AddIncentiveInterface) => {
    setModalName("create");
    console.log(data,"DDDDDDDDDDDDDDDDDDDDDD",addIncentive)
    await createAccountDashboard(addIncentive);
    await  fetchAccountDashboardList(status)
  };

  const onClickEdit = (modaltype:string, accountDashboard: any) => {
    console.log(accountDashboard,"CCCCCC",modaltype)
    
    console.log("onClickEdit",modaltype); // Only Dev
    console.log(accountDashboard,modaltype); // Only Dev
    setModalName(modaltype);
  };



  const [accountDashboardList, setAccountDashboardList] = useState<any>([]);

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

  const fetchAccountDashboardList = async (value:string) => {
    const data = await readAccountDashboardList(value);
    console.log(data,"AAAAAAAAA")
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
        pageName="Incentives"
        searchFunction={(query) => setSearchQuery(query)}
      />

<CardHeader>
     
          

        
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
        <CustomSelectComponentUnlabeled value="" options={[{name:"Yes",value:"yes"},{name:"No", value:"no"}]} onChange={(value)=>setStatus(value)}/>
       
      </CardHeader>
    

      {/*  AccountDashboard stable */}
      <AccountDashboardTable
        // accountDashboardList={dataFiltered}
        accountDashboardList={accountDashboardList}
        setAccountDashboardList={setAccountDashboardList}
        onClickEdit={onClickEdit}  
        updateIncentive={updateIncentive}   
        setUpdateIncentive={setUpdateIncentive} 
        data={data}
        setData={setData}
        onChange={(value)=>setIncentive(value)}
        onClickCreate={onClickCreate}
      />

                
    </div>
  );
}
