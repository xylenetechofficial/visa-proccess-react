import React, { useState } from "react";
import { AccountDashboardInterface, AgentPaymentReceivedInterface } from "../type";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import {
  Table,
  Table2,
  TableBody,
  TableCell,
  TableHead,
  TableHead2,
  TableHeadCell,
  TableHeadCell2,
  TableHeadRow,
  TableHeadRow2,
  TableRow,
} from "../../../../componenets/Table";
import { SubHeading1, SubHeadingSpan, SubHeadingSpan1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CustomButton2 } from "../../../../componenets/CustomComponents";
import { UnlabeledInput } from "../../../../componenets/Input";


const AccountDashboardTable = (props: {
  accountDashboardList: any,
  setCountryList: any,
  setPassportNo: any
  onClickAdd: any;
  setModalName: any
  countryList: any
}) => {
console.log(props.countryList,"countryList")
  const [agentCommission, setAgentCommission] = useState<number>(props?.countryList?.agent_commission);

  // const hasKeyName = props?.countryList?.some((item :any) => item.hasKeyName("name"));
  return (
    <>
      <div className="overflow-auto">
        {props?.countryList ? (
          <>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Candidate Name :" />
                <SubHeadingSpan text={props?.countryList?.name} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Passport No :" />
                <SubHeadingSpan text={props.countryList?.passport_no} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Party Code :" />
                <SubHeadingSpan1 textNum={props?.countryList?.party_code } />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Company Name :" />
                <SubHeadingSpan text={props?.countryList?.company_name} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Actual Profession :" />
                <SubHeadingSpan text={props?.countryList?.actual_profession} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Visa Profession :" />
                <SubHeadingSpan text={props?.countryList?.visa_profession} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Agent Name :" />
                <SubHeadingSpan text={props.countryList?.agent_name} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Visa Received Date :" />
                <SubHeadingSpan text={props?.countryList?.visa_received_date} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Visa Authorization :" />
                <SubHeadingSpan text={props?.countryList?.visa_authorization} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Document Charges :" />
                <SubHeadingSpan1 textNum={props?.countryList?.document_charges} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Service Charges :" />
                <SubHeadingSpan text={props?.countryList?.service_charges} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Partial Charges :" />
                <SubHeadingSpan text={props?.countryList?.partial_charges} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text="Sector Charges:" />
                <SubHeadingSpan text={props?.countryList?.sector_charges} />
              </UpdateContentBox>
            </div>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Ticket Charges :" />
                <SubHeadingSpan text={props?.countryList?.ticket_charges} />
              </UpdateContentBox>
            </div>
            <div className="mt-2"></div>
            <UpdateContentBox>
              <SubHeading1 text=" Amount Received :" />
              <SubHeadingSpan text={props?.countryList?.received} />
            </UpdateContentBox>
            <div className="mt-2"></div>
            <UpdateContentBox>
              <SubHeading1 text=" Balance Amount :" />
              <SubHeadingSpan1 textNum={props?.countryList?.balance_amount} />
            </UpdateContentBox>
            <div className="mt-2">
              <UpdateContentBox>
                <SubHeading1 text=" Agent Commission :" />
                <UnlabeledInput type="number" value={props?.countryList?.agent_commission} onchange={(value) => { setAgentCommission(parseInt(value)); props.setCountryList({ ...props.countryList, agent_commission: parseInt(value) }); console.log(agentCommission) }} />
              </UpdateContentBox>
            </div>

            <div className="grid grid-cols-2  place-items-center p-2">
              <CustomButton2 buttonText="Submit" onClick={() => { props.onClickAdd(props.countryList?.agent_id, agentCommission); props.setModalName("") }} />
              <CustomButton2 buttonText="Cancel" onClick={() => {  props.setModalName(""), props.setPassportNo(""), props.setCountryList({}) }} />
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

export default AccountDashboardTable;
