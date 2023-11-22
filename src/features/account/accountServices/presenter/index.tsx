
import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";

import { createServiceCharges, readServiceChargesList } from "../repository";
import ServiceChargesTable from "./Table";
import {  ServiceChargesInterface } from "../type";
import { CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";

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

  const [searchQuery, setSearchQuery] = useState("");
  const [serviceCharges, setServiceCharges] = useState<
    ServiceChargesInterface[]
  >([]);
 
  useEffect(() => {
    fetchServiceChargesList(additionalData.pagination.page);
  }, []);

  const fetchServiceChargesList = async (page?: number) => {
    const res: any = await readServiceChargesList({
      page: page ?? additionalData.pagination.page,
      status: "no"
    });
    if (res) {
      setServiceCharges(res);
    }
    setAdditionalData(await PaginationManager.getData());
  };
  const onClickAdd = async (data_list: ServiceChargesInterface[]) => {
    const new_list = [];
    for (let index = 0; index < data_list.length; index++) {
      const element = data_list[index];
      if (!element.checked) continue;

      new_list.push(element);
    }

    const data = await createServiceCharges(new_list);

    fetchServiceChargesList()
  };
  return (
    <div>
      <CustomNavbarV3
        pageName="Service Charges"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={()=>fetchServiceChargesList()}
      />
      <ServiceChargesTable
      snoBase={additionalData.pagination.sno_base}
        setData={() => console.log("kjk")}
        ServiceChargesList={serviceCharges}
        setServiceChargesList={setServiceCharges}
        data={ServiceChargesTable}
        setModalName={""}
        onChange={(value) => setServiceCharges(value)}
        fetchPaymentDetail={() => console.log("jjj")}
      />
      <br />
      <GreenButton onClick={() => onClickAdd(serviceCharges)} text="Submit" />
      <br />
      <br />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchServiceChargesList(e);
        }}
      />
    </div>
  );
}
