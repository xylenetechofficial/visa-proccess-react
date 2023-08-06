import { CustomCheckBox } from "../../../../componenets/Checkbox"
import { CustomSelectComponent } from "../../../../componenets/SelectBox"
import { Table3, TableBody2, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"

export default function Main() {
    const HEADERLIST = [
        'SR NO.', 'PARTY CODE', 'COMPANT NAME', 'CANDIDATE NAME', 'PP NO', 'ACTUAL PROFESSION', 'VISA PROFESSION', 'AGENT', 'RC NAME', 'VISA RECEIVED DATE', 'VISA EXPIRE DATE', 'IS INVOICE', 'AIR TICKET', ' DIVISION',
        'EMIGRATION DONE', 'SELECT', 'SECTOR FROM', 'SECTOR TO', 'REQUIRE DATE', 'PRIORITY', 'SECTOR CHARGES'

    ]
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
                            <TableCell3><CustomCheckBox option={[{name:"Yes",value:'1'}]} onChange={(e)=>console.log(e)}/></TableCell3>
                            <TableCell3> <CustomSelectComponent options={[{name:'priorty',value:'id'}]} onChange={(value)=>console.log(value)}/> </TableCell3>
                            <TableCell3> <CustomSelectComponent options={[{name:'priorty',value:'id'}]} onChange={(value)=>console.log(value)}/> </TableCell3>
                            <TableCell3> </TableCell3>
                            <TableCell3> <CustomSelectComponent options={[{name:'priorty',value:'id'}]} onChange={(value)=>console.log(value)}/> </TableCell3>
                            <TableCell3> </TableCell3>
                        </TableRow3>
                    ))}
                </TableBody2>
            </Table3>
        </>
    )
}