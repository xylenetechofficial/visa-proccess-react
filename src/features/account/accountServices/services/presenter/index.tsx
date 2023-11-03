// export default function Main(){
//     return (
//         <>

//         </>
//     )
// }

import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";

import { createServiceCharges, readServiceChargesList } from "../repository";
import ServiceChargesTable from "./Table";
import { AddServiceAdapter, ServiceChargesInterface } from "../type";
import { CustomNavbarV3 } from "../../../../../componenets/CustomComponents";
import { GreenButton } from "../../../../../componenets/CustomButton";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../../utils/api_helper";
import Pagination from "../../../../../componenets/Pagination";

const CardHeader2 = styled(Box)(() => ({
  display: "grid",
  gap: "5px",
  gridTemplateColumns: "200px 200px 200px",
}));

const initailState: AddServiceAdapter = {
  id: 0,
  other_charges: "",
  sector_charges: "",
  partial_charges: "",
  service_charges: "",
  agent_commission: "",
  waive_off_sector_charges: "",
  // comments: '',
  checked: 0,
  raise_invoice: "",
  invoice_service_charges: "",
  invoice_service_currency: "",
  invoice_ticket_charges: "",
  invoice_ticket_currency: "",
};
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
  const [addServiceCharges, setAddServiceCharges] = useState(initailState);

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
  const onClickAdd = async (data_list: AddServiceAdapter[]) => {
    const new_list = [];
    for (let index = 0; index < data_list.length; index++) {
      const element = data_list[index];
      if (!element.checked) continue;

      // // if immigration_required
      // if (element.immigration_required.toLowerCase() == 'yes')
      //     // then received_date and submission_date required
      //     if (element.immigration_received_date == '' || element.immigration_submission_date == '')
      //         continue

      new_list.push(element);
    }
    const list: any = {
      selection_list: new_list,
    };
    const data = await createServiceCharges(list);
  };
  return (
    <div>
      <CustomNavbarV3
        pageName="Service Charges"
        searchFunction={(query) => setSearchQuery(query)}
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
