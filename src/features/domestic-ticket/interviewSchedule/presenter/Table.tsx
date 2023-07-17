import { InterviewScheduleInterface } from '../type'
import { Paper, } from '@mui/material';
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';
import { CompanyInterface } from '../../../masters/company/type';
import { SectorInterface } from '../../../masters/sector/type';
import { InterviewSchedulePeriodInterface } from '../../interviewSchedulePeriod/type';
import { convertDateFormat } from '../../../../utils/function';






const InterviewScheduleTable = (props:
    {
        companyList: CompanyInterface[],
        interviewScheduleList: InterviewScheduleInterface[],
        onClickEdit: any, onClickDelete: any,
        sectorList: SectorInterface[],
        InterviewSchedulePeriodList: InterviewSchedulePeriodInterface[],
    }) => {
    return (
        <div className='overflow-auto' 
        // style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >

            <Table >
                <TableHead >
                    <TableHeadRow>
                        <TableHeadCell > Sr No.</TableHeadCell>
                        <TableHeadCell> Comapany</TableHeadCell>
                        <TableHeadCell> Date</TableHeadCell>
                        <TableHeadCell> Sector</TableHeadCell>
                        <TableHeadCell> Staff</TableHeadCell>
                        <TableHeadCell > Action</TableHeadCell>

                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.interviewScheduleList.map((ele, index) => {

                        let companyName = "";
                        for (let i = 0; i < props.InterviewSchedulePeriodList.length; i++) {
                            const interviewSchedulePeriod = props.InterviewSchedulePeriodList[i];

                            for (let j = 0; j < props.companyList.length; j++) {
                                const company = props.companyList[j];
                                if (interviewSchedulePeriod.company == company.id) {
                                    companyName = company.name
                                    break
                                }
                            }
                            if (companyName != "")
                                break

                        }

                        return (

                            <TableRow key={index}>
                                <TableCell >{index + 1}</TableCell>
                                <TableCell > {companyName}</TableCell>
                                <TableCell>{convertDateFormat(ele.date)}</TableCell>
                                <TableCell>{props.sectorList.map((e) => e.id == ele.sectorId ? e.name : "")}</TableCell>
                                <TableCell>{ele.staff}</TableCell>
                                <TableCell >

                                    <BlueButton text={" EDIT"} onClick={() => {
                                        props.onClickEdit(ele)
                                    }} />

                                    <RedButton text={"DELETE"} onClick={() => {
                                        props.onClickDelete(ele)
                                    }} />

                                </TableCell>
                            </TableRow>
                        )
                    })}



                </TableBody>
            </Table>

        </div>
    )
}

export default InterviewScheduleTable

