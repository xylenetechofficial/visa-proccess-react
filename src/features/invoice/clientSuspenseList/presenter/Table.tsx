import { ClientSuspenseInterface } from "../type";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import { convertDateFormat } from "../../../../utils/function";
import { useUserAuth } from "../../../context/UserAuthContext";

const RejectCancelApproveTable = (props: {
  clientSuspence: ClientSuspenseInterface[];
  onChange: (value: ClientSuspenseInterface[]) => void;
  onClickEdit: (value: ClientSuspenseInterface) => void;
  setModal: any;
  snoBase: number;
}) => {
  const { authPermissionList } = useUserAuth();
  const HEADERLIST = [
    "SR NO.",
    "COMPANY NAME",
    "PAYMENT RECEIVED DATE",
    "AMOUNT RECEIVED",
    "PAYMENT DESCRIPTION",
    "ACTION",
  ];

  function onUpdateRow(index: number, rowData: ClientSuspenseInterface) {
    const nextData = props.clientSuspence.map((e, i) => {
      if (i === index) {
        // Increment the clicked counter
        return rowData;
      } else {
        // The rest haven't changed
        return e;
      }
    });
    props.onChange(nextData);
  }
  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            {HEADERLIST.map((item) => (
              <TableHeadCell3> {item}</TableHeadCell3>
            ))}
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.clientSuspence?.map((item, index) => (
            <TableRow3 key={index}>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3>{item?.company_name}</TableCell3>
              <TableCell3>
                {convertDateFormat(item?.payment_received_date)}
              </TableCell3>
              <TableCell3>{item?.amount_received}</TableCell3>
              <TableCell3>{item?.payment_description}</TableCell3>
              <TableCell3>
                {authPermissionList.url_has("update") ? (
                  <BlueButton
                    text="Edit"
                    onClick={() => {
                      props.setModal("edit"), props.onClickEdit(item);
                    }}
                  />
                ) : (
                  ""
                )}
                {/* <RedButton text="Delete" /> */}
              </TableCell3>
            </TableRow3>
          ))}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default RejectCancelApproveTable;
