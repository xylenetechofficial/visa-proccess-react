import React from 'react'
import { FullScreenModal } from '../../../../componenets/Modal'
import { Table3, TableBody3, TableCell3, TableHeadCell3, TableHeadRed, TableHeadRow3, TableRow3 } from '../../../../componenets/Table'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton'
import { convertDateFormat } from '../../../../utils/function'

export default function ViewModal(props:{
    setModalName:(value:string)=>void,
    data:any
}) {
  return (
    <FullScreenModal
    handleClick={() => props.setModalName('')}
    title="Agent Payments Received Details"
    onClose={() => props.setModalName('')}
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
          {props.data.map((item :any, index:number) => (
            <TableRow3>
              <TableCell3>{index + 1} </TableCell3>
              <TableCell3> {item.name}</TableCell3>
              <TableCell3>{item.passport_no} </TableCell3>
              <TableCell3> {item.agent_name}</TableCell3>
              <TableCell3>{item.amount_received} </TableCell3>
              <TableCell3>{convertDateFormat(item.date)} </TableCell3>
              <TableCell3> <BlueButton text='Save'/>
              
              </TableCell3>
            </TableRow3>
          ))}
        </TableBody3>
      </Table3>
      
    </div>
  </FullScreenModal>
  )
}
