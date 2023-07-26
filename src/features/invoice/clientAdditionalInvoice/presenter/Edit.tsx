import { useEffect, useState } from "react"
import { FullScreenModal } from "../../../../componenets/Modal"
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader"
import { DateInput, UnlabeledInput } from "../../../../componenets/Input"
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox"
import { createClientAdditionalInvoice, updateClientAdditionalInvoice } from "../repository"
import { readCompanyList } from "../../../masters/company/repository"



export default function Main(props: {
    immigrationData:any,
    onClose: any, 
    fetchClientAdditionalInvoiceList: any,
    // createClientAdditionalInvoiceTemp:any

}) {

    // const initValue: AccountDashboardInterface = {
    

    const [accountDashboard, setAccountDashboard] = useState(props?.immigrationData)
    const [companyList, setCompanyList]=useState<any>([]);
    const fetchCompanyList = async () => {
        setCompanyList(await readCompanyList(true))
    }
    useEffect(()=>{
        fetchCompanyList()
      },[])


console.log(props.immigrationData,"ss")
    async function onClickAdd() {

        // call create
        const newArray :any = accountDashboard;
        const flag :any = await updateClientAdditionalInvoice(newArray[0]?.id, newArray[0]);
        // const flag = await props.createClientAdditionalInvoiceTemp(newArray);
        if (!flag) {
            return;
        }
        // setAccountDashboard(initValue)
        
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

                        options={selectOptionConveter({ options: companyList, options_struct: { name: "name", value: "id" } })}
                        value={accountDashboard[0].company}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="INVOICE DATE  :" />
                    <DateInput
                        id="sd;fksdakj"
                        value={accountDashboard[0].invoice_date}
                        onChange={(value) => setAccountDashboard({ ...accountDashboard, invoice_date: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="INVOICE NUMBER  :" />
                    <UnlabeledInput
                        value={accountDashboard[0].invoice_number}
                        onchange={(value) => setAccountDashboard({ ...accountDashboard, invoice_number: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text=" INVOICE AMOUNT :" />
                    <UnlabeledInput
                        value={accountDashboard[0].invoice_amount}
                        onchange={(value) => setAccountDashboard({ ...accountDashboard, invoice_amount: value })}
                    />
                </UpdateContentBox>
            </div>
        </FullScreenModal>
    )
}