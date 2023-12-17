import { useState } from "react"
import { FullScreenModal } from "../../../../componenets/Modal"
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader"
import { DateInput, UnlabeledInput } from "../../../../componenets/Input"
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox"
import { updateClientAdditionalInvoice } from "../repository"
import { CompanyInterface } from "../../../masters/company/type"

export default function Main(props: {
    clientAdditionalInvoiceList: any,
    onClose: () => void,
    fetchClientAdditionalInvoiceList: any,
    companyList: CompanyInterface[]
}) {

    const [clientAdditionalInvoice, setclientAdditionalInvoice] = useState(props?.clientAdditionalInvoiceList)

    async function onClickAdd() {
        const flag: any = await updateClientAdditionalInvoice(clientAdditionalInvoice?.id, clientAdditionalInvoice);
        if (flag) {
            
            props.onClose();
            props.fetchClientAdditionalInvoiceList();
            return;
        }
        
        props.fetchClientAdditionalInvoiceList();
        props.onClose();
    }

    function onUpdateRow(index: number, rowData: any) {
        const nextData: any = props.clientAdditionalInvoiceList.map((e: any, i: any) => {
            if (i === index) {
                // Increment the clicked counter
                return rowData;
            } else {
                // The rest haven't changed
                return e;
            }
        });
        onChange(nextData)
        

    }
    const onChange = (data: any) => {
        setclientAdditionalInvoice(data)
    }
    console.log(clientAdditionalInvoice, "lllllllllll")
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
                        onChange={(value) =>
                            
                            //  setAccountDashboard({ ...accountDashboard, company: value })
                            // onUpdateRow(0,{...accountDashboard, company_id:parseInt(value)} )
                            // setAccountDashboard((prev: any) => {
                            //     const newData: any = [...prev];
                            //     newData[0] = {
                            //       ...newData[0],
                            //       company_id: value,
                            //       value
                            //     //   invoice_date: accountDashboard?.invoice_date,
                                  
                            //     };
                            //     return newData;
                            //   })
                            setclientAdditionalInvoice({...clientAdditionalInvoice,company_id:value })
                            }

                            // setclientAdditionalInvoice({ ...clientAdditionalInvoice, invoice_date: value })
                        // }
                        options={selectOptionConveter({ options: props.companyList, options_struct: { name: "name", value: "id" } })}
                        value={clientAdditionalInvoice.company_id}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="INVOICE DATE  :" />
                    <DateInput
                        id="sd;fksdakj"
                        value={clientAdditionalInvoice.invoice_date}
                        onChange={(value) =>
                            setclientAdditionalInvoice({ ...clientAdditionalInvoice, invoice_date: value })
                        }
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="INVOICE NUMBER  :" />
                    <UnlabeledInput
                        value={clientAdditionalInvoice.invoice_number}
                        onchange={(value) =>
                            setclientAdditionalInvoice({ ...clientAdditionalInvoice, invoice_number: value })
                        }
                    />
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text=" INVOICE AMOUNT :" />
                    <UnlabeledInput

                        type="number"

                        value={clientAdditionalInvoice.invoice_amount}
                        onchange={(value) => {
                            if (value) {
                                setclientAdditionalInvoice({ ...clientAdditionalInvoice, invoice_amount: value })
                            }
                            else {
                                setclientAdditionalInvoice({ ...clientAdditionalInvoice, invoice_amount: value })
                            }
                        }}

                    />
                </UpdateContentBox>
            </div>
        </FullScreenModal>
    )
}