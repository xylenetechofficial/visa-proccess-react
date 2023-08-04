import { VisaProfesionInterface } from '../type'
import { GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';
import { useState, useEffect } from "react";
import { UnlabeledInput } from '../../../../componenets/Input';
import { convertDateFormat } from '../../../../utils/function';

const Main = (props: {
    paymentDetail: any[],
    onChange: (ele: VisaProfesionInterface[]) => void,

}) => {

    const [onChange, setonChange] = useState<string>("")

    const onClickAddNewRow = () => {
        const arr: any = [...props.paymentDetail, {
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
        const arr = props.paymentDetail.filter((e, i) => i !== index)
        props.onChange(arr)
        setonChange(Date.now().toString())

    }

    function onUpdateRow(index: number, rowData: VisaProfesionInterface) {
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

            <Table  >
                <TableHead >
                    <TableHeadRow  >
                        <TableHeadCell >Sr No.</TableHeadCell>
                        <TableHeadCell >Amount </TableHeadCell>
                        <TableHeadCell >Date</TableHeadCell>
                        <TableHeadCell >Advance  </TableHeadCell>
                        <TableHeadCell >By</TableHeadCell>

                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.paymentDetail && props.paymentDetail.map((ele, index) => (
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

export default Main

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
        console.log("rerender", props.data);   // Only Dev
        props.onUpdate(props.index, localRowData!)
    }, [localRowData])


    return (
        <TableRow key={props.index}>
            <TableCell >{props.index + 1}</TableCell>
            <TableCell >
                {props.data.amount}
            </TableCell>

            <TableCell >
                {convertDateFormat(props?.data?.created_at)}
            </TableCell>
            <TableCell >
                {props.data.advance}
            </TableCell>
            <TableCell >
                {props.data.payment_entry_by}
            </TableCell>


        </TableRow>
    )
}