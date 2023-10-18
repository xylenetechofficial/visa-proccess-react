import { RedButton } from "../../../../componenets/CustomButton";
import { Table3, TableBody2, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"
import { convertDateFormat } from "../../../../utils/function";
import { RMAdvanceBookingApprovalInterface } from "../type";

export default function Main(props:{
    onClickCreate:(value:RMAdvanceBookingApprovalInterface)=>void
    RMAdvanceBookingApprovalList:RMAdvanceBookingApprovalInterface[],
    onChange:(value:RMAdvanceBookingApprovalInterface[])=>void
}) {
    const HEADERLIST = [
        'SR NO.', 'PARTY CODE', 'COMPANY NAME', 'CANDIDATE NAME', 'PP NO', 'ACTUAL PROFESSION', 'VISA PROFESSION', 'AGENT', 'GIVEN TO','PAYMENT', 'IS INVOICE ', 'EMIGRATION REQUIRED','EMIGRATION DONE','PAYMENT DATE', 'ACTION'];
        function onUpdateRow(index: number, rowData: RMAdvanceBookingApprovalInterface) {
            const nextData = props.RMAdvanceBookingApprovalList.map((e, i) => {
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
                    {props.RMAdvanceBookingApprovalList.map((item, index) => (

                        <TableRow3>
                           
                            <TableCell3>{index + 1}</TableCell3>
                            <TableCell3> {item.party_code} </TableCell3>
                            <TableCell3> {item.company_name} </TableCell3>
                            <TableCell3> {item.candidate_name} </TableCell3>
                            <TableCell3> {item.pp_no} </TableCell3>
                            <TableCell3> {item.actual_profession} </TableCell3>
                            <TableCell3> {item.visa_profession} </TableCell3>
                            <TableCell3> {item.agent} </TableCell3>
                            <TableCell3> {item.given_to} </TableCell3>
                            <TableCell3> {item.payment} </TableCell3>
                            <TableCell3> {item.is_invoice} </TableCell3>
                            <TableCell3> {item.emigration_required} </TableCell3>
                            <TableCell3> {item.emigration_done} </TableCell3>
                            <TableCell3>{convertDateFormat(item.payment_date)}</TableCell3>
                            <TableCell3><RedButton text={"Aprove"} onClick={()=>{props.onClickCreate(item)}}/></TableCell3>
                        </TableRow3>
                    ))}
                </TableBody2>
            </Table3>
            </div>
        </>
    )
}