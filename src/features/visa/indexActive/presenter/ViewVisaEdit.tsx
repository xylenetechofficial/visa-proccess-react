import {
  SubHeading1,
  UpdateContentBox,
} from "../../../../componenets/CoustomHeader";
import { GreenButton, RedButton } from "../../../../componenets/CustomButton";
import { Box } from "@mui/material";
import { VisaProfessionEditInterface } from "../type2";
import { TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function Main(props: {
  onClose: () => void;
  onClickUpdateVisaProEdit: () => void;
  visaProEditList: VisaProfessionEditInterface;
  setVisaProEditList: (value: VisaProfessionEditInterface) => void;
}) {
  return (
    <>
      <Box sx={style}>
        <h3 className="mb-4 text-2xl align-center font-medium text-gray-900 dark:text-white">
          Dead Visa Quantity
        </h3>
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
            <SubHeading1 text="Index Date :" />
            <SubHeading1 text={props.visaProEditList.index_date} />
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="company name :" />
            <SubHeading1 text={props.visaProEditList.company_name} />
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="Party Code:" />
            <SubHeading1 text={props.visaProEditList.party_code} />
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="Available Visa QTY In Index :" />
            <SubHeading1 text={String(props.visaProEditList.visa_quantity)} />
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="Available Visa Profession Qty in Block visa :" />
            <SubHeading1 text={String(props.visaProEditList.visa_quantity)} />
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="visa profession :" />
            <SubHeading1 text={props.visaProEditList.visa_profession} />
          </UpdateContentBox>
          <UpdateContentBox>
            <SubHeading1 text="ARBIC visa category :" />
            {props.visaProEditList.aravic_visa_category}
            {/* name Input */}
          </UpdateContentBox>

          <UpdateContentBox>
            <SubHeading1 text="Visa Quantity: " />
            <UnlabeledInput value={props.visaProEditList.visa_quantity} 
type="number"
                     onchange={(value)=>props.setVisaProEditList({...props.visaProEditList, visa_quantity:parseInt(value)})}/>
            {/* name Input */}
          </UpdateContentBox>

          <div className="flex items-center">
            <div>
              <SubHeading1 text="Dead Visa Quantity remark:" />
            </div>
            <div className="flex items-center gap-1">
              <UnlabeledInput
                
type="number"
                    
                value={props.visaProEditList.dead_visa_qty}
                onchange={(value) =>
                  props.setVisaProEditList({
                    ...props.visaProEditList,
                    dead_visa_qty: parseInt(value),
                  })
                }
              />
              <TextAreaInput
                id="remark"
                value={props.visaProEditList.remarks}
                onChange={(value) =>
                  props.setVisaProEditList({
                    ...props.visaProEditList,
                    remarks: value,
                  })
                }
              />
            </div>

            {/* name Input */}
          </div>

          <div className="grid grid-cols-2 shadow-sm">
            <GreenButton
              text="Submit"
              onClick={() => {
                props.onClickUpdateVisaProEdit();
              }}
            />
            <RedButton
              text="cancel"
              onClick={() => {
                props.onClose();
              }}
            />
          </div>
        </div>
      </Box>
    </>
  );
}
