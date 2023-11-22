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
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { AgentInterface } from "../../../masters/agent/type";
export default function Main() {



  const [agentList, setAgentList] = useState<AgentInterface[]>([]);
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

  const [editAgent, setEditAgent] = useState<AgentInterface>(
    {} as AgentInterface
  );

  const [searchQuery, setSearchQuery] = useState("");
  const filterData = (query: string, data: AgentInterface[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, agentList);

  const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
  }));
  const [candidateInvoiceRaise, setCandidateInvoiceRaiseList] = useState<CandidateInvoiceRaiseListInterface[]>([]);

 

  const [data, setData] = useState<any>([])

  const fetchCandidatesInvoiceRaiseList = async (page?: number) => {
    console.log("called")
    const data = await readCandidatesInvoiceRaiseList({page:page ?? additionalData.pagination.page});
    if (data) {
      filterData("", agentList);
      setCandidateInvoiceRaiseList(data)
      setAdditionalData(await PaginationManager.getData());
    }

  }
  const onClickAdd = async (candidateInvoiceRaise: any) => {

    const newArray = []

        for (let i = 0; i < candidateInvoiceRaise.length; i++) {
            if (!candidateInvoiceRaise[i].is_without)
                continue
                newArray.push(candidateInvoiceRaise[i])
        }

    console.log("first", newArray)
    // const data = await createCandidatesInvoiceRaiseList(candidateInvoiceRaise);
    // if (data) {
    //   fetchCandidatesInvoiceRaiseList(additionalData.pagination.page);
    // }
  }

  const [BankList, setBankList] = useState<BankInterface[]>([])
  async function fetchBanckList() {
    const data = await readBankList(false, 0)
    setBankList(data)
  }

  useEffect(() => {
    fetchCandidatesInvoiceRaiseList(additionalData.pagination.page);
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
      snoBase={additionalData.pagination.sno_base}
        onClickEdit={() => console.log("first")}
        onChange={(value) => setCandidateInvoiceRaiseList(value)}
        candidateInvoiceRaiseList={candidateInvoiceRaise}
        setData={(value: any) => setData(value)}
        BankList={BankList}
      />

      <CustomButton2 buttonText="Submit" onClick={() => onClickAdd(data)} />



      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchCandidatesInvoiceRaiseList(e);
        }}
      />

    </div>
  );
}
