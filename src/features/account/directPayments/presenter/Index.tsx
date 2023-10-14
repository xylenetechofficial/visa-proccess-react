import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { Box, styled } from "@mui/material";
import AgentPaymentTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { AddSelectionAgentPaymentInterface, AgentPaymentByIDInterface, DirectPaymentInterface } from "../type";
import { createAgentPayment, deleteAgentPayment, readAdvancePaymentList, readAgentPaymentReceivedPaymentList, readDirectPaymentList } from "../repository";
import { readCompanyList } from "../../../masters/company/repository";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { readCountryList } from "../../../masters/country/repository";
import {

  SubHeading1,
  SubHeading2,
  SubHeadingSpan,
  UpdateContentBox,

} from "../../../../componenets/CoustomHeader";

import PaymentDetailFromBulk from "./PaymentDetailFromBulk";
import PaymentDetailFromCandidate from "./PaymentDetailFromCandidate";
import HeroPage from "./HeroPage";
// import CandidatePayment from "./AgentBulkPayment";
import PaymentBulkList from "./PaymentBulkList";
import CandidatePayment from "./CandidatePayment";
import { readPaymentDetails } from "../../agentPayment/repository";
import { UnlabeledInput } from "../../../../componenets/Input";
import { CustomSelectComponent, CustomSelectComponentUnlabeled } from "../../../../componenets/SelectBox";
import { useUserAuth } from "../../../context/UserAuthContext";
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

export default function Main() {
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

    bulk_payment_list: [],
    all_bulk_payment_list:[],
  };
  const [AgentId, setAgentId] = useState(0);
  const [passportNo, setPassportNo] = useState('')
  const [AgentPayment, setAgentPayment] = useState(initValue);
  const [data, setData] = useState<any>([])
  const [editAgentPayment, setEditAgentPayment] = useState<DirectPaymentInterface>(
    {} as DirectPaymentInterface
  );
  const [detailData, setDetailData] = useState<any>({})
  const [modalName, setModalName] = useState("");

  const [paymentDetail, setPaymentDetailList] = useState<any[]>([]);
  const onClickCreate = () => {
    setModalName("create");
  };

  const initialAgentState: AgentPaymentByIDInterface = {
    agent_id: 1,
    passport_no: ''
  }
  const [agentBy, setAgentBy] = useState(initialAgentState)

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
      // fetchAgentPaymentList('agent_id',AgentPaymentList.agent_id);
      await fetchAgentPaymentList(agentBy);
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



  const fetchAgentPaymentList = async (value: AgentPaymentByIDInterface) => {
    const data = await readDirectPaymentList(value);
    console.log(data, "jj");
    // const k= await readAgentPaymentReceivedPaymentList();
    // console.log(k,"SSAAAA")
    if (data) {
      setAgentPaymentList(data);
    }
    // setAgentPaymentList(data);
  };
  // const onChangeAgent =(value:any)=>{
  //   setAgentId(value);
  //   fetchAgentPaymentList(Agentby);
  // }

  const updateBulkPayment = async (data: AddSelectionAgentPaymentInterface[]) => {

    const list = data.filter((item) => item?.id !== undefined)
    const agentPayment = { "selection_list": list }

    const res = await createAgentPayment(agentPayment)
    if (res) {
      fetchAgentPaymentList(agentBy);
    }
  }
  return (
    <div>
      <CustomNavbarV3
        pageName="Direct Payments"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader2 >

        <div className="w-72 flex">
          <CustomSelectComponent label="Agent"
            options={[{ name: "DIRECT", value: '1' }, { name: "CO REFFERED ", value: '2' }]}
            value={AgentId} onChange={(value: number) => {
              localStorage.setItem('agentId', JSON.stringify(value));
              setAgentBy({ ...agentBy, agent_id: value }), setAgentId(value)
              console.log(value)
            }} />
        </div>
        <div className="w-auto flex mb-5">
          <SubHeading1 text="Passport No  :" />
          <UnlabeledInput value={passportNo} onchange={(value) => {
            setAgentBy({ ...agentBy, passport_no: value }),
              setPassportNo(value)
          }} />
          <div className="ml-5 w-96">
            <GreenButton text="Search" onClick={async () => {
              fetchAgentPaymentList(agentBy)
              //  await readDirectPaymentList(agentBy)
            }} />
          </div>
        </div>
        <div className="w-96 float-right">
          <GreenButton text="Add Advance Payment" onClick={() => {
            console.log("modal open"),
              setModalName("create")
          }} />
        </div>
      </CardHeader2 >
      <HeroPage props={AgentPaymentList} />

      <div className="flex bg-orange-500 w-64 mb-4">
        <SubHeading2 text="amount available for adjustment:" />
        <SubHeadingSpan text={AgentPaymentList?.amount_available_for_adjustment} />
      </div>

      {/* <CardHeader2> */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 mb-4 h-96  ">
        <CandidatePayment AgentPaymentList={AgentPaymentList} fetchAgentPaymentList={() => fetchAgentPaymentList(agentBy)} AgentID={agentBy} />

        <PaymentBulkList AgentPaymentList={AgentPaymentList} setModalName={setModalName} fetchPaymentDetail={(type, id) => fetchPaymentDetail(type, id)} />
      </div>

      {/* </CardHeader2> */}

      {/*  AgentPayment stable */}
      <AgentPaymentTable
        // ######
        agentBy={agentBy}
        AgentPaymentList={AgentPaymentList}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        setData={setData}
        data={data}
        setModalName={setModalName}
        fetchPaymentDetail={(type, id) => fetchPaymentDetail(type, id)}

      />

      {/* <!-- Modal --> */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => {
            fetchAgentPaymentList(agentBy)
            setModalName("")
          }}
          readAdvancePaymentList={readAdvancePaymentList}
        // fetchAgentPaymentList={(name, value) => fetchAgentPaymentList({agent_id:agentBy.agent_id,passport_no:agentBy.passport_no})}
        />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          currentElement={editAgentPayment}
          onClose={() => setModalName("")}
          fetchAgentPaymentList={() => fetchAgentPaymentList(agentBy)}
          companyList={companyList}
          countryList={countryList}

        />
      )}
      {modalName === "viewbulkpayment" ?

        <PaymentDetailFromBulk onClose={() => setModalName('')} paymentDetail={paymentDetail} detailData={detailData} AgentPaymentList={AgentPaymentList} />
        :
        ''

      }
      {modalName === "viewpaymentdetailfromcandidaite" ?

        <PaymentDetailFromCandidate onClose={() => setModalName('')} paymentDetail={paymentDetail} detailData={detailData} />
        :
        ''

      }
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
