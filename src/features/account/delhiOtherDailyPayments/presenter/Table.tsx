import React, { useState } from "react";
import {  AgentPaymentReceivedInterface } from "../type";
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
  accountDashboardList: AgentPaymentReceivedInterface[];
  onClickEdit: any;
  modalName:any,
  setModalName:any
}) => {
  const dummy = [1, 2];
  return (
    <>
    <div className="overflow-auto">
    <div className="text-xl p-3 font-bold text-gray-500 uppercase bg-[#F1F2F6] dark:bg-gray-500 dark:text-gray-500 w-auto">
            delhi/other daily payment 
                        </div>

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
          {dummy.map((ele, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              {/* <TableCell> {ele.id}</TableCell> */}
              <TableCell>MOHAMMAD RASHID </TableCell>
              <TableCell>
               L7252926
              </TableCell>
              <TableCell> SOUNDLINES ADMINISTERATIVE COMPANY</TableCell>
              <TableCell>  unregistered(delhi)</TableCell>
              <TableCell> 2400</TableCell>
              <TableCell>4500</TableCell>
              <TableCell> 09-feb-2022</TableCell>
              <TableCell> <p className="text-red-500 cursor-pointer font-medium" onClick={() => props.onClickEdit("editdelhiotherdailypayments", ele)}>YES{ele}/-</p></TableCell>
              <TableCell>yes</TableCell>
              <TableCell>
                <p className="text-red-500 cursor-pointer font-medium" onClick={() => props.onClickEdit("agentcommission", ele)}>
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
