
export interface AccountCandidateInterface {
  id: number,
  party_code: number,
  company_name: string,
  name: string,
  passport_no: number,
  actual_profession: string,
  visa_profession: string,
  agent_name: string,
  visa_received_date: string,
  process_charges: string,
  document_charges: number,
  other_charges: number,
  sector_charges: number,
  partial_charges: number,
  service_charges: number,
  consulate_setting_charges: number,
  cancel_charges: string,
  flight_ticket_amount: string,
  ticket_charges: number,
  extra_service_tax: number,
  air_ticket: string,
  is_deployed: string,
  color_code: string,
  given_to?: string,
  is_without: number
}
  
  
  export interface AccountCandidateAdapter {
    id: number,
    party_code: number,
    company_name: string,
    name: string,
    passport_no: number,
    actual_profession: string,
    visa_profession: string,
    agent_name: string,
    visa_received_date: string,
    process_charges: string,
    document_charges: number,
    other_charges: number,
    sector_charges: number,
    partial_charges: number,
    service_charges: number,
    consulate_setting_charges: number,
    cancel_charges: string,
    flight_ticket_amount: string,
    ticket_charges: number,
    extra_service_tax: number,
    air_ticket: string,
    is_deployed: string,
    color_code: string,
    given_to?: string,
    is_without: number
  }
  
  
  export class AccountCandidateConverter {
    // private i: AgentInterface
    // private a: AgentAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: AccountCandidateAdapter) {
      const data: AccountCandidateInterface = {
        id:a?.id,
        party_code:a?.party_code,
        company_name:a?.company_name,
        name:a?.name,
        passport_no:a?.passport_no,
        actual_profession:a?.actual_profession,
        visa_profession:a?.visa_profession,
        agent_name:a?.agent_name,
        visa_received_date:a?.visa_received_date,
        process_charges:a?.process_charges,
        document_charges:a?.document_charges,
        other_charges:a?.other_charges,
        sector_charges:a?.sector_charges,
        partial_charges:a?.partial_charges,
        service_charges:a?.service_charges,
        consulate_setting_charges:a?.consulate_setting_charges,
        cancel_charges:a?.cancel_charges,
        flight_ticket_amount:a?.flight_ticket_amount,
        ticket_charges:a?.ticket_charges,
        extra_service_tax:a?.extra_service_tax,
        air_ticket:a?.air_ticket,
        is_deployed:a?.is_deployed,
        color_code:a?.color_code,
        given_to:a.given_to,
        is_without:a?.is_without,
      };
      return data;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: AccountCandidateInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: AccountCandidateAdapter = {
        id:i?.id,
        party_code:i?.party_code,
        company_name:i?.company_name,
        name:i?.name,
        passport_no:i?.passport_no,
        actual_profession:i?.actual_profession,
        visa_profession:i?.visa_profession,
        agent_name:i?.agent_name,
        visa_received_date:i?.visa_received_date,
        process_charges:i?.process_charges,
        document_charges:i?.document_charges,
        other_charges:i?.other_charges,
        sector_charges:i?.sector_charges,
        partial_charges:i?.partial_charges,
        service_charges:i?.service_charges,
        consulate_setting_charges:i?.consulate_setting_charges,
        cancel_charges:i?.cancel_charges,
        flight_ticket_amount:i?.flight_ticket_amount,
        ticket_charges:i?.ticket_charges,
        extra_service_tax:i?.extra_service_tax,
        air_ticket:i?.air_ticket,
        is_deployed:i?.is_deployed,
        color_code:i?.color_code,
        given_to:i.given_to,
        is_without:i?.is_without,
  
      };
      return data;
    }
  }
  

  
export interface AccountCandidateCancelInterface {
  is_without: number
  visa_cancel_penalty:number,
  visa_cancel_remarks:string,
}
  
  
  export interface AccountCandidateCancelAdapter {
    
    is_without: number
    visa_cancel_penalty:number,
    visa_cancel_remarks:string,
  }
  
  
  export class AccountCandidateCancelConverter {
    // private i: AgentInterface
    // private a: AgentAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: AccountCandidateCancelAdapter) {
      const data: AccountCandidateCancelInterface = {
        is_without:a?.is_without,
        visa_cancel_penalty:a?.visa_cancel_penalty,
        visa_cancel_remarks:a?.visa_cancel_remarks,
      };
      return data;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: AccountCandidateCancelInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: AccountCandidateCancelAdapter = {
        
        is_without:i?.is_without,
        visa_cancel_penalty:i?.visa_cancel_penalty,
        visa_cancel_remarks:i?.visa_cancel_remarks,
  
      };
      return data;
    }
  }
  


  export interface AccountCandidateCancelInterface2{
  
    "candidate_id" : number,
    "client_invoice" : string,
    "penalty_amount" : number,
    "mistake_by" : string

}
export interface AccountCandidateCancelAdapter2{
  
    "candidate_id" : number,
    "client_invoice" : string,
    "penalty_amount" : number,
    "mistake_by" : string

}


export class AccountCandidateCancelConverter2 {
  // private i: VisaProfesionInterface
  // private a: AccountCandidateCancelAdapter2

  /**
   * toInterface
   */
  public static toInterface(a: AccountCandidateCancelAdapter2) {
    const data: AccountCandidateCancelInterface2 = {
      candidate_id :a.candidate_id,
      client_invoice :a.client_invoice,
      penalty_amount :a.penalty_amount,
      mistake_by :a.mistake_by,
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: AccountCandidateCancelInterface2) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: AccountCandidateCancelAdapter2 = {
      candidate_id :i.candidate_id,
      client_invoice :i.client_invoice,
      penalty_amount :i.penalty_amount,
      mistake_by :i.mistake_by,
    };
    return data;
  }
}




  