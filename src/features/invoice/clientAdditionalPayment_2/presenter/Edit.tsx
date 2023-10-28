import { useEffect, useState } from "react"
import { FullScreenModal } from "../../../../componenets/Modal"
import { DateInput, UnlabeledInput } from "../../../../componenets/Input"
import { ClientAdditionalPaymentInterface, PaymentInterface } from "../type"
// import { updateBulkClientPaymentList, updateClientSinglePayment } from "../repository"
// import { BlueButton, GreenButton, RedButton } from "../../../../componenets/CustomButton"
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"
import { readPaymentList, updatePaymentList } from "../repository"
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
    clientAdditionalPayment: ClientAdditionalPaymentInterface
    onClose: () => void
    fetchClientAdditionalInvoiceList: () => void
}) {

    const [paymentList, setPaymentList] = useState<PaymentInterface[]>([])

    const HEADERLIST = [
        "SR NO.",
        "AMOUNT (INR)",
        "DATE",
        "DESCRIPTION",
        "CREATED AT",
    ];

    async function onClickUpdate() {
        const data = await updatePaymentList(paymentList)
        if (data)
            fetchPaymentList()
    }

    async function fetchPaymentList() {
        const data = await readPaymentList(props.clientAdditionalPayment.invoice_number)
        setPaymentList(data)
    }

    function updateListData(data: PaymentInterface) {
        const new_list: PaymentInterface[] = []

        for (let index = 0; index < paymentList.length; index++) {
            if (paymentList[index].id == data.id)
                new_list.push(data)
            else
                new_list.push(paymentList[index])
        }

        setPaymentList(new_list)
    }

    useEffect(() => {
        fetchPaymentList()
    }, [])

    return (

        <FullScreenModal
            buttonName="submit"
            handleClick={onClickUpdate}
            title="Client Additional Payment Edit"
            onClose={props.onClose}
        >

            <div className="overflow-auto">
                <UpdateContentBox>
                    <SubHeading1 text="Company :" />
                    {props.clientAdditionalPayment.company_name}
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text="INVOICE NUMBER :" />
                    {props.clientAdditionalPayment.invoice_number}
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text="INVOICE DATE :" />
                    {convertDateFormat(props.clientAdditionalPayment.invoice_date)}
                </UpdateContentBox>


                <Table3>
                    <TableHead3>
                        <TableHeadRow3>
                            {HEADERLIST.map((item) => (<TableHeadCell3  > {item}</TableHeadCell3>))}
                        </TableHeadRow3>
                    </TableHead3>
                    <TableBody3>
                        {paymentList.map((item, index) => (

                            <TableRow3 key={index}>
                                <TableCell3>{index + 1}</TableCell3>
                                <TableCell3>
                                    <UnlabeledInput
                                        
type="number"
                    
                                        value={item.amount}
                                        onchange={(value) => {
                                            updateListData({
                                                ...item, amount: parseInt(value)
                                            })
                                        }}
                                    />
                                </TableCell3>
                                <TableCell3>
                                    <UnlabeledInput
                                        type="date"
                                        value={item.date}
                                        onchange={(value) => {
                                            updateListData({
                                                ...item, date: value
                                            })
                                        }}
                                    />
                                </TableCell3>
                                <TableCell3>
                                    <UnlabeledInput
                                        value={item.description}
                                        onchange={(value) => {
                                            updateListData({
                                                ...item, description: value
                                            })
                                        }}
                                    />
                                </TableCell3>
                                <TableCell3>{convertDateFormat(item.created_at ?? '')}</TableCell3>
                            </TableRow3>
                        ))}
                    </TableBody3>
                </Table3>
            </div>
        </FullScreenModal>
    )
}