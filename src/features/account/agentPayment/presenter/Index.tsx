import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
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
  UpdateContentBox,

} from "../../../../componenets/CoustomHeader";

import HeroPage from "./HeroPage";
// import CandidatePayment from "./AgentBulkPayment";
import PaymentBulkList from "./PaymentBulkList";
import AgentBulkPayment from "./AgentBulkPayment";
import CandidatePayment from "./CandidatePayment";
import PaymentDetailFromBulk from "./PaymentDetailFromBulk";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { AgentInterface } from "../../../masters/agent/type";
import { readAgentList } from "../../../masters/agent/repository";
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
  gridTemplateColumns: "200px 200px 200px",
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
  // ! EMG
  const [AgentID, setAgentID] = useState(0);
  const [AgentList, setAgentList] = useState<AgentInterface[]>([]);

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

  const fetchAgentList = async () => {
    const data = await readAgentList();
    if (data) {
      setAgentList(data);
    }
  }
  const fetchAgentPaymentList = async () => {
    // ! EMG
    const data = await readAgentPaymentList(AgentID);
    console.log(data, "jj");
    if (data) {
      setAgentPaymentList(data);
    }
    // setAgentPaymentList(data);
  };
  // ! EMG
  useEffect(() => {
    fetchAgentPaymentList()
  }, [])

  useEffect(() => {
    fetchAgentList()
    // fetchAgentPaymentList();
    fetchSectorList();
    fetchcomapanyList();
    fetchCountryList();
  }, []);
  const updateBulkPayment = async (data: any) => {
    console.log(data)
    const currentData: any = { "selection_list": data };
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

      <CardHeader2>
      {/* <UpdateContentBox> */}
      <div className="w-48">
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
        </div>
          <div className="w-48">
          <CustomSelectComponent
          label="Agent"
            onChange={(value: any) => setAgentID(parseInt(value))}
            options={selectOptionConveter({ options: AgentList, options_struct: { name: "name", value: "id" } })}
            value={AgentID}
          />
        </div>
        
        <div className=" w-48">
        <GreenButton
          text={"Submit "}
          onClick={() => {
            fetchAgentPaymentList()
            console.log(data)
          }}
        />
      </div>
      {/* </UpdateContentBox> */}
      </CardHeader2>

      <HeroPage props={AgentPaymentList} />

      <div className="flex bg-orange-500 w-64 mb-4">
        <SubHeading2 text="amount available for adjustment:" />
        <SubHeadingSpan text={AgentPaymentList?.amount_available_for_adjustment} />
      </div>

      {/* <CardHeader2> */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 mb-4">

        <AgentBulkPayment fetchAgentPaymentList={fetchAgentPaymentList} AgentID={AgentID} setAgentID={setAgentID}/>
        <CandidatePayment AgentPaymentList={AgentPaymentList} fetchAgentPaymentList={fetchAgentPaymentList} AgentID={AgentID}/>
        <PaymentBulkList AgentPaymentList={AgentPaymentList} setModalName={setModalName}/>
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
    {modalName ==="viewbulkpayment" ?
    
    <PaymentDetailFromBulk onClose={()=>setModalName('')} />
        :
        '' 

    }

      <GreenButton
          text={"Submit "}
          onClick={() => {
            updateBulkPayment(data)
            console.log(data)
          }}
        />
    </div>
  );
}
