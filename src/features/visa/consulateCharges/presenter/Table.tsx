import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
<<<<<<< Updated upstream

const ConsulateChargesTable = () => {
=======
import { ConsulateChargesInterface } from "../type";

const ConsulateChargesTable = (props: {
  consulateChargesList: ConsulateChargesInterface[],
 
}) => {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            <TableHeadCell3>mufa number</TableHeadCell3>
=======
            <TableHeadCell3>mofa number</TableHeadCell3>
>>>>>>> Stashed changes
            <TableHeadCell3>visa authorization</TableHeadCell3>
            <TableHeadCell3>division</TableHeadCell3>
            <TableHeadCell3>visa submission </TableHeadCell3>
            <TableHeadCell3>visa fee</TableHeadCell3>
            <TableHeadCell3>consulate setting charges</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>

        <TableBody3>
<<<<<<< Updated upstream
          <TableRow3>
            <TableCell3>{1}</TableCell3>
            <TableCell3>candidate no.</TableCell3>
            <TableCell3>party code </TableCell3>
            <TableCell3>company name</TableCell3>
            <TableCell3>passport no. </TableCell3>
            <TableCell3>actual profession</TableCell3>
            <TableCell3>visa profession</TableCell3>
            <TableCell3>agent</TableCell3>
            <TableCell3>mufa number</TableCell3>
            <TableCell3>visa authorization</TableCell3>
            <TableCell3>division</TableCell3>
            <TableCell3>visa submission </TableCell3>
            <TableCell3>visa fee</TableCell3>
            <TableCell3>consulate setting charges</TableCell3>
          </TableRow3>
=======
        {
              props.consulateChargesList.map((ChargesList, index)=>(
                <TableRow3>  
                <TableCell3>{index + 1}</TableCell3>
                <TableCell3>{ChargesList.candidate_name}</TableCell3>
                <TableCell3>{ChargesList.party_code}</TableCell3>
                <TableCell3>{ChargesList.company_name}</TableCell3>
                <TableCell3>{ChargesList.passport_no}</TableCell3>
                <TableCell3>{ChargesList.actual_profession}</TableCell3>
                <TableCell3>{ChargesList.visa_profession}</TableCell3>
                <TableCell3>{ChargesList.agent}</TableCell3>
                <TableCell3>{ChargesList.mofa_number}</TableCell3>
                <TableCell3>{ChargesList.visa_authorization}</TableCell3>
                <TableCell3>{ChargesList.division}</TableCell3>
                <TableCell3>{ChargesList.visa_submission}</TableCell3>
                <TableCell3>{ChargesList.visa_fee}</TableCell3>
                <TableCell3>{ChargesList.consulate_setting_charges}</TableCell3>
              </TableRow3>
              ))
            }
         
>>>>>>> Stashed changes
        </TableBody3>
      </Table3>
    </div>
  );
};

export default ConsulateChargesTable;
