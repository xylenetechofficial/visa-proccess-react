
import {
  SubHeading1,
  UpdateContentBox,
} from "../../../../componenets/CoustomHeader";
import { UnlabeledInput } from "../../../../componenets/Input";
import { useState } from "react";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { AccountCandidateCancelInterface2 } from "../type";
import { createAccountCandidateCancel } from "../repository";
import { MistakeByList } from "../../../db";
import { MediumContentModal } from "../../../../componenets/Modal";

export default function Main(props: { onClose: any; currentData: any }) {
 
  const initailState: AccountCandidateCancelInterface2 = {
    candidate_id: props.currentData.id,
    client_invoice: "no",
    penalty_amount: 0,
    mistake_by: "",
  };
  const [candidateCancelData, setCandidateCancelData] =
    useState<AccountCandidateCancelInterface2>(initailState);
  async function onClickAdd() {
    const newArray = { ...candidateCancelData };
    await createAccountCandidateCancel(newArray);
    setCandidateCancelData(initailState);

    props.onClose();
  }
  return (
    <>
      <MediumContentModal
        title="Candidate Reject"
        onClose={props.onClose}
        buttonName="Update"
        cancelButtonName="Cancel"
        handleClick={onClickAdd}
      >
        <UpdateContentBox>
          <SubHeading1 text="Company Name   :" />
          <SubHeading1 text={props.currentData?.company_name} />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="pARTY cODE   :" />
          <SubHeading1 text={String(props.currentData?.party_code)} />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="Candidate Name   :" />
          <SubHeading1 text={props.currentData?.name} />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="Passport No   :" />
          <SubHeading1 text={props.currentData?.passport_no} />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="Agent    :" />
          <SubHeading1 text={props.currentData?.agent_name} />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="Client invoice   :" />
          <CustomRadioButton
            inlined
            value={candidateCancelData.client_invoice}
            onChange={(value) => {
              if (value == "yes")
                setCandidateCancelData({
                  ...candidateCancelData,
                  client_invoice: value,
                  mistake_by: "",
                  penalty_amount: 0,
                });
              else
                setCandidateCancelData({
                  ...candidateCancelData,
                  client_invoice: value,
                });
            }}
            option={[
              { name: "Yes", value: "yes" },
              { name: "No", value: "no" },
            ]}
          />
        </UpdateContentBox>
        {candidateCancelData.client_invoice == "yes" ? (
          <></>
        ) : (
          <>
            <UpdateContentBox>
              <SubHeading1 text="Penalty Amount   :" />
              <UnlabeledInput
                type="number"
                value={candidateCancelData.penalty_amount}
                onchange={(value) =>
                  // handleInputChange(value)
                  setCandidateCancelData({
                    ...candidateCancelData,
                    penalty_amount: Number(value),
                  })
                }
              />
            </UpdateContentBox>
            <UpdateContentBox>
              <SubHeading1 text="Mistake by   :" />

              <CustomRadioButton
                value={candidateCancelData.mistake_by}
                onChange={(value) =>
                  setCandidateCancelData({
                    ...candidateCancelData,
                    mistake_by: value,
                  })
                }
                option={MistakeByList}
              />
            </UpdateContentBox>
          </>
        )}
      </MediumContentModal>
    </>
  );
}
