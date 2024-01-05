import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import PP_RC_CandidateTable from "./Table";
import { PP_RC_CandidateInterface } from "../type";
import { readPP_RC_CandidateList } from "../repository";
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
  const [pp_rc_candidateDataList, setPP_RC_CandidateDataList] = useState<
    PP_RC_CandidateInterface[]
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

  const fetchPP_RC_CandidateList = async (page?: number) => {
    const data: any = await readPP_RC_CandidateList({
      page: page ?? additionalData.pagination.page,
      status: "yes",
    });
    setPP_RC_CandidateDataList(data);
    setAdditionalData(await PaginationManager.getData());
  };

  useEffect(() => {
    fetchPP_RC_CandidateList(additionalData.pagination.page);
  }, []);
  return (
    <div className="h-screen">
      <CustomNavbarV3
        pageName="RC - Candidate List"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <PP_RC_CandidateTable
        snoBase={additionalData.pagination.sno_base}
        pp_rc_candidateDataList={pp_rc_candidateDataList}
        onChange={(value: PP_RC_CandidateInterface[]) =>
          setPP_RC_CandidateDataList(value)
        }
        fetchPP_RC_CandidateList={fetchPP_RC_CandidateList}
      />
      <br />
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchPP_RC_CandidateList(e);
        }}
      />
    </div>
  );
}
