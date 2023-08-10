import { CustomCheckBox } from "../../../../componenets/Checkbox"
import { UnlabeledInput } from "../../../../componenets/Input";
import { CustomSelectComponent, CustomSelectComponentUnlabeled } from "../../../../componenets/SelectBox"
import { Table3, TableBody2, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"
import { RMAdvanceBookingInterface } from "../type";

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

            <Table3>
                <TableHead3>
                    <TableHeadRow3>
                        {HEADERLIST.map((item) => (<TableHeadCell3> {item}</TableHeadCell3>))}
                    </TableHeadRow3>
                </TableHead3>
                <TableBody2>
                    {props.RMAdvanceBookingList.map((item, index) => (

                        <TableRow3>
                           
                            <TableCell3>{index + 1}</TableCell3>
                            <TableCell3> {item.party_code} </TableCell3>
                            <TableCell3> {item.company_name} </TableCell3>
                            <TableCell3> {item.candidate_name} </TableCell3>
                            <TableCell3> {item.pp_no} </TableCell3>
                            <TableCell3> {item.actual_profession} </TableCell3>
                            <TableCell3> {item.visa_profession} </TableCell3>
                            <TableCell3> {item.agent} </TableCell3>
                            <TableCell3> {item.visa_received_date} </TableCell3>
                            <TableCell3> {item.given_to} </TableCell3>
                            <TableCell3> {item.payment} </TableCell3>
                            <TableCell3> {item.is_invoice} </TableCell3>
                            <TableCell3> {item.advance} </TableCell3>
                            <TableCell3><CustomCheckBox option={[]} onChange={(e) => onUpdateRow(index,{...item,advance:e.target.checked ? "Yes":''})} /></TableCell3>
                            <TableCell3><UnlabeledInput value={''} onchange={(value)=>onUpdateRow(index,{...item,payment_date:value})}/></TableCell3>
                        </TableRow3>
                    ))}
                </TableBody2>
            </Table3>
        </>
    )
}