import {
    Table,
    TableBody2,
    TableCell,
    TableHead2,
    TableHeadCell,
    TableHeadRow,
    TableRow,
  
  } from "../../../../componenets/Table";
  
  import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
  import { CustomSelectComponent, CustomSelectComponentUnlabeledv2, selectOptionConveterv2 } from "../../../../componenets/SelectBox";
  import { CourierDateInterface } from "../type";
  import { BankList, CurrencyList2 } from "../../../db";
import { CustomCheckBox } from "../../../../componenets/Checkbox";
  
  
  const ClientInvoiceAddTable = (props: {
    CourierDateList: CourierDateInterface[];
    // setData:any
    onChange: (value: CourierDateInterface[]) => void
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
  
        <Table>
          <TableHead2>
            <TableHeadRow>
              <TableHeadCell> Sr No.</TableHeadCell>
              <TableHeadCell> COMPANY NAME</TableHeadCell>
              <TableHeadCell> INVOICE TYPE</TableHeadCell>
              <TableHeadCell> INVOICE NUMBER</TableHeadCell>
              <TableHeadCell> INVOICE DATE </TableHeadCell>
              <TableHeadCell> TOTAL CHARGES </TableHeadCell>
              <TableHeadCell> ALL</TableHeadCell>
              <TableHeadCell> INVOICE SECTOR </TableHeadCell>
              <TableHeadCell> COURIER DATE</TableHeadCell>
            </TableHeadRow>
          </TableHead2>
          <TableBody2>
            {props.CourierDateList?.map((ele, index) => (
              <TableRow key={index + 1}>
  
                <TableCell> {index +1}</TableCell>
                <TableCell> {ele.company_name}</TableCell>
                <TableCell> {ele.invoice_type}</TableCell>
                <TableCell>{ele.invoice_number}</TableCell>
                <TableCell>{ele.invoice_date}</TableCell>
                <TableCell>{ele.total_charges}</TableCell>
                <TableCell> <CustomCheckBox option={[]} onChange={(e)=>{onUpdateRow(index,{...ele, is_selected:e.target.checked ? 'yes':'no'})}}/></TableCell>
                <TableCell> <CustomSelectComponent options={[{name:"",value:""}]} onChange={(value)=>{onUpdateRow(index,{...ele,invoice_sector:value})}}   value={ele.invoice_sector}/></TableCell>
                <TableCell> <DateInput id="courier_date" onChange={(value)=> onUpdateRow(index, {...ele, courier_date: value})}  value={ele.courier_date}/></TableCell>
                           </TableRow>
            ))
            }
  
          </TableBody2>
        </Table>
  
      </div>
    );
  };
  
  export default ClientInvoiceAddTable;
  