import { InterviewSchedulePeriodInterface } from '../type'
import { Paper, } from '@mui/material';
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
import { CompanyInterface } from '../../../masters/company/type';
import { convertDateFormat } from '../../../../utils/function';






const InterviewSchedulePeriodTable = (props: { companyList: CompanyInterface[], interviewSchedulePeriodList: InterviewSchedulePeriodInterface[], onClickEdit: any, onClickDelete: any }) => {
    return (
        <div className='overflow-auto' style={{ width: "100%", display: "flex", justifyContent: "center" }}>

            <Table3 >
                <TableHead3 >
                    <TableHeadRow3>
                        <TableHeadCell3 > Sr No.</TableHeadCell3>
                        <TableHeadCell3> Comapany</TableHeadCell3>
                        <TableHeadCell3> From</TableHeadCell3>
                        <TableHeadCell3> To</TableHeadCell3>
                        <TableHeadCell3 > Action</TableHeadCell3>

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.interviewSchedulePeriodList.map((ele, index) => (

                        <TableRow3 key={index}>
                            <TableCell3 >{index + 1}</TableCell3>
                            <TableCell3 > {props.companyList.map((e) => e.id == ele.company ? e.name : "")}</TableCell3>
                            <TableCell3>{convertDateFormat(ele.fromDate)}</TableCell3>
                            <TableCell3>{convertDateFormat(ele.toDate)}</TableCell3>
                            <TableCell3 >

                                <BlueButton text={" EDIT"} onClick={() => {
                                    props.onClickEdit(ele)
                                }} />

                                <RedButton text={"DELETE"} onClick={() => {
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

export default InterviewSchedulePeriodTable

