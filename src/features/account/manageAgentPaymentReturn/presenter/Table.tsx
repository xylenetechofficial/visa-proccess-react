
import {
    Table,
    TableBody2,
    TableCell,
    TableHead2,
    TableHeadCell,
    TableHeadRow,
    TableRow,
  
  } from "../../../../componenets/Table";
  import { Checkbox } from "@mui/material";
  import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
  import { CustomSelectComponentUnlabeledv2, selectOptionConveterv2 } from "../../../../componenets/SelectBox";
  import { useState } from "react";
  import { convertDateFormat } from "../../../../utils/function";
  
  import { RedButton } from "../../../../componenets/CustomButton";
  
  const Main = (props: {
  
    agentList: any[];
   
    onClickEdit:(value:string)=>void
  }) => {
  
    const [date, setDate] = useState<any>([{},{}])
    
    return (
      <div className="overflow-auto">
  
        <Table>
          <TableHead2>
            <TableHeadRow>
              <TableHeadCell> Sr No.</TableHeadCell>
              <TableHeadCell> AGENT </TableHeadCell>
              <TableHeadCell> DATE</TableHeadCell>
              <TableHeadCell> AMOUNT</TableHeadCell>
              <TableHeadCell> DESCRIPTION</TableHeadCell>
              <TableHeadCell> ACTION </TableHeadCell>
             
  
            </TableHeadRow>
          </TableHead2>
          <TableBody2>
  {  date?.map((item :any,index:any) =>(
         <TableRow>
  
         <TableCell>{index + 1} </TableCell>
         <TableCell>{item.agent} </TableCell>
         <TableCell> {item.date} </TableCell>
         <TableCell> {item.amount}</TableCell>
         <TableCell>{item.description} </TableCell>
         <TableCell><RedButton text="Edit" onClick={()=>props.onClickEdit('edit')}/> </TableCell> 
  
       </TableRow>
  
  ))}
     
  
  
          </TableBody2>
        </Table>
  
      </div>
    );
  };
  
  export default Main;
  