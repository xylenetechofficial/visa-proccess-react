import { JobOrderInterface } from '../type'
import { RedButton } from '../../../../componenets/CustomButton';
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';

import { useState, useEffect } from "react";
import { InterviewSectorInterface } from '../../../masters/interviewSector/type';
import { readInterviewSectorList } from '../../../masters/interviewSector/repository';
import { ActualProfessionInterface } from '../../Extra/type';
import { readConsolidateChargeList } from '../../../masters/consolidateCharge/repository';
import { ConsolidateChargeInterface } from '../../../masters/consolidateCharge/type';
import { deleteVacancy } from '../repository';



const FinalActualProfessionTable = (props: {
    jobOrder: JobOrderInterface,
    actualProfessionList: ActualProfessionInterface[]
    list?: ActualProfessionInterface[],
    onChange: (ele: ActualProfessionInterface[]) => void,
    isChanged: string
}) => {
    const [actualProfessionList, setActualProfesionList] = useState<ActualProfessionInterface[]>([])
    const [onChange, setonChange] = useState<string>("")

    const onClickRemoveRow = (index: number) => {
        if (!confirm("Are You Sure?"))
            return

        deleteVacancy(actualProfessionList[index].id ?? 0)
        setActualProfesionList(actualProfessionList.filter((e, i) => i !== index))
        setonChange(Date.now().toString())

    }

    const [interviewSectorList, setInterviewSectorList] = useState<InterviewSectorInterface[]>([]);
    const fetchInterviewSectorList = async () => {
        const data = await readInterviewSectorList();
        setInterviewSectorList(data)
    }

    useEffect(() => {
        fetchInterviewSectorList()
        console.log("====");   // Only Dev
    }, [])

    useEffect(() => {
        setActualProfesionList(props.actualProfessionList ?? [])
    }, [props.isChanged])

    useEffect(() => {
        props.onChange(actualProfessionList)
    }, [actualProfessionList])
    return (
        <div className='overflow-auto' style={{ justifyContent: "center" }}>

            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        <TableHeadCell3  > Sr No.</TableHeadCell3>
                        <TableHeadCell3 > Actual Profession</TableHeadCell3>
                        <TableHeadCell3 >Sector</TableHeadCell3>
                        <TableHeadCell3 >Sector Charge</TableHeadCell3>
                        <TableHeadCell3 > Quantity</TableHeadCell3>
                        <TableHeadCell3 >Service Charges</TableHeadCell3>
                        <TableHeadCell3 >  Action</TableHeadCell3>

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {actualProfessionList && actualProfessionList.map((ele, index) => (
                        <TableData
                            data={ele}
                            index={index}
                            onChange={onChange}
                            onClickRemove={onClickRemoveRow}
                            interViewSectorList={interviewSectorList} />

                    ))}
                </TableBody3>
            </Table3>

        </div>
    )
}

export default FinalActualProfessionTable

const TableData = (
    props: {
        index: number;
        data: ActualProfessionInterface;
        // onClickEdit: any;
        onClickRemove: (index: number) => void;
        onChange: string;
        interViewSectorList: InterviewSectorInterface[]

    }

) => {

    const [localRowData, setLocalRowData] = useState<ActualProfessionInterface>({
        jobOrder_id: 0,
        actual_profession: "",
        quantity: 0,
        sector_charge: 0,
        seletion_target_quantity: 0,
        min_salary: 0,
        max_salary: 0,
        job_description: "",
        master_service_charges: 0,
        differed_service_charges: 0,
    })

    const [consolidateChargeList, setConsolidateChargeList] = useState<ConsolidateChargeInterface[]>([])
    const fetchConsolidateCharges = async () => {
        const data = await readConsolidateChargeList();
        setConsolidateChargeList(data);
    }

    useEffect(() => {
        fetchConsolidateCharges();
    }, [])

    useEffect(() => {
        setLocalRowData(props.data)
    }, [props.onChange])

    return (
        <TableRow3 key={props.index}>
            <TableCell3 >{props.index + 1}</TableCell3>
            <TableCell3 >
                {localRowData.actual_profession}
            </TableCell3>
            <TableCell3 >
                {props.interViewSectorList.map(e => localRowData.sector == e.id ? e.name : "")}
            </TableCell3>
            <TableCell3 >
                {localRowData.sector_charge}
            </TableCell3>
            <TableCell3 >
                {localRowData.quantity}
            </TableCell3>
            <TableCell3 >
                {localRowData.service_charges}
            </TableCell3>
            <TableCell3>
                <RedButton text={" Remove"} onClick={() => {
                    props.onClickRemove(props.index)
                }} />
            </TableCell3>
        </TableRow3>
    )
}