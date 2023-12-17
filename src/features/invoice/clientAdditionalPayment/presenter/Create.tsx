import { useEffect, useState } from "react"
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader"
import { DateInput, UnlabeledInput } from "../../../../componenets/Input"
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox"
import { Box } from "@mui/material"
import { GreenButton, RedButton } from "../../../../componenets/CustomButton"
import { createClientPayment } from "../repository"
import { readCompanyList } from "../../../masters/company/repository"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
};


export default function Main(props: {
    onClose: () => void,
    fetchClientAdditionalInvoiceList: () => void,
}) {

    const initValue: any = {

        company_id: 0,
        invoice_number: '',
        invoice_date: '',
        amount: 0,
        date: '',
        description: ''
    }

    const [clientAdditionalPayment, setClientAdditionalPayment] = useState(initValue)
    const [companyList, setCompanyList] = useState<any>([]);
    const fetchCompanyList = async () => {
        setCompanyList(await readCompanyList(true))
    }
    useEffect(() => {
        fetchCompanyList()
    }, [])
    async function onClickUpdate() {

        // call create
        const newArray: any = clientAdditionalPayment;
        const flag = await createClientPayment(newArray);
        if (!flag) {
            return;
        }
        setClientAdditionalPayment(initValue)

        props.fetchClientAdditionalInvoiceList();
        props.onClose();
    }

    return (


        <Box sx={style}>
            <h3 className="mb-4 text-2xl align-center font-medium text-gray-900 dark:text-white">Client Additional Payment Add</h3>
            <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => props.onClose()}
            >
                <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>

            <div className=" grid grid-cols-1 py-3  gap-2 shadow">
                <UpdateContentBox>
                    <SubHeading1 text=" Company :" />
                    <CustomSelectComponentUnlabeled
                        onChange={(value) => setClientAdditionalPayment({ ...clientAdditionalPayment, company_id: value })}

                        options={selectOptionConveter({ options: companyList, options_struct: { name: "name", value: "id" } })}
                        value={clientAdditionalPayment.company_id}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="INVOICE NUMBER  :" />
                    <UnlabeledInput
                        value={clientAdditionalPayment.invoice_number}
                        onchange={(value) => setClientAdditionalPayment({ ...clientAdditionalPayment, invoice_number: value })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text="INVOICE DATE  :" />
                    <DateInput
                        id="sd;fksdakj"
                        value={clientAdditionalPayment.invoice_date}
                        onChange={(value) => setClientAdditionalPayment({ ...clientAdditionalPayment, invoice_date: value })}
                    />
                </UpdateContentBox>

                <UpdateContentBox>

                    <SubHeading1 text="AMOUNT RECEIVED (INR)  :" />
                    <UnlabeledInput
                        type="number"
                        value={clientAdditionalPayment.amount}
                        onchange={(value) => setClientAdditionalPayment({ ...clientAdditionalPayment, amount: parseInt(value) })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>

                    <SubHeading1 text=" DATE  :" />
                    <DateInput
                        id="sd;fksdakj"
                        value={clientAdditionalPayment.date}
                        onChange={(value) => setClientAdditionalPayment({ ...clientAdditionalPayment, date: value })}
                    />
                </UpdateContentBox>


                <UpdateContentBox>
                    <SubHeading1 text=" PAYMENT DESCRIPTION :" />
                    <UnlabeledInput
                        value={clientAdditionalPayment.description}
                        onchange={(value) => setClientAdditionalPayment({ ...clientAdditionalPayment, description: value })}
                    />
                </UpdateContentBox>
                <div className="grid grid-cols-2 shadow ">
                    <GreenButton text="Submit" onClick={() => { props.onClose(), onClickUpdate() }} />
                    <RedButton text="cancel" onClick={() => { props.onClose() }} />
                </div>
            </div>
        </Box>
    )
}