import { useState } from "react"
import { RedButton } from "../../../../componenets/CustomButton"
import { FullScreenModal } from "../../../../componenets/Modal"
import { Table3, TableBody2, TableCell, TableHeadRed, TableHeadCell, TableHeadRow, TableRow } from "../../../../componenets/Table"
import AgentPaymentModal from './AgentPaymentReceivedDetails';
import { PaymentReceivedInterface } from "../type";
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
            <TableHeadRow>
              <TableHeadCell> Sr No.</TableHeadCell>
              <TableHeadCell> CANDIDATE NAME</TableHeadCell>
              <TableHeadCell> PASSPORT NO.</TableHeadCell>
              <TableHeadCell> AGENT NAME</TableHeadCell>
              <TableHeadCell> AMOUNT RECEIVED</TableHeadCell>
              <TableHeadCell> DATE </TableHeadCell>
              <TableHeadCell> EDIT</TableHeadCell>
            </TableHeadRow>
          </TableHeadRed>
          <TableBody2>
            {props.editPaymentList.map((item, index) => (
              <TableRow>
                <TableCell>{index + 1} </TableCell>
                <TableCell> {item.name}</TableCell>
                <TableCell>{item.passport_no} </TableCell>
                <TableCell> {item.agent_name}</TableCell>
                <TableCell>{item.amount_received} </TableCell>
                <TableCell>{item.received} </TableCell>
                <TableCell> <RedButton text="Edit" onClick={() => { onClickEdit(), setCurrentData(item) }} /></TableCell>
              </TableRow>
            ))}
          </TableBody2>
        </Table3>
        {editModal ? <AgentPaymentModal currentData={currentData} setModalName={(value) => setEditModal(value)} /> : ''}
      </div>
    </FullScreenModal>
  )
}