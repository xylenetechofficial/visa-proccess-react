import React, { useEffect, useState } from "react";
import { DateInput, TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";
import {
  SubHeading1,
  SubHeading2,
  UpdateContentBox,
} from "../../../../componenets/CoustomHeader";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomSelectComponent,
  CustomSelectComponentUnlabeled,
  selectOptionConveter,
  selectOptionConveterv3,
} from "../../../../componenets/SelectBox";
import { createCandidatePaymentAdd } from "../repository";
import { CandidatePaymentInterface } from "../type";
import { showMessage_v2 } from "../../../../utils/alert";
const CandidatePayment = (props: {
  fetchAgentPaymentList: () => void,
  AgentPaymentList: any;

  AgentID: any,
}) => {

  const initValue: CandidatePaymentInterface = {
    candidate_id: 0,
    agent_id: 0,
    amount: 0,
    remarks: '',
  };

  const [CandidatePayment, setCandidatePayment] = useState(initValue);
  const handleClick = async (CandidatePayment: CandidatePaymentInterface) => {
    const agentId = JSON.parse(localStorage.getItem("agentId") ?? "0")
    CandidatePayment.agent_id = parseInt(agentId)
    console.log(CandidatePayment);   // Only Dev

    const data = await createCandidatePaymentAdd(CandidatePayment)
    if (data) {
      props.fetchAgentPaymentList();
      handleReset();
    }

  }
  const handleReset = () => {
    setCandidatePayment({
      candidate_id: 0,
      agent_id: CandidatePayment.agent_id,
      amount: 0,
      remarks: '',
    })
  }
  const checkBalancefromDropDown = (currentBalance: number, id: number) => {
    console.log(currentBalance, id, "kkk")
    if (id) {
      const filterId = props.AgentPaymentList.table_data_list.filter((item: any) => item.id === id);
      if (currentBalance > filterId[0].balance_amount) {

        showMessage_v2({ message: "You cannot enter greater than balance amount", status: 401 })
      }

    }
  }

  useEffect(() => {
    handleReset()
  }, [props.AgentPaymentList]);

  return (
    <div className="shadow-slate-500  rounded-lg shadow-md justify-center h-80">
      <div className="text-xl p-3 font-bold text-gray-500 uppercase bg-[#F1F2F6] dark:bg-gray-500 dark:text-gray-500 w-auto">
        Candidate payment add
      </div>
      <div className="grid grid-cols-1 justify-between space-y-6 m-4">
        <UpdateContentBox>
          <SubHeading1 text="candidate  :" />

          <CustomSelectComponent
            style={{ width: "200px" }}
            value={CandidatePayment.candidate_id}
            // value={""}
            onChange={(value) => {
              setCandidatePayment({ ...CandidatePayment, candidate_id: parseInt(value) })

            }
            }
            options={selectOptionConveter({
              options: props?.AgentPaymentList?.table_data_list ?? [],
              // options: [],
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
              setCandidatePayment({ ...CandidatePayment, amount: parseInt(value) }),
                checkBalancefromDropDown(CandidatePayment.amount, CandidatePayment.candidate_id)
            }
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
