import { Checkbox } from "@mui/material";
import { ClientPaymentAddInterface, ClientPaymentSingleAddInterface } from "../type";
import { DateInput, TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";
import { CustomCheckBox } from "../../../../componenets/Checkbox";
import { BlueButton, GreenButton, RedButton } from "../../../../componenets/CustomButton";
import { convertDateFormat } from "../../../../utils/function";
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
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

            <Table3>
                <TableHead3>
                    <TableHeadRow3>
                        {HEADERLIST.map((item) => (<TableHeadCell3> {item}</TableHeadCell3>))}
                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.clientPaymentData?.map((item, index) => (

                        <TableRow3 key={index}>
                            <TableCell3>{index + 1}</TableCell3>
                            <TableCell3>{item?.company_name}</TableCell3>
                            <TableCell3>{item?.invoice_number}</TableCell3>
                            <TableCell3>{item?.invoice_date}</TableCell3>
                            <TableCell3>{item?.invoice_amount}</TableCell3>
                            <TableCell3>{item?.payment_received}</TableCell3>
                            <TableCell3>{item?.balance_payment}</TableCell3>

                            <TableCell3>
                                
                                <BlueButton text="EDIT" onClick={() => { props.onClickEdit(item), props.setModal('edit') }} />
                                <RedButton text={"DELETE"} onClick={() => props.deleteAdditionalPaymentByid(index)} />
                            </TableCell3>

                        </TableRow3>
                    ))}



                </TableBody3>
            </Table3>
        </div>
    );
};

export default ClientAdditionalInvoicePaymentAddTable;
