import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
import { Checkbox } from "flowbite-react";
import { CustomRadioButton } from "../../../../componenets/RadioButton";

import { UnlabeledInput } from "../../../../componenets/Input";
import { InvoiceSubmitInterface } from "../type";
import { GreenButton } from "../../../../componenets/CustomButton";
import { useState } from "react";
import ViewSubmittedModal from './ViewSubmitModal';
import { convertDateFormat } from "../../../../utils/function";

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

      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> COMPANY NAME</TableHeadCell3>
            <TableHeadCell3> INVOICE TYPE</TableHeadCell3>
            <TableHeadCell3> INVOICE NUMBER</TableHeadCell3>
            <TableHeadCell3> INVOICE DATE </TableHeadCell3>
            <TableHeadCell3> TOTAL CHARGES </TableHeadCell3>
            <TableHeadCell3> INVOICE SECTOR</TableHeadCell3>
            <TableHeadCell3> COURIER DATE</TableHeadCell3>
            <TableHeadCell3>  RECEIVED STATUS</TableHeadCell3>
            <TableHeadCell3> RECEIVED STATUS DATE</TableHeadCell3>
            <TableHeadCell3> GIVEN TO</TableHeadCell3>
            <TableHeadCell3> GIVEN TO DATE</TableHeadCell3>
            <TableHeadCell3> STATUS</TableHeadCell3>
            <TableHeadCell3> REMARKS</TableHeadCell3>
            {/* <TableHeadCell3> SUBMIT REMARKS</TableHeadCell3> */}
            <TableHeadCell3> Action</TableHeadCell3>
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
              <TableCell3> {ele.invoice_sector}</TableCell3>
              <TableCell3>{convertDateFormat(ele.courier_date??'')}</TableCell3>
              <TableCell3>{ele.received_status}</TableCell3>
              <TableCell3>{convertDateFormat(ele.received_status_date??'')}</TableCell3>
              <TableCell3>{ele.given_to}</TableCell3>
              <TableCell3> {convertDateFormat(ele.given_to_date)}</TableCell3>
              <TableCell3> {ele.status}</TableCell3>
              <TableCell3><UnlabeledInput value={ele.remarks} onchange={(value) => { onUpdateRow(index, {...ele, remarks: value }) }} /></TableCell3>
              {/* <TableCell3><UnlabeledInput value={ele.submit_remarks} onchange={(value) => { onUpdateRow(index, {...ele, submit_remarks: value }) }} /></TableCell3> */}
              <TableCell3><GreenButton text='Submit' onClick={() => {setCurrentList(ele), onCreate(ele.id, ele),setModalName('viewPopup') }} /></TableCell3>
            </TableRow3>
          ))
          }

        </TableBody3>
      </Table3>
{
  modalName=== 'viewPopup' ? <ViewSubmittedModal onClose={()=>setModalName('')} submittedInvoice={currentList} />
  
  
  
  :''
}
    </div>
  );
};

export default ClientInvoiceAddTable;
