import { useState, useEffect } from "react";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";

import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { FullScreenModal } from "../../../../componenets/Modal";
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
import { readVisaAuthorisationList } from "../../../masters/visaAuthorization/repository";
import { VisaAuthorisationInterface } from "../../../masters/visaAuthorization/type";
import { FullIndexListInterface } from "../type2";
import { CustomRadioButton } from "../../../../componenets/RadioButton";





export default function Main(props: {
  onClose: () => void,
  editindexFullList: FullIndexListInterface,
  setEditIndexFullList: (value: FullIndexListInterface) => void,
  onClickUpdatEditIndexFullList: () => void
}) {

  const [visaAuhorisationList, setvisaAuhorisationList] = useState<VisaAuthorisationInterface[]>([])
  const fetchvisaAuhorisationList = async () => {
    const data = await readVisaAuthorisationList();
    if (data) {
      setvisaAuhorisationList(data);
    }
  }
  useEffect(() => {
    fetchvisaAuhorisationList();
  }, [])
  console.log(props.editindexFullList)
  return (
    <> <FullScreenModal
      buttonName="Submit"
      handleClick={() => {
        props.onClickUpdatEditIndexFullList()
        props.onClose()
      }}
      title="Index Edit"
      onClose={props.onClose}
    >
      <div className=" grid grid-cols-1 py-3  gap-2 shadow">
        <UpdateContentBox>
          <SubHeading1 text="Index Date :" />
          <SubHeading1 text={props.editindexFullList.index_date} />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="company name :" />
          <SubHeading1 text={props.editindexFullList.company_name} />

        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="Party Code:" />
          <SubHeading1 text={String(props.editindexFullList.party_code)} />

        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="job order:" />
          <SubHeading1 text={props.editindexFullList.job_order_no} />

        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="country :" />
          <SubHeading1 text={String(props.editindexFullList.country)} />
          {/* <SubHeading1 text={props.reIssue.s} /> */}
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="quantity:" />
          <SubHeading1 text={String(props.editindexFullList.quantity)} />

        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="visa date (Arabic) :" />
          <DateInput id="date" value={props.editindexFullList.visa_date_arabic} onChange={(value) => props.setEditIndexFullList({ ...props.editindexFullList, visa_date_arabic: value })} />
          {/* name Input */}

        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="visa number:" />
          <UnlabeledInput value={props.editindexFullList.visa_number} onchange={(value) => props.setEditIndexFullList({ ...props.editindexFullList, visa_number: value })} />
          {/* name Input */}

        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="visa fee :" />
          <UnlabeledInput 
// type="number"
                     value={props.editindexFullList.visa_fee} onchange={(value) => props.setEditIndexFullList({ ...props.editindexFullList, visa_fee: parseInt(value) })} />
          {/* name Input */}

        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="visa issue date :" />
          <DateInput value={props.editindexFullList.visa_issue_date} onChange={(value) => props.setEditIndexFullList({ ...props.editindexFullList, visa_issue_date: value })} id={""} />
          {/* name Input */}

        </UpdateContentBox>


        <UpdateContentBox>
          <SubHeading1 text="visa authorization :" />
          <CustomSelectComponentUnlabeled
            value={props.editindexFullList.visa_authorization}
            onChange={(value) => props.setEditIndexFullList({ ...props.editindexFullList, visa_submission: value })}
            options={selectOptionConveter({ options: visaAuhorisationList, options_struct: { name: "name", value: "id" } })}
          />

        </UpdateContentBox>


        <UpdateContentBox>
          <SubHeading1 text="visa submission :" />
          <UnlabeledInput value={props.editindexFullList.visa_submission} onchange={(value) => props.setEditIndexFullList({ ...props.editindexFullList, visa_submission: value })} />
          {/* name Input */}

        </UpdateContentBox>


        <UpdateContentBox>
          <SubHeading1 text="arabic sponsor name :" />
          <UnlabeledInput value={props.editindexFullList.aravic_sponsor_name} onchange={(value) => props.setEditIndexFullList({ ...props.editindexFullList, aravic_sponsor_name: value })} />
          {/* name Input */}

        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="sponsor id :" />
          <UnlabeledInput value={props.editindexFullList.sponsor_id} onchange={(value) => props.setEditIndexFullList({ ...props.editindexFullList, sponsor_id: value })} />
          {/* name Input */}

        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="visa expiry date :" />
          <DateInput value={props.editindexFullList.visa_expiry_date} onChange={(value) => props.setEditIndexFullList({ ...props.editindexFullList, visa_expiry_date: value })} id={""} />
          {/* name Input */}

        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="division :" />
          <UnlabeledInput value={props.editindexFullList.division} onchange={(value) => props.setEditIndexFullList({ ...props.editindexFullList, division: value })} />
          {/* name Input */}

        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="visa accountable :" />
          <CustomRadioButton
            inlined
            value={props.editindexFullList.visa_accountable}
            onChange={(value) => props.setEditIndexFullList({ ...props.editindexFullList, visa_accountable: parseInt(value) })}
            option={[
              { name: "Yes", value: 1 },
              { name: "No", value: 0 },
            ]}
          />
        </UpdateContentBox>


      </div>

    </FullScreenModal>


    </>
  )
}