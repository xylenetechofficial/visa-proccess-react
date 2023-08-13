import { CustomCheckBox } from "../../../../componenets/Checkbox"
import { UnlabeledInput } from "../../../../componenets/Input";
import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox"
import { Table3, TableBody2, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"
import { SectorInterface } from "../../../masters/sector/type";
import { TicketProvidedByCompanyInterface } from "../type";

export default function Main(props: {
    TicketProvidedByCompanyList: TicketProvidedByCompanyInterface[],
    sectorList:SectorInterface[]
    onChange: (value: TicketProvidedByCompanyInterface[]) => void
}) {
    const HEADERLIST = [
        'SR NO.', 'PARTY CODE', 'COMPANY NAME', 'CANDIDATE NAME', 'PP NO', 'ACTUAL PROFESSION', 'VISA PROFESSION', 'AGENT', 'RC NAME', 'VISA RECEIVED DATE', 'VISA EXPIRE DATE', 'SELECT', 'SECTOR FROM', 'SECTOR TO', 'PNR NO ', 'DEPARTURE DATE'];
    function onUpdateRow(index: number, rowData: TicketProvidedByCompanyInterface) {
        const nextData = props.TicketProvidedByCompanyList.map((e, i) => {
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
                    {props.TicketProvidedByCompanyList.map((item, index) => (

                        <TableRow3>
                            <TableCell3> {index + 1} </TableCell3>
                            <TableCell3>{item.party_code} </TableCell3>
                            <TableCell3> {item.company_name}</TableCell3>
                            <TableCell3>{item.candidate_name} </TableCell3>
                            <TableCell3>{item.pp_no} </TableCell3>
                            <TableCell3>{item.actual_profession} </TableCell3>
                            <TableCell3>{item.visa_profession} </TableCell3>
                            <TableCell3> {item.agent} </TableCell3>
                            <TableCell3> {item.rc_name}</TableCell3>
                            <TableCell3>{item.visa_received_date} </TableCell3>
                            <TableCell3>{item.visa_expiry_date} </TableCell3>
                            <TableCell3><CustomCheckBox option={[]} onChange={(e) => onUpdateRow(index, { ...item, id: item.id })} /></TableCell3>
                            <TableCell3><CustomSelectComponentUnlabeled options={selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })} onChange={(value) => onUpdateRow(index, { ...item, sector_from: value })} /></TableCell3>
                            <TableCell3><CustomSelectComponentUnlabeled options={selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })} onChange={(value) => onUpdateRow(index, { ...item, sector_to: value })} /></TableCell3>
                            <TableCell3> <UnlabeledInput value={item.pnr_no} onchange={(value) => onUpdateRow(index, { ...item, pnr_no: value })} /></TableCell3>
                            <TableCell3> <UnlabeledInput value={item.departure_date} onchange={(value) => onUpdateRow(index, { ...item, departure_date: value })} /></TableCell3>
                        </TableRow3>
                    ))}
                </TableBody2>
            </Table3>
            </div>
        </>
    )
}