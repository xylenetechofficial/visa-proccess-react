import { useState } from "react";
import { TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { ConsulateChargesInterface } from "../type";

const ConsulateChargesTable = (props: {
  snoBase:number,
  consulateChargesList: ConsulateChargesInterface[],
  onChange: (value: ConsulateChargesInterface[]) => void,
 
}) => {

  function onUpdateRow(index: number, rowData: ConsulateChargesInterface) {
    
    const nextData = props.consulateChargesList.map((e, i) => {
        if (i === index) {
            // Increment the clicked counter
            return rowData;
        } else {
            // The rest haven't changed
            return e;
        }
    });
    props.onChange(nextData)
}
  

  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>
          <TableHeadCell3>sn. no</TableHeadCell3>
            <TableHeadCell3>candidate name</TableHeadCell3>
            <TableHeadCell3>party code </TableHeadCell3>
            <TableHeadCell3>company name</TableHeadCell3>
            <TableHeadCell3>passport no. </TableHeadCell3>
            <TableHeadCell3>actual profession</TableHeadCell3>
            <TableHeadCell3>visa profession</TableHeadCell3>
            <TableHeadCell3>agent</TableHeadCell3>
            <TableHeadCell3>mofa number</TableHeadCell3>
            <TableHeadCell3>visa authorization</TableHeadCell3>
            <TableHeadCell3>division</TableHeadCell3>
            <TableHeadCell3>visa submission </TableHeadCell3>
            <TableHeadCell3>visa fee</TableHeadCell3>
            <TableHeadCell3>consulate setting charges</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>

        <TableBody3>
        {
              props.consulateChargesList.map((consulateCharge, index)=>(
                <TableRow3>  
                <TableCell3 >{index + props.snoBase+1}</TableCell3>
                <TableCell3>{consulateCharge.candidate_name}</TableCell3>
                <TableCell3>{consulateCharge.party_code}</TableCell3>
                <TableCell3>{consulateCharge.company_name}</TableCell3>
                <TableCell3>{consulateCharge.passport_no}</TableCell3>
                <TableCell3>{consulateCharge.actual_profession}</TableCell3>
                <TableCell3>{consulateCharge.visa_profession}</TableCell3>
                <TableCell3>{consulateCharge.agent}</TableCell3>
                <TableCell3>{consulateCharge.mofa_number}</TableCell3>
                <TableCell3>{consulateCharge.visa_authorization}</TableCell3>
                <TableCell3>{consulateCharge.division}</TableCell3>
                <TableCell3>{consulateCharge.visa_submission}</TableCell3>
                <TableCell3>{consulateCharge.visa_fee}</TableCell3>

                <TableCell3>      
                  {/* {consulateCharge.consulate_setting_charges} */}
                  <UnlabeledInput onchange={(value) => {
                                    onUpdateRow(index, { ...consulateCharge,
                                      consulate_setting_charges: value })
                                }}
                                    value={consulateCharge.consulate_setting_charges} />
                  
                  </TableCell3>
              </TableRow3>
              ))
            }
         
        </TableBody3>
      </Table3>
    </div>
  );
};

export default ConsulateChargesTable;
