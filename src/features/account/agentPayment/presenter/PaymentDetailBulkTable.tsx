import { VisaProfesionInterface } from '../type'
import {  GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, Table3, TableBody, TableCell, TableCell3, TableHead, TableHead3, TableHeadCell, TableHeadCell3, TableHeadRow, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
import { useState, useEffect } from "react";
import { UnlabeledInput } from '../../../../componenets/Input';
import { convertDateFormat, convertDateFormatWithTime } from '../../../../utils/function';

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

            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        <TableCell3 width={5}  > Sr No.</TableCell3>
                        <TableCell3 width={5}> Name</TableCell3>
                        <TableCell3 width={5}> PP No.</TableCell3>
                        <TableCell3 width={5}> Received Amount</TableCell3>
                        <TableCell3 width={5}>  Received Date</TableCell3>
                        <TableCell3 width={5}>  payment Entry By</TableCell3>
                        <TableCell3 width={5}>  payment Entry on</TableCell3>

                    </TableHeadRow3>
                </TableHead3>
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
            </Table3>

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
        <TableRow3 key={props.index}>
            <TableCell3 >{props.index + 1}</TableCell3>
            <TableCell3 >
            {props.data.name}
            </TableCell3>

            <TableCell3 >
            {props.data.passport_no}
            </TableCell3>
            <TableCell3 >
            {props.data.amount}
            </TableCell3>
            <TableCell3 >
                {convertDateFormat(props.data.created_at)}
               
            </TableCell3>
 
            <TableCell3 >
                {props.data.payment_entry_by}
              
            </TableCell3>
 
            <TableCell3 >
                {convertDateFormatWithTime(props.data.created_at)}

            </TableCell3>
        </TableRow3>
    )
}