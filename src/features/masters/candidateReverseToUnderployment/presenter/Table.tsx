import React from "react";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { BlueButton } from "../../../../componenets/CustomButton";
import { CustomButton2 } from "../../../../componenets/CustomComponents";
import { CandidateReverseToDeployeMentInterface } from "../type";

const Table = (props:{onClickReverse:(value :CandidateReverseToDeployeMentInterface)=>void,candidateReverseToUnderploymentList:CandidateReverseToDeployeMentInterface[]}) => {
  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3>sn. no</TableHeadCell3>
            <TableHeadCell3>party code </TableHeadCell3>
            <TableHeadCell3>company name</TableHeadCell3>
            <TableHeadCell3>candidate name</TableHeadCell3>
            <TableHeadCell3>passport no. </TableHeadCell3>
            <TableHeadCell3>actual profession</TableHeadCell3>
            <TableHeadCell3>visa profession</TableHeadCell3>
            <TableHeadCell3>agent</TableHeadCell3>
            <TableHeadCell3>Is Invoice</TableHeadCell3>
            <TableHeadCell3>status</TableHeadCell3>
            <TableHeadCell3>document charges</TableHeadCell3>
            <TableHeadCell3>other charges </TableHeadCell3>
            <TableHeadCell3>service charges</TableHeadCell3>
            <TableHeadCell3>air line</TableHeadCell3>
            <TableHeadCell3>pnr no.</TableHeadCell3>
            <TableHeadCell3>departure date</TableHeadCell3>
            {/* <TableHeadCell3>checkbox</TableHeadCell3> */}
            <TableHeadCell3>ACTION</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>

        <TableBody3>
          {props.candidateReverseToUnderploymentList.map((item,index)=>
          <TableRow3 key={index}>
            <TableCell3>{index +1 }</TableCell3>
            <TableCell3>{item.party_code}</TableCell3>
            <TableCell3>{item.company_name}</TableCell3>
            <TableCell3>{item.candidate_name}</TableCell3>
            <TableCell3>{item.passport_no}</TableCell3>
            <TableCell3>{item.actual_profession}</TableCell3>
            <TableCell3>{item.visa_profession}</TableCell3>
            <TableCell3>{item.agent_name}</TableCell3>
            <TableCell3>{item.is_invoice}</TableCell3>
            <TableCell3>{item.status}</TableCell3>
            <TableCell3>{item.document_charges}</TableCell3>
            <TableCell3>{item.other_charges}</TableCell3>
            <TableCell3>{item.service_charges}</TableCell3>
            <TableCell3>{item.air_line}</TableCell3>
            <TableCell3>{item.pnr_no}</TableCell3>
            <TableCell3>{item.departure_date}</TableCell3>
            <TableCell3>
              <CustomButton2
                buttonText="Reverse"
                onClick={() => {
                  props.onClickReverse(item)
                }}
              />
            </TableCell3>
          </TableRow3>
          )}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default Table;
