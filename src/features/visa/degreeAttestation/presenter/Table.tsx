import React from "react";
import {
  Table3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,

} from "../../../../componenets/Table";

const DegreeAttestationTable = () => {
  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3>sn. no</TableHeadCell3>
            <TableHeadCell3>candidate name</TableHeadCell3>
            <TableHeadCell3>p.p no</TableHeadCell3>
            <TableHeadCell3>actual position </TableHeadCell3>
            <TableHeadCell3>agent name</TableHeadCell3>
            <TableHeadCell3>rc name</TableHeadCell3>
            <TableHeadCell3>company</TableHeadCell3>
            <TableHeadCell3>amout payable to vendor</TableHeadCell3>
            <TableHeadCell3>amount receivale</TableHeadCell3>
            <TableHeadCell3>vendor name</TableHeadCell3>
            <TableHeadCell3>for visa process</TableHeadCell3>
            <TableHeadCell3>for degree cancelation charge</TableHeadCell3>
          </TableHeadRow3>     
        </TableHead3>
      </Table3>
    </div>
  );
};

export default DegreeAttestationTable;
