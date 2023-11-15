import {
  Table3,
  TableBody3,
  TableCell3,
  TableHeadRed,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { useState } from "react";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import { PaymentReceivedInterface } from "../type";

const AccountCandidatesListTable = (props: {
  snoBase: number;
  paymentReceivedList: PaymentReceivedInterface[];

  onClickEdit: (value: any) => void;
}) => {
  return (
    <div className="overflow-auto">
      <Table3>
        <TableHeadRed>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> PARTY CODE </TableHeadCell3>
            <TableHeadCell3> COMPANY NAME</TableHeadCell3>
            <TableHeadCell3> CANDIDATE NAME</TableHeadCell3>
            <TableHeadCell3> PASSPORT NO.</TableHeadCell3>
            <TableHeadCell3> ACTUAL PROFESSION </TableHeadCell3>
            <TableHeadCell3> VISA PROFESSION </TableHeadCell3>
            <TableHeadCell3> AGENT</TableHeadCell3>
            <TableHeadCell3> PHOTO CHARGES </TableHeadCell3>
            <TableHeadCell3> TRAINING CHARGES</TableHeadCell3>
            <TableHeadCell3> DOCUMENT CHARGES </TableHeadCell3>
            <TableHeadCell3> OTHER CHARGES</TableHeadCell3>
            <TableHeadCell3> DD CHARGES </TableHeadCell3>
            <TableHeadCell3> SERVICE CHARGES </TableHeadCell3>
            <TableHeadCell3> PARTIAL CHARGES</TableHeadCell3>
            <TableHeadCell3> CONSULATE SETTING CHARGES </TableHeadCell3>
            <TableHeadCell3> SECTOR CHARGES </TableHeadCell3>
            <TableHeadCell3> EXTRA SERVICE CHARGES </TableHeadCell3>
            <TableHeadCell3> AMOUNT RECEIVED </TableHeadCell3>
            <TableHeadCell3> VIEW </TableHeadCell3>
          </TableHeadRow3>
        </TableHeadRed>
        <TableBody3>
          {props.paymentReceivedList.map((item: any, index: any) => (
            <TableRow3>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3>{item.party_code} </TableCell3>
              <TableCell3> {item.company_name} </TableCell3>
              <TableCell3> {item.name}</TableCell3>
              <TableCell3>{item.passport_no} </TableCell3>
              <TableCell3>{item.actual_profession} </TableCell3>
              <TableCell3>{item.visa_profession} </TableCell3>
              <TableCell3> {item.agent_name}</TableCell3>
              <TableCell3>{item.photo_charges} </TableCell3>
              <TableCell3>{item.training_charges} </TableCell3>
              <TableCell3>{item.document_charges} </TableCell3>
              <TableCell3>{item.other_charges} </TableCell3>
              <TableCell3>{item.dd_charges} </TableCell3>
              <TableCell3>{item.services_charges} </TableCell3>
              <TableCell3> {item.partial_charges} </TableCell3>
              <TableCell3>{item.consulate_setting_charges} </TableCell3>
              <TableCell3>{item.sector_charges} </TableCell3>
              <TableCell3>{item.extra_service_tax} </TableCell3>
              <TableCell3>{item.amount_received} </TableCell3>
              <TableCell3>
                {" "}
                {/* <RedButton
                  text="Edit"
                  onClick={() => props.onClickEdit(item)}
                /> */}
                <BlueButton  onClick={()=> props.onClickEdit(item)} text="View"/>
              </TableCell3>
            </TableRow3>
          ))}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default AccountCandidatesListTable;
