import { useEffect, useState } from "react"
import { FullScreenModal } from "../../../../componenets/Modal"
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader"
import { DateInput, UnlabeledInput } from "../../../../componenets/Input"
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox"
import { createClientAdditionalInvoice, updateClientAdditionalInvoice } from "../repository"
import { readCompanyList } from "../../../masters/company/repository"
import { CompanyInterface } from "../../../masters/company/type"



export default function Main(props: {
    immigrationData:any,
    onClose: ()=>void, 
    fetchClientAdditionalInvoiceList: any,
    // createClientAdditionalInvoiceTemp:any
    companyList:CompanyInterface[]
}) {

    // const initValue: AccountDashboardInterface = {
    

    const [accountDashboard, setAccountDashboard] = useState(props?.immigrationData)
    // const [companyList, setCompanyList]=useState<any>([]);
    // const fetchCompanyList = async () => {
    //     setCompanyList(await readCompanyList(true))
    // }
    // useEffect(()=>{
    //     fetchCompanyList()
    //   },[])


console.log(props.immigrationData,"aaaaaaaaaaa")
    async function onClickAdd() {

        const flag :any = await updateClientAdditionalInvoice(accountDashboard?.id, accountDashboard);
        if (flag) {
          console.log(flag)
            props.onClose();
            props.fetchClientAdditionalInvoiceList();
            return;
        }
        // setAccountDashboard(initValue)
        console.log(flag)
        props.fetchClientAdditionalInvoiceList();
        props.onClose();
    }
  
    function onUpdateRow(index: number, rowData: any) {
        const nextData :any= props.immigrationData.map((e:any, i:any) => {
          if (i === index) {
            // Increment the clicked counter
            return rowData;
          } else {
            // The rest haven't changed
            return e;
          }
        });
        onChange(nextData)
        // props.setData(nextData)
       
      }
      const onChange =(data:any)=>{
        setAccountDashboard(data)
      }
    console.log(accountDashboard,"lllllllllll")
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
                            setAccountDashboard({...accountDashboard,company_id:value })
                            }

                        options={selectOptionConveter({ options: props.companyList, options_struct: { name: "name", value: "id" } })}
                        value={accountDashboard.company_id}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="INVOICE DATE  :" />
                    <DateInput
                        id="sd;fksdakj"
                        value={accountDashboard.invoice_date}
                        onChange={(value) =>
                            //  setAccountDashboard({ ...accountDashboard, invoice_date: value })
                            // onUpdateRow(0,{...accountDashboard, invoice_date:value} )
                            // setAccountDashboard((prev: any) => {
                            //     const newData: any = [...prev];
                            //     newData[0] = {
                            //       ...newData[0],
                            //     //   company_id: accountDashboard?.company_id,
                            //       invoice_date: value,
                                  
                            //     };
                            //     return newData;
                            //   })
                            setAccountDashboard({...accountDashboard,invoice_date:value })
                            }
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="INVOICE NUMBER  :" />
                    <UnlabeledInput
                        value={accountDashboard.invoice_number}
                        onchange={(value) =>
                            //  setAccountDashboard({ ...accountDashboard, invoice_number: value })
                            // onUpdateRow(0,{...accountDashboard, invoice_number:value} )

                            // setAccountDashboard((prev: any) => {
                            //     const newData: any = [...prev];
                            //     newData[0] = {
                            //       ...newData[0],
                            //     //   company_id: accountDashboard?.company_id,
                            //       invoice_number: value,
                                  
                            //     };
                            //     return newData;
                            //   })
                            setAccountDashboard({...accountDashboard,invoice_number:value })
                            }
                    />
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text=" INVOICE AMOUNT :" />
                    <UnlabeledInput
                    
type="number"
                    
                        value={accountDashboard.invoice_amount}
                        onchange={(value) =>{
                            //  setAccountDashboard({ ...accountDashboard, invoice_amount: value })
                            // onUpdateRow(0,{...accountDashboard, invoice_amount:parseInt(value)} )
                          if(value){
                            // setAccountDashboard((prev: any) => {
                            //     const newData: any = [...prev];
                            //     newData[0] = {
                            //       ...newData[0],
                            //     invoice_amount: parseInt(value),
                                  
                            //     };
                            //     return newData;
                            //   })
                            setAccountDashboard({...accountDashboard,invoice_amount:value })
                            }
                            else{
                                // setAccountDashboard((prev: any) => {
                                //     const newData: any = [...prev];
                                //     newData[0] = {
                                //       ...newData[0],
                                //     invoice_amount: parseInt(''),
                                      
                                //     };
                                //     return newData;
                                //   })
                                setAccountDashboard({...accountDashboard,invoice_amount:value })
                            }
                            }}
                        
                    />
                </UpdateContentBox>
            </div>
        </FullScreenModal>
    )
}