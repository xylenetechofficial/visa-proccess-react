import { BlueButton } from "../../../../componenets/CustomButton";
import {
    Table3,
    TableBody3,
    TableCell3,
    TableHead3,
    TableHeadCell3,
    TableHeadRow3,
    TableRow3,
  } from "../../../../componenets/Table";
import { PenaltyChargesInterface } from "../type";
  
  const PenaltyChargesTable = (props:{
    onClickEdit:(value: PenaltyChargesInterface)=>void,
    penaltyChargesList:PenaltyChargesInterface[],

  }) => {
    return (
      <div className="overflow-auto">
        <Table3>
          <TableHead3>
            <TableHeadRow3>
            <TableHeadCell3>sn. no</TableHeadCell3>
              <TableHeadCell3>party code</TableHeadCell3>
              <TableHeadCell3>company name</TableHeadCell3>
              <TableHeadCell3>candidate name</TableHeadCell3>
              <TableHeadCell3>passport no.</TableHeadCell3>
              <TableHeadCell3>actual profession</TableHeadCell3>
              <TableHeadCell3>visa profession</TableHeadCell3>
              <TableHeadCell3>agent</TableHeadCell3>
              <TableHeadCell3>visa recieved date</TableHeadCell3>
              <TableHeadCell3>process charges</TableHeadCell3>
              <TableHeadCell3>training charges</TableHeadCell3>
              <TableHeadCell3>sector charges</TableHeadCell3>
              <TableHeadCell3>partial charges</TableHeadCell3>
              <TableHeadCell3>consulate setting charges</TableHeadCell3>

              <TableHeadCell3>client invoice</TableHeadCell3>

              <TableHeadCell3>penalty charges</TableHeadCell3>

              <TableHeadCell3>Edit</TableHeadCell3>
            </TableHeadRow3>
          </TableHead3>
  
          <TableBody3>
            {props.penaltyChargesList.map((penaltyCharges, index) =>
             <TableRow3 key={index}>
             <TableCell3>{index + 1}</TableCell3>
             <TableCell3>{penaltyCharges.party_code} </TableCell3>
             <TableCell3>{penaltyCharges.company_name}</TableCell3>
             <TableCell3>{penaltyCharges.candidate_name}</TableCell3>
             <TableCell3>{penaltyCharges.passport_no} </TableCell3>
             <TableCell3>{penaltyCharges.actual_profession}</TableCell3>
             <TableCell3>{penaltyCharges.visa_profession}</TableCell3>
             <TableCell3>{penaltyCharges.agent}</TableCell3>
             <TableCell3>{penaltyCharges.visa_recieved_date}</TableCell3>
             <TableCell3>{penaltyCharges.process_charges}</TableCell3>
             <TableCell3>{penaltyCharges.training_charges}</TableCell3>
             <TableCell3>{penaltyCharges.sector_charges}</TableCell3>
             <TableCell3>{penaltyCharges.partial_charges}</TableCell3>
             <TableCell3>{penaltyCharges.consulate_setting_charges}</TableCell3>
             <TableCell3>{penaltyCharges.client_invoice}</TableCell3>
             <TableCell3>{penaltyCharges.penalty_charges}</TableCell3>

             <TableCell3>
             <BlueButton
                   text={"Edit"}
                   onClick={() => {
                     props.onClickEdit(penaltyCharges);
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
  
  export default PenaltyChargesTable;
  