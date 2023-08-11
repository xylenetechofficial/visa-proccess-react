import { JobOrderInterface } from '../type'
// import { BlueButton, GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table3, TableBody3,  TableCell3, TableHead3,  TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
// import { SectorInterface } from '../../../masters/sector/type';
// import { CompanyInterface } from '../../../masters/company/type';
// import { CountryInterface } from '../../../masters/country/type';
// import { AirTicketList, BDEList, OPManagerList, currencyList, rcList, recruitManagerList, rsList } from '../../db/user';

import { useState, useEffect } from "react";
import { UnlabeledInput } from '../../../../componenets/Input';
import { CustomCheckBox, CustomSingleCheckBox } from '../../../../componenets/Checkbox';
import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from '../../../../componenets/SelectBox';
import { CustomRadioButton } from '../../../../componenets/RadioButton';
// import { readSectorList } from '../../../masters/sector/repository';
import { InterviewSectorInterface } from '../../../masters/interviewSector/type';
// import { readInterviewModeList } from '../../../masters/interviewMode/repository';
// import { InterviewModeInterface } from '../../../masters/interviewMode/type';
import { readInterviewSectorList } from '../../../masters/interviewSector/repository';
import { ActualProfessionInterface } from '../../Extra/type';
import { AirTicketList, currencyList } from '../../../db';
import { readConsolidateChargeList } from '../../../masters/consolidateCharge/repository';
import { ConsolidateChargeInterface } from '../../../masters/consolidateCharge/type';
import MultiSelectCheckbox from '../../../../componenets/CustomComponents';
import { cal_consolidate_charge } from '../../Extra/function';


