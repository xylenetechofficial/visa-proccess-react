import { useEffect, useState } from "react"
import { FullScreenModal } from "../../../../componenets/Modal"
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader"
import { DateInput, UnlabeledInput } from "../../../../componenets/Input"
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox"
import { createClientAdditionalInvoice } from "../repository"



export default function Main(props: {
    onClose: any, 
    fetchClientAdditionalInvoiceList: any,
    // createClientAdditionalInvoiceTemp:any

}) {

    // const initValue: AccountDashboardInterface = {
    const initValue: any = {
     
        company_id: 3,
        invoice_date: "",
        invoice_number: 0,
        invoice_amount: 0,
    }

    const [accountDashboard, setAccountDashboard] = useState(initValue)




    async function onClickAdd() {

        // call create
        const newArray :any = accountDashboard;
        const flag = await createClientAdditionalInvoice(newArray);
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
                    <SubHeading1 text=" Client :" />
                    <CustomSelectComponentUnlabeled
                        onChange={(value) => setAccountDashboard({ ...accountDashboard, company: value })}

                        options={selectOptionConveter({ options: [{name:"hero company",id:3}], options_struct: { name: "name", value: "id" } })}
                        value={accountDashboard.company}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="INVOICE DATE  :" />
                    <DateInput
                        id="sd;fksdakj"
                        value={accountDashboard.invoice_date}
                        onChange={(value) => setAccountDashboard({ ...accountDashboard, invoice_date: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="INVOICE NUMBER  :" />
                    <UnlabeledInput
                        value={accountDashboard.invoice_number}
                        onchange={(value) => setAccountDashboard({ ...accountDashboard, invoice_number: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text=" INVOICE AMOUNT :" />
                    <UnlabeledInput
                        value={accountDashboard.invoice_amount}
                        onchange={(value) => setAccountDashboard({ ...accountDashboard, invoice_amount: value })}
                    />
                </UpdateContentBox>
            </div>
        </FullScreenModal>
    )
}