import { useState } from "react";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,

} from "../../../../componenets/Table";

import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { IndexEwakalaInterface } from "../type";

const IndexForEwakalaTable = (props: {
  snoBase:number,
  indexForEwakala: IndexEwakalaInterface[];
  setIndexForEwakala: any
  data: any;
  setData: any;
}) => {

  const [date, setDate] = useState<any>([])
  console.log(props.data)
  return (
    <div className="overflow-auto">

      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> PARTY CODE </TableHeadCell3>
            <TableHeadCell3> COMPANY NAME</TableHeadCell3>
            <TableHeadCell3>RECEIVED DATE</TableHeadCell3>
            <TableHeadCell3> ACTUAL PROFESSION </TableHeadCell3>
            <TableHeadCell3> VISA QUANTITY </TableHeadCell3>
            <TableHeadCell3> VISA NUMBER </TableHeadCell3>
            <TableHeadCell3> VISA AUTHORIZATION </TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props?.indexForEwakala?.map((item, index) => (
            <TableRow3 key={index}>

<TableCell3>{index + props.snoBase +1}</TableCell3>
              <TableCell3>{item?.party_code}</TableCell3>
              <TableCell3>{item?.company_name} </TableCell3>
              <TableCell3> {item?.received_date}</TableCell3>
              <TableCell3>  </TableCell3>
              <TableCell3>{item?.visa_quantity} </TableCell3>
              <TableCell3>{item?.visa_number} </TableCell3>
              <TableCell3>{item?.visa_authorization_name} </TableCell3>

            </TableRow3>

          ))}



        </TableBody3>
      </Table3>

    </div>
  );
};

export default IndexForEwakalaTable;
