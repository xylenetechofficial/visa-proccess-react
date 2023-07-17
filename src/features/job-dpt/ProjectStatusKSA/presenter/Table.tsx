import { ProjectStatusKSAInterface } from '../type'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadCell2, TableHeadRow, TableHeadRow2, TableRow, TableRow2 } from '../../../../componenets/Table';

import { CustomSingleCheckBox } from '../../../../componenets/Checkbox';
import { CustomSelectComponent } from '../../../../componenets/SelectBox';
import { useEffect, useState } from 'react';





const ProjectStatusKSATable = (props: {
    projectStatusKSAList: ProjectStatusKSAInterface[],
    handleksaStatus: (index: number, value: string) => void
    handleCheckBox: (index: number, value: boolean) => void
}) => {
    const [projectStatusKSAList, setProjectStatusKSAList] = useState<ProjectStatusKSAInterface[]>([])

    useEffect(()=>{
        setProjectStatusKSAList(props.projectStatusKSAList)
    },[props.projectStatusKSAList])
    return (
        <div className='overflow-auto'>
            <Table  >
                <TableHead >
                    <TableHeadRow  >
                        <TableHeadCell  > Sr No.</TableHeadCell>
                        <TableHeadCell > Sector</TableHeadCell>
                        <TableHeadCell > Job Order Number</TableHeadCell>
                        <TableHeadCell > Company</TableHeadCell>
                        <TableHeadCell > Division</TableHeadCell>
                        <TableHeadCell > OPS Manager</TableHeadCell>
                        <TableHeadCell > RC NAME</TableHeadCell>
                        <TableHeadCell > JO QTY</TableHeadCell>
                        <TableHeadCell > VISA QTY</TableHeadCell>
                        <TableHeadCell > SELECTION	</TableHeadCell>
                        <TableHeadCell > MOFA DONE</TableHeadCell>
                        <TableHeadCell > UNDER MOFA</TableHeadCell>
                        <TableHeadCell > UNDER SUBMISSION</TableHeadCell>
                        <TableHeadCell > VISA RCVD</TableHeadCell>
                        <TableHeadCell > EMIGRATION CLEARED</TableHeadCell>
                        <TableHeadCell > VISA CANCELLED</TableHeadCell>
                        <TableHeadCell > BALANCE VISA</TableHeadCell>
                        <TableHeadCell > DEPLOYED</TableHeadCell>
                        <TableHeadCell > BAL TO DEPLOY</TableHeadCell>
                        <TableHeadCell > VACANCY UNFILLED</TableHeadCell>
                        <TableHeadCell > NO OF DAYS LAPSE</TableHeadCell>
                        <TableHeadCell > JOB ORDER STATUS</TableHeadCell>
                        <TableHeadCell >SELECT</TableHeadCell>
                        <TableHeadCell > PROJECT STATUS</TableHeadCell>


                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {projectStatusKSAList.map((ele, index) => (

                        <TableRow key={index}>
                            <TableCell >{index + 1}</TableCell>
                            <TableCell > {ele.sector_name}</TableCell>
                            <TableCell > {ele.job_order_no}</TableCell>
                            <TableCell > {ele.company_name}</TableCell>
                            <TableCell > {ele.division}</TableCell>
                            <TableCell > {ele.om_name}</TableCell>
                            <TableCell > {ele.rc_name}</TableCell>
                            <TableCell > {ele.job_quantity}</TableCell>
                            <TableCell > {ele.visa_quantity}</TableCell>
                            <TableCell > {ele.selection}</TableCell>
                            <TableCell > {ele.mofa_done}</TableCell>
                            <TableCell > {ele.under_mofa}</TableCell>
                            <TableCell > {ele.under_submission}</TableCell>
                            <TableCell > {ele.visa_received}</TableCell>
                            <TableCell > {ele.emigration_cleared}</TableCell>
                            <TableCell > {ele.visa_cancelled}</TableCell>
                            <TableCell > {ele.balance_visa}</TableCell>
                            <TableCell > {ele.deployed}</TableCell>
                            <TableCell > {ele.balance_to_deploy}</TableCell>
                            <TableCell > {ele.vacancy_unfilled}</TableCell>
                            <TableCell > {ele.no_of_days_lapse}</TableCell>
                            <TableCell > {ele.status}</TableCell>

                            <TableCell >
                                <CustomSingleCheckBox
                                    onChange={(value: boolean) => {
                                        // console.log(ele);
                                        props.handleCheckBox(index, value)
                                    }}
                                    value={ele.isChecked ?? false}
                                />
                            </TableCell>
                            <TableCell >
                                <CustomSelectComponent
                                    onChange={(value) => {
                                        props.handleksaStatus(index, value)
                                    }}
                                    options={
                                        [
                                            { name: "Under Process", value: "Under Process" },
                                            { name: "Closed ", value: "Closed" },
                                            { name: "On Hold", value: "On Hold" },
                                            { name: "Cancelled", value: "Cancelled" },
                                            { name: "Only visa balance", value: "Only visa balance" },
                                            { name: "Processed In old module", value: "Processed In old module" },
                                        ]}
                                    value={ele.ksa_status}
                                />
                            </TableCell>


                        </TableRow>
                    ))}



                </TableBody>
            </Table>



        </div>
    )
}

export default ProjectStatusKSATable

