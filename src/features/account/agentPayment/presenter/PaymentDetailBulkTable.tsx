import { VisaProfesionInterface } from '../type'
import {  GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';
import { useState, useEffect } from "react";
import { UnlabeledInput } from '../../../../componenets/Input';
import { convertDateFormat } from '../../../../utils/function';

const VisaProfessionTable = (props: {
    visaProfessionList: VisaProfesionInterface[],
    onChange: (ele: VisaProfesionInterface[]) => void,

}) => {

    const [onChange, setonChange] = useState<string>("")

    const onClickAddNewRow = () => {
        const arr :any = [...props.visaProfessionList, {
            visa_profession: "",
            arabic_visa_category: "",
            block_visa_id: 0,
            quantity: 0
        }]
        props.onChange(arr)
    }

    const onClickRemoveRow = (index: number) => {
        if (!confirm("Are You Sure?"))
            return
        const arr = props.visaProfessionList.filter((e, i) => i !== index)
        props.onChange(arr)
        setonChange(Date.now().toString())

    }

    function onUpdateRow(index: number, rowData: VisaProfesionInterface) {
        const nextData = props.visaProfessionList.map((e, i) => {
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

    return (
        <div className='overflow-auto' style={{ justifyContent: "center" }}>

            <Table  >
                <TableHead >
                    <TableHeadRow  >
                        <TableHeadCell  > Sr No.</TableHeadCell>
                        <TableHeadCell > Name</TableHeadCell>
                        <TableHeadCell > PP No.</TableHeadCell>
                        <TableHeadCell > Received Amount</TableHeadCell>
                        <TableHeadCell >  Received Date</TableHeadCell>
                        <TableHeadCell >  payment Entry By</TableHeadCell>
                        <TableHeadCell >  payment Entry on</TableHeadCell>

                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.visaProfessionList && props.visaProfessionList.map((ele, index) => (
                        <TableData
                            data={ele}
                            index={index}
                            onChange={onChange}
                            onClickRemove={onClickRemoveRow}
                            onUpdate={onUpdateRow}
                        />

                    ))}


                   
                </TableBody>
            </Table>

        </div>
    )
}

export default VisaProfessionTable

const TableData = (
    props: {
        index: number;
        data: any;
        // onClickEdit: any;
        onUpdate: (index: number, rowData: VisaProfesionInterface) => void;
        onClickRemove: (index: number) => void;
        onChange: string
    }

) => {

    const [localRowData, setLocalRowData] = useState<any>({
    // const [localRowData, setLocalRowData] = useState<VisaProfesionInterface>({
        visa_profession: "",
        arabic_visa_category: "",
        block_visa_id: 0,
        quantity: 0,

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
        <TableRow key={props.index}>
            <TableCell >{props.index + 1}</TableCell>
            <TableCell >
            {props.data.name}
            </TableCell>

            <TableCell >
            {props.data.passport_no}
            </TableCell>
            <TableCell >
            {props.data.amount}
            </TableCell>
            <TableCell >
                {convertDateFormat(props.data.created_at)}
               
            </TableCell>
 
            <TableCell >
                {props.data.payment_entry_by}
              
            </TableCell>
 
            <TableCell >
                {convertDateFormat(props.data.created_at)}

            </TableCell>
        </TableRow>
    )
}