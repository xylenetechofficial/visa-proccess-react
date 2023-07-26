import { useEffect, useState } from "react"
import { FullScreenModal } from "../../../../componenets/Modal"
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader"
import { DateInput, UnlabeledInput } from "../../../../componenets/Input"
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox"

import { ClientPaymentSingleAddInterface } from "../type"
import { createClientSinglePaymentAdd } from "../repository"




export default function Main(props: {
    // clientSingle: ClientPaymentSingleAddInterface,
    onClose: () => any,
    fetchClientAdditionalInvoiceList: any,


}) {

    // const initValue: AccountDashboardInterface = {
    const initValue: any = {

        company_id: 0,
        invoice_number: '',
        invoice_date: '',
        amount: '',
        date: '',
        description: ''
    }
    // console.log(props.clientSingle, "clientSuspence")
    const [accountDashboard, setAccountDashboard] = useState(initValue)

    async function onClickUpdate() {

        // call create
        const newArray: any = accountDashboard;
        const flag = await createClientSinglePaymentAdd(newArray);
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
            handleClick={onClickUpdate}
            title="Client Additional Invoice Add"
            onClose={props.onClose}
        >
            <div className=" grid grid-cols-1 py-3  gap-2 shadow">
                <UpdateContentBox>
                    <SubHeading1 text=" Company :" />
                    <CustomSelectComponentUnlabeled
                        onChange={(value) => setAccountDashboard({ ...accountDashboard, company_id: value })}

                        options={selectOptionConveter({ options: [{ name: "mahara", id: 3 }], options_struct: { name: "name", value: "id" } })}
                        value={accountDashboard.company_id}
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

                    <SubHeading1 text="INVOICE DATE  :" />
                    <DateInput
                        id="sd;fksdakj"
                        value={accountDashboard.invoice_date}
                        onChange={(value) => setAccountDashboard({ ...accountDashboard, invoice_date: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="PAYMENT RECEIVED DATE  :" />
                    <DateInput
                        id="sd;fksdakj"
                        value={accountDashboard.date}
                        onChange={(value) => setAccountDashboard({ ...accountDashboard, date: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="AMOUNT RECEIVED (INR)  :" />
                    <UnlabeledInput
                        value={accountDashboard.amount}
                        onchange={(value) => setAccountDashboard({ ...accountDashboard, amount: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text=" PAYMENT DESCRIPTION :" />
                    <UnlabeledInput
                        value={accountDashboard.description}
                        onchange={(value) => setAccountDashboard({ ...accountDashboard, description: value })}
                    />
                </UpdateContentBox>
            </div>
        </FullScreenModal>
    )
}