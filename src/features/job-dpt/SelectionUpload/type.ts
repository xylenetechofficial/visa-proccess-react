export interface SelectionInterface {
  id?: number;
  company_id: number;
  company_name?: string;
  job_order_id: number;
  job_order_no?: string;
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

export interface ExcelSelectionAdapter {
  Id: number;
  Name: string;
  "PP No": string;
  "Actual Profession": string;
  "Total Salary": number;
  "BASIC SALARY (SR)": number;
  "HA/TA PROVIDED ": number;
  "HA (SR)": number;
  "TA (SR)": number;
  "FA PROVIDED": number;
  "FA (SR)": number;
  "OTHER ALLOWANCE": number;
  AGENT: string;
  SECTOR: string;
  "PP Issue date": string;
  "Pp Expire date": string;
  "Place of issue": string;
  AGE: number;
  "SELECTION STATUS": string;
  "CONTACT NO": string;
  "DATE OF BIRTH": string;
  "PLACE OF BIRTH": string;
  ADDRESS: string;
  "NOMINEE NAME": string;
  "NOMINEE RELATION": string;
  RELIGION: string;
}

export interface SelectionAdapter {
  id?: number;
  company_id: number;
  company_name?: string;
  job_order_id: number;
  job_order_no?: string;
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
      job_order_no: a.job_order_no,
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

  public static toInterfaceFromExcel(a: ExcelSelectionAdapter) {
    let actual_profession;
    const data: SelectionInterface = {
      id: 0,
      company_id: 0,
      company_name: "",
      job_order_id: 0,
      job_order_no: "",
      name: a.Name,
      passport_no: a["PP No"],
      pp_issued_date: a["PP Issue date"],
      pp_expiry_date: a["Pp Expire date"],
      place_of_issue: a["Place of issue"],
      actual_profession: a["Actual Profession"],
      total_salary: a["Total Salary"],
      basic_salary: a["BASIC SALARY (SR)"],
      ha_or_ta_provided: a["HA/TA PROVIDED "],
      ha: a["HA (SR)"],
      ta: a["TA (SR)"],
      fa_provided: a["FA PROVIDED"],
      fa: a["FA (SR)"],
      other_allowance: a["OTHER ALLOWANCE"],
      agent: a.AGENT,
      agent_name: a.AGENT,
      age: a.AGE,
      sector: 0,
      sector_name: a.SECTOR,
      selection_status: a["SELECTION STATUS"],
      contact_no: a["CONTACT NO"],
      date_of_birth: a["DATE OF BIRTH"],
      place_of_birth: a["PLACE OF BIRTH"],
      address: a.ADDRESS,
      nominee_name: a["NOMINEE NAME"],
      nominee_relation: a["NOMINEE RELATION"],
      religion: a.RELIGION,
      visa_authorization: 0,
      visa_submission: "",
      division: "",
      createAt: "",
    };
    return data;
  }

  public static toInterfaceFromExcelList(i_list: ExcelSelectionAdapter[]) {
    const data_list: SelectionInterface[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toInterfaceFromExcel(element));
    }

    return data_list;
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
      age: i.age,
      sector: i.sector,
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
