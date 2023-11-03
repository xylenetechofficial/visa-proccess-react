import {
    AdvancePaymentInterface,
    CandidateAdvancePaymentInterface,
} from "../type";
import { GreenButton, RedButton } from "../../../../componenets/CustomButton";
import {
    Table3,
    TableBody3,
    TableCell3,
    TableHead3,
    TableHeadCell3,
    TableHeadRow3,
    TableRow3,
} from "../../../../componenets/Table";
import { useState, useEffect } from "react";
import { UnlabeledInput } from "../../../../componenets/Input";
import { readAdvancePaymentList } from "../repository";
import { convertDateFormat } from "../../../../utils/function";
import Pagination from "../../../../componenets/Pagination";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";

const CandidateAdvancePaymentTable = (props: {
    CandidateAdvancePaymentList: CandidateAdvancePaymentInterface[];
    onChange: (ele: CandidateAdvancePaymentInterface[]) => void;
    onchangeCheck: string;
}) => {

    const [additionalData, setAdditionalData] = useState<AdditionalDataInterface>(
        {
            pagination: {
                page: 1,
                page_count: 1,
                item_count: 0,
                sno_base: 0,
            },
        }
    );
    const [onChange, setonChange] = useState<string>("");
    const [advancePaymentList, setAdvancePaymentList] =
        useState<AdvancePaymentInterface[]>();
    const onClickAddNewRow = () => {
        const arr: any = [
            ...props.CandidateAdvancePaymentList,
            {
                visa_profession: "",
                arabic_visa_category: "",
                block_visa_id: 0,
                quantity: 0,
            },
        ];
        props.onChange(arr);
    };

    const onClickRemoveRow = (index: number) => {
        if (!confirm("Are You Sure?")) return;
        const arr = props.CandidateAdvancePaymentList.filter((e, i) => i !== index);
        props.onChange(arr);
        setonChange(Date.now().toString());
    };

    function onUpdateRow(
        index: number,
        rowData: CandidateAdvancePaymentInterface
    ) {
        const nextData = props.CandidateAdvancePaymentList.map((e, i) => {
            if (i === index) {
                // Increment the clicked counter
                return rowData;
            } else {
                // The rest haven't changed
                return e;
            }
        });
        props.onChange(nextData);
    }
    const fetchAdvancePaymentList = async (page?: number) => {
        const data = await readAdvancePaymentList({
            page: page ?? additionalData.pagination.page,
            status: "yes",
        });
        console.log(data, "jj");
        if (data) {
            setAdvancePaymentList(data);
        }
        // setAgentPaymentList(data);
        setAdditionalData(await PaginationManager.getData());
    };

    useEffect(() => {
        fetchAdvancePaymentList(additionalData.pagination.page,);
    }, [props.onchangeCheck]);

    return (
        <div className="overflow-auto" style={{ justifyContent: "center" }}>
            <Table3>
                <TableHead3>
                    <TableHeadRow3>
                        <TableHeadCell3> Sr No.</TableHeadCell3>
                        <TableHeadCell3> Name</TableHeadCell3>
                        <TableHeadCell3> PASSPORT NO. </TableHeadCell3>
                        <TableHeadCell3> ADVANCE AMOUNT</TableHeadCell3>
                        <TableHeadCell3> RECIEVED DATE</TableHeadCell3>
                        <TableHeadCell3> REMARKS</TableHeadCell3>
                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {advancePaymentList?.map((item, index) => (
                        <TableRow3 key={index}>
                            <TableCell3>{index + additionalData.pagination.sno_base + 1}</TableCell3>
                            <TableCell3>{item.name}</TableCell3>
                            <TableCell3>{item.passport_no}</TableCell3>
                            <TableCell3>{item.amount}</TableCell3>
                            <TableCell3>{convertDateFormat(item.received_date)}</TableCell3>
                            <TableCell3>{item.remarks}</TableCell3>
                        </TableRow3>
                    ))}

                    {/* <TableRow>
                        <TableCell3>
                            <div style={{ width: "111px" }}>
                                <GreenButton text='Add Row' onClick={onClickAddNewRow} />
                            </div>
                        </TableCell3>
                    </TableRow> */}
                </TableBody3>
            </Table3>
            <Pagination
                data={additionalData}
                onPageChange={(e) => {
                    console.log(e); // Only Dev
                    fetchAdvancePaymentList(e);
                }}
            />
        </div>
    );
};

export default CandidateAdvancePaymentTable;

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
//             <TableCell3 >{props.index + 1}</TableCell3>
//             <TableCell3 >
//                 <UnlabeledInput
//                     value={localRowData.visa_profession}
//                     onchange={(value) => setLocalRowData({ ...localRowData, visa_profession: value })}
//                 />
//             </TableCell3>

//             <TableCell3 >
//                 {/* {props.data.service_charges} */}
//                 <UnlabeledInput
//                     value={localRowData.arabic_visa_category}
//                     onchange={(value) => setLocalRowData({ ...localRowData, arabic_visa_category: value })}
//                 />
//             </TableCell3>
//             <TableCell3 >
//                 {/* {props.data.quantity} */}
//                 <UnlabeledInput
//                     value={localRowData.quantity}
//                     onchange={(value) => setLocalRowData({ ...localRowData, quantity: parseInt(value) })}
//                 />
//             </TableCell3>
//             <TableCell3 >

//                 <RedButton text={" Remove"} onClick={() => {
//                     props.onClickRemove(props.index)
//                 }} />

//             </TableCell3>
//         </TableRow>
//     )
// }
