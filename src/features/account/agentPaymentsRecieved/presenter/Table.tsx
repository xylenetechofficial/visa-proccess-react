import React, { useState } from "react";
import { AccountDashboardInterface, AgentPaymentReceivedInterface } from "../type";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";


const AccountDashboardTable = (props: {
  snoBase:number,
  accountDashboardList: AgentPaymentReceivedInterface[];
  onClickEdit: any;
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
            <TableHeadCell3> AGENT</TableHeadCell3>
            <TableHeadCell3> PHOTO CHARGES </TableHeadCell3>
            <TableHeadCell3> TRAINING CHARGES</TableHeadCell3>
            <TableHeadCell3> DOCUMENTS CHARGES</TableHeadCell3>
            <TableHeadCell3> OTHER CHARGES</TableHeadCell3>
            <TableHeadCell3> DD CHARGES</TableHeadCell3>
            <TableHeadCell3> SERVICE CHARGES</TableHeadCell3>
            <TableHeadCell3> PARTIAL CHARGES</TableHeadCell3>
            <TableHeadCell3> CONSULATE SETTING CHARGES</TableHeadCell3>
            <TableHeadCell3> SECTOR CHARGES </TableHeadCell3>
            <TableHeadCell3> EXTRA SERVICE TAX</TableHeadCell3>
            <TableHeadCell3> AMOUNT RECIEVED </TableHeadCell3>
            <TableHeadCell3> EDIT</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
         <TableBody3>
          {props.accountDashboardList.map((ele, index) => (
            <TableRow3 key={index}>
            <TableCell3 >{index + props.snoBase+1}</TableCell3>
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
              <TableCell3> {ele?.photo_charges}</TableCell3>
              <TableCell3> {ele?.training_charges}</TableCell3>
              <TableCell3> {ele.document_charges}</TableCell3>
              <TableCell3> {ele?.other_charges}</TableCell3>
              <TableCell3> {ele?.dd_charges}</TableCell3>
              <TableCell3> {ele?.service_charges}</TableCell3>
              <TableCell3> {ele?.partial_charges}</TableCell3>
              <TableCell3> {ele.consulate_setting_charges}</TableCell3>
              <TableCell3> {ele.sector_charges}</TableCell3>
              <TableCell3> {ele.extra_service_tax}</TableCell3>
              <TableCell3> {ele.amount_received}</TableCell3>
              
             
              <TableCell3>
                <RedButton
                  text={"Edit"}
                  preIcon="edit"
                  onClick={() => {
                    props.onClickEdit(ele);
                  }}
                />
              </TableCell3>
            </TableRow3>
          ))}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default AccountDashboardTable;
