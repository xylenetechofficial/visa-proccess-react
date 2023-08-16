import { Checkbox } from "flowbite-react";
import { CustomCheckBox } from "../../../../componenets/Checkbox"
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { CustomSelectComponent, CustomSelectComponentUnlabeled } from "../../../../componenets/SelectBox"
import { Table3, TableBody2,  TableCell,  TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"
import { RMAdvanceBookingInterface } from "../type";
import { convertDateFormat } from "../../../../utils/function";

export default function Main(props:{
    RMAdvanceBookingList:RMAdvanceBookingInterface[]
    onChange:(value:any)=>void
}) {
    const HEADERLIST = [
        'SR NO.', 'PARTY CODE', 'COMPANY NAME', 'CANDIDATE NAME', 'PP NO', 'ACTUAL PROFESSION', 'VISA PROFESSION', 'AGENT',  'VISA RECEIVED DATE', 'VISA AUTHORIZATION',  'GIVEN TO','PAYMENT', 'IS INVOICE ', 'ADVANCE','PAYMENT DATE'];
    
        function onUpdateRow(index: number, rowData: RMAdvanceBookingInterface) {
            const nextData = props.RMAdvanceBookingList.map((e, i) => {
                if (i === index) {
                    // Increment the clicked counter
                    return rowData;
                } else {
                    // The rest haven't changed
                    return e;
                }
            });
            props.onChange(nextData)
        }
    
    
        return (

        <>
<div className="overflow-auto">
            <Table3>
                <TableHead3>
                    <TableHeadRow3>
                        {HEADERLIST.map((item) => (<TableHeadCell3> {item}</TableHeadCell3>))}
                    </TableHeadRow3>
                </TableHead3>
                <TableBody2>
                    {props.RMAdvanceBookingList.map((item, index) => (

                        <TableRow3>
                           
                            <TableCell>{index + 1}</TableCell>
                            <TableCell> {item.party_code} </TableCell>
                            <TableCell> {item.company_name} </TableCell>
                            <TableCell> {item.candidate_name} </TableCell>
                            <TableCell> {item.pp_no} </TableCell>
                            <TableCell> {item.actual_profession} </TableCell>
                            <TableCell> {item.visa_profession} </TableCell>
                            <TableCell> {item.agent} </TableCell>
                            <TableCell> {convertDateFormat(item.visa_received_date)} </TableCell>
                            <TableCell> {item.visa_authorization} </TableCell>
                            <TableCell> {item.given_to} </TableCell>
                            <TableCell> {item.payment} </TableCell>
                            <TableCell> {item.is_invoice} </TableCell>
                            <TableCell><Checkbox  onChange={(e) => onUpdateRow(index,{...item,advance:e.target.checked ? "Yes":'No'})} /></TableCell>
                            <TableCell><DateInput id="paymentDate" value={item.payment_date} onChange={(value)=>onUpdateRow(index,{...item,payment_date:value})}/></TableCell>
                        </TableRow3>
                    ))}
                </TableBody2>
            </Table3>
            </div>
        </>
    )
}