import { DirectInterface } from '../type'
import { GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
import { useState, useEffect } from "react";
import { UnlabeledInput } from '../../../../componenets/Input';
import { convertDateFormat, convertDateFormatWithTime } from '../../../../utils/function';

const VisaProfessionTable = (props: {
    paymentDetail: any[],
    onChange: (ele: DirectInterface[]) => void,

}) => {

    const [onChange, setonChange] = useState<string>("")
    const onClickRemoveRow = (index: number) => {
        if (!confirm("Are You Sure?"))
            return
        const arr = props.paymentDetail.filter((e, i) => i !== index)
        props.onChange(arr)
        setonChange(Date.now().toString())

    }
    function onUpdateRow(index: number, rowData: DirectInterface) {
        const nextData = props.paymentDetail.map((e, i) => {
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
            <Table3>
                <TableHead3 >
                    <TableHeadRow3  >
                        <TableHeadCell3  > Sr No.</TableHeadCell3>
                        <TableHeadCell3 > Name</TableHeadCell3>
                        <TableHeadCell3 > PP No.</TableHeadCell3>
                        <TableHeadCell3 > Received Amount</TableHeadCell3>
                        <TableHeadCell3 >  Received Date</TableHeadCell3>
                        <TableHeadCell3 >  payment Entry By</TableHeadCell3>
                        <TableHeadCell3 >  payment Entry on</TableHeadCell3>

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.paymentDetail && props.paymentDetail.map((ele, index) => (
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
        </div>
    )
}
export default VisaProfessionTable
const TableData = (
    props: {
        index: number;
        data: any;
        onUpdate: (index: number, rowData: DirectInterface) => void;
        onClickRemove: (index: number) => void;
        onChange: string
    }

) => {

    const [localRowData, setLocalRowData] = useState<any>({
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

    console.log(localRowData, props, "kkkkk")
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
                {convertDateFormatWithTime(props.data?.created_at)}
            </TableCell3>
        </TableRow3>
    )
}