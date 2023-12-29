import { useEffect, useState } from "react";
import { CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import AccountCandidatesListTable from "./Table";
import { readCandidateDiscountList } from "../repository";
import { AccountCandidateInterface } from "../type";
import CandidateCancel from "./CandidateCancel";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";

export default function Main() {
  const initailState: AccountCandidateInterface = {
    id: 0,
    party_code: 0,
    company_name: "",
    name: "",
    passport_no: 0,
    actual_profession: "",
    visa_profession: "",
    agent_name: "",
    visa_received_date: "",
    process_charges: "",
    document_charges: 0,
    other_charges: 0,
    sector_charges: 0,
    partial_charges: 0,
    service_charges: 0,
    consulate_setting_charges: 0,
    cancel_charges: "",
    flight_ticket_amount: "",
    ticket_charges: 0,
    extra_service_tax: 0,
    air_ticket: "",
    is_deployed: "",
    color_code: "",
    given_to: "",
    is_without: 0,
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState("");
  const [candidatesList, setCandidatesList] = useState<
    AccountCandidateInterface[]
  >([]);

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

  const fetchAccoundCandidates = async (page?: number) => {
    const data = await readCandidateDiscountList({
      page: page ?? additionalData.pagination.page,
      status: "no",
    });
      setCandidatesList(data);
    setAdditionalData(await PaginationManager.getData());

  };
  const [modalName, setModalName] = useState("");
  const [currentData, setCurrentData] =
    useState<AccountCandidateInterface>(initailState);
    
  const onClickCancel = (data: any) => {
    setCurrentData(data);
    setModalName("cancel");
  };

  useEffect(() => {
    fetchAccoundCandidates(additionalData.pagination.page);
  }, []);
  return (
    <div>
      <CustomNavbarV3
        pageName="Account Candidates List"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => {
          fetchAccoundCandidates();
        }}
      />

      <AccountCandidatesListTable
        snoBase={additionalData.pagination.sno_base}
        candidatesList={candidatesList}
        setCandidatesList={setCandidatesList}
        data={data}
        setData={setData}
        onClickCancel={(value) => onClickCancel(value)}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          fetchAccoundCandidates(e);
        }}
      />

      {modalName === "cancel" ? (
        <CandidateCancel
          onClose={() => setModalName("")}
          currentData={currentData}
        />
      ) : (
        ""
      )}
    </div>
  );
}
