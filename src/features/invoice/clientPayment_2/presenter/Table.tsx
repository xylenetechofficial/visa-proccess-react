import { ClientPaymentInterface, PaymentInterface } from "../type";
// import { DateInput, TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";
// import { CustomCheckBox } from "../../../../componenets/Checkbox";
import { BlueButton, GreenButton, RedButton } from "../../../../componenets/CustomButton";
import { convertDateFormat } from "../../../../utils/function";
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
// import { useState } from "react";


const fetchClientPaymentListPaymentAddTable = (props: {
    onClickCandidateList: (value: ClientPaymentInterface) => void,
    onClickPaymentList: (value: ClientPaymentInterface) => void,
    onClickAdjust: (value: ClientPaymentInterface) => void,
    onClickAdd: (value: ClientPaymentInterface) => void,
    onClickEdit: (value: ClientPaymentInterface) => void,
    onClickDelete: (value: ClientPaymentInterface) => void,
    ClientPaymentList: ClientPaymentInterface[],
    snoBase:number
}) => {
    
    const HEADERLIST = [
        "SR NO.",
        "COMPANY NAME",
        "INVOICE NUMBER",
        "INVOICE DATE",
        
        "OTHER CHARGES",	
        "SERVICE CHARGES",	
        "TICKET CHARGES",	
        "TOTAL CHARGES",	

        "PAYMENT RECEIVED",
        "BALANCE PAYMENT",
        "BANK NAME",	
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
                    {props.ClientPaymentList.map((item, index) => (

                        <TableRow3 key={index}>
                           <TableCell3 >{index + props.snoBase+1}</TableCell3>
                            <TableCell3>{item.company_name}</TableCell3>
                            <TableCell3><span className="hover:underline" style={{cursor:"pointer",color:"#ff3c3c"}} onClick={() => props.onClickCandidateList(item)}>{item.invoice_number}</span></TableCell3>
                            <TableCell3>{convertDateFormat(item.invoice_date)}</TableCell3>

                            <TableCell3>{item.other_charges}</TableCell3>
                            <TableCell3>{item.service_charges} - {item.invoice_service_charges_currency} </TableCell3>
                            <TableCell3>{item.ticket_charges}</TableCell3>
                            <TableCell3>{item.total_charges}</TableCell3>

                            <TableCell3><span className="hover:underline" style={{cursor:"pointer",color:"#ff3c3c",}} onClick={() => props.onClickPaymentList(item)}>{item.payment_received}</span></TableCell3>

                            <TableCell3>{item.balance_payment}</TableCell3>
                            <TableCell3>{item.bank_name}</TableCell3>
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

export default fetchClientPaymentListPaymentAddTable;
