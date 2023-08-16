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
import { AddInvoiceInterface, InvoiceDispatchInterface } from "../type";
import { CustomSingleCheckBox } from "../../../../componenets/Checkbox";
import { useEffect, useState } from "react";
import { readSectorList } from "../../../masters/sector/repository";
import { convertDateFormat } from "../../../../utils/function";


const ClientInvoiceAddTable = (props: {
  invoiceDispatchList: InvoiceDispatchInterface[];
  // setData:any
  onChange: (value: InvoiceDispatchInterface[]) => void
  setInvoiceDispatchData:any
}) => {

  const [selectedCheckbox, setSelectedCheckbox] = useState([{isChecked:""}]);
  const handleCheckboxChange = (itemId: any,index:number) => {
    setSelectedCheckbox((prev)=>{
    const newData: any = [...prev];
    newData[index] = {
      ...newData[index],
      isChecked: itemId,
        };
    return newData;
  })
  };
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
    props.setInvoiceDispatchData(nextData);
  }

  const data =[1,3]
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
              <TableCell>{convertDateFormat(ele.invoice_date)}</TableCell>
              <TableCell>{ele.total_charges}</TableCell>
              <TableCell> {ele.invoice_sector}</TableCell>
              <TableCell> {convertDateFormat(ele.courier_date)}</TableCell>
              <TableCell><Checkbox onChange={(e) => {
                 onUpdateRow(index, { ...ele, id: ele.id, received_date: String(new Date()) })
                //  props.setInvoiceDispatchData((prev:any) => {
                //   const newData = [...prev];
                //   newData[index] = {
                //     ...newData[index],
                //     received_date: String(new Date()),
                //     id: ele.id
                //   };
                //   return newData;
                // });
                 }} /> </TableCell>
              <TableCell>
              <Checkbox
                  value={"Yes"}
                  checked={selectedCheckbox[index]?.isChecked === `${ele.id}yes`}
                  onChange={(value) => {
                    handleCheckboxChange(`${ele.id}yes`,index)  , onUpdateRow(index, { ...ele, received: value.target.checked ? 'Yes':'' })
                    // props.setInvoiceDispatchData((prev:any) => {
                    //   const newData = [...prev];
                    //   newData[index] = {
                    //     ...newData[index],
                    //     received: value.target.checked ? 'Yes':'' ,
                    //   };
                    //   return newData;
                    // });
                    }} />Yes
                <Checkbox
                  value={"Not"}
                  checked={selectedCheckbox[index]?.isChecked === `${ele.id}no`}
                  onChange={(value) => {
                    handleCheckboxChange(`${ele.id}no`,index) , onUpdateRow(index, { ...ele, received: value.target.checked ? 'No':'' }) 
                    // props.setInvoiceDispatchData((prev:any) => {
                    //   const newData = [...prev];
                    //   newData[index] = {
                    //     ...newData[index],
                    //     received: value.target.checked ? 'No':'' ,
                    //   };
                    //   return newData;
                    // });
                    }} />No
              </TableCell>
   
            </TableRow>
          ))
          }

        </TableBody2>
      </Table>

    </div>
  );
};

export default ClientInvoiceAddTable;
