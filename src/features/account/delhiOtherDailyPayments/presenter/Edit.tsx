import { Checkbox } from "flowbite-react"
import { Table2, TableBody, TableCell, TableHead2, TableHeadCell2, TableHeadRow2, TableRow } from "../../../../componenets/Table"
import { GreenButton } from "../../../../componenets/CustomButton"

export default function Main (props:{
    onClickEdit:any,
    setModalName:any

}){
    const dummy =[1,2]
    return (
        <>
             <div className="overflow-auto mt-5">

<div className="text-xl p-3 font-bold text-gray-500 uppercase bg-[#F1F2F6] dark:bg-gray-500 dark:text-gray-500 w-auto">
      delhi/other daily payment EDIT
                  </div>
<Table2>
  <TableHead2>
    <TableHeadRow2>
      <TableHeadCell2> Sr No.</TableHeadCell2>
      <TableHeadCell2> CONDIDATE NAME</TableHeadCell2>
      <TableHeadCell2> PASSPORT NO</TableHeadCell2>
      <TableHeadCell2> COMPANY NAME</TableHeadCell2>
      <TableHeadCell2> AGENT </TableHeadCell2>
      <TableHeadCell2> TOTAL SERVICE CHARGES </TableHeadCell2>
      <TableHeadCell2> <Checkbox /> </TableHeadCell2>
      <TableHeadCell2> AMOUNT RECEIVED</TableHeadCell2>
      <TableHeadCell2> RECEIVED AT </TableHeadCell2>
      <TableHeadCell2> SERVICE TAX</TableHeadCell2>
      <TableHeadCell2> SERVICE TAX RECEIVED</TableHeadCell2>
      

    </TableHeadRow2>
  </TableHead2>
  <TableBody>
    {dummy.map((ele, index) => (
      <TableRow key={index}>
        <TableCell>{index + 1}</TableCell>
        {/* <TableCell> {ele.id}</TableCell> */}
        <TableCell>MOHAMMAD RASHID </TableCell>
        <TableCell>
         L7252926
        </TableCell>
        <TableCell> SOUNDLINES ADMINISTERATIVE COMPANY</TableCell>
        <TableCell>  unregistered(delhi)</TableCell>
        <TableCell> 2400</TableCell>
        <TableCell> <Checkbox /></TableCell>
        <TableCell>4500</TableCell>
        <TableCell> 09-feb-2022</TableCell>
        <TableCell> YES<p className="text-red-500 cursor-pointer font-medium" onClick={() => props.onClickEdit("paymentdetails", ele)}>{ele}/-</p></TableCell>
        <TableCell>yes</TableCell>
        {/* <TableCell>
          <p className="text-red-500 cursor-pointer font-medium" onClick={() => props.onClickEdit("agentcommission", ele)}>
            -UP</p>
        </TableCell> */}
      </TableRow>
    ))}
  </TableBody>
</Table2>
<GreenButton text="Submit" onClick={()=>{console.log("first"),props.setModalName("")}
}/>
</div>
        
        </>
    )
}