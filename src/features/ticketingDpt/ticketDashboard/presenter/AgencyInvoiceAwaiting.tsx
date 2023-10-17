import { useEffect, useState } from "react";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
import { TicketDashboardInterface } from "../type";
import { AgentInvoiceAwaitingInterface } from "../agentInvoiceAwaitingType";
import { convertDateFormat } from "../../../../utils/function";
import { Checkbox } from "@mui/material";
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { addAgencyInvoiceAwaitingList } from "../repository";

export default function Main(props: {
  onClose: any,
  onChange: (value: AgentInvoiceAwaitingInterface[]) => void,
  agencyInvoiceAwaiting: AgentInvoiceAwaitingInterface[]
}) {
  const onClickAdd = async () => {
    const newArray = []
    for (let i = 0; i < props.agencyInvoiceAwaiting.length; i++) {
      if (props.agencyInvoiceAwaiting[i].checked) {
        newArray.push(props.agencyInvoiceAwaiting[i])
      }
    }
    console.log(newArray)
    // call create
    const res = await addAgencyInvoiceAwaitingList(newArray)

    if (!res) {
      return;
    }
    props.onClose()
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
      buttonName="submit"
      handleClick={onClickAdd}
      title="Agency Invoice Awaiting"
      onClose={props.onClose}
    >
      <div className="overflow-auto">
        <Table3>
          <TableHead3>
            <TableHeadRow3>
              {["Sno",
                "party code",
                "company name",
                "candidate name",
                "pp no.",
                "actual profession",
                "visa profession",
                "agent",
                "rc name",
                "visa received date",
                "visa expire date",
                "sector from",
                "sector to",
                "required date",
                "priority",
                "air ticket ",
                "air line",
                "ticket issue date",
                "pnr no.",
                "departure date",
                "agency",
                "amount",
                "select",
                "invoice no",
                "invoice date",].map(e => <TableHeadCell3>{e}</TableHeadCell3>)}
            </TableHeadRow3>
          </TableHead3>
          <TableBody3>
            {props.agencyInvoiceAwaiting.map((item, index) => (
              <TableRow3>
                <TableCell3>{index + 1}</TableCell3>
                <TableCell3>{item.party_code} </TableCell3>
                <TableCell3>{item.company_name} </TableCell3>
                <TableCell3>{item.candidate_name} </TableCell3>
                <TableCell3>{item.passport_no} </TableCell3>
                <TableCell3>{item.actual_profession} </TableCell3>
                <TableCell3>{item.mofa_number} </TableCell3>
                <TableCell3>{item.agent_name} </TableCell3>
                <TableCell3>{item.rc_name} </TableCell3>
                <TableCell3>
                  {convertDateFormat(item.visa_received_date)}{" "}
                </TableCell3>
                <TableCell3>
                  {convertDateFormat(item.visa_expire_date)}{" "}
                </TableCell3>
                <TableCell3>{item.ticketing_sector_from} </TableCell3>
                <TableCell3>{item.ticketing_sector_to} </TableCell3>
                <TableCell3>{convertDateFormat(item.required_date)} </TableCell3>
                <TableCell3>{item.priority} </TableCell3>
                <TableCell3> {item.air_ticket} </TableCell3>
                <TableCell3> {item.air_line} </TableCell3>
                <TableCell3>{item.ticket_issue_date} </TableCell3>
                <TableCell3>{item.ticketing_pnr_no} </TableCell3>
                <TableCell3>{item.ticketing_departure_date} </TableCell3>
                <TableCell3>{item.agency} </TableCell3>
                <TableCell3>{item.amount} </TableCell3>
                <Checkbox onChange={(value) => onUpdateRow(index, { ...item, checked: value.target.checked ? true : false })} />
                <TableCell3><UnlabeledInput value={item.ticketing_invoice_no} onchange={(value) => onUpdateRow(index, { ...item, ticketing_invoice_no: value })} /></TableCell3>
                <TableCell3><DateInput id="sdbvhs" value={item.ticketing_invoice_date} onChange={(value) => onUpdateRow(index, { ...item, ticketing_invoice_date: value })} /></TableCell3>

              </TableRow3>
            ))}
          </TableBody3>
        </Table3>
      </div>
    </FullScreenModal>
  );
}
