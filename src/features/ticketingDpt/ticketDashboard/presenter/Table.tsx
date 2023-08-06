import { CustomCheckBox } from "../../../../componenets/Checkbox"
import { CustomSelectComponent } from "../../../../componenets/SelectBox"
import { Table3, TableBody2, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"

export default function Main() {
    const HEADERLIST = [
        'SR NO.', 'SETTING VISA', 'JOB ORDER NO', 'COMPANY NAME', 'CANDIDATE NAME', 'PP NO', 'ACTUAL PROFESSION', 'MUFA NO', 'AGENT', 'RC NAME', 'VISA RECEIVED DATE', 'VISA EXPIRE DATE', 'SECTOR FROM', 'SECTOR TO', 'REQUIRED DATE', 'PRIORITY', 'AIR TICKET', 'VISA AUTHORIZATION', ' DIVISION', 'UNDER PROCESS', 'TRYING'];
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
                            <TableCell3> </TableCell3>
                            <TableCell3> </TableCell3>
                            <TableCell3> </TableCell3>
                            <TableCell3>  </TableCell3>
                            <TableCell3>  </TableCell3>
                            <TableCell3> </TableCell3>
                            <TableCell3><CustomCheckBox option={[{ name: "Yes", value: '1' }]} onChange={(e) => console.log(e)} /> </TableCell3>
                            <TableCell3><CustomCheckBox option={[{ name: "Yes", value: '1' }]} onChange={(e) => console.log(e)} /></TableCell3>
                        </TableRow3>
                    ))}
                </TableBody2>
            </Table3>
        </>
    )
}