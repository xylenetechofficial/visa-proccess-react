import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";

const ConsulateChargesTable = () => {
  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>
          <TableHeadCell3>sn. no</TableHeadCell3>
            <TableHeadCell3>candidate name</TableHeadCell3>
            <TableHeadCell3>party code </TableHeadCell3>
            <TableHeadCell3>company name</TableHeadCell3>
            <TableHeadCell3>passport no. </TableHeadCell3>
            <TableHeadCell3>actual profession</TableHeadCell3>
            <TableHeadCell3>visa profession</TableHeadCell3>
            <TableHeadCell3>agent</TableHeadCell3>
            <TableHeadCell3>mufa number</TableHeadCell3>
            <TableHeadCell3>visa authorization</TableHeadCell3>
            <TableHeadCell3>division</TableHeadCell3>
            <TableHeadCell3>visa submission </TableHeadCell3>
            <TableHeadCell3>visa fee</TableHeadCell3>
            <TableHeadCell3>consulate setting charges</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>

        <TableBody3>
          <TableRow3>
            <TableCell3>{1}</TableCell3>
            <TableCell3>candidate no.</TableCell3>
            <TableCell3>party code </TableCell3>
            <TableCell3>company name</TableCell3>
            <TableCell3>passport no. </TableCell3>
            <TableCell3>actual profession</TableCell3>
            <TableCell3>visa profession</TableCell3>
            <TableCell3>agent</TableCell3>
            <TableCell3>mufa number</TableCell3>
            <TableCell3>visa authorization</TableCell3>
            <TableCell3>division</TableCell3>
            <TableCell3>visa submission </TableCell3>
            <TableCell3>visa fee</TableCell3>
            <TableCell3>consulate setting charges</TableCell3>
          </TableRow3>
        </TableBody3>
      </Table3>
    </div>
  );
};

export default ConsulateChargesTable;
