import { CustomCheckBox } from "../../../../componenets/Checkbox"
import { DateInput } from "../../../../componenets/Input"
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox"
import { Table, TableBody2, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"
import { SectorInterface } from "../../../masters/sector/type"
import { BookingRequestInterface } from "../type"


export default function Main(props: {
    ticketBookingRequestList: BookingRequestInterface[],
    sectorList: SectorInterface[],
    onChange: (value: BookingRequestInterface[]) => void
}) {
    const HEADERLIST = [
        'SR NO.', 'PARTY CODE', 'COMPANT NAME', 'CANDIDATE NAME', 'PP NO', 'ACTUAL PROFESSION', 'VISA PROFESSION', 'AGENT', 'RC NAME', 'VISA RECEIVED DATE', 'VISA EXPIRE DATE', 'IS INVOICE', 'AIR TICKET', ' DIVISION',
        'EMIGRATION REQUIRED', 'EMIGRATION DONE', 'SELECT', 'SECTOR FROM', 'SECTOR TO', 'REQUIRE DATE', 'PRIORITY', 'SECTOR CHARGES'

    ];
    function onUpdateRow(index: number, rowData: BookingRequestInterface) {
        const nextData = props.ticketBookingRequestList.map((e, i) => {
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
                        {props.ticketBookingRequestList.map((item, index) => (

                            <TableRow3>
                                <TableCell3>{index + 1} </TableCell3>
                                <TableCell3>{item.party_code} </TableCell3>
                                <TableCell3>{item.company_name} </TableCell3>
                                <TableCell3>{item.candidate_name} </TableCell3>
                                <TableCell3> {item.pp_no} </TableCell3>
                                <TableCell3> {item.actual_profession} </TableCell3>
                                <TableCell3> {item.visa_profession}</TableCell3>
                                <TableCell3> {item.agent}</TableCell3>
                                <TableCell3> {item.rc_name} </TableCell3>
                                <TableCell3>{item.visa_received_date} </TableCell3>
                                <TableCell3>{item.visa_expiry_date} </TableCell3>
                                <TableCell3>{item.is_invoice} </TableCell3>
                                <TableCell3>{item.air_ticket} </TableCell3>
                                <TableCell3>{item.division} </TableCell3>
                                <TableCell3>{item.emigration_required} </TableCell3>
                                <TableCell3>{item.emigration_done} </TableCell3>
                                <TableCell3><CustomCheckBox option={[]} onChange={(e) => onUpdateRow(index, { ...item, id: item.id })} /></TableCell3>
                                <TableCell3> <CustomSelectComponent options={selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })} onChange={(value) => onUpdateRow(index, { ...item, sector_from: value })} /> </TableCell3>
                                <TableCell3> <CustomSelectComponent options={selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })} onChange={(value) => onUpdateRow(index, { ...item, sector_to: value })} /> </TableCell3>
                                <TableCell3><DateInput id={`recired_date${index}`} onChange={(value) => onUpdateRow(index, { ...item, require_date: value })} /> </TableCell3>
                                <TableCell3> <CustomSelectComponent options={selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })} onChange={(value) => onUpdateRow(index, { ...item, priority: value })} value={item.priority} /> </TableCell3>
                                <TableCell3>{item.sector_charges} </TableCell3>
                            </TableRow3>
                        ))}
                    </TableBody2>
                </Table>
            </div>
        </>
    )
}