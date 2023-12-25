import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { BlueButton } from "../../../../componenets/CustomButton";
import { Checkbox } from "flowbite-react";
import { TicketIssueInterface } from "../type";
import { UnlabeledInput } from "../../../../componenets/Input";

export default function Main(props: {
  snoBase: number;
  onClickAdd: any,
  ticketIssueList: TicketIssueInterface[]
  onChange: (value: TicketIssueInterface[]) => void,
  actionType?: string
}) {
  function onUpdateRow(index: number, rowData: TicketIssueInterface) {
    const nextData = props.ticketIssueList.map((e, i) => {
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
              {props.actionType == "edit" ? <>
                <TableHeadCell3>select</TableHeadCell3>
              </> : ""}
              <TableHeadCell3>re-issue charges</TableHeadCell3>
            </TableHeadRow3>
          </TableHead3>

          <TableBody3>
            {props.ticketIssueList.map((ele, index) =>


              <TableRow3 key={index}>
                <TableCell3 >{index + props.snoBase + 1}</TableCell3>
                <TableCell3>{ele.candidate_name}</TableCell3>
                <TableCell3>{ele.company_name}</TableCell3>
                <TableCell3>{ele.passport_no}</TableCell3>
                <TableCell3>{ele.agent_name}</TableCell3>
                <TableCell3>{ele.rc_name}</TableCell3>
                <TableCell3>{ele.payment}</TableCell3>
                <TableCell3>{ele.given_to}</TableCell3>
                <TableCell3>{ele.departure_date}</TableCell3>
                <TableCell3>{ele.ticket_charges}</TableCell3>
                <TableCell3>{ele.ticketing_previous_reissue_charge}</TableCell3>
                {props.actionType == "edit" ? <>
                  <TableCell3>
                    <Checkbox onChange={() => console.log()} value={""}
                    />
                  </TableCell3>
                  <TableCell3>
                    <UnlabeledInput onchange={() => console.log()} value={""}
                    />
                  </TableCell3>
                </> : <>
                  <TableCell3>
                    <BlueButton
                      text={"Open to"}
                      onClick={() => {
                        props.onClickAdd(ele);
                      }}
                    />
                  </TableCell3>
                </>}
              </TableRow3>

            )}
          </TableBody3>
        </Table3>
      </div>
    </>
  );
}
