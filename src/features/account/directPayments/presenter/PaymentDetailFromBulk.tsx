import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader"
import { DateInput } from "../../../../componenets/Input"
import { FullScreenModal } from "../../../../componenets/Modal"
import { CustomSelectComponentUnlabeled } from "../../../../componenets/SelectBox"
import { convertDateFormat } from "../../../../utils/function"
import PaymentDetailBulkTable from "./PaymentDetailBulkTable"
import { Box } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
};
export default function Main(props:
    {
        onClose: any,
        paymentDetail: any[],
        detailData: any
    }) {
    const onClickAdd = () => {
console.log("first")
    }
console.log(props.detailData,'detailData')
    return (
        <>
            {/*         
        <FullScreenModal
            buttonName="Update"
            handleClick={onClickAdd}
            title="Update Block Visa"
            onClose={props.onClose}
        > */}

            <Box sx={style}>
                <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">Payment Detail</h3>
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

                <div className="grid grid-cols-1 py-3  gap-2 shadow">
                    <UpdateContentBox>

                        <SubHeading1 text="AGENT NAME  :" />
                        {props.detailData.agent_name}
                    </UpdateContentBox>
                    <UpdateContentBox>

                        <SubHeading1 text="BULK PAYMENT AMOUNT  :" />
                        {props.detailData.used_amount}
                    </UpdateContentBox>
                    <UpdateContentBox>

                        <SubHeading1 text="BULK PAYMENT DETAILS  :" />
                        {props.detailData.description}
                    </UpdateContentBox>
                    <UpdateContentBox>

                        <SubHeading1 text="BULK PAYMENT DATE  :" />
                        {convertDateFormat(props.detailData.created_at)}
                    </UpdateContentBox>


                </div>


                <PaymentDetailBulkTable
                    paymentDetail={props.paymentDetail}
                    onChange={(value) => console.log("Df")}
                />

            </Box>
            

        </>
    )
}