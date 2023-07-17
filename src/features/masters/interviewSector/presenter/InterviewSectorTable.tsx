import { InterviewSectorInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';





const InterviewSectorTable = (props: { interviewSectorList: InterviewSectorInterface[], onClickEdit: any, onClickDelete: any }) => {
    return (
        <div className='overflow-auto' style={{ width: "100%", display: "flex", justifyContent: "center" }}>

            <Table  >
                <TableHead>
                    <TableHeadRow >
                        <TableHeadCell  > Sr No.</TableHeadCell>
                        <TableHeadCell > Name</TableHeadCell>
                        <TableHeadCell > Action</TableHeadCell>

                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.interviewSectorList && props.interviewSectorList.length <= 0 ?
                        
                            "No data found "
                        
                        : ""}
                    {props.interviewSectorList && props.interviewSectorList.map((ele, index) => (

                        <TableRow key={index}>
                            <TableCell >{index + 1}</TableCell>
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

export default InterviewSectorTable

