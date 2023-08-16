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
import { InvoiceAdminRemarkInterface } from "../type";
import { convertDateFormat } from "../../../../utils/function";
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";


const ClientInvoiceAddTable = (props: {
  InvoiceAdminRemarkList: InvoiceAdminRemarkInterface[];
  // setData:any
  setInvoiceAdminData:any,
  onChange: (value: InvoiceAdminRemarkInterface[]) => void
}) => {

  function onUpdateRow(index: number, rowData: any) {
    const nextData = props.InvoiceAdminRemarkList.map((e, i) => {
      if (i === index) {
        // Increment the clicked counter
        return rowData;
      } else {
        // The rest haven't changed
        return e;
      }
    });
    props.onChange(nextData);
    props.setInvoiceAdminData(nextData)

  }
  console.log(props.InvoiceAdminRemarkList)
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
            <TableHeadCell> Received Status</TableHeadCell>
            <TableHeadCell> Received Date</TableHeadCell>
            <TableHeadCell> Given To</TableHeadCell>
            <TableHeadCell> Given To Date</TableHeadCell>
            <TableHeadCell> Given To Remarks</TableHeadCell>
          </TableHeadRow>
        </TableHead2>
        <TableBody2>
          {props.InvoiceAdminRemarkList?.map((ele, index) => (

            <TableRow key={index + 1}>

              <TableCell> {index + 1}</TableCell>
              <TableCell> {ele.company_name}</TableCell>
              <TableCell> {ele.invoice_type}</TableCell>
              <TableCell>{ele.invoice_number}</TableCell>
              <TableCell>{convertDateFormat(ele.invoice_date)}</TableCell>
              <TableCell>{ele.total_charges}</TableCell>
              <TableCell> {ele.invoice_sector}</TableCell>
              <TableCell> {convertDateFormat(ele.courier_date ?? ``)}</TableCell>
              <TableCell>{ele.received_status}</TableCell>
              <TableCell>{convertDateFormat(ele.received_status_date ?? ``)}</TableCell>
              <TableCell>
                <UnlabeledInput value={ele.given_to}
                 onchange={(value)=>{
                  onUpdateRow(index,{...ele,given_to:value})
                  //  console.log(ele.id,"Sid"),
                  //  props.setInvoiceAdminData((prev:any)=>{
                  //   const newData = [...prev];
                  //   newData[index] = {
                  //     ...newData[index],
                  //     given_to: value,
                     
                  //   };
                  //   return newData;
                  //  })
                   }}/></TableCell>
              <TableCell>
                <DateInput id="date" value={ele.given_to_date} onChange={(value) => {
                onUpdateRow(index, { ...ele, given_to_date: value })
                // props.setInvoiceAdminData((prev:any) => {
                //   const newData = [...prev];
                //   newData[index] = {
                //     ...newData[index],
                //     given_to_date: value,
                //     id:ele.id,
                //   };
                //   return newData;
                // });
                }} /></TableCell>
              <TableCell><UnlabeledInput type="text" value={ele.given_to_remarks} onchange={(value) =>{
                 onUpdateRow(index, { ...ele, given_to_remarks: value })
                //  props.setInvoiceAdminData((prev:any) => {
                //   const newData = [...prev];
                //   newData[index] = {
                //     ...newData[index],
                //     given_to_remarks: value,
                   
                //   };
                //   return newData;
                // });
                 }} /></TableCell>
            </TableRow>
          ))
          }

        </TableBody2>
      </Table>

    </div>
  );
};

export default ClientInvoiceAddTable;
