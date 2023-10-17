import { useEffect, useState } from "react";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";
import {
  BodyText1,
  SubHeading1,
  UpdateContentBox,
} from "../../../../componenets/CoustomHeader";
import { GreenButton, RedButton } from "../../../../componenets/CustomButton";
import { Box } from "@mui/material";
import { CustomSelectComponent } from "../../../../componenets/SelectBox";
import { TicketIssueInterface } from "../type";
import { createTicketIssueList } from "../repository";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function Main(props: { onClose: () => void, reIssue: TicketIssueInterface , setReIssue:(value:any)=>void}) {
  const handleSubmit =async()=>{
    const res = await createTicketIssueList(props.reIssue)
  }
  return (
    <>
      <Box sx={style}>
        <h3 className="mb-4 text-2xl align-center font-medium text-gray-900 dark:text-white">
          TICKET STATUS CHARGES
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

        <div className=" grid grid-cols-1 py-3  gap-2 shadow">
          <UpdateContentBox>
            <SubHeading1 text="party code :" />
            <SubHeading1 text={""} />
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="company name :" />
            <SubHeading1 text={props.reIssue.company_name} />
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="candidate name :" />
            <SubHeading1 text={props.reIssue.candidate_name} />
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="passport no :" />
            <SubHeading1 text={props.reIssue.passport_no} />
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="select status :" />
            {/* <SubHeading1 text={props.reIssue.s} /> */}
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="mistake by :" />

            <CustomSelectComponent
            onChange={(value) =>{props.setReIssue({...props.reIssue, ticketing_mistake_by:value})}}
            options={[{name:"Refund",value:"refund"},{name:"No Refund",value:"no-refund"},{name:"Name Changes",value:"namechanges"},{name:"Void",value:"void"},{name:"Re-Issue",value:"reissue"}]}
              value={props.reIssue.ticketing_mistake_by} />
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="re-issue amount :" />
            {/* name Input */}
            <StandardInput
              value={props.reIssue.ticketing_reissue_charge}
              onChangeValue={(e: string) => {props.setReIssue({...props.reIssue,ticketing_reissue_charge:e})}}
              label="amount"
            />
          </UpdateContentBox>


          <div className="grid grid-cols-2 shadow-sm">
            <GreenButton text="Submit" onClick={() => { handleSubmit(),props.onClose()}} />
            <RedButton
              text="cancel"
              onClick={() => {
                props.onClose();
              }}
            />
          </div>


        </div>
      </Box>
    </>
  );
}
