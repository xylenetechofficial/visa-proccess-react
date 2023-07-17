import { convertDateFormat } from "../../../utils/function";
import { readCompanyList } from "../../masters/company/repository";
import { CompanyInterface } from "../../masters/company/type";
import { InterviewSchedulePeriodInterface } from "../interviewSchedulePeriod/type";

export interface InterviewScheduleInterface {
  id?: number;
  interviewSchedulePeriodId: number;
  date: string;
  sectorId: number;
  staff: string;
  noOfPerson: number;
}

export interface InterviewScheduleAdapter {
  id?: number;
  interview_schedule_period_id: number;
  date: string;
  sector_id: number;
  staff: string;
  no_person: number;
}

export class InterviewScheduleConverter {
  public static toInterface(a: InterviewScheduleAdapter) {
    const data: InterviewScheduleInterface = {
      id: a.id,
      date: a.date,
      interviewSchedulePeriodId: a.interview_schedule_period_id,
      noOfPerson: a.no_person,
      sectorId: a.sector_id,
      staff: a.staff,
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: InterviewScheduleInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: InterviewScheduleAdapter = {
      id: i.id,
      date: i.date,
      interview_schedule_period_id: i.interviewSchedulePeriodId,
      no_person: i.noOfPerson,
      sector_id: i.sectorId,
      staff: i.staff,
    };
    return data;
  }
}

export const convertinterviewSchedulePeriodOptions = (
  InterviewSchedulePeriodList: InterviewSchedulePeriodInterface[],
  companyList: CompanyInterface[]
) => {
  const data: { name: string; value: any }[] = [];
  for (let i = 0; i < InterviewSchedulePeriodList.length; i++) {
    const interviewSchedulePeriod = InterviewSchedulePeriodList[i];

    let companyName = "";
    for (let j = 0; j < companyList.length; j++) {
      const company = companyList[j];
      // if copany found break the loop
      if (company.id == interviewSchedulePeriod.company) {
        companyName = company.name;
        break;
      }
    }

    data.push({
      value: InterviewSchedulePeriodList[i].id,
      name: `${companyName} - ${convertDateFormat(
        interviewSchedulePeriod.fromDate
      )} - ${convertDateFormat(interviewSchedulePeriod.toDate)}`,
    });

    // if copany found break the loop
    if (companyName != "") break;
  }

  return data;
};
