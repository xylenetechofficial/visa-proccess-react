import { convertDateFormat } from "../../../utils/function";

export interface Mofa_Entry_Candidate_Interface {
  id?: number;
  name: string;
  company_name?: string;
  party_code?: string;
  passport_no: string;
  actual_profession: string;
  division: string;
  agent_name: string;
  rs_name: string;
  rm_name: string;
  rc_name: string;
  visa_profession: string;
  mofa_number: string;
  pp_copy: string;
  pp_issued_date: string;
  pp_expiry_date: string;
  place_of_issue: string;
  date_of_birth: string;
  place_of_birth: string;
  address: string;
  religion: string;
  payment_from: string;
  visa_authorization?: number;
  checked?: boolean;

  select_status: string;
  visa_issue_date: string;
  visa_received_date: string;
}

export interface Mofa_Entry_Candidate_Adapter {
  id?: number;
  company_name?: string;
  party_code?: string;
  name: string;
  passport_no: string;
  actual_profession: string;
  division: string;
  agent_name: string;
  rs_name: string;
  rm_name: string;
  rc_name: string;
  visa_profession: string;
  mofa_number: string;
  pp_copy: string;
  pp_issued_date: string;
  pp_expiry_date: string;
  place_of_issue: string;
  date_of_birth: string;
  place_of_birth: string;
  address: string;
  religion: string;
  payment_from: string;
  visa_authorization?: number;
  select_status: string;

  visa_issue_date: string;
  visa_received_date: string;
}

export class Mofa_Entry_Converter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: Mofa_Entry_Candidate_Adapter) {
    const data: Mofa_Entry_Candidate_Interface = {
      id: a.id,
      company_name: a.company_name,
      party_code: a.party_code,
      name: a.name,
      passport_no: a.passport_no,
      actual_profession: a.actual_profession,
      division: a.division,
      agent_name: a.agent_name,
      rs_name: a.rs_name,
      rm_name: a.rm_name,
      rc_name: a.rc_name,
      visa_profession: a.visa_profession,
      mofa_number: a.mofa_number,
      pp_copy: a.pp_copy,
      pp_issued_date: a.pp_issued_date,
      pp_expiry_date: a.pp_expiry_date,
      place_of_issue: a.place_of_issue,
      date_of_birth: a.date_of_birth,
      place_of_birth: a.place_of_birth,
      address: a.address,
      religion: a.religion,
      payment_from: a.payment_from,
      visa_authorization: a.visa_authorization,

      select_status: a.select_status,

      visa_issue_date: a.visa_issue_date,
      visa_received_date: a.visa_received_date,
    };

    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: Mofa_Entry_Candidate_Interface) {
    const data: Mofa_Entry_Candidate_Adapter = {
      id: i.id,
      company_name: i.company_name,
      party_code: i.party_code,
      name: i.name,
      passport_no: i.passport_no,
      actual_profession: i.actual_profession,
      division: i.division,
      agent_name: i.agent_name,
      rs_name: i.rs_name,
      rm_name: i.rm_name,
      rc_name: i.rc_name,
      visa_profession: i.visa_profession,
      mofa_number: i.mofa_number,
      pp_copy: i.pp_copy,
      pp_issued_date: i.pp_issued_date,
      pp_expiry_date: i.pp_expiry_date,
      place_of_issue: i.place_of_issue,
      date_of_birth: i.date_of_birth,
      place_of_birth: i.place_of_birth,
      address: i.address,
      religion: i.religion,
      payment_from: i.payment_from,
      visa_authorization: i.visa_authorization,

      select_status: i.select_status,

      visa_issue_date: i.visa_issue_date,
      visa_received_date: i.visa_received_date,
    };
    return data;
  }

  public static toAdapterList(i_list: Mofa_Entry_Candidate_Interface[]) {
    const data_list: Mofa_Entry_Candidate_Adapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }

  public static toInterfaceList(a_list: Mofa_Entry_Candidate_Adapter[]) {
    const data_list: Mofa_Entry_Candidate_Interface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toInterface(element));
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

// #######################################

export interface BulkPaymentInterface {
  id?: number;
  agent_id: number;
  agent_name: string;
  amount: number;
  description: string;
  created_at?: string;
  available_amount: number;

  checked?: boolean;
}

export interface BulkPaymentAdapter {
  id?: number;
  agent_id: number;
  agent_name: string;
  amount: number;
  description: string;
  created_at?: string;
  available_amount: number;
}

export class BulkPaymentConverter {
  /**
   * toInterface
   */
  public static toInterface(i: BulkPaymentAdapter) {
    const data: BulkPaymentInterface = {
      id: i.id,
      agent_id: i.agent_id,
      agent_name: i.agent_name,
      amount: i.amount,
      description: i.description,
      created_at: i.created_at,
      available_amount: i.available_amount,
    };

    return data;
  }

  /**
   * to interface list
   */
  public static toInterfaceList(i_list: BulkPaymentAdapter[]) {
    const data_list: BulkPaymentInterface[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }
  /**
   * toAdapter
   */
  public static toAdapter(i: BulkPaymentInterface) {
    const data: BulkPaymentAdapter = {
      id: i.id,
      agent_id: i.agent_id,
      agent_name: i.agent_name,
      amount: i.amount,
      description: i.description,
      created_at: i.created_at,
      available_amount: i.available_amount,
    };
    return data;
  }

  /**
   * toAdapter list
   */
  public static toAdapterList(i_list: BulkPaymentInterface[]) {
    const data_list: BulkPaymentAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}
