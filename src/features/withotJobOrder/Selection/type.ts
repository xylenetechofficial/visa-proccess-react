export interface SelectionInterface {
  id?: number;
  company_id: number;
  company_name?: string;
  job_order_id: number;
  name: string;
  passport_no: string;
  pp_issued_date?: string;
  pp_expiry_date?: string;
  place_of_issue?: string;
  actual_profession: string;
  total_salary: number;
  basic_salary: number;
  ha_or_ta_provided: number;
  ha: number;
  ta: number;
  fa_provided: number;
  fa: number;
  other_allowance: number;
  agent: string;
  agent_name?: string;
  age: number;
  sector: number;
  sector_name?: string;
  selection_status: string;
  contact_no: string;
  date_of_birth: string;
  place_of_birth: string;
  address: string;
  nominee_name: string;
  nominee_relation: string;
  religion: string;

  visa_authorization: number;
  visa_submission: string;
  division: string;
  createAt: string;
}
export interface SelectionAdapter {
  id?: number;
  company_id: number;
  company_name?: string;
  job_order_id: number;
  name: string;
  passport_no: string;
  pp_issued_date?: string;
  pp_expiry_date?: string;
  place_of_issue?: string;
  actual_profession: string;
  total_salary: number;
  basic_salary: number;
  ha_or_ta_provided: number;
  ha: number;
  ta: number;
  fa_provided: number;
  fa: number;
  other_allowance: number;
  agent: string;
  agent_name?: string;
  age: number;
  sector: number;
  sector_name?: string;
  selection_status: string;
  contact_no: string;
  date_of_birth: string;
  place_of_birth: string;
  address: string;
  nominee_name: string;
  nominee_relation: string;
  religion: string;

  visa_authorization: number;
  visa_submission: string;
  division: string;
  created_at: string;
}

export class SelectionConverter {
  // private i: SelectionInterface
  // private a: SelectionAdapter

  /**
   * toInterface
   */
  public static toInterface(a: SelectionAdapter) {
    const data: SelectionInterface = {
      id: a.id,
      company_id: a.company_id,
      company_name: a.company_name,
      job_order_id: a.job_order_id,
      name: a.name,
      passport_no: a.passport_no,
      pp_issued_date: a.pp_issued_date,
      pp_expiry_date: a.pp_expiry_date,
      place_of_issue: a.place_of_issue,
      actual_profession: a.actual_profession,
      total_salary: a.total_salary,
      basic_salary: a.basic_salary,
      ha_or_ta_provided: a.ha_or_ta_provided,
      ha: a.ha,
      ta: a.ta,
      fa_provided: a.fa_provided,
      fa: a.fa,
      other_allowance: a.other_allowance,
      agent: a.agent,
      agent_name: a.agent_name,
      age: a.age,
      sector: a.sector,
      sector_name: a.sector_name,
      selection_status: a.selection_status,
      contact_no: a.contact_no,
      date_of_birth: a.date_of_birth,
      place_of_birth: a.place_of_birth,
      address: a.address,
      nominee_name: a.nominee_name,
      nominee_relation: a.nominee_relation,
      religion: a.religion,
      visa_authorization: a.visa_authorization,
      visa_submission: a.visa_submission,
      division: a.division,
      createAt: a.created_at,
    };
    return data;
  }

  /**
   * to interface list
   */
  public static toInterfaceList(i_list: SelectionAdapter[]) {
    const data_list: SelectionInterface[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }
  /**
   * toAdapter
   */
  public static toAdapter(i: SelectionInterface) {
    const data: SelectionAdapter = {
      id: i.id,
      company_id: i.company_id,
      company_name: i.company_name,
      job_order_id: i.job_order_id,
      name: i.name,
      passport_no: i.passport_no,
      pp_issued_date: i.pp_issued_date,
      pp_expiry_date: i.pp_expiry_date,
      place_of_issue: i.place_of_issue,
      actual_profession: i.actual_profession,
      total_salary: i.total_salary,
      basic_salary: i.basic_salary,
      ha_or_ta_provided: i.ha_or_ta_provided,
      ha: i.ha,
      ta: i.ta,
      fa_provided: i.fa_provided,
      fa: i.fa,
      other_allowance: i.other_allowance,
      agent: i.agent,
      agent_name: i.agent_name,
      age: i.age,
      sector: i.sector,
      sector_name: i.sector_name,
      selection_status: i.selection_status,
      contact_no: i.contact_no,
      date_of_birth: i.date_of_birth,
      place_of_birth: i.place_of_birth,
      address: i.address,
      nominee_name: i.nominee_name,
      nominee_relation: i.nominee_relation,
      religion: i.religion,
      visa_authorization: i.visa_authorization,
      visa_submission: i.visa_submission,
      division: i.division,
      created_at: i.createAt,
    };
    return data;
  }

  /**
   * toAdapter list
   */
  public static toAdapterList(i_list: SelectionInterface[]) {
    const data_list: SelectionAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}
