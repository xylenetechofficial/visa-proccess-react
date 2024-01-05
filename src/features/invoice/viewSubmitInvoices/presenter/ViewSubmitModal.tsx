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
import { MediumContentModal } from "../../../../componenets/Modal";

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
      <MediumContentModal
        title=" Payment Detail"
        onClose={props.onClose}
        buttonName="Update"
        cancelButtonName="Cancel"
        handleClick={() =>
          onClickCreate(props.submittedInvoice.id, invoiceData)
        }
      >
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
      </MediumContentModal>
    </>
  );
}
