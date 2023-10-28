import { useEffect, useState } from "react";
import { CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import ConsulateChargesTable from "./Table";
import { ConsulateChargesInterface } from "../type";
import {
  createConsulateCharges,
  readConsulateChargesList,
} from "../repository";

import { BlueButton } from "../../../../componenets/CustomButton";
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
    const data = await readConsulateChargesList(page ?? 1);
    console.log(data);
    setConsulateChargesList(data);
    setAdditionalData(await PaginationManager.getData());
  };

  const createConsulateChargesList = async (
    data_list: ConsulateChargesInterface[]
  ) => {
    const new_list = [];
    for (let index = 0; index < data_list.length; index++) {
      const element = data_list[index];

      new_list.push(element);
    }

    const data: any = await createConsulateCharges(new_list);
    console.log(data, "crete");
    fetchConsulateChargesList();
  };

  useEffect(() => {
    fetchConsulateChargesList(additionalData.pagination.page);
  }, []);

  return (
    <div className="h-screen">
      <CustomNavbarV3
        pageName="Consulate Charges"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <ConsulateChargesTable
        snoBase={additionalData.pagination.sno_base}
        onChange={(value) => setConsulateChargesList(value)}
        consulateChargesList={consulateChargesList}
      />

      <br />

      <BlueButton
        text="Submit"
        onClick={() => {
          createConsulateChargesList(consulateChargesList);
        }}
      />

      <br />
      <br />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchConsulateChargesList(e);
        }}
      />
    </div>
  );
}
