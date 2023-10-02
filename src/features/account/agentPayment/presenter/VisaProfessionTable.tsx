import { BulkPaymentInterface } from '../type'
import {  GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
import { useState, useEffect } from "react";
import { UnlabeledInput } from '../../../../componenets/Input';

const VisaProfessionTable = (props: {
    visaProfessionList: BulkPaymentInterface[],
    onChange: (ele: BulkPaymentInterface[]) => void,

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

    function onUpdateRow(index: number, rowData: BulkPaymentInterface) {
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
                        <TableHeadCell3  > Sr No.</TableHeadCell3>
                        <TableHeadCell3 > Visa Profession</TableHeadCell3>
                        <TableHeadCell3 > Arabic Visa Category</TableHeadCell3>
                        <TableHeadCell3 > Quantity</TableHeadCell3>
                        <TableHeadCell3 >  Action</TableHeadCell3>

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.visaProfessionList && props.visaProfessionList.map((ele, index) => (
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

export default VisaProfessionTable

const TableData = (
    props: {
        index: number;
        data: BulkPaymentInterface;
        // onClickEdit: any;
        onUpdate: (index: number, rowData: BulkPaymentInterface) => void;
        onClickRemove: (index: number) => void;
        onChange: string
    }

) => {

    const [localRowData, setLocalRowData] = useState<any>({
    // const [localRowData, setLocalRowData] = useState<BulkPaymentInterface>({
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
                <UnlabeledInput
                    value={localRowData.visa_profession}
                    onchange={(value) => setLocalRowData({ ...localRowData, visa_profession: value })}
                />
            </TableCell3>

            <TableCell3 >
                {/* {props.data.service_charges} */}
                <UnlabeledInput
                    value={localRowData.arabic_visa_category}
                    onchange={(value) => setLocalRowData({ ...localRowData, arabic_visa_category: value })}
                />
            </TableCell3>
            <TableCell3 >
                {/* {props.data.quantity} */}
                <UnlabeledInput
                    value={localRowData.quantity}
                    onchange={(value) => setLocalRowData({ ...localRowData, quantity: parseInt(value) })}
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