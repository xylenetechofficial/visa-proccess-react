import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { BlueButton } from "../../../../componenets/CustomButton";
import CandidateTable from "./Table";
import { CandidateInterface } from "../type";
import { createCandidateList, readCandidateList } from "../repository";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";

export default function Main() {
  const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
  }));
  const [searchQuery, setSearchQuery] = useState("");
  const [candidateDataList, setCandidateDataList] = useState<
    CandidateInterface[]
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

  const fetchCandidateList = async (page?: number) => {
    const data: any = await readCandidateList({
      page: page ?? additionalData.pagination.page,
      status: "yes",
    });
    setCandidateDataList(data);
    setAdditionalData(await PaginationManager.getData());
  };

  const createCandidate = async (data_list: CandidateInterface[]) => {
    const new_list = [];
    for (let index = 0; index < data_list.length; index++) {
      const element = data_list[index];
      // if (!element.checked) continue

      // // if candidate_required
      // if (element.candidate_required.toLowerCase() == 'yes')
      //     // then received_date and submission_date required
      //     if (element.candidate_received_date == '' || element.candidate_submission_date == '')
      //         continue

      if (element.given_date == "" || element.given_to == "" || element.dad_amount < 1 || element.dad_service_tax == "")
        continue

      new_list.push(element);
    }
console.log(new_list);   // Only Dev
    // const data: any = await createCandidateList(new_list);
    fetchCandidateList();
  };
  useEffect(() => {
    fetchCandidateList(additionalData.pagination.page);
  }, []);
  return (
    <div className="h-screen">
      <CustomNavbarV3
        pageName="Candidate List"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => fetchCandidateList()}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>
      <CandidateTable
        snoBase={additionalData.pagination.sno_base}
        candidateDataList={candidateDataList}
        onChange={(value: any) => setCandidateDataList(value)}
        fetchCandidateList={fetchCandidateList}
      />
      <br />
      <BlueButton
        text="Submit"
        onClick={() => {
          createCandidate(candidateDataList);
        }}
      />
      <br />
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchCandidateList(e);
        }}
      />
    </div>
  );
}
