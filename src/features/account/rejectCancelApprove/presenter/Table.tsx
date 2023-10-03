import { RejectCancelApproveInterface } from "../type";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import {
 
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { SectorInterface } from "../../../masters/sector/type";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { Checkbox } from "@mui/material";
import { useState } from "react";

const RejectCancelApproveTable = (props: {
  // RejectCancelApproveList: RejectCancelApproveInterface[];
  RejectCancelApproveList: any;
  onClickEdit: any;
  onClickDelete: any;
  sectorList: SectorInterface[];
  companyList: CompanyInterface[];
  countryList: CountryInterface[];
  setEditRejectCancelApprove: any;
  editRejectCancelApprove: any
}) => {
  console.log(props.RejectCancelApproveList, "AAAAAAAAAAAA")

  const handleCheckBoxa = (item: any) => {
    console.log(item)
    props.setEditRejectCancelApprove((prev: any) => {
      return {
        ...prev
      }
    })
  }

  const handleCheckBox = (item: any) => {
    // console.log(item);

    props.setEditRejectCancelApprove((prev: any) => {
      // Iterate through the selection_list and find the item with the given id
      // const newData= [...prev]
      return {
        ...prev,
        selection_list: [{
          id: item.id,
          mofa_cancel_id: item.mofa_cancel_id,
          status: 1
        }
        ]
      }
    });
    console.log(props.editRejectCancelApprove)
  }
  return (
    <div className="overflow-auto">

      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> PARTY CODE </TableHeadCell3>
            <TableHeadCell3> COMPANY NAME</TableHeadCell3>
            <TableHeadCell3> CONDIDATE NAME</TableHeadCell3>
            <TableHeadCell3> ACTUAL PROFESSION </TableHeadCell3>
            <TableHeadCell3> PASSPORT NUMBER </TableHeadCell3>
            <TableHeadCell3> AGENT</TableHeadCell3>
            <TableHeadCell3> VISA RECIEVED DATE </TableHeadCell3>
            <TableHeadCell3> PROCESS CHARGES</TableHeadCell3>
            <TableHeadCell3> DOCUMENTS CHARGES</TableHeadCell3>
            <TableHeadCell3> CONSULATE SETTING CHARGES</TableHeadCell3>
            <TableHeadCell3> REASON </TableHeadCell3>
            <TableHeadCell3> RC NAME</TableHeadCell3>
            <TableHeadCell3> DEVISION</TableHeadCell3>
            <TableHeadCell3> VISA AUTHORIZATION </TableHeadCell3>
            <TableHeadCell3> SECTOR CHARGES</TableHeadCell3>
            <TableHeadCell3> PARTIAL CHARGES</TableHeadCell3>
            <TableHeadCell3> SERVICES CHARGES</TableHeadCell3>
            <TableHeadCell3> AIR TICKET</TableHeadCell3>
            <TableHeadCell3> IS INVIOCE</TableHeadCell3>
            {/* <TableHeadCell3> TICKET CHARGES </TableHeadCell3> */}
            <TableHeadCell3>
              Check box</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.RejectCancelApproveList?.map((item: any, index: any) => (

            <TableRow3 key={index}>
              <TableCell3>{index + 1}</TableCell3>
              <TableCell3>{item?.party_code}</TableCell3>
              <TableCell3>{item?.company_name}</TableCell3>
              <TableCell3>{item?.name}</TableCell3>
              <TableCell3>{item?.actual_profession}</TableCell3>
              <TableCell3>{item?.passport_no}</TableCell3>
              <TableCell3>{item?.agent_name}</TableCell3>
              <TableCell3>{item?.visa_received_date}</TableCell3>
              <TableCell3>{item?.consolidated_charges}</TableCell3>
              <TableCell3>{item?.document_charges}</TableCell3>
              <TableCell3>{item?.consulate_setting_charges}</TableCell3>
              <TableCell3>{item?.reason}</TableCell3>
              <TableCell3>{item?.rc_name}</TableCell3>
              <TableCell3>{item?.dev}</TableCell3>
              <TableCell3>{item?.visa_authorization}</TableCell3>
              <TableCell3>{item?.sector_charges}</TableCell3>
              <TableCell3>{item?.partial_charges}</TableCell3>
              <TableCell3>{item?.service_charges} ( {item?.ccp_cancel_type} )</TableCell3>
              <TableCell3>{item?.air_ticket}</TableCell3>
              <TableCell3>{item?.is_invoice}</TableCell3>
              <TableCell3><Checkbox onClick={() => handleCheckBox(item)} /></TableCell3>
            </TableRow3>
          ))}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default RejectCancelApproveTable;
