import { AdvancePaymentInterface, CandidateAdvancePaymentInterface, VisaProfesionInterface } from '../type'
import { GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';
import { useState, useEffect } from "react";
import { UnlabeledInput } from '../../../../componenets/Input';
import { readAdvancePaymentList } from '../repository';

const CandidateAdvancePaymentTable = (props: {
    CandidateAdvancePaymentList: CandidateAdvancePaymentInterface[],
    onChange: (ele: CandidateAdvancePaymentInterface[]) => void,

}) => {

    const [onChange, setonChange] = useState<string>("")
    const [advancePaymentList, setAdvancePaymentList] = useState<AdvancePaymentInterface[]>();
    const onClickAddNewRow = () => {
        const arr: any = [...props.CandidateAdvancePaymentList, {
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
        const arr = props.CandidateAdvancePaymentList.filter((e, i) => i !== index)
        props.onChange(arr)
        setonChange(Date.now().toString())

    }

    function onUpdateRow(index: number, rowData: CandidateAdvancePaymentInterface) {
        const nextData = props.CandidateAdvancePaymentList.map((e, i) => {
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
    const fetchAdvancePaymentList = async () => {
        const data = await readAdvancePaymentList();
        console.log(data, "jj");
        if (data) {
            setAdvancePaymentList(data);
        }
        // setAgentPaymentList(data);
    };

    useEffect(() => {

        fetchAdvancePaymentList();
    }, [])

    return (
        <div className='overflow-auto' style={{ justifyContent: "center" }}>

            <Table  >
                <TableHead >
                    <TableHeadRow  >
                        <TableHeadCell  > Sr No.</TableHeadCell>
                        <TableHeadCell > Name</TableHeadCell>
                        <TableHeadCell > PASSPORT NO. </TableHeadCell>
                        <TableHeadCell > ADVANCE AMOUNT</TableHeadCell>
                        <TableHeadCell >  RECIEVED DATE</TableHeadCell>
                        <TableHeadCell >  REMARKS</TableHeadCell>

                    </TableHeadRow>
                </TableHead>
                <TableBody>

                    {advancePaymentList?.map((item, index) => (

                        <TableRow key={index}>
                            <TableCell>
                               {item.id}
                            </TableCell>
                            <TableCell>
                                {item.name}
                            </TableCell>
                            <TableCell>
                               {item.amount}
                            </TableCell>
                            <TableCell>
                               {item.passport_no}
                            </TableCell>
                            <TableCell>
                               {item.received_date}
                            </TableCell>
                            <TableCell>
                              {item.remarks}
                            </TableCell>
                        </TableRow>
                    ))}

                    {/* <TableRow>
                        <TableCell>
                            <div style={{ width: "111px" }}>
                                <GreenButton text='Add Row' onClick={onClickAddNewRow} />
                            </div>
                        </TableCell>
                    </TableRow> */}
                </TableBody>
            </Table>

        </div>
    )
}

export default CandidateAdvancePaymentTable

// const TableData = (
//     props: {
//         index: number;
//         data: CandidateAdvancePaymentInterface;
//         // onClickEdit: any;
//         onUpdate: (index: number, rowData: CandidateAdvancePaymentInterface) => void;
//         onClickRemove: (index: number) => void;
//         onChange: string
//     }

// ) => {

//     const [localRowData, setLocalRowData] = useState<any>({
//         // const [localRowData, setLocalRowData] = useState<VisaProfesionInterface>({
//         visa_profession: "",
//         arabic_visa_category: "",
//         block_visa_id: 0,
//         quantity: 0,

//     })
//     useEffect(() => {
//         setLocalRowData(props.data)
//     }, [props.onChange])
//     useEffect(() => {
//         console.log("rerender");   // Only Dev
//         props.onUpdate(props.index, localRowData!)
//     }, [localRowData])

//     console.log(localRowData)
//     return (
//         <TableRow key={props.index}>
//             <TableCell >{props.index + 1}</TableCell>
//             <TableCell >
//                 <UnlabeledInput
//                     value={localRowData.visa_profession}
//                     onchange={(value) => setLocalRowData({ ...localRowData, visa_profession: value })}
//                 />
//             </TableCell>

//             <TableCell >
//                 {/* {props.data.service_charges} */}
//                 <UnlabeledInput
//                     value={localRowData.arabic_visa_category}
//                     onchange={(value) => setLocalRowData({ ...localRowData, arabic_visa_category: value })}
//                 />
//             </TableCell>
//             <TableCell >
//                 {/* {props.data.quantity} */}
//                 <UnlabeledInput
//                     value={localRowData.quantity}
//                     onchange={(value) => setLocalRowData({ ...localRowData, quantity: parseInt(value) })}
//                 />
//             </TableCell>
//             <TableCell >


//                 <RedButton text={" Remove"} onClick={() => {
//                     props.onClickRemove(props.index)
//                 }} />



//             </TableCell>
//         </TableRow>
//     )
// }