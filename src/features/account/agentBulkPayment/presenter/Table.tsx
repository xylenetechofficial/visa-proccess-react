import React, { useState } from "react";
import { AccountDashboardInterface, AgentPaymentReceivedInterface } from "../type";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import { convertDateFormat } from "../../../../utils/function";
import { CustomButton2 } from "../../../../componenets/CustomComponents";
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";


const AccountDashboardTable = (props: {
  // accountDashboardList: AgentPaymentReceivedInterface[];
  accountDashboardList: any[];
  onClickEdit: any;
  onClickDelete: any;
  setModalName: any;
}) => {
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
              <TableCell3>{index +1}</TableCell3>
              <TableCell3> {ele?.agent_name}</TableCell3>
              <TableCell3>
             { convertDateFormat(ele.created_at)}</TableCell3>
              <TableCell3> {ele.amount}</TableCell3>
              <TableCell3> {ele.description}</TableCell3>
              <TableCell3> <CustomButton2 buttonText="Edit" onClick={()=>{props.onClickEdit(ele); props.setModalName("edit")}}/>   <CustomButton2 buttonText="Delete" onClick={()=>props.onClickDelete(ele)}/></TableCell3>
              </TableRow3>
          ))}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default AccountDashboardTable;
