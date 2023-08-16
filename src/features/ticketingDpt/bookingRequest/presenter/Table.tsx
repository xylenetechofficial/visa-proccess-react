import { Checkbox } from "flowbite-react"
import { CustomCheckBox } from "../../../../componenets/Checkbox"
import { DateInput } from "../../../../componenets/Input"
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox"
import { Table, TableBody2,  TableCell,  TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"
import { SectorInterface } from "../../../masters/sector/type"
import { BookingRequestInterface } from "../type"
import { convertDateFormat } from "../../../../utils/function"


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
                                <TableCell>{index + 1} </TableCell>
                                <TableCell>{item.party_code} </TableCell>
                                <TableCell>{item.company_name} </TableCell>
                                <TableCell>{item.candidate_name} </TableCell>
                                <TableCell> {item.pp_no} </TableCell>
                                <TableCell> {item.actual_profession} </TableCell>
                                <TableCell> {item.visa_profession}</TableCell>
                                <TableCell> {item.agent}</TableCell>
                                <TableCell> {item.rc_name} </TableCell>
                                <TableCell>{convertDateFormat(item.visa_received_date)} </TableCell>
                                <TableCell>{convertDateFormat(item.visa_expiry_date)} </TableCell>
                                <TableCell>{item.is_invoice} </TableCell>
                                <TableCell>{item.air_ticket} </TableCell>
                                <TableCell>{item.division} </TableCell>
                                <TableCell>{item.emigration_required} </TableCell>
                                <TableCell>{item.emigration_done} </TableCell>
                                <TableCell><Checkbox onChange={(e) => onUpdateRow(index, { ...item, id: item.id })} /></TableCell>
                                <TableCell> <CustomSelectComponent options={selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })} onChange={(value) => onUpdateRow(index, { ...item, sector_from: value })} /> </TableCell>
                                <TableCell> <CustomSelectComponent options={selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })} onChange={(value) => onUpdateRow(index, { ...item, sector_to: value })} /> </TableCell>
                                <TableCell><DateInput id={`recired_date${index}`} value={item.require_date} onChange={(value) => onUpdateRow(index, { ...item, require_date: value })} /> </TableCell>
                                <TableCell> <CustomSelectComponent options={selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })} onChange={(value) => onUpdateRow(index, { ...item, priority: value })} value={item.priority} /> </TableCell>
                                <TableCell>{item.sector_charges} </TableCell>
                            </TableRow3>
                        ))}
                    </TableBody2>
                </Table>
            </div>
        </>
    )
}