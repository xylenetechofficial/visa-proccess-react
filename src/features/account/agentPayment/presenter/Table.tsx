
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
import { useState } from "react";
import { convertDateFormat } from "../../../../utils/function";
import { showMessage_v2 } from "../../../../utils/alert";

const AgentPaymentTable = (props: {
  // AgentPaymentList: AgentPaymentInterface[];
  AgentPaymentList: any;
  setAgentPaymentList: any
  data: any;
  setData: any;
  setModalName: any
  fetchPaymentDetail: (type: string, id: number) => any
}) => {

  const [date, setDate] = useState<any>([])
  console.log(props.data)
  const checkBalance = (currentBalance: any, balance_amount: any) => {
    console.log(currentBalance, balance_amount, "Oooo")
    if (currentBalance > balance_amount) {

      showMessage_v2({ message: "You cannot enter greater than balance amount", status: 401 })
    }
  }

  const checkBalancefromDropDown = (currentBalance: number, id: number) => {
    console.log(currentBalance, id, "kkk")
    if (id) {
      const filterId = props.AgentPaymentList.bulk_payment_list.filter((item: any) => item.id === id);
      if (currentBalance > filterId[0].available_amount) {
        console.log("first")
        showMessage_v2({ message: "You cannot enter greater than balance amount", status: 401 })
      }

    }
  }
  return (
    <div className="overflow-auto">

      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> PARTY CODE </TableHeadCell3>
            <TableHeadCell3> COMPANY NAME</TableHeadCell3>
            <TableHeadCell3> CONDIDATE NAME</TableHeadCell3>
            <TableHeadCell3> PASSPORT NO.</TableHeadCell3>
            <TableHeadCell3> ACTUAL PROFESSION </TableHeadCell3>
            <TableHeadCell3> VISA PROFESSION </TableHeadCell3>
            <TableHeadCell3> AGENT</TableHeadCell3>
            <TableHeadCell3> VISA RECIEVED DATE </TableHeadCell3>
            <TableHeadCell3> VISA AUTHORIZATION </TableHeadCell3>
            <TableHeadCell3> PHOTO CHARGES </TableHeadCell3>
            <TableHeadCell3> TRAINIG CHARGES</TableHeadCell3>
            <TableHeadCell3> OTHER CHARGES</TableHeadCell3>
            <TableHeadCell3> DOCUMENT CHARGES</TableHeadCell3>
            <TableHeadCell3> SERVICES CHARGES</TableHeadCell3>
            <TableHeadCell3> PARTIAL CHARGES</TableHeadCell3>
            <TableHeadCell3> SECTOR CHARGES</TableHeadCell3>
            <TableHeadCell3> CONSULATE SETTING CHARGES</TableHeadCell3>
            <TableHeadCell3> TICKET CHARGES</TableHeadCell3>
            <TableHeadCell3> ATTESTATION CHARGES </TableHeadCell3>
            <TableHeadCell3> CONSOLIDATED CHARGES </TableHeadCell3>
            <TableHeadCell3> PENALTY AFTER DEPLOYMENT </TableHeadCell3>
            <TableHeadCell3> EXTRA SERVICE </TableHeadCell3>
            <TableHeadCell3> AGENT COMMISSION </TableHeadCell3>
            <TableHeadCell3> DISCOUNT </TableHeadCell3>
            <TableHeadCell3> AMOUNT RECEIVED </TableHeadCell3>
            <TableHeadCell3> BALANCE AMOUNT </TableHeadCell3>
            <TableHeadCell3> AMOUNT </TableHeadCell3>
            {/* <TableHeadCell3> DD NO/RECEIVED / DD FROM</TableHeadCell3> */}
            <TableHeadCell3> ADJUST FROM BULK PAYMENT</TableHeadCell3>
            {/* <TableHeadCell3> HAS SERVICE TAX</TableHeadCell3>
            <TableHeadCell3> SERVICE TAX RECEIVED</TableHeadCell3> */}
            <TableHeadCell3> ADVANCE </TableHeadCell3>
            <TableHeadCell3> PAYMENT DATE </TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.AgentPaymentList?.table_data_list?.map((ele: any, index: any) => (
            <TableRow3 key={index + 1}>

              <TableCell3> {index + 1}</TableCell3>
              <TableCell3> {ele.party_code}</TableCell3>
              <TableCell3> {ele.company_name}</TableCell3>
              <TableCell3> {ele.name}</TableCell3>
              <TableCell3>{ele.passport_no}</TableCell3>
              <TableCell3>{ele.actual_profession}</TableCell3>
              <TableCell3>{ele.visa_profession}</TableCell3>
              <TableCell3> {ele.agent_name}</TableCell3>
              <TableCell3> {convertDateFormat(ele.visa_received_date)}</TableCell3>
              <TableCell3> {ele.visa_authorization}</TableCell3>
              <TableCell3> {ele.photo_charges}</TableCell3>
              <TableCell3> {ele.training_charges}</TableCell3>
              <TableCell3> {ele.other_charges}</TableCell3>
              <TableCell3> {ele.document_charges}</TableCell3>
              <TableCell3> {ele.service_charges}</TableCell3>
              <TableCell3> {ele.partial_charges}</TableCell3>
              <TableCell3> {ele.sector_charges}</TableCell3>
              <TableCell3> {ele.consulate_setting_charges}</TableCell3>
              <TableCell3> {ele?.ticket_charges}</TableCell3>
              <TableCell3> {ele.attestation_charges}</TableCell3>
              <TableCell3> {ele.consolidated_charges}</TableCell3>
              <TableCell3> {ele.penalty_after_deployment}</TableCell3>
              <TableCell3> {ele.extra_service_tax}</TableCell3>
              <TableCell3> {ele.agent_commission}</TableCell3>
              <TableCell3> {ele.discount_amount}</TableCell3>
              <TableCell3> <p className="text-red-500 cursor-pointer " onClick={() => { props.fetchPaymentDetail('candidate_id', ele), props.setModalName('viewpaymentdetailfromcandidaite') }}>{ele.received}  </p></TableCell3>
              <TableCell3> {ele.balance_amount}</TableCell3>
              <TableCell3>
                <UnlabeledInput
                  type="number"
                  value={props.data[index]?.amount}
                  onchange={(value) => {
                    checkBalance(props.data[index]?.amount, ele.balance_amount)
                    props.setData((prev: any) => {
                      const newData = [...prev];
                      newData[index] = {
                        ...newData[index],
                        amount: parseInt(value),
                        id: ele.id
                      };
                      return newData;
                    });

                  }}
                />
              </TableCell3>
              <TableCell3>


                <CustomSelectComponentUnlabeledv2
                  // value={ele.candidate_id}
                  value={props?.data[index]?.bulk_payment_id}
                  options={selectOptionConveter({
                    options: props?.AgentPaymentList?.bulk_payment_list,
                    options_struct: { name: "name", value: "id" },
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

                    checkBalancefromDropDown(props.data[index]?.amount, props.data[index].bulk_payment_id)
                  }
                  } />

              </TableCell3>

              <TableCell3>
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
              </TableCell3>
              <TableCell3>

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

              </TableCell3>

            </TableRow3>
          ))
          }

        </TableBody3>
      </Table3>

    </div>
  );
};

export default AgentPaymentTable;
