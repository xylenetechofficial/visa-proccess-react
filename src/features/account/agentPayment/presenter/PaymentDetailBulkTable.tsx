import { BulkPaymentInterface } from '../type'
import { GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
import { useState, useEffect } from "react";
import { UnlabeledInput } from '../../../../componenets/Input';
import { convertDateFormat, convertDateFormatWithTime } from '../../../../utils/function';
import { Heading1, Heading3 } from '../../../../componenets/CoustomHeader';

const VisaProfessionTable = (props: {
    visaProfessionList: BulkPaymentInterface[],
    returnPaymentDetail: any[]
    onChange: (ele: BulkPaymentInterface[]) => void,

}) => {

    const [onChange, setonChange] = useState<string>("")

    const onClickAddNewRow = () => {
        const arr: any = [...props.visaProfessionList, {
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
            <h4><b>Received Payment</b></h4>

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



                </TableBody3>
            </Table3>

            <br /><br />
            <h4><b>Return Payment</b></h4>
            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        <TableCell3 width={5}  > Sr No.</TableCell3>
                        <TableCell3 width={5}> Amount</TableCell3>
                        <TableCell3 width={5}> Date</TableCell3>
                        <TableCell3 width={5}> description</TableCell3>

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.returnPaymentDetail.map((ele, index) => (
                        <TableRow3 key={index}>
                            <TableCell3 >{index + 1}</TableCell3>
                            <TableCell3 >{ele.amount}</TableCell3>
                            <TableCell3 >{convertDateFormat(ele.date)}</TableCell3>
                            <TableCell3 >{ele.description}</TableCell3>
                        </TableRow3>
                    ))}
                </TableBody3>
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