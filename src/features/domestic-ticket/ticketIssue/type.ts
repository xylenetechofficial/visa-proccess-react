import { convertDateFormat } from "../../../utils/function";
import { readCompanyList } from "../../masters/company/repository";
import { CompanyInterface } from "../../masters/company/type";
import { InterviewSchedulePeriodInterface } from "../interviewSchedulePeriod/type";

export interface TicketIssueInterface {
  id?: number;
  interviewSchedulePeriodId: number;
  date: string;
}

export interface TicketIssueAdapter {
  id?: number;
  interview_schedule_period_id: number;
  date: string;
}

export class TicketIssueConverter {
  public static toInterface(a: TicketIssueAdapter) {
    const data: TicketIssueInterface = {
      id: a.id,
      date: a.date,
      interviewSchedulePeriodId: a.interview_schedule_period_id,
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: TicketIssueInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: TicketIssueAdapter = {
      id: i.id,
      date: i.date,
      interview_schedule_period_id: i.interviewSchedulePeriodId,
    };
    return data;
  }
}

export const convertinterviewSchedulePeriodOptions = (
  TicketIssuePeriodList: InterviewSchedulePeriodInterface[],
  companyList: CompanyInterface[]
) => {
  const data: { name: string; value: any }[] = [];
  for (let i = 0; i < TicketIssuePeriodList.length; i++) {
    const interviewSchedulePeriod = TicketIssuePeriodList[i];

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
      value: TicketIssuePeriodList[i].id,
      name: `${companyName} - ${convertDateFormat(
        interviewSchedulePeriod.fromDate
      )} - ${convertDateFormat(interviewSchedulePeriod.toDate)}`,
    });

    // if copany found break the loop
    if (companyName != "") break;
  }

  return data;
};
