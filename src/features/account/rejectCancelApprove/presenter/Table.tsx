import { RejectCancelApproveInterface } from "../type";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import {
  Table,
  Table2,
  TableBody,
  TableBody2,
  TableCell,
  TableCell2,
  TableHead,
  TableHead2,
  TableHeadCell,
  TableHeadCell2,
  TableHeadRow,
  TableHeadRow2,
  TableRow,
  TableRow2,
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
  setEditRejectCancelApprove:any;
  editRejectCancelApprove:any
}) => {
console.log(props.RejectCancelApproveList,"AAAAAAAAAAAA")

const handleCheckBoxa =(item:any)=>{
console.log(item)
props.setEditRejectCancelApprove((prev:any)=>{
return {
  ...prev
}
})
}

const handleCheckBox = (item:any) => {
  // console.log(item);

  props.setEditRejectCancelApprove((prev:any) => {
    // Iterate through the selection_list and find the item with the given id
    // const newData= [...prev]
return {
  ...prev,
  selection_list:[{
    id:item.id,
    mofa_cancel_id:item.mofa_cancel_id,
    status:1
  } 
  ]
}
  });
  console.log(props.editRejectCancelApprove)
}
  return (
    <div className="overflow-auto">

      <Table2>
        <TableHead2>
          <TableHeadRow>
            <TableHeadCell2> Sr No.</TableHeadCell2>
            <TableHeadCell2> PARTY CODE </TableHeadCell2>
            <TableHeadCell2> COMPANY NAME</TableHeadCell2>
            <TableHeadCell2> CONDIDATE NAME</TableHeadCell2>
            <TableHeadCell2> ACTUAL PROFESSION </TableHeadCell2>
            <TableHeadCell2> VISA PROFESSION </TableHeadCell2>
            <TableHeadCell2> AGENT</TableHeadCell2>
            <TableHeadCell2> VISA RECIEVED DATE </TableHeadCell2>
            <TableHeadCell2> PROCESS CHARGES</TableHeadCell2>
            <TableHeadCell2> DOCUMENTS CHARGES</TableHeadCell2>
            <TableHeadCell2> CONSULATE SETTING CHARGES</TableHeadCell2>
            <TableHeadCell2> REASON </TableHeadCell2>
            <TableHeadCell2> RC NAME</TableHeadCell2>
            <TableHeadCell2> DEVISION</TableHeadCell2>
            <TableHeadCell2> VISA AUTHORIZATION </TableHeadCell2>
            <TableHeadCell2> SECTOR CHARGES</TableHeadCell2>
            <TableHeadCell2> PARTIAL CHARGES</TableHeadCell2>
            <TableHeadCell2> SERVICES CHARGES</TableHeadCell2>
            <TableHeadCell2> AIR TICKET</TableHeadCell2>
            <TableHeadCell2> IS INVIOCE</TableHeadCell2>
            {/* <TableHeadCell2> TICKET CHARGES </TableHeadCell2> */}
            <TableHeadCell2>
              Check box</TableHeadCell2>
          </TableHeadRow>
        </TableHead2>
        <TableBody2>
          {props.RejectCancelApproveList?.map((item :any, index:any) => (

            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item?.party_code}</TableCell>
              <TableCell>{item?.company_name}</TableCell>
              <TableCell>{item?.name}</TableCell>
              <TableCell>{item?.actual_profession}</TableCell>
              <TableCell>{item?.visa_profession}</TableCell>
              <TableCell>{item?.agent_name}</TableCell>
              <TableCell>{item?.visa_received_date}</TableCell>
              <TableCell>{item?.consolidated_charges}</TableCell>
              <TableCell>{item?.document_charges}</TableCell>
              <TableCell>{item?.consulate_setting_charges}</TableCell>
              <TableCell>{item?.reason}</TableCell>
              <TableCell>{item?.rc_name}</TableCell>
              <TableCell>{item?.dev}</TableCell>
              <TableCell>{item?.visa_authorization}</TableCell>
              <TableCell>{item?.sector_charges}</TableCell>
              <TableCell>{item?.partial_charges}</TableCell>
              <TableCell>{item?.service_charges}</TableCell>
              <TableCell>{item?.air_ticket}</TableCell>
              <TableCell>{item?.is_invoice}</TableCell>
              <TableCell><Checkbox  onClick={()=>handleCheckBox(item)}/></TableCell>
            </TableRow>
          ))}
        </TableBody2>
      </Table2>
    </div>
  );
};

export default RejectCancelApproveTable;
