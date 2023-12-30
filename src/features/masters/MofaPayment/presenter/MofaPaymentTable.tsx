import { MofaPaymentInterface } from "../type";
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
import { convertDateFormat } from "../../../../utils/function";
import { useUserAuth } from "../../../context/UserAuthContext";

const MofaPaymentTable = (props: {
  mofaPaymentList: MofaPaymentInterface[];
  onClickEdit: any;
  onClickDelete: any;
  snoBase: number;
}) => {
  const { authPermissionList } = useUserAuth();
  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> Visa Authorisation</TableHeadCell3>
            <TableHeadCell3> Payment</TableHeadCell3>
            <TableHeadCell3> Date</TableHeadCell3>
            <TableHeadCell3> Narration</TableHeadCell3>
            <TableHeadCell3> Action</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.mofaPaymentList.map((ele, index) => (
            <TableRow3 key={index}>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3> {ele.visa_authorisation_name ?? ""}</TableCell3>
              <TableCell3> {ele.payment}</TableCell3>
              <TableCell3> {convertDateFormat(ele.date)}</TableCell3>
              <TableCell3> {ele.narration}</TableCell3>
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

export default MofaPaymentTable;
