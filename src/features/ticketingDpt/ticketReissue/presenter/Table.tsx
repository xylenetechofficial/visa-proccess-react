import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow,
  TableRow3,
} from "../../../../componenets/Table";
import { BlueButton } from "../../../../componenets/CustomButton";
import { Checkbox } from "flowbite-react";
import { TicketReissueInterface } from "../type";

export default function Main(props: {  onClickEdit: any,
  ticketReissueList: TicketReissueInterface[],
  fetchTicketReissueList: any
}) {
  console.log(props.ticketReissueList, "Table")
  
  const onChange = ()=>{}
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
              <TableHeadCell3>re-issue charges</TableHeadCell3>
            </TableHeadRow3>
          </TableHead3>

          <TableBody3>
            {

  props.ticketReissueList.map((item,index) => (
    <TableRow3 key={index}>
    <TableCell3>{index + 1}</TableCell3>
    <TableCell3>{item.candidate_name}</TableCell3>
    <TableCell3>company name</TableCell3>
    <TableCell3>passport no</TableCell3>
    <TableCell3>agent</TableCell3>
    <TableCell3>payment</TableCell3>
    <TableCell3>given</TableCell3>
    <TableCell3>departure</TableCell3>
    <TableCell3>previous</TableCell3>
    <TableCell3>payment</TableCell3>
    <TableCell3>payment</TableCell3>
    <TableCell3>
    <Checkbox onChange={() => console.log()}
        />
    </TableCell3>
    <TableCell3>
      <BlueButton
        text={"Open to"}
        onClick={() => {
          props.onClickEdit();
        }}
      />
    </TableCell3>
  </TableRow3>
  ))
            }
           
          </TableBody3>
        </Table3>
      </div>
    </>
  );
}
