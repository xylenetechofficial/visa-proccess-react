import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import ClientInvoicesCandidateInvoiceRaiseTable from "./Table";
import { Box, styled } from "@mui/material";
import { CandidateInvoiceRaiseInterface, CandidateInvoiceRaiseListInterface } from "../type";
import { createCandidatesInvoiceRaiseList, readCandidatesInvoiceRaiseList } from "../repository";
import { BankInterface } from "../../../masters/bank/type";
import { readBankList } from "../../../masters/bank/repository";

export default function Main() {

  const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
  }));
  const [candidateInvoiceRaise, setCandidateInvoiceRaiseList] = useState<CandidateInvoiceRaiseListInterface[]>([]);

  const [searchQuery, setSearchQuery] = useState('');

  const [data, setData] = useState<any>([])

  const fetchCandidatesInvoiceRaiseList = async () => {
    console.log("called")
    const data = await readCandidatesInvoiceRaiseList();
    if (data) {
      setCandidateInvoiceRaiseList(data)
    }

  }
  const onClickAdd = async (candidateInvoiceRaise: any) => {
    console.log("first", candidateInvoiceRaise)
    const data = await createCandidatesInvoiceRaiseList(candidateInvoiceRaise);
    if (data) {
      fetchCandidatesInvoiceRaiseList();
    }
  }

  const [BankList, setBankList] = useState<BankInterface[]>([])
  async function fetchBanckList() {
    const data = await readBankList(false, 0)
    setBankList(data)
  }

  useEffect(() => {
    fetchCandidatesInvoiceRaiseList();
    fetchBanckList()
  }, [])
  return (
    <div>
      <CustomNavbarV3
        pageName="Candidates Invoice Raise"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => fetchCandidatesInvoiceRaiseList()}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <ClientInvoicesCandidateInvoiceRaiseTable
        onClickEdit={() => console.log("first")}
        onChange={(value) => setCandidateInvoiceRaiseList(value)}
        candidateInvoiceRaiseList={candidateInvoiceRaise}
        setData={(value: any) => setData(value)}
        BankList={BankList}
      />

      <CustomButton2 buttonText="Submit" onClick={() => onClickAdd(data)} />

    </div>
  );
}
