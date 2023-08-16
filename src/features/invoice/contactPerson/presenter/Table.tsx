import {
  Table,
  TableBody2,
  TableCell,
  TableHead2,
  TableHeadCell,
  TableHeadRow,
  TableRow,

} from "../../../../componenets/Table";
import { Checkbox } from "flowbite-react";
import { UnlabeledInput } from "../../../../componenets/Input";
import { ContactPersonInterface } from "../type";
import { convertDateFormat } from "../../../../utils/function";
const ClientInvoiceAddTable = (props: {
  invoiceContactPersonList: ContactPersonInterface[];
  // setData:any
  onChange: (value: ContactPersonInterface[]) => void
}) => {

  function onUpdateRow(index: number, rowData: ContactPersonInterface) {
    const nextData = props.invoiceContactPersonList.map((e, i) => {
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
            <TableHeadCell> COURIER DATE</TableHeadCell>
            <TableHeadCell> Courier Received Date</TableHeadCell>
            <TableHeadCell> Submitted Date</TableHeadCell>
            <TableHeadCell> Submitted By</TableHeadCell>
            <TableHeadCell><Checkbox /> All</TableHeadCell>
            <TableHeadCell> Contact Person Name</TableHeadCell>
            <TableHeadCell> Remarks</TableHeadCell>
          </TableHeadRow>
        </TableHead2>
        <TableBody2>
          {props.invoiceContactPersonList?.map((ele, index) => (
            <TableRow key={index + 1}>
              <TableCell> {index + 1}</TableCell>
              <TableCell> {ele.company_name}</TableCell>
              <TableCell> {ele.invoice_type}</TableCell>
              <TableCell>{ele.invoice_number}</TableCell>
              <TableCell>{convertDateFormat(ele.invoice_date??'')}</TableCell>
              <TableCell>{ele.total_charges}</TableCell>
              <TableCell> { convertDateFormat(ele.courier_date??'')}</TableCell>
              <TableCell>{convertDateFormat(ele.courier_received_date??'')}</TableCell>
              <TableCell>{convertDateFormat(ele.submitted_date??'')}</TableCell>
              <TableCell>{ele.submitted_by}</TableCell>
              <TableCell><Checkbox onClick={()=>{onUpdateRow(index, {...ele, id:ele.id})}}  /></TableCell>
              <TableCell><UnlabeledInput value={ele.contact_person_name} onchange={(value) => { onUpdateRow(index, {...ele, contact_person_name: value }) }} /></TableCell>
              <TableCell><UnlabeledInput value={ele.contact_person_remarks} onchange={(value) => { onUpdateRow(index, {...ele, contact_person_remarks: value }) }} /></TableCell>
            </TableRow>
          ))
          }

        </TableBody2>
      </Table>

    </div>
  );
};

export default ClientInvoiceAddTable;
