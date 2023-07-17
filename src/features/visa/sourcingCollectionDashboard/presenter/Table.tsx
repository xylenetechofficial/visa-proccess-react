import { Src_Col_Dash_JobOrderInterface } from '../type'
import { BlueButton, GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table3, TableBody, TableBody3, TableCell, TableCell3, TableHead, TableHead3, TableHeadCell, TableHeadCell3, TableHeadRow, TableHeadRow3, TableRow, TableRow3 } from '../../../../componenets/Table';
import { SectorInterface } from '../../../masters/sector/type';
import { CompanyInterface } from '../../../masters/company/type';
import { CountryInterface } from '../../../masters/country/type';




const Table = (props: {
    jobOrderList: Src_Col_Dash_JobOrderInterface[],
    onClickAdd: (ele: Src_Col_Dash_JobOrderInterface) => void,
    onClickEdit: (ele: Src_Col_Dash_JobOrderInterface) => void,

}) => {

    return (
        <div className='overflow-auto'>


            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        <TableHeadCell3  > Sr No.</TableHeadCell3>
                        <TableHeadCell3 > JOB ORDER NO.</TableHeadCell3>
                        <TableHeadCell3 >COMPANY</TableHeadCell3>
                        <TableHeadCell3 > DIVISION</TableHeadCell3>
                        <TableHeadCell3 > QTY AS PER JOB</TableHeadCell3>
                        <TableHeadCell3 > SELECTION QTY</TableHeadCell3>
                        <TableHeadCell3 > DOCS COLLECTED QTY</TableHeadCell3>
                        <TableHeadCell3 > DOCS BALANCE FOR COLLECTION</TableHeadCell3>
                        <TableHeadCell3 > BACKED OUT / UNFIT</TableHeadCell3>
                        <TableHeadCell3 > Action</TableHeadCell3>

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.jobOrderList.map((ele, index) => (

                        <TableRow3 key={index}>
                            <TableCell3 >{index + 1}</TableCell3>
                            <TableCell3 > {ele.jobOrderNo}</TableCell3>
                            <TableCell3 > {ele.company}</TableCell3>
                            <TableCell3 > {ele.division}</TableCell3>

                            <TableCell3 > {ele.quantityAsPerJob}</TableCell3>
                            <TableCell3 > {ele.selectionQty}</TableCell3>
                            <TableCell3 > {ele.docsCollectedQty}</TableCell3>
                            <TableCell3 > {ele.docsBalanceForCollections}</TableCell3>
                            <TableCell3 > {ele.BackedOutUnfit}</TableCell3>
                            <TableCell3 >

                                <GreenButton text={"Add"}  onClick={() => {
                                    props.onClickAdd(ele)
                                }} />

                                <BlueButton text={" Edit"} onClick={() => {
                                    props.onClickEdit(ele)
                                }} />



                            </TableCell3>
                        </TableRow3>
                    ))}



                </TableBody3>
            </Table3>

        </div>
    )
}

export default Table

