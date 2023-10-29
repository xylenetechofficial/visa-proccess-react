import { useEffect, useState } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import VisaIssueDateTable from "./Table";
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import { VisaIssueDateInterface } from "../type";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import { readVisaIssueDate, updateVisaIssueDate } from "../repository";
import { GreenButton } from "../../../../componenets/CustomButton";
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
  const [visaIssueDateList, setVisaIssueDateList] = useState<
    VisaIssueDateInterface[]
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

  const fetchVisaIssueData = async (page?: number) => {
    const data = await readVisaIssueDate(page ?? 1);
    console.log(data);
    setVisaIssueDateList(data);
    setAdditionalData(await PaginationManager.getData());
  };

  const OnClickSubmit = async () => {
    console.log(visaIssueDateList);
    const newArray = [];
    for (let i = 0; i < visaIssueDateList.length; i++) {
      newArray.push(visaIssueDateList[i]);
    }
    const res = updateVisaIssueDate(newArray);
    fetchVisaIssueData();
  };

  useEffect(() => {
    fetchVisaIssueData(additionalData.pagination.page);
  }, []);

  return (
    <div className="h-screen">
      <CustomNavbarV3
        pageName="Visa Issue Date"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <VisaIssueDateTable
        snoBase={additionalData.pagination.sno_base}
        visaIssueDateList={visaIssueDateList}
        onChange={(value) => setVisaIssueDateList(value)}
      />
      <br />

      <GreenButton onClick={OnClickSubmit} text="Submit" />
      <br />
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchVisaIssueData(e);
        }}
      />
    </div>
  );
}
