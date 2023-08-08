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

import { UnlabeledInput } from "../../../../componenets/Input";
import { InvoiceSubmitInterface } from "../type";
import { GreenButton } from "../../../../componenets/CustomButton";
import { useState } from "react";
import ViewSubmittedModal from './ViewSubmitModal';

const ClientInvoiceAddTable = (props: {
  invoiceContactPersonList: InvoiceSubmitInterface[];
  // setData:any
  onChange: (value: InvoiceSubmitInterface[]) => void
}) => {
  const [modalName, setModalName]= useState('');
  
  const [currentList, setCurrentList]= useState<any>()
  function onUpdateRow(index: number, rowData: InvoiceSubmitInterface) {
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
  const onCreate =(id:number, item :InvoiceSubmitInterface)=>{
    console.log(id,"id",item)
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
            <TableHeadCell> INVOICE SECTOR</TableHeadCell>
            <TableHeadCell> COURIER DATE</TableHeadCell>
            <TableHeadCell>  RECEIVED STATUS</TableHeadCell>
            <TableHeadCell> RECEIVED STATUS DATE</TableHeadCell>
            <TableHeadCell> GIVEN TO</TableHeadCell>
            <TableHeadCell> GIVEN TO DATE</TableHeadCell>
            <TableHeadCell> STATUS</TableHeadCell>
            <TableHeadCell> REMARKS</TableHeadCell>
            {/* <TableHeadCell> SUBMIT REMARKS</TableHeadCell> */}
            <TableHeadCell> Action</TableHeadCell>
          </TableHeadRow>
        </TableHead2>
        <TableBody2>
          {props.invoiceContactPersonList?.map((ele, index) => (
            <TableRow key={index + 1}>
              <TableCell> {index + 1}</TableCell>
              <TableCell> {ele.company_name}</TableCell>
              <TableCell> {ele.invoice_type}</TableCell>
              <TableCell>{ele.invoice_number}</TableCell>
              <TableCell>{ele.invoice_date}</TableCell>
              <TableCell>{ele.total_charges}</TableCell>
              <TableCell> {ele.invoice_sector}</TableCell>
              <TableCell>{ele.courier_date}</TableCell>
              <TableCell>{ele.received_status}</TableCell>
              <TableCell>{ele.received_status_date}</TableCell>
              <TableCell>{ele.given_to}</TableCell>
              <TableCell> {ele.given_to_date}</TableCell>
              <TableCell> {ele.status}</TableCell>
              <TableCell><UnlabeledInput value={ele.remarks} onchange={(value) => { onUpdateRow(index, {...ele, remarks: value }) }} /></TableCell>
              {/* <TableCell><UnlabeledInput value={ele.submit_remarks} onchange={(value) => { onUpdateRow(index, {...ele, submit_remarks: value }) }} /></TableCell> */}
              <TableCell><GreenButton text='Submit' onClick={() => {setCurrentList(ele), onCreate(ele.id, ele),setModalName('viewPopup') }} /></TableCell>
            </TableRow>
          ))
          }

        </TableBody2>
      </Table>
{
  modalName=== 'viewPopup' ? <ViewSubmittedModal onClose={()=>setModalName('')} submittedInvoice={currentList} />
  
  
  
  :''
}
    </div>
  );
};

export default ClientInvoiceAddTable;
