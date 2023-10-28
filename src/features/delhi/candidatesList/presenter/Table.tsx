
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
  import {  CustomSelectComponentUnlabeledv2,  selectOptionConveterv2 } from "../../../../componenets/SelectBox";
  import { useState } from "react";
  import { convertDateFormat } from "../../../../utils/function";
  
  const CandidatesListTable = (props: {
  
    candidatesList: any;
    setCandidatesList: any
    data: any;
    setData: any;
  }) => {
  
    const [date, setDate] = useState<any>([])
    console.log(props.data)
    return (
      <div className="overflow-auto">
  
        <Table>
          <TableHead2>
            <TableHeadRow>
              <TableHeadCell> Sr No.</TableHeadCell>
              <TableHeadCell> CONDIDATE NAME</TableHeadCell>
              <TableHeadCell> PASSPORT NO.</TableHeadCell>
              <TableHeadCell> COMPANY NAME</TableHeadCell>
              <TableHeadCell> PARTY CODE </TableHeadCell>
              <TableHeadCell> ACTUAL PROFESSION </TableHeadCell>
              <TableHeadCell> VISA PROFESSION </TableHeadCell>
              <TableHeadCell> AGENT</TableHeadCell>
              <TableHeadCell> VISA RECIEVED DATE </TableHeadCell>
              <TableHeadCell> VISA AUTHORIZATION </TableHeadCell>
              <TableHeadCell> TOTALSERVICES CHARGES</TableHeadCell>
              <TableHeadCell> AMOUNT RECEIVED </TableHeadCell>
              <TableHeadCell> AMOUNT RECEIVED(DELHI) </TableHeadCell>
            <TableHeadCell> SERVICE TAX</TableHeadCell> 
            <TableHeadCell> SERVICE TAX RECEIVED</TableHeadCell> 

              <TableHeadCell> AMOUNT </TableHeadCell>

              <TableHeadCell> GIVEN TO </TableHeadCell>
              <TableHeadCell> GIVEN DATE </TableHeadCell>
              
            </TableHeadRow>
          </TableHead2>
          <TableBody2>
            
              <TableRow>
  
                <TableCell> </TableCell>

                <TableCell>
                  <UnlabeledInput
                    
type="number"
                    
                    value
                    onchange={(value) => {
  
                    }}
                  />
                </TableCell>
                <TableCell>
  
  
                                </TableCell>
  
              </TableRow>
            
          
  
          </TableBody2>
        </Table>
  
      </div>
    );
  };
  
  export default CandidatesListTable;
  