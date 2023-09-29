import { TableBody, TableCell } from "@mui/material";
import {
  Table3,
  TableHead3,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableRow1,
} from "../../../../componenets/Table";
import { BlueButton } from "../../../../componenets/CustomButton";

export default function Main(props: {  onClickEdit: any }) {
  return (
    <>
      <div className="overflow-auto">
        <Table3>
          <TableHead3>
            <TableHeadRow>
              <TableHeadCell>sn. no</TableHeadCell>
              <TableHeadCell>candidate name</TableHeadCell>
              <TableHeadCell>company name</TableHeadCell>
              <TableHeadCell>agent</TableHeadCell>
              <TableHeadCell>rc</TableHeadCell>
              <TableHeadCell>payment received</TableHeadCell>
              <TableHeadCell>given to</TableHeadCell>
              <TableHeadCell>departure date</TableHeadCell>
              <TableHeadCell>ticket charges</TableHeadCell>
              <TableHeadCell>previous re-issue charges</TableHeadCell>
              <TableHeadCell>select</TableHeadCell>
              <TableHeadCell>re-issue charges</TableHeadCell>
            </TableHeadRow>
          </TableHead3>

          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>
                <BlueButton
                  text={"EDIT"}
                  onClick={() => {
                    props.onClickEdit();
                  }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table3>
      </div>
    </>
  );
}
