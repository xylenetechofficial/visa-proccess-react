import { useEffect, useState } from "react";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";

import CandidateReverseToUnderployment from "./Table";
import ReverseModal from './Reverse'
import { readCandidateReverseToUnderdeploymentList } from "../repository";
import { CandidateReverseToDeployeMentInterface } from "../type";

const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
  const [searchQuery, setSearchQuery] = useState("");
  const [candidateReverseToUnderploymentList,setCandidateReverseToUnderploymentList] = useState<CandidateReverseToDeployeMentInterface[]>([])
  const [modalName, setModalName] = useState("");
  const [modalData,setModalData]= useState<CandidateReverseToDeployeMentInterface >({} as CandidateReverseToDeployeMentInterface)
  const onClickReverse = (item:CandidateReverseToDeployeMentInterface) => {
    console.log("onClickReverse"); // Only Dev
    setModalData(item)
    setModalName("Reverse");

  };

  const fetchCandidateReverseToDeploymentList = async()=>{
    const res= await readCandidateReverseToUnderdeploymentList()
    console.log(res,"Ss")
    setCandidateReverseToUnderploymentList(res)
  }
  useEffect(() => {
    fetchCandidateReverseToDeploymentList();
  }, []);
console.log(candidateReverseToUnderploymentList,"Ss")
  return (
    <div>
      <CustomNavbarV3
        pageName="Candidate Reverse To Underployment"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

        {/* Add */}
        {/* <GreenButton
          text={"Add +"}
          onClick={() => {
            setModalName("create");
          }}
        /> */}
      </CardHeader>

      <CandidateReverseToUnderployment
      onClickReverse={(value)=>onClickReverse(value)}
      candidateReverseToUnderploymentList={candidateReverseToUnderploymentList}
      />

      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "Reverse" ? (
        ""
      ) : (
        <ReverseModal
          onClose={() => setModalName("")}
          modalData={modalData}
        />
      )}
    </div>
  );
}
