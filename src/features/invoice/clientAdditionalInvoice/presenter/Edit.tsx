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


console.log(props.immigrationData,"aaaaaaaaaaa")
    async function onClickAdd() {

        // call create
        
        const newArray :any = accountDashboard;
        console.log(newArray[0],"llllllllllll")
        const flag :any = await updateClientAdditionalInvoice(newArray[0]?.id, newArray[0]);
        // const flag = await props.createClientAdditionalInvoiceTemp(newArray);
        if (!flag) {
            props.onClose();
            props.fetchClientAdditionalInvoiceList();
            return;
        }
        // setAccountDashboard(initValue)
        
        
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
                            setAccountDashboard((prev: any) => {
                                const newData: any = [...prev];
                                newData[0] = {
                                  ...newData[0],
                                  company_id: accountDashboard[0]?.company_id,
                                //   invoice_date: accountDashboard[0]?.invoice_date,
                                  
                                };
                                return newData;
                              })
                            }

                        options={selectOptionConveter({ options: companyList, options_struct: { name: "name", value: "id" } })}
                        value={accountDashboard[0].company_id}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="INVOICE DATE  :" />
                    <DateInput
                        id="sd;fksdakj"
                        value={accountDashboard[0].invoice_date}
                        onChange={(value) =>
                            //  setAccountDashboard({ ...accountDashboard, invoice_date: value })
                            // onUpdateRow(0,{...accountDashboard, invoice_date:value} )
                            setAccountDashboard((prev: any) => {
                                const newData: any = [...prev];
                                newData[0] = {
                                  ...newData[0],
                                //   company_id: accountDashboard[0]?.company_id,
                                  invoice_date: value,
                                  
                                };
                                return newData;
                              })
                            }
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="INVOICE NUMBER  :" />
                    <UnlabeledInput
                        value={accountDashboard[0].invoice_number}
                        onchange={(value) =>
                            //  setAccountDashboard({ ...accountDashboard, invoice_number: value })
                            // onUpdateRow(0,{...accountDashboard, invoice_number:value} )

                            setAccountDashboard((prev: any) => {
                                const newData: any = [...prev];
                                newData[0] = {
                                  ...newData[0],
                                //   company_id: accountDashboard[0]?.company_id,
                                  invoice_number: value,
                                  
                                };
                                return newData;
                              })
                            }
                    />
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text=" INVOICE AMOUNT :" />
                    <UnlabeledInput
                    
// type="number"
                    
                        value={accountDashboard[0].invoice_amount}
                        onchange={(value) =>{
                            //  setAccountDashboard({ ...accountDashboard, invoice_amount: value })
                            // onUpdateRow(0,{...accountDashboard, invoice_amount:parseInt(value)} )
                          if(value){
                            setAccountDashboard((prev: any) => {
                                const newData: any = [...prev];
                                newData[0] = {
                                  ...newData[0],
                                invoice_amount: parseInt(value),
                                  
                                };
                                return newData;
                              })
                            }
                            else{
                                setAccountDashboard((prev: any) => {
                                    const newData: any = [...prev];
                                    newData[0] = {
                                      ...newData[0],
                                    invoice_amount: parseInt(''),
                                      
                                    };
                                    return newData;
                                  })
                            }
                            }}
                        
                    />
                </UpdateContentBox>
            </div>
        </FullScreenModal>
    )
}