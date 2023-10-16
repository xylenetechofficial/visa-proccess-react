import { OtherDocsInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';





const OtherDocsTable = (props: { snoBase:number, otherDocsList: OtherDocsInterface[], onClickEdit: any, onClickDelete: any }) => {
    return (
        <div className='overflow-auto' style={{ width: "100%", display: "flex", justifyContent: "center" }}>
           
                <Table >
                    <TableHead >
                        <TableHeadRow >
                            <TableHeadCell  > Sr No.</TableHeadCell>
                            <TableHeadCell > Name</TableHeadCell>
                            <TableHeadCell > Action</TableHeadCell>

                        </TableHeadRow>
                    </TableHead>
                    <TableBody>
                        {props.otherDocsList.map((ele, index) => (

                            <TableRow key={index}>
                        <TableCell>{index + props.snoBase +1}</TableCell>
                                <TableCell > {ele.name}</TableCell>
                                <TableCell >

                                    <BlueButton text={" Edit"} preIcon='edit' onClick={() => {
                                        props.onClickEdit(ele)
                                    }} />

                                    <RedButton text={"Delete"} preIcon='delete' onClick={() => {
                                        props.onClickDelete(ele)
                                    }} />

                                </TableCell>
                            </TableRow>
                        ))}



                    </TableBody>
                </Table>
          
        </div>
    )
}

export default OtherDocsTable

