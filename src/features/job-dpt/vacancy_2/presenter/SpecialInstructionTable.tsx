import {  JobOrderInterface } from '../type'
import { BlueButton, GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
// import { SectorInterface } from '../../../masters/sector/type';
// import { CompanyInterface } from '../../../masters/company/type';
// import { CountryInterface } from '../../../masters/country/type';
// import { BDEList, OPManagerList, currencyList, rcList, recruitManagerList, rsList } from '../../db/user';

import { useState, useEffect } from "react";
import { UnlabeledInput } from '../../../../componenets/Input';
// import { CustomCheckBox } from '../../../../componenets/Checkbox';
// import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from '../../../../componenets/SelectBox';
// import { CustomRadioButton } from '../../../../componenets/RadioButton';
import { AgentInterface } from '../../../masters/agent/type';
import { SpecialInstructionInterface } from '../../Extra/type';
import { CustomSelectComponentUnlabeled, selectOptionConveter } from '../../../../componenets/SelectBox';


const SpecialInstructionTable = (props: {
    jobOrder: JobOrderInterface,
    specialInstructionList: SpecialInstructionInterface[]
    list?: SpecialInstructionInterface[],
    onChange: (ele: SpecialInstructionInterface[]) => void,
    agentList: AgentInterface[];
    isChanged:string

}) => {
    const [specialInstructionList, setSpecialInstructionList] = useState<SpecialInstructionInterface[]>([])
    const [onChange, setonChange] = useState<string>("")

    const onClickAddNewRow = () => {
        setSpecialInstructionList([...specialInstructionList, {
            id: 0,
            jobOrder_id: props.jobOrder.id ?? 0,
            agent_commission: 0,
            agentId: 0,


        }])
    }

    const onClickRemoveRow = (index: number) => {
        if (!confirm("Are You Sure?"))
            return

        setSpecialInstructionList(specialInstructionList.filter((e, i) => i !== index))
        setonChange(Date.now().toString())

    }

    function onUpdateRow(index: number, rowData: SpecialInstructionInterface) {
        const nextData = specialInstructionList.map((e, i) => {
            if (i === index) {
                // Increment the clicked counter
                return rowData;
            } else {
                // The rest haven't changed
                return e;
            }
        });
        setSpecialInstructionList(nextData)
    }
    useEffect(() => {
        setSpecialInstructionList(props.specialInstructionList ?? [])
    }, [props.isChanged])

    useEffect(() => {
        props.onChange(specialInstructionList)
        // console.log(specialInstructionList)
    }, [specialInstructionList])
    return (
        <div className='overflow-auto' style={{ justifyContent: "center" }}>

            <Table3>
                <TableHead3 >
                    <TableHeadRow3  >
                        <TableHeadCell3  > Sr No.</TableHeadCell3>
                        <TableHeadCell3 > Agent </TableHeadCell3>
                        <TableHeadCell3 > Agent Commission</TableHeadCell3>

                        <TableHeadCell3 >  Action</TableHeadCell3>

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {specialInstructionList && specialInstructionList.map((ele, index) => (
                        <TableData
                            agentList={props.agentList}
                            data={ele}
                            index={index}
                            onChange={onChange}
                            onClickRemove={onClickRemoveRow}
                            onUpdate={onUpdateRow}
                        />

                    ))}


                    <TableRow3>
                        <TableCell3>
                            <div style={{ width: "111px", margin: "10px 0px" }}>
                                <GreenButton text='Add Row' onClick={onClickAddNewRow} />
                            </div>
                        </TableCell3>
                    </TableRow3>
                </TableBody3>
            </Table3>

        </div>
    )
}

export default SpecialInstructionTable

const TableData = (
    props: {
        index: number;
        data: SpecialInstructionInterface;
        agentList: AgentInterface[];
        onUpdate: (index: number, rowData: SpecialInstructionInterface) => void;
        onClickRemove: (index: number) => void;
        onChange: string
    }

) => {

    const [localRowData, setLocalRowData] = useState<SpecialInstructionInterface>({
        jobOrder_id: 0,
        agent_commission: 0,
        agentId: 0
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
                <CustomSelectComponentUnlabeled
                    value={localRowData.agentId}
                    options={selectOptionConveter({ options: props.agentList, options_struct: { name: "name", value: "id" } })}
                    onChange={(value) => setLocalRowData({ ...localRowData, agentId: value })}
                />
            </TableCell3>
            <TableCell3 >

                <UnlabeledInput
                    value={localRowData.agent_commission}
                    type='number'
                    onchange={(value) => setLocalRowData({ ...localRowData, agent_commission: parseInt(value) })}
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