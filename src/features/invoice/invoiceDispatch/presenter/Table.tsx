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
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { InvoiceDispatchInterface } from "../type";


const ClientInvoiceAddTable = (props: {
  invoiceDispatchList: InvoiceDispatchInterface[];
  // setData:any
  onChange: (value: InvoiceDispatchInterface[]) => void
}) => {

  function onUpdateRow(index: number, rowData: any) {
    const nextData = props.invoiceDispatchList.map((e, i) => {
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
            <TableHeadCell> INVOICE SECTOR </TableHeadCell>
            <TableHeadCell> COURIER DATE</TableHeadCell>
            <TableHeadCell> <Checkbox />  Select </TableHeadCell>
            <TableHeadCell> Received <Checkbox /></TableHeadCell>
          </TableHeadRow>
        </TableHead2>
        <TableBody2>
          {props.invoiceDispatchList?.map((ele, index) => (
          
            <TableRow key={index + 1}>

              <TableCell> {index + 1}</TableCell>
              <TableCell> {ele.company_name}</TableCell>
              <TableCell> {ele.invoice_type}</TableCell>
              <TableCell>{ele.invoice_number}</TableCell>
              <TableCell>{ele.invoice_date}</TableCell>
              <TableCell>{ele.total_charges}</TableCell>
              <TableCell> {ele.invoice_sector}</TableCell>
              <TableCell> {ele.courier_date}</TableCell>
              {/* <TableCell><Checkbox onChange={(e) => { onUpdateRow(index, { ...ele, id: e.target.checked ? parseInt(ele.id ) : parseInt('') }) }} /> </TableCell> */}
              <TableCell><Checkbox onChange={(e) => { onUpdateRow(index, { ...ele, id: ele.id, received_date: String(new Date()) }) }} /> </TableCell>
              <TableCell><CustomRadioButton option={[{ name: "Yes", value: 'yes' }, { name: "No", value: "no" }]} onChange={(value) => { onUpdateRow(index, { ...ele, name: value }), console.log(value) }} /> </TableCell>
            </TableRow>
          ))
          }

        </TableBody2>
      </Table>

    </div>
  );
};

export default ClientInvoiceAddTable;
