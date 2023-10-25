import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ClientAdditionalInvoiceTable from "./Table";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { RedButton } from "../../../../componenets/CustomButton";
import IndexForEwakalaTable from "./Table";
import { readIndexEwakalaList } from "../repository";
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

  const [indexForEwakala, setIndexForEwakala] = useState([]);

  const fetchIndexEwakalaList = async (page?: number) => {
    const data: any = await readIndexEwakalaList(page);
    if (data) {
      setIndexForEwakala(data);
    }

    setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetchIndexEwakalaList(additionalData.pagination.page);
  }, []);
  return (
    <div>
      <CustomNavbarV3
        pageName="Index For Ewakala"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <IndexForEwakalaTable
        snoBase={additionalData.pagination.sno_base}
        indexForEwakala={indexForEwakala}
        setIndexForEwakala={setIndexForEwakala}
        data={data}
        setData={setData}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchIndexEwakalaList(e);
        }}
      />
    </div>
  );
}
