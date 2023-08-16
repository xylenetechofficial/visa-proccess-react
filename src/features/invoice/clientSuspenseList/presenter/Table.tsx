import { ClientSuspenseInterface } from "../type";
import { Table2, TableBody2, TableCell, TableHead2, TableHeadCell2, TableHeadRow, TableRow } from "../../../../componenets/Table";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import { convertDateFormat } from "../../../../utils/function";


const RejectCancelApproveTable = (props: {
    
    clientSuspence: ClientSuspenseInterface[],
    onChange: (value: ClientSuspenseInterface[]) => void
    onClickEdit: (value: ClientSuspenseInterface) => void
    setModal:any
}) => {
    const HEADERLIST = ["SR NO.", "COMPANY NAME", "PAYMENT RECEIVED DATE", "AMOUNT RECEIVED", "PAYMENT DESCRIPTION","ACTION"];
    function onUpdateRow(index: number, rowData: ClientSuspenseInterface) {
        const nextData = props.clientSuspence.map((e, i) => {
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
        <div className="overflow-auto">

            <Table2>
                <TableHead2>
                    <TableHeadRow>
                        {HEADERLIST.map((item) => (<TableHeadCell2> {item}</TableHeadCell2>))}
                    </TableHeadRow>
                </TableHead2>
                <TableBody2>
                    {props.clientSuspence?.map((item, index) => (

                        <TableRow key={index}>
                            <TableCell>{index +1}</TableCell>
                            <TableCell>{item?.company_name}</TableCell>
                            <TableCell>{convertDateFormat(item?.payment_received_date)}</TableCell>
                            <TableCell>{item?.amount_received}</TableCell>
                            <TableCell>{item?.payment_description}</TableCell>
                            <TableCell>
                            <BlueButton text="Edit" onClick={()=>{props.setModal('edit') ,props.onClickEdit(item)}} />
                            {/* <RedButton text="Delete" /> */}
                            </TableCell>
                            
                        </TableRow>
                    ))}



                </TableBody2>
            </Table2>
        </div>
    );
};

export default RejectCancelApproveTable;
