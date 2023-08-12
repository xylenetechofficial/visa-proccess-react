import { CustomCheckBox } from "../../../../componenets/Checkbox"
import { RedButton } from "../../../../componenets/CustomButton";
import { UnlabeledInput } from "../../../../componenets/Input";
import { CustomSelectComponent, CustomSelectComponentUnlabeled } from "../../../../componenets/SelectBox"
import { Table, TableBody2, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"
import { PassportReleaseRequestInterface } from "../type";

export default function Main(props: {
    PassportReleaseRequestList: PassportReleaseRequestInterface[],
    onChange: (value: PassportReleaseRequestInterface[]) => void
}) {
    const HEADERLIST = [
        'SR NO.', 'PARTY CODE', 'COMPANY NAME', 'CANDIDATE NAME', 'PP NO', 'ACTUAL PROFESSION', 'VISA PROFESSION', 'AGENT', 'RC NAME', 'VISA RECEIVED DATE', 'VISA EXPIRE DATE ', 'IS INVOICE', 'AIR TICKET ', 'DIVISION', 'SELECT', 'RELEASE BY DATE'];
    function onUpdateRow(index: number, rowData: PassportReleaseRequestInterface) {
        const nextData = props.PassportReleaseRequestList.map((e, i) => {
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
            <Table>
                <TableHead3>
                    <TableHeadRow3>
                        {HEADERLIST.map((item) => (<TableHeadCell3> {item}</TableHeadCell3>))}
                    </TableHeadRow3>
                </TableHead3>
                <TableBody2>
                    {props.PassportReleaseRequestList.map((item, index) => (

                        <TableRow3>

                            <TableCell3>{index + 1}</TableCell3>
                            <TableCell3> {item.party_code} </TableCell3>
                            <TableCell3> {item.company_name} </TableCell3>
                            <TableCell3> {item.candidate_name} </TableCell3>
                            <TableCell3> {item.pp_no} </TableCell3>
                            <TableCell3> {item.actual_profession} </TableCell3>
                            <TableCell3> {item.visa_profession} </TableCell3>
                            <TableCell3> {item.agent} </TableCell3>
                            <TableCell3> {item.rc_name} </TableCell3>
                            <TableCell3> {item.visa_received_date} </TableCell3>
                            <TableCell3> {item.visa_expiry_date} </TableCell3>
                            <TableCell3> {item.is_invoice} </TableCell3>
                            <TableCell3> {item.air_ticket} </TableCell3>
                            <TableCell3> {item.division} </TableCell3>
                            <TableCell3><CustomCheckBox option={[]} onChange={(e) => onUpdateRow(index, { ...item, id: item.id })} /></TableCell3>
                            <TableCell3><UnlabeledInput onchange={(value) => { onUpdateRow(index, { ...item, release_by_date: value }) }} value={''} /></TableCell3>
                        </TableRow3>
                    ))}
                </TableBody2>
            </Table>
            </div>
        </>
    )
}