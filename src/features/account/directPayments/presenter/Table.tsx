import { BlueButton, GreenButton, RedButton } from "../../../../componenets/CustomButton";
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
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
  agentBy:any,
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
            <TableHeadCell3> EXTRA SERVICE TAX </TableHeadCell3>
            {/* <TableHeadCell3> AGENT COMMISSION </TableHeadCell3> */}
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
            <TableRow3 key={index + 1} color={ele.color_code}>

              <TableCell3> {index +1}</TableCell3>
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
              <TableCell3> {ele.service_charges} ({ele.service_charge_note})</TableCell3>
              <TableCell3> {ele.partial_charges}</TableCell3>
              <TableCell3> {ele.sector_charges}</TableCell3>
              <TableCell3> {ele.consulate_setting_charges}</TableCell3>
              <TableCell3> {ele?.ticket_charges}</TableCell3>
              <TableCell3> {ele.attestation_charges}</TableCell3>
              <TableCell3> {ele.consolidated_charges}</TableCell3>
              <TableCell3> {ele.penalty_after_deployment}</TableCell3>
              <TableCell3> {ele.extra_service_tax}</TableCell3>
              {/* <TableCell3> {ele.agent_commision}</TableCell3> */}
              <TableCell3> {ele.discount_amount}</TableCell3>
              <TableCell3> <p className="text-red-600 cursor-pointer" onClick={()=> {props.setModalName('viewpaymentdetailfromcandidaite'), props.fetchPaymentDetail('candidate_id',ele)}}> {ele.received} </p></TableCell3>
              <TableCell3> {ele.balance_amount}</TableCell3>
              <TableCell3>
                <UnlabeledInput
                
// type="number"
                    
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
              </TableCell3>
              <TableCell3>
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
                options={selectOptionConveter({
                  options: props?.AgentPaymentList?.bulk_payment_list,
                  options_struct: { name: "name", value: "id" },
                })}

                />
              </TableCell3>

              <TableCell3>
                
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

              </TableCell3>
              <TableCell3> <UnlabeledInput type="date" onchange={(value)=>console.log(value)} value={ele.payment_date}/>

              </TableCell3>

            </TableRow3>
          ))
          }

        </TableBody3>
      </Table3>
      {/* <GreenButton text="Submit"/> */}
    </div>
  );
};

export default AgentPaymentTable;
