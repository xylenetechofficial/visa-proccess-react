import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";

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
            <TableHeadCell3> VISA AUTHORIZATION NNAME</TableHeadCell3>
            <TableHeadCell3> RC </TableHeadCell3>
            <TableHeadCell3> OTHER CHARGES</TableHeadCell3>
            <TableHeadCell3> SERVICES CHARGES</TableHeadCell3>
            <TableHeadCell3> TICKET CHARGES</TableHeadCell3>
            <TableHeadCell3> TOTAL CHARGES </TableHeadCell3>
            

          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.ClientInvoiceChargesList?.map((ele, index) => (
            <TableRow3 key={index + 1}>

              <TableCell3> {ele.id}</TableCell3>
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
              <TableCell3>
                <UnlabeledInput
                  
// type="number"
                    
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
              </TableCell3>
              <TableCell3> 
                <UnlabeledInput
                  
// type="number"
                    
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
              </TableCell3>
              <TableCell3><UnlabeledInput 
// type="number"
                    
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
              </TableCell3>
              <TableCell3><UnlabeledInput 
// type="number"
                     value={ele?.total_charges} onchange={(value)=>{
                if(value){
                  onUpdateRow(index, {...ele, total_charges:parseInt(value)})
                }
                else{
                  onUpdateRow(index, {...ele, total_charges:parseInt('')})
                }
              }}/></TableCell3>
            </TableRow3>
          ))
          }

        </TableBody3>
      </Table3>

    </div>
  );
};

export default ClientInvoiceAddTable;
