
export interface RejectCancelApproveInterface {
 
  id?: number,
  party_code: number,
  company_name: string,
  name: string,
  passport_no: string,
  actual_profession: string,
  visa_profession: string,
  agent_name: string,
  visa_received_date: string,
  visa_authorization: string,
  air_ticket: string,
  service_charges: number,
  other_charges: number,
  document_charges: number,
  consulate_setting_charges: number,
  partial_charges: number,
  sector_charges: number,
  ticket_charges: number,
  attestation_charges: number,
  extra_service_tax: number,
  consolidated_charges: number,
  consolidated_charges_names: string,
  mofa_cancel_id: number


}
// 'block_visa' => 'required|array',
// 'visa_profession_list' => 'required|array'


// block_visa
export interface RejectCancelApproveAdapter {
  id?: number,
  party_code: number,
  company_name: string,
  name: string,
  passport_no: string,
  actual_profession: string,
  visa_profession: string,
  agent_name: string,
  visa_received_date: string,
  visa_authorization: string,
  air_ticket: string,
  service_charges: number,
  other_charges: number,
  document_charges: number,
  consulate_setting_charges: number,
  partial_charges: number,
  sector_charges: number,
  ticket_charges: number,
  attestation_charges: number,
  extra_service_tax: number,
  consolidated_charges: number,
  consolidated_charges_names: string,
  mofa_cancel_id: number
}

export interface RejectCancelApproveSingleInterface {
  id?:number;
  client_invoice: string;
  visa_profession: string;
  arabic_visa_category: string;
  quantity: number;
}

export interface RejectCancelApproveSingleAdapter {
  id?:number;
  client_invoice: string;
  visa_profession: string;
  arabic_visa_category: string;
  quantity: number;
}

export class RejectCancelApproveSingleConverter{
   // private i: RejectCancelApproveSingleInterface
  // private a: RejectCancelApproveSingleAdapter

  /**
   * toInterface
   */

  public static toInterface(a: RejectCancelApproveSingleAdapter) {
    const data: RejectCancelApproveSingleInterface = {
      id:a?.id,
  client_invoice:a?.client_invoice,
  visa_profession:a?.visa_profession,
  arabic_visa_category:a?.arabic_visa_category,
  quantity:a?.quantity,
    
    };
    return data;
}
/**
   * toAdapter
   */
public static toAdapter(i: RejectCancelApproveSingleInterface) {
  console.log("i"); // Only Dev
  console.log(i); // Only Dev
  const data: RejectCancelApproveSingleAdapter = {
    id:i.id,
    client_invoice:i.client_invoice,
    visa_profession:i.visa_profession,
    arabic_visa_category:i.arabic_visa_category,
    quantity:i.quantity,
  }
  return data;
}

}
export class RejectCancelApproveConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: RejectCancelApproveAdapter) {
    const data: RejectCancelApproveInterface = {
      id:a.id,
      party_code:a.party_code,
      company_name:a.company_name,
      name:a.name,
      passport_no:a.passport_no,
      actual_profession:a.actual_profession,
      visa_profession:a.visa_profession,
      agent_name:a.agent_name,
      visa_received_date:a.visa_received_date,
      visa_authorization:a.visa_authorization,
      air_ticket:a.air_ticket,
      service_charges:a.service_charges,
      other_charges:a.other_charges,
      document_charges:a.document_charges,
      consulate_setting_charges:a.consulate_setting_charges,
      partial_charges:a.partial_charges,
      sector_charges:a.sector_charges,
      ticket_charges:a.ticket_charges,
      attestation_charges:a.attestation_charges,
      extra_service_tax:a.extra_service_tax,
      consolidated_charges:a.consolidated_charges,
      consolidated_charges_names:a.consolidated_charges_names,
      mofa_cancel_id:a.mofa_cancel_id
    
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: RejectCancelApproveInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: RejectCancelApproveAdapter = {
      id:i.id,
      party_code:i.party_code,
      company_name:i.company_name,
      name:i.name,
      passport_no:i.passport_no,
      actual_profession:i.actual_profession,
      visa_profession:i.visa_profession,
      agent_name:i.agent_name,
      visa_received_date:i.visa_received_date,
      visa_authorization:i.visa_authorization,
      air_ticket:i.air_ticket,
      service_charges:i.service_charges,
      other_charges:i.other_charges,
      document_charges:i.document_charges,
      consulate_setting_charges:i.consulate_setting_charges,
      partial_charges:i.partial_charges,
      sector_charges:i.sector_charges,
      ticket_charges:i.ticket_charges,
      attestation_charges:i.attestation_charges,
      extra_service_tax:i.extra_service_tax,
      consolidated_charges:i.consolidated_charges,
      consolidated_charges_names:i.consolidated_charges_names,
      mofa_cancel_id:i.mofa_cancel_id
    };
    return data;
  }
}
export interface EditRejectCancelApproveInterface 
{ 
  id:number,
mofa_cancel_id:number,
status:number}

export interface EditRejectCancelApproveAdapter
{ 
  id:number,
mofa_cancel_id:number,
status:number}
export class EditRejectCancelApproveConverter {

     // private i: EditRejectCancelApproveInterface
  // private a: RejectCancelApproveSingleAdapter

  /**
   * toInterface
   */

  public static toInterface(a: EditRejectCancelApproveAdapter) {
    const data: EditRejectCancelApproveInterface = {
      id:a.id,
      mofa_cancel_id:a.mofa_cancel_id,
      status:a.status
    
    };
    return data;
}
}