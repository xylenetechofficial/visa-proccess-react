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

  const fetchCandidatesInvoiceRaiseList = async ()=>{
    console.log("called")
    const data = await readCandidatesInvoiceRaiseList();
    if(data){
      setCandidateInvoiceRaiseList(data)
    }

}
const onClickAdd= async(candidateInvoiceRaise:any)=>{
  console.log("first",candidateInvoiceRaise)
  await createCandidatesInvoiceRaiseList(candidateInvoiceRaise)
}
  useEffect(()=>{
    fetchCandidatesInvoiceRaiseList();
  },[])
  return (
    <div>
      <CustomNavbarV3
        pageName="Candidates Invoice Raise"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <ClientInvoicesCandidateInvoiceRaiseTable
        onClickEdit={() => console.log("first")}
        onChange={(value) => setCandidateInvoiceRaiseList(value)}
        candidateInvoiceRaiseList={candidateInvoiceRaise}

      />

    <CustomButton2 buttonText="Submit" onClick={()=>onClickAdd(candidateInvoiceRaise)}/>

    </div>
  );
}
