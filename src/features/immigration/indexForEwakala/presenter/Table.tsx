import { useState } from "react";
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

const IndexForEwakalaTable = (props: {

  indexForEwakala: any;
  setIndexForEwakala: any
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
            
            <TableHeadCell> PARTY CODE </TableHeadCell>
            <TableHeadCell> COMPANY NAME</TableHeadCell>
            <TableHeadCell>RECEIVED DATE</TableHeadCell>
            <TableHeadCell> ACTUAL PROFESSION </TableHeadCell>
            <TableHeadCell> VISA QUANTITY </TableHeadCell>
            <TableHeadCell> VISA NUMBER </TableHeadCell>
            <TableHeadCell> VISA AUTHORIZATION </TableHeadCell>        
          </TableHeadRow>
        </TableHead2>
        <TableBody2>

          <TableRow>

            <TableCell> </TableCell>


           
            <TableCell>


            </TableCell>

          </TableRow>



        </TableBody2>
      </Table>

    </div>
  );
};

export default IndexForEwakalaTable;
