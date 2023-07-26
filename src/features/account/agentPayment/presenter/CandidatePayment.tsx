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
const CandidatePayment = (props: {
  AgentPaymentList: any,
  fetchAgentPaymentList: any,
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
    await props.fetchAgentPaymentList()
  }

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
            options={selectOptionConveterv3({
              options: props?.AgentPaymentList?.table_data_list ?? [],
              options_struct: { name1: "passport_no", name2:"name", value: "id" },
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