const FinalActualProfessionTable = (props: {
    // interViewSectorList: InterviewSectorInterface[]
    jobOrder: JobOrderInterface,
    actualProfessionList: ActualProfessionInterface[]
    list?: ActualProfessionInterface[],
    onChange: (ele: ActualProfessionInterface[]) => void,
    isChanged: string
}) => {
    // const [actualProfessionList, setActualProfesionList] = useState<ActualProfessionInterface[]>([])
    const [onChange, setonChange] = useState<string>("")

    // const onClickAddNewRow = () => {
    //     setActualProfesionList([...actualProfessionList, {
    //         jobOrder_id: props.jobOrder.id ?? 0,
    //         actual_profession: "",
    //         quantity: 0,
    //         seletion_target_quantity: 0,
    //         min_salary: 0,
    //         max_salary: 0,
    //         job_description: "",
    //         master_service_charges: 0,
    //         differed_service_charges: 0,
    //     }])
    // }

    const onClickRemoveRow = (index: number) => {
        if (!confirm("Are You Sure?"))
            return

        props.onChange(props.actualProfessionList.filter((e, i) => i !== index))
        setonChange(Date.now().toString())

    }

    function onUpdateRow(index: number, rowData: ActualProfessionInterface) {
        const nextData = props.actualProfessionList.map((e, i) => {
            if (i === index) {
                // Increment the clicked counter
                return rowData;
            } else {
                // The rest haven't changed
                return e;
            }
        });
        props.onChange(nextData)
    }
    const [interviewSectorList, setInterviewSectorList] = useState<InterviewSectorInterface[]>([]);
    const fetchInterviewSectorList = async () => {
        const data = await readInterviewSectorList();
        setInterviewSectorList(data)
    }

    useEffect(() => {
        fetchInterviewSectorList()
    }, [])

    // useEffect(() => {
    //     setActualProfesionList(props.actualProfessionList ?? [])
    // }, [props.isChanged])

    // useEffect(() => {
    //     props.onChange(actualProfessionList)
    //     // console.log(actualProfessionList)
    // }, [actualProfessionList])
    return (
        <div className='overflow-auto' style={{ justifyContent: "center" }}>

            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        <TableHeadCell3  > Sr No.</TableHeadCell3>
                        <TableHeadCell3 > Actual Profession</TableHeadCell3>
                        {/* <TableHeadCell3 > Grade</TableHeadCell3> */}
                        <TableHeadCell3 >Sector</TableHeadCell3>
                        <TableHeadCell3 >Sector Charge</TableHeadCell3>
                        <TableHeadCell3 > Quantity</TableHeadCell3>
                        {/* <TableHeadCell3 >Selection Target QTY</TableHeadCell3> */}
                        {/* <TableHeadCell3 > Min. Salary</TableHeadCell3> */}
                        {/* <TableHeadCell3 >Max. Salary</TableHeadCell3> */}
                        {/* <TableHeadCell3 > Job Description</TableHeadCell3> */}

                        {/* <TableHeadCell3 > Master Service Charges</TableHeadCell3> */}
                        {/* <TableHeadCell3 > Differed Service Charges</TableHeadCell3> */}
                        <TableHeadCell3 >Service Charges</TableHeadCell3>
                        <TableHeadCell3 > Partial Charges</TableHeadCell3>
                        <TableHeadCell3 >Consoldilate Charges</TableHeadCell3>
                        <TableHeadCell3 > Agent Commission</TableHeadCell3>
                        <TableHeadCell3 > Air Ticket</TableHeadCell3>
                        <TableHeadCell3 > Is Invoice</TableHeadCell3>
                        <TableHeadCell3 > Invoice Service Charges</TableHeadCell3>
                        <TableHeadCell3 > Invoice Ticket Charges</TableHeadCell3>
                        <TableHeadCell3 > Invoice Service Charges Currency</TableHeadCell3>
                        {/* <TableHeadCell3 >  Action</TableHeadCell3> */}

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.actualProfessionList && props.actualProfessionList.map((ele, index) => (
                        <TableData
                            data={ele}
                            index={index}
                            onChange={onChange}
                            onClickRemove={onClickRemoveRow}
                            onUpdate={onUpdateRow}
                            interViewSectorList={interviewSectorList} />

                    ))}


                    {/* <TableRow3>
                        <TableCell>
                            <div style={{ width: "111px", margin: "10px 0px" }}>
                                <GreenButton text='Add Row' onClick={onClickAddNewRow} />
                            </div>
                        </TableCell>
                    </TableRow3> */}
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
        onUpdate: (index: number, rowData: ActualProfessionInterface) => void;
        onClickRemove: (index: number) => void;
        onChange: string;
        interViewSectorList: InterviewSectorInterface[]

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
    useEffect(() => {
        // console.log("rerender",localRowData); 
        // console.log(props.interViewSectorList)  // Only Dev
        props.onUpdate(props.index, localRowData!)
    }, [localRowData])

    // console.log(localRowData)
    return (
        <TableRow3 key={props.index}>
            <TableCell3 >{props.index + 1}</TableCell3>
            <TableCell3 >
            {localRowData.actual_profession}
                {/* <UnlabeledInput
                    value={localRowData.actual_profession}
                    onchange={(value) => setLocalRowData({ ...localRowData, actual_profession: value })}
                /> */}
            </TableCell3>
            {/* <TableCell3 >
                <UnlabeledInput
                    value={localRowData.grade}
                    type='number'
                    onchange={(value) => setLocalRowData({ ...localRowData, grade: parseInt(value) })}
                />
            </TableCell3> */}
            <TableCell3 >
            {props.interViewSectorList.map(e => localRowData.sector == e.id ? e.name : "")}

                {/* <CustomSelectComponentUnlabeled
                    options={selectOptionConveter({ options: props.interViewSectorList, options_struct: { name: "name", value: "id" } })}
                    value={localRowData.sector}
                    onChange={(value) => setLocalRowData({ ...localRowData, sector: parseInt(value) })}
                /> */}
            </TableCell3>
            <TableCell3 >
                <UnlabeledInput
                    value={localRowData.sector_charge}
                    type='number'
                    onchange={(value) => setLocalRowData({ ...localRowData, quantity: parseInt(value) })}
                />
            </TableCell3>
            <TableCell3 >
                <UnlabeledInput
                    value={localRowData.quantity}
                    type='number'
                    onchange={(value) => setLocalRowData({ ...localRowData, quantity: parseInt(value) })}
                />
            </TableCell3>
            {/* <TableCell3 >
            <UnlabeledInput
                value={localRowData.seletion_target_quantity}
                type='number'
                onchange={(value) => setLocalRowData({ ...localRowData, seletion_target_quantity: parseInt(value) })}
            />
        </TableCell3> */}

            {/* <TableCell3 >
            <UnlabeledInput
                type='number'
                value={localRowData.min_salary}
                onchange={(value) => setLocalRowData({ ...localRowData, min_salary: parseInt(value) })}
            />
        </TableCell3> */}
            {/* <TableCell3 >
            <UnlabeledInput
                type='number'
                value={localRowData.max_salary}
                onchange={(value) => setLocalRowData({ ...localRowData, max_salary: parseInt(value) })}
            />
        </TableCell3> */}
            {/* <TableCell3 >
            <UnlabeledInput

                value={localRowData.job_description}
                onchange={(value) => setLocalRowData({ ...localRowData, job_description: value })}
            />
        </TableCell3> */}
            {/* <TableCell3 >
            <UnlabeledInput
                type='number'
                value={localRowData.master_service_charges}
                onchange={(value) => setLocalRowData({ ...localRowData, master_service_charges: parseInt(value) })}
            />
        </TableCell3> */}
            {/* <TableCell3 >
            <UnlabeledInput
                type='number'
                value={localRowData.differed_service_charges}
                onchange={(value) => setLocalRowData({ ...localRowData, differed_service_charges: parseInt(value) })}
            />
        </TableCell3> */}
            <TableCell3 >
                <UnlabeledInput
                    type='number'
                    value={localRowData.service_charges}
                    onchange={(value) => setLocalRowData({ ...localRowData, service_charges: parseInt(value) })}
                />
            </TableCell3>
            <TableCell3 >
                <UnlabeledInput
                    type='number'
                    value={localRowData.partial_charges}
                    onchange={(value) => setLocalRowData({ ...localRowData, partial_charges: parseInt(value) })}
                />
            </TableCell3>
            <TableCell3 >
                <MultiSelectCheckbox
                    onChange={(value) => {
                        // const nameList = [];
                        // const valueList = [];
                        // let sum = 0;
                        // console.log(value)
                        // if (consolidateChargeList)
                        // for (let i = 0; i < consolidateChargeList.length; i++) {
                        //     if (value.includes(consolidateChargeList[i].id?.toString())) {
                        //         nameList.push(consolidateChargeList[i].name)
                        //         sum += consolidateChargeList[i].charge
                        //     }
                        // }
                        const { name_list, total } = cal_consolidate_charge(consolidateChargeList, value)

                        setLocalRowData({
                            ...localRowData,
                            consolidate_charges_id: value,
                            consodilate_charges: total.toString(),
                            consodilate_charges_name: name_list
                        })
                    }}
                    value={localRowData.consolidate_charges_id ?? []}
                    option={selectOptionConveter({ options: consolidateChargeList ?? [], options_struct: { name: "name", value: "id" } })}
                />
                {localRowData.consodilate_charges}
            </TableCell3>

            <TableCell3 >
                <UnlabeledInput
                    type='number'
                    value={localRowData.agent_commission}
                    onchange={(value) => setLocalRowData({ ...localRowData, agent_commission: parseInt(value) })}
                />
            </TableCell3>
            <TableCell3 >
                {/* {props.data.invoice_ticket_charges} */}
                {/* <UnlabeledInput

                value={localRowData.air_ticket}
                onchange={(value) => setLocalRowData({ ...localRowData, air_ticket: value })}
            /> */}
                <CustomRadioButton
                    // inlined={true}
                    option={AirTicketList}
                    value={localRowData.air_ticket}
                    onChange={(value) => setLocalRowData({ ...localRowData, air_ticket: value })}
                />
            </TableCell3>
            <TableCell3 >
                <CustomSingleCheckBox
                    value={localRowData.is_invoice == 1 ? true : false}
                    onChange={(value: boolean) => setLocalRowData({ ...localRowData, is_invoice: value ? 1 : 0 })} />
                {/* <CustomCheckBox
                value={localRowData.is_invoice}
                option={[{ name: "", value: 1 }]}
                onChange={(value) => setLocalRowData({ ...localRowData, is_invoice: parseInt(value) })} /> */}
            </TableCell3>
            <TableCell3 >
                <UnlabeledInput
                    type='number'
                    value={localRowData.invoice_service_charges}
                    onchange={(value) => setLocalRowData({ ...localRowData, invoice_service_charges: parseInt(value) })}
                />
            </TableCell3>
            <TableCell3 >
                <UnlabeledInput
                    type='number'
                    value={localRowData.invoice_ticket_charges}
                    onchange={(value) => setLocalRowData({ ...localRowData, invoice_ticket_charges: parseInt(value) })}
                />
            </TableCell3>

            <TableCell3 >


                <CustomSelectComponentUnlabeled
                    value={localRowData.invoice_service_charges_currency}
                    onChange={(value: any) => setLocalRowData({ ...localRowData, invoice_service_charges_currency: parseInt(value) })}
                    options={selectOptionConveter({ options: currencyList, options_struct: { name: "name", value: "id" } })}
                />

            </TableCell3>
            {/* <TableCell3 > */}
            {/* <RedButton text={" Remove"} onClick={() => {
                props.onClickRemove(props.index)
            }} /> */}
            {/* </TableCell3> */}
        </TableRow3>
    )
}