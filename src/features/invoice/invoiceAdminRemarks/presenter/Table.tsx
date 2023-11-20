import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
import { Checkbox } from "flowbite-react";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { InvoiceAdminRemarkInterface } from "../type";
import { convertDateFormat } from "../../../../utils/function";
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";


const ClientInvoiceAddTable = (props: {
  InvoiceAdminRemarkList: InvoiceAdminRemarkInterface[];
  // setData:any
  snoBase:number,
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

      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> COMPANY NAME</TableHeadCell3>
            <TableHeadCell3> INVOICE TYPE</TableHeadCell3>
            <TableHeadCell3> INVOICE NUMBER</TableHeadCell3>
            <TableHeadCell3> INVOICE DATE </TableHeadCell3>
            <TableHeadCell3> TOTAL CHARGES </TableHeadCell3>
            <TableHeadCell3> INVOICE SECTOR </TableHeadCell3>
            <TableHeadCell3> COURIER DATE</TableHeadCell3>
            <TableHeadCell3> Received Status</TableHeadCell3>
            <TableHeadCell3> Received Date</TableHeadCell3>
            <TableHeadCell3> Given To</TableHeadCell3>
            <TableHeadCell3> Given To Date</TableHeadCell3>
            <TableHeadCell3> Given To Remarks</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.InvoiceAdminRemarkList?.map((ele, index) => (

            <TableRow3 key={index + 1}>

<TableCell3 >{index + props.snoBase+1}</TableCell3>
              <TableCell3> {ele.company_name}</TableCell3>
              <TableCell3> {ele.invoice_type}</TableCell3>
              <TableCell3>{ele.invoice_number}</TableCell3>
              <TableCell3>{convertDateFormat(ele.invoice_date)}</TableCell3>
              <TableCell3>{ele.total_charges}</TableCell3>
              <TableCell3> {ele.invoice_sector}</TableCell3>
              <TableCell3> {convertDateFormat(ele.courier_date ?? ``)}</TableCell3>
              <TableCell3>{ele.received_status}</TableCell3>
              <TableCell3>{convertDateFormat(ele.received_status_date ?? ``)}</TableCell3>
              <TableCell3>
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
                   }}/></TableCell3>
              <TableCell3>
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
                }} /></TableCell3>
              <TableCell3><UnlabeledInput type="text" value={ele.given_to_remarks} onchange={(value) =>{
                 onUpdateRow(index, { ...ele, given_to_remarks: value })
                //  props.setInvoiceAdminData((prev:any) => {
                //   const newData = [...prev];
                //   newData[index] = {
                //     ...newData[index],
                //     given_to_remarks: value,
                   
                //   };
                //   return newData;
                // });
                 }} /></TableCell3>
            </TableRow3>
          ))
          }

        </TableBody3>
      </Table3>

    </div>
  );
};

export default ClientInvoiceAddTable;
