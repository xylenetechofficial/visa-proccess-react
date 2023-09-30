
export interface AccountDashboardInterface {
  actual_profession: string,
  agent_commision: string,
  agent_name: string,
  air_ticket: string,
  company_name: string,
  consulate_setting_charges: string,
  division: string,
  document_charges: number,
  id: number,
  is_invoice: string,
  name: string,
  partial_charges: string,
  party_code: number,
  passport_no: string,
  process_charges: string,
  rc_name: string,
  reason: string,
  sector_charges: string,
  ticket_charges: string,
  visa_authorization: string,
  visa_profession: string,
  visa_received_date: string
}

export interface ServerAdapter {
  block_visa: AccountDashboardAdapter,
  visa_profession_list: []
}


export interface AccountDashboardAdapter {
  actual_profession: string,
  agent_commision: string,
  agent_name: string,
  air_ticket: string,
  company_name: string,
  consulate_setting_charges: string,
  division: string,
  document_charges: number,
  id: number,
  is_invoice: string,
  name: string,
  partial_charges: string,
  party_code: number,
  passport_no: string,
  process_charges: string,
  rc_name: string,
  reason: string,
  sector_charges: string,
  ticket_charges: string,
  visa_authorization: string,
  visa_profession: string,
  visa_received_date: string
}

export interface CandidateRejectInterface {
  client_invoice: string,
  penalty_amount: number,
  mistake_by: string

}

export interface CandidateRejectAdapter {

  client_invoice: string,
  penalty_amount: number,
  mistake_by: string
}

export class CandidateRejectConverter {
  // private i: CandidateRejectInterface
  // private a: CandidateRejectAdapter

  /**
   * toInterface
   */
  public static toInterface(a: CandidateRejectAdapter) {
    const data: CandidateRejectInterface = {
      client_invoice: a.client_invoice,
      penalty_amount: a.penalty_amount,
      mistake_by: a.mistake_by
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: CandidateRejectInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: CandidateRejectAdapter = {
      client_invoice: i.client_invoice,
      penalty_amount: i.penalty_amount,
      mistake_by: i.mistake_by
    };
    return data;
  }
}


export class AccountDashboardConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: AccountDashboardAdapter) {
    const data: AccountDashboardInterface = {
      actual_profession: a.actual_profession,
      agent_commision: a.agent_commision,
      agent_name: a.agent_name,
      air_ticket: a.air_ticket,
      company_name: a.company_name,
      consulate_setting_charges: a.consulate_setting_charges,
      division: a.division,
      document_charges: a.document_charges,
      id: a.id,
      is_invoice: a.is_invoice,
      name: a.name,
      partial_charges: a.partial_charges,
      party_code: a.party_code,
      passport_no: a.passport_no,
      process_charges: a.process_charges,
      rc_name: a.rc_name,
      reason: a.reason,
      sector_charges: a.sector_charges,
      ticket_charges: a.ticket_charges,
      visa_authorization: a.visa_authorization,
      visa_profession: a.visa_profession,
      visa_received_date: a.visa_received_date,

    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: AccountDashboardInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: AccountDashboardAdapter = {

      actual_profession: i.actual_profession,
      agent_commision: i.agent_commision,
      agent_name: i.agent_name,
      air_ticket: i.air_ticket,
      company_name: i.company_name,
      consulate_setting_charges: i.consulate_setting_charges,
      division: i.division,
      document_charges: i.document_charges,
      id: i.id,
      is_invoice: i.is_invoice,
      name: i.name,
      partial_charges: i.partial_charges,
      party_code: i.party_code,
      passport_no: i.passport_no,
      process_charges: i.process_charges,
      rc_name: i.rc_name,
      reason: i.reason,
      sector_charges: i.sector_charges,
      ticket_charges: i.ticket_charges,
      visa_authorization: i.visa_authorization,
      visa_profession: i.visa_profession,
      visa_received_date: i.visa_received_date,


    };
    return data;
  }
}

export interface VisaProfesionInterface {

  visa_profession: string,
  arabic_visa_category: string,
  block_visa_id: number,
  quantity: number
}

export interface VisaProfesionAdapter {

  visa_profession: string,
  arabic_visa_category: string,
  block_visa_id: number,
  quantity: number
}



export class VisaProfesionConverter {
  // private i: VisaProfesionInterface
  // private a: VisaProfesionAdapter

