import { CustomCheckBox } from "../../../../componenets/Checkbox"
import { CustomSelectComponent } from "../../../../componenets/SelectBox"
import { Table3, TableBody2, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"
import { TicketDashboardInterface } from "../type";

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
                            <TableCell3>{index + 1}</TableCell3>
                            <TableCell3>{item.setting_visa} </TableCell3>
                            <TableCell3>{item.job_order_no} </TableCell3>
                            <TableCell3>{item.company_name} </TableCell3>
                            <TableCell3>{item.candidate_name} </TableCell3>
                            <TableCell3>{item.pp_no} </TableCell3>
                            <TableCell3>{item.actual_profession} </TableCell3>
                            <TableCell3>{item.mofa_no} </TableCell3>
                            <TableCell3>{item.agent} </TableCell3>
                            <TableCell3>{item.rc_name} </TableCell3>
                            <TableCell3>{item.visa_received_date} </TableCell3>
                            <TableCell3>{item.visa_expiry_date} </TableCell3>
                            <TableCell3>{item.sector_from} </TableCell3>
                            <TableCell3>{item.sector_to} </TableCell3>
                            <TableCell3>{item.require_date} </TableCell3>
                            <TableCell3>{item.priority} </TableCell3>
                            <TableCell3> {item.air_ticket} </TableCell3>
                            <TableCell3> {item.visa_authorization} </TableCell3>
                            <TableCell3>{item.division} </TableCell3>
                            <TableCell3><CustomCheckBox option={[]} onChange={(e) => onUpdateRow(index,{...item, under_process:e.target.checked ? 'yes':'' })} /> </TableCell3>
                            <TableCell3><CustomCheckBox option={[]} onChange={(e) => onUpdateRow(index,{...item,  trying:e.target.checked ? 'yes':''})} /></TableCell3>
                        </TableRow3>
                    ))}
                </TableBody2>
            </Table3>
            </div>
        </>
    )
}