import { UpdateMofaEntry } from "../repository";
import { useEffect, useState } from "react";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { Mofa_Entry_Candidate_Interface } from "../type";

import CandidateTable from "./CandidateTable";
import {
  SubHeading1,
  UpdateContentBox,
} from "../../../../componenets/CoustomHeader";
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import {
  CustomSelectComponentUnlabeled,
  selectOptionConveter,
  selectOptionConveterv2,
} from "../../../../componenets/SelectBox";
import { ReligionList } from "../../../db";
import { AgentInterface } from "../../../masters/agent/type";

export default function Main(props: {
  onClose: () => void;
  currentElement: Mofa_Entry_Candidate_Interface;
  AgentList: AgentInterface[];
  fetchMofaEntryCandiateList: () => void;
}) {
  const initValue: Mofa_Entry_Candidate_Interface = {
    id: 0,
    name: "",
    passport_no: "",
    actual_profession: "",
    division: "",
    agent_id: 0,
    agent_name: "",
    rs_name: "",
    rm_name: "",
    rc_name: "",
    visa_profession: "",
    mofa_number: "",
    pp_copy: "",
    pp_issued_date: "",
    pp_expiry_date: "",
    place_of_issue: "",
    date_of_birth: "",
    place_of_birth: "",
    address: "",
    religion: "",
    payment_from: "",

    select_status: "",
    visa_issue_date: "",
    visa_issue_date_on_pp: "",
  };

  const [localRowData, setLocalRowData] =
    useState<Mofa_Entry_Candidate_Interface>(initValue);

  async function handleUpdate() {
    // call create
    const res = await UpdateMofaEntry(
      props.currentElement.id ?? 0,
      localRowData
    );
    if (res.code != 201) {
      return;
    }
    // fetchSourcingCollectionDashboardCandidate();
    props.fetchMofaEntryCandiateList();
    props.onClose();
  }

  // const [candidateList, setCandidateList] = useState<Src_Col_Dash_CandidateInterface[]>([])
  // const fetchSourcingCollectionDashboardCandidate = async () => {
  //     const data = await readSourcingCollectionDashboardCandidate(props.currentElement.id ?? 0, "yes");
  //     if (data) {
  //         setCandidateList(data);
  //     }
  // }
  useEffect(() => {
    // fetchSourcingCollectionDashboardCandidate();
    setLocalRowData(props.currentElement);
  }, []);

  // unset function

  return (
    <ModalContent
      buttonName="Update"
      handleClick={handleUpdate}
      title="Update Mofa Entry"
      onClose={props.onClose}
    >
      <div className=" grid grid-cols-1 py-3  gap-2 shadow">
        <UpdateContentBox>
          <SubHeading1 text=" Name :" />
          <UnlabeledInput
            value={localRowData.name}
            onchange={(value) =>
              setLocalRowData({ ...localRowData, name: value })
            }
          />
        </UpdateContentBox>

        {/* <UpdateContentBox>
                <SubHeading1 text="CANDIDATE  :" />

            </UpdateContentBox> */}
        <UpdateContentBox>
          <SubHeading1 text="Passport No  :" />
          <UnlabeledInput
            value={localRowData.passport_no}
            onchange={(value) =>
              setLocalRowData({ ...localRowData, passport_no: value })
            }
          />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="Actual Profession :" />
          {localRowData.actual_profession}
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="Division:" />
          {localRowData.division}
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="Agent Name:" />
          <CustomSelectComponentUnlabeled
            onChange={(value) =>
              setLocalRowData({ ...localRowData, agent_id: value })
            }
            options={selectOptionConveter({
              options: props.AgentList,
              options_struct: { name: "name", value: "id" },
            })}
            value={localRowData.agent_id}
          />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="RS Name :" />
          {localRowData.rs_name}
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text=" RM Name:" />
          {localRowData.rm_name}
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="RC Name:" />
          {localRowData.rc_name}
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="Visa Profession:" />
          {/* {localRowData.visa_profession} */}
          <UnlabeledInput
            value={localRowData.visa_profession}
            onchange={(value) =>
              setLocalRowData({ ...localRowData, visa_profession: value })
            }
          />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="Mofa Number :" />
          <UnlabeledInput
            value={localRowData.mofa_number}
            onchange={(value) =>
              setLocalRowData({ ...localRowData, mofa_number: value })
            }
          />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="PP/Copy:" />
          <CustomSelectComponentUnlabeled
            value={localRowData.pp_copy}
            onChange={(value) =>
              setLocalRowData({ ...localRowData, pp_copy: value })
            }
            options={[
              { name: "PP", value: "PP" },
              { name: "COPY", value: "COPY" },
              // { name: "RAISE INVOICE", value: "RAISE INVOICE" }
            ]}
          />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="PP Issue Date:" />
          <DateInput
            id="jbvh6d5r"
            value={localRowData.pp_issued_date}
            onChange={(value) =>
              setLocalRowData({ ...localRowData, pp_issued_date: value })
            }
          />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="PP Expiry Date :" />
          <DateInput
            id="dkjbvh6d5r"
            value={localRowData.pp_expiry_date}
            onChange={(value) =>
              setLocalRowData({ ...localRowData, pp_expiry_date: value })
            }
          />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="Place Of Issue :" />
          <UnlabeledInput
            value={localRowData.place_of_issue}
            onchange={(value) =>
              setLocalRowData({ ...localRowData, place_of_issue: value })
            }
          />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="Date Of Birth  :" />
          <DateInput
            id="dkjbvh6d5r"
            value={localRowData.date_of_birth}
            onChange={(value) =>
              setLocalRowData({ ...localRowData, date_of_birth: value })
            }
          />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text=" Place of birth :" />
          <UnlabeledInput
            value={localRowData.place_of_birth}
            onchange={(value) =>
              setLocalRowData({ ...localRowData, place_of_birth: value })
            }
          />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="Address  :" />
          <UnlabeledInput
            value={localRowData.address}
            onchange={(value) =>
              setLocalRowData({ ...localRowData, address: value })
            }
          />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="Religion  :" />
          <CustomSelectComponentUnlabeled
            value={localRowData.religion}
            onChange={(value) =>
              setLocalRowData({ ...localRowData, religion: value })
            }
            options={ReligionList}
          />
        </UpdateContentBox>
        <UpdateContentBox>
          <SubHeading1 text="Payment From :" />
          {localRowData.payment_from}
        </UpdateContentBox>
      </div>
      {/* <GreenButton text="Update" onClick={handleUpdate} /> */}
    </ModalContent>
  );
}
