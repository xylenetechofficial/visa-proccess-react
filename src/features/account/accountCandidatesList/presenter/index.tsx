import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ClientAdditionalInvoiceTable from "./Table";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { RedButton } from "../../../../componenets/CustomButton";
import AccountCandidatesListTable from "./Table";
import { readCandidateDiscountList, updateCandidate } from "../repository";
import {
  AccountCandidateCancelInterface,
  AccountCandidateInterface,
} from "../type";
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
    const data: any = await readCandidateDiscountList({
      page: page ?? additionalData.pagination.page,
      status: "yes"
    });
    console.log(data, "ddd");
    if (data) {
      setCandidatesList(data);
    }
    setAdditionalData(await PaginationManager.getData());
  };
  const [modalName, setModalName] = useState("");
  const [currentData, setCurrentData] =
    useState<AccountCandidateInterface>(initailState);
  const onClickEdit = (data: any) => {
    setCurrentData(data);
    setModalName("cancel");
  };
  const [updateCandidateData, setUpdateCandidateData] = useState(initailState);
  // const onCLickUpdate =async()=>{
  //     const data:any = await updateCandidate(1,updateCandidateData)
  // }
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
        onClickEdit={(value) => onClickEdit(value)}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
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
