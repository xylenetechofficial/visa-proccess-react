import { useEffect, useState } from "react"
import { FullScreenModal } from "../../../../componenets/Modal"
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader"
import { DateInput, UnlabeledInput } from "../../../../componenets/Input"
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox"
import { ClientPaymentSingleAddInterface } from "../type"
import { updateClientPayment } from "../repository"
import {Box} from '@mui/material'
import { GreenButton, RedButton } from "../../../../componenets/CustomButton"



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
  
    return (

     
        <Box sx={style}>
            <h3 className="mb-4 text-2xl align-center font-medium text-gray-900 dark:text-white">Invoice Payment</h3>
            <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => props.onClose()}
            >
                <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            
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
                <div className="grid grid-cols-2 shadow ">
                <GreenButton text="Submit" onClick={()=>{props.setModal('')}}/>
                <RedButton text="cancel" onClick={()=>{props.setModal('')}}/>
                </div>
                </div>
        </Box>
    )
}