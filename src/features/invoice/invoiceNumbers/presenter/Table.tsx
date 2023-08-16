import {
  Table,
  TableBody2,
  TableCell,
  TableHead2,
  TableHeadCell,
  TableHeadRow,
  TableRow,

} from "../../../../componenets/Table";

import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { CustomSelectComponentUnlabeledv2, selectOptionConveterv2 } from "../../../../componenets/SelectBox";
import { ClientInvoiceNumberInterface } from "../type";
import { BankList } from "../../../db";


const ClientInvoiceAddTable = (props: {
  candidateNumbreList: ClientInvoiceNumberInterface[],
  onChange: (value: ClientInvoiceNumberInterface[]) => void
  data:any,
  setData:any
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
    props.onChange(nextData)
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
            <TableHeadCell> AGENT</TableHeadCell>
            <TableHeadCell> DIVISION </TableHeadCell>
            <TableHeadCell> RC </TableHeadCell>
            <TableHeadCell> INVOICE NUMBER</TableHeadCell>
            <TableHeadCell> INVOICE DATE</TableHeadCell>
            <TableHeadCell> BANK NAME</TableHeadCell>

          </TableHeadRow>
        </TableHead2>
        <TableBody2>
          {props.candidateNumbreList?.map((ele, index) => (
            <TableRow key={index + 1}>

              <TableCell> {index+1}</TableCell>
              <TableCell> {ele.party_code}</TableCell>
              <TableCell> {ele.company_name}</TableCell>
              <TableCell> {ele.candidate_name}</TableCell>
              <TableCell>{ele.passport_no}</TableCell>
              <TableCell>{ele.actual_profession}</TableCell>
              <TableCell>{ele.visa_profession}</TableCell>
              <TableCell> {ele.agent_name}</TableCell>
              <TableCell> {ele.division}</TableCell>
              <TableCell> {ele.rc_name}</TableCell>
              <TableCell> 
                <UnlabeledInput
                  type="text"
                  // value={props.data[index]?.amount}
                  value={ele.invoice_number}
                  onchange={(value) => {

                    if (value) {
                      onUpdateRow(index, { ...ele, invoice_number: value })
                        , console.log(value)
                    }
                    else {
                      onUpdateRow(index, { ...ele, invoice_number: value })
                    }
                  }}
                />
               
              </TableCell>
              <TableCell>
                <DateInput value={ele.invoice_date} id="invoice_date" onChange={(value)=> {
                  if(value){
                    onUpdateRow(index,{...ele, invoice_date:value})
                  }else{
                    onUpdateRow(index,{...ele, invoice_date:''})
                  }
                }} />
              </TableCell>
              <TableCell>
                <CustomSelectComponentUnlabeledv2  
                value={ele.bank_id}
                options={BankList}
                onChange={(value)=>{
                  if(value){
                    onUpdateRow(index,{...ele, bank_id:value})
                  }
                  else{
                    onUpdateRow(index,{...ele, bank_id:0})
                  }
                }}
                />
              </TableCell>

            </TableRow>
          ))
          }

        </TableBody2>
      </Table>

    </div>
  );
};

export default ClientInvoiceAddTable;
