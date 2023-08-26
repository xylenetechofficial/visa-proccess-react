import  {  useEffect, useState } from "react";
import {  TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";
import {
  SubHeading1,
  
  UpdateContentBox,
} from "../../../../componenets/CoustomHeader";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomSelectComponentUnlabeled,
  selectOptionConveter,
  selectOptionConveterv3,
} from "../../../../componenets/SelectBox";
import { createCandidateDiscountApprovalReject } from "../repository";
import { CandidateDiscountApproveRejectInterface } from "../../candidateDiscountApproveReject/type";
import { showMessage_v2 } from "../../../../utils/alert";
const CandidatePayment = (props: {
  AgentPaymentList: any,
  fetchAgentPaymentList: (name:string, value:any)=>void
  AgentID:any
}) => {

  const initValue: CandidateDiscountApproveRejectInterface = {
    candidate_id: 1,
    agent_id: props?.AgentID,
    amount: 0,
    remarks: '',
  };

  const [CandidatePayment, setCandidatePayment] = useState(initValue);
  const handleClick = async (CandidatePayment: CandidateDiscountApproveRejectInterface) => {
    await createCandidateDiscountApprovalReject(CandidatePayment);
    handleReset();
    console.log(props.AgentID);
     props.fetchAgentPaymentList('agent_id',props.AgentID);
  }
  console.log(props.AgentID,"console.log(props.AgentID);");
  const handleReset = () => {
    setCandidatePayment({
      candidate_id: 1,
      agent_id: props.AgentID,
      amount: 0,
      remarks: '',

    })
  }
  useEffect(()=>{
    setCandidatePayment((prev)=>{return {
      ...prev,
      agent_id:props.AgentID
    }})
  },[props.AgentID])
  const checkBalancefromDropDown= (currentBalance:number, id:number)=>{
    console.log(currentBalance,id,"kkk")
    if(id){
      const filterId = props.AgentPaymentList.table_data_list.filter((item :any) => item.id === id);
    if(currentBalance > filterId[0].balance_amount ){
      
      showMessage_v2({ message: "You cannot enter greater than balance amount", status: 401 })
    }
      
    }
  }
  return (
    <div className="shadow-slate-500  rounded-lg shadow-md justify-center">
      <div className="text-xl p-3 font-bold text-gray-500 uppercase bg-[#F1F2F6] dark:bg-gray-500 dark:text-gray-500 w-auto">
        Candidate payment add
      </div>
      <div className="grid grid-cols-1 justify-between space-y-6 m-4">
        <UpdateContentBox>
          <SubHeading1 text="candidate  :" />

          <CustomSelectComponentUnlabeled
            value={""}
            onChange={(value) => {
              setCandidatePayment({ ...CandidatePayment, candidate_id: value })

            }
            }
            options={selectOptionConveter({
              options: props?.AgentPaymentList?.table_data_list ?? [],
              options_struct: { name: "candidate_dropdown_name", value: "id" },
            })}
          />
        </UpdateContentBox>
      </div>
      <div className="grid grid-cols-1 justify-between space-y-6 m-4">
        <UpdateContentBox>
          <SubHeading1 text=" Amount :" />
          <UnlabeledInput
          type="number"
            value={CandidatePayment.amount}
            onchange={(value) => {
              const numberRegex = /[0-9]+$/;


              if (numberRegex.test(value) || value === '') {

                setCandidatePayment({ ...CandidatePayment, amount: parseInt(value) })
              }
              checkBalancefromDropDown(CandidatePayment.amount, CandidatePayment.candidate_id)
            }


            }
          />
        </UpdateContentBox>
      </div>
      {/* dd recieved / dd from :  dd number :   remark : */}

      {/* <UpdateContentBox>
        <SubHeading1 text="dd recieved/dd from  :" />

        <CustomSelectComponentUnlabeled
          value={CandidatePayment.visa_authorization}
          onChange={(value) =>
            setCandidatePayment({ ...CandidatePayment, visa_authorization: value })
        
          }
          options={selectOptionConveter({
            options: visaAuhorisationList,
            options_struct: { name: "name", value: "id" },
          })}
        />
      </UpdateContentBox> */}

      {/* <UpdateContentBox>
        <SubHeading1 text="  dd number :" />
        <UnlabeledInput
          value={CandidatePayment.quantity}
          onchange={(value) =>
            setCandidatePayment({ ...CandidatePayment, quantity: parseInt(value) })
          
          }
        />
      </UpdateContentBox> */}


      <UpdateContentBox>
        <SubHeading1 text="remark :" />
        <TextAreaInput id="remark" onChange={(value) => setCandidatePayment({ ...CandidatePayment, remarks: value })}
          value={CandidatePayment.remarks}
        />
      </UpdateContentBox>

      <div className="grid grid-cols-2 gap-0 place-items-center p-2">
        <GreenButton
          text={"Submit"}
          onClick={() => {
            handleClick(CandidatePayment)
          }}
        />
        <GreenButton
          text={"Reset"}
          onClick={() => {
            handleReset();
          }}
        />
      </div>
    </div>
  );
};

export default CandidatePayment;
