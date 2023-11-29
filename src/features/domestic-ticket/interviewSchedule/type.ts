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
  staff_list: StaffAndClientInterface[];
  noOfPerson: number;
  client: string;
  client_list: StaffAndClientInterface[];
  noOfClient: number;

  company_name?: string;
  sector_name?: string;
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

export interface InterviewScheduleAdapter {
  id?: number;
  interview_schedule_period_id: number;
  date: string;
  sector_id: number;
  staff: string;
  staff_list: StaffAndClientInterface[];
  no_person: number;
  client: string;
  client_list: StaffAndClientInterface[];
  noOfClient: number;

  company_name?: string;
  sector_name?: string;
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
      client: a.client,
      noOfClient: a.noOfClient,

      company_name: a.company_name,
      sector_name: a.sector_name,
      staff_list: a.staff_list,
      client_list: a.client_list,
    };
    return data;
  }


    public static toInterfaceList(a_list: InterviewScheduleAdapter[]) {
    const data_list: InterviewScheduleInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
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
      client: i.client,
      noOfClient: i.noOfClient,

      company_name: i.company_name,
      sector_name: i.sector_name,
      staff_list: i.staff_list,
      client_list: i.client_list,
    };
    return data;
  }


  
  public static toAdapterList(i_list: InterviewScheduleInterface[]) {
    const data_list: InterviewScheduleAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
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
