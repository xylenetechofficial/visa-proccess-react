import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import DeployCandidateTable from "./Table";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { DeployCandidatesInterface } from "../type";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import { GreenButton } from "../../../../componenets/CustomButton";
import Pagination from "../../../../componenets/Pagination";
import { readDeployCandidatesList, updateDeployCandidates } from "../repository";

const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
  const [deployCandidateList, setDeployCandidateList] = useState<
    DeployCandidatesInterface[]
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

  const [searchQuery, setSearchQuery] = useState("");

  const fetchDeployCandidateData = async (page?: number) => {
    const data = await readDeployCandidatesList(page ?? 1);
    console.log(data);
    setDeployCandidateList(data);
    setAdditionalData(await PaginationManager.getData());
  };

  const OnClickSubmit = async () => {
    console.log(deployCandidateList);
    const newArray = [];
    for (let i = 0; i < deployCandidateList.length; i++) {
      newArray.push(deployCandidateList[i]);
    }
    const res = updateDeployCandidates(newArray);
    fetchDeployCandidateData();
  };

  useEffect(() => {
    fetchDeployCandidateData(additionalData.pagination.page);
  }, []);

  return (
    <div className="h-screen">
      <CustomNavbarV3
        pageName="Deploy Candidates"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      {/*  Deploy Candidate table */}
      <DeployCandidateTable
        deployCandidateList={deployCandidateList}
        snoBase={additionalData.pagination.sno_base}
        onChange={(value) => setDeployCandidateList(value)}
      />
      <br />

      <GreenButton onClick={OnClickSubmit} text="Submit" />
      <br />
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchDeployCandidateData(e);
        }}
      />
    </div>
  );
}
