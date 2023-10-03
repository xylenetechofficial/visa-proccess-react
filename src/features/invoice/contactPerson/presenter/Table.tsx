import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
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

      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> COMPANY NAME</TableHeadCell3>
            <TableHeadCell3> INVOICE TYPE</TableHeadCell3>
            <TableHeadCell3> INVOICE NUMBER</TableHeadCell3>
            <TableHeadCell3> INVOICE DATE </TableHeadCell3>
            <TableHeadCell3> TOTAL CHARGES </TableHeadCell3>
            <TableHeadCell3> COURIER DATE</TableHeadCell3>
            <TableHeadCell3> Courier Received Date</TableHeadCell3>
            <TableHeadCell3> Submitted Date</TableHeadCell3>
            <TableHeadCell3> Submitted By</TableHeadCell3>
            <TableHeadCell3><Checkbox /> All</TableHeadCell3>
            <TableHeadCell3> Contact Person Name</TableHeadCell3>
            <TableHeadCell3> Remarks</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.invoiceContactPersonList?.map((ele, index) => (
            <TableRow3 key={index + 1}>
              <TableCell3> {index + 1}</TableCell3>
              <TableCell3> {ele.company_name}</TableCell3>
              <TableCell3> {ele.invoice_type}</TableCell3>
              <TableCell3>{ele.invoice_number}</TableCell3>
              <TableCell3>{convertDateFormat(ele.invoice_date??'')}</TableCell3>
              <TableCell3>{ele.total_charges}</TableCell3>
              <TableCell3> { convertDateFormat(ele.courier_date??'')}</TableCell3>
              <TableCell3>{convertDateFormat(ele.courier_received_date??'')}</TableCell3>
              <TableCell3>{convertDateFormat(ele.submitted_date??'')}</TableCell3>
              <TableCell3>{ele.submitted_by}</TableCell3>
              <TableCell3><Checkbox onClick={()=>{onUpdateRow(index, {...ele, id:ele.id})}}  /></TableCell3>
              <TableCell3><UnlabeledInput value={ele.contact_person_name} onchange={(value) => { onUpdateRow(index, {...ele, contact_person_name: value }) }} /></TableCell3>
              <TableCell3><UnlabeledInput value={ele.contact_person_remarks} onchange={(value) => { onUpdateRow(index, {...ele, contact_person_remarks: value }) }} /></TableCell3>
            </TableRow3>
          ))
          }

        </TableBody3>
      </Table3>

    </div>
  );
};

export default ClientInvoiceAddTable;
