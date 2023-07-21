import { useEffect, useState } from "react"
import { FullScreenModal } from "../../../../componenets/Modal"
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader"
import { DateInput, UnlabeledInput } from "../../../../componenets/Input"
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox"
import { createClientSuspense } from "../repository"




export default function Main(props: {
    onClose: any, 
    fetchClientAdditionalInvoiceList: any,
    createClientAdditionalInvoiceTemp:any

}) {

    // const initValue: AccountDashboardInterface = {
    const initValue: any = {
        id: 0,
        client: "",
        invoice_date: "",
        invoice_number: 0,
        invoice_amount: 0,
    }

    const [accountDashboard, setAccountDashboard] = useState(initValue)

    async function onClickAdd() {

        // call create
        const newArray :any = accountDashboard;
        const flag = await createClientSuspense(newArray);
        // const flag = await props.createClientAdditionalInvoiceTemp(newArray);
        if (!flag) {
            return;
        }
        setAccountDashboard(initValue)
        
        props.fetchClientAdditionalInvoiceList();
        props.onClose();
    }
  
    return (

        <FullScreenModal
            buttonName="Add"
            handleClick={onClickAdd}
            title="Client Additional Invoice Add"
            onClose={props.onClose}
        >
            <div className=" grid grid-cols-1 py-3  gap-2 shadow">
                <UpdateContentBox>
                    <SubHeading1 text=" Company :" />
                    <CustomSelectComponentUnlabeled
                        onChange={(value) => setAccountDashboard({ ...accountDashboard, company_id: value })}

                        options={selectOptionConveter({ options: [{name:"hero",id:3}], options_struct: { name: "name", value: "id" } })}
                        value={accountDashboard.company}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="PAYMENT RECEIVED DATE  :" />
                    <DateInput
                        id="sd;fksdakj"
                        value={accountDashboard.payment_received_date}
                        onChange={(value) => setAccountDashboard({ ...accountDashboard, payment_received_date: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="AMOUNT RECEIVED (INR)  :" />
                    <UnlabeledInput
                        value={accountDashboard.amount_received}
                        onchange={(value) => setAccountDashboard({ ...accountDashboard, amount_received: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text=" PAYMENT DESCRIPTION :" />
                    <UnlabeledInput
                        value={accountDashboard.payment_description}
                        onchange={(value) => setAccountDashboard({ ...accountDashboard, payment_description: value })}
                    />
                </UpdateContentBox>
            </div>
        </FullScreenModal>
    )
}