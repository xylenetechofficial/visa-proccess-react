import { MofaPaymentInterface } from '../type'
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';




export default function MofaPaymentTable(props: {
    mofaPaymentList: MofaPaymentInterface[],
  
}) {
    return (
        <div className='overflow-auto'>
            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        <TableHeadCell3 > Sr No.</TableHeadCell3>
                        <TableHeadCell3 > Visa Authorisation</TableHeadCell3>
                        <TableHeadCell3 > Total Mofa Payment</TableHeadCell3>
                        <TableHeadCell3 > Used Mofa Payment</TableHeadCell3>
                        <TableHeadCell3 > Balance Mofa Payment</TableHeadCell3>

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.mofaPaymentList.map((ele, index) => (
                        <TableRow3 key={index}>
                            <TableCell3 >{index + 1}</TableCell3>
                            {/* <TableCell3 > {props.companyList.map((company) => company.id == ele.company_id ? company.name : "")}</TableCell3> */}
                            <TableCell3 > {ele.name}</TableCell3>
                            <TableCell3 > {ele.total_mofa_payment}</TableCell3>
                            <TableCell3 > {ele.used_mofa_payment}</TableCell3>
                            <TableCell3 > {ele.balance_mofa_payment}</TableCell3>
                        </TableRow3>
                    ))}



                </TableBody3>
            </Table3>

        </div>
    )
}


