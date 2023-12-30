import { VisaAuthorisationInterface } from "../type";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { useUserAuth } from "../../../context/UserAuthContext";

const VisaAuthorisationTable = (props: {
  snoBase: number;
  visaAuthorisationList: VisaAuthorisationInterface[];
  onClickEdit: any;
  onClickDelete: any;
}) => {
  const { authPermissionList } = useUserAuth();
  return (
    <div
      className="overflow-auto"
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> Name</TableHeadCell3>
            <TableHeadCell3> Action</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.visaAuthorisationList &&
            props.visaAuthorisationList.map((ele, index) => (
              <TableRow3 key={index}>
                <TableCell3>{index + props.snoBase + 1}</TableCell3>
                <TableCell3> {ele.name}</TableCell3>
                <TableCell3>
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
                </TableCell3>
              </TableRow3>
            ))}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default VisaAuthorisationTable;
