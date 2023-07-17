import { MofaPaymentInterface } from '../type'
import { Table2, TableBody2, TableCell2, TableHead2, TableHeadCell2, TableHeadRow2, TableRow2 } from '../../../../componenets/Table';




export default function MofaPaymentTable(props: {
    mofaPaymentList: MofaPaymentInterface[],
}) {
    return (
        <div className='overflow-auto'>
            <Table2  >
                <TableHead2 >
                    <TableHeadRow2  >
                        <TableHeadCell2 > Sr No.</TableHeadCell2>
                        <TableHeadCell2 > Visa Authorisation</TableHeadCell2>
                        <TableHeadCell2 > Total Mofa Payment</TableHeadCell2>
                        <TableHeadCell2 > Used Mofa Payment</TableHeadCell2>
                        <TableHeadCell2 > Balance Mofa Payment</TableHeadCell2>

                    </TableHeadRow2>
                </TableHead2>
                <TableBody2>
                    {props.mofaPaymentList.map((ele, index) => (
                        <TableRow2 key={index}>
                            <TableCell2 >{index + 1}</TableCell2>
                            {/* <TableCell2 > {props.companyList.map((company) => company.id == ele.company_id ? company.name : "")}</TableCell2> */}
                            <TableCell2 > {ele.name}</TableCell2>
                            <TableCell2 > {ele.total_mofa_payment}</TableCell2>
                            <TableCell2 > {ele.used_mofa_payment}</TableCell2>
                            <TableCell2 > {ele.balance_mofa_payment}</TableCell2>
                        </TableRow2>
                    ))}



                </TableBody2>
            </Table2>

        </div>
    )
}


