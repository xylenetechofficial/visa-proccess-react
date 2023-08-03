
import {  Table2, TableBody,  TableCell,  TableCell3,  TableHead2,  TableHeadCell3,  TableHeadRow2, TableRow } from '../../../../componenets/Table';
import { convertDateFormat } from '../../../../utils/function';

const PaymentBulkList = (props:
    {AgentPaymentList:any
        fetchPaymentDetail:(type :string,id:number  )=>any
        setModalName:any
    }) => {
    console.log(props?.AgentPaymentList?.bulk_payment_list,"jpaymentj")
    
    const onClick = (ele:any)=>{
        props.setModalName('viewbulkpayment');
        props.fetchPaymentDetail('bulk_payment_id',ele);
    }
    return (

        <div className='overflow-auto shadow-md shadow-slate-500 rounded-lg  justify-center h-80 '>

    <div className="text-xl p-3 m-1 font-bold text-gray-500 uppercase bg-[#F1F2F6] dark:bg-gray-500 dark:text-gray-500 w-auto">
 agent bulk payment list
      </div>
            <Table2>
                <TableHead2 >
                    <TableHeadRow2  >
                        
                        <TableHeadCell3 width={10}> DATE </TableHeadCell3>
                        <TableHeadCell3 width={10}> AMOUNT </TableHeadCell3>
                        <TableHeadCell3 width={10}> AMOUNT USED</TableHeadCell3>
                        <TableHeadCell3 width={10} > DESCRIPTION</TableHeadCell3>
                    </TableHeadRow2>
                </TableHead2>
                <TableBody>
                    {props?.AgentPaymentList?.bulk_payment_list?.map((ele :any, index:any)=>(
                         <TableRow key={index}>
                        
                        <TableCell3 width={10}>{convertDateFormat(ele.created_at)}</TableCell3>
                        <TableCell3 width={10}>{ele.amount}</TableCell3>
                       
                        <TableCell3 width={10}>
                            <p onClick={()=>onClick(ele)} className='text-red-600 cursor-pointer'>
                                {ele.used_amount} 
                                </p>
                                </TableCell3>
                        
                        <TableCell3 width={10}>{ele.description}</TableCell3>
                        </TableRow>
                    ))}
                </TableBody>
            </Table2>

        </div>
    )
}

export default PaymentBulkList

