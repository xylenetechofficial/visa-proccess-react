
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
import {  CustomSelectComponentUnlabeledv2,  selectOptionConveterv2 } from "../../../../componenets/SelectBox";
import { useState } from "react";
import { convertDateFormat } from "../../../../utils/function";

const AgentPaymentTable = (props: {
  // AgentPaymentList: AgentPaymentInterface[];
  AgentPaymentList: any;
  setAgentPaymentList: any
  data: any;
  setData: any;
  setModalName:any
  fetchPaymentDetail:(type :string,id:number  )=>any
}) => {

  const [date, setDate] = useState<any>([])
  console.log(props.data)
  return (
    <div className="overflow-auto">

      <Table>
        <TableHead2>
          <TableHeadRow>
            <TableHeadCell> Sr No.</TableHeadCell>
            <TableHeadCell> PARTY CODE </TableHeadCell>
            <TableHeadCell> COMPANY NAME</TableHeadCell>
            <TableHeadCell> CONDIDATE NAME</TableHeadCell>
            <TableHeadCell> PASSPORT NO.</TableHeadCell>
            <TableHeadCell> ACTUAL PROFESSION </TableHeadCell>
            <TableHeadCell> VISA PROFESSION </TableHeadCell>
            <TableHeadCell> AGENT</TableHeadCell>
            <TableHeadCell> VISA RECIEVED DATE </TableHeadCell>
            <TableHeadCell> VISA AUTHORIZATION </TableHeadCell>
            <TableHeadCell> PHOTO CHARGES </TableHeadCell>
            <TableHeadCell> TRAINIG CHARGES</TableHeadCell>
            <TableHeadCell> OTHER CHARGES</TableHeadCell>
            <TableHeadCell> DOCUMENT CHARGES</TableHeadCell>
            <TableHeadCell> SERVICES CHARGES</TableHeadCell>
            <TableHeadCell> PARTIAL CHARGES</TableHeadCell>
            <TableHeadCell> SECTOR CHARGES</TableHeadCell>
            <TableHeadCell> CONSULATE SETTING CHARGES</TableHeadCell>
            <TableHeadCell> TICKET CHARGES</TableHeadCell>
            <TableHeadCell> ATTESTATION CHARGES </TableHeadCell>
            <TableHeadCell> CONSOLIDATED CHARGES </TableHeadCell>
            <TableHeadCell> PENALTY AFTER DEPLOYMENT </TableHeadCell>
            <TableHeadCell> EXTRA SERVICE </TableHeadCell>
            <TableHeadCell> AGENT COMMISSION </TableHeadCell>
            <TableHeadCell> DISCOUNT </TableHeadCell>
            <TableHeadCell> AMOUNT RECEIVED </TableHeadCell>
            <TableHeadCell> BALANCE AMOUNT </TableHeadCell>
            <TableHeadCell> AMOUNT </TableHeadCell>
            {/* <TableHeadCell> DD NO/RECEIVED / DD FROM</TableHeadCell> */}
            <TableHeadCell> ADJUST FROM BULK PAYMENT</TableHeadCell>
            {/* <TableHeadCell> HAS SERVICE TAX</TableHeadCell>
            <TableHeadCell> SERVICE TAX RECEIVED</TableHeadCell> */}
            <TableHeadCell> ADVANCE </TableHeadCell>
            <TableHeadCell> PAYMENT DATE </TableHeadCell>
          </TableHeadRow>
        </TableHead2>
        <TableBody2>
          {props.AgentPaymentList?.table_data_list?.map((ele: any, index: any) => (
            <TableRow key={index + 1}>

              <TableCell> {index + 1}</TableCell>
              <TableCell> {ele.party_code}</TableCell>
              <TableCell> {ele.company_name}</TableCell>
              <TableCell> {ele.name}</TableCell>
              <TableCell>{ele.passport_no}</TableCell>
              <TableCell>{ele.actual_profession}</TableCell>
              <TableCell>{ele.visa_profession}</TableCell>
              <TableCell> {ele.agent_name}</TableCell>
              <TableCell> {ele.visa_received_date}</TableCell>
              <TableCell> {ele.visa_authorization}</TableCell>
              <TableCell> {ele.photo_charges}</TableCell>
              <TableCell> {ele.training_charges}</TableCell>
              <TableCell> {ele.other_charges}</TableCell>
              <TableCell> {ele.document_charges}</TableCell>
              <TableCell> {ele.service_charges}</TableCell>
              <TableCell> {ele.partial_charges}</TableCell>
              <TableCell> {ele.sector_charges}</TableCell>
              <TableCell> {ele.consulate_setting_charges}</TableCell>
              <TableCell> {ele?.ticket_charges}</TableCell>
              <TableCell> {ele.attestation_charges}</TableCell>
              <TableCell> {ele.consolidated_charges}</TableCell>
              <TableCell> {ele.penalty_after_deployment}</TableCell>
              <TableCell> {ele.extra_service_tax}</TableCell>
              <TableCell> {ele.agent_commission}</TableCell>
              <TableCell> {ele.discount_amount}</TableCell>
              <TableCell> <p className="text-red-500 cursor-pointer " onClick={()=>{props.fetchPaymentDetail('candidate_id',ele),props.setModalName('viewpaymentdetailfromcandidaite')}}>{ele.received}  </p></TableCell>
              <TableCell> {ele.balance_amount}</TableCell>
              <TableCell>
                <UnlabeledInput
                  type="number"
                  value={props.data[index]?.amount}
                  onchange={(value) => {

                    props.setData((prev: any) => {
                      const newData = [...prev];
                      newData[index] = {
                        ...newData[index],
                        amount: parseInt(value),
                        id: ele.id
                      };
                      return newData;
                    });
                    console.log(props.data, value)
                  }}
                />
              </TableCell>
              <TableCell>


                <CustomSelectComponentUnlabeledv2
                  value={ele.candidate_id}
                  options={selectOptionConveterv2({
                    options: props?.AgentPaymentList?.bulk_payment_list,
                    options_struct: [{ name: "amount", value: "id" }, { name: "amount_used", value: "id" }]
                  })}
                  onChange={(value) => {
                    props.setData((prev: any) => {
                      const newData = [...prev];
                      newData[index] = {
                        ...newData[index],
                        bulk_payment_id: parseInt(value)
                      };
                      return newData;
                    });
                  }
                  } />

              </TableCell>

              <TableCell> 
                <Checkbox value={ele.payment_date} onChange={(e) => {
                  props.setData((prev: any) => {
                    const newData = [...prev];
                    newData[index] = {
                      ...newData[index],
                      advance: e.target.checked ? 1 : 0,
                      payment_date: convertDateFormat(String(new Date()))
                    };
                    return newData;
                  });

                  setDate([...date,
                  convertDateFormat(String(new Date()))
                  ]
                  )
                }} />
              </TableCell>
              <TableCell>

                <DateInput id="date"

                  value={ele.payment_date}
                  onChange={(value) => {
                    props.setAgentPaymentList((prev: any) => {
                      const newData = { ...prev };
                      newData.table_data_list[index] = {
                        ...newData.table_data_list[index],
                        payment_date: value
                      };

                      return newData;
                    });
                    props.setData((prev: any) => {
                      const newData = [...prev];
                      newData[index] = {
                        ...newData[index],
                        payment_date: convertDateFormat(String(new Date(value)))
                      };
                      return newData;
                    });
                  }} />

              </TableCell>

            </TableRow>
          ))
          }

        </TableBody2>
      </Table>

    </div>
  );
};

export default AgentPaymentTable;
