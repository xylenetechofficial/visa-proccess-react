import { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import CandidateInvoiceNumber from "./Table";
import { Box, styled } from "@mui/material";
import { BlueButton } from "../../../../componenets/CustomButton";
import { AddCandidateInvoiceNumberInterface, ClientInvoiceNumberInterface } from "../type";
import { createCandidatesInvoiceNumber, readCandidateInvoiceNumbersList } from "../repository";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { AgentInterface } from "../../../masters/agent/type";
// import { AgentInterface } from "../type";
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

  const [candidateNumbreList, setCandidateNumberList] = useState<ClientInvoiceNumberInterface[]>([]);
  // const [data, setData]= useState<AddCandidateInvoiceNumberInterface[]>([])
  const [data, setData] = useState<AddCandidateInvoiceNumberInterface[]>([])


  const createCandidateNumber = async (item: any) => {
    await createCandidatesInvoiceNumber(item)
  }



  const fetchCandidateNumbersList = async (page?: number) => {
    const data = await readCandidateInvoiceNumbersList({page:page ?? additionalData.pagination.page});
    if (data) {
      filterData("", agentList);
      // setAgentList(data);
      setCandidateNumberList(data);
      
      setAdditionalData(await PaginationManager.getData());
    }
  }

  useEffect(() => {
    fetchCandidateNumbersList(additionalData.pagination.page);
  }, [])

  //hello das
  return (
    <div>
      <CustomNavbarV3
        pageName=" Invoice Numbers"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <CandidateInvoiceNumber
        candidateNumbreList={candidateNumbreList}
         snoBase={additionalData.pagination.sno_base}
        // setCandidateNumberList={candidateNumbreList}
        onChange={(value) => setCandidateNumberList(value)}
        data={data}
        setData={setData}
      />



      <BlueButton text="Submit" onClick={() => createCandidateNumber(data)} />



      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchCandidateNumbersList(e);
        }}
      />
    </div>
  );
}
