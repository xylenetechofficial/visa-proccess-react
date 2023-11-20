import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";

import { DateInput } from "../../../../componenets/Input";
import { CustomSelectComponentUnlabeled, selectOptionConveter, } from "../../../../componenets/SelectBox";
import { CourierDateInterface } from "../type";

import { CustomCheckBox } from "../../../../componenets/Checkbox";

import { SectorInterface } from "../../../masters/sector/type";
import { Checkbox } from "@mui/material";
import { convertDateFormat } from "../../../../utils/function";


const ClientInvoiceAddTable = (props: {
  CourierDateList: CourierDateInterface[];
  sectorList: SectorInterface[],
  snoBase:number,
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

      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> COMPANY NAME</TableHeadCell3>
            <TableHeadCell3> INVOICE TYPE</TableHeadCell3>
            <TableHeadCell3> INVOICE NUMBER</TableHeadCell3>
            <TableHeadCell3> INVOICE DATE </TableHeadCell3>
            <TableHeadCell3> TOTAL CHARGES </TableHeadCell3>
            <TableHeadCell3> ALL</TableHeadCell3>
            <TableHeadCell3> INVOICE SECTOR </TableHeadCell3>
            <TableHeadCell3> COURIER DATE</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.CourierDateList?.map((ele: any, index) => (
            <TableRow3 key={index + 1}>

<TableCell3 >{index + props.snoBase+1}</TableCell3>
              <TableCell3> {ele.company_name}</TableCell3>
              <TableCell3> {ele.invoice_type}</TableCell3>
              <TableCell3>{ele.invoice_number}</TableCell3>
              <TableCell3>{convertDateFormat(ele.invoice_date)}</TableCell3>
              <TableCell3>{ele.total_charges}</TableCell3>
              <TableCell3> <Checkbox onChange={(e) => {

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

              }} /></TableCell3>
              <TableCell3> <CustomSelectComponentUnlabeled
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

                }}
                 value={ele.invoice_sector} /></TableCell3>
              <TableCell3> <DateInput id="courier_date" onChange={(value) => {
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

              }} value={ele.courier_date} /></TableCell3>
            </TableRow3>
          ))
          }

        </TableBody3>
      </Table3>

    </div>
  );
};

export default ClientInvoiceAddTable;
