import React, { useState } from "react";
import {  AgentPaymentReceivedInterface } from "../type";
import { SubHeading1, SubHeadingSpan, SubHeadingSpan1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { CustomButton2 } from "../../../../componenets/CustomComponents";
import { UnlabeledInput } from "../../../../componenets/Input";


const AgentCommissionTable = (props: {
  accountDashboardList:AgentPaymentReceivedInterface[] ,
  setAgentPaymentReceived: any,
  setPassportNo: any
  onClickAdd: any;
  setModalName: any
  agentPaymentReceived: AgentPaymentReceivedInterface
}) => {
  const [agentCommission, setAgentCommission] = useState<number>(props.agentPaymentReceived.agent_commission);
  return (
    <>
      <div className="overflow-auto">
        {props.agentPaymentReceived ? (
          <>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Candidate Name :" />
                <SubHeadingSpan text={props.agentPaymentReceived.name} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Passport No :" />
                <SubHeadingSpan text={props.agentPaymentReceived.passport_no} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Party Code :" />
                <SubHeadingSpan1 textNum={props?.agentPaymentReceived.party_code } />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Company Name :" />
                <SubHeadingSpan text={props?.agentPaymentReceived.company_name} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Actual Profession :" />
                <SubHeadingSpan text={props.agentPaymentReceived.actual_profession} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Visa Profession :" />
                <SubHeadingSpan text={props.agentPaymentReceived.visa_profession} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Agent Name :" />
                <SubHeadingSpan text={props.agentPaymentReceived.agent_name} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Visa Received Date :" />
                <SubHeadingSpan text={props.agentPaymentReceived.visa_received_date} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Visa Authorization :" />
                <SubHeadingSpan text={props.agentPaymentReceived.visa_authorization} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Document Charges :" />
                <SubHeadingSpan1 textNum={props.agentPaymentReceived.document_charges} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Service Charges :" />
                <SubHeadingSpan text={props.agentPaymentReceived.service_charges} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Partial Charges :" />
                <SubHeadingSpan text={props.agentPaymentReceived.partial_charges} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text="Sector Charges:" />
                <SubHeadingSpan text={props.agentPaymentReceived.sector_charges} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Ticket Charges :" />
                <SubHeadingSpan text={props.agentPaymentReceived.ticket_charges} />
              </UpdateContentBox>
            </div>
            <div className="mt-2"></div>
            <UpdateContentBox>
              <SubHeading1 text=" Amount Received :" />
              <SubHeadingSpan text={props.agentPaymentReceived.received} />
            </UpdateContentBox>
            <div className="mt-2"></div>
            <UpdateContentBox>
              <SubHeading1 text=" Balance Amount :" />
              <SubHeadingSpan1 textNum={props.agentPaymentReceived.balance_amount} />
            </UpdateContentBox>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Agent Commission :" />
                <UnlabeledInput 
type="number"
                     value={props.agentPaymentReceived.agent_commission} onchange={(value) => { setAgentCommission(parseInt(value)); props.setAgentPaymentReceived({ ...props.agentPaymentReceived, agent_commission: parseInt(value) }); console.log(agentCommission) }} />
              </UpdateContentBox>
            </div>

            <div className="grid grid-cols-2  place-items-center p-2">
              <CustomButton2 buttonText="Submit" onClick={() => { props.onClickAdd(props.agentPaymentReceived.agent_id, agentCommission); props.setModalName("") }} />
              <CustomButton2 buttonText="Cancel" onClick={() => {  props.setModalName(""), props.setPassportNo(""), props.setAgentPaymentReceived({}) }} />
            </div>
          </>
        ) :
          <div className="mt-2">
            <UpdateContentBox>
              <SubHeading1 text=" No Candidate Found :" />

            </UpdateContentBox>
          </div>
        }
      </div>
    </>
  );
};

export default AgentCommissionTable;
