import { OtherDocsInterface } from "../type";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
} from "../../../../componenets/Table";
import { useUserAuth } from "../../../context/UserAuthContext";

const OtherDocsTable = (props: {
  snoBase: number;
  otherDocsList: OtherDocsInterface[];
  onClickEdit: any;
  onClickDelete: any;
}) => {
  const { authPermissionList } = useUserAuth();
  return (
    <div
      className="overflow-auto"
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Table>
        <TableHead>
          <TableHeadRow>
            <TableHeadCell> Sr No.</TableHeadCell>
            <TableHeadCell> Name</TableHeadCell>
            <TableHeadCell> Action</TableHeadCell>
          </TableHeadRow>
        </TableHead>
        <TableBody>
          {props.otherDocsList.map((ele, index) => (
            <TableRow key={index}>
              <TableCell>{index + props.snoBase + 1}</TableCell>
              <TableCell> {ele.name}</TableCell>
              <TableCell>
                {authPermissionList.url_has("update") ? (
                  <BlueButton
                    text={" Edit"}
                    preIcon="edit"
                    onClick={() => {
                      props.onClickEdit(ele);
                    }}
                  />
                ) : (
                  ""
                )}

                {authPermissionList.url_has("delete") ? (
                  <RedButton
                    text={"Delete"}
                    preIcon="delete"
                    onClick={() => {
                      props.onClickDelete(ele);
                    }}
                  />
                ) : (
                  ""
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OtherDocsTable;
