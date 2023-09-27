import { AccountDashboardInterface } from "../type";
import {  RedButton } from "../../../../componenets/CustomButton";
import {
  
  Table3,
  TableBody3,
  TableCell3,
  
  TableHead3,
  
  TableHeadCell3,
  
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { convertDateFormat } from "../../../../utils/function";

const AccountDashboardTable = (props: {
  accountDashboardList: AccountDashboardInterface[];
  onClickEdit: any;
  onClickDelete: any;
  
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
            <TableHeadCell3> VISA RECIEVED DATE </TableHeadCell3>
            <TableHeadCell3> PROCESS CHARGES</TableHeadCell3>
            <TableHeadCell3> DOCUMENTS CHARGES</TableHeadCell3>
            <TableHeadCell3> CONSULATE SETTING CHARGES</TableHeadCell3>
            <TableHeadCell3> REASON </TableHeadCell3>
            <TableHeadCell3> RC NAME</TableHeadCell3>
            <TableHeadCell3> DEVISION</TableHeadCell3>
            <TableHeadCell3> VISA AUTHORIZATION </TableHeadCell3>
            <TableHeadCell3> AIR TICKET</TableHeadCell3>
            <TableHeadCell3> IS INVIOCE</TableHeadCell3>
            <TableHeadCell3> TICKET CHARGES </TableHeadCell3>
            {/* <TableHeadCell3> SERVICES CHARGES</TableHeadCell3> */}
            <TableHeadCell3> PARTIAL CHARGES</TableHeadCell3>
            <TableHeadCell3> SECTOR CHARGES</TableHeadCell3>
            <TableHeadCell3> AGENT COMMISSION </TableHeadCell3>
            <TableHeadCell3> CANCEL</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
         <TableBody3>
          {props.accountDashboardList.map((ele, index) => (
            <TableRow3 key={index}>
              <TableCell3>{index + 1}</TableCell3>
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
              <TableCell3> {convertDateFormat(ele.visa_received_date)}</TableCell3>
              <TableCell3> {ele.process_charges}</TableCell3>
              <TableCell3> {ele.document_charges}</TableCell3>
              <TableCell3> {ele.consulate_setting_charges}</TableCell3>
              <TableCell3> {ele.reason}</TableCell3>
              <TableCell3> {ele.rc_name}</TableCell3>
              <TableCell3> {ele.division}</TableCell3>
              <TableCell3> {ele.visa_authorization}</TableCell3>
              <TableCell3> {ele.air_ticket}</TableCell3>
              <TableCell3> {ele.is_invoice}</TableCell3>
              <TableCell3> {ele.ticket_charges}</TableCell3>
              {/* <TableCell3> {ele.sector_charges}</TableCell3> */}
              <TableCell3> {ele.partial_charges}</TableCell3>
              <TableCell3> {ele.sector_charges}</TableCell3>
              <TableCell3> {ele.agent_commision}</TableCell3>
              <TableCell3>
                <RedButton
                  text={"Cancel"}
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