  /**
   * toInterface
   */
  public static toInterface(a: VisaProfesionAdapter) {
    const data: VisaProfesionInterface = {
      visa_profession: a.visa_profession,
      arabic_visa_category: a.arabic_visa_category,
      block_visa_id: a.block_visa_id,
      quantity: a.quantity
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: VisaProfesionInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: VisaProfesionAdapter = {
      visa_profession: i.visa_profession,
      arabic_visa_category: i.arabic_visa_category,
      block_visa_id: i.block_visa_id,
      quantity: i.quantity
    };
    return data;
  }
}


export interface AgentPaymentReceivedInterface {
  actual_profession: string,
  agent_name: string,
  amount_received: number,
  company_name: string,
  consulate_setting_charges: string,
  dd_charges: string
  document_charges: number,
  extra_service_tax: string
  id: number,
  name: string,
  other_charges: string,
  partial_charges: string,
  party_code: number,
  passport_no: string,
  photo_charges: string,
  training_charges: string,
  sector_charges: string,
  service_charges: string
  visa_profession: string,

}

export interface AgentPaymentReceivedAdapter {
  actual_profession: string,
  agent_name: string,
  amount_received: number,
  company_name: string,
  consulate_setting_charges: string,
  dd_charges: string
  document_charges: number,
  extra_service_tax: string
  id: number,
  name: string,
  other_charges: string,
  partial_charges: string,
  party_code: number,
  passport_no: string,
  photo_charges: string,
  training_charges: string,
  sector_charges: string,
  service_charges: string
  visa_profession: string,
}
export class AgentPaymentReceivedConverter {

  // private i: AgentPaymentReceivedInterface
  // private a: AgentPaymentReceivedAdapter

  /**
   * toInterface
   */
  public static toInterface(a: AgentPaymentReceivedAdapter) {
    const data: AgentPaymentReceivedInterface = {
      actual_profession: a.actual_profession,
      agent_name: a.agent_name,
      amount_received: a.amount_received,
      company_name: a.company_name,
      consulate_setting_charges: a.consulate_setting_charges,
      dd_charges: a.dd_charges,
      document_charges: a.document_charges,
      extra_service_tax: a.extra_service_tax,
      id: a.id,
      name: a.name,
      other_charges: a.other_charges,
      partial_charges: a.partial_charges,
      party_code: a.party_code,
      passport_no: a.passport_no,
      photo_charges: a.photo_charges,
      training_charges: a.training_charges,
      sector_charges: a.sector_charges,
      service_charges: a.service_charges,
      visa_profession: a.visa_profession,
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: AgentPaymentReceivedInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: AgentPaymentReceivedAdapter = {
      actual_profession: i.actual_profession,
      agent_name: i.agent_name,
      amount_received: i.amount_received,
      company_name: i.company_name,
      consulate_setting_charges: i.consulate_setting_charges,
      dd_charges: i.dd_charges,
      document_charges: i.document_charges,
      extra_service_tax: i.extra_service_tax,
      id: i.id,
      name: i.name,
      other_charges: i.other_charges,
      partial_charges: i.partial_charges,
      party_code: i.party_code,
      passport_no: i.passport_no,
      photo_charges: i.photo_charges,
      training_charges: i.training_charges,
      sector_charges: i.sector_charges,
      service_charges: i.service_charges,
      visa_profession: i.visa_profession,
    };
    return data;
  }

}


export interface DelhiOtherDailyPaymentInterface {
  "id": number,
  "candidate_name": string,
  "passport_no": string,
  "party_code": number,
  "company_id": number,
  "company_name": string,
  "agent_id": string,
  "agent_name": string,
  "total_service_charges": number,
  "dad_amount": number,
  "received_date": string,
  "dad_service_tax": string,
  "service_tax_received": string,
  "is_without": number,
  "amount":number,
  "description":string,

}
export interface DelhiOtherDailyPaymentAdapter {
  "id": number,
  "candidate_name": string,
  "passport_no": string,
  "party_code": number,
  "company_id": number,
  "company_name": string,
  "agent_id": string,
  "agent_name": string,
  "total_service_charges": number,
  "dad_amount": number,
  "received_date": string,
  "dad_service_tax": string,
  "service_tax_received": string,
  "is_without": number,
  "amount":number,
  "description":string,

}

export class DelhiOtherDailyPaymentConverter {

  // private i: DelhiOtherDailyPaymentInterface
  // private a: AgentPaymentReceivedAdapter

  /**
   * toInterface
   */
  public static toInterface(a: DelhiOtherDailyPaymentAdapter) {
    const data: DelhiOtherDailyPaymentInterface = {
      "id": a.id,
      "candidate_name": a.candidate_name,
      "passport_no": a.passport_no,
      "party_code": a.party_code,
      "company_id": a.company_id,
      "company_name": a.company_name,
      "agent_id": a.agent_id,
      "agent_name": a.agent_name,
      "total_service_charges": a.total_service_charges,
      "dad_amount": a.dad_amount,
      "received_date": a.received_date,
      "dad_service_tax": a.dad_service_tax,
      "service_tax_received": a.service_tax_received,
      "is_without": a.is_without,      
      "amount":a.amount,
      "description":a.description,
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: DelhiOtherDailyPaymentInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: DelhiOtherDailyPaymentAdapter = {
      "id": i.id,
      "candidate_name": i.candidate_name,
      "passport_no": i.passport_no,
      "party_code": i.party_code,
      "company_id": i.company_id,
      "company_name": i.company_name,
      "agent_id": i.agent_id,
      "agent_name": i.agent_name,
      "total_service_charges": i.total_service_charges,
      "dad_amount": i.dad_amount,
      "received_date": i.received_date,
      "dad_service_tax": i.dad_service_tax,
      "service_tax_received": i.service_tax_received,
      "is_without": i.is_without,
      "amount":i.amount,
      "description":i.description
    };
    return data;
  }

}
