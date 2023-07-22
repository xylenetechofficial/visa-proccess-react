import { useEffect, useState } from "react"
import { FullScreenModal } from "../../../../componenets/Modal"
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader"
import { DateInput, UnlabeledInput } from "../../../../componenets/Input"
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox"
import { ClientPaymentSingleAddInterface } from "../type"
import { updateClientPayment } from "../repository"






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

        <FullScreenModal
            buttonName="Add"
            handleClick={onClickUpdate}
            title="Client Additional Invoice Add"
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
            </div>
        </FullScreenModal>
    )
}