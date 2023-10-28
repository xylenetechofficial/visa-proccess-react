import { InterviewScheduleInterface } from '../type'
import { Paper, } from '@mui/material';
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
import { CompanyInterface } from '../../../masters/company/type';
import { SectorInterface } from '../../../masters/sector/type';
import { InterviewSchedulePeriodInterface } from '../../interviewSchedulePeriod/type';
import { convertDateFormat } from '../../../../utils/function';






const InterviewScheduleTable = (props:
    {
        snoBase:number,
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

            <Table3 >
                <TableHead3 >
                    <TableHeadRow3>
                        <TableHeadCell3 > Sr No.</TableHeadCell3>
                        <TableHeadCell3> Comapany</TableHeadCell3>
                        <TableHeadCell3> Date</TableHeadCell3>
                        <TableHeadCell3> Sector</TableHeadCell3>
                        <TableHeadCell3> Staff</TableHeadCell3>
                        <TableHeadCell3 > Action</TableHeadCell3>

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
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

                            <TableRow3 key={index}>
                               <TableCell3 >{index + props.snoBase+1}</TableCell3>
                                <TableCell3 > {companyName}</TableCell3>
                                <TableCell3>{convertDateFormat(ele.date)}</TableCell3>
                                <TableCell3>{props.sectorList.map((e) => e.id == ele.sectorId ? e.name : "")}</TableCell3>
                                <TableCell3>{ele.staff}</TableCell3>
                                <TableCell3 >

                                    <BlueButton text={" EDIT"} onClick={() => {
                                        props.onClickEdit(ele)
                                    }} />

                                    <RedButton text={"DELETE"} onClick={() => {
                                        props.onClickDelete(ele)
                                    }} />

                                </TableCell3>
                            </TableRow3>
                        )
                    })}



                </TableBody3>
            </Table3>

        </div>
    )
}

export default InterviewScheduleTable

