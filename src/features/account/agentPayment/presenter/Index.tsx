import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import AgentPaymentTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {  CustomNavbarV3} from "../../../../componenets/CustomComponents";
import { AgentPaymentInterface } from "../type";
import { addAgentPayment, deleteAgentPayment, readAgentPaymentList, readPaymentDetails } from "../repository";
import {

  SubHeading1,
  SubHeading2,
  SubHeadingSpan,
} from "../../../../componenets/CoustomHeader";

import HeroPage from "./HeroPage";
import PaymentBulkList from "./PaymentBulkList";
import AgentBulkPayment from "./AgentBulkPayment";
import CandidatePayment from "./CandidatePayment";
import PaymentDetailFromBulk from "./PaymentDetailFromBulk";
import PaymentDetailFromCandidate from "./PaymentDetailFromCandidate";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { AgentInterface } from "../../../masters/agent/type";
import { readAgentList } from "../../../masters/agent/repository";
import { UnlabeledInput } from "../../../../componenets/Input";

const CardHeader2 = styled(Box)(() => ({
  display: "grid",
  gap: "5px",
  gridTemplateColumns: "200px 200px 200px",
}));

export default function Main( ) {
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
  const [passportNo,setPassportNo]= useState('')
  const [modalName, setModalName] = useState("");
  const [detailData, setDetailData] = useState<any>({})
   
  const [AgentPaymentList, setAgentPaymentList] = useState<any>([]);
  // ! EMG
  const [AgentID, setAgentID] = useState(1);
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

  const [paymentDetail, setPaymentDetailList] = useState<
    any[]
  >([]);

  const fetchPaymentDetail = async (type: string, ele: any) => {
    // candidate_id
    // bulk_payment_id
    setDetailData(ele)
    const data: any = await readPaymentDetails(type, ele.id)
    console.log(type, ele.id, "SSSSS", data)
    if (data) {
      setPaymentDetailList(data)
    }
  }
  const fetchAgentList = async () => {
    const data = await readAgentList();
    if (data) {
      setAgentList(data);
    }
  }
  const fetchAgentPaymentList = async (name:string, value:any) => {
    // ! EMG
    const data = await readAgentPaymentList(name,value);
    console.log(data, "jj");
    if (data) {
      setAgentPaymentList(data);
    }
    // setAgentPaymentList(data);
  };
  // ! EMG

  useEffect(() => {
    // fetchAgentPaymentList()
    fetchAgentList();
  }, []);
  const updateBulkPayment = async (data: any) => {
    console.log(data)
    const currentData: any = { "selection_list": data };
    const datas = await addAgentPayment(currentData);
    setData([]);
    await fetchAgentPaymentList('agent_id',AgentID);

  }
  const agentOperation = async (value: any) => {
    setAgentID(parseInt(value))
    const filteredArray: any = AgentList.filter((item) => item.id === value);
  }
  const searchAgentPayment =()=>{
    
    if(passportNo){
      fetchAgentPaymentList('passport_no',passportNo);
      console.log("passport agent_id")
    }
    else{
      fetchAgentPaymentList('agent_id',AgentID);
      console.log("agent_id agent_id")
    }

  }
  return (
    <div>
      <CustomNavbarV3
        pageName="Agent Payment"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader2 >
        <div className="w-full">
          <CustomSelectComponent
            label="Agent"
            onChange={(value: any) => agentOperation(value)}
            options={selectOptionConveter({ options: AgentList, options_struct: { name: "name", value: "id" } })}
            value={AgentID}
          />
        </div>
        {/* <div className="w-20"> */}
          {/* <GreenButton
            text={"Submit "}
            onClick={() => {
              fetchAgentPaymentList()
              console.log(data)
            }}
          /> */}
        {/* </div> */}
        <div className="w-auto flex">
          <SubHeading1 text="Passport No  :" />
          <UnlabeledInput value={passportNo} onchange={(value) =>{setPassportNo(value)} } />
          <div className="ml-5 w-96">
            <GreenButton text="Search"  onClick={()=>searchAgentPayment()}/>
          </div>
        </div>
      </CardHeader2>

      <HeroPage props={AgentPaymentList} />

      <div className="flex bg-orange-500 w-64 mb-4">
        <SubHeading2 text="amount available for adjustment:" />
        <SubHeadingSpan text={AgentPaymentList?.amount_available_for_adjustment} />
      </div>

      {/* <CardHeader2> */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 mb-4">

        <AgentBulkPayment fetchAgentPaymentList={(name, value)=>fetchAgentPaymentList(name,value)} AgentID={AgentID} setAgentID={setAgentID} />
        <CandidatePayment AgentPaymentList={AgentPaymentList} fetchAgentPaymentList={(name, value)=>fetchAgentPaymentList(name,value)} AgentID={AgentID} />
        <PaymentBulkList AgentPaymentList={AgentPaymentList} setModalName={setModalName} fetchPaymentDetail={(type, id) => fetchPaymentDetail(type, id)} />
      </div>

      {/* </CardHeader2> */}

      {/*  AgentPayment stable */}
      <AgentPaymentTable
        AgentPaymentList={AgentPaymentList}
        setAgentPaymentList={setAgentPaymentList}
        setData={setData}
        data={data}
        setModalName={setModalName}
        fetchPaymentDetail={(type, id) => fetchPaymentDetail(type, id)}

      />

      {/* <!-- Modal --> */}

      {/* Edit */}
      {modalName === "viewbulkpayment" ?

        <PaymentDetailFromBulk onClose={() => setModalName('')} paymentDetail={paymentDetail} detailData={detailData} />
        :
        ''

      }
      {modalName === "viewpaymentdetailfromcandidaite" ?

        <PaymentDetailFromCandidate onClose={() => setModalName('')} paymentDetail={paymentDetail} detailData={detailData} />
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
