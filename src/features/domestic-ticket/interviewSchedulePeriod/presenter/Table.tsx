import { InterviewSchedulePeriodInterface } from '../type'
import { Paper, } from '@mui/material';
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';
import { CompanyInterface } from '../../../masters/company/type';
import { convertDateFormat } from '../../../../utils/function';






const InterviewSchedulePeriodTable = (props: { companyList: CompanyInterface[], interviewSchedulePeriodList: InterviewSchedulePeriodInterface[], onClickEdit: any, onClickDelete: any }) => {
    return (
        <div className='overflow-auto' style={{ width: "100%", display: "flex", justifyContent: "center" }}>

            <Table >
                <TableHead >
                    <TableHeadRow>
                        <TableHeadCell > Sr No.</TableHeadCell>
                        <TableHeadCell> Comapany</TableHeadCell>
                        <TableHeadCell> From</TableHeadCell>
                        <TableHeadCell> To</TableHeadCell>
                        <TableHeadCell > Action</TableHeadCell>

                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.interviewSchedulePeriodList.map((ele, index) => (

                        <TableRow key={index}>
                            <TableCell >{index + 1}</TableCell>
                            <TableCell > {props.companyList.map((e) => e.id == ele.company ? e.name : "")}</TableCell>
                            <TableCell>{convertDateFormat(ele.fromDate)}</TableCell>
                            <TableCell>{convertDateFormat(ele.toDate)}</TableCell>
                            <TableCell >

                                <BlueButton text={" EDIT"} onClick={() => {
                                    props.onClickEdit(ele)
                                }} />

                                <RedButton text={"DELETE"} onClick={() => {
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

export default InterviewSchedulePeriodTable

