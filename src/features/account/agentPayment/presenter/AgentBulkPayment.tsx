import React, { useState } from "react";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { AgentPaymentAddInterface } from "../type";
import { TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";
import { GreenButton } from "../../../../componenets/CustomButton";
import { createAgentPaymentAdd } from "../repository";

const AgentBulkPayment = (props:   { 
    fetchAgentPaymentList:any
  }) => {

  const initValue: AgentPaymentAddInterface = {

    agent_id: 2,
    amount: 0,
    description: '',
  };

  const [agentPayment, setagentPayment] = useState(initValue);

  const handleClick = async (agentPayment: any) => {
    await createAgentPaymentAdd(agentPayment)
    handleReset();
    await props.fetchAgentPaymentList();
  }
  const handleReset = () => {
    setagentPayment({
      agent_id: 2,
      amount: 0,
      description: '',
    })
  }
  return (
    <div className=" shadow-slate-500 rounded-lg shadow-md justify-center">
      <div className="text-xl p-3 font-bold text-gray-500 uppercase bg-[#F1F2F6] dark:bg-gray-500 dark:text-gray-500 w-auto">
        Agent payment add
      </div>
      <div className="grid grid-cols-1 justify-between space-y-6 m-4">
        <UpdateContentBox>
          <SubHeading1 text="description of payment :" />
          <TextAreaInput id='description' value={agentPayment.description} onChange={(value) => setagentPayment({ ...agentPayment, description: value })}
          />
        </UpdateContentBox>
      </div>
      <div className="grid grid-cols-1 justify-between space-y-6 m-4">
        <UpdateContentBox>
          <SubHeading1 text=" Amount :" />
          <UnlabeledInput
          type="number"
            value={agentPayment.amount}
            onchange={(value) => {
              const numberRegex = /[0-9]+$/;
              if (numberRegex.test(value) || value === '') {
                setagentPayment({ ...agentPayment, amount: parseInt(value) })
              }
            }
            }
          />
        </UpdateContentBox>
        <div className="grid grid-cols-2 gap-0 place-items-center p-2">
          <GreenButton
            text={"Add"}
            onClick={() => {
              handleClick(agentPayment)
            }}
          />
          <GreenButton
            text={"RESET"}
            onClick={() => {
              handleReset();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AgentBulkPayment;
