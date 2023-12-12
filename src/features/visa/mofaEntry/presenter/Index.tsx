import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { Box, styled } from "@mui/material";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { MofaPaymentInterface, Mofa_Entry_Candidate_Interface } from "../type";
import { deleteMofaEntry, readMofaEntryCandiateList, readMofaPaymentList } from "../repository";
import Table from "./Table";
import { GreenButton } from "../../../../componenets/CustomButton";
import { Heading6 } from "../../../../componenets/CoustomHeader";
import MofaPaymentTable from "./MofaPaymentTable";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
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
const initValue: Mofa_Entry_Candidate_Interface = {
  id: 0,
  name: "",
  passport_no: "",
  actual_profession: "",
  division: "",
  agent_id:0,
  agent_name: "",
  rs_name: "",
  rm_name: "",
  rc_name: "",
  visa_profession: "",
  mofa_number: "",
  pp_copy: "",
  pp_issued_date: "",
  pp_expiry_date: "",
  place_of_issue: "",
  date_of_birth: "",
  place_of_birth: "",
  address: "",
  religion: "",
  payment_from: "",
  select_status: "",

  visa_issue_date: "",
  visa_issue_date_on_pp: "",
};
export default function Main() {
  const [CandidateList, setCandidateList] = useState<
    Mofa_Entry_Candidate_Interface[]
  >([]);
  const [currentElement, setCurrentElement] =
    useState<Mofa_Entry_Candidate_Interface>(initValue);

  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

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

  const filterData = (
    query: string,
    data: Mofa_Entry_Candidate_Interface[]
  ) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, CandidateList);

  const onClickCreate = () => {
    setModalName("create");
  };

  const onClickEdit = (ele: Mofa_Entry_Candidate_Interface) => {
    setCurrentElement(ele);
    setModalName("edit");
  };

  const onClickAdd = async (ele: Mofa_Entry_Candidate_Interface) => {
    setCurrentElement(ele);
    setModalName("add");
  };

  const onClickDelete =async(ele:Mofa_Entry_Candidate_Interface)=>{
    const res = await deleteMofaEntry(ele)
    fetchMofaEntryCandiateList();
  }
  const fetchMofaEntryCandiateList = async (page?: number) => {
    const data = await readMofaEntryCandiateList("yes", 0, page ?? 1);
    console.log(data);
    setCandidateList(data);
    setAdditionalData(await PaginationManager.getData());
  };

  const [mofaPaymentList, setMofaPaymentList] = useState<
    MofaPaymentInterface[]
  >([]);
  const fetchMofaPaymentList = async () => {
    const data = await readMofaPaymentList();
    // console.log(data);
    setMofaPaymentList(data);
  };


  const [AgentList, setAgentList] = useState<AgentInterface[]>([])
  const fetchAgentList = async () => {
      const data = await readAgentList()
      console.log(data);
      setAgentList(data)
  }

  useEffect(() => {
      fetchAgentList()

      fetchMofaPaymentList();
    fetchMofaEntryCandiateList(additionalData.pagination.page);
  }, []);

  return (
    <div className="h-screen">
      <CustomNavbarV3
        pageName="Mofa Entry"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
        <GreenButton onClick={() => setModalName("add")} text="Add" />
      </CardHeader>

      {/*  mofa payment stable */}
      <Heading6 text="Visa Authorisation" />
      <MofaPaymentTable mofaPaymentList={mofaPaymentList} />
      {/*  mofaEntry stable */}
      <div className="mt-6"></div>
      <Heading6 text="Mofa entry" />
      {/*  indexVisa stable */}
      <Table
        snoBase={additionalData.pagination.sno_base}
        candidateList={CandidateList}
        onClickAdd={onClickAdd}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchMofaEntryCandiateList(e);
        }}
      />

      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "add" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => {
            fetchMofaEntryCandiateList();
            setModalName("");
          }}
          AgentList={AgentList}
          fetchMofaEntryCandiateList={fetchMofaEntryCandiateList}
        />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          currentElement={currentElement}
          onClose={() => {
            fetchMofaEntryCandiateList();
            setModalName("");
          }}
          AgentList={AgentList}
          fetchMofaEntryCandiateList={fetchMofaEntryCandiateList}
        />
      )}
    </div>
  );
}
