export interface SendToActualMofaEntryInterface {
  id?: number;
  company_id: number;
  company_name?: string;
  job_order_id: number;
  party_code: number;
  job_order_actual_profession: string;
  job_order_sector: string;
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
  visa_authorisation_name?: string;
  visa_submission: string;
  division: string;
  createAt: string;
  isChecked?: boolean;
  rc_name?: string;
}

export interface SendToActualMofaEntryAdapter {
  id?: number;
  company_id: number;
  company_name?: string;
  job_order_id: number;
  party_code: number;
  job_order_actual_profession: string;
  job_order_sector: string;
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
  visa_authorisation_name?: string;
  visa_submission: string;
  division: string;
  created_at: string;
  rc_name?: string;
}

export class SendToActualMofaEntryConverter {
  // private i: SendToActualMofaEntryInterface
  // private i: SendToActualMofaEntryAdapter

  /**
   * toInterface
   */
  public static toInterface(i: SendToActualMofaEntryAdapter) {
    const data: SendToActualMofaEntryInterface = {
      id: i.id,
      company_id: i.company_id,
      company_name: i.company_name,
      job_order_id: i.job_order_id,
      party_code: i.party_code,
      job_order_actual_profession: i.job_order_actual_profession,
      job_order_sector: i.job_order_sector,
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
      visa_authorisation_name: i.visa_authorisation_name,
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
  public static toInterfaceList(i_list: SendToActualMofaEntryAdapter[]) {
    const data_list: SendToActualMofaEntryInterface[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }
  /**
   * toAdapter
   */
  public static toAdapter(i: SendToActualMofaEntryInterface) {
    const data: SendToActualMofaEntryAdapter = {
      id: i.id,
      company_id: i.company_id,
      company_name: i.company_name,
      job_order_id: i.job_order_id,
      party_code: i.party_code,
      job_order_actual_profession: i.job_order_actual_profession,
      job_order_sector: i.job_order_sector,
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
      visa_authorisation_name: i.visa_authorisation_name,
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
  public static toAdapterList(i_list: SendToActualMofaEntryInterface[]) {
    const data_list: SendToActualMofaEntryAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}

// ############################################################

export interface WJO_ActualProfessionInterface {
  id?: number;
  name: string;
}

export interface JobOrderSectorList {
  id: number;
  name: string;
}

export interface VisaProfessionList {
  id: number;
  name: string;
}
export interface PartyCodeInterface {
  name: string;
  job_order_id: number;
  party_code: number;
  company: number;
  job_order_actual_profession_list: WJO_ActualProfessionInterface[];
  job_order_sector_list: JobOrderSectorList[];
  visa_profession_list: VisaProfessionList[];
  job_order_sector: string;
}

export interface PartyCodeAdapter {
  name: string;
  job_order_id: number;
  party_code: number;
  company: number;
  job_order_actual_profession_list: WJO_ActualProfessionInterface[];
  job_order_sector_list: JobOrderSectorList[];
  visa_profession_list: VisaProfessionList[];
  job_order_sector: string;
}

export class PartyCodeConverter {
  // private i: PartyCodeInterface
  // private i: PartyCodeAdapter

  /**
   * toInterface
   */
  public static toInterface(i: PartyCodeAdapter) {
    const data: PartyCodeInterface = {
      name: i.name,
      job_order_id: i.job_order_id,
      party_code: i.party_code,
      company: i.company,
      job_order_actual_profession_list: i.job_order_actual_profession_list,
      job_order_sector_list: i.job_order_sector_list,
      visa_profession_list: i.visa_profession_list,
      job_order_sector: i.job_order_sector,
    };

    return data;
  }

  /**
   * to interface list
   */
  public static toInterfaceList(i_list: PartyCodeAdapter[]) {
    const data_list: PartyCodeInterface[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }
  /**
   * toAdapter
   */
  public static toAdapter(i: PartyCodeInterface) {
    const data: PartyCodeAdapter = {
      name: i.name,
      job_order_id: i.job_order_id,
      party_code: i.party_code,
      company: i.company,
      job_order_actual_profession_list: i.job_order_actual_profession_list,
      job_order_sector_list: i.job_order_sector_list,
      visa_profession_list: i.visa_profession_list,
      job_order_sector: i.job_order_sector,
    };
    return data;
  }

  /**
   * toAdapter list
   */
  public static toAdapterList(i_list: PartyCodeInterface[]) {
    const data_list: PartyCodeAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}
