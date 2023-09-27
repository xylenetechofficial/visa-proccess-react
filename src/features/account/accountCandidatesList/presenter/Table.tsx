
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,

} from "../../../../componenets/Table";
import { Checkbox } from "@mui/material";
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { CustomSelectComponentUnlabeledv2, selectOptionConveterv2 } from "../../../../componenets/SelectBox";
import { useState } from "react";
import { convertDateFormat } from "../../../../utils/function";
import { AccountCandidateInterface } from "../type";
import { RedButton } from "../../../../componenets/CustomButton";

const AccountCandidatesListTable = (props: {

  candidatesList: AccountCandidateInterface[];
  setCandidatesList: any
  data: any;
  setData: any;
  onClickEdit: (value: any) => void
}) => {

  const [date, setDate] = useState<any>([])
  console.log(props.data)
  return (
    <div className="overflow-auto">

      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> CANDIDATE NO.</TableHeadCell3>
            <TableHeadCell3> PARTY CODE </TableHeadCell3>
            <TableHeadCell3> COMPANY NAME</TableHeadCell3>
            <TableHeadCell3> CANDIDATE NAME</TableHeadCell3>
            <TableHeadCell3> PASSPORT NO.</TableHeadCell3>
            <TableHeadCell3> ACTUAL PROFESSION </TableHeadCell3>
            <TableHeadCell3> VISA PROFESSION </TableHeadCell3>
            <TableHeadCell3> AGENT</TableHeadCell3>
            <TableHeadCell3> VISA RECIEVED DATE </TableHeadCell3>
            <TableHeadCell3> PROCESS CHARGES </TableHeadCell3>
            <TableHeadCell3> DOCUMENT CHARGES</TableHeadCell3>
            <TableHeadCell3> OTHER CHARGES </TableHeadCell3>
            <TableHeadCell3> SECTOR CHARGES</TableHeadCell3>
            <TableHeadCell3> PARTIAL CHARGES </TableHeadCell3>
            <TableHeadCell3> SERVICE CHARGES </TableHeadCell3>
            <TableHeadCell3> CONSULATE SETTING CHARGES</TableHeadCell3>
            <TableHeadCell3> CANCEL CHARGES </TableHeadCell3>
            <TableHeadCell3> FLIGHT TICKET AMOUNT </TableHeadCell3>
            <TableHeadCell3> TICKET CHARGES </TableHeadCell3>
            <TableHeadCell3> EXTRA SERVICE CHARGES </TableHeadCell3>
            <TableHeadCell3> AIR TICKET </TableHeadCell3>
            <TableHeadCell3> IS DEPLOYED </TableHeadCell3>
            <TableHeadCell3> CANCEL </TableHeadCell3>

          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.candidatesList?.map((item, index) => (
            <TableRow3>

              <TableCell3>{index + 1} </TableCell3>
              <TableCell3>{item.id} </TableCell3>
              <TableCell3>{item.party_code} </TableCell3>
              <TableCell3> {item.company_name} </TableCell3>
              <TableCell3> {item.name}</TableCell3>
              <TableCell3>{item.passport_no} </TableCell3>
              <TableCell3>{item.actual_profession} </TableCell3>
              <TableCell3>{item.visa_profession} </TableCell3>
              <TableCell3> {item.agent_name}</TableCell3>
              <TableCell3>{item.visa_received_date} </TableCell3>
              <TableCell3>{item.process_charges} </TableCell3>
              <TableCell3>{item.document_charges} </TableCell3>
              <TableCell3>{item.other_charges} </TableCell3>
              <TableCell3>{item.sector_charges} </TableCell3>
              <TableCell3>{item.partial_charges} </TableCell3>
              <TableCell3> {item.service_charges} </TableCell3>
              <TableCell3>{item.consulate_setting_charges} </TableCell3>
              <TableCell3>{item.cancel_charges} </TableCell3>
              <TableCell3>{item.flight_ticket_amount} </TableCell3>
              <TableCell3>{item.ticket_charges} </TableCell3>
              <TableCell3>{item.extra_service_tax} </TableCell3>
              <TableCell3>{item.air_ticket} </TableCell3>
              <TableCell3>{item.is_deployed} </TableCell3>
              <TableCell3>
                {item.given_to == "Given To Cancelation" ? <>
                  <RedButton text="Cancel" onClick={() => props.onClickEdit(item)} />
                </> : <></>}
              </TableCell3>



            </TableRow3>

          ))}



        </TableBody3>
      </Table3>

    </div>
  );
};

export default AccountCandidatesListTable;
