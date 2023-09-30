import React, { useState } from "react";
import {  AgentPaymentReceivedInterface, DelhiOtherDailyPaymentInterface } from "../type";
import {  GreenButton,  } from "../../../../componenets/CustomButton";
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
import { Checkbox } from "@mui/material";


const AccountDashboardTable = (props: {
  accountDashboardList: DelhiOtherDailyPaymentInterface[];
  onClickEdit: any;
  modalName:any,
  setModalName:any
}) => {
  const dummy = [1, 2];
  return (
    <>
    <div className="overflow-auto">
    

      <Table2>
        <TableHead2>
          <TableHeadRow2>
            <TableHeadCell2> Sr No.</TableHeadCell2>
            <TableHeadCell2> CONDIDATE NAME</TableHeadCell2>
            <TableHeadCell2> PASSPORT NO</TableHeadCell2>
            <TableHeadCell2> COMPANY NAME</TableHeadCell2>
            <TableHeadCell2> AGENT </TableHeadCell2>
            <TableHeadCell2> TOTAL SERVICE CHARGES </TableHeadCell2>
            <TableHeadCell2> AMOUNT RECEIVED</TableHeadCell2>
            <TableHeadCell2> RECEIVED AT </TableHeadCell2>
            <TableHeadCell2> SERVICE TAX</TableHeadCell2>
            <TableHeadCell2> SERVICE TAX RECEIVED</TableHeadCell2>
            <TableHeadCell2> EMPTY</TableHeadCell2>

          </TableHeadRow2>
        </TableHead2>
        <TableBody>
          {props.accountDashboardList.map((ele, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              {/* <TableCell> {ele.id}</TableCell> */}
              <TableCell>{ele.candidate_name} </TableCell>
              <TableCell>
               {ele.passport_no}
              </TableCell>
              <TableCell> {ele.company_name}</TableCell>
              <TableCell>  {ele.agent_name}</TableCell>
              <TableCell> {ele.total_service_charges}</TableCell>
              <TableCell> {ele.dad_amount}</TableCell>
              <TableCell>{"Delhi"}</TableCell>
              <TableCell> {ele.dad_service_tax}</TableCell>
              <TableCell> {ele.service_tax_received}</TableCell>
              {/* <TableCell> <p className="text-red-500 cursor-pointer font-medium" onClick={() => props.onClickEdit("editdelhiotherdailypayments", ele)}>YES{ele.id}/-</p></TableCell> */}
              {/* <TableCell>yes</TableCell> */}
              <TableCell>
                <p className="text-red-500 cursor-pointer font-medium" onClick={() => props.onClickEdit("addinAccount", ele)}>
                  Add In Account</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table2>
    </div>

 </>
  );
};

export default AccountDashboardTable;
