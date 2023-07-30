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
import { AccountDashboardInterface, VisaProfesionInterface ,AgentPaymentReceivedInterface, AgentCommissionInterface} from "../type";
import {
  createAgentCommission,
  deleteAccountDashboard,
  readAccountDashboardList,
} from "../repository";
import { SectorInterface } from "../../../masters/sector/type";
import { readSectorList } from "../../../masters/sector/repository";
import { readCompanyList } from "../../../masters/company/repository";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { readCountryList } from "../../../masters/country/repository";
import { SubHeading2 } from "../../../../componenets/CoustomHeader";
import { UnlabeledInput } from "../../../../componenets/Input";
import { readAccount } from "../../agentCommissions/repository";


const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main(

) {

   
    const [passportNo,setPassportNo]= useState<any>("")

  const [modalName, setModalName] = useState("");


  const onClickAdd = async(id:number,AgentCommission: number) => {
    
    
    console.log("onClickEdit"); // Only Dev
    console.log(AgentCommission); // Only Dev
    setModalName("");
    setPassportNo("")
    const flag = await createAgentCommission(id,AgentCommission);
   
  };






  const [countryList, setCountryList] = useState<AgentPaymentReceivedInterface>();

  const searchPassport = async (value:any) => {
    const data :any= await readAccount(value);
    console.log(data)
    if (data) {
      setCountryList(data);
    }
  };

 
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
  const dataFiltered = filterData(searchQuery, countryList);
  console.log(dataFiltered,"dataFiltered")

  return (
    <div>
      <CustomNavbarV3
        pageName="Agent Commission Add"
        searchFunction={(query) => setSearchQuery(query)}
      />


     
          

        
        {/* <CustomButton2 buttonText="Add filter" icon={<FaFilter />} /> */}
       <CardHeader>
      <SubHeading2 text="Passport No :"/>
      <UnlabeledInput type="text" value={passportNo} onchange={(value)=>setPassportNo(value)}/>
      
      <GreenButton text="search" onClick={()=>{setModalName("view"),searchPassport(passportNo)}} />
      
      <GreenButton text="View All" onClick={()=>{console.log("first")}} />
      </CardHeader>
      
    

      {/*  AccountDashboard stable */}
      {modalName==="view"  && (
      <AccountDashboardTable
        accountDashboardList={dataFiltered}
        countryList={countryList}
        setCountryList={setCountryList}
        onClickAdd={onClickAdd}
        setPassportNo={setPassportNo}
        setModalName={setModalName}      
      />
      )}

    </div>
  );
}
