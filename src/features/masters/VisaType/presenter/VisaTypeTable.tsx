import { VisaTypeInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';




const VisaTypeTable = (props: { visaTypeList: VisaTypeInterface[], onClickEdit: any, onClickDelete: any }) => {
    return (
        <div className='overflow-auto' style={{width:"100%"}}>

            <Table >
                <TableHead>
                    <TableHeadRow >
                        <TableHeadCell > Sr No.</TableHeadCell>
                        <TableHeadCell > Name</TableHeadCell>
                        <TableHeadCell > Mofa Fees</TableHeadCell>
                        <TableHeadCell > Visa Fees</TableHeadCell>
                        <TableHeadCell > Single Entry</TableHeadCell>
                        <TableHeadCell > Multiple Entry</TableHeadCell>
                        <TableHeadCell > Action</TableHeadCell>

                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.visaTypeList.map((ele, index) => (

                        <TableRow key={index}>
                            <TableCell >{index + 1}</TableCell>
                            <TableCell > {ele.name}</TableCell>
                            <TableCell > {ele.mofa_fee}</TableCell>
                            <TableCell > {ele.visa_fee}</TableCell>
                            <TableCell > {ele.visa_validity_single_entry}</TableCell>
                            <TableCell > {ele.visa_validity_multiple_entry}</TableCell>
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

export default VisaTypeTable

