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

export default function Main(props: {
  onClose: () => void;
  editPenaltyCharges: PenaltyChargesInterface;
  setEditPenaltyCharges: (value: PenaltyChargesInterface) => void;
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
  };

  const handleSubmit = async () => {
    const res = await updatePenaltyChargesItem(props.editPenaltyCharges);
  };

  return (
    <>
      <Modal
        open={true}
        onClose={() => props.onClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">
            Penalty Charges Edit
          </h3>
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={() => props.onClose()}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="grid grid-cols-1 py-3  gap-2 shadow justify-center">
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

            <div className="flex justify-center">
              <GreenButton
                text="Submit"
                onClick={() => {
                  handleSubmit(), props.onClose();
                }}
              />
              <RedButton
                text="cancel"
                onClick={() => {
                  props.onClose();
                }}
              />
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
