import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { Box, Divider, styled } from "@mui/material";
import AgentPaymentTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { DirectPaymentInterface, VisaProfesionInterface } from "../type";
import {  createAgentPayment, deleteAgentPayment, readAdvancePaymentList, readAgentPaymentReceivedPaymentList, readDirectPaymentList } from "../repository";
import { SectorInterface } from "../../../masters/sector/type";
import { readSectorList } from "../../../masters/sector/repository";
import { readCompanyList } from "../../../masters/company/repository";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { readCountryList } from "../../../masters/country/repository";
import {

  SubHeading2,
  SubHeadingSpan,

} from "../../../../componenets/CoustomHeader";

import HeroPage from "./HeroPage";
// import CandidatePayment from "./AgentBulkPayment";
import PaymentBulkList from "./PaymentBulkList";
import CandidatePayment from "./CandidatePayment";
const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

const CardHeader2 = styled(Box)(() => ({
  display: "grid",
  gap: "5px",
  gridTemplateColumns: "auto auto auto",
  // paddingRight: "24px",
  // marginBottom: "18px",
}));

export default function Main(
  // props: {
  // onClose: any;
  // fetchAgentPaymentList: any;
  // sectorList: SectorInterface[];
  // companyList: CompanyInterface[];
  // countryList: CountryInterface[];
  // }
) {
  const initValue: DirectPaymentInterface = {
    outstanding_since_2015: 0,
    payment_against_2015: 0,
    balance_since_2015: 0,
    total_payment_received: 0,
    total_balance_outstanding: 0,
    payment_returned_to_agent: 0,
    cancelled_candidates: 0,
    rejected_candidates: 0,
    flight_candidates: 0,
    amount_available_for_adjustment: 0,
    table_data_list: [],

    bulk_payment_list: []
  };

  const [AgentPayment, setAgentPayment] = useState(initValue);
  const [data, setData] = useState<any>([])
  const [editAgentPayment, setEditAgentPayment] = useState<DirectPaymentInterface>(
    {} as DirectPaymentInterface
  );

  const [modalName, setModalName] = useState("");

  const onClickCreate = () => {
    setModalName("create");
  };

  // const onClickEdit = (AgentPayment: AgentPaymentInterface) => {
  const onClickEdit = (AgentPayment: any) => {
    setEditAgentPayment(AgentPayment);
    console.log("onClickEdit"); // Only Dev
    console.log(AgentPayment); // Only Dev
    setModalName("edit");
  };

  // const onClickDelete = async (AgentPayment: AgentPaymentInterface) => {
  const onClickDelete = async (AgentPayment: any) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && AgentPayment.id) {
      await deleteAgentPayment(AgentPayment.id);
      fetchAgentPaymentList();
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


  const [AgentPaymentList, setAgentPaymentList] = useState<any>([]);

  const [searchQuery, setSearchQuery] = useState("");

  // const filterData = (query: string, data: AgentPaymentInterface[]) => {
  //   if (!query) {
  //     return data;
  //   } else {
  //       return data
  //     return data.filter((d) =>
  //       d.index_date.toLowerCase().includes(query.toLowerCase())
  //        data;
  //     );
  //   }
  // };
  // const dataFiltered = filterData(searchQuery, AgentPaymentList);

 

  const fetchAgentPaymentList = async () => {
    const data = await readDirectPaymentList();
    console.log(data, "jj");
    const k= await readAgentPaymentReceivedPaymentList();
    console.log(k,"SSAAAA")
    if (data) {
      setAgentPaymentList(data);
    }
    // setAgentPaymentList(data);
  };
  useEffect(() => {
    fetchAgentPaymentList();
    
    fetchcomapanyList();
    fetchCountryList();
  }, []);
  const updateBulkPayment = async (data: any) => {
    const agentPayment={selection_list:data}
    
    await createAgentPayment(agentPayment)
     fetchAgentPaymentList();
  }
  return (
    <div>
      <CustomNavbarV3
        pageName="Direct Payments"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader >
        <GreenButton text="Add Advance Payment" onClick={()=>{
          console.log("modal open"),
          setModalName("create")
        }}/>
      </CardHeader >
      <HeroPage props={AgentPaymentList} />

      <div className="flex bg-orange-500 w-64 mb-4">
        <SubHeading2 text="amount available for adjustment:" />
        <SubHeadingSpan text={AgentPaymentList?.amount_available_for_adjustment} />
      </div>

      {/* <CardHeader2> */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 mb-4 h-96  ">
        <CandidatePayment AgentPaymentList={AgentPaymentList} fetchAgentPaymentList={fetchAgentPaymentList}/>
        <PaymentBulkList AgentPaymentList={AgentPaymentList}  />
      </div>

      {/* </CardHeader2> */}

      {/*  AgentPayment stable */}
      <AgentPaymentTable
        AgentPaymentList={AgentPaymentList}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        setData={setData}
        data={data}

      />

      {/* <!-- Modal --> */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => setModalName("")}
          readAdvancePaymentList={readAdvancePaymentList}
        />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          currentElement={editAgentPayment}
          onClose={() => setModalName("")}
          fetchAgentPaymentList={fetchAgentPaymentList}
          companyList={companyList}
          countryList={countryList}
          
        />
      )}
      <div className=" m-4">
        <GreenButton
          text={"Submit "}
          onClick={() => {
            updateBulkPayment(data)
          }}
        />
      </div>
    </div>
  );
}
