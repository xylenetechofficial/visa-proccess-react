import { useEffect, useState } from "react"
import { FullScreenModal } from "../../../../componenets/Modal"
// import { DateInput, UnlabeledInput } from "../../../../componenets/Input"
import { ClientPaymentInterface, CandidateInterface } from "../type"
// import { GreenButton, RedButton } from "../../../../componenets/CustomButton"
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell2, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"
import { readCandidateList } from "../repository"
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
    const [paymentList, setCandidateList] = useState<CandidateInterface[]>([])

    const HEADERLIST = [
        "SR NO.",
        "Name",
        "Passport No",
        "Visa Profession",
        "Actual Visa Profession",
        "Other Charges",
        "Service Charges",
        "Ticket Charges",
        "Total Charge",
    ];

    async function fetchCandidateList() {
        const data = await readCandidateList(props.ClientPayment.invoice_number)
        setCandidateList(data)
    }
    useEffect(() => {
        fetchCandidateList()
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
                            {HEADERLIST.map((item) => (<TableHeadCell2  > {item}</TableHeadCell2>))}
                        </TableHeadRow3>
                    </TableHead3>
                    <TableBody3>
                        {paymentList.map((item, index) => (

                            <TableRow3 key={index}>
                                <TableCell3>{index + 1}</TableCell3>
                                <TableCell3>{item.name}</TableCell3>
                                <TableCell3>{item.passport_no}</TableCell3>
                                <TableCell3>{item.visa_profession}</TableCell3>
                                <TableCell3>{item.actual_visa_profession}</TableCell3>
                                <TableCell3>{item.other_charges}</TableCell3>
                                <TableCell3>{item.service_charges}</TableCell3>
                                <TableCell3>{item.ticket_charges}</TableCell3>
                                <TableCell3>{item.total_charge}</TableCell3>
                            </TableRow3>
                        ))}
                    </TableBody3>
                </Table3>
            </div>
        </FullScreenModal>
    )
}