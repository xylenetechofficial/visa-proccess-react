import { useState } from "react";
import { Box, styled } from "@mui/material";
import AgentCommissionTable from "./Table";
import { GreenButton } from "../../../../componenets/CustomButton";
import { CustomNavbarV3, } from "../../../../componenets/CustomComponents";
import { AgentPaymentReceivedInterface } from "../type";
import { createAgentCommission } from "../repository";
import { SubHeading2 } from "../../../../componenets/CoustomHeader";
import { UnlabeledInput } from "../../../../componenets/Input";
import { readAccount } from "../../agentCommissions/repository";
import { AdditionalDataInterface } from "../../../../utils/api_helper";
import { useUserAuth } from "../../../context/UserAuthContext";


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

  const [passportNo, setPassportNo] = useState<any>("")

  const [modalName, setModalName] = useState("");

  const onClickAdd = async (id: number, AgentCommission: number) => {
    // console.log("onClickEdit"); // Only Dev
    // console.log(AgentCommission); // Only Dev
    setModalName("");
    setPassportNo("")
     await createAgentCommission(id, AgentCommission);
  };

  const [agentPaymentReceived, setAgentPaymentReceived] = useState<AgentPaymentReceivedInterface>({} as AgentPaymentReceivedInterface);

  const searchPassport = async (value: any) => {
    const data: any = await readAccount(value);
    console.log(data)
    if (data) {
      setAgentPaymentReceived(data);
    }
  };
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
  const dataFiltered = filterData(searchQuery, agentPaymentReceived);
  return (
    <div>
      <CustomNavbarV3
        pageName="Agent Commission Add"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <SubHeading2 text="Passport No :" />
        <UnlabeledInput type="text" value={passportNo} onchange={(value) => setPassportNo(value)} />
        <GreenButton text="search" onClick={() => { setModalName("view"), searchPassport(passportNo) }} />
        <GreenButton text="View All" onClick={() => { console.log("first") }} />
      </CardHeader>
      {/*  AgentCommissionTable stable */}
      {modalName === "view" && (
        <AgentCommissionTable
          accountDashboardList={dataFiltered}
          agentPaymentReceived={agentPaymentReceived}
          setAgentPaymentReceived={setAgentPaymentReceived}
          onClickAdd={onClickAdd}
          setPassportNo={setPassportNo}
          setModalName={setModalName}
        />
      )}

    </div>
  );
}
