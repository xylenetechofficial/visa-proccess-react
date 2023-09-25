import { useState } from "react"
import { RedButton } from "../../../../componenets/CustomButton"
import { FullScreenModal } from "../../../../componenets/Modal"
import { Table, TableBody2, TableCell, TableHead2, TableHeadCell, TableHeadRow, TableRow } from "../../../../componenets/Table"
import AgentPaymentModal from './AgentPaymentReceivedDetails';
export default function Main(props:{
    setModal:(value:string)=>void
}) {

const [date,setDate]= useState([{}]);
const [editModal, setEditModal]=useState(false)
    function onUpdateRow(index: number, rowData: any) {
        // const nextData :any= props.immigrationData.map((e:any, i:any) => {
        //   if (i === index) {
        //     // Increment the clicked counter
        //     return rowData;
        //   } else {
        //     // The rest haven't changed
        //     return e;
        //   }
        // });
        // onChange(nextData)
        // props.setData(nextData)
       
      }
    //   const onChange =(data:any)=>{
    //     setAccountDashboard(data)
    //   }
    // console.log(accountDashboard,"lllllllllll")
    const onClickEdit=()=>{
        setEditModal(true)
    }
    return (

        <FullScreenModal
            // buttonName="Add"
            handleClick={()=>props.setModal('')}
            title="Agent Payments Received Details"
            onClose={()=>props.setModal('')}
        >
            <div className=" grid grid-cols-1 py-3  gap-2 shadow overflow-scroll">
            <Table>
          <TableHead2>
            <TableHeadRow>
              <TableHeadCell> Sr No.</TableHeadCell>
              <TableHeadCell> CANDIDATE NAME</TableHeadCell>
              <TableHeadCell> PASSPORT NO.</TableHeadCell>
              <TableHeadCell> AGENT NAME</TableHeadCell>
              <TableHeadCell> AMOUNT RECEIVED</TableHeadCell>
              <TableHeadCell> DATE </TableHeadCell>
              <TableHeadCell> EDIT</TableHeadCell>
              
  
            </TableHeadRow>
          </TableHead2>
          <TableBody2>
  {  date?.map((item :any,index:any) =>(
         <TableRow>
  
         <TableCell>{index + 1} </TableCell>
         <TableCell> {item.name}</TableCell>
         <TableCell>{item.passport_no} </TableCell>
         <TableCell> {item.agent_name}</TableCell>
         <TableCell>{item.amount_received} </TableCell>
         <TableCell>{item.date} </TableCell>
         <TableCell> <RedButton text="Edit" onClick={()=>onClickEdit()}/></TableCell>
  
  
  
       </TableRow>
  
  ))}
     
  
  
          </TableBody2>
        </Table>  
        {editModal ? <AgentPaymentModal setModalName={(value)=>setEditModal(value)}/>:''}         
            </div>
        </FullScreenModal>
    )
}