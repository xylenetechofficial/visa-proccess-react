import { useEffect, useState } from "react";
import {
  SubHeading1,
  UpdateContentBox,
} from "../../../../componenets/CoustomHeader";
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { Box } from "@mui/material";
import { GreenButton, RedButton } from "../../../../componenets/CustomButton";
import { ClientAdditionalPaymentInterface, PaymentInterface } from "../type";
import { convertDateFormat } from "../../../../utils/function";
import { addPayment } from "../repository";
import { MediumContentModal } from "../../../../componenets/Modal";

export default function Main(props: {
  clientAdditionalPayment: ClientAdditionalPaymentInterface;
  onClose: () => void;
  fetchClientAdditionalInvoiceList: () => void;
}) {
  const initValue: PaymentInterface = {
    company_id: 0,
    invoice_number: "",
    invoice_date: "",
    amount: 0,
    date: "",
    description: "",
  };

  const [payment, setPayment] = useState(initValue);

  useEffect(() => {
    console.log(props.clientAdditionalPayment); // Only Dev
    setPayment({
      company_id: props.clientAdditionalPayment.company_id,
      invoice_number: props.clientAdditionalPayment.invoice_number,
      invoice_date: props.clientAdditionalPayment.invoice_date,
      amount: 0,
      date: "",
      description: "",
    });
  }, []);

  async function add_payment() {
    const data = await addPayment(payment);

    if (data) {
      props.fetchClientAdditionalInvoiceList();
      props.onClose();
    }
  }

  return (
    <MediumContentModal
      title="Client Additional Payment Add"
      onClose={props.onClose}
      buttonName="Submit"
      cancelButtonName="Cancel"
      handleClick={add_payment}
    >
      <UpdateContentBox>
        <SubHeading1 text="Company :" />
        {props.clientAdditionalPayment.company_name}
      </UpdateContentBox>

      <UpdateContentBox>
        <SubHeading1 text="INVOICE NUMBER :" />
        {props.clientAdditionalPayment.invoice_number}
      </UpdateContentBox>

      <UpdateContentBox>
        <SubHeading1 text="INVOICE DATE :" />
        {convertDateFormat(props.clientAdditionalPayment.invoice_date)}
      </UpdateContentBox>

      <UpdateContentBox>
        <SubHeading1 text="PAYMENT RECEIVED:" />
        {props.clientAdditionalPayment.payment_received}
      </UpdateContentBox>

      <UpdateContentBox>
        <SubHeading1 text="BALANCE PAYMENT :" />
        {props.clientAdditionalPayment.balance_payment}
      </UpdateContentBox>

      <UpdateContentBox>
        <SubHeading1 text="AMOUNT(INR) :" />
        <UnlabeledInput
          type="number"
          value={payment.amount}
          onchange={(value) =>
            setPayment({ ...payment, amount: parseInt(value) })
          }
        />
      </UpdateContentBox>
      <UpdateContentBox>
        <SubHeading1 text="DATE  :" />
        <DateInput
          id="sd;fksdakj"
          value={payment.date}
          onChange={(value) => setPayment({ ...payment, date: value })}
        />
      </UpdateContentBox>

      <UpdateContentBox>
        <SubHeading1 text="DESCRIPTION :" />
        <UnlabeledInput
          value={payment.description}
          onchange={(value) => setPayment({ ...payment, description: value })}
        />
      </UpdateContentBox>
    </MediumContentModal>
  );
}
