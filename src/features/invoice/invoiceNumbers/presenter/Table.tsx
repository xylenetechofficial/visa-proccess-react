import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";

import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { CustomSelectComponentUnlabeledv2 } from "../../../../componenets/SelectBox";
import { ClientInvoiceNumberInterface } from "../type";
import { BankList } from "../../../db";

const ClientInvoiceAddTable = (props: {
  candidateNumbreList: ClientInvoiceNumberInterface[];
  onChange: (value: ClientInvoiceNumberInterface[]) => void;
  data: any;
  setData: any;
  snoBase: number;
}) => {
  function onUpdateRow(index: number, rowData: ClientInvoiceNumberInterface) {
    const nextData = props.candidateNumbreList.map((e, i) => {
      if (i === index) {
        // Increment the clicked counter
        return rowData;
      } else {
        // The rest haven't changed
        return e;
      }
    });
    props.onChange(nextData);
    props.setData(nextData);
  }
  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> PARTY CODE </TableHeadCell3>
            <TableHeadCell3> COMPANY NAME</TableHeadCell3>
            <TableHeadCell3> CANDIDATE NAME</TableHeadCell3>
            <TableHeadCell3> PASSPORT NO.</TableHeadCell3>
            <TableHeadCell3> ACTUAL PROFESSION </TableHeadCell3>
            <TableHeadCell3> VISA PROFESSION </TableHeadCell3>
            <TableHeadCell3> AGENT</TableHeadCell3>
            <TableHeadCell3> DIVISION </TableHeadCell3>
            <TableHeadCell3> RC </TableHeadCell3>
            <TableHeadCell3> INVOICE NUMBER</TableHeadCell3>
            <TableHeadCell3> INVOICE DATE</TableHeadCell3>
            <TableHeadCell3> BANK NAME</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.candidateNumbreList?.map((ele, index) => (
            <TableRow3 key={index + 1}>
              <TableCell3> {index + props.snoBase + 1}</TableCell3>
              <TableCell3> {ele.party_code}</TableCell3>
              <TableCell3> {ele.company_name}</TableCell3>
              <TableCell3> {ele.candidate_name}</TableCell3>
              <TableCell3>{ele.passport_no}</TableCell3>
              <TableCell3>{ele.actual_profession}</TableCell3>
              <TableCell3>{ele.visa_profession}</TableCell3>
              <TableCell3> {ele.agent_name}</TableCell3>
              <TableCell3> {ele.division}</TableCell3>
              <TableCell3> {ele.rc_name}</TableCell3>
              <TableCell3>
                <UnlabeledInput
                  type="text"
                  // value={props.data[index]?.amount}
                  value={ele.invoice_number}
                  onchange={(value) => {
                    if (value) {
                      onUpdateRow(index, { ...ele, invoice_number: value }),
                        console.log(value);
                    } else {
                      onUpdateRow(index, { ...ele, invoice_number: value });
                    }
                  }}
                />
              </TableCell3>
              <TableCell3>
                <DateInput
                  value={ele.invoice_date}
                  id="invoice_date"
                  onChange={(value) => {
                    if (value) {
                      onUpdateRow(index, { ...ele, invoice_date: value });
                    } else {
                      onUpdateRow(index, { ...ele, invoice_date: "" });
                    }
                  }}
                />
              </TableCell3>
              <TableCell3>
                <CustomSelectComponentUnlabeledv2
                  value={ele.bank_id}
                  options={BankList}
                  onChange={(value) => {
                    if (value) {
                      onUpdateRow(index, { ...ele, bank_id: value });
                    } else {
                      onUpdateRow(index, { ...ele, bank_id: 0 });
                    }
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

export default ClientInvoiceAddTable;
