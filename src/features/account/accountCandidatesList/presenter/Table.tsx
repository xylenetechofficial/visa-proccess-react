
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

const AccountCandidatesListTable = (props: {

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
            <TableHeadCell> CANDIDATE NO.</TableHeadCell>
            <TableHeadCell> PARTY CODE </TableHeadCell>
            <TableHeadCell> COMPANY NAME</TableHeadCell>
            <TableHeadCell> CANDIDATE NAME</TableHeadCell>
            <TableHeadCell> PASSPORT NO.</TableHeadCell>
            <TableHeadCell> ACTUAL PROFESSION </TableHeadCell>
            <TableHeadCell> VISA PROFESSION </TableHeadCell>
            <TableHeadCell> AGENT</TableHeadCell>
            <TableHeadCell> VISA RECIEVED DATE </TableHeadCell>
            <TableHeadCell> PROCESS CHARGES </TableHeadCell>
            <TableHeadCell> DOCUMENT CHARGES</TableHeadCell>
            <TableHeadCell> OTHER CHARGES </TableHeadCell>
            <TableHeadCell> SECTOR CHARGES</TableHeadCell>
            <TableHeadCell> PARTIAL CHARGES </TableHeadCell>
            <TableHeadCell> SERVICE CHARGES </TableHeadCell>
            <TableHeadCell> CONSULATE SETTING CHARGES</TableHeadCell>
            <TableHeadCell> CANCEL CHARGES </TableHeadCell>
            <TableHeadCell> FLIGHT TICKET AMOUNT </TableHeadCell>
            <TableHeadCell> TICKET CHARGES </TableHeadCell>
            <TableHeadCell> EXTRA SERVICE CHARGES </TableHeadCell>
            <TableHeadCell> AIR TICKET </TableHeadCell>
            <TableHeadCell> IS DEPLOYED </TableHeadCell>
            <TableHeadCell> CANCEL </TableHeadCell>

          </TableHeadRow>
        </TableHead2>
        <TableBody2>

          <TableRow>

            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>



          </TableRow>



        </TableBody2>
      </Table>

    </div>
  );
};

export default AccountCandidatesListTable;
