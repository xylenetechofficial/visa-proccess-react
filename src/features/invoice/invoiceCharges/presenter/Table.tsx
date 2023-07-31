import {
  Table,
  TableBody2,
  TableCell,
  TableHead2,
  TableHeadCell,
  TableHeadRow,
  TableRow,

} from "../../../../componenets/Table";

import { UnlabeledInput } from "../../../../componenets/Input";
import { CustomSelectComponent, CustomSelectComponentUnlabeledv2, selectOptionConveterv2 } from "../../../../componenets/SelectBox";
import { ClientInvoiceChargesInterface } from "../type";
import { CurrencyList2 } from "../../../db";


const ClientInvoiceAddTable = (props: {
  ClientInvoiceChargesList: ClientInvoiceChargesInterface[];
  setData:any
  onChange: (value: ClientInvoiceChargesInterface[]) => void
}) => {

  function onUpdateRow(index: number, rowData: ClientInvoiceChargesInterface) {
    const nextData = props.ClientInvoiceChargesList.map((e, i) => {
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
            <TableHeadCell> VISA AUTHORIZATION NNAME</TableHeadCell>
            <TableHeadCell> RC </TableHeadCell>
            <TableHeadCell> OTHER CHARGES</TableHeadCell>
            <TableHeadCell> SERVICES CHARGES</TableHeadCell>
            <TableHeadCell> TICKET CHARGES</TableHeadCell>
            <TableHeadCell> TOTAL CHARGES </TableHeadCell>
            

          </TableHeadRow>
        </TableHead2>
        <TableBody2>
          {props.ClientInvoiceChargesList?.map((ele, index) => (
            <TableRow key={index + 1}>

              <TableCell> {ele.id}</TableCell>
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
              <TableCell>
                <UnlabeledInput
                  type="number"
                  value={ele.other_charges}
                  onchange={(value) => {
                     if (value) {
                      onUpdateRow(index, { ...ele, other_charges: parseInt(value) })
                        , console.log(value)
                    }
                    else {
                      onUpdateRow(index, { ...ele, other_charges : parseInt(value) })
                    }
                  }}
                />
                <CustomSelectComponentUnlabeledv2
                  value={ele.other_charge_currency}
                  options={CurrencyList2}
                  onChange={(value) => {
                    if (value) {
                      onUpdateRow(index, { ...ele, other_charge_currency: value })
                        , console.log(value)
                    }
                    else {
                      onUpdateRow(index, { ...ele, other_charge_currency: value })
                    }
                  }
                  } />
              </TableCell>
              <TableCell> 
                <UnlabeledInput
                  type="number"
                  value={ele.service_charges}
                  onchange={(value) => {
                     if (value) {
                      onUpdateRow(index, { ...ele, service_charges: parseInt(value) })
                     
                    }
                    else {
                      onUpdateRow(index, { ...ele, service_charges: parseInt(value) })
                    }
                  }}
                />
                <CustomSelectComponentUnlabeledv2
                  value={ele.service_charge_currency}
                  options={CurrencyList2}
                  onChange={(value) => {
                    if (value) {
                      onUpdateRow(index, { ...ele, service_charge_currency: value })
                        , console.log(value)
                    }
                    else {
                      onUpdateRow(index, { ...ele, service_charge_currency: value })
                    }
                  }
                  } />
              </TableCell>
              <TableCell><UnlabeledInput type="number"
              value={ele?.ticket_charges}
              onchange={(value)=>{
                if(value){
                  onUpdateRow(index,{...ele, ticket_charges:parseInt(value)})
                }
                else{
                  onUpdateRow(index,{...ele, ticket_charges:parseInt(value)})
                }
              }}
              />
              <CustomSelectComponentUnlabeledv2 
              value={ele?.ticket_charge_currency}
              options={CurrencyList2}
              onChange={(value)=>{
                if(value){
                  onUpdateRow(index,{...ele,ticket_charge_currency:value})
                }
                else{
                  onUpdateRow(index,{...ele, ticket_charge_currency:value})
                }
              }}
              />
              </TableCell>
              <TableCell><UnlabeledInput type="number" value={ele?.total_charges} onchange={(value)=>{
                if(value){
                  onUpdateRow(index, {...ele, total_charges:parseInt(value)})
                }
                else{
                  onUpdateRow(index, {...ele, total_charges:parseInt('')})
                }
              }}/></TableCell>
            </TableRow>
          ))
          }

        </TableBody2>
      </Table>

    </div>
  );
};

export default ClientInvoiceAddTable;
