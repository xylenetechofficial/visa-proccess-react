export interface AgentPaymentInterface {
  outstanding_since_2015: number;
  payment_against_2015: number;
  balance_since_2015: number;
  total_payment_received: number;
  total_balance_outstanding: number;
  payment_returned_to_agent: number;
  cancelled_candidates: number;
  rejected_candidates: number;
  flight_candidates: number;
  amount_available_for_adjustment: number;
  table_data_list: AgentPaymentTableInterface[];

  bulk_payment_list: BulkPaymentInterface[];
  all_bulk_payment_list: BulkPaymentInterface[];
}
export interface AgentPaymentAdapter {
  outstanding_since_2015: number;
  payment_against_2015: number;
  balance_since_2015: number;
  total_payment_received: number;
  total_balance_outstanding: number;
  payment_returned_to_agent: number;
  cancelled_candidates: number;
  rejected_candidates: number;
  flight_candidates: number;
  amount_available_for_adjustment: number;
  table_data_list: AgentPaymentTableInterface[];

  bulk_payment_list: BulkPaymentInterface[];
  all_bulk_payment_list: BulkPaymentInterface[];
}

export interface BulkPaymentInterface {
  id: number;
  party_code: number;
  company_name: string;
  name: string;
  passport_no: string;
  actual_profession: string;
  visa_profession: string;
  agent_name: string;
  visa_received_date: string;
  visa_authorization: string;
  photo_charges: number;
  training_charges: number;
  other_charges: number;
  document_charges: number;
  service_charges: number;
  partial_charges: number;
  sector_charges: number;
  consulate_setting_charges: number;
  ticket_charges: number;
  attestation_charges: number;
  consolidated_charges: number;
  penalty_after_deployment: number;
  extra_service_tax: number;
  agent_commission: number;
  discount_amount: number;
  received: number;
  balance_amount: number;
  amount: number;
  advance: null;
  payment_date: null;
}
export interface AddAgentPaymentInterface {
  selection_list: AddSelectionAgentPaymentInterface[];
}

export interface AddAgentPaymentAdapter {
  selection_list: AddSelectionAgentPaymentAdapter[];
}

export class AddAgentPaymentConverter {
  public static toInterface(
    a: AddAgentPaymentAdapter
  ): AddAgentPaymentInterface {
    console.log(a, "kkkkkk");
    const data: AddAgentPaymentInterface = {
      selection_list: a?.selection_list?.map((item) => ({
        id: item.id,
        amount: item.amount,
        bulk_payment_id: item.bulk_payment_id,
        advance: item.advance,
        payment_date: item.payment_date,
      })),
    };
    return data;
  }

  public static toAdapter(i: AddAgentPaymentInterface): AddAgentPaymentAdapter {
    console.log(i, "iiiii");
    const data: AddAgentPaymentAdapter = {
      selection_list: i?.selection_list?.map((item) => ({
        id: item.id,
        amount: item.amount,
        bulk_payment_id: item.bulk_payment_id,
        advance: item.advance,
        payment_date: item.payment_date,
      })),
    };
    return data;
  }
}

export interface AddSelectionAgentPaymentInterface {
  id: number;
  amount: number;
  bulk_payment_id: number;
  advance: number;
  payment_date: string;
}

export interface AddSelectionAgentPaymentAdapter {
  id: number;
  amount: number;
  bulk_payment_id: number;
  advance: number;
  payment_date: string;
}

export interface AgentPaymentAddInterface {
  agent_id: number;
  amount: number;
  description: string;
}
export interface AgentPaymentAddAdapter {
  agent_id: number;
  amount: number;
  description: string;
}

export class AgentPaymentAddConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: AgentPaymentAddAdapter) {
    const data: AgentPaymentAddInterface = {
      agent_id: a.agent_id,
      amount: a.amount,
      description: a.description,
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: AgentPaymentAddInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: AgentPaymentAddAdapter = {
      agent_id: i.agent_id,
      amount: i.amount,
      description: i.description,
    };
    return data;
  }
}

export class AgentPaymentConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: AgentPaymentAdapter) {
    const data: AgentPaymentInterface = {
      outstanding_since_2015: a.outstanding_since_2015,
      payment_against_2015: a.payment_against_2015,
      balance_since_2015: a.balance_since_2015,
      total_payment_received: a.total_payment_received,
      total_balance_outstanding: a.total_balance_outstanding,
      payment_returned_to_agent: a.payment_returned_to_agent,
      cancelled_candidates: a.cancelled_candidates,
      rejected_candidates: a.rejected_candidates,
      flight_candidates: a.flight_candidates,
      amount_available_for_adjustment: a.amount_available_for_adjustment,
      table_data_list: a.table_data_list.map((item) => ({ ...item })),

      bulk_payment_list: a.bulk_payment_list.map((item) => ({ ...item })),
      all_bulk_payment_list: a.all_bulk_payment_list,
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: AgentPaymentInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: AgentPaymentAdapter = {
      outstanding_since_2015: i.outstanding_since_2015,
      payment_against_2015: i.payment_against_2015,
      balance_since_2015: i.balance_since_2015,
      total_payment_received: i.total_payment_received,
      total_balance_outstanding: i.total_balance_outstanding,
      payment_returned_to_agent: i.payment_returned_to_agent,
      cancelled_candidates: i.cancelled_candidates,
      rejected_candidates: i.rejected_candidates,
      flight_candidates: i.flight_candidates,
      amount_available_for_adjustment: i.amount_available_for_adjustment,
      table_data_list: i.table_data_list.map((item) => ({ ...item })),

      bulk_payment_list: i.bulk_payment_list.map((item) => ({ ...item })),
      all_bulk_payment_list: i.all_bulk_payment_list,
    };
    return data;
  }
}

export interface AgentPaymentTableInterface {
  actual_profession: string;
  advance: number;
  agent_commission: number;
  agent_name: string;
  amount: number;
  attestation_charges: number;
  balance_amount: number;
  color_code:string,
  candidate_dropdown_name: string;
  company_name: string;
  consolidated_charges: number;
  consulate_setting_charges: number;
  discount_amount: number;
  document_charges: number;
  extra_service_tax: number;
  id: number;
  is_without: number;
  name: string;
  other_charges: number;
  partial_charges: number;
  party_code: number;
  passport_no: string;
  payment_date: string;
  penalty_after_deployment: number;
  photo_charges: number;
  received: number;
  sector_charges: number;
  service_charges: number;
  ticket_charges: number;
  training_charges: number;
  visa_authorization: number;
  visa_profession: string;
  visa_received_date: string;
}

export interface AgentPaymentByIDInterface {
  agent_id?: number;
  passport_no?: string;
}
export interface AgentPaymentByIDAdapter {
  agent_id?: number;
  passport_no?: string;
}

export class AgentPaymentByIDConverter {
  // private i: AgentPaymentByIDInterface
  // private a: AgentPaymentByIDAdapter

  /**
   * toInterface
   */

  public static toInterface(a: AgentPaymentByIDAdapter) {
    const data: AgentPaymentByIDInterface = {
      agent_id: a.agent_id,
      passport_no: a.passport_no,
    };
    return data;
  }
  /**
   * toAdapter
   */
  public static toAdapter(i: AgentPaymentByIDInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: AgentPaymentByIDAdapter = {
      agent_id: i.agent_id,
      passport_no: i.passport_no,
    };
    return `agent_id=${i.agent_id}&passport_no=${i.passport_no}`;
  }
}
