import { convertDateFormat } from "../../../utils/function";
import { readCompanyList } from "../../masters/company/repository";
import { CompanyInterface } from "../../masters/company/type";
import { InterviewSchedulePeriodInterface } from "../interviewSchedulePeriod/type";

export interface TicketIssueInterface {
  id?: number;
  interview_schedule_period_id?: number;
  interview_schedule_id: number;
  staff_list: StaffAndClientInterface[];
  client_list: StaffAndClientInterface[];
}
export interface StaffAndClientInterface {
  id?: number;
  name: string;
  ticket_amount: number;
  travel_by: string;
  hotel_amount: number;
  other_expenses: number;
  total_amount: number;
  remarks: string;
}
export interface TicketIssueAdapter {
  id?: number;
  interview_schedule_id: number;
  staff_list: StaffAndClientInterface[];
  client_list: StaffAndClientInterface[];
}

export class TicketIssueConverter {
  public static toInterface(a: TicketIssueAdapter) {
    const data: TicketIssueInterface = {
      id: a.id,
      interview_schedule_id: a.interview_schedule_id,
      staff_list: a.staff_list,
      client_list: a.client_list,
    };
    return data;
  }
  

    public static toInterfaceList(a_list: TicketIssueAdapter[]) {
    const data_list: TicketIssueInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: TicketIssueInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: TicketIssueAdapter = {
      id: i.id,
      interview_schedule_id: i.interview_schedule_id,
      staff_list: i.staff_list,
      client_list: i.client_list,
    };
    return data;
  }
  

  
  public static toAdapterList(i_list: TicketIssueInterface[]) {
    const data_list: TicketIssueAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
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
