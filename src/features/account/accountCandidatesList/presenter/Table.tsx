
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
import { AccountCandidateInterface } from "../type";

const AccountCandidatesListTable = (props: {

  candidatesList: AccountCandidateInterface[];
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
{  props.candidatesList?.map((item ,index) =>(
       <TableRow>

       <TableCell>{index + 1} </TableCell>
       <TableCell>{} </TableCell>
       <TableCell>{item.party_code} </TableCell>
       <TableCell> {item.company_name} </TableCell>
       <TableCell> {item.name}</TableCell>
       <TableCell>{item.passport_no} </TableCell>
       <TableCell>{item.actual_profession} </TableCell>
       <TableCell>{item.visa_profession} </TableCell>
       <TableCell> {item.agent_name}</TableCell>
       <TableCell>{item.visa_received_date} </TableCell>
       <TableCell>{item.process_charges} </TableCell>
       <TableCell>{item.document_charges} </TableCell>
       <TableCell>{item.other_charges} </TableCell>
       <TableCell>{item.sector_charges} </TableCell>
       <TableCell>{item.partial_charges} </TableCell>
       <TableCell> {item.service_charges} </TableCell>
       <TableCell>{item.consulate_setting_charges} </TableCell>
       <TableCell>{item.cancel_charges} </TableCell>
       <TableCell>{item.flight_ticket_amount} </TableCell>
       <TableCell>{item.ticket_charges} </TableCell>
       <TableCell>{item.extra_service_tax} </TableCell>
       <TableCell>{item.air_ticket} </TableCell>
       <TableCell>{item.is_deployed} </TableCell>
       <TableCell>{item.is_without} </TableCell>



     </TableRow>

))}
   


        </TableBody2>
      </Table>

    </div>
  );
};

export default AccountCandidatesListTable;
