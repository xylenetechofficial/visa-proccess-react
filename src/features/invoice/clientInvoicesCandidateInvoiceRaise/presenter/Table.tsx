import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,

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
            {/* <TableHeadCell3> VISA RECIEVED DATE </TableHeadCell3> */}
            <TableHeadCell3> AGENT</TableHeadCell3>
            <TableHeadCell3> DIVISION </TableHeadCell3>
            <TableHeadCell3> VISA AUTHORIZATION </TableHeadCell3>
            <TableHeadCell3> RC </TableHeadCell3>
            {/* <TableHeadCell3>  DEPARTURE DATE</TableHeadCell3> */}
            <TableHeadCell3> OTHER CHARGES</TableHeadCell3>
            <TableHeadCell3> SERVICES CHARGES</TableHeadCell3>
            <TableHeadCell3> TICKET CHARGES</TableHeadCell3>
            <TableHeadCell3> TOTAL CHARGES</TableHeadCell3>
            <TableHeadCell3> INVOICE NUMBER</TableHeadCell3>
            <TableHeadCell3> INVOICE DATE</TableHeadCell3>
            <TableHeadCell3> SELECT</TableHeadCell3>
            <TableHeadCell3> BANK NAME</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.candidateInvoiceRaiseList?.map((ele, index) => (
            <TableRow3 key={index + 1}>

              <TableCell3> {index + 1}</TableCell3>
              <TableCell3> {ele.party_code}</TableCell3>
              <TableCell3> {ele.company_name}</TableCell3>
              <TableCell3> {ele.candidate_name}</TableCell3>
              <TableCell3>{ele.passport_no}</TableCell3>
              <TableCell3>{ele.actual_profession}</TableCell3>
              <TableCell3>{ele.visa_profession}</TableCell3>
              <TableCell3> {ele.agent_name}</TableCell3>
              <TableCell3> {ele.division}</TableCell3>
              <TableCell3> {ele.visa_authorisation_name}</TableCell3>
              <TableCell3> {ele.rc_name}</TableCell3>
              <TableCell3> {ele.other_charges}</TableCell3>
              {/* <TableCell3> {ele.other_charges}</TableCell3> */}
              {/* <TableCell3> {ele.document_charges}</TableCell3> */}
              <TableCell3> {ele.service_charges} {currencyList.map(e => e.id == parseInt(ele.service_charges_currency) ? e.name : "")}</TableCell3>
              <TableCell3> {ele.ticket_charges} {currencyList.map(e => e.id == parseInt(ele.service_charges_currency) ? e.name : "")}</TableCell3>
              <TableCell3> <UnlabeledInput type="number" value={ele.total_charges} onchange={(value) =>
                onUpdateRow(index, { ...ele, total_charges: parseInt(value) })} /></TableCell3>
              <TableCell3>
                <UnlabeledInput
                  // type="number"
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
              </TableCell3>
              <TableCell3>
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

              </TableCell3>

              <TableCell3>
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
              </TableCell3>

              <TableCell3>

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
              </TableCell3>

            </TableRow3>
          ))
          }

        </TableBody3>
      </Table3>

    </div>
  );
};

export default ClientInvoicesCandidateInvoiceRaiseTable;
