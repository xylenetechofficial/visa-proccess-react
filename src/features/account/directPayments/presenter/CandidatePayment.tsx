import React, { useEffect, useState } from "react";
import { DateInput, TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";
import {
  SubHeading1,
  SubHeading2,
  UpdateContentBox,
} from "../../../../componenets/CoustomHeader";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomSelectComponentUnlabeled,
  selectOptionConveter,
  selectOptionConveterv3,
} from "../../../../componenets/SelectBox";
import { createCandidatePaymentAdd } from "../repository";
import { CandidatePaymentInterface } from "../type";
const CandidatePayment = (props: {
  fetchAgentPaymentList: () => void,
  AgentPaymentList: any;


}) => {

  const initValue: CandidatePaymentInterface = {
    candidate_id: 1,
    agent_id: 12,
    amount: 0,
    remarks: '',
  };

  const [CandidatePayment, setCandidatePayment] = useState(initValue);
  const handleClick = async (CandidatePayment: CandidatePaymentInterface) => {
    await createCandidatePaymentAdd(CandidatePayment)
     props.fetchAgentPaymentList();
     handleReset();
  }
  const handleReset = () => {
    setCandidatePayment({
      candidate_id: 0,
      agent_id: 0,
      amount: 0,
      remarks: '',
    })
  }

  return (
    <div className="shadow-slate-500  rounded-lg shadow-md justify-center h-80">
      <div className="text-xl p-3 font-bold text-gray-500 uppercase bg-[#F1F2F6] dark:bg-gray-500 dark:text-gray-500 w-auto">
        Candidate payment add
      </div>
      <div className="grid grid-cols-1 justify-between space-y-6 m-4">
        <UpdateContentBox>
          <SubHeading1 text="candidate  :" />

          <CustomSelectComponentUnlabeled

            // value={CandidatePayment.candidate_id}
            value={""}
            onChange={(value) => {
              setCandidatePayment({ ...CandidatePayment, candidate_id: parseInt(value) })

            }
            }
            options={selectOptionConveterv3({
              options: props?.AgentPaymentList?.table_data_list ?? [],
              // options: [],
              options_struct: { name1: "passport_no", name2: 'name' ,value: "id" },
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
            onchange={(value) =>
              setCandidatePayment({ ...CandidatePayment, amount: parseInt(value) })

            }
          />
        </UpdateContentBox>
      </div>


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
