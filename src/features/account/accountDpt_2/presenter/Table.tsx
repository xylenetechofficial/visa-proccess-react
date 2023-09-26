
import {
   
    Table3,
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
  
  const AccountCandidatesListTable = (props: {
  
    candidatesList: any[];
    setCandidatesList: any
    data: any;
    setData: any;
    onClickEdit:(value:any)=>void
  }) => {
  
    const [date, setDate] = useState<any>([{},{}])
    console.log(props.data)
    return (
      <div className="overflow-auto">
  
        <Table3>
          <TableHead2>
            <TableHeadRow>
              <TableHeadCell> Sr No.</TableHeadCell>
              <TableHeadCell> PARTY CODE </TableHeadCell>
              <TableHeadCell> COMPANY NAME</TableHeadCell>
              <TableHeadCell> CANDIDATE NAME</TableHeadCell>
              <TableHeadCell> PASSPORT NO.</TableHeadCell>
              <TableHeadCell> ACTUAL PROFESSION </TableHeadCell>
              <TableHeadCell> VISA PROFESSION </TableHeadCell>
              <TableHeadCell> AGENT</TableHeadCell>
              <TableHeadCell> PHOTO CHARGES </TableHeadCell>
              <TableHeadCell> TRAINING CHARGES</TableHeadCell>
              <TableHeadCell> DOCUMENT CHARGES </TableHeadCell>
              <TableHeadCell> OTHER CHARGES</TableHeadCell>
              <TableHeadCell> DD CHARGES </TableHeadCell>
              <TableHeadCell> SERVICE CHARGES </TableHeadCell>
              <TableHeadCell> PARTIAL CHARGES</TableHeadCell>
              <TableHeadCell> CONSULATE SETTING CHARGES </TableHeadCell>
              <TableHeadCell> SECTOR CHARGES </TableHeadCell>
              <TableHeadCell> EXTRA SERVICE CHARGES </TableHeadCell>
              <TableHeadCell> AMOUNT RECEIVED </TableHeadCell>
              <TableHeadCell> EDIT </TableHeadCell>
             
  
            </TableHeadRow>
          </TableHead2>
          <TableBody2>
  {  date?.map((item :any,index:any) =>(
         <TableRow>
  
         <TableCell>{index + 1} </TableCell>
         <TableCell>{item.party_code} </TableCell>
         <TableCell> {item.company_name} </TableCell>
         <TableCell> {item.name}</TableCell>
         <TableCell>{item.passport_no} </TableCell>
         <TableCell>{item.actual_profession} </TableCell>
         <TableCell>{item.visa_profession} </TableCell>
         <TableCell> {item.agent_name}</TableCell>
         <TableCell>{item.photo_charges} </TableCell>
         <TableCell>{item.training_charges} </TableCell>
         <TableCell>{item.document_charges} </TableCell>
         <TableCell>{item.other_charges} </TableCell>
         <TableCell>{item.dd_charges} </TableCell>
         <TableCell>{item.services_charges} </TableCell>
         <TableCell> {item.partial_charges} </TableCell>
         <TableCell>{item.consulate_setting_charges} </TableCell>
         <TableCell>{item.sector_charges} </TableCell>
         <TableCell>{item.extra_service_tax} </TableCell>
         <TableCell>{item.amount_received} </TableCell>
         <TableCell> <RedButton text="Edit" onClick={()=>props.onClickEdit(item)}/></TableCell>
  
  
  
       </TableRow>
  
  ))}
     
  
  
          </TableBody2>
        </Table3>
  
      </div>
    );
  };
  
  export default AccountCandidatesListTable;
  