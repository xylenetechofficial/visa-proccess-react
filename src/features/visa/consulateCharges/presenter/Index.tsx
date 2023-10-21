import { useEffect, useState } from "react";
import { CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import ConsulateChargesTable from "./Table";
import { ConsulateChargesInterface } from "../type";
import { readConsulateChargesList } from "../repository";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";

export default function Main() {
  const [consulateChargesList, setConsulateChargesList] = useState<
    ConsulateChargesInterface[]
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

  const fetchConsulateChargesList = async (page?: number) => {
    const data = await readConsulateChargesList(page);
    console.log(data);
    setConsulateChargesList(data);
    setAdditionalData(await PaginationManager.getData());
  };

  useEffect(() => {
    fetchConsulateChargesList(additionalData.pagination.page);
  }, []);

  return (
    <>
      <CustomNavbarV3
        pageName="Consulate Charges"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <ConsulateChargesTable 
      snoBase={additionalData.pagination.sno_base}
      consulateChargesList={consulateChargesList} />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchConsulateChargesList(e);
        }}
      />
    </>
  );
}
