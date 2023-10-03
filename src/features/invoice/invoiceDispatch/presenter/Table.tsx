import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
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
            <TableHeadCell3> <Checkbox />  Select </TableHeadCell3>
            <TableHeadCell3> Received <Checkbox /></TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.invoiceDispatchList?.map((ele, index) => (
          
            <TableRow3 key={index + 1}>

              <TableCell3> {index + 1}</TableCell3>
              <TableCell3> {ele.company_name}</TableCell3>
              <TableCell3> {ele.invoice_type}</TableCell3>
              <TableCell3>{ele.invoice_number}</TableCell3>
              <TableCell3>{convertDateFormat(ele.invoice_date)}</TableCell3>
              <TableCell3>{ele.total_charges}</TableCell3>
              <TableCell3> {ele.invoice_sector}</TableCell3>
              <TableCell3> {convertDateFormat(ele.courier_date)}</TableCell3>
              <TableCell3><Checkbox onChange={(e) => {
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
                 }} /> </TableCell3>
              <TableCell3>
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
              </TableCell3>
   
            </TableRow3>
          ))
          }

        </TableBody3>
      </Table3>

    </div>
  );
};

export default ClientInvoiceAddTable;
