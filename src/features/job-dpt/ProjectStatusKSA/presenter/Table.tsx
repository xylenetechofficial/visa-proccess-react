import { ProjectStatusKSAInterface } from '../type'
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3,  TableHeadRow3, TableRow3 } from '../../../../componenets/Table';

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
            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        <TableHeadCell3  > Sr No.</TableHeadCell3>
                        <TableHeadCell3 > Sector</TableHeadCell3>
                        <TableHeadCell3 > Job Order Number</TableHeadCell3>
                        <TableHeadCell3 > Company</TableHeadCell3>
                        <TableHeadCell3 > Division</TableHeadCell3>
                        <TableHeadCell3 > OPS Manager</TableHeadCell3>
                        <TableHeadCell3 > RC NAME</TableHeadCell3>
                        <TableHeadCell3 > JO QTY</TableHeadCell3>
                        <TableHeadCell3 > VISA QTY</TableHeadCell3>
                        <TableHeadCell3 > SELECTION	</TableHeadCell3>
                        <TableHeadCell3 > MOFA DONE</TableHeadCell3>
                        <TableHeadCell3 > UNDER MOFA</TableHeadCell3>
                        <TableHeadCell3 > UNDER SUBMISSION</TableHeadCell3>
                        <TableHeadCell3 > VISA RCVD</TableHeadCell3>
                        <TableHeadCell3 > EMIGRATION CLEARED</TableHeadCell3>
                        <TableHeadCell3 > VISA CANCELLED</TableHeadCell3>
                        <TableHeadCell3 > BALANCE VISA</TableHeadCell3>
                        <TableHeadCell3 > DEPLOYED</TableHeadCell3>
                        <TableHeadCell3 > BAL TO DEPLOY</TableHeadCell3>
                        <TableHeadCell3 > VACANCY UNFILLED</TableHeadCell3>
                        <TableHeadCell3 > NO OF DAYS LAPSE</TableHeadCell3>
                        <TableHeadCell3 > JOB ORDER STATUS</TableHeadCell3>
                        <TableHeadCell3 >SELECT</TableHeadCell3>
                        <TableHeadCell3 > PROJECT STATUS</TableHeadCell3>


                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {projectStatusKSAList.map((ele, index) => (

                        <TableRow3 key={index}>
                            <TableCell3 >{index + 1}</TableCell3>
                            <TableCell3 > {ele.sector_name}</TableCell3>
                            <TableCell3 > {ele.job_order_no}</TableCell3>
                            <TableCell3 > {ele.company_name}</TableCell3>
                            <TableCell3 > {ele.division}</TableCell3>
                            <TableCell3 > {ele.om_name}</TableCell3>
                            <TableCell3 > {ele.rc_name}</TableCell3>
                            <TableCell3 > {ele.job_quantity}</TableCell3>
                            <TableCell3 > {ele.visa_quantity}</TableCell3>
                            <TableCell3 > {ele.selection}</TableCell3>
                            <TableCell3 > {ele.mofa_done}</TableCell3>
                            <TableCell3 > {ele.under_mofa}</TableCell3>
                            <TableCell3 > {ele.under_submission}</TableCell3>
                            <TableCell3 > {ele.visa_received}</TableCell3>
                            <TableCell3 > {ele.emigration_cleared}</TableCell3>
                            <TableCell3 > {ele.visa_cancelled}</TableCell3>
                            <TableCell3 > {ele.balance_visa}</TableCell3>
                            <TableCell3 > {ele.deployed}</TableCell3>
                            <TableCell3 > {ele.balance_to_deploy}</TableCell3>
                            <TableCell3 > {ele.vacancy_unfilled}</TableCell3>
                            <TableCell3 > {ele.no_of_days_lapse}</TableCell3>
                            <TableCell3 > {ele.status}</TableCell3>

                            <TableCell3 >
                                <CustomSingleCheckBox
                                    onChange={(value: boolean) => {
                                        // console.log(ele);
                                        props.handleCheckBox(index, value)
                                    }}
                                    value={ele.isChecked ?? false}
                                />
                            </TableCell3>
                            <TableCell3 >
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
                            </TableCell3>


                        </TableRow3>
                    ))}



                </TableBody3>
            </Table3>



        </div>
    )
}

export default ProjectStatusKSATable

