import {
  Table,
  TableBody2,
  TableCell,
  TableHead2,
  TableHeadCell,
  TableHeadRow,
  TableRow,

} from "../../../../componenets/Table";

import { DateInput } from "../../../../componenets/Input";
import { CustomSelectComponentUnlabeled, selectOptionConveter, } from "../../../../componenets/SelectBox";
import { CourierDateInterface } from "../type";

import { CustomCheckBox } from "../../../../componenets/Checkbox";

import { SectorInterface } from "../../../masters/sector/type";
import { Checkbox } from "@mui/material";


const ClientInvoiceAddTable = (props: {
  CourierDateList: CourierDateInterface[];
  sectorList: SectorInterface[],
  onChange: (value: CourierDateInterface[]) => void,
  setCourierDateData: any
}) => {

  function onUpdateRow(index: number, rowData: any) {
    const nextData = props.CourierDateList.map((e, i) => {
      if (i === index) {
        // Increment the clicked counter
        return rowData;
      } else {
        // The rest haven't changed
        return e;
      }
    });
    props.onChange(nextData)

  }

  return (
    <div className="overflow-auto">

      <Table>
        <TableHead2>
          <TableHeadRow>
            <TableHeadCell> Sr No.</TableHeadCell>
            <TableHeadCell> COMPANY NAME</TableHeadCell>
            <TableHeadCell> INVOICE TYPE</TableHeadCell>
            <TableHeadCell> INVOICE NUMBER</TableHeadCell>
            <TableHeadCell> INVOICE DATE </TableHeadCell>
            <TableHeadCell> TOTAL CHARGES </TableHeadCell>
            <TableHeadCell> ALL</TableHeadCell>
            <TableHeadCell> INVOICE SECTOR </TableHeadCell>
            <TableHeadCell> COURIER DATE</TableHeadCell>
          </TableHeadRow>
        </TableHead2>
        <TableBody2>
          {props.CourierDateList?.map((ele: any, index) => (
            <TableRow key={index + 1}>

              <TableCell> {index + 1}</TableCell>
              <TableCell> {ele.company_name}</TableCell>
              <TableCell> {ele.invoice_type}</TableCell>
              <TableCell>{ele.invoice_number}</TableCell>
              <TableCell>{ele.invoice_date}</TableCell>
              <TableCell>{ele.total_charges}</TableCell>
              <TableCell> <Checkbox onChange={(e) => {

                onUpdateRow(index, { ...ele, is_selected: e.target.checked ? 'yes' : 'no' });
                if (e.target.checked) {
                  props.setCourierDateData((prev: any) => {

                    const newData = [...prev];
                    newData[index] = {
                      ...newData[index],
                      is_selected: e.target.checked ? 'Yes' : '',
                    };
                    return newData;
                  });
                }

              }} /></TableCell>
              <TableCell> <CustomSelectComponentUnlabeled
                options={selectOptionConveter({

                  options: props.sectorList,
                  options_struct: { name: "name", value: "id" },
                })}
                onChange={(value) => {
                  onUpdateRow(index, { ...ele, invoice_sector: value });
                  props.setCourierDateData((prev: any) => {

                    const newData = [...prev];
                    newData[index] = {
                      ...newData[index],
                      invoice_sector: value,
                     
                     
                    };
                    return newData;
                  });

                }} value={ele.invoice_sector} /></TableCell>
              <TableCell> <DateInput id="courier_date" onChange={(value) => {
                onUpdateRow(index, { ...ele, invoice_date: value, courier_date: value });
                props.setCourierDateData((prev: any) => {

                  const newData = [...prev];
                  newData[index] = {
                    ...newData[index],
                    courier_date: value,
                    company_name: ele.company_name,
                    invoice_number: ele.invoice_number,
                    invoice_date: ele.invoice_date,
                    invoice_type: ele.invoice_type,
                    total_charges: ele.total_charges,
                    bank_name: ele.bank_name,
                  };
                  return newData;
                });

              }} value={ele.courier_date} /></TableCell>
            </TableRow>
          ))
          }

        </TableBody2>
      </Table>

    </div>
  );
};

export default ClientInvoiceAddTable;
