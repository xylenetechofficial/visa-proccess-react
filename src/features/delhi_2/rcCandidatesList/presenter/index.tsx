import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { BlueButton } from "../../../../componenets/CustomButton";
import RC_CandidateTable from "./Table";
import { RC_CandidateInterface } from "../type";
import { createRC_CandidateList, readRC_CandidateList } from "../repository";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { useUserAuth } from "../../../context/UserAuthContext";

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
  const [rc_candidateDataList, setRC_CandidateDataList] = useState<
    RC_CandidateInterface[]
  >([]);
  const { authPermissionList } = useUserAuth();
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

  const fetchRC_CandidateList = async (page?: number) => {
    const data = await readRC_CandidateList({
      page: page ?? additionalData.pagination.page,
      status: "yes",
    });
    setRC_CandidateDataList(data);
    setAdditionalData(await PaginationManager.getData());
  };

  const createRC_Candidate = async (data_list: RC_CandidateInterface[]) => {
    const new_list = [];
    for (let index = 0; index < data_list.length; index++) {
      const element = data_list[index];
      // if (!element.checked) continue

      // // if rc_candidate_required
      // if (element.rc_candidate_required.toLowerCase() == 'yes')
      //     // then received_date and submission_date required
      //     if (element.rc_candidate_received_date == '' || element.rc_candidate_submission_date == '')
      //         continue

      new_list.push(element);
    }
    await createRC_CandidateList(new_list);
    fetchRC_CandidateList();
  };
  useEffect(() => {
    fetchRC_CandidateList(additionalData.pagination.page);
  }, []);
  return (
    <div className="h-screen">
      <CustomNavbarV3
        pageName="RC - Candidate List"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() =>
          readRC_CandidateList({ page: additionalData.pagination.page })
        }
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>
      <RC_CandidateTable
        snoBase={additionalData.pagination.sno_base}
        rc_candidateDataList={rc_candidateDataList}
        onChange={(value: RC_CandidateInterface[]) =>
          setRC_CandidateDataList(value)
        }
        fetchRC_CandidateList={fetchRC_CandidateList}
      />
      <br />
      {authPermissionList.url_has("create") ? (
        <BlueButton
          text="Submit"
          onClick={() => {
            createRC_Candidate(rc_candidateDataList);
          }}
        />
      ) : (
        ""
      )}

      <br />
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          // console.log(e); // Only Dev
          fetchRC_CandidateList(e);
        }}
      />
    </div>
  );
}
