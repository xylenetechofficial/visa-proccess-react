import { ClientAdditionalInvoiceInterface } from "../type";
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
import { convertDateFormat } from "../../../../utils/function";
import { useUserAuth } from "../../../context/UserAuthContext";

const Main = (props: {
  onClickEdit: (value: ClientAdditionalInvoiceInterface) => void;
  clientAdditionalInvoiceList: ClientAdditionalInvoiceInterface[];
  onChange: (value: ClientAdditionalInvoiceInterface[]) => void;
  setModalName: (value: string) => void;
  snoBase: number;
}) => {
  const { authPermissionList } = useUserAuth();
  const HEADERLIST = [
    "SR NO.",
    "COMPANY NAME",
    "INVOICE NUMBER",
    "INVOICE DATE",
    "INVOICE AMOUNT",
    "ACTION",
  ];

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
          {props.clientAdditionalInvoiceList?.map((item, index) => (
            <TableRow3 key={index}>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3>{item?.company_name}</TableCell3>
              <TableCell3>{item?.invoice_number}</TableCell3>
              <TableCell3>{convertDateFormat(item?.invoice_date)}</TableCell3>
              <TableCell3>{item?.invoice_amount}</TableCell3>
              <TableCell3>
                {authPermissionList.url_has("update") ? (
                  <BlueButton
                    text="Edit"
                    onClick={() => {
                      props.setModalName("edit");
                      props.onClickEdit(item);
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

export default Main;
