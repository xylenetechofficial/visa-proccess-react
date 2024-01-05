import { readAccountDashboard, updateAccountDashboard } from "../repository";
import { useEffect, useState } from "react";
import { UnlabeledInput } from "../../../../componenets/Input";
import { SectorInterface } from "../../../masters/sector/type";
import { CompanyInterface } from "../../../masters/company/type";
import {
  AgentPaymentReceivedInterface,
  CandidateRejectInterface,
} from "../type";
import { CountryInterface } from "../../../masters/country/type";
import {
  SubHeading1,
  UpdateContentBox,
} from "../../../../componenets/CoustomHeader";
import { readVisaAuthorisationList } from "../../../masters/visaAuthorization/repository";
import { Box } from "@mui/material";
import { GreenButton } from "../../../../componenets/CustomButton";
import { MediumContentModal } from "../../../../componenets/Modal";

export default function Main(props: {
  onClose: () => void;
  fetchAccountDashboardList: () => void;
  currentElement: AgentPaymentReceivedInterface;
}) {
  const [agentPaymentReceivedList, setagentPaymentReceivedList] =
    useState<CandidateRejectInterface>({
      client_invoice: "",
      penalty_amount: 0,
      mistake_by: "",
    });

  return (
    <MediumContentModal
      title=" Agent payments edit"
      onClose={() => props.onClose()}
      buttonName="Submit"
      cancelButtonName="Back"
      handleClick={() => {
        console.log("AAAA"), props.onClose();
      }}
    >
      <UpdateContentBox>
        <SubHeading1 text="Candidate Name   :" />
        <SubHeading1 text={props.currentElement?.name} />
      </UpdateContentBox>

      <UpdateContentBox>
        <SubHeading1 text="Agent Name   :" />
        <SubHeading1 text={String(props.currentElement?.party_code)} />
      </UpdateContentBox>
      <UpdateContentBox>
        <SubHeading1 text="Payment Received   :" />
        <UnlabeledInput
          type="number"
          value={agentPaymentReceivedList.penalty_amount}
          onchange={(value) => {
            // handleInputChange(value)
            setagentPaymentReceivedList({
              ...agentPaymentReceivedList,
              penalty_amount: parseInt(value),
            });
          }}
        />
      </UpdateContentBox>
    </MediumContentModal>
  );
}
