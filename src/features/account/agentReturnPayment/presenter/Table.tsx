import { AgentReturnPaymentInterface } from "../type";
import {
  BlueButton,
  GreenButton,
  RedButton,
} from "../../../../componenets/CustomButton";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell2,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { convertDateFormat } from "../../../../utils/function";
import { deleteAgentReturnPayment } from "../repository";
import { confirmationMessage } from "../../../../utils/alert";
import { useUserAuth } from "../../../context/UserAuthContext";

const Table = (props: {
  snoBase: number;
  candidateList: AgentReturnPaymentInterface[];
  onClickAdd: (ele: AgentReturnPaymentInterface) => void;
  onClickEdit: (ele: AgentReturnPaymentInterface) => void;
  fetchAgentReturnPaymentList: () => void;
}) => {
  const { authPermissionList } = useUserAuth();
  const tableHeadings = [
    ["SR. NO."],
    ["Agent"],
    ["Amount"],
    ["Description"],
    ["Date"],
    ["Action"],
  ];
  const tableHeadingsComponent = tableHeadings.map((e) => (
    <TableHeadCell2> {e[0]}</TableHeadCell2>
  ));

  async function onClickRemove(id: number) {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (!flag) return;

    // call update
    deleteAgentReturnPayment(id);

    props.fetchAgentReturnPaymentList();
  }

  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>{tableHeadingsComponent}</TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.candidateList.map((ele, index) => (
            <TableRow3 key={index}>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3> {ele.agent_name}</TableCell3>
              <TableCell3> {ele.amount}</TableCell3>
              <TableCell3> {ele.description}</TableCell3>
              <TableCell3> {convertDateFormat(ele.created_at)}</TableCell3>
              <TableCell3>
                {/* <GreenButton text={"Add"}  onClick={() => {
                                    props.onClickAdd(ele)
                                }} /> */}
                {authPermissionList.url_has("update") ? (
                  <BlueButton
                    text={" Edit"}
                    onClick={() => {
                      props.onClickEdit(ele);
                    }}
                  />
                ) : (
                  ""
                )}

                {authPermissionList.url_has("delete") ? (
                  <RedButton
                    text={" Delete"}
                    onClick={() => {
                      onClickRemove(ele.id ?? 0);
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

export default Table;
