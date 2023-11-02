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

const Table = (props:{onClickEdit:any,}) => {
  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3>sn. no</TableHeadCell3>
            <TableHeadCell3>name</TableHeadCell3>
            <TableHeadCell3>client id</TableHeadCell3>
            <TableHeadCell3>company</TableHeadCell3>

            <TableHeadCell3>action</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>

        <TableBody3>
          <TableRow3>
            <TableCell3>1</TableCell3>
            <TableCell3>1</TableCell3>
            <TableCell3>1</TableCell3>
            <TableCell3>1</TableCell3>

            <TableCell3>
              <BlueButton
                text={" EDIT"}
                onClick={() => {
                   props.onClickEdit();
                }}
              />
            </TableCell3>
          </TableRow3>
        </TableBody3>
      </Table3>
    </div>
  );
};

export default Table;
