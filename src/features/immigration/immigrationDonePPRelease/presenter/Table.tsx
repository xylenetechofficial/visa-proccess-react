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

const ImmigrationDOnePPReleaseTable = (props: {

  RcPPRecieved: any;
  setRcRcPPRecieved: any
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
            <TableHeadCell> VISA SUBMITTED DATE </TableHeadCell>
            <TableHeadCell> VISA RECIEVED DATE </TableHeadCell>
            <TableHeadCell> AGENT</TableHeadCell>
            <TableHeadCell> TOTALSERVICES CHARGES</TableHeadCell>
            <TableHeadCell> AMOUNT RECEIVED </TableHeadCell>
            <TableHeadCell> AMOUNT RECEIVED(DELHI) </TableHeadCell>
            <TableHeadCell> GIVEN TO DELHI OFFICE DATE</TableHeadCell>
            <TableHeadCell> PP RECEIVED</TableHeadCell>
            <TableHeadCell> PP RECEIVED DATE</TableHeadCell>

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

export default ImmigrationDOnePPReleaseTable;
