import React from "react";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { VisaIssueDateInterface } from "../type";
import { DateInput } from "../../../../componenets/Input";

const Table = (props: {
  snoBase: number,
  visaIssueDateList: VisaIssueDateInterface[],
  onChange: (value: VisaIssueDateInterface[]) => void,
}) => {

    function onUpdateRow(index: number, rowData: VisaIssueDateInterface) {
        const nextData: VisaIssueDateInterface[] = props.visaIssueDateList.map((e, i) => {
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
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> name</TableHeadCell3>
            <TableHeadCell3>company name</TableHeadCell3>
            <TableHeadCell3> passport no</TableHeadCell3>
            <TableHeadCell3>party code</TableHeadCell3>
            <TableHeadCell3> visa number</TableHeadCell3>
            <TableHeadCell3> mofa number</TableHeadCell3>
            <TableHeadCell3>visa issue date</TableHeadCell3>
            <TableHeadCell3> visa received date</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.visaIssueDateList.map((ele, index) => (
            <TableRow3 key={index}>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3> {ele.name}</TableCell3>
              <TableCell3> {ele.company_name}</TableCell3>
              <TableCell3> {ele.passport_no}</TableCell3>
              <TableCell3> {ele.party_code}</TableCell3>
              <TableCell3> {ele.visa_number}</TableCell3>
              <TableCell3> {ele.mofa_number}</TableCell3>
              <TableCell3>
                <DateInput
                  id=""
                  value={ele.visa_issue_date}
                  onChange={(value) => {
                    onUpdateRow(index, { ...ele, visa_issue_date: value })
                  }}
                />
              </TableCell3>

              <TableCell3>
                <DateInput
                  id=""
                  onChange={(value) => {
                    onUpdateRow(index, { ...ele, visa_received_date: value })
                  }}
                  value={ele.visa_received_date}
                />
              </TableCell3>
            </TableRow3>
          ))}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default Table;
