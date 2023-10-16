import { ConsolidateChargeInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table3, TableBody3, TableCell3,TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';





const ConsolidateChargeTable = (props: { consolidateChargeList: ConsolidateChargeInterface[], onClickEdit: any, onClickDelete: any, snoBase:number }) => {
    return (
        <div className='overflow-auto' style={{ width: "100%", display: "flex", justifyContent: "center" }}>

            <Table3>
                <TableHead3 >
                    <TableHeadRow3 >
                        <TableHeadCell3  > Sr No.</TableHeadCell3>
                        <TableHeadCell3 > Name</TableHeadCell3>
                        <TableHeadCell3 > Charge</TableHeadCell3>
                        <TableHeadCell3 > Action</TableHeadCell3>

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.consolidateChargeList.map((ele, index) => (

                        <TableRow3 key={index}>
                            <TableCell3 >{index + props.snoBase + 1}</TableCell3>
                            <TableCell3 > {ele.name}</TableCell3>
                            <TableCell3 > {ele.charge}</TableCell3>
                            <TableCell3 >

                                <BlueButton text={" Edit"} preIcon='edit' onClick={() => {
                                    props.onClickEdit(ele)
                                }} />

                                <RedButton text={"Delete"} preIcon='delete' onClick={() => {
                                    props.onClickDelete(ele)
                                }} />

                            </TableCell3>
                        </TableRow3>
                    ))}



                </TableBody3>
            </Table3>

        </div>
    )
}

export default ConsolidateChargeTable

