
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
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
  
        <Table3>
          <TableHead3>
            <TableHeadRow3>
              <TableHeadCell3> Sr No.</TableHeadCell3>
              <TableHeadCell3> AGENT </TableHeadCell3>
              <TableHeadCell3> DATE</TableHeadCell3>
              <TableHeadCell3> AMOUNT</TableHeadCell3>
              <TableHeadCell3> DESCRIPTION</TableHeadCell3>
              <TableHeadCell3> ACTION </TableHeadCell3>
             
  
            </TableHeadRow3>
          </TableHead3>
          <TableBody3>
  {  date?.map((item :any,index:any) =>(
         <TableRow3>
  
         <TableCell3>{index + 1} </TableCell3>
         <TableCell3>{item.agent} </TableCell3>
         <TableCell3> {item.date} </TableCell3>
         <TableCell3> {item.amount}</TableCell3>
         <TableCell3>{item.description} </TableCell3>
         <TableCell3><RedButton text="Edit" onClick={()=>props.onClickEdit('edit')}/> </TableCell3> 
  
       </TableRow3>
  
  ))}
     
  
  
          </TableBody3>
        </Table3>
  
      </div>
    );
  };
  
  export default Main;
  