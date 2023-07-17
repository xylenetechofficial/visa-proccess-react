import { string } from "prop-types";

export interface MofaEntryInterface {
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
  visa_profession: string;
  mofa_number: string;
  pp_copy: string;
  visa_authorization: number;
  visa_submission: string;
  division: string;
  createAt: string;
  isChecked?: boolean;
  rc_name?: string;
}
export interface MofaEntryAdapter {
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
  visa_profession: string;
  mofa_number: string;
  pp_copy: string;
  visa_authorization: number;
  visa_submission: string;
  division: string;
  created_at: string;
  rc_name?: string;
}

export class MofaEntryConverter {
  // private i: MofaEntryInterface
  // private i: MofaEntryAdapter

  /**
   * toInterface
   */
  public static toInterface(i: MofaEntryAdapter) {
    const data: MofaEntryInterface = {
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
      createAt: i.created_at,
      mofa_number: i.mofa_number,
      pp_copy: i.pp_copy,
      visa_profession: i.visa_profession,
      rc_name: i.rc_name,
    };
    return data;
  }

  /**
   * to interface list
   */
  public static toInterfaceList(i_list: MofaEntryAdapter[]) {
    const data_list: MofaEntryInterface[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }
  /**
   * toAdapter
   */
  public static toAdapter(i: MofaEntryInterface) {
    const data: MofaEntryAdapter = {
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
      mofa_number: i.mofa_number,
      pp_copy: i.pp_copy,
      visa_profession: i.visa_profession,
      rc_name: i.rc_name,
    };
    return data;
  }

  /**
   * toAdapter list
   */
  public static toAdapterList(i_list: MofaEntryInterface[]) {
    const data_list: MofaEntryAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}

// ############################################################

export interface MofaPaymentInterface {
  id?: number;
  name: string;
  created_at: string;
  updated_at: string;
  total_mofa_payment: number;
  used_mofa_payment: number;
  balance_mofa_payment: number;
}

export interface MofaPaymentAdapter {
  id?: number;
  name: string;
  created_at: string;
  updated_at: string;
  total_mofa_payment: number;
  used_mofa_payment: number;
  balance_mofa_payment: number;
}

export class MofaPaymentConverter {
  // private i: MofaPaymentInterface
  // private i: MofaPaymentAdapter

  /**
   * toInterface
   */
  public static toInterface(i: MofaPaymentAdapter) {
    const data: MofaPaymentInterface = {
      id: i.id,
      name: i.name,
      created_at: i.created_at,
      updated_at: i.updated_at,
      total_mofa_payment: i.total_mofa_payment,
      used_mofa_payment: i.used_mofa_payment,
      balance_mofa_payment: i.balance_mofa_payment,
    };

    return data;
  }

  /**
   * to interface list
   */
  public static toInterfaceList(i_list: MofaPaymentAdapter[]) {
    const data_list: MofaPaymentInterface[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }
  /**
   * toAdapter
   */
  public static toAdapter(i: MofaPaymentInterface) {
    const data: MofaPaymentAdapter = {
      id: i.id,
      name: i.name,
      created_at: i.created_at,
      updated_at: i.updated_at,
      total_mofa_payment: i.total_mofa_payment,
      used_mofa_payment: i.used_mofa_payment,
      balance_mofa_payment: i.balance_mofa_payment,
    };
    return data;
  }

  /**
   * toAdapter list
   */
  public static toAdapterList(i_list: MofaPaymentInterface[]) {
    const data_list: MofaPaymentAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}
