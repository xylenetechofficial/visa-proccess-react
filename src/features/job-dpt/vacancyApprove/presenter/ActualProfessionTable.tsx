import { JobOrderInterface } from '../type'
import { BlueButton, GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
// import { SectorInterface } from '../../../masters/sector/type';
// import { CompanyInterface } from '../../../masters/company/type';
// import { CountryInterface } from '../../../masters/country/type';
// import { BDEList, OPManagerList, currencyList, rcList, recruitManagerList, rsList } from '../../db/user';

import { useState, useEffect } from "react";
import { UnlabeledInput } from '../../../../componenets/Input';
// import { CustomCheckBox } from '../../../../componenets/Checkbox';
// import { CustomSelectComponent, selectOptionConveter } from '../../../../componenets/SelectBox';
// import { CustomRadioButton } from '../../../../componenets/RadioButton';
import { ActualProfessionInterface } from '../../Extra/type';


const ActualProfessionTable = (props: {
    jobOrder: JobOrderInterface,
    actualProfessionList:ActualProfessionInterface[]
    list?: ActualProfessionInterface[],
    onChange: (ele: ActualProfessionInterface[]) => void,
    isChanged:string
}) => {
    const [actualProfessionList, setActualProfesionList] = useState<ActualProfessionInterface[]>([])
    const [onChange, setonChange] = useState<string>("")

    const onClickAddNewRow = () => {
        setActualProfesionList([...actualProfessionList, {
            jobOrder_id: props.jobOrder.id ?? 0,
            actual_profession: "",
            quantity: 0,
            seletion_target_quantity: 0,
            min_salary: 0,
            max_salary: 0,
            job_description: "",
            master_service_charges: 0,
            differed_service_charges: 0,
        }])
    }

    const onClickRemoveRow = (index: number) => {
        if (!confirm("Are You Sure?"))
            return

        setActualProfesionList(actualProfessionList.filter((e, i) => i !== index))
        setonChange(Date.now().toString())

    }

    function onUpdateRow(index: number, rowData: ActualProfessionInterface) {
        const nextData = actualProfessionList.map((e, i) => {
            if (i === index) {
                // Increment the clicked counter
                return rowData;
            } else {
                // The rest haven't changed
                return e;
            }
        });
        setActualProfesionList(nextData)
    }
    useEffect(() => {
        setActualProfesionList(props.actualProfessionList ?? [])
    }, [props.isChanged])

    useEffect(() => {
        props.onChange(actualProfessionList)
        // console.log(actualProfessionList)
    }, [actualProfessionList])
    return (
        <div className='overflow-auto' style={{ justifyContent: "center" }}>

            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        <TableHeadCell3  > Sr No.</TableHeadCell3>
                        <TableHeadCell3 > Actual Profession</TableHeadCell3>
                        <TableHeadCell3 > QUANTITY</TableHeadCell3>
                        <TableHeadCell3 >Selection Target QTY</TableHeadCell3>
                        <TableHeadCell3 > Min. Salary</TableHeadCell3>
                        <TableHeadCell3 > Max. Salary</TableHeadCell3>
                        <TableHeadCell3 > Job Description</TableHeadCell3>
                        <TableHeadCell3 > Master Service Charges	 			</TableHeadCell3>
                        <TableHeadCell3 > Differed Service Charges</TableHeadCell3>


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
                            onUpdate={onUpdateRow}
                        />

                    ))}


                    <TableRow3>
                        <TableCell3>
                        <div style={{ width: "111px", margin:"10px 0px" }}>
                                <GreenButton text='Add Row' onClick={onClickAddNewRow} />
                            </div>
                        </TableCell3>
                    </TableRow3>
                </TableBody3>
            </Table3>

        </div>
    )
}

export default ActualProfessionTable

const TableData = (
    props: {
        index: number;
        data: ActualProfessionInterface;
        // onClickEdit: any;
        onUpdate: (index: number, rowData: ActualProfessionInterface) => void;
        onClickRemove: (index: number) => void;
        onChange: string
    }

) => {

    const [localRowData, setLocalRowData] = useState<ActualProfessionInterface>({
        jobOrder_id: 0,
        actual_profession: "",
        quantity: 0,
        seletion_target_quantity: 0,
        min_salary: 0,
        max_salary: 0,
        job_description: "",
        master_service_charges: 0,
        differed_service_charges: 0,
    })
    useEffect(() => {
        setLocalRowData(props.data)
    }, [props.onChange])
    useEffect(() => {
        // console.log("rerender");   // Only Dev
        props.onUpdate(props.index, localRowData!)
    }, [localRowData])

    // console.log(localRowData)
    return (
        <TableRow3 key={props.index}>
            <TableCell3 >{props.index + 1}</TableCell3>
            <TableCell3 >
                <UnlabeledInput
                    value={localRowData.actual_profession}
                    onchange={(value) => setLocalRowData({ ...localRowData, actual_profession: value })}
                />
            </TableCell3>
            <TableCell3 >
                {/* {props.data.quantity} */}
                <UnlabeledInput
                    value={localRowData.quantity}
                    type='number'
                    onchange={(value) => setLocalRowData({ ...localRowData, quantity: parseInt(value) })}
                />
            </TableCell3>
            <TableCell3 >
                {/* {props.data.service_charges} */}
                <UnlabeledInput
                    value={localRowData.seletion_target_quantity}
                    type='number'
                    onchange={(value) => setLocalRowData({ ...localRowData, seletion_target_quantity: parseInt(value) })}
                />
            </TableCell3>
            <TableCell3 >
                {/* {props.data.partial_charges} */}
                <UnlabeledInput
                    value={localRowData.min_salary}
                    type='number'
                    onchange={(value) => setLocalRowData({ ...localRowData, min_salary: parseInt(value) })}
                />
            </TableCell3>
            <TableCell3 >
                {/* {props.data.agent_commission} */}
                <UnlabeledInput
                    value={localRowData.max_salary}
                    type='number'
                    onchange={(value) => setLocalRowData({ ...localRowData, max_salary: parseInt(value) })}
                />
            </TableCell3>

            <TableCell3 >
                {/* {props.data.invoice_service_charges} */}
                <UnlabeledInput
                    value={localRowData.job_description}
                    onchange={(value) => setLocalRowData({ ...localRowData, job_description: value })}
                />
            </TableCell3>
            <TableCell3 >
                {/* {props.data.invoice_ticket_charges} */}
                <UnlabeledInput
                    type='number'
                    value={localRowData.master_service_charges}
                    onchange={(value) => setLocalRowData({ ...localRowData, master_service_charges: parseInt(value) })}
                />
            </TableCell3>
            <TableCell3 >
                {/* {props.data.invoice_ticket_charges} */}
                <UnlabeledInput
                    type='number'
                    value={localRowData.differed_service_charges}
                    onchange={(value) => setLocalRowData({ ...localRowData, differed_service_charges: parseInt(value) })}
                />
            </TableCell3>

            <TableCell3 >


                <RedButton text={" Remove"} onClick={() => {
                    props.onClickRemove(props.index)
                }} />






            </TableCell3>
        </TableRow3>
    )
}