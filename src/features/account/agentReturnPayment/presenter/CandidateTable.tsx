import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
import { useState, useEffect } from "react";
import { DateInput, UnlabeledInput } from '../../../../componenets/Input';
import { CustomSelectComponentUnlabeled } from '../../../../componenets/SelectBox';
import { ReligionList } from '../../../db';
import { CustomSingleCheckBox } from '../../../../componenets/Checkbox';
import { BulkPaymentInterface } from '../type';

const initValue: BulkPaymentInterface = {
    id: 0,
    agent_name: "",
    agent_id: 0,
    amount: 0,
    available_amount: 0,
    description: "",

}

const CandidateTable = (props: {
    bulkPaymentList: BulkPaymentInterface[],
    onChange: (ele: BulkPaymentInterface[]) => void,

}) => {

    const [onChange, setonChange] = useState<string>("")


    function onUpdateRow(index: number, rowData: BulkPaymentInterface) {
        const nextData: BulkPaymentInterface[] = props.bulkPaymentList.map((e, i) => {
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
    const tableHeadings = [
        ["SR. NO."],
        ["Select"],
        ["Total Amount"],
        ["Available Amount"],
        ["AGENT"],
        ["Description"],
    ];
    const tableHeadingsComponent = tableHeadings.map((e) => (
        <TableHeadCell3  > {e[0]}</TableHeadCell3>
    ));
    return (
        <div className='overflow-auto' style={{ justifyContent: "center" }}>

            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        {tableHeadingsComponent}
                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.bulkPaymentList && props.bulkPaymentList.map((ele, index) => (
                        <TableData
                            data={ele}
                            index={index}
                            onChange={onChange}
                            onUpdate={onUpdateRow}
                        />

                    ))}
                </TableBody3>
            </Table3>

        </div>
    )
}

export default CandidateTable

const TableData = (
    props: {
        index: number;
        data: BulkPaymentInterface;
        onUpdate: (index: number, rowData: BulkPaymentInterface) => void;
        onChange: string
    }

) => {

    const [localRowData, setLocalRowData] = useState<BulkPaymentInterface>(initValue)
    useEffect(() => {
        setLocalRowData(props.data)
    }, [props.onChange])

    useEffect(() => {
        console.log("rerender");   // Only Dev
        props.onUpdate(props.index, localRowData!)
    }, [localRowData])

    // console.log(localRowData)
    return (
        <TableRow3 key={props.index}>
            <TableCell3 >{props.index + 1}</TableCell3>
            <TableCell3 >
                <CustomSingleCheckBox
                    onChange={(value) => setLocalRowData({ ...localRowData, checked: value })}
                    value={localRowData.checked ? true : false}
                />
            </TableCell3>

            <TableCell3 >
                {localRowData.amount}
            </TableCell3>

            <TableCell3 >
                {localRowData.available_amount}
            </TableCell3>

            <TableCell3 >
                {localRowData.agent_name}
            </TableCell3>

            <TableCell3 >
                {localRowData.description}
            </TableCell3>
        </TableRow3>
    )
}

