import React from 'react'
import { FullScreenModal, HalfScreenModal } from '../../../../componenets/Modal'
import { Table3, TableBody3, TableCell3, TableHeadCell3, TableHeadRed, TableHeadRow3, TableRow3 } from '../../../../componenets/Table'
import { BlueButton, RedButton } from '../../../../componenets/CustomButton'
import { convertDateFormat } from '../../../../utils/function'

export default function ViewModal(props:{
    setModalName:(value:string)=>void,
    data:any
}) {
  return (
    <HalfScreenModal
    handleClick={() => props.setModalName('')}
    title="Agent Payments Received Details"
    onClose={() => props.setModalName('')}
  >
    <div className=" grid grid-cols-1 py-3  gap-2 shadow overflow-scroll">
      <Table3>
        <TableHeadRed>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> Visa Profession</TableHeadCell3>
            <TableHeadCell3> Arabic Visa Category</TableHeadCell3>
            <TableHeadCell3> Quantity</TableHeadCell3>
            {/* <TableHeadCell3> Action</TableHeadCell3> */}
          </TableHeadRow3>
        </TableHeadRed>
        <TableBody3>
          {props.data.map((item :any, index:number) => (
            <TableRow3>
              <TableCell3>{index + 1} </TableCell3>
              <TableCell3> {item.visa_profession}</TableCell3>
              <TableCell3>{item.arabic_visa_category} </TableCell3>
              <TableCell3> {item.quantity}</TableCell3>
              {/* <TableCell3> <BlueButton text='Save'/>
              
              </TableCell3> */}
            </TableRow3>
          ))}
        </TableBody3>
      </Table3>
      
    </div>
  </HalfScreenModal>
  )
}
