import { useState } from "react"
import { RedButton } from "../../../../componenets/CustomButton"
import { FullScreenModal } from "../../../../componenets/Modal"
import { Table3, TableBody3, TableCell3, TableHeadRed, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"
import AgentPaymentModal from './AgentPaymentReceivedDetails';
import { PaymentReceivedInterface } from "../type";
import { convertDateFormat } from "../../../../utils/function";
export default function Main(props: {
  setModal: (value: string) => void,
  editPaymentList: PaymentReceivedInterface[]
}) {

  const [currentData, setCurrentData] = useState<PaymentReceivedInterface>({} as PaymentReceivedInterface)
  const [editModal, setEditModal] = useState(false)

  const onClickEdit = () => {
    setEditModal(true)
  }
  return (

    <FullScreenModal
      handleClick={() => props.setModal('')}
      title="Agent Payments Received Details"
      onClose={() => props.setModal('')}
    >
      <div className=" grid grid-cols-1 py-3  gap-2 shadow overflow-scroll">
        <Table3>
          <TableHeadRed>
            <TableHeadRow3>
              <TableHeadCell3> Sr No.</TableHeadCell3>
              <TableHeadCell3> CANDIDATE NAME</TableHeadCell3>
              <TableHeadCell3> PASSPORT NO.</TableHeadCell3>
              <TableHeadCell3> AGENT NAME</TableHeadCell3>
              <TableHeadCell3> AMOUNT RECEIVED</TableHeadCell3>
              <TableHeadCell3> DATE </TableHeadCell3>
              <TableHeadCell3> EDIT</TableHeadCell3>
            </TableHeadRow3>
          </TableHeadRed>
          <TableBody3>
            {props.editPaymentList.map((item, index) => (
              <TableRow3>
                <TableCell3>{index + 1} </TableCell3>
                <TableCell3> {item.name}</TableCell3>
                <TableCell3>{item.passport_no} </TableCell3>
                <TableCell3> {item.agent_name}</TableCell3>
                <TableCell3>{item.amount_received} </TableCell3>
                <TableCell3>{convertDateFormat(item.date)} </TableCell3>
                <TableCell3> <RedButton text="Edit" onClick={() => { onClickEdit(), setCurrentData(item) }} /></TableCell3>
              </TableRow3>
            ))}
          </TableBody3>
        </Table3>
        {editModal ? <AgentPaymentModal currentData={currentData} setModalName={(value) => setEditModal(value)} /> : ''}
      </div>
    </FullScreenModal>
  )
}