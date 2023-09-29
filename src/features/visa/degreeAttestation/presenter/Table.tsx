import React from "react";
import {
  Table3,
  TableHead3,
  TableHeadCell,
  TableHeadRow,

} from "../../../../componenets/Table";

const DegreeAttestationTable = () => {
  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow>
            <TableHeadCell>sn. no</TableHeadCell>
            <TableHeadCell>candidate name</TableHeadCell>
            <TableHeadCell>p.p no</TableHeadCell>
            <TableHeadCell>actual position </TableHeadCell>
            <TableHeadCell>agent name</TableHeadCell>
            <TableHeadCell>rc name</TableHeadCell>
            <TableHeadCell>company</TableHeadCell>
            <TableHeadCell>amout payable to vendor</TableHeadCell>
            <TableHeadCell>amount receivale</TableHeadCell>
            <TableHeadCell>vendor name</TableHeadCell>
            <TableHeadCell>for visa process</TableHeadCell>
            <TableHeadCell>for degree cancelation charge</TableHeadCell>
          </TableHeadRow>

          
        </TableHead3>
      </Table3>
    </div>
  );
};

export default DegreeAttestationTable;
