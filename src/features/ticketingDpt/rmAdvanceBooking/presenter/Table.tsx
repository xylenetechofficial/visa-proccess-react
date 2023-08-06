import { CustomCheckBox } from "../../../../componenets/Checkbox"
import { UnlabeledInput } from "../../../../componenets/Input";
import { CustomSelectComponent, CustomSelectComponentUnlabeled } from "../../../../componenets/SelectBox"
import { Table3, TableBody2, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"

export default function Main() {
    const HEADERLIST = [
        'SR NO.', 'PARTY CODE', 'COMPANY NAME', 'CANDIDATE NAME', 'PP NO', 'ACTUAL PROFESSION', 'VISA PROFESSION', 'AGENT',  'VISA RECEIVED DATE', 'VISA AUTHORIZATION',  'GIVEN TO','PAYMENT', 'IS INVOICE ', 'ADVANCE','PAYMENT DATE'];
    return (

        <>

            <Table3>
                <TableHead3>
                    <TableHeadRow3>
                        {HEADERLIST.map((item) => (<TableHeadCell3> {item}</TableHeadCell3>))}
                    </TableHeadRow3>
                </TableHead3>
                <TableBody2>
                    {HEADERLIST.map((item, index) => (

                        <TableRow3>
                           
                            <TableCell3>{index + 1}</TableCell3>
                            <TableCell3> </TableCell3>
                            <TableCell3> </TableCell3>
                            <TableCell3> </TableCell3>
                            <TableCell3> </TableCell3>
                            <TableCell3> </TableCell3>
                            <TableCell3> </TableCell3>
                            <TableCell3> </TableCell3>
                            <TableCell3> </TableCell3>
                            <TableCell3> </TableCell3>
                            <TableCell3> </TableCell3>
                            <TableCell3> </TableCell3>
                            <TableCell3> </TableCell3>
                            <TableCell3><CustomCheckBox option={[{ name: "Yes", value: '1' }]} onChange={(e) => console.log(e)} /></TableCell3>
                            <TableCell3><UnlabeledInput value={''} onchange={(value)=>console.log(value)}/></TableCell3>
                        </TableRow3>
                    ))}
                </TableBody2>
            </Table3>
        </>
    )
}