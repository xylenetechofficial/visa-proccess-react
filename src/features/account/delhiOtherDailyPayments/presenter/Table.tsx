import React, { useState } from "react";
import {  AgentPaymentReceivedInterface, DelhiOtherDailyPaymentInterface } from "../type";
import {  GreenButton,  } from "../../../../componenets/CustomButton";
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
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
    

      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> CONDIDATE NAME</TableHeadCell3>
            <TableHeadCell3> PASSPORT NO</TableHeadCell3>
            <TableHeadCell3> COMPANY NAME</TableHeadCell3>
            <TableHeadCell3> AGENT </TableHeadCell3>
            <TableHeadCell3> TOTAL SERVICE CHARGES </TableHeadCell3>
            <TableHeadCell3> AMOUNT RECEIVED</TableHeadCell3>
            <TableHeadCell3> RECEIVED AT </TableHeadCell3>
            <TableHeadCell3> SERVICE TAX</TableHeadCell3>
            <TableHeadCell3> SERVICE TAX RECEIVED</TableHeadCell3>
            <TableHeadCell3> EMPTY</TableHeadCell3>

          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.accountDashboardList.map((ele, index) => (
            <TableRow3 key={index}>
              <TableCell3>{index + 1}</TableCell3>
              {/* <TableCell3> {ele.id}</TableCell3> */}
              <TableCell3>{ele.candidate_name} </TableCell3>
              <TableCell3>
               {ele.passport_no}
              </TableCell3>
              <TableCell3> {ele.company_name}</TableCell3>
              <TableCell3>  {ele.agent_name}</TableCell3>
              <TableCell3> {ele.total_service_charges}</TableCell3>
              <TableCell3> {ele.dad_amount}</TableCell3>
              <TableCell3>{"Delhi"}</TableCell3>
              <TableCell3> {ele.dad_service_tax}</TableCell3>
              <TableCell3> {ele.service_tax_received}</TableCell3>
              {/* <TableCell3> <p className="text-red-500 cursor-pointer font-medium" onClick={() => props.onClickEdit("editdelhiotherdailypayments", ele)}>YES{ele.id}/-</p></TableCell3> */}
              {/* <TableCell3>yes</TableCell3> */}
              <TableCell3>
                <p className="text-red-500 cursor-pointer font-medium" onClick={() => props.onClickEdit("addinAccount", ele)}>
                  Add In Account</p>
              </TableCell3>
            </TableRow3>
          ))}
        </TableBody3>
      </Table3>
    </div>

 </>
  );
};

export default AccountDashboardTable;
