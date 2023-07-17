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


const AccountDashboardTable = (props: {
  accountDashboardList: AccountDashboardInterface[];
  onClickEdit: any;
  onAmountReceived:any
}) => {
  return (
    <div className="overflow-auto">
      

      <Table2>
        <TableHead2>
          <TableHeadRow2>
            <TableHeadCell2> Sr No.</TableHeadCell2>
            <TableHeadCell2> PARTY CODE </TableHeadCell2>
            <TableHeadCell2> COMPANY NAME</TableHeadCell2>
            <TableHeadCell2> CONDIDATE NAME</TableHeadCell2>
            <TableHeadCell2> PASSPORT NO</TableHeadCell2>
            <TableHeadCell2> ACTUAL PROFESSION </TableHeadCell2>
            <TableHeadCell2> VISA PROFESSION </TableHeadCell2>
            <TableHeadCell2> AGENT NAME</TableHeadCell2>
            <TableHeadCell2> VISA RECEIVED DATE</TableHeadCell2>
            <TableHeadCell2> VISA AUTHORIZATION</TableHeadCell2>
            <TableHeadCell2> PHOTO CHARGES</TableHeadCell2>
            <TableHeadCell2> DOCUMENT CHARGES</TableHeadCell2>
            <TableHeadCell2> SERVICE CHARGES</TableHeadCell2>
            <TableHeadCell2> PARTIAL CHARGES</TableHeadCell2>
            <TableHeadCell2> SECTOR CHARGES </TableHeadCell2>
            <TableHeadCell2> TICKET CHARGES</TableHeadCell2>
            <TableHeadCell2> AMOUNT RECEIVED </TableHeadCell2>
            <TableHeadCell2> BALANCE AMOUNT</TableHeadCell2>
            <TableHeadCell2> AGENT COMMISSION</TableHeadCell2>
          </TableHeadRow2>
        </TableHead2>
         <TableBody>
          {props.accountDashboardList.map((ele, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              {/* <TableCell> {ele.id}</TableCell> */}
              <TableCell> {ele.party_code}</TableCell>
              <TableCell>
              {ele.company_name}
              </TableCell>
              <TableCell> {ele.name}</TableCell>
              <TableCell> {ele.passport_no}</TableCell>
              <TableCell> {ele.actual_profession}</TableCell>
              <TableCell>
               {ele.visa_profession}
              </TableCell>
              <TableCell> {ele.agent_name}</TableCell>
              <TableCell> {ele?.visa_received_date}</TableCell>
              <TableCell> {ele?.visa_authorization}</TableCell>
              <TableCell> {ele?.photo_charges}</TableCell>
              <TableCell> {ele?.document_charges}</TableCell>
              <TableCell> {ele.service_charges}</TableCell>
              <TableCell> 
                {ele?.partial_charges}
                </TableCell>
              <TableCell> {ele.sector_charges}</TableCell>            
              <TableCell>
                {ele?.ticket_charges}
              </TableCell>
              <TableCell>
              <p className="text-red-500 cursor-pointer font-medium" onClick={()=>{props.onClickEdit("paymentdetails",ele),props.onAmountReceived(ele.id)}}>
                  
                  {ele?.received}
                  </p>
              </TableCell>
              <TableCell>
               {ele.balance_amount}
              </TableCell>
              <TableCell>
               
               <p className="text-red-500 cursor-pointer font-medium" onClick={()=>props.onClickEdit("agentcommission",ele)}>
                  
                  {ele?.agent_commission}-UP
                  </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table2>
    </div>
  );
};

export default AccountDashboardTable;
