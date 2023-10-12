
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
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
            <Table3>
                <TableHead3 >
                    <TableHeadRow3  >
                        
                        <TableHeadCell3 width={10}> DATE </TableHeadCell3>
                        <TableHeadCell3 width={10}> AMOUNT </TableHeadCell3>
                        <TableHeadCell3 width={10}> AMOUNT AVAILABLE</TableHeadCell3>
                        <TableHeadCell3 width={10} > DESCRIPTION</TableHeadCell3>
                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props?.AgentPaymentList?.all_bulk_payment_list?.map((ele :any, index:any)=>(
                         <TableRow3 key={index}>
                        
                        <TableCell3 width={10}>{convertDateFormat(ele.created_at)}</TableCell3>
                        <TableCell3 width={10}>{ele.amount}</TableCell3>
                       
                        <TableCell3 width={10}>
                            <p onClick={()=>onClick(ele)} className='text-red-600 cursor-pointer'>
                                {ele.used_amount} 
                                </p>
                                </TableCell3>
                        
                        <TableCell3 width={10}>{ele.description}</TableCell3>
                        </TableRow3>
                    ))}
                </TableBody3>
            </Table3>

        </div>
    )
}

export default PaymentBulkList

