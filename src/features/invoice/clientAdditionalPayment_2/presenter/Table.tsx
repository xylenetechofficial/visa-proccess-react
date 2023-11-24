// import { Checkbox } from "@mui/material";
import { ClientAdditionalPaymentInterface, PaymentInterface } from "../type";
// import { DateInput, TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";
// import { CustomCheckBox } from "../../../../componenets/Checkbox";
import { BlueButton, GreenButton, RedButton } from "../../../../componenets/CustomButton";
import { convertDateFormat } from "../../../../utils/function";
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
// import { useState } from "react";


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

            <Table3>
                <TableHead3>
                    <TableHeadRow3>
                        {HEADERLIST.map((item) => (<TableHeadCell3> {item}</TableHeadCell3>))}
                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.clientAdditionalPaymentList.map((item, index) => (

                        <TableRow3 key={index}>
                            <TableCell3>{index + 1}</TableCell3>
                            <TableCell3>{item.company_name}</TableCell3>
                            <TableCell3>{item.invoice_number}</TableCell3>
                            <TableCell3>{convertDateFormat(item.invoice_date)}</TableCell3>
                            <TableCell3>{item.invoice_amount}</TableCell3>
                            <TableCell3><span style={{cursor:"pointer",color:"#ff3c3c"}} onClick={() => props.onClickPaymentList(item)}>{item.payment_received}</span></TableCell3>

                            <TableCell3>{item.balance_payment}</TableCell3>
                            <TableCell3>
                                <BlueButton text="Adjust From" onClick={() => props.onClickAdjust(item)} />
                            </TableCell3>

                            <TableCell3>
                                <GreenButton text="ADD" onClick={() => props.onClickAdd(item)} />
                                <BlueButton text="EDIT" onClick={() => props.onClickEdit(item)} />
                                <RedButton text="DELETE" onClick={() => props.onClickDelete(item)} />
                            </TableCell3>

                        </TableRow3>
                    ))}



                </TableBody3>
            </Table3>
        </div>
    );
};

export default ClientAdditionalInvoicePaymentAddTable;
