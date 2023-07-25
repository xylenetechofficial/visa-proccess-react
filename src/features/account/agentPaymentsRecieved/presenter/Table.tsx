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
  accountDashboardList: AgentPaymentReceivedInterface[];
  onClickEdit: any;
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
            <TableHeadCell2> AGENT</TableHeadCell2>
            <TableHeadCell2> PHOTO CHARGES </TableHeadCell2>
            <TableHeadCell2> TRAINING CHARGES</TableHeadCell2>
            <TableHeadCell2> DOCUMENTS CHARGES</TableHeadCell2>
            <TableHeadCell2> OTHER CHARGES</TableHeadCell2>
            <TableHeadCell2> DD CHARGES</TableHeadCell2>
            <TableHeadCell2> SERVICE CHARGES</TableHeadCell2>
            <TableHeadCell2> PARTIAL CHARGES</TableHeadCell2>
            <TableHeadCell2> CONSULATE SETTING CHARGES</TableHeadCell2>
            <TableHeadCell2> SECTOR CHARGES </TableHeadCell2>
            <TableHeadCell2> EXTRA SERVICE TAX</TableHeadCell2>
            <TableHeadCell2> AMOUNT RECIEVED </TableHeadCell2>
            <TableHeadCell2> EDIT</TableHeadCell2>
          </TableHeadRow2>
        </TableHead2>
         <TableBody>
          {props.accountDashboardList.map((ele, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
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
              <TableCell> {ele?.photo_charges}</TableCell>
              <TableCell> {ele?.training_charges}</TableCell>
              <TableCell> {ele.document_charges}</TableCell>
              <TableCell> {ele?.other_charges}</TableCell>
              <TableCell> {ele?.dd_charges}</TableCell>
              <TableCell> {ele?.service_charges}</TableCell>
              <TableCell> {ele?.partial_charges}</TableCell>
              <TableCell> {ele.consulate_setting_charges}</TableCell>
              <TableCell> {ele.sector_charges}</TableCell>
              <TableCell> {ele.extra_service_tax}</TableCell>
              <TableCell> {ele.amount_received}</TableCell>
              
             
              <TableCell>
                <RedButton
                  text={"Edit"}
                  preIcon="edit"
                  onClick={() => {
                    props.onClickEdit(ele);
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table2>
    </div>
  );
};

export default AccountDashboardTable;
