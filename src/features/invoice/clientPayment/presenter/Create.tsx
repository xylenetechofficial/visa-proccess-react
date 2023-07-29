import { useEffect, useState } from "react"
import { FullScreenModal } from "../../../../componenets/Modal"
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader"
import { DateInput, UnlabeledInput } from "../../../../componenets/Input"
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox"

import { ClientPaymentSingleAddInterface } from "../type"
import { createClientSinglePaymentAdd } from "../repository"
import { readCompanyList } from "../../../masters/company/repository"

import { ClientPaymentAddInterface } from "../../clientAdditionalPayment/type"
import { convertLength } from "@mui/material/styles/cssUtils"





export default function Main(props: {

    client_single: ClientPaymentSingleAddInterface
    onClose: () => void,
    fetchClientAdditionalInvoiceList: any,
}) {

    // const initValue: AccountDashboardInterface = {
    const initValue: ClientPaymentSingleAddInterface = {
        company_id: 0,
        company_name: "",
        invoice_number: '',
        invoice_date: '',
        amount: 0,
        date: '',
        description: ''
    }

    const [accountDashboard, setAccountDashboard] = useState(initValue)

    // const [companyList, setCompanyList] = useState<any>([]);
    // const fetchCompanyList = async () => {
    //     setCompanyList(await readCompanyList(true))
    // }
    useEffect(() => {
        // fetchCompanyList()
        setAccountDashboard(props.client_single)
        console.log(props.client_single)
    }, [])
    async function onClickUpdate() {

        // call create
        const newArray: any = accountDashboard;
        console.log(accountDashboard)
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
                    {accountDashboard.company_name}
                    {/* <CustomSelectComponentUnlabeled
                        onChange={(value) => setAccountDashboard({ ...accountDashboard, company_id: value })}

                        options={selectOptionConveter({ options: companyList, options_struct: { name: "name", value: "id" } })}
                        value={accountDashboard.company_id}
                    /> */}
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="INVOICE NUMBER  :" />
                    {accountDashboard.invoice_number}
                    {/* <UnlabeledInput
                        value={accountDashboard.invoice_number}
                        onchange={(value) => setAccountDashboard({ ...accountDashboard, invoice_number: value })}
                    /> */}
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="INVOICE DATE  :" />
                    {accountDashboard.invoice_date}
                    {/* <DateInput
                        id="sd;fksdakj"
                        value={accountDashboard.invoice_date}
                        onChange={(value) => setAccountDashboard({ ...accountDashboard, invoice_date: value })}
                    /> */}
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
                    type="number"
                        value={accountDashboard.amount}
                        onchange={(value) => setAccountDashboard({ ...accountDashboard, amount: parseInt(value) })}
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