import { Checkbox } from "flowbite-react"
import { CustomCheckBox } from "../../../../componenets/Checkbox"
import { CustomSelectComponent } from "../../../../componenets/SelectBox"
import { Table3,   TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"
import { TicketDashboardInterface } from "../type";
import { convertDateFormat } from "../../../../utils/function";
import { BlueButton } from "../../../../componenets/CustomButton";

export default function Main(props:{
    // TicketDashboardList:TicketDashboardInterface[],
    // onChange:(value:TicketDashboardInterface[])=>void,
    TicketToBeBooked:any,
    underProcess:any,
    AgencyInvoiceAwaiting:any
}) {
    // const HEADERLIST = [
    //     'SR NO.', 'SETTING VISA', 'JOB ORDER NO', 'COMPANY NAME', 'CANDIDATE NAME', 'PP NO', 'ACTUAL PROFESSION', 'MUFA NO', 'AGENT', 'RC NAME', 'VISA RECEIVED DATE', 'VISA EXPIRE DATE', 'SECTOR FROM', 'SECTOR TO', 'REQUIRED DATE', 'PRIORITY', 'AIR TICKET', 'VISA AUTHORIZATION', ' DIVISION', 'UNDER PROCESS', 'TRYING'];
    //     function onUpdateRow(index: number, rowData: TicketDashboardInterface) {
    //         const nextData = props.TicketDashboardList.map((e, i) => {
    //           if (i === index) {
    //             // Increment the clicked counter
    //             return rowData;
    //           } else {
    //             // The rest haven't changed
    //             return e;
    //           }
    //         });
    //         props.onChange(nextData)
    //       }

    const fetchData = [
        {
          sector: "cochin riyadh",
          tickettobebooked: "3",
          underprocess: "3",
          trying: "3",
          agencyinvoiceawaiting: "4",
        },
        {
          sector: "mumbai dubai ",
          tickettobebooked: "3",
          underprocess: "3",
          trying: "3",
          agencyinvoiceawaiting: "4",
        },
    
        {
          sector: " mumbai jeddah ",
          tickettobebooked: "3",
          underprocess: "3",
          trying: "3",
          agencyinvoiceawaiting: "4",
        },
      ];
        return (

        <>
        <div className="overflow-auto py-6 w-3/4">
        <Table3>
          <TableHead3>
            <TableHeadRow3>
              <TableHeadCell3>Sector</TableHeadCell3>
              <TableHeadCell3>ticket to be booked</TableHeadCell3>
              <TableHeadCell3>under process</TableHeadCell3>
              <TableHeadCell3>trying</TableHeadCell3>
              <TableHeadCell3>agency invoice awaiting</TableHeadCell3>
            </TableHeadRow3>
          </TableHead3>
          <TableBody3>
         

            {
                    fetchData.map((ticket, index) =>
                    <TableRow3 key={index}>
                    <TableCell3> {ticket.sector}</TableCell3>
                    <TableCell3> <span onClick={() => {props.TicketToBeBooked(ticket)}}>{ticket.tickettobebooked}</span></TableCell3>
                    <TableCell3> <span onClick={() => {props.underProcess(ticket);}}>{ticket.underprocess}</span></TableCell3>
                    <TableCell3> <span onClick={() => {props.underProcess(ticket);}}>{ticket.trying}</span></TableCell3>
                    <TableCell3> <span onClick={() => {props.AgencyInvoiceAwaiting(ticket);}}>{ticket.agencyinvoiceawaiting}</span></TableCell3>
                    </TableRow3>
                    )
                }
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
    )
}