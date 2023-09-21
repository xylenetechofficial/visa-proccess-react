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
import { ConsolidateChargeInterface } from '../../../masters/consolidateCharge/type';
import jsConvert from 'js-convert-case';
import MultiSelectCheckbox from '../../../../componenets/CustomComponents';
import { cal_consolidate_charge } from '../../Extra/function';


const ActualProfessionTable = (props: {
    consolidateChargeList: ConsolidateChargeInterface[],
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
                        {[
                            'Sr No.',
                            'Actual Profession',
                            'QUANTITY',
                            'SERVICE CHARGES',
                            'PARTIAL CHARGES',
                            'AGENT COMMISSION',
                            'Consolidate Charge',
                            'AIR TICKET',
                            'IS INVOICE',
                            'INVOICE SERVICE CHARGES',
                            'INVOICE TICKET CHARGES',
                            'INVOICE SERVICE CHARGES CURRENCY',
                            'Action',
                        ].map((e) => {
                            return <TableHeadCell3 >{jsConvert.toHeaderCase(e)}</TableHeadCell3>
                        })}

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {actualProfessionList && actualProfessionList.map((ele, index) => (
                        <TableData
                            consolidateChargeList={props.consolidateChargeList}
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
        index: number,
        data: ActualProfessionInterface;
        consolidateChargeList: ConsolidateChargeInterface[],
        // onClickEdit: any;
        onUpdate: (index: number, rowData: ActualProfessionInterface) => void;
        onClickRemove: (index: number) => void;
        onChange: string
    }

) => {

    const [localRowData, setLocalRowData] = useState<ActualProfessionInterface>({
        id: 0,
  jobOrder_id: 0,
  actual_profession: '',
  grade: 0,
  sector: 0,
  sector_charge: 0,
  quantity: 0,
  seletion_target_quantity: 0,
  min_salary: 0,
  max_salary: 0,
  job_description: '',
  master_service_charges: 0,
  differed_service_charges: 0,
  service_charges: 0,
  partial_charges: 0,
  consodilate_charges: '',
  consodilate_charges_name: [],
  consodilate_charges_value: [],
  consolidate_charges_id: [],
  agent_commission: 0,
  air_ticket: '',
  is_invoice: 0,
  invoice_service_charges: 0,
  invoice_ticket_charges: 0,
  invoice_service_charges_currency: 0,

  is_master_sector: 0,
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
                <MultiSelectCheckbox
                    onChange={(value) => {
                        console.log('##########   CONSOLIDATE   ##########');   // Only Dev
                        console.log("value: ",value);   // Only Dev
                        
                        const { name_list, total } = cal_consolidate_charge(props.consolidateChargeList, value)
                        console.log("name_list: ",name_list);   // Only Dev
                        console.log("total: ",total);   // Only Dev
                        
                        setLocalRowData({
                            ...localRowData,
                            consolidate_charges_id: value,
                            consodilate_charges: total.toString(),
                            consodilate_charges_name: name_list
                        })
                        // console.log(total);   // Only Dev
                    }}
                    value={localRowData.consolidate_charges_id}
                    option={selectOptionConveter({ options: props.consolidateChargeList ?? [], options_struct: { name: "name", value: "id" } })}
                />
                ={localRowData.consodilate_charges}=
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
                    value={localRowData.is_invoice == 1 ? true : false}
                    onChange={(value: boolean) => setLocalRowData({ ...localRowData, is_invoice: value ? 1 : 0 })} />
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