import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import Table from "./Table";
import { GreenButton, RedButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import {
  
  readCandidateDiscountList,
  updateCandidateDiscountApproveReject,
} from "../repository";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";

const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
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



  const [data, setData] = useState({
    selection_list: [{}],
  });
  const [candidateDiscountApproveRejectList, setCandidateDiscountApproveRejectList] = useState<any[]>([]);

  const [searchQuery, setSearchQuery] = useState("");

  
  const filterData = (query: string, data: any[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.index_date.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, candidateDiscountApproveRejectList);

  const fetchCandidateDiscountList = async (page?: number) => {
    const data: any = await readCandidateDiscountList({
      page: page ?? additionalData.pagination.page,
      status: "no",
    });
    setAdditionalData(await PaginationManager.getData());
    console.log(data);
    if (data) {
      setCandidateDiscountApproveRejectList(data);
    }
    setCandidateDiscountApproveRejectList(data);
  };
  useEffect(() => {
    fetchCandidateDiscountList(additionalData.pagination.page);
  }, []);

  const onClickApproveReject = async (status: any) => {
    const newArray: any = { ...data };
    console.log(newArray, "PPPP");
    const filteredArray = Object.values(newArray)
      .filter((item: any) => item.discount_id !== "")
      .map((item: any, index: any) => {
        newArray[index].status = status;
        return item; // Return the modified item
      });
    const res: any = await updateCandidateDiscountApproveReject({
      selection_list: filteredArray,
    });
    if (res) {
      fetchCandidateDiscountList();
    }
  };
  return (
    <div>
      <CustomNavbarV3
        pageName="Candidate Discount Approve/Reject"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      {/*  Candidate Discount Approve Reject table */}
      <Table
        snoBase={additionalData.pagination.sno_base}
        candidateDiscountApproveReject={dataFiltered}
        setData={setData}
        data={data}
        onChange={(value) => setData(value)}
      />
      <br />
      <GreenButton onClick={() => onClickApproveReject(1)} text="Approve" />
      <RedButton onClick={() => onClickApproveReject(2)} text="Reject" />
      <br />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchCandidateDiscountList(e);
        }}
      />
    </div>
  );
}
