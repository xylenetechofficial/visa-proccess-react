export interface InterviewSchedulePeriodInterface {
  id?: number;
  company: number;
  fromDate: string;
  toDate: string;
  job_order?:string,
}

export interface InterviewSchedulePeriodAdapter {
  id?: number;
  client_id: number;
  from_date: string;
  to_date: string;
  job_order?:string,
}

export class InterviewSchedulePeriodConverter {
public static toInterface(a: InterviewSchedulePeriodAdapter) {
  const data: InterviewSchedulePeriodInterface = {
    id: a.id,
    company: a.client_id,
    fromDate: a.from_date,
    toDate: a.to_date,
    job_order:a.job_order
  
  };
  return data;
}

/**
 * toAdapter
 */
public static toAdapter(i: InterviewSchedulePeriodInterface) {
  console.log("i"); // Only Dev
  console.log(i); // Only Dev
  const data: InterviewSchedulePeriodAdapter = {
    id:i.id,
    client_id: i.company,
    from_date: i.fromDate,
    to_date: i.toDate,
    job_order:i.job_order
  };
  return data;
}
}