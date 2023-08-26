import { BlueButton, GreenButton, RedButton } from "../../../../componenets/CustomButton";
import {
  Table,
  TableBody2,
  TableCell,
  TableHead2,
  TableHeadCell,
  TableHeadRow,
  TableRow,

} from "../../../../componenets/Table";
import { SectorInterface } from "../../../masters/sector/type";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { Checkbox } from "@mui/material";
import { UnlabeledInput } from "../../../../componenets/Input";
import { CustomSelectComponentUnlabeled, selectOptionConveter, selectOptionConveterv2 } from "../../../../componenets/SelectBox";
import { useState } from "react";
import { convertDateFormat } from "../../../../utils/function";
import { DirectInterface, DirectPaymentInterface } from "../type";
import { showMessage_v2 } from "../../../../utils/alert";

const AgentPaymentTable = (props: {
  // AgentPaymentList: AgentPaymentInterface[];
  AgentPaymentList: DirectPaymentInterface;
  onClickEdit: any;
  onClickDelete: any;
  data: any;
  setData: any;
  setModalName:any
  fetchPaymentDetail:(type :string,id:number  )=>any
}) => {
  const [date, setDate] = useState<any>([])
  const handleChange = (e: any, index: any) => {
    console.log("first", e.target.value, index, e.nativeEvent.type)
  }
    const checkBalance=(currentBalance :any, balance_amount :any)=>{
    console.log(currentBalance, balance_amount,"Oooo")
    if(currentBalance> balance_amount){
      
      showMessage_v2({ message: "You cannot enter greater than balance amount", status: 401 })
    }
  }
  const checkBalancefromDropDown= (currentBalance:number, id:number)=>{
    console.log(currentBalance,id,"kkk")
    if(id){
      const filterId = props.AgentPaymentList.bulk_payment_list.filter((item :any) => item.id === id);
    if(currentBalance > filterId[0].available_amount ){
      console.log("first")
      showMessage_v2({ message: "You cannot enter greater than balance amount", status: 401 })
    }
      
    }
  }
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
            <TableHeadCell> EXTRA SERVICE TAX </TableHeadCell>
            {/* <TableHeadCell> AGENT COMMISSION </TableHeadCell> */}
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

              <TableCell> {index +1}</TableCell>
              <TableCell> {ele.party_code}</TableCell>
              <TableCell> {ele.company_name}</TableCell>
              <TableCell> {ele.name}</TableCell>
              <TableCell>{ele.passport_no}</TableCell>
              <TableCell>{ele.actual_profession}</TableCell>
              <TableCell>{ele.visa_profession}</TableCell>
              <TableCell> {ele.agent_name}</TableCell>
              <TableCell> {convertDateFormat(ele.visa_received_date)}</TableCell>
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
              {/* <TableCell> {ele.agent_commision}</TableCell> */}
              <TableCell> {ele.discount_amount}</TableCell>
              <TableCell> <p className="text-red-600 cursor-pointer" onClick={()=> {props.setModalName('viewpaymentdetailfromcandidaite'), props.fetchPaymentDetail('candidate_id',ele)}}> {ele.received} </p></TableCell>
              <TableCell> {ele.balance_amount}</TableCell>
              <TableCell>
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
                    console.log(props.data, value)
                  }}
                />
              </TableCell>
              <TableCell>
                <CustomSelectComponentUnlabeled
                  value={ele.candidate_id}
                  onChange={(value) => {
                    props.setData((prev: any) => {
                      const newData = [...prev];
                      newData[index] = {
                        ...newData[index],
                        bulk_payment_id: parseInt(value)
                      };
                      return newData;
                    });
                    checkBalancefromDropDown(props.data[index].amount, props.data[index].bulk_payment_id)
                  }
                  }
                  // options={props?.AgentPaymentList?.bulk_payment_list}
                // options={selectOptionConveter({
                //   options: props?.AgentPaymentList?.bulk_payment_list,
                //   options_struct: { name: "description", value: "id" },

                // })}
                options={selectOptionConveterv2({
                  options: props?.AgentPaymentList?.bulk_payment_list,
                  options_struct: [{ name: "amount", value: "id" }, { name: "amount_used", value: "id" }]
                })}

                />
              </TableCell>

              <TableCell>
                
                <Checkbox
                  value={ele.payment_date}
                  onChange={(e) => {
                    const isChecked = e.target.checked; 

                    props.setData((prev: any) => {
                      const newData = [...prev];
                      newData[index] = {
                        ...newData[index],
                        advance: isChecked ? 1: 0,
                        payment_date: isChecked ? convertDateFormat(String(new Date())) : "",
                      };
                      return newData; 
                    });

                    setDate((prevDates: any) => {
                      const newDates = [...prevDates]; 
                      newDates[index] = isChecked 
                        ? convertDateFormat(String(new Date()))
                        : "";

                      return newDates; 
                    });

                    console.log(props.data, e.target.value);
                  }}
                />

              </TableCell>
              <TableCell> <UnlabeledInput type="date" onchange={(value)=>console.log(value)} value={ele.payment_date}/>

              </TableCell>

            </TableRow>
          ))
          }

        </TableBody2>
      </Table>
      {/* <GreenButton text="Submit"/> */}
    </div>
  );
};

export default AgentPaymentTable;
