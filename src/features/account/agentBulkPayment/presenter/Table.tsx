import React, { useState } from "react";
import {
  AccountDashboardInterface,
  AgentPaymentReceivedInterface,
} from "../type";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import { convertDateFormat } from "../../../../utils/function";
import { CustomButton2 } from "../../../../componenets/CustomComponents";
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

const AccountDashboardTable = (props: {
  // accountDashboardList: AgentPaymentReceivedInterface;
  snoBase: number;
  accountDashboardList: any[];
  onClickEdit: (accountDashboard: AgentPaymentReceivedInterface) => void;
  onClickDelete: (accountDashboard: AgentPaymentReceivedInterface) => void;
  setModalName: any;
}) => {
  const { authPermissionList } = useUserAuth();
  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> AGENT</TableHeadCell3>
            <TableHeadCell3> DATE </TableHeadCell3>
            <TableHeadCell3> AMOUNT </TableHeadCell3>
            <TableHeadCell3> DESCRIPTION </TableHeadCell3>
            <TableHeadCell3> ACTION </TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.accountDashboardList.map((ele, index) => (
            <TableRow3 key={index}>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3> {ele?.agent_name}</TableCell3>
              <TableCell3>{convertDateFormat(ele.created_at)}</TableCell3>
              <TableCell3> {ele.amount}</TableCell3>
              <TableCell3> {ele.description}</TableCell3>
              <TableCell3>
                {authPermissionList.url_has("update") ? (
                  <CustomButton2
                    buttonText="Edit"
                    onClick={() => {
                      props.onClickEdit(ele);
                      props.setModalName("edit");
                    }}
                  />
                ) : (
                  ""
                )}
                {authPermissionList.url_has("delete") ? (
                  <CustomButton2
                    buttonText="Delete"
                    onClick={() => props.onClickDelete(ele)}
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

export default AccountDashboardTable;
