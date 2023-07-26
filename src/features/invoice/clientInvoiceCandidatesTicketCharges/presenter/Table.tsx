import {
  Table,
  TableBody2,
  TableCell,
  TableHead2,
  TableHeadCell,
  TableHeadRow,
  TableRow,

} from "../../../../componenets/Table";

import { UnlabeledInput } from "../../../../componenets/Input";
import { CandidatesTicketChargesInterface } from "../type";
import { CustomSelectComponentUnlabeledv2 } from "../../../../componenets/SelectBox";
import { CurrencyList2 } from "../../../db";

const ClientInvoiceCandidatesTicketChargesTable = (props: {
  ClientInvoiceCandidatesTicketChargesList: CandidatesTicketChargesInterface[];
  onChange: (value: CandidatesTicketChargesInterface[]) => void
}) => {

  function onUpdateRow(index: number, rowData: CandidatesTicketChargesInterface) {
    const nextData = props.ClientInvoiceCandidatesTicketChargesList.map((e, i) => {
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
            <TableHeadCell> PARTY CODE </TableHeadCell>
            <TableHeadCell> COMPANY NAME</TableHeadCell>
            <TableHeadCell> CANDIDATE NAME</TableHeadCell>
            <TableHeadCell> PASSPORT NO.</TableHeadCell>
            <TableHeadCell> ACTUAL PROFESSION </TableHeadCell>
            <TableHeadCell> VISA PROFESSION </TableHeadCell>
            {/* <TableHeadCell> VISA RECIEVED DATE </TableHeadCell> */}
            <TableHeadCell> AGENT</TableHeadCell>
            <TableHeadCell> DIVISION </TableHeadCell>
            <TableHeadCell> VISA AUTHORIZATION </TableHeadCell>
            <TableHeadCell> RC </TableHeadCell>
            <TableHeadCell> OTHER CHARGES</TableHeadCell>
            <TableHeadCell> SERVICES CHARGES</TableHeadCell>
            <TableHeadCell> TICKET CHARGES</TableHeadCell>
          </TableHeadRow>
        </TableHead2>
        <TableBody2>
          {props.ClientInvoiceCandidatesTicketChargesList?.map((ele, index) => (
            <TableRow key={index + 1}>

              <TableCell> {index+1}</TableCell>
              <TableCell> {ele.party_code}</TableCell>
              <TableCell> {ele.company_name}</TableCell>
              <TableCell> {ele.candidate_name}</TableCell>
              <TableCell>{ele.passport_no}</TableCell>
              <TableCell>{ele.actual_profession}</TableCell>
              <TableCell>{ele.visa_profession}</TableCell>
              <TableCell> {ele.agent_name}</TableCell>
              {/* <TableCell> {ele.visa_received_date}</TableCell> */}
              <TableCell> {ele.division}</TableCell>
              <TableCell> {ele.visa_authorisation_name}</TableCell>
              <TableCell> {ele.rc_name}</TableCell>
              <TableCell> {ele.other_charges}</TableCell>
              <TableCell> {ele.service_charges}</TableCell>
              <TableCell>
                <UnlabeledInput
                  type="number"
                  // value={props.data[index]?.amount}
                  value={ele?.ticket_charges}
                  onchange={(value) => {
                    if (value) {
                      onUpdateRow(index, { ...ele, ticket_charges: parseInt(value) })
                        , console.log(value)
                    }
                    else {
                      onUpdateRow(index, { ...ele, ticket_charges: 0 })
                    }

                  }}
                />
                <CustomSelectComponentUnlabeledv2 
                value={ele.ticket_charge_currency}
                options={CurrencyList2}
                onChange={(value)=>{
                  if (value) {
                    onUpdateRow(index, { ...ele, ticket_charge_currency: value })
                      , console.log(value)
                  }
                  else {
                    onUpdateRow(index, { ...ele, ticket_charge_currency: value })
                  }
                }}
                />
              </TableCell>

            </TableRow>
          ))
          }

        </TableBody2>
      </Table>

    </div>
  );
};

export default ClientInvoiceCandidatesTicketChargesTable;
