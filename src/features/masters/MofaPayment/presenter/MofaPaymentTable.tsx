import { MofaPaymentInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';
import { convertDateFormat } from '../../../../utils/function';




const MofaPaymentTable = (props: { mofaPaymentList: MofaPaymentInterface[], onClickEdit: any, onClickDelete: any }) => {
    return (
        <div className='overflow-auto'>

            <Table  >
                <TableHead >
                    <TableHeadRow  >
                        <TableHeadCell > Sr No.</TableHeadCell>
                        <TableHeadCell > Visa Authorisation</TableHeadCell>
                        <TableHeadCell > Payment</TableHeadCell>
                        <TableHeadCell > Date</TableHeadCell>
                        <TableHeadCell > Narration</TableHeadCell>
                        <TableHeadCell > Action</TableHeadCell>

                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.mofaPaymentList.map((ele, index) => (

                        <TableRow key={index}>
                            <TableCell >{index + 1}</TableCell>
                            <TableCell > {ele.visa_authorisation_name ?? ""}</TableCell>
                            <TableCell > {ele.payment}</TableCell>
                            <TableCell > {convertDateFormat(ele.date)}</TableCell>
                            <TableCell > {ele.narration}</TableCell>
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

export default MofaPaymentTable

