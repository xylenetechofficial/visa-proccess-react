import { JobOrderInterface } from '../type'
import { BlueButton, GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
// import { SectorInterface } from '../../../masters/sector/type';
// import { CompanyInterface } from '../../../masters/company/type';
// import { CountryInterface } from '../../../masters/country/type';
// import { AirTicketList, BDEList, OPManagerList, currencyList, rcList, recruitManagerList, rsList } from '../../db/user';

import { useState, useEffect } from "react";
import { UnlabeledInput } from '../../../../componenets/Input';
import { CustomCheckBox, CustomSingleCheckBox } from '../../../../componenets/Checkbox';
import { CustomSelectComponent, selectOptionConveter } from '../../../../componenets/SelectBox';
import { CustomRadioButton } from '../../../../componenets/RadioButton';
import { ActualProfessionInterface } from '../../Extra/type';
import { AirTicketList, currencyList } from '../../../db';


const ActualProfessionTable = (props: {
    jobOrder: JobOrderInterface,
    list?: ActualProfessionInterface[],
    onChange: (ele: ActualProfessionInterface[]) => void,

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
        setActualProfesionList(props.jobOrder.acttualProfesionList ?? [])
    }, [])

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
                        <TableHeadCell3 > SERVICE CHARGES</TableHeadCell3>
                        <TableHeadCell3 > PARTIAL CHARGES</TableHeadCell3>
                        <TableHeadCell3 > AGENT COMMISSION</TableHeadCell3>
                        <TableHeadCell3 > AIR TICKET</TableHeadCell3>
                        <TableHeadCell3 > IS INVOICE	 			</TableHeadCell3>
                        <TableHeadCell3 > INVOICE SERVICE CHARGES</TableHeadCell3>
                        <TableHeadCell3 > INVOICE TICKET CHARGES</TableHeadCell3>
                        <TableHeadCell3 > INVOICE SERVICE CHARGES CURRENCY</TableHeadCell3>

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
                            <div style={{ width: "111px" }}>
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
        console.log("rerender");   // Only Dev
        props.onUpdate(props.index, localRowData!)
    }, [localRowData])

    console.log(localRowData)
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
                    type='number'
                    value={localRowData.quantity}
                    onchange={(value) => setLocalRowData({ ...localRowData, quantity: parseInt(value) })}
                />
            </TableCell3>
            <TableCell3 >
                {/* {props.data.service_charges} */}
                <UnlabeledInput
                    type='number'
                    value={localRowData.service_charges}
                    onchange={(value) => setLocalRowData({ ...localRowData, service_charges: parseInt(value) })}
                />
            </TableCell3>
            <TableCell3 >
                {/* {props.data.partial_charges} */}
                <UnlabeledInput
                    type='number'
                    value={localRowData.partial_charges}
                    onchange={(value) => setLocalRowData({ ...localRowData, partial_charges: parseInt(value) })}
                />
            </TableCell3>
            <TableCell3 >
                {/* {props.data.agent_commission} */}
                <UnlabeledInput
                    type='number'
                    value={localRowData.agent_commission}
                    onchange={(value) => setLocalRowData({ ...localRowData, agent_commission: parseInt(value) })}
                />
            </TableCell3>
            <TableCell3 >
                {/* {props.data.air_ticket} */}

                <CustomRadioButton
                    // inlined={true}
                    option={AirTicketList}
                    value={localRowData.air_ticket}
                    onChange={(value) => setLocalRowData({ ...localRowData, air_ticket: value })}
                />
            </TableCell3>
            <TableCell3 >
                <CustomSingleCheckBox
                    value={localRowData.is_invoice==1?true:false}
                    onChange={(value:boolean) => setLocalRowData({ ...localRowData, is_invoice:value?1:0 })} />
            </TableCell3>
            <TableCell3 >
                {/* {props.data.invoice_service_charges} */}
                <UnlabeledInput
                    type='number'
                    value={localRowData.invoice_service_charges}
                    onchange={(value) => setLocalRowData({ ...localRowData, invoice_service_charges: parseInt(value) })}
                />
            </TableCell3>
            <TableCell3 >
                {/* {props.data.invoice_ticket_charges} */}
                <UnlabeledInput
                    type='number'
                    value={localRowData.invoice_ticket_charges}
                    onchange={(value) => setLocalRowData({ ...localRowData, invoice_ticket_charges: parseInt(value) })}
                />
            </TableCell3>

            <TableCell3 >
                {/* {props.data.invoice_service_charges_currency} */}

                <div style={{ width: "138px" }}>
                    <CustomSelectComponent
                        value={localRowData.invoice_service_charges_currency}
                        onChange={(value: any) => setLocalRowData({ ...localRowData, invoice_service_charges_currency: parseInt(value) })}
                        options={selectOptionConveter({ options: currencyList, options_struct: { name: "name", value: "id" } })}
                    />
                </div>
            </TableCell3>
            <TableCell3 >


                <RedButton text={" Remove"} onClick={() => {
                    props.onClickRemove(props.index)
                }} />






            </TableCell3>
        </TableRow3>
    )
}