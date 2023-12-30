import { createInterviewSchedulePeriod } from "../repository";
import { useEffect, useState } from "react";
import ModalContent from "../../../../componenets/Modal";
import { DateInput } from "../../../../componenets/Input";
import { InterviewSchedulePeriodInterface } from "../type";
import {
  CustomSelectComponent,
  selectOptionConveter,
} from "../../../../componenets/SelectBox";
import { CompanyInterface } from "../../../masters/company/type";
import { readJobOrderList } from "../../../job-dpt/jobOrder/repository";
import { JobOrderInterface } from "../../../job-dpt/jobOrder/type";

export default function Main(props: {
  onClose: () => void;
  fetchInterviewSchedulePeriodList: () => void;
  companyList: CompanyInterface[];
}) {
  const [jobOrderList, setJobOrderList] = useState<JobOrderInterface[]>([]);
  const initialValue: InterviewSchedulePeriodInterface = {
    company: 0,
    fromDate: "",
    toDate: "",
    job_order_id: 0,
  };
  const [interviewSchedulePeriod, setInterviewSchedulePeriod] =
    useState<InterviewSchedulePeriodInterface>(initialValue);

  async function onClickAdd() {
    // call create
    //add job_order property
    await createInterviewSchedulePeriod(interviewSchedulePeriod);

    setInterviewSchedulePeriod(initialValue);

    props.fetchInterviewSchedulePeriodList();
    props.onClose();
  }
  const fetchJobOrder = async (company_id: number) => {
    setJobOrderList([]);
    const res = await readJobOrderList(0, { company_id: company_id });
    if (res) {
      console.log(res, "fetch job order");
      setJobOrderList(res);
    }
  };
  useEffect(() => {
    // fetchJobOrder();
  }, []);
  return (
    <ModalContent
      title="Add Interview Schedule Period"
      onClose={props.onClose}
      buttonName="Add"
      handleClick={onClickAdd}
    >
      {/* Comapany */}
      <CustomSelectComponent
        required
        value={interviewSchedulePeriod.company}
        label="Company"
        options={selectOptionConveter({
          options: props.companyList,
          options_struct: { name: "name", value: "id" },
        })}
        onChange={(value) => {
          fetchJobOrder(value);
          setInterviewSchedulePeriod({
            ...interviewSchedulePeriod,
            company: value,
          });
        }}
      />

      {/* from data */}
      <DateInput
        id="interviewScheduleperiodFromdate"
        label="From date"
        required
        onChange={(value: string) =>
          setInterviewSchedulePeriod({
            ...interviewSchedulePeriod,
            fromDate: value,
          })
        }
        value={interviewSchedulePeriod.fromDate}
      />

      {/* to date */}
      <DateInput
        id="interviewScheduleperiodFromdate"
        label="To date"
        required
        onChange={(value: string) =>
          setInterviewSchedulePeriod({
            ...interviewSchedulePeriod,
            toDate: value,
          })
        }
        value={interviewSchedulePeriod.toDate}
      />

      {/* JobOrder */}
      <CustomSelectComponent
        value={interviewSchedulePeriod.job_order_id}
        label="Job Order"
        options={selectOptionConveter({
          options: jobOrderList,
          options_struct: { name: "jobOrderNumber", value: "id" },
        })}
        onChange={(value) => {
          setInterviewSchedulePeriod({
            ...interviewSchedulePeriod,
            job_order_id: value,
          });
        }}
      />
    </ModalContent>
  );
}
