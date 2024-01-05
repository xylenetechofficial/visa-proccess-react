import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { BlueButton, GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { DubaiDataEntryInterface } from "../type";
import { readDubaiDataEntryList, updateDubaiDataEntry } from "../repository";
import DubaiDataEntryTable from "./DubaiDataentryTable";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { useUserAuth } from "../../../context/UserAuthContext";
const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
  const [dubaiDateEntryList, setDubaiDateEntryList] = useState<
    DubaiDataEntryInterface[]
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
  const { authPermissionList } = useUserAuth();
  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (query: string, data: DubaiDataEntryInterface[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.candidateName.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, dubaiDateEntryList);

  const handleUpdateDubaiDataEntryList = async () => {
    const newArray = [];
    for (let i = 0; i < dubaiDateEntryList.length; i++) {
      if (dubaiDateEntryList[i].ppReceived) {
        newArray.push(dubaiDateEntryList[i]);
      }
    }
    await updateDubaiDataEntry(newArray);
    fetchDubaiDataEntryList();
  };

  const fetchDubaiDataEntryList = async (page?: number) => {
    const data = await readDubaiDataEntryList(page ?? 1);
    // console.log(data);
    if (data) {
      setDubaiDateEntryList(data);
    }
    setAdditionalData(await PaginationManager.getData());
  };
  // const [change_detect]
  useEffect(() => {
    fetchDubaiDataEntryList(additionalData.pagination.page);
  }, []);

  return (
    <div className="h-screen">
      <CustomNavbarV3
        pageName="Dubai Data Entry"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

        {/* 
                <GreenButton text={"Add +"} onClick={() => {
                    setModalName("create")
                }} /> */}
      </CardHeader>

      <DubaiDataEntryTable
        snoBase={additionalData.pagination.sno_base}
        dubaiDataEntryList={dubaiDateEntryList}
        onChange={(value) => setDubaiDateEntryList(value)}
        fetchDubaiDataEntryList={() => {
          fetchDubaiDataEntryList();
        }}
      />
      <br />
      {authPermissionList.url_has("create") ? (
        <BlueButton text="Update" onClick={handleUpdateDubaiDataEntryList} />
      ) : (
        ""
      )}
      <br />
      <br />
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchDubaiDataEntryList(e);
        }}
      />
    </div>
  );
}
