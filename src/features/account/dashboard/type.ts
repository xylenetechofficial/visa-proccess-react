
export interface AccountDashboardInterface {
  actual_profession: string,
  agent_commision: string,
  agent_name:string,
  air_ticket: string,
  company_name: string,
  consulate_setting_charges: string,
  division: string,
  document_charges : number,
  id: number,
  is_invoice : string,
  name: string,
  partial_charges : string,
  party_code  : number,
  passport_no  : string,
  process_charges  : string,
  rc_name  : string,
  reason : string,
  sector_charges  : string,
  ticket_charges  : string,
  visa_authorization : string, 
  visa_profession  : string,
  visa_received_date :string
}

export interface ServerAdapter{
  block_visa: AccountDashboardAdapter,
  visa_profession_list: []
}


export interface AccountDashboardAdapter{
  actual_profession: string,
  agent_commision: string,
  agent_name:string,
  air_ticket: string,
  company_name: string,
  consulate_setting_charges: string,
  division: string,
  document_charges : number,
  id: number,
  is_invoice : string,
  name: string,
  partial_charges : string,
  party_code  : number,
  passport_no  : string,
  process_charges  : string,
  rc_name  : string,
  reason : string,
  sector_charges  : string,
  ticket_charges  : string,
  visa_authorization : string, 
  visa_profession  : string,
  visa_received_date :string
}

export interface CandidateRejectInterface {
  account_dashboard_client_invoice : string,
  account_dashboard_penalty_amount : number,
  account_dashboard_mistake_by : string

}

export interface CandidateRejectAdapter {

  account_dashboard_client_invoice : string,
  account_dashboard_penalty_amount : number,
  account_dashboard_mistake_by : string
}

export class CandidateRejectConverter {
  // private i: CandidateRejectInterface
  // private a: CandidateRejectAdapter

  /**
   * toInterface
   */
  public static toInterface(a: CandidateRejectAdapter) {
    const data: CandidateRejectInterface = {
      account_dashboard_client_invoice : a.account_dashboard_client_invoice,
      account_dashboard_penalty_amount : a.account_dashboard_penalty_amount,
      account_dashboard_mistake_by : a.account_dashboard_mistake_by
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
      account_dashboard_client_invoice : i.account_dashboard_client_invoice,
      account_dashboard_penalty_amount : i.account_dashboard_penalty_amount,
      account_dashboard_mistake_by : i.account_dashboard_mistake_by
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
      actual_profession:a.actual_profession,
      agent_commision:a.agent_commision,
      agent_name:a.agent_name,
      air_ticket:a.air_ticket,
      company_name:a.company_name,
      consulate_setting_charges:a.consulate_setting_charges,
      division:a.division,
      document_charges :a.document_charges ,
      id:a.id,
      is_invoice :a.is_invoice ,
      name:a.name,
      partial_charges :a.partial_charges ,
      party_code  :a.party_code  ,
      passport_no  :a.passport_no  ,
      process_charges  :a.process_charges  ,
      rc_name  :a.rc_name  ,
      reason :a.reason ,
      sector_charges  :a.sector_charges  ,
      ticket_charges  :a.ticket_charges  ,
      visa_authorization :a.visa_authorization ,
      visa_profession  :a.visa_profession  ,
      visa_received_date :a.visa_received_date ,

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
   
      actual_profession:i.actual_profession,
      agent_commision:i.agent_commision,
      agent_name:i.agent_name,
      air_ticket:i.air_ticket,
      company_name:i.company_name,
      consulate_setting_charges:i.consulate_setting_charges,
      division:i.division,
      document_charges :i.document_charges ,
      id:i.id,
      is_invoice :i.is_invoice ,
      name:i.name,
      partial_charges :i.partial_charges ,
      party_code  :i.party_code  ,
      passport_no  :i.passport_no  ,
      process_charges  :i.process_charges  ,
      rc_name  :i.rc_name  ,
      reason :i.reason ,
      sector_charges  :i.sector_charges  ,
      ticket_charges  :i.ticket_charges  ,
      visa_authorization :i.visa_authorization ,
      visa_profession  :i.visa_profession  ,
      visa_received_date :i.visa_received_date ,


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
      block_visa_id:a.block_visa_id ,
      quantity:a.quantity 
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
      block_visa_id:i.block_visa_id ,
      quantity:i.quantity 
    };
    return data;
  }
}

