import { Box, Modal } from "@mui/material";
import {
  SubHeading1,
  UpdateContentBox,
} from "../../../../componenets/CoustomHeader";
import { GreenButton, RedButton } from "../../../../componenets/CustomButton";
import { PenaltyChargesInterface } from "../type";
import { updatePenaltyChargesItem } from "../repository";
import { UnlabeledInput } from "../../../../componenets/Input";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { MediumContentModal } from "../../../../componenets/Modal";

export default function Main(props: {
  onClose: () => void;
  editPenaltyCharges: PenaltyChargesInterface;
  setEditPenaltyCharges: (value: PenaltyChargesInterface) => void;
}) {
  const handleSubmit = async () => {
    await updatePenaltyChargesItem(props.editPenaltyCharges);
  };

  return (
    <>
      <MediumContentModal
        title="Penalty Charges Edit"
        onClose={props.onClose}
        buttonName="Submit"
        cancelButtonName="Cancel"
        handleClick={() => {handleSubmit(), props.onClose()}}
      >
          <UpdateContentBox>
            <SubHeading1 text="company name  :" />
            {props.editPenaltyCharges.candidate_name}
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="party code : " />
            {props.editPenaltyCharges.party_code}
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="candidate name :" />
            {props.editPenaltyCharges.candidate_name}
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="passport no. :" />
            {props.editPenaltyCharges.passport_no}
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="actual profession :" />
            {props.editPenaltyCharges.actual_profession}
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="visa profession :" />
            {props.editPenaltyCharges.visa_profession}
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="agent :" />
            {props.editPenaltyCharges.agent}
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="visa recieved date :" />
            {props.editPenaltyCharges.visa_recieved_date}
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="process charges :" />
            {props.editPenaltyCharges.process_charges}
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="document charges :" />
            {/* {props.editPenaltyCharges.} */}
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="other charges :" />
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="client invoice :" />
            <div className="flex">
              <CustomRadioButton
                inlined
                value={props.editPenaltyCharges.client_invoice}
                option={[
                  { value: "yes", name: "Yes" },
                  { value: "no", name: "No" },
                ]}
                onChange={(value) => {
                  props.setEditPenaltyCharges({
                    ...props.editPenaltyCharges,
                    client_invoice: value,
                  });
                }}
              />
            </div>
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="Penalty Charges :" />
            <UnlabeledInput
              value={props.editPenaltyCharges.penalty_charges}
              onchange={(value) =>
                props.setEditPenaltyCharges({
                  ...props.editPenaltyCharges,
                  penalty_charges: value,
                })
              }
            />
          </UpdateContentBox>
      </MediumContentModal>
    </>
  );
}
