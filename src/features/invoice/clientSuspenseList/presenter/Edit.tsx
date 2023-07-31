import { useEffect, useState } from "react"
import { FullScreenModal } from "../../../../componenets/Modal"
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader"
import { DateInput, UnlabeledInput } from "../../../../componenets/Input"
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox"
import { createClientSuspense, updateClientSuspense } from "../repository"
import { ClientSuspenseInterface } from "../type"
import { readCompanyList } from "../../../masters/company/repository"




export default function Main(props: {
    clientSuspence:ClientSuspenseInterface[],
    onClose: ()=>void, 
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
console.log(props.clientSuspence,"clientSuspence")
    const [accountDashboard, setAccountDashboard] = useState(props.clientSuspence[0])
    const [companyList, setCompanyList]=useState<any>([]);
    const fetchCompanyList = async () => {
        setCompanyList(await readCompanyList(true))
    }
    async function onClickUpdate() {

        // call create
        const newArray :any = accountDashboard;
        const flag :any = await updateClientSuspense(newArray?.id,newArray);
        // const flag = await props.createClientAdditionalInvoiceTemp(newArray);
        if (!flag) {
            return;
        }
        setAccountDashboard(initValue)
        
        props.fetchClientAdditionalInvoiceList();
        props.onClose();
    }
  
    useEffect(()=>{
        fetchCompanyList();
    },[])
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

                        options={selectOptionConveter({ options: companyList, options_struct: { name: "name", value: "id" } })}
                        value={accountDashboard.company_id}
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
                        type="number"
                        value={accountDashboard.amount_received}
                        onchange={(value) => setAccountDashboard({ ...accountDashboard, amount_received: parseInt(value) })}
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