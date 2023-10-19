import React from "react";
import {
  Table3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,

} from "../../../../componenets/Table";

const DegreeAttestationTable = () => {
  const HeaderList  = ['sn. no','candidate name','p.p no', 'actual position ',
   'agent name','rc name', 'company','amout payable to vendor', 'amount receivale',
    'vendor name', 'for visa process','for degree cancelation charge']
  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            {HeaderList.map((ele:string)=> 
            <TableHeadCell3>{ele}</TableHeadCell3>
            )}
            
          </TableHeadRow3>
        </TableHead3>
      </Table3>
    </div>
  );
};

export default DegreeAttestationTable;
