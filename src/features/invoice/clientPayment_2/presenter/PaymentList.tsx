import { useEffect, useState } from "react"
import { FullScreenModal } from "../../../../componenets/Modal"
// import { DateInput, UnlabeledInput } from "../../../../componenets/Input"
import { ClientPaymentInterface, PaymentInterface } from "../type"
// import { GreenButton, RedButton } from "../../../../componenets/CustomButton"
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"
import { deletePayment, readPaymentList } from "../repository"
import { convertDateFormat } from "../../../../utils/function"
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader"



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
};

export default function Main(props: {
    ClientPayment: ClientPaymentInterface
    onClose: () => void
    fetchClientPaymentList: () => void

}) {
    const [paymentList, setPaymentList] = useState<PaymentInterface[]>([])

    const HEADERLIST = [
        "SR NO.",
        "AMOUNT (INR)",
        "DATE",
        "DESCRIPTION",
        "CREATED AT",
    ];

    async function fetchPaymentList() {
        const data = await readPaymentList(props.ClientPayment.invoice_number)
        setPaymentList(data)
    }
    useEffect(() => {
        fetchPaymentList()
    }, [])

    return (
        <FullScreenModal
            // buttonName=""
            handleClick={() => ''}
            title="Client  Payments"
            onClose={props.onClose}
        >

            <div className="overflow-auto">
                <UpdateContentBox>
                    <SubHeading1 text="Company :" />
                    {props.ClientPayment.company_name}
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text="INVOICE NUMBER :" />
                    {props.ClientPayment.invoice_number}
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text="INVOICE DATE :" />
                    {convertDateFormat(props.ClientPayment.invoice_date)}
                </UpdateContentBox>


                <Table3>
                    <TableHead3>
                        <TableHeadRow3>
                            {HEADERLIST.map((item) => (<TableHeadCell3 > {item}</TableHeadCell3>))}
                        </TableHeadRow3>
                    </TableHead3>
                    <TableBody3>
                        {paymentList.map((item, index) => (

                            <TableRow3 key={index}>
                                <TableCell3>{index + 1}</TableCell3>
                                <TableCell3>{item.amount}</TableCell3>
                                <TableCell3>{convertDateFormat(item.date)}</TableCell3>
                                <TableCell3>{item.description}</TableCell3>
                                <TableCell3>{convertDateFormat(item.created_at ?? '')}</TableCell3>

                            </TableRow3>
                        ))}
                    </TableBody3>
                </Table3>
            </div>
        </FullScreenModal>
    )
}