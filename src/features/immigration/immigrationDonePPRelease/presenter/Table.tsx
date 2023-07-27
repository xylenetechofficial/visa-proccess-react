import { useState } from "react";
import {
  Table,
  TableBody2,
  TableCell,
  TableHead2,
  TableHeadCell,
  TableHeadRow,
  TableRow,

} from "../../../../componenets/Table";

import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { ImmigrationInterface } from "../type";

const ImmigrationDOnePPReleaseTable = (props: {

  RcPPRecieved: ImmigrationInterface[];
  setRcRcPPRecieved: any
  onChange: (value: ImmigrationInterface[]) => void,
  data: any;
  setData: any;
}) => {

  const [date, setDate] = useState<any>([])
  console.log(props.data)

  function onUpdateRow(index: number, rowData: ImmigrationInterface) {
    const nextData = props.RcPPRecieved.map((e, i) => {
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
    <div className="overflow-auto">

      <Table>
        <TableHead2>
          <TableHeadRow>
            <TableHeadCell> Sr No.</TableHeadCell>
            <TableHeadCell> CONDIDATE NAME</TableHeadCell>
            <TableHeadCell> PASSPORT NO.</TableHeadCell>
            <TableHeadCell> COMPANY NAME</TableHeadCell>
            <TableHeadCell> PARTY CODE </TableHeadCell>
            <TableHeadCell> ACTUAL PROFESSION </TableHeadCell>
            <TableHeadCell> VISA PROFESSION </TableHeadCell>
            <TableHeadCell> VISA SUBMITTED DATE </TableHeadCell>
            <TableHeadCell> VISA RECIEVED DATE </TableHeadCell>
            <TableHeadCell> AGENT</TableHeadCell>
            <TableHeadCell> TOTALSERVICES CHARGES</TableHeadCell>
            <TableHeadCell> AMOUNT RECEIVED </TableHeadCell>
            <TableHeadCell> AMOUNT RECEIVED(DELHI) </TableHeadCell>
            <TableHeadCell> GIVEN TO DELHI OFFICE DATE</TableHeadCell>
            <TableHeadCell> PP RECEIVED</TableHeadCell>
            <TableHeadCell> PP RECEIVED DATE</TableHeadCell>

          </TableHeadRow>
        </TableHead2>
        <TableBody2>
          {props?.RcPPRecieved?.map((item, index) => (
            <TableRow>

              <TableCell>{index+1} </TableCell>
              <TableCell>{item?.name} </TableCell>
              <TableCell>{item?.passport_no} </TableCell>
              <TableCell>{item?.company_name} </TableCell>
              <TableCell>{item?.party_code} </TableCell>
              <TableCell>{item?.actual_profession} </TableCell>
              <TableCell>{item?.visa_profession} </TableCell>
              <TableCell>{item?.visa_issued_date} </TableCell>
              <TableCell>{item?.visa_received_date} </TableCell>
              <TableCell>{item?.agent_name} </TableCell>
              <TableCell> </TableCell>
              <TableCell>{item?.payment} </TableCell>
              <TableCell> {item?.given_to}</TableCell>
              <TableCell>{''} </TableCell>
              <TableCell>{''} </TableCell>

            </TableRow>



          ))}

        </TableBody2>
      </Table>

    </div>
  );
};

export default ImmigrationDOnePPReleaseTable;
