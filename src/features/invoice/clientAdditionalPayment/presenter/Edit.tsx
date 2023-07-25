import { useEffect, useState } from "react"
import { FullScreenModal } from "../../../../componenets/Modal"
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader"
import { DateInput, UnlabeledInput } from "../../../../componenets/Input"
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox"
import { ClientPaymentSingleAddInterface } from "../type"
import { updateClientPayment } from "../repository"
import {Box} from '@mui/material'
import { BlueButton, GreenButton, RedButton } from "../../../../componenets/CustomButton"
import { Table2, TableBody2, TableCell, TableHead2, TableHeadCell2, TableHeadRow, TableRow } from "../../../../componenets/Table"



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
    clientPaymentData:any
    clientSingle: any,
    onClose: ()=>void, 
    fetchClientAdditionalInvoiceList: any,
    setModal:any
    

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
    const [accountDashboard, setAccountDashboard] = useState(props.clientSingle)
    const HEADERLIST = ["SR NO.", "COMPANY NAME", "INVOICE NUMBER", "INVOICE DATE", "INVOICE AMOUNT", "PAYMENT RECEIVED", "BALANCE PAYMENT", "PAYMENT RECEIVED DATE","AMOUNT RECEIVED (INR)","PAYMENT DESCRIPTION", "ACTION"];
    async function onClickUpdate() {

        // call create
        const newArray :any = accountDashboard;
        const flag :any = await updateClientPayment(newArray);
        // const flag = await props.createClientAdditionalInvoiceTemp(newArray);
        if (!flag) {
            return;
        }
        setAccountDashboard(initValue)
        
        props.fetchClientAdditionalInvoiceList();
        props.onClose();
        props.setModal('')
    }
    async function onClickAdd() {

        // call create
        const newArray :any = accountDashboard;
        const flag :any = await updateClientPayment(newArray);
        // const flag = await props.createClientAdditionalInvoiceTemp(newArray);
        if (!flag) {
            return;
        }
        setAccountDashboard(initValue)
        
        props.fetchClientAdditionalInvoiceList();
        props.onClose();
        props.setModal('')
    }
  
    return (

     
        // <Box sx={style}>
        //     <h3 className="mb-4 text-2xl align-center font-medium text-gray-900 dark:text-white">Invoice Payment</h3>
        //     <button
        //         type="button"
        //         className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        //         onClick={() => props.onClose()}
        //     >
        //         <svg
        //             aria-hidden="true"
        //             className="w-5 h-5"
        //             fill="currentColor"
        //             viewBox="0 0 20 20"
        //             xmlns="http://www.w3.org/2000/svg"
        //         >
        //             <path
        //                 fillRule="evenodd"
        //                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        //                 clipRule="evenodd"
        //             ></path>
        //         </svg>
        //         <span className="sr-only">Close modal</span>
        //     </button>
                <FullScreenModal
            buttonName="submit"
            handleClick={onClickAdd}
            title="Candidate Reject"
            onClose={props.onClose}
        >
            <div className=" grid grid-cols-1 py-3  gap-2 shadow">
                <UpdateContentBox>
                    <SubHeading1 text=" Company :" />
                    <CustomSelectComponentUnlabeled
                        onChange={(value) => setAccountDashboard({ ...accountDashboard, company_id: value })}

                        options={selectOptionConveter({ options: [{name:"mahara",id:3}], options_struct: { name: "name", value: "id" } })}
                        value={props?.clientSingle?.company_name}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="PAYMENT RECEIVED DATE  :" />
                    <DateInput
                        id="sd;fksdakj"
                        value={props?.clientSingle?.date}
                        onChange={(value) => setAccountDashboard({ ...accountDashboard, payment_received_date: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="AMOUNT RECEIVED (INR)  :" />
                    <UnlabeledInput
                        value={props?.clientSingle?.amount}
                        onchange={(value) => setAccountDashboard({ ...accountDashboard, payment_received_date: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text=" PAYMENT DESCRIPTION :" />
                    <UnlabeledInput
                        value={props?.clientSingle?.description}
                        onchange={(value) => setAccountDashboard({ ...accountDashboard, payment_description: value })}
                    />
                </UpdateContentBox>
                <div className=" flex justify-center">
                {/* <UpdateContentBox> */}
                <GreenButton text="Submit" onClick={()=>{props.setModal('')}}/>
                <RedButton text="cancel" onClick={()=>{props.setModal('')}}/>
                {/* </UpdateContentBox> */}
                </div>
                </div>

                <div className="overflow-auto">

<Table2>
    <TableHead2>
        <TableHeadRow>
            {HEADERLIST.map((item) => (<TableHeadCell2  > {item}</TableHeadCell2>))}
        </TableHeadRow>
    </TableHead2>
    <TableBody2>
        {props.clientPaymentData?.map((item:any, index:any) => (

            <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item?.company_name}</TableCell>
                <TableCell>{item?.invoice_number}</TableCell>
                <TableCell>{item?.invoice_date}</TableCell>
                <TableCell>{item?.invoice_amount}</TableCell>
                <TableCell>{item?.payment_received}</TableCell>
                <TableCell>{item?.balance_payment}</TableCell>
                <TableCell><DateInput id="date" onChange={(value)=>console.log(value)} value={accountDashboard?.payment_received_date} /></TableCell>
                <TableCell><UnlabeledInput onchange={(value)=>{console.log(value)}} value={accountDashboard.amount}/></TableCell>
                <TableCell><UnlabeledInput onchange={(value)=>{console.log(value)}} value={accountDashboard.payment_description}/></TableCell>

                <TableCell>
                    <GreenButton text="Add" onClick={() => { props.setModal('create') }} />
                    {/* <BlueButton text="EDIT" onClick={() => { props.onClickEdit(item), props.setModal('edit') }} /> */}
                    <RedButton text={"DELETE"} onClick={() => console.log("Reject", index)} />
                </TableCell>

            </TableRow>
        ))}



    </TableBody2>
</Table2>
</div>
        </FullScreenModal>
    )
}