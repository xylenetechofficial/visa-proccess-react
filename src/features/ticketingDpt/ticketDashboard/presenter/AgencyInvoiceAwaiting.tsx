import { useEffect, useState } from "react";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { Table3, TableBody2, TableCell, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
import { TicketDashboardInterface } from "../type";
import { AgentInvoiceAwaitingInterface } from "../agentInvoiceAwaitingType";
import { convertDateFormat } from "../../../../utils/function";
import { Checkbox } from "@mui/material";
import { UnlabeledInput } from "../../../../componenets/Input";

export default function Main(props: { 
  onClose: any, 
  onChange:(value:AgentInvoiceAwaitingInterface[])=>void,
  agencyInvoiceAwaiting:AgentInvoiceAwaitingInterface[] }) {
  const onClickAdd = () => {
    alert("Amit");
  };

  function onUpdateRow(index: number, rowData: AgentInvoiceAwaitingInterface) {
    const nextData = props.agencyInvoiceAwaiting.map((e, i) => {
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
    <FullScreenModal
      buttonName=""
      handleClick={onClickAdd}
      title="Agency Invoice Awaiting"
      onClose={props.onClose}
    >
      <div className="overflow-auto">
        <Table3>
          <TableHead3>
            <TableHeadRow3>
                <TableHeadCell3>sr.no</TableHeadCell3>
                <TableHeadCell3>party code</TableHeadCell3>
                <TableHeadCell3>company name</TableHeadCell3>
                <TableHeadCell3>candidate name</TableHeadCell3>
                <TableHeadCell3>pp no.</TableHeadCell3>
                <TableHeadCell3>actual profession</TableHeadCell3>
                <TableHeadCell3>visa profession</TableHeadCell3>
                <TableHeadCell3>agent</TableHeadCell3>
                <TableHeadCell3>rc name</TableHeadCell3>
                <TableHeadCell3>visa received date</TableHeadCell3>
                <TableHeadCell3>visa expire date</TableHeadCell3>
                <TableHeadCell3>sector from</TableHeadCell3>
                <TableHeadCell3>sector to</TableHeadCell3>
                <TableHeadCell3>required date</TableHeadCell3>
                <TableHeadCell3>priority</TableHeadCell3>
                <TableHeadCell3>air ticket </TableHeadCell3>
                <TableHeadCell3>air line</TableHeadCell3>
                <TableHeadCell3>ticket issue date</TableHeadCell3>
                <TableHeadCell3>pnr no.</TableHeadCell3>
                <TableHeadCell3>departure date</TableHeadCell3>
                <TableHeadCell3>agency</TableHeadCell3>
                <TableHeadCell3>amount</TableHeadCell3>
                <TableHeadCell3>invoice no</TableHeadCell3>
                <TableHeadCell3>invoice date</TableHeadCell3>
            </TableHeadRow3>
          </TableHead3>
           <TableBody2>
            {props.agencyInvoiceAwaiting.map((item, index) => (
              <TableRow3>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.party_code} </TableCell>
                <TableCell>{item.company_name} </TableCell>
                <TableCell>{item.candidate_name} </TableCell>
                <TableCell>{item.passport_no} </TableCell>
                <TableCell>{item.actual_profession} </TableCell>
                <TableCell>{item.mofa_number} </TableCell>
                <TableCell>{item.agent_name} </TableCell>
                <TableCell>{item.rc_name} </TableCell>
                <TableCell>
                  {convertDateFormat(item.visa_received_date)}{" "}
                </TableCell>
                <TableCell>
                  {convertDateFormat(item.visa_expire_date)}{" "}
                </TableCell>
                <TableCell>{item.ticketing_sector_from} </TableCell>
                <TableCell>{item.ticketing_sector_to} </TableCell>
                <TableCell>{convertDateFormat(item.required_date)} </TableCell>
                <TableCell>{item.priority} </TableCell>
                <TableCell> {item.air_ticket} </TableCell>
                <TableCell> {item.air_line} </TableCell>
                <TableCell>{item.ticket_issue_date} </TableCell>
                <TableCell>{item.ticketing_pnr_no} </TableCell>
                <TableCell>{item.ticketing_departure_date} </TableCell>
                <TableCell>{item.agency} </TableCell>
                <TableCell>{item.amount} </TableCell>
                <TableCell><UnlabeledInput value={item.ticketing_invoice_no} onchange={(value)=>onUpdateRow(index,{...item,ticketing_invoice_no:value})} /></TableCell>
                <TableCell>{item.ticketing_invoice_date} </TableCell>
                
              </TableRow3>
            ))}
          </TableBody2> 
        </Table3>
      </div>
    </FullScreenModal>
  );
}
