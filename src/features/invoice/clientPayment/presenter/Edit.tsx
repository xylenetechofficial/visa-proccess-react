import { useEffect, useState } from "react"
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader"
import { DateInput, UnlabeledInput } from "../../../../componenets/Input"
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox"
import { updateBulkClientPaymentList, updateClientPayment } from "../repository"
import {Box} from '@mui/material'
import { GreenButton, RedButton } from "../../../../componenets/CustomButton"
import { readCompanyList } from "../../../masters/company/repository"
import { updateClientSinglePayment } from "../../clientAdditionalPayment/repository"
import { FullScreenModal } from "../../../../componenets/Modal"
import { Table2, TableBody2, TableCell, TableHead2, TableHeadCell2, TableHeadRow, TableRow } from "../../../../componenets/Table"
import { ClientPaymentAddInterface } from "../../clientAdditionalPayment/type"



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
    clientSingle: any,
    onClose: ()=>void, 
    fetchClientAdditionalInvoiceList: any,
    setModal:any
    clientPaymentData:ClientPaymentAddInterface[]
    createSinglePayment: (id:number,value: any[]) => void
    createBulkPayment: (value: any[]) => void
    deleteAdditionalPaymentByid: (value: any) => void
}) {

    // const initValue: AccountDashboardInterface = {
    const initValue: any = {
        id: 0,
        client: "",
        invoice_date: "",
        invoice_number: 0,
        invoice_amount: 0,
    }
    console.log(props.clientSingle,"clientSuspence")
     const HEADERLIST = ["SR NO.", "COMPANY NAME", "INVOICE NUMBER", "INVOICE DATE", "INVOICE AMOUNT", "PAYMENT RECEIVED", "BALANCE PAYMENT", "PAYMENT RECEIVED DATE", "AMOUNT RECEIVED (INR)", "PAYMENT DESCRIPTION", "ACTION"];
    const [accountDashboard, setAccountDashboard] = useState<any>([])
    const [companyList, setCompanyList]=useState<any>([]);
    const fetchCompanyList = async () => {
        setCompanyList(await readCompanyList(true))
    }
    function onUpdateRow(index: number, rowData: any) {
        const nextData = accountDashboard.map((e:any, i:any) => {
          if (i === index) {
            // Increment the clicked counter
            return rowData;
          } else {
            // The rest haven't changed
            return e;
          }
        });
        // props.onChange(nextData)
      }
       async function onClickAdd() {
        const newArray: any = accountDashboard;
        const flag: any = await updateBulkClientPaymentList(newArray);
        
        if (!flag) {
            return;
        }
        setAccountDashboard(initValue)

        props.fetchClientAdditionalInvoiceList();
        props.onClose();
        props.setModal('')
    }
    useEffect(()=>{
        fetchCompanyList()
      },[])
  
    return (

     
      <FullScreenModal
            buttonName="submit"
            handleClick={onClickAdd}
            title="Client  Payment"
            onClose={props.onClose}
        >
                <div className="overflow-auto">

                <Table2>
                    <TableHead2>
                        <TableHeadRow>
                            {HEADERLIST.map((item) => (<TableHeadCell2  > {item}</TableHeadCell2>))}
                        </TableHeadRow>
                    </TableHead2>
                    <TableBody2>
                        {props.clientPaymentData?.map((item,  index) => (

                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{item?.company_name}</TableCell>
                                <TableCell>{item?.invoice_number}</TableCell>
                                <TableCell>{item?.invoice_date}</TableCell>
                                <TableCell>{item?.invoice_amount}</TableCell>
                                <TableCell>{item?.payment_received}</TableCell>
                                <TableCell>{item?.balance_payment}</TableCell>
                                <TableCell><DateInput id="date" onChange={(value) =>{
                                    setAccountDashboard((prev: any) => {
                                const newData = [...prev];
                                    newData[index] = {
                                        ...newData[index],
                                        date: value,
                                        id:index,
                                        
                                    };
                                    return newData;
                                })}} value={accountDashboard[index]?.date} /></TableCell>
                                <TableCell><UnlabeledInput onchange={(value) => {
                                    setAccountDashboard((prev: any) => {
                                const newData = [...prev];
                                    newData[index] = {
                                        ...newData[index],
                                        amount: parseInt(value),
                                        id:index,
                                    };
                                    return newData;
                                })}} value={accountDashboard[index]?.amount}  /></TableCell>
                                <TableCell><UnlabeledInput onchange={(value) => {
                                    setAccountDashboard((prev: any) => {
                                const newData = [...prev];
                                    newData[index] = {
                                        ...newData[index],
                                        description: value,
                                        id:index,
                                    };
                                    return newData;
                                })}} value={accountDashboard[index]?.description}/></TableCell>

                                <TableCell>
                                    <GreenButton text="Add" onClick={() => { props.setModal('') ,props.createSinglePayment(index, accountDashboard) }} />
                                    <RedButton text={"DELETE"} onClick={() => {props.deleteAdditionalPaymentByid(index)}} />
                                </TableCell>

                            </TableRow>
                        ))}



                    </TableBody2>
                </Table2>
            </div>
 
        </FullScreenModal>
    )
}