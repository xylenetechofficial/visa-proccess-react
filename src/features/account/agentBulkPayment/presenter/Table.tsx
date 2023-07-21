import React, { useState } from "react";
import { AccountDashboardInterface, AgentPaymentReceivedInterface } from "../type";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import {
  Table,
  Table2,
  TableBody,
  TableCell,
  TableHead,
  TableHead2,
  TableHeadCell,
  TableHeadCell2,
  TableHeadRow,
  TableHeadRow2,
  TableRow,
} from "../../../../componenets/Table";
import { convertDateFormat } from "../../../../utils/function";
import { CustomButton2 } from "../../../../componenets/CustomComponents";


const AccountDashboardTable = (props: {
  // accountDashboardList: AgentPaymentReceivedInterface[];
  accountDashboardList: any[];
  onClickEdit: any;
  onClickDelete: any;
  setModalName: any;
}) => {
  return (
    <div className="overflow-auto">
      

      <Table2>
        <TableHead2>
          <TableHeadRow2>
            <TableHeadCell2> Sr No.</TableHeadCell2>
            <TableHeadCell2> AGENT</TableHeadCell2>
            <TableHeadCell2> DATE </TableHeadCell2>
            <TableHeadCell2> AMOUNT </TableHeadCell2>
            <TableHeadCell2> DESCRIPTION </TableHeadCell2>
            <TableHeadCell2> ACTION </TableHeadCell2>
          </TableHeadRow2>
        </TableHead2>
         <TableBody>
          {props.accountDashboardList.map((ele, index) => (
            <TableRow key={index}>
              <TableCell>{index +1}</TableCell>
              <TableCell> {ele?.agent_name}</TableCell>
              <TableCell>
             { convertDateFormat(ele.created_at)}</TableCell>
              <TableCell> {ele.amount}</TableCell>
              <TableCell> {ele.description}</TableCell>
              <TableCell> <CustomButton2 buttonText="Edit" onClick={()=>{props.onClickEdit(ele); props.setModalName("edit")}}/>   <CustomButton2 buttonText="Delete" onClick={()=>props.onClickDelete(ele)}/></TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table2>
    </div>
  );
};

export default AccountDashboardTable;
