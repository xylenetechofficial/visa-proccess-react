import { Checkbox } from "flowbite-react"
import { UnlabeledInput } from "../../../../componenets/Input";
import { CustomSelectComponent, CustomSelectComponentUnlabeled } from "../../../../componenets/SelectBox"
import { Table3, TableBody2,  TableCell,  TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"
import { TicketAgencyInvoicesInterface } from "../type";
import { convertDateFormat } from "../../../../utils/function";

export default function Main(props:{
    TicketAgencyInvoicesList:TicketAgencyInvoicesInterface[],
    onChange:(value:TicketAgencyInvoicesInterface[])=>void
}) {
    const HEADERLIST = [
        'SR NO.', 'PARTY CODE', 'COMPANY NAME', 'CANDIDATE NAME', 'PP NO', 'ACTUAL PROFESSION', 'VISA PROFESSION', 'AGENT', 'RC NAME', 'VISA RECEIVED DATE', 'VISA EXPIRE DATE',  'SECTOR FROM','SECTOR TO', 'REQUIRED DATE ', 'PRIORITY','AIR TICKET','AIR LINE','TICKET ISSUE DATE','PNR NO.','DEPARTURE DATE','AGENCY' ,'AMOUNT','INVOICE NO.','INVOICE DATE','TALLY ENTRY'];
    
        function onUpdateRow(index: number, rowData: TicketAgencyInvoicesInterface) {
            const nextData = props.TicketAgencyInvoicesList.map((e, i) => {
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

        <>
<div className="overflow-auto">
            <Table3>
                <TableHead3>
                    <TableHeadRow3>
                        {HEADERLIST.map((item) => (<TableHeadCell3> {item}</TableHeadCell3>))}
                    </TableHeadRow3>
                </TableHead3>
                <TableBody2>
                    {props.TicketAgencyInvoicesList.map((item, index) => (

                        <TableRow3>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{item.party_code} </TableCell>
                            <TableCell>{item.company_name} </TableCell>
                            <TableCell>{item.candidate_name} </TableCell>
                            <TableCell>{item.pp_no} </TableCell>
                            <TableCell>{item.actual_profession} </TableCell>
                            <TableCell>{item.visa_profession} </TableCell>
                            <TableCell>{item.agent} </TableCell>
                            <TableCell>{item.rc_name} </TableCell>
                            <TableCell>{convertDateFormat(item.visa_received_date)} </TableCell>
                            <TableCell>{convertDateFormat(item.visa_expiry_date)} </TableCell>
                            <TableCell>{item.sector_from} </TableCell>
                            <TableCell>{item.sector_to} </TableCell>
                            <TableCell>{convertDateFormat(item.required_date)} </TableCell>
                            <TableCell>{item.priority} </TableCell>
                            <TableCell>{item.air_ticket} </TableCell>
                            <TableCell>{item.air_line} </TableCell>
                            <TableCell>{convertDateFormat(item.ticket_issue_date)} </TableCell>
                            <TableCell>{item.pnr_no} </TableCell>
                            <TableCell>{convertDateFormat(item.departure_date)} </TableCell>
                            <TableCell>{item.agency} </TableCell>
                            <TableCell>{item.amount} </TableCell>
                            <TableCell>{item.invoice_no} </TableCell>
                            <TableCell>{convertDateFormat(item.invoice_date)} </TableCell>
                            <TableCell><Checkbox value={item.ticketing_tally_entry} onChange={(e) =>  onUpdateRow(index,{...item,ticketing_tally_entry: e.target.checked ? 1:0})} /></TableCell>
                        </TableRow3>
                    ))}
                </TableBody2>
            </Table3>
            </div>
        </>
    )
}