import { useState, useEffect } from "react";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";

import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { FullScreenModal } from "../../../../componenets/Modal";
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
import { readVisaAuthorisationList } from "../../../masters/visaAuthorization/repository";
import { VisaAuthorisationInterface } from "../../../masters/visaAuthorization/type";
import { ActiveIndexListInterface } from "../type2";
import { CustomRadioButton } from "../../../../componenets/RadioButton";





export default function Main(props: {
  onClose: () => void,
  editindexActiveList: ActiveIndexListInterface,
  setEditIndexActiveList: (value: ActiveIndexListInterface) => void,
  onClickUpdatEditIndexActiveList: () => void
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
  console.log(props.editindexActiveList)
  return (
    <> <FullScreenModal
      buttonName="Submit"
      handleClick={() => {
        props.onClickUpdatEditIndexActiveList()
        props.onClose()
      }}
      title="Index Edit"
      onClose={props.onClose}
    >
      <div className=" grid grid-cols-1 py-3  gap-2 shadow">
        <UpdateContentBox>
          <SubHeading1 text="Index Date :" />
          <SubHeading1 text={props.editindexActiveList.index_date} />
        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="company name :" />
          <SubHeading1 text={props.editindexActiveList.company_name} />

        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="Party Code:" />
          <SubHeading1 text={String(props.editindexActiveList.party_code)} />

        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="job order:" />
          <SubHeading1 text={props.editindexActiveList.job_order_no} />

        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="country :" />
          <SubHeading1 text={String(props.editindexActiveList.country)} />
          {/* <SubHeading1 text={props.reIssue.s} /> */}
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="quantity:" />
          <SubHeading1 text={String(props.editindexActiveList.quantity)} />

        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="visa date (Arabic) :" />
          <DateInput id="date" value={props.editindexActiveList.visa_date_arabic} onChange={(value) => props.setEditIndexActiveList({ ...props.editindexActiveList, visa_date_arabic: value })} />
          {/* name Input */}

        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="visa number:" />
          <UnlabeledInput value={props.editindexActiveList.visa_number} onchange={(value) => props.setEditIndexActiveList({ ...props.editindexActiveList, visa_number: value })} />
          {/* name Input */}

        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="visa fee :" />
          <UnlabeledInput type="number" value={props.editindexActiveList.visa_fee} onchange={(value) => props.setEditIndexActiveList({ ...props.editindexActiveList, visa_fee: parseInt(value) })} />
          {/* name Input */}

        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="visa issue date :" />
          <DateInput value={props.editindexActiveList.visa_issue_date} onChange={(value) => props.setEditIndexActiveList({ ...props.editindexActiveList, visa_issue_date: value })} id={""} />
          {/* name Input */}

        </UpdateContentBox>


        <UpdateContentBox>
          <SubHeading1 text="visa authorization :" />
          <CustomSelectComponentUnlabeled
            value={props.editindexActiveList.visa_authorization}
            onChange={(value) => props.setEditIndexActiveList({ ...props.editindexActiveList, visa_submission: value })}
            options={selectOptionConveter({ options: visaAuhorisationList, options_struct: { name: "name", value: "id" } })}
          />

        </UpdateContentBox>


        <UpdateContentBox>
          <SubHeading1 text="visa submission :" />
          <UnlabeledInput value={props.editindexActiveList.visa_submission} onchange={(value) => props.setEditIndexActiveList({ ...props.editindexActiveList, visa_submission: value })} />
          {/* name Input */}

        </UpdateContentBox>


        <UpdateContentBox>
          <SubHeading1 text="arabic sponsor name :" />
          <UnlabeledInput value={props.editindexActiveList.aravic_sponsor_name} onchange={(value) => props.setEditIndexActiveList({ ...props.editindexActiveList, aravic_sponsor_name: value })} />
          {/* name Input */}

        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="sponsor id :" />
          <UnlabeledInput value={props.editindexActiveList.sponsor_id} onchange={(value) => props.setEditIndexActiveList({ ...props.editindexActiveList, sponsor_id: value })} />
          {/* name Input */}

        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="visa expiry date :" />
          <DateInput value={props.editindexActiveList.visa_expiry_date} onChange={(value) => props.setEditIndexActiveList({ ...props.editindexActiveList, visa_expiry_date: value })} id={""} />
          {/* name Input */}

        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="division :" />
          <UnlabeledInput value={props.editindexActiveList.division} onchange={(value) => props.setEditIndexActiveList({ ...props.editindexActiveList, division: value })} />
          {/* name Input */}

        </UpdateContentBox>

        <UpdateContentBox>
          <SubHeading1 text="visa accountable :" />
          <CustomRadioButton
            inlined
            value={props.editindexActiveList.visa_accountable}
            onChange={(value) => props.setEditIndexActiveList({ ...props.editindexActiveList, visa_accountable: parseInt(value) })}
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