import {
  Table,
  TableBody2,
  TableCell,
  TableHead2,
  TableHeadCell,
  TableHeadRow,
  TableRow,

} from "../../../../componenets/Table";
import { Checkbox } from "@mui/material";
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { CustomSelectComponentUnlabeledv2, selectOptionConveter, selectOptionConveterv2 } from "../../../../componenets/SelectBox";
// import { useState } from "react";
// import { convertDateFormat } from "../../../../utils/function";
import { CandidateInvoiceRaiseInterface, CandidateInvoiceRaiseListInterface } from "../type";
import { BankList, currencyList } from "../../../db";

const ClientInvoicesCandidateInvoiceRaiseTable = (props: {
  candidateInvoiceRaiseList: CandidateInvoiceRaiseListInterface[];
  onClickEdit: any,
  onChange: (value: CandidateInvoiceRaiseListInterface[]) => void
  setData: (value: any) => void
}) => {


  function onUpdateRow(index: number, rowData: CandidateInvoiceRaiseListInterface) {
    const nextData = props.candidateInvoiceRaiseList.map((e, i) => {
      if (i === index) {
        // Increment the clicked counter
        return rowData;
      } else {
        // The rest haven't changed
        return e;
      }
    });
    props.onChange(nextData);
    props.setData(nextData)
  }
  return (
    <div className="overflow-auto">

      <Table>
        <TableHead2>
          <TableHeadRow>
            <TableHeadCell> Sr No.</TableHeadCell>
            <TableHeadCell> PARTY CODE </TableHeadCell>
            <TableHeadCell> COMPANY NAME</TableHeadCell>
            <TableHeadCell> CANDIDATE NAME</TableHeadCell>
            <TableHeadCell> PASSPORT NO.</TableHeadCell>
            <TableHeadCell> ACTUAL PROFESSION </TableHeadCell>
            <TableHeadCell> VISA PROFESSION </TableHeadCell>
            {/* <TableHeadCell> VISA RECIEVED DATE </TableHeadCell> */}
            <TableHeadCell> AGENT</TableHeadCell>
            <TableHeadCell> DIVISION </TableHeadCell>
            <TableHeadCell> VISA AUTHORIZATION </TableHeadCell>
            <TableHeadCell> RC </TableHeadCell>
            {/* <TableHeadCell>  DEPARTURE DATE</TableHeadCell> */}
            <TableHeadCell> OTHER CHARGES</TableHeadCell>
            <TableHeadCell> SERVICES CHARGES</TableHeadCell>
            <TableHeadCell> TICKET CHARGES</TableHeadCell>
            <TableHeadCell> TOTAL CHARGES</TableHeadCell>
            <TableHeadCell> INVOICE NUMBER</TableHeadCell>
            <TableHeadCell> INVOICE DATE</TableHeadCell>
            <TableHeadCell> SELECT</TableHeadCell>
            <TableHeadCell> BANK NAME</TableHeadCell>
          </TableHeadRow>
        </TableHead2>
        <TableBody2>
          {props.candidateInvoiceRaiseList?.map((ele, index) => (
            <TableRow key={index + 1}>

              <TableCell> {index + 1}</TableCell>
              <TableCell> {ele.party_code}</TableCell>
              <TableCell> {ele.company_name}</TableCell>
              <TableCell> {ele.candidate_name}</TableCell>
              <TableCell>{ele.passport_no}</TableCell>
              <TableCell>{ele.actual_profession}</TableCell>
              <TableCell>{ele.visa_profession}</TableCell>
              <TableCell> {ele.agent_name}</TableCell>
              <TableCell> {ele.division}</TableCell>
              <TableCell> {ele.visa_authorisation_name}</TableCell>
              <TableCell> {ele.rc_name}</TableCell>
              <TableCell> {ele.other_charges}</TableCell>
              {/* <TableCell> {ele.other_charges}</TableCell> */}
              {/* <TableCell> {ele.document_charges}</TableCell> */}
              <TableCell> {ele.service_charges} {currencyList.map(e => e.id == parseInt(ele.service_charges_currency) ? e.name : "")}</TableCell>
              <TableCell> {ele.ticket_charges} {currencyList.map(e => e.id == parseInt(ele.service_charges_currency) ? e.name : "")}</TableCell>
              <TableCell> <UnlabeledInput type="number" value={ele.total_charges} onchange={(value) =>
                onUpdateRow(index, { ...ele, total_charges: parseInt(value) })} /></TableCell>
              <TableCell>
                <UnlabeledInput
                  type="number"
                  value={ele?.invoice_number}
                  onchange={(value) => {
                    if (value) {

                      // props.setData((prev: any) => {
                      //   const newData = [...prev];
                      //       newData[index] = {
                      //           ...newData[index],
                      //           invoice_number: value,
                      //           id:index,
                      //           total_charges:ele.total_charges

                      //       };
                      //       return newData;
                      //   })
                      onUpdateRow(index, { ...ele, invoice_number: value })
                    }
                    else {
                      onUpdateRow(index, { ...ele, invoice_number: value })
                    }
                  }
                  }
                />
              </TableCell>
              <TableCell>
                <DateInput id="date"

                  value={ele.invoice_date}
                  onChange={(value) => {

                    if (value) {
                      // props.setData((prev: any) => {
                      //   const newData = [...prev];
                      //       newData[index] = {
                      //           ...newData[index],
                      //           invoice_date: value,
                      //           id:index,

                      //       };
                      //       return newData;
                      //   })
                      onUpdateRow(index, { ...ele, invoice_date: value })
                      console.log(value)
                    }
                    else {
                      onUpdateRow(index, { ...ele, invoice_date: '' })
                    }

                  }} />

              </TableCell>

              <TableCell>
                <Checkbox value={ele.is_without} onChange={(e) => {

                  if (e.target.checked) {
                    // props.setData((prev: any) => {
                    //   const newData = [...prev];
                    //       newData[index] = {
                    //           ...newData[index],
                    //           is_without: e.target.checked ? 1 : 0,
                    //           id:index,

                    //       };
                    //       return newData;
                    //   })
                    onUpdateRow(index, { ...ele, is_without: e.target.checked ? 1 : 0 })
                      , console.log(e.target.checked, "checked")
                  }
                  else {
                    onUpdateRow(index, { ...ele, is_without: 0 })
                  }

                }} />
              </TableCell>

              <TableCell>

                <CustomSelectComponentUnlabeledv2
                  value={ele.bank_id}
                  options={selectOptionConveter({
                    // options: [{ name: "SBI", value: 1 }, { name: "PNB", value: 2 }],
                    options: BankList,
                    options_struct: { name: "name", value: "value" }
                  })}
                  onChange={(value) => {

                    if (value) {
                      // props.setData((prev: any) => {
                      //   const newData = [...prev];
                      //       newData[index] = {
                      //           ...newData[index],
                      //           bank_id: value,
                      //           id:index,

                      //       };
                      //       return newData;
                      //   })
                      onUpdateRow(index, { ...ele, bank_id: value })
                        , console.log(value)
                    }
                    else {
                      onUpdateRow(index, { ...ele, bank_id: value })
                    }
                  }
                  } />
              </TableCell>

            </TableRow>
          ))
          }

        </TableBody2>
      </Table>

    </div>
  );
};

export default ClientInvoicesCandidateInvoiceRaiseTable;
