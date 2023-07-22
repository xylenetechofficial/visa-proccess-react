import { useState , useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import CandidateInvoiceNumber from "./Table";
import { Box,  styled } from "@mui/material";
import { BlueButton } from "../../../../componenets/CustomButton";
import { AddCandidateInvoiceNumberInterface } from "../type";
import { createCandidatesInvoiceNumber, readCandidateInvoiceNumbersList } from "../repository";

export default function Main() {

  const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

  const [candidateNumbreList, setCandidateNumberList] = useState<any>([]);
  // const [data, setData]= useState<AddCandidateInvoiceNumberInterface[]>([])
  const [data, setData]= useState<AddCandidateInvoiceNumberInterface[]>([])
  const [searchQuery, setSearchQuery] = useState('');

  const createCandidateNumber = async (item:any)=>{
    await createCandidatesInvoiceNumber(item)
  }

  const fetchCandidateNumbersList =async()=>{
  const data =  await readCandidateInvoiceNumbersList();
if(data){
  setCandidateNumberList(data);
}
  }

  useEffect(()=>{
    fetchCandidateNumbersList();
  },[])
  return (
    <div>
      <CustomNavbarV3
        pageName="Client Invoice Add"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <CandidateInvoiceNumber
        candidateNumbreList={candidateNumbreList}
        // setCandidateNumberList={candidateNumbreList}
        onChange={(value)=>setCandidateNumberList(value)}
        data={data}
        setData={setData}
      />
      <BlueButton text="Submit" onClick={()=>createCandidateNumber(data)} />
    </div>
  );
}
