import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ClientAdditionalInvoiceTable from "./Table";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import ImmigrationDOnePPReleaseTable from "./Table";
import {
  createImmigrationDonePPRelease,
  readImmigrationDonePPReleaseList,
} from "../repository";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";

export default function Main() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState("");

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

  const [RcPPRecieved, setRcRcPPRecieved] = useState([]);
  const fetchImmigrationDoneList = async (page?: number) => {
    const data: any = await readImmigrationDonePPReleaseList(page);
    setRcRcPPRecieved(data);
    setAdditionalData(await PaginationManager.getData());
  };

  const createImmigrationDonePPReleaseList = async (item: any) => {
    const data: any = await createImmigrationDonePPRelease(item);

    fetchImmigrationDoneList();
  };
  useEffect(() => {
    fetchImmigrationDoneList(additionalData.pagination.page);
  }, []);
  return (
    <div>
      <CustomNavbarV3
        pageName="Immigration Done PP Release"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => {
          fetchImmigrationDoneList();
        }}
      />

      <ImmigrationDOnePPReleaseTable
        snoBase={additionalData.pagination.sno_base}
        RcPPRecieved={RcPPRecieved}
        setRcRcPPRecieved={setRcRcPPRecieved}
        onChange={(value: any) => setRcRcPPRecieved(value)}
        data={data}
        setData={setData}
      />
      <BlueButton
        text="Submit"
        onClick={() => {
          createImmigrationDonePPReleaseList(RcPPRecieved);
        }}
      />
<br /><br />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchImmigrationDoneList(e);
        }}
      />
    </div>
  );
}
