import { useState } from "react";
import { CustomSelectComponent } from "../../../../componenets/SelectBox";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { TickeDashboardInterface2 } from "../type";


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
  }

  return (
    <>
      <div className="overflow-auto">
        <Table3>
          <TableHead3>
            <TableHeadRow3>
              <TableHeadCell3>Sector</TableHeadCell3>
              <TableHeadCell3>ticket to be booked</TableHeadCell3>
              <div className="w-auto">
                <h5 className="border border-b-black text-center font-bold text-xs py-2">under booking</h5>
                <TableHeadCell3>under process</TableHeadCell3>
                <TableHeadCell3>trying</TableHeadCell3>
              </div>
              <TableHeadCell3>agency invoice awaiting</TableHeadCell3>
            </TableHeadRow3>
          </TableHead3>
          <TableBody3>
            {props.TicketDashboardList.map((ticket, index) => {

              extraData.total_ticket_to_be_booked = extraData.total_ticket_to_be_booked + ticket.ticket_to_be_booked
              extraData.total_ticket_trying = extraData.total_ticket_trying + ticket.ticket_trying
              extraData.total_ticket_under_process = extraData.total_ticket_under_process + ticket.ticket_under_process
              extraData.total_agency_invoice_awaiting = extraData.total_agency_invoice_awaiting + ticket.agency_invoice_awaiting

              if ((props.TicketDashboardList.length - 1) <= index)
                return (
                  <>
                    <TableRow3 key={index}>
                      <TableCell3> {ticket.sector}</TableCell3>
                      <TableCell3>
                        {" "}
                        <span
                          className="text-red-600 cursor-pointer px-10"
                          onClick={() => {
                            props.TicketToBeBooked(ticket);
                          }}
                        >
                          {ticket.ticket_to_be_booked}
                        </span>
                      </TableCell3>
                      <div>
                        <TableCell3>
                          {" "}
                          <span
                            className="text-red-600 cursor-pointer px-10"
                            onClick={() => {
                              props.underProcess(ticket);
                            }}
                          >
                            {ticket.ticket_under_process}
                          </span>
                        </TableCell3>

                        <TableCell3>
                          {" "}
                          <span
                            className="text-red-600 cursor-pointer px-10"
                            onClick={() => {
                              props.tryingFunction(ticket);
                            }}
                          >
                            {ticket.ticket_trying}
                          </span>
                        </TableCell3>
                      </div>

                      <TableCell3>
                        <span
                          className="text-red-600 cursor-pointer px-10"
                          onClick={() => {
                            props.AgencyInvoiceAwaiting(ticket);
                          }}
                        >
                          {ticket.agency_invoice_awaiting}
                        </span>
                      </TableCell3>
                    </TableRow3>
                    <TableRow3 key={"dcbsdhc"}>
                      <TableCell3>Total</TableCell3>
                      <TableCell3>{extraData.total_ticket_to_be_booked}</TableCell3>
                      <TableCell3>{extraData.total_ticket_under_process}</TableCell3>
                      <TableCell3>{extraData.total_ticket_trying}</TableCell3>
                      <TableCell3>{extraData.total_agency_invoice_awaiting}</TableCell3>
                    </TableRow3>
                  </>)
              
              else  return (
            <TableRow3 key={index}>
              <TableCell3> {ticket.sector}</TableCell3>
              <TableCell3>
                {" "}
                <span
                  className="text-red-600 cursor-pointer px-10"
                  onClick={() => {
                    props.TicketToBeBooked(ticket);
                  }}
                >
                  {ticket.ticket_to_be_booked}
                </span>
              </TableCell3>
              <div>
                <TableCell3>
                  {" "}
                  <span
                    className="text-red-600 cursor-pointer px-10"
                    onClick={() => {
                      props.underProcess(ticket);
                    }}
                  >
                    {ticket.ticket_under_process}
                  </span>
                </TableCell3>

                <TableCell3>
                  {" "}
                  <span
                    className="text-red-600 cursor-pointer px-10"
                    onClick={() => {
                      props.tryingFunction(ticket);
                    }}
                  >
                    {ticket.ticket_trying}
                  </span>
                </TableCell3>
              </div>

              <TableCell3>
                <span
                  className="text-red-600 cursor-pointer px-10"
                  onClick={() => {
                    props.AgencyInvoiceAwaiting(ticket);
                  }}
                >
                  {ticket.agency_invoice_awaiting}
                </span>
              </TableCell3>
            </TableRow3>
            )
            })}

          </TableBody3>
        </Table3>
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
