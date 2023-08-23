import { AccountDashboardInterface } from "../type";
import {  RedButton } from "../../../../componenets/CustomButton";
import {
  
  Table2,
  TableBody,
  TableCell,
  
  TableHead2,
  
  TableHeadCell2,
  
  TableHeadRow2,
  TableRow,
} from "../../../../componenets/Table";
import { convertDateFormat } from "../../../../utils/function";

const AccountDashboardTable = (props: {
  accountDashboardList: AccountDashboardInterface[];
  onClickEdit: any;
  onClickDelete: any;
  
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
            <TableHeadCell2> VISA RECIEVED DATE </TableHeadCell2>
            <TableHeadCell2> PROCESS CHARGES</TableHeadCell2>
            <TableHeadCell2> DOCUMENTS CHARGES</TableHeadCell2>
            <TableHeadCell2> CONSULATE SETTING CHARGES</TableHeadCell2>
            <TableHeadCell2> REASON </TableHeadCell2>
            <TableHeadCell2> RC NAME</TableHeadCell2>
            <TableHeadCell2> DEVISION</TableHeadCell2>
            <TableHeadCell2> VISA AUTHORIZATION </TableHeadCell2>
            <TableHeadCell2> AIR TICKET</TableHeadCell2>
            <TableHeadCell2> IS INVIOCE</TableHeadCell2>
            <TableHeadCell2> TICKET CHARGES </TableHeadCell2>
            <TableHeadCell2> SERVICES CHARGES</TableHeadCell2>
            <TableHeadCell2> PARTIAL CHARGES</TableHeadCell2>
            <TableHeadCell2> SECTOR CHARGES</TableHeadCell2>
            <TableHeadCell2> AGENT COMMISSION </TableHeadCell2>
            <TableHeadCell2> CANCEL</TableHeadCell2>
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
              <TableCell> {convertDateFormat(ele.visa_received_date)}</TableCell>
              <TableCell> {ele.process_charges}</TableCell>
              <TableCell> {ele.document_charges}</TableCell>
              <TableCell> {ele.consulate_setting_charges}</TableCell>
              <TableCell> {ele.reason}</TableCell>
              <TableCell> {ele.rc_name}</TableCell>
              <TableCell> {ele.division}</TableCell>
              <TableCell> {ele.visa_authorization}</TableCell>
              <TableCell> {ele.air_ticket}</TableCell>
              <TableCell> {ele.is_invoice}</TableCell>
              <TableCell> {ele.ticket_charges}</TableCell>
              <TableCell> {ele.sector_charges}</TableCell>
              <TableCell> {ele.partial_charges}</TableCell>
              <TableCell> {ele.sector_charges}</TableCell>
              <TableCell> {ele.agent_commision}</TableCell>
              <TableCell>
                <RedButton
                  text={"Cancel"}
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
