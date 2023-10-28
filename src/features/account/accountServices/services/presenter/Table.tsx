import { Checkbox } from "@mui/material";

import { useState } from "react";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../../componenets/Table";
import { convertDateFormat } from "../../../../../utils/function";
import { UnlabeledInput } from "../../../../../componenets/Input";
import { currencyList } from "../../../../db";
import {
  CustomSelectComponentUnlabeled,
  selectOptionConveter,
} from "../../../../../componenets/SelectBox";
import { CustomSingleCheckBox } from "../../../../../componenets/Checkbox";

const ServiceChargesTable = (props: {
  snoBase: number;
  // ServiceChargesList: ServiceChargesInterface[];
  ServiceChargesList: any;
  setServiceChargesList: any;
  data: any;
  setData: any;
  setModalName: any;
  onChange: (value: any) => void;
  fetchPaymentDetail: (type: string, id: number) => any;
}) => {
  const [date, setDate] = useState<any>([]);
  console.log(props.ServiceChargesList);
  const [selectedCheckbox, setSelectedCheckbox] = useState([{ isChecked: "" }]);

  function onUpdateRow(index: number, rowData: any) {
    const nextData = props.ServiceChargesList.map((e: any, i: any) => {
      if (i === index) {
        // Increment the clicked counter
        return rowData;
      } else {
        // The rest haven't changed
        return e;
      }
    });
    props.onChange(nextData);
  }

  const handleCheckboxChange = (itemId: any, index: number) => {
    setSelectedCheckbox((prev) => {
      const newData: any = [...prev];
      newData[index] = {
        ...newData[index],
        isChecked: itemId,
      };
      return newData;
    });
  };

  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> PARTY CODE </TableHeadCell3>
            <TableHeadCell3> COMPANY NAME</TableHeadCell3>
            <TableHeadCell3> CONDIDATE NAME</TableHeadCell3>
            <TableHeadCell3> PASSPORT NO.</TableHeadCell3>
            <TableHeadCell3> ACTUAL PROFESSION </TableHeadCell3>
            <TableHeadCell3> VISA PROFESSION </TableHeadCell3>
            <TableHeadCell3> AGENT</TableHeadCell3>
            <TableHeadCell3> VISA RECIEVED DATE </TableHeadCell3>
            <TableHeadCell3> VISA AUTHORIZATION </TableHeadCell3>
            <TableHeadCell3> PROCESS CHARGES </TableHeadCell3>
            <TableHeadCell3> DOCUMENT CHARGES</TableHeadCell3>
            <TableHeadCell3> CONSULATE SETTING CHARGES</TableHeadCell3>
            <TableHeadCell3> SELECT</TableHeadCell3>
            <TableHeadCell3> OTHER CHARGES</TableHeadCell3>
            <TableHeadCell3> SECTOR CHARGES </TableHeadCell3>
            <TableHeadCell3> PARTIAL CHARGES</TableHeadCell3>
            <TableHeadCell3> SERVICE CHARGES</TableHeadCell3>
            <TableHeadCell3> AGENT COMMISSION </TableHeadCell3>
            <TableHeadCell3> WAVE OFF SECTOR CHARGES </TableHeadCell3>
            <TableHeadCell3> COMMENTS </TableHeadCell3>
            <TableHeadCell3> AIR TICKET </TableHeadCell3>
            <TableHeadCell3> RAISE INVOICE </TableHeadCell3>
            <TableHeadCell3> INVOICE SERVICE CHARGES </TableHeadCell3>
            <TableHeadCell3> INVOICE SERVICE CURRENCY </TableHeadCell3>
            <TableHeadCell3> INVOICE TICKET CHARGES </TableHeadCell3>
            <TableHeadCell3> INVOICE TICKET CURRENCY</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.ServiceChargesList?.map((ele: any, index: any) => (
            <TableRow3 key={index + 1}>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3> {ele.party_code}</TableCell3>
              <TableCell3> {ele.company_name}</TableCell3>
              <TableCell3> {ele.name}</TableCell3>
              <TableCell3>{ele.passport_no}</TableCell3>
              <TableCell3>{ele.actual_profession}</TableCell3>
              <TableCell3>{ele.visa_profession}</TableCell3>
              <TableCell3> {ele.agent_name}</TableCell3>
              <TableCell3>
                {" "}
                {convertDateFormat(ele.visa_received_date)}
              </TableCell3>
              <TableCell3> {ele.visa_authorization}</TableCell3>
              <TableCell3> {ele.process_charges}</TableCell3>
              <TableCell3> {ele.document_charges}</TableCell3>
              <TableCell3> {ele.consulate_setting_charges}</TableCell3>
              <TableCell3>
                {" "}
                <CustomSingleCheckBox
                  onChange={(value) => {
                    onUpdateRow(index, { ...ele, checked: value });
                  }}
                  value={ele.checked ? true : false}
                />
              </TableCell3>
              <TableCell3>
                {" "}
                <UnlabeledInput
                  type="text"
                  value={ele.other_charges}
                  onchange={(value) =>
                    onUpdateRow(index, { ...ele, other_charges: value })
                  }
                />
              </TableCell3>
              <TableCell3>
                {" "}
                <UnlabeledInput
                  type="text"
                  value={ele.sector_charges}
                  onchange={(value) =>
                    onUpdateRow(index, { ...ele, sector_charges: value })
                  }
                />
              </TableCell3>
              <TableCell3>
                {" "}
                <UnlabeledInput
                  type="text"
                  value={ele.partial_charges}
                  onchange={(value) =>
                    onUpdateRow(index, { ...ele, partial_charges: value })
                  }
                />
              </TableCell3>
              <TableCell3>
                {" "}
                <UnlabeledInput
                  type="text"
                  value={ele.service_charges}
                  onchange={(value) =>
                    onUpdateRow(index, { ...ele, service_charges: value })
                  }
                />
              </TableCell3>
              <TableCell3>
                {" "}
                <UnlabeledInput
                  type="text"
                  value={ele.agent_commission}
                  onchange={(value) =>
                    onUpdateRow(index, { ...ele, agent_commission: value })
                  }
                />
              </TableCell3>
              <TableCell3> {ele.waive_off_sector_charges}</TableCell3>
              <TableCell3>
                {" "}
                <UnlabeledInput
                  type="text"
                  value={ele.comments}
                  onchange={(value) =>
                    onUpdateRow(index, { ...ele, comments: value })
                  }
                />
              </TableCell3>
              <TableCell3>
                <Checkbox
                  value={"PROVIDED BY CO."}
                  checked={
                    selectedCheckbox[index]?.isChecked === `${ele.id}PROVIDED`
                  }
                  onChange={() =>
                    handleCheckboxChange(`${ele.id}PROVIDED`, index)
                  }
                />
                PROVIDED BY CO.
                <Checkbox
                  value={"BY AGENCY"}
                  checked={
                    selectedCheckbox[index]?.isChecked === `${ele.id}AGENCY`
                  }
                  onChange={() =>
                    handleCheckboxChange(`${ele.id}AGENCY`, index)
                  }
                />{" "}
                BY AGENCY
                <Checkbox
                  value={"RAISE INV"}
                  checked={
                    selectedCheckbox[index]?.isChecked === `${ele.id}RAISE`
                  }
                  onChange={() => handleCheckboxChange(`${ele.id}RAISE`, index)}
                />
                RAISE INV
              </TableCell3>
              <TableCell3>
                {" "}
                <Checkbox />
              </TableCell3>
              <TableCell3>
                {" "}
                <UnlabeledInput
                  type="text"
                  value={ele.invoice_service_charges}
                  onchange={(value) =>
                    onUpdateRow(index, {
                      ...ele,
                      invoice_service_charges: value,
                    })
                  }
                />
              </TableCell3>
              <TableCell3>
                <CustomSelectComponentUnlabeled
                  value={ele.invoice_service_currency}
                  onChange={(value: any) =>
                    onUpdateRow(index, {
                      ...ele,
                      invoice_service_currency: value,
                    })
                  }
                  options={selectOptionConveter({
                    options: currencyList,
                    options_struct: { name: "name", value: "id" },
                  })}
                />{" "}
              </TableCell3>
              <TableCell3>
                {" "}
                <UnlabeledInput
                  type="text"
                  value={ele.invoice_ticket_charges}
                  onchange={(value) =>
                    onUpdateRow(index, {
                      ...ele,
                      invoice_ticket_charges: value,
                    })
                  }
                />
              </TableCell3>
              <TableCell3>
                <CustomSelectComponentUnlabeled
                  value={ele.invoice_ticket_currency}
                  onChange={(value: any) =>
                    onUpdateRow(index, {
                      ...ele,
                      invoice_ticket_currency: value,
                    })
                  }
                  options={selectOptionConveter({
                    options: currencyList,
                    options_struct: { name: "name", value: "id" },
                  })}
                />
              </TableCell3>
            </TableRow3>
          ))}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default ServiceChargesTable;
