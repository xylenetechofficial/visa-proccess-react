import { Checkbox } from "@mui/material";
import { ClientAdditionalPaymentInterface, PaymentInterface } from "../type";
import { DateInput, TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";
import { CustomCheckBox } from "../../../../componenets/Checkbox";
import { BlueButton, GreenButton, RedButton } from "../../../../componenets/CustomButton";
import { convertDateFormat } from "../../../../utils/function";
import { Table2, TableBody2, TableCell, TableHead2, TableHeadCell2, TableHeadRow, TableRow } from "../../../../componenets/Table";
import { useState } from "react";


const ClientAdditionalInvoicePaymentAddTable = (props: {
    onClickPaymentList: (value: ClientAdditionalPaymentInterface) => void,
    onClickAdjust: (value: ClientAdditionalPaymentInterface) => void,
    onClickAdd: (value: ClientAdditionalPaymentInterface) => void,
    onClickEdit: (value: ClientAdditionalPaymentInterface) => void,
    onClickDelete: (value: ClientAdditionalPaymentInterface) => void,
    clientAdditionalPaymentList: ClientAdditionalPaymentInterface[],
}) => {
    const HEADERLIST = [
        "SR NO.",
        "COMPANY NAME",
        "INVOICE NUMBER",
        "INVOICE DATE",
        "INVOICE AMOUNT",
        "PAYMENT RECEIVED",
        "BALANCE PAYMENT",
        "SUSPENSE AMOUNT",
        "ACTION"
    ];

    return (
        <div className="overflow-auto">

            <Table2>
                <TableHead2>
                    <TableHeadRow>
                        {HEADERLIST.map((item) => (<TableHeadCell2> {item}</TableHeadCell2>))}
                    </TableHeadRow>
                </TableHead2>
                <TableBody2>
                    {props.clientAdditionalPaymentList.map((item, index) => (

                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{item.company_name}</TableCell>
                            <TableCell>{item.invoice_number}</TableCell>
                            <TableCell>{convertDateFormat(item.invoice_date)}</TableCell>
                            <TableCell>{item.invoice_amount}</TableCell>
                            <TableCell><span onClick={() => props.onClickPaymentList(item)}>{item.payment_received}</span></TableCell>

                            <TableCell>{item.balance_payment}</TableCell>
                            <TableCell>
                                <BlueButton text="Adjust From Sespense Amount" onClick={() => props.onClickAdjust(item)} />
                            </TableCell>

                            <TableCell>
                                <GreenButton text="ADD" onClick={() => props.onClickAdd(item)} />
                                <BlueButton text="EDIT" onClick={() => props.onClickEdit(item)} />
                                <RedButton text="DELETE" onClick={() => props.onClickDelete(item)} />
                            </TableCell>

                        </TableRow>
                    ))}



                </TableBody2>
            </Table2>
        </div>
    );
};

export default ClientAdditionalInvoicePaymentAddTable;
