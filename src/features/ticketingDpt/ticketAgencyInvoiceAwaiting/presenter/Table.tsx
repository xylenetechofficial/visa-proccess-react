import React from "react";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { TicketAgencyInvoiceAwaitingInterface } from "../type";
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { CustomSingleCheckBox } from "../../../../componenets/Checkbox";

const Table = (props: {
  snoBase: number;
  ticketAgencyInvoiceAwaitingList: TicketAgencyInvoiceAwaitingInterface[];
  actionType?: string;
  onChange: (value: TicketAgencyInvoiceAwaitingInterface[]) => void;
}) => {
  const HEADERLIST = [
    "SR NO.",
    "PARTY CODE",
    "COMPANT NAME",
    "CANDIDATE NAME",
    "PP NO",
    "ACTUAL PROFESSION",
    "VISA PROFESSION",
    "AGENT",
    "RC NAME",
    "VISA RECEIVED DATE",
    "VISA EXPIRE DATE",
    "SECTOR FROM",
    "SECTOR TO",
    "REQUIRE DATE",
    "PRIORITY",
    "AIR TICKET",
    "AIR LINE",
    "TICKET ISSUE DATE",
    "PNR NO.",
    "DEPARTURE DATE",
    "AGENCY",
    "AMOUNT",
    "SELECT",
    "INVOICE NO.",
    "INVOICE DATE",
  ];

  function onUpdateRow(
    index: number,
    rowData: TicketAgencyInvoiceAwaitingInterface
  ) {
    const nextData = props.ticketAgencyInvoiceAwaitingList.map((e, i) => {
      if (i === index) {
        // Increment the clicked counter
        return rowData;
      } else {
        // The rest haven't changed
        return e;
      }
    });
    props.onChange(nextData);
  }
  return (
    <>
      <div className="overflow-auto">
        <Table3>
          <TableHead3>
            <TableHeadRow3>
              {HEADERLIST.map((item) => {
                 if (props.actionType == "read") {
                  // add & edit oparation
                  if (item == "SELECT") return
                }
                return (<TableHeadCell3> {item}</TableHeadCell3>)
              })}
            </TableHeadRow3>
          </TableHead3>
          <TableBody3>
            {props.ticketAgencyInvoiceAwaitingList.map((item, index) => (
              <TableRow3 key={index}>
                <TableCell3>{index + props.snoBase + 1} </TableCell3>
                <TableCell3>{item.party_code} </TableCell3>
                <TableCell3>{item.company_name} </TableCell3>
                <TableCell3>{item.candidate_name} </TableCell3>
                <TableCell3>{item.passport_no} </TableCell3>
                <TableCell3>{item.actual_profession} </TableCell3>
                <TableCell3>{item.visa_profession} </TableCell3>
                <TableCell3>{item.agent_name} </TableCell3>
                <TableCell3>{item.rc_name} </TableCell3>
                <TableCell3>{item.visa_received_date} </TableCell3>
                <TableCell3>{item.visa_expire_date} </TableCell3>
                <TableCell3>{item.ticketing_sector_from} </TableCell3>
                <TableCell3>{item.ticketing_sector_to} </TableCell3>
                <TableCell3>{item.required_date} </TableCell3>
                <TableCell3>{item.priority} </TableCell3>
                <TableCell3>{item.air_ticket} </TableCell3>
                <TableCell3>{item.air_line} </TableCell3>
                <TableCell3>{item.ticket_issue_date} </TableCell3>
                <TableCell3>{item.ticketing_pnr_no} </TableCell3>
                <TableCell3>{item.ticketing_departure_date} </TableCell3>
                <TableCell3>{item.agency} </TableCell3>
                <TableCell3>{item.amount} </TableCell3>

                {props.actionType == "read" ? <>
                {/* incase read oparation */}
                <TableCell3>
                  {item.ticketing_invoice_no}
                </TableCell3>
                <TableCell3>
                  {item.ticketing_invoice_date}
                </TableCell3>
              </> : <>
                {/* add & edit oparation */}
                <TableCell3>
                  <CustomSingleCheckBox
                    onChange={(value) => {
                      onUpdateRow(index, { ...item, checked: value })
                    }}
                    value={item.checked ? true : false}
                  />
                </TableCell3>

                <TableCell3>
                <UnlabeledInput
                  value={item.ticketing_invoice_no}
                  onchange={(value) => {
                    if (value) {
                      onUpdateRow(index, { ...item, ticketing_invoice_no: value })
                    }
                    else {
                      onUpdateRow(index, { ...item, ticketing_invoice_no: value })
                    }
                  }
                  }
                />
                </TableCell3>
                <TableCell3>
                  <DateInput
                    id="date"
                    value={item.ticketing_invoice_date}
                    onChange={(value) => {
                      if (value) {
                        onUpdateRow(index, { ...item, ticketing_invoice_date: value });
                        console.log(value);
                      } else {
                        onUpdateRow(index, { ...item, ticketing_invoice_date: "" });
                      }
                    }}
                  />
                </TableCell3>


              </>}

              </TableRow3>
            ))}
          </TableBody3>
        </Table3>
      </div>
    </>
  );
};

export default Table;
