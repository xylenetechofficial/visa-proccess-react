import { Checkbox } from "flowbite-react"
import { CustomCheckBox } from "../../../../componenets/Checkbox"
import { CustomSelectComponent } from "../../../../componenets/SelectBox"
import { Table3, TableBody2,  TableCell, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"
import { TicketDashboardInterface } from "../type";
import { convertDateFormat } from "../../../../utils/function";

export default function Main(props:{
    TicketDashboardList:TicketDashboardInterface[],
    onChange:(value:TicketDashboardInterface[])=>void
}) {
    const HEADERLIST = [
        'SR NO.', 'SETTING VISA', 'JOB ORDER NO', 'COMPANY NAME', 'CANDIDATE NAME', 'PP NO', 'ACTUAL PROFESSION', 'MUFA NO', 'AGENT', 'RC NAME', 'VISA RECEIVED DATE', 'VISA EXPIRE DATE', 'SECTOR FROM', 'SECTOR TO', 'REQUIRED DATE', 'PRIORITY', 'AIR TICKET', 'VISA AUTHORIZATION', ' DIVISION', 'UNDER PROCESS', 'TRYING'];
        function onUpdateRow(index: number, rowData: TicketDashboardInterface) {
            const nextData = props.TicketDashboardList.map((e, i) => {
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
            </div>
        </>
    )
}