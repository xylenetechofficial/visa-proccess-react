import { useState } from "react";
import { CustomSelectComponent } from "../../../../componenets/SelectBox";
import { TickeDashboardInterface2 } from "../type";
import { TableBody3, TableCellNew, TableCellNew2, TableCellNew3, TableHead3New, TableHeadCell, TableHeadCellNew, TableHeadNew, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
import { Table } from "flowbite-react";

export default function Main(props: {
  TicketDashboardList: TickeDashboardInterface2[];
  // onChange: (value: TicketDashboardInterface[]) => void;
  TicketToBeBooked: (value: any) => void;
  underProcess: (value: any) => void;
  AgencyInvoiceAwaiting: (value: any) => void;
  tryingFunction: (value: any) => void;
}) {
  const extraData = {
    total_ticket_to_be_booked: 0,
    total_ticket_under_process: 0,
    total_ticket_trying: 0,
    total_agency_invoice_awaiting: 0,
    total_ticket_under_process_trying: 0,
  };

  return (
    <>
      <div className="overflow-auto">
        <Table>
          <TableHead3New>
            <TableHeadRow3>
              <TableHeadCell>
                Sector
              </TableHeadCell>
              <TableHeadCell>
                TICKET TO BE BOOKED
              </TableHeadCell>
              <th scope="col" className="px-24 py-3 border-b">
                UNDER BOOKING
              </th>
              <TableHeadCell>
                AGENCY INVOICE AWAITING
              </TableHeadCell>
            </TableHeadRow3>
            <TableHeadRow3>
              <TableHeadCell><></></TableHeadCell>
              <TableHeadCellNew><></></TableHeadCellNew>
              <div className="grid grid-cols-2 gap-0">
                <TableHeadCell>
                  under process
                </TableHeadCell>
                <TableHeadCellNew>
                  trying
                </TableHeadCellNew>
              </div>
              <TableHeadCell><></></TableHeadCell>
            </TableHeadRow3>
          </TableHead3New>
          <TableBody3>
            {props.TicketDashboardList.map((ticket, index) => {
              extraData.total_ticket_to_be_booked =
                extraData.total_ticket_to_be_booked +
                ticket.ticket_to_be_booked;
              extraData.total_ticket_trying =
                extraData.total_ticket_trying + ticket.ticket_trying;
              extraData.total_ticket_under_process =
                extraData.total_ticket_under_process +
                ticket.ticket_under_process;
              extraData.total_agency_invoice_awaiting =
                extraData.total_agency_invoice_awaiting +
                ticket.agency_invoice_awaiting;

              extraData.total_ticket_under_process_trying =
                extraData.total_ticket_under_process +
                extraData.total_ticket_trying;
              if (props.TicketDashboardList.length - 1 <= index)
                return (
                  <>
                    <TableRow3 key={index} >
                      <TableHeadNew>
                        {ticket.sector}
                      </TableHeadNew>
                      <TableCellNew2>
                      <span
                          className="text-red-600 cursor-pointer px-10"
                          onClick={() => {
                            props.TicketToBeBooked(ticket);
                          }}
                        >
                          {ticket.ticket_to_be_booked}
                        </span>
                      </TableCellNew2>
                      <div className="grid grid-cols-2 gap-0">
                        <TableCellNew2>
                        <span
                            className="text-red-600 cursor-pointer px-10"
                            onClick={() => {
                              props.underProcess(ticket);
                            }}
                          >
                            {ticket.ticket_under_process}
                          </span>
                        </TableCellNew2>
                        <TableCellNew>
                        <span
                            className="text-red-600 cursor-pointer px-10"
                            onClick={() => {
                              props.tryingFunction(ticket);
                            }}
                          >
                            {ticket.ticket_trying}
                          </span>
                        </TableCellNew>
                      </div>

                      <TableCellNew2>
                      <span
                          className="text-red-600 cursor-pointer px-10"
                          onClick={() => {
                            props.AgencyInvoiceAwaiting(ticket);
                          }}
                        >
                          {ticket.agency_invoice_awaiting}
                        </span>
                      </TableCellNew2>
                    </TableRow3>

                    <TableRow3 key={"total"} >
                      <TableHeadNew>
                       <span className="text-red-500"> Total</span>
                      </TableHeadNew>
                      <TableCellNew>
                       <span className="text-red-600 px-10" > {extraData.total_ticket_to_be_booked}</span>
                      </TableCellNew>
                      <div className="grid grid-cols-2  gap-0">
                        <TableCellNew2>
                        <span className="text-red-600 px-10" >   {extraData.total_ticket_under_process}</span>
                        </TableCellNew2>
                        <TableCellNew>
                        <span className="text-red-600 px-10" > {extraData.total_ticket_trying}</span>
                        </TableCellNew>
                      </div>

                      <TableCellNew2>
                      <span className="text-red-600 px-10" >  {extraData.total_agency_invoice_awaiting}</span>
                      </TableCellNew2>
                    </TableRow3>

                    <TableRow3>
                      <TableCellNew3><></></TableCellNew3>
                      <TableCellNew3><></></TableCellNew3>
                      <div className="flex  border justify-around">
                        <td className="px-6 py-4 text-red-500">
                          {extraData.total_ticket_under_process_trying}
                        </td>
                      </div>
                      <TableCellNew3><></></TableCellNew3>
                    </TableRow3>
                  </>
                );
              else
                return (
                  <>
                   <TableRow3 key={index} >
                      <TableHeadNew>
                        {ticket.sector}
                      </TableHeadNew>
                      <TableCellNew2>
                      <span
                          className="text-red-600 cursor-pointer px-10"
                          onClick={() => {
                            props.TicketToBeBooked(ticket);
                          }}
                        >
                          {ticket.ticket_to_be_booked}
                        </span>
                      </TableCellNew2>
                      <div className="grid grid-cols-2 gap-0">
                        <TableCellNew2>
                        <span
                            className="text-red-600 cursor-pointer px-10"
                            onClick={() => {
                              props.underProcess(ticket);
                            }}
                          >
                            {ticket.ticket_under_process}
                          </span>
                        </TableCellNew2>
                        <TableCellNew>
                        <span
                            className="text-red-600 cursor-pointer px-10"
                            onClick={() => {
                              props.tryingFunction(ticket);
                            }}
                          >
                            {ticket.ticket_trying}
                          </span>
                        </TableCellNew>
                      </div>

                      <TableCellNew2>
                      <span
                          className="text-red-600 cursor-pointer px-10"
                          onClick={() => {
                            props.AgencyInvoiceAwaiting(ticket);
                          }}
                        >
                          {ticket.agency_invoice_awaiting}
                        </span>
                      </TableCellNew2>
                    </TableRow3>

                  </>
                );
            })} 
          </TableBody3>
        </Table>
      </div>

      {/* <div className="overflow-auto">
            <Table3>
                <TableHead3>
                    <TableHeadRow3>
                        {HEADERLIST.map((item) => (<TableHeadCell3> {item}</TableHeadCell3>))}
                    </TableHeadRow3>
                </TableHead3>
                <TableBody2>
                    {props.TicketDashboardList.map((item, index) => (

                        <TableRow3>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{item.setting_visa} </TableCell>
                            <TableCell>{item.job_order_no} </TableCell>
                            <TableCell>{item.company_name} </TableCell>
                            <TableCell>{item.candidate_name} </TableCell>
                            <TableCell>{item.pp_no} </TableCell>
                            <TableCell>{item.actual_profession} </TableCell>
                            <TableCell>{item.mofa_no} </TableCell>
                            <TableCell>{item.agent} </TableCell>
                            <TableCell>{item.rc_name} </TableCell>
                            <TableCell>{convertDateFormat(item.visa_received_date)} </TableCell>
                            <TableCell>{convertDateFormat(item.visa_expiry_date)} </TableCell>
                            <TableCell>{item.sector_from} </TableCell>
                            <TableCell>{item.sector_to} </TableCell>
                            <TableCell>{convertDateFormat(item.require_date)} </TableCell>
                            <TableCell>{item.priority} </TableCell>
                            <TableCell> {item.air_ticket} </TableCell>
                            <TableCell> {item.visa_authorization} </TableCell>
                            <TableCell>{item.division} </TableCell>
                            <TableCell><Checkbox  onChange={(e) => onUpdateRow(index,{...item, under_process:e.target.checked ? 'yes':'' })} /> </TableCell>
                            <TableCell><Checkbox  onChange={(e) => onUpdateRow(index,{...item,  trying:e.target.checked ? 'yes':''})} /></TableCell>
                        </TableRow3>
                    ))}
                </TableBody2>
            </Table3>
            </div> */}
    </>
  );
}
