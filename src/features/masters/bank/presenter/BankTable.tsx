import { BankInterface } from '../type'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { VisaAuthorisationInterface } from '../../visaAuthorization/type';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';





const BankTable = (props: { bankList: BankInterface[], onClickEdit: any, onClickDelete: any, visaAuthorisationList: VisaAuthorisationInterface[] }) => {
    return (
        <div className='overflow-auto' style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Table>
                <TableHead>
                    <TableHeadRow >
                        <TableHeadCell  > Sr No.</TableHeadCell>
                        <TableHeadCell > Name</TableHeadCell>
                        <TableHeadCell > Visa Authorisation</TableHeadCell>
                        <TableHeadCell > Action</TableHeadCell>

                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.bankList.map((ele, index) => (

                        <TableRow key={index}>
                            <TableCell >{index + 1}</TableCell>
                            <TableCell > {ele.name}</TableCell>
                            <TableCell > {
                                props.visaAuthorisationList?.map((e) => e.id == ele.visaAuthorisation ? e.name : "")
                            }</TableCell>
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

export default BankTable

