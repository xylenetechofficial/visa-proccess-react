import {
  SubHeading1,
  UpdateContentBox,
} from "../../../../componenets/CoustomHeader";
import { VisaProfessionEditInterface } from "../type2";
import { TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";
import { MediumContentModal } from "../../../../componenets/Modal";



export default function Main(props: {
  onClose: () => void;
  onClickUpdateVisaProEdit: () => void;
  visaProEditList: VisaProfessionEditInterface;
  setVisaProEditList: (value: VisaProfessionEditInterface) => void;
}) {
  return (
    <>
      <MediumContentModal
        title="Dead Visa Quantity"
        onClose={props.onClose}
        buttonName="Submit"
        cancelButtonName="Cancel"
        handleClick={() => {
          props.onClickUpdateVisaProEdit();
        }}
      >
        
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
          <UnlabeledInput
            value={props.visaProEditList.visa_quantity}
            type="number"
            onchange={(value) =>
              props.setVisaProEditList({
                ...props.visaProEditList,
                visa_quantity: parseInt(value),
              })
            }
          />
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
      </MediumContentModal>
  
    </>
  );
}
