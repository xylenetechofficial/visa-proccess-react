import {
  SubHeading1,
  UpdateContentBox,
} from "../../../../componenets/CoustomHeader";
import { Box } from "@mui/material";
import { InvoiceSubmitInterface } from "../type";
import { FileInput } from "../../../../componenets/Input";
import { GreenButton, RedButton } from "../../../../componenets/CustomButton";
import { createInvoiceSubmit } from "../repository";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  borderRadius: 2,
  p: 2,
  m: 3,
};
export default function Main(props: {
  onClose: () => void;
  submittedInvoice: InvoiceSubmitInterface;
}) {
  const initial: any = {
    submit_remarks: props.submittedInvoice.remarks
      ? props.submittedInvoice.remarks
      : "",
    status: props.submittedInvoice.status ? props.submittedInvoice.status : "",
  };
  const [invoiceData, setInvoiceDta] = useState(initial);
  async function onClickCreate(id: number, item: InvoiceSubmitInterface) {
    const data = await createInvoiceSubmit(id, item);
    if (data) {
      props.onClose();
    }
  }
  return (
    <>
      <Box sx={style}>
        <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">
          Payment Detail
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
            <SubHeading1 text="Company Name :" />
            {props.submittedInvoice.company_name}
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="Invoice type :" />
            {props.submittedInvoice.invoice_type}
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="invoice number  :" />
            {props.submittedInvoice.invoice_number}
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="invoice date  :" />
            {props.submittedInvoice.invoice_date}
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="total charges  :" />
            {props.submittedInvoice.total_charges}
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="Courier Date  :" />
            {props.submittedInvoice.courier_date}
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="Received Date  :" />
            {props.submittedInvoice.received_status_date}
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="Submited Remarks  :" />
            {props.submittedInvoice.remarks}
          </UpdateContentBox>

          <div className="flex justify-center">
            <SubHeading1 text="Submit File  :" />
            <FileInput
              handleFileChange={(file) =>
                setInvoiceDta({ ...invoiceData, submit_file: file })
              }
            />
          </div>

          <div className="flex justify-center">
            <GreenButton
              text="submit"
              onClick={() =>
                onClickCreate(props.submittedInvoice.id, invoiceData)
              }
            />
            <RedButton text="cancel" onClick={() => props.onClose()} />
          </div>
        </div>
      </Box>
    </>
  );
}
