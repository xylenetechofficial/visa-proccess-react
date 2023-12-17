import { FullScreenModal } from "../../../../componenets/Modal"
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader"
import { DateInput, UnlabeledInput } from "../../../../componenets/Input"
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox"
import { createClientAdditionalInvoice } from "../repository"
import { CompanyInterface } from "../../../masters/company/type"
import { useState } from "react"

export default function Main(props: {
    onClose: () => void,
    fetchClientAdditionalInvoiceList: any,
    companyList: CompanyInterface[]
}) {

    const initValue: any = {
        company_id: 0,
        invoice_date: "",
        invoice_number: 0,
        invoice_amount: 0,
    }

    const [clientAdditionalInvoice, setclientAdditionalInvoice] = useState(initValue)

    async function onClickAdd() {

        // call create
        const newArray: any = clientAdditionalInvoice;
        const flag = await createClientAdditionalInvoice(newArray);
        if (!flag) {
            return;
        }
        setclientAdditionalInvoice(initValue)

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
                        onChange={(value) => setclientAdditionalInvoice({ ...clientAdditionalInvoice, company_id: value })}

                        options={selectOptionConveter({ options: props.companyList, options_struct: { name: "name", value: "id" } })}
                        value={clientAdditionalInvoice.company}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="INVOICE DATE  :" />
                    <DateInput
                        id="sd;fksdakj"
                        value={clientAdditionalInvoice.invoice_date}
                        onChange={(value) => setclientAdditionalInvoice({ ...clientAdditionalInvoice, invoice_date: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="INVOICE NUMBER  :" />
                    <UnlabeledInput
                        value={clientAdditionalInvoice.invoice_number}
                        onchange={(value) => setclientAdditionalInvoice({ ...clientAdditionalInvoice, invoice_number: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text=" INVOICE AMOUNT :" />
                    <UnlabeledInput
                        type="number"
                        value={clientAdditionalInvoice.invoice_amount}
                        onchange={(value) => setclientAdditionalInvoice({ ...clientAdditionalInvoice, invoice_amount: parseInt(value) })}
                    />
                </UpdateContentBox>
            </div>
        </FullScreenModal>
    )
}