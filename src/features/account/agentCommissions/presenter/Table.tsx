import React, { useState } from "react";
import { AccountDashboardInterface, AgentPaymentReceivedInterface } from "../type";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";


const AccountDashboardTable = (props: {
  accountDashboardList: AccountDashboardInterface[];
  onClickEdit: any;
  onAmountReceived:any
}) => {
  return (
    <div className="overflow-auto">
      

      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> PARTY CODE </TableHeadCell3>
            <TableHeadCell3> COMPANY NAME</TableHeadCell3>
            <TableHeadCell3> CONDIDATE NAME</TableHeadCell3>
            <TableHeadCell3> PASSPORT NO</TableHeadCell3>
            <TableHeadCell3> ACTUAL PROFESSION </TableHeadCell3>
            <TableHeadCell3> VISA PROFESSION </TableHeadCell3>
            <TableHeadCell3> AGENT NAME</TableHeadCell3>
            <TableHeadCell3> VISA RECEIVED DATE</TableHeadCell3>
            <TableHeadCell3> VISA AUTHORIZATION</TableHeadCell3>
            <TableHeadCell3> PHOTO CHARGES</TableHeadCell3>
            <TableHeadCell3> DOCUMENT CHARGES</TableHeadCell3>
            <TableHeadCell3> SERVICE CHARGES</TableHeadCell3>
            <TableHeadCell3> PARTIAL CHARGES</TableHeadCell3>
            <TableHeadCell3> SECTOR CHARGES </TableHeadCell3>
            <TableHeadCell3> TICKET CHARGES</TableHeadCell3>
            <TableHeadCell3> AMOUNT RECEIVED </TableHeadCell3>
            <TableHeadCell3> BALANCE AMOUNT</TableHeadCell3>
            <TableHeadCell3> AGENT COMMISSION</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
         <TableBody3>
          {props.accountDashboardList.map((ele, index) => (
            <TableRow3 key={index}>
              <TableCell3>{index + 1}</TableCell3>
              {/* <TableCell3> {ele.id}</TableCell3> */}
              <TableCell3> {ele.party_code}</TableCell3>
              <TableCell3>
              {ele.company_name}
              </TableCell3>
              <TableCell3> {ele.name}</TableCell3>
              <TableCell3> {ele.passport_no}</TableCell3>
              <TableCell3> {ele.actual_profession}</TableCell3>
              <TableCell3>
               {ele.visa_profession}
              </TableCell3>
              <TableCell3> {ele.agent_name}</TableCell3>
              <TableCell3> {ele?.visa_received_date}</TableCell3>
              <TableCell3> {ele?.visa_authorization}</TableCell3>
              <TableCell3> {ele?.photo_charges}</TableCell3>
              <TableCell3> {ele?.document_charges}</TableCell3>
              <TableCell3> {ele.service_charges}</TableCell3>
              <TableCell3> 
                {ele?.partial_charges}
                </TableCell3>
              <TableCell3> {ele.sector_charges}</TableCell3>            
              <TableCell3>
                {ele?.ticket_charges}
              </TableCell3>
              <TableCell3>
              <p className="text-red-500 cursor-pointer font-medium" onClick={()=>{props.onClickEdit("paymentdetails",ele),props.onAmountReceived(ele.id)}}>
                  
                  {ele?.received}
                  </p>
              </TableCell3>
              <TableCell3>
               {ele.balance_amount}
              </TableCell3>
              <TableCell3>
               
               <p className="text-red-500 cursor-pointer font-medium" onClick={()=>props.onClickEdit("agentcommission",ele)}>
                  
                  {ele?.agent_commission}-UP
                  </p>
              </TableCell3>
            </TableRow3>
          ))}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default AccountDashboardTable;
