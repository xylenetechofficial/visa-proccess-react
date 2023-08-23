import { Checkbox } from "flowbite-react";
import { CustomCheckBox } from "../../../../componenets/Checkbox"
import { RedButton } from "../../../../componenets/CustomButton";
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { CustomSelectComponent, CustomSelectComponentUnlabeled } from "../../../../componenets/SelectBox"
import { Table, TableBody2,  TableCell,  TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"
import { PassportReleaseRequestInterface } from "../type";
import { convertDateFormat } from "../../../../utils/function";

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

                            <TableCell>{index + 1}</TableCell>
                            <TableCell> {item.party_code} </TableCell>
                            <TableCell> {item.company_name} </TableCell>
                            <TableCell> {item.candidate_name} </TableCell>
                            <TableCell> {item.pp_no} </TableCell>
                            <TableCell> {item.actual_profession} </TableCell>
                            <TableCell> {item.visa_profession} </TableCell>
                            <TableCell> {item.agent_name} </TableCell>
                            <TableCell> {item.rc_name} </TableCell>
                            <TableCell> {convertDateFormat(item.visa_received_date)} </TableCell>
                            <TableCell> {convertDateFormat(item.visa_expiry_date)} </TableCell>
                            <TableCell> {item.is_invoice} </TableCell>
                            <TableCell> {item.air_ticket} </TableCell>
                            <TableCell> {item.division} </TableCell>
                            <TableCell><Checkbox  onChange={(e) => onUpdateRow(index, { ...item, id: item.id })} /></TableCell>
                            <TableCell><DateInput id="releaseDate"  onChange={(value) => { onUpdateRow(index, { ...item, ticketing_release_by_date: value }) }} value={item.ticketing_release_by_date} /></TableCell>
                        </TableRow3>
                    ))}
                </TableBody2>
            </Table>
            </div>
        </>
    )
}