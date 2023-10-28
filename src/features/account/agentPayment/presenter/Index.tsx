import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import AgentPaymentTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import { CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { AgentPaymentByIDInterface, AgentPaymentInterface } from "../type";
import {
  addAgentPayment,
  deleteAgentPayment,
  readAgentPaymentList,
  readPaymentDetails,
} from "../repository";
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
import {
  CustomSelectComponent,
  selectOptionConveter,
} from "../../../../componenets/SelectBox";
import { AgentInterface } from "../../../masters/agent/type";
import { readAgentList } from "../../../masters/agent/repository";
import { UnlabeledInput } from "../../../../componenets/Input";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";

const CardHeader2 = styled(Box)(() => ({
  display: "grid",
  gap: "5px",
  gridTemplateColumns: "200px 200px 200px",
}));

export default function Main() {
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

    bulk_payment_list: [],
    all_bulk_payment_list: [],
  };

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

  const [AgentPayment, setAgentPayment] = useState(initValue);
  const [data, setData] = useState<any>([]);
  const [editAgentPayment, setEditAgentPayment] =
    useState<AgentPaymentInterface>({} as AgentPaymentInterface);
  const [passportNo, setPassportNo] = useState("");
  const [modalName, setModalName] = useState("");
  const [detailData, setDetailData] = useState<any>({});

  const [AgentPaymentList, setAgentPaymentList] = useState<any>([]);
  // ! EMG
  const [AgentID, setAgentID] = useState(1);
  const [AgentList, setAgentList] = useState<AgentInterface[]>([]);
  const initialAgentState: AgentPaymentByIDInterface = {
    agent_id: 0,
    passport_no: "",
  };
  const [agentBy, setAgentBy] = useState(initialAgentState);
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

  const [paymentDetail, setPaymentDetailList] = useState<any[]>([]);

  const fetchPaymentDetail = async (type: string, ele: any) => {
    // candidate_id
    // bulk_payment_id
    setDetailData(ele);
    const data: any = await readPaymentDetails(type, ele.id);
    console.log(type, ele.id, "SSSSS", data);
    if (data) {
      setPaymentDetailList(data);
    }
  };
  const fetchAgentList = async (page?: number) => {
    const data = await readAgentList(false, "agent_payment", page ?? 1);
    if (data) {
      setAgentList(data);
    }

    setAdditionalData(await PaginationManager.getData());
  };
  const fetchAgentPaymentList = async (AgentBy: AgentPaymentByIDInterface) => {
    // ! EMG
    const data = await readAgentPaymentList(AgentBy);
    console.log(data, "jj");
    if (data) {
      setAgentPaymentList(data);
    }
  };
  // ! EMG

  useEffect(() => {
    fetchAgentList(additionalData.pagination.page);
  }, []);
  const updateBulkPayment = async (data: any) => {
    console.log(data);
    const list = data.filter((item: any) => item?.id !== undefined);
    console.log(list, "AAAAA)))))))", data);
    const currentData: any = { selection_list: list };
    const datas = await addAgentPayment(currentData);
    setData([]);
    // await fetchAgentPaymentList('agent_id', AgentID);
    if (datas) {
      await fetchAgentPaymentList(agentBy);
    }
  };
  const agentOperation = async (value: number) => {
    setAgentID(value);
    const filteredArray: any = AgentList.filter((item) => item.id === value);
  };
  const searchAgentPayment = () => {
    fetchAgentPaymentList(agentBy);
  };
  return (
    <div>
      <CustomNavbarV3
        pageName="Agent Payment"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader2>
        <div className="w-full">
          <CustomSelectComponent
            label="Agent"
            onChange={(value: number) => {
              agentOperation(value),
                setAgentBy({ ...agentBy, agent_id: value }),
                console.log(value, "AAAAAA");
            }}
            options={selectOptionConveter({
              options: AgentList,
              options_struct: { name: "name", value: "id" },
            })}
            value={AgentID}
          />
        </div>
        <div className="w-auto flex">
          <SubHeading1 text="Passport No  :" />
          <UnlabeledInput
            value={passportNo}
            onchange={(value) => {
              setPassportNo(value),
                setAgentBy({ ...agentBy, passport_no: value });
            }}
          />
          <div className="ml-5 w-96">
            <GreenButton text="Search" onClick={() => searchAgentPayment()} />
          </div>
        </div>
      </CardHeader2>
      <HeroPage props={AgentPaymentList} />
      <div className="flex bg-orange-500 w-64 mb-4">
        <SubHeading2 text="amount available for adjustment:" />
        <SubHeadingSpan
          text={AgentPaymentList?.amount_available_for_adjustment}
        />
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 mb-4">
        <AgentBulkPayment
          fetchAgentPaymentList={(name, value) =>
            fetchAgentPaymentList({
              agent_id: agentBy.agent_id,
              passport_no: agentBy.passport_no,
            })
          }
          AgentID={AgentID}
          setAgentID={setAgentID}
        />
        <CandidatePayment
          AgentPaymentList={AgentPaymentList}
          fetchAgentPaymentList={(name, value) =>
            fetchAgentPaymentList({
              agent_id: agentBy.agent_id,
              passport_no: agentBy.passport_no,
            })
          }
          AgentID={AgentID}
        />
        <PaymentBulkList
          AgentPaymentList={AgentPaymentList}
          setModalName={setModalName}
          fetchPaymentDetail={(type, id) => fetchPaymentDetail(type, id)}
        />
      </div>
      {/*  AgentPayment table */}
      <AgentPaymentTable
        AgentPaymentList={AgentPaymentList}
        setAgentPaymentList={setAgentPaymentList}
        setData={setData}
        data={data}
        setModalName={setModalName}
        fetchPaymentDetail={(type, id) => fetchPaymentDetail(type, id)}
        snoBase={additionalData.pagination.sno_base}
      />
     
      {/* <!-- Modal --> */}
      {modalName === "viewbulkpayment" ? (
        <PaymentDetailFromBulk
          onClose={() => setModalName("")}
          paymentDetail={paymentDetail}
          detailData={detailData}
          AgentPaymentList={AgentPaymentList}
        />
      ) : (
        ""
      )}
      {modalName === "viewpaymentdetailfromcandidaite" ? (
        <PaymentDetailFromCandidate
          onClose={() => setModalName("")}
          paymentDetail={paymentDetail}
          detailData={detailData}
        />
      ) : (
        ""
      )}
      <br />
      <GreenButton
        text={"Submit "}
        onClick={() => {
          updateBulkPayment(data);
          console.log(data);
        }}
      />
<br /><br />
<Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchAgentList(e);
        }}
      />
    </div>
  );
}
