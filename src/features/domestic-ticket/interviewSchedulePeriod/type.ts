export interface InterviewSchedulePeriodInterface {
  id?: number;
  company: number;
  fromDate: string;
  toDate: string;
  job_order_id?: number;

  job_order_no?: string;
  om_name?: string;
  rm_name?: string;
  rs_name?: string;
  rc_name?: string;
}

export interface InterviewSchedulePeriodAdapter {
  id?: number;
  client_id: number;
  from_date: string;
  to_date: string;
  job_order_id?: number;

  job_order_no?: string;
  om_name?: string;
  rm_name?: string;
  rs_name?: string;
  rc_name?: string;
}

export class InterviewSchedulePeriodConverter {
  public static toInterface(a: InterviewSchedulePeriodAdapter) {
    const data: InterviewSchedulePeriodInterface = {
      id: a.id,
      company: a.client_id,
      fromDate: a.from_date,
      toDate: a.to_date,
      job_order_id: a.job_order_id,

      job_order_no: a.job_order_no,
      om_name: a.om_name,
      rm_name: a.rm_name,
      rs_name: a.rs_name,
      rc_name: a.rc_name,
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
      id: i.id,
      client_id: i.company,
      from_date: i.fromDate,
      to_date: i.toDate,
      job_order_id: i.job_order_id,

      job_order_no: i.job_order_no,
      om_name: i.om_name,
      rm_name: i.rm_name,
      rs_name: i.rs_name,
      rc_name: i.rc_name,
    };
    return data;
  }
}
