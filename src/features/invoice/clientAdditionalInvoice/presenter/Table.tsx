import { ClientAdditionalInvoiceInterface } from "../type";
import { Table2, TableBody2, TableCell, TableHead2, TableHeadCell2, TableHeadRow, TableRow } from "../../../../componenets/Table";
import { BlueButton } from "../../../../componenets/CustomButton";


const Main = (props: {
    onClickEdit:(value: ClientAdditionalInvoiceInterface)=>void;
    immigrationData: ClientAdditionalInvoiceInterface[],
    onChange: (value: ClientAdditionalInvoiceInterface[]) => void
    setModal:any,
}) => {
    const HEADERLIST = ["SR NO.", "COMPANY NAME", "INVOICE NUMBER", "INVOICE DATE", "INVOICE AMOUNT","ACTION"];
    function onUpdateRow(index: number, rowData: ClientAdditionalInvoiceInterface) {
        const nextData = props.immigrationData.map((e, i) => {
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
                    {props.immigrationData?.map((item, index) => (

                        <TableRow key={index}>
                            <TableCell>{index +1}</TableCell>
                            <TableCell>{item?.company_name}</TableCell>
                            <TableCell>{item?.invoice_number}</TableCell>
                            <TableCell>{item?.invoice_date}</TableCell>
                            <TableCell>{item?.invoice_amount}</TableCell>
                            <TableCell><BlueButton text="Edit" onClick={()=>{props.setModal("edit"); props.onClickEdit(item)}}/></TableCell>
                            
                        </TableRow>
                    ))}



                </TableBody2>
            </Table2>
        </div>
    );
};

export default Main;
