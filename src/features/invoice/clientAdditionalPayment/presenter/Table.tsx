import { Checkbox } from "@mui/material";
import { ClientPaymentAddInterface, ClientPaymentSingleAddInterface } from "../type";
import { DateInput, TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";
import { CustomCheckBox } from "../../../../componenets/Checkbox";
import { BlueButton, GreenButton, RedButton } from "../../../../componenets/CustomButton";
import { convertDateFormat } from "../../../../utils/function";
import { Table2, TableBody2, TableCell, TableHead2, TableHeadCell2, TableHeadRow, TableRow } from "../../../../componenets/Table";
import { useState } from "react";


const ClientAdditionalInvoicePaymentAddTable = (props: {
    onClickEdit: (value: any) => void,
    clientPaymentData: ClientPaymentAddInterface[],
    onChange: (value: ClientPaymentAddInterface[]) => void,
    data: any,
    setData: any,
    setModal: any
    deleteAdditionalPaymentByid:any
}) => {
    const HEADERLIST = ["SR NO.", "COMPANY NAME", "INVOICE NUMBER", "INVOICE DATE", "INVOICE AMOUNT", "PAYMENT RECEIVED", "BALANCE PAYMENT", "ACTION"];

    function onUpdateRow(index: number, rowData: ClientPaymentAddInterface) {
        const nextData = props.clientPaymentData.map((e, i) => {
            if (i === index) {
                // Increment the clicked counter
                return rowData;
            } else {
                // The rest haven't changed
                return e;
            }
        });
    }
    function onUpdateData(index: number, rowData: any) {
        const nextData = props.data.map((e: any, i: any) => {
            if (i === index) {
                // Increment the clicked counter
                return rowData;
            } else {
                // The rest haven't changed
                return e;
            }
        });
        // props.onChange(nextData)
        props.setData(nextData)
    }
    return (
        <div className="overflow-auto">

            <Table2>
                <TableHead2>
                    <TableHeadRow>
                        {HEADERLIST.map((item) => (<TableHeadCell2> {item}</TableHeadCell2>))}
                    </TableHeadRow>
                </TableHead2>
                <TableBody2>
                    {props.clientPaymentData?.map((item, index) => (

                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{item?.company_name}</TableCell>
                            <TableCell>{item?.invoice_number}</TableCell>
                            <TableCell>{item?.invoice_date}</TableCell>
                            <TableCell>{item?.invoice_amount}</TableCell>
                            <TableCell>{item?.payment_received}</TableCell>
                            <TableCell>{item?.balance_payment}</TableCell>

                            <TableCell>
                                
                                <BlueButton text="EDIT" onClick={() => { props.onClickEdit(item), props.setModal('edit') }} />
                                <RedButton text={"DELETE"} onClick={() => props.deleteAdditionalPaymentByid(index)} />
                            </TableCell>

                        </TableRow>
                    ))}



                </TableBody2>
            </Table2>
        </div>
    );
};

export default ClientAdditionalInvoicePaymentAddTable;
