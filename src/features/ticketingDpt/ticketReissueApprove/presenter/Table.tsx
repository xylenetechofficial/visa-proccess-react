import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { Checkbox } from "flowbite-react";
import { TicketReIssueApprovedInterface } from "../type";

export default function Main(props: {
  
  ticketReissueApproveList: TicketReIssueApprovedInterface[];
  setTicketReissueApproveList:(value :TicketReIssueApprovedInterface[])=>void
}) {
 

  return (
    <>
      <div className="overflow-auto">
        <Table3>
          <TableHead3>
            <TableHeadRow3>
              <TableHeadCell3>sn. no</TableHeadCell3>
              <TableHeadCell3>candidate name</TableHeadCell3>
              <TableHeadCell3>company name</TableHeadCell3>
              <TableHeadCell3>passport no</TableHeadCell3>
              <TableHeadCell3>agent</TableHeadCell3>
              <TableHeadCell3>rc</TableHeadCell3>
              <TableHeadCell3>payment received</TableHeadCell3>
              <TableHeadCell3>given to</TableHeadCell3>
              <TableHeadCell3>departure date</TableHeadCell3>
              <TableHeadCell3>ticket charges</TableHeadCell3>
              <TableHeadCell3>previous re-issue charges</TableHeadCell3>
              <TableHeadCell3>select</TableHeadCell3>
            </TableHeadRow3>
          </TableHead3>

          <TableBody3>
            {props.ticketReissueApproveList.map((item,index)=>
           <TableRow3>
           <TableCell3>{index+1}</TableCell3>
           <TableCell3>{item.candidate_name}</TableCell3>
           <TableCell3>{item.company_name}</TableCell3>
           <TableCell3>{item.passport_no}</TableCell3>
           <TableCell3>{item.agent_name}</TableCell3>
           <TableCell3>{item.payment}</TableCell3>
           <TableCell3>{item.given_to}</TableCell3>
           <TableCell3>{item.departure_date}</TableCell3>
           <TableCell3>{item.ticket_charges}</TableCell3>
           <TableCell3>{item.ticketing_previous_reissue_charge}</TableCell3>
            <TableCell3>
             <Checkbox
              onChange={(e) => {
                const updatedTicketReissueApproveList = [...props.ticketReissueApproveList]; 
                updatedTicketReissueApproveList[index].is_select =e.target.checked ? 1:0; 
                props.setTicketReissueApproveList(updatedTicketReissueApproveList);
              }}/>
           </TableCell3>
         </TableRow3>
           )}   
          </TableBody3>
        </Table3>
      </div>
    </>
  );
}
