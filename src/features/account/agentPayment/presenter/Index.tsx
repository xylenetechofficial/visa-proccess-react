import { useEffect, useState } from "react";
import { Box,  styled } from "@mui/material";
import AgentPaymentTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { AgentPaymentInterface, VisaProfesionInterface } from "../type";
import { addAgentPayment, deleteAgentPayment, readAgentPaymentList } from "../repository";
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
import AgentBulkPayment from "./AgentBulkPayment";
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
  const initValue: AgentPaymentInterface = {
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
  const [editAgentPayment, setEditAgentPayment] = useState<AgentPaymentInterface>(
    {} as AgentPaymentInterface
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

  // useEffect(() => {
  // }, [editAgentPayment, modalName])
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

  // const [AgentPaymentList, setAgentPaymentList] = useState<AgentPaymentInterface[]>([]);
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

  const [visaprofession, setVisaProfessionList] = useState<
    VisaProfesionInterface[]
  >([]);

  const fetchAgentPaymentList = async () => {
    const data = await readAgentPaymentList();
    console.log(data, "jj");
    if (data) {
      setAgentPaymentList(data);
    }
    // setAgentPaymentList(data);
  };
  useEffect(() => {
    fetchAgentPaymentList();
    fetchSectorList();
    fetchcomapanyList();
    fetchCountryList();
  }, []);
  const updateBulkPayment = async (data: any) => {
    console.log(data)
    const currentData :any={"selection_list":data};
    const datas = await addAgentPayment(currentData);
    setData([]);
    await fetchAgentPaymentList();
    
  }
  return (
    <div>
      <CustomNavbarV3
        pageName="Agent Payment"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

      </CardHeader>

      <HeroPage props={AgentPaymentList} />

      <div className="flex bg-orange-500 w-64 mb-4">
        <SubHeading2 text="amount available for adjustment:" />
        <SubHeadingSpan text={AgentPaymentList?.amount_available_for_adjustment} />
      </div>

      {/* <CardHeader2> */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 mb-4">

        <AgentBulkPayment fetchAgentPaymentList={fetchAgentPaymentList}/>
        <CandidatePayment AgentPaymentList={AgentPaymentList} fetchAgentPaymentList={fetchAgentPaymentList}/>
        <PaymentBulkList AgentPaymentList={AgentPaymentList} />
      </div>

      {/* </CardHeader2> */}

      {/*  AgentPayment stable */}
      <AgentPaymentTable
        AgentPaymentList={AgentPaymentList}
        setAgentPaymentList={setAgentPaymentList}
        setData={setData}
        data={data}

      />

      {/* <!-- Modal --> */}

      {/* Edit */}
      <div className=" m-4">
        <GreenButton
          text={"Submit "}
          onClick={() => {
            updateBulkPayment(data)
            console.log(data)
          }}
        />
      </div>
    </div>
  );
}
