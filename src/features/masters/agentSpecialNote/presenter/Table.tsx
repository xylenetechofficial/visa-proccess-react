import { AgentSpecialNoteInterface } from "../type";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import { AgentInterface } from "../../agent/type";
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

const AgentSpecialNoteTable = (props: {
  agentSpecialNoteList: AgentSpecialNoteInterface[];
  onClickEdit: any;
  onClickDelete: any;
  agentList: AgentInterface[];
  snoBase: number;
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
            <TableHeadCell3> Agent</TableHeadCell3>
            <TableHeadCell3> Date</TableHeadCell3>
            <TableHeadCell3> Note</TableHeadCell3>
            <TableHeadCell3> Action</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.agentSpecialNoteList.map((ele, index) => (
            <TableRow3 key={index}>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3>
                {" "}
                {props.agentList.map((e) => (ele.agent == e.id ? e.name : ""))}
              </TableCell3>
              <TableCell3> {convertDateFormat(ele.date)}</TableCell3>
              <TableCell3> {ele.note}</TableCell3>
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

export default AgentSpecialNoteTable;
