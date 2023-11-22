export interface RejectCancelApproveInterface {
  id?: number;
  party_code: number;
  company_name: string;
  name: string;
  passport_no: string;
  actual_profession: string;
  visa_profession: string;
  agent_name: string;
  visa_received_date: string;
  visa_authorization: string;
  air_ticket: string;
  service_charges: number;
  other_charges: number;
  document_charges: number;
  consulate_setting_charges: number;
  partial_charges: number;
  sector_charges: number;
  ticket_charges: number;
  attestation_charges: number;
  extra_service_tax: number;
  consolidated_charges: number;
  consolidated_charges_names: string;
  mofa_cancel_id: number;
  is_checked:number,
  status:number,
  reason?: string;
  rc_name?: string;
  division?: string;
  is_invoice?: string;
  ccp_cancel_type?: string;
}

export interface RejectCancelApproveAdapter {
  id?: number;
  party_code: number;
  company_name: string;
  name: string;
  passport_no: string;
  actual_profession: string;
  visa_profession: string;
  agent_name: string;
  visa_received_date: string;
  visa_authorization: string;
  air_ticket: string;
  service_charges: number;
  other_charges: number;
  document_charges: number;
  consulate_setting_charges: number;
  partial_charges: number;
  sector_charges: number;
  ticket_charges: number;
  attestation_charges: number;
  extra_service_tax: number;
  consolidated_charges: number;
  consolidated_charges_names: string;
  mofa_cancel_id: number;
  is_checked:number,
  status:number,
  reason?: string;
  rc_name?: string;
  division?: string;
  is_invoice?: string;
  ccp_cancel_type?: string;
}

export class RejectCancelApproveConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: RejectCancelApproveAdapter) {
    const data: RejectCancelApproveInterface = {
      id: a.id,
      party_code: a.party_code,
      company_name: a.company_name,
      name: a.name,
      passport_no: a.passport_no,
      actual_profession: a.actual_profession,
      visa_profession: a.visa_profession,
      agent_name: a.agent_name,
      visa_received_date: a.visa_received_date,
      visa_authorization: a.visa_authorization,
      air_ticket: a.air_ticket,
      service_charges: a.service_charges,
      other_charges: a.other_charges,
      document_charges: a.document_charges,
      consulate_setting_charges: a.consulate_setting_charges,
      partial_charges: a.partial_charges,
      sector_charges: a.sector_charges,
      ticket_charges: a.ticket_charges,
      attestation_charges: a.attestation_charges,
      extra_service_tax: a.extra_service_tax,
      consolidated_charges: a.consolidated_charges,
      consolidated_charges_names: a.consolidated_charges_names,
      mofa_cancel_id: a.mofa_cancel_id,
      is_checked:a.is_checked,
      status:a.status,
      reason: a.reason,
      rc_name: a.rc_name,
      division: a.division,
      is_invoice: a.is_invoice,
      ccp_cancel_type: a.ccp_cancel_type,
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
      id: i.id,
      party_code: i.party_code,
      company_name: i.company_name,
      name: i.name,
      passport_no: i.passport_no,
      actual_profession: i.actual_profession,
      visa_profession: i.visa_profession,
      agent_name: i.agent_name,
      visa_received_date: i.visa_received_date,
      visa_authorization: i.visa_authorization,
      air_ticket: i.air_ticket,
      service_charges: i.service_charges,
      other_charges: i.other_charges,
      document_charges: i.document_charges,
      consulate_setting_charges: i.consulate_setting_charges,
      partial_charges: i.partial_charges,
      sector_charges: i.sector_charges,
      ticket_charges: i.ticket_charges,
      attestation_charges: i.attestation_charges,
      extra_service_tax: i.extra_service_tax,
      consolidated_charges: i.consolidated_charges,
      consolidated_charges_names: i.consolidated_charges_names,
      mofa_cancel_id: i.mofa_cancel_id,
      is_checked:i.is_checked,
      status:i.status,
      ccp_cancel_type: i.ccp_cancel_type,
    };
    return data;
  }
}
export interface RejectCancelApproveListInterface {

  selection_list: RejectCancelApproveInterface[],
  
}

export interface RejectCancelApproveListAdapter {

  selection_list: RejectCancelApproveAdapter[],
  
}


export class RejectCancelApproveListConverter {
  // private i: AddCandidateInvoiceNumberInterface
  // private a: AddPenaltyAfterDeploymentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: RejectCancelApproveListAdapter) {
    const data: RejectCancelApproveListInterface = {
      selection_list: a?.selection_list?.map((item) => ({       
        id: item.id,
        party_code: item.party_code,
        company_name: item.company_name,
        name: item.name,
        passport_no: item.passport_no,
        actual_profession: item.actual_profession,
        visa_profession: item.visa_profession,
        agent_name: item.agent_name,
        visa_received_date: item.visa_received_date,
        visa_authorization: item.visa_authorization,
        air_ticket: item.air_ticket,
        service_charges: item.service_charges,
        other_charges: item.other_charges,
        document_charges: item.document_charges,
        consulate_setting_charges: item.consulate_setting_charges,
        partial_charges: item.partial_charges,
        sector_charges: item.sector_charges,
        ticket_charges: item.ticket_charges,
        attestation_charges: item.attestation_charges,
        extra_service_tax: item.extra_service_tax,
        consolidated_charges: item.consolidated_charges,
        consolidated_charges_names: item.consolidated_charges_names,
        mofa_cancel_id: item.mofa_cancel_id,
        is_checked:item.is_checked,
        status:item.status,
        reason: item.reason,
        rc_name: item.rc_name,
        division: item.division,
        is_invoice: item.is_invoice,
        ccp_cancel_type: item.ccp_cancel_type,
      })),
  
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: RejectCancelApproveListInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: RejectCancelApproveListAdapter = {
      selection_list: i?.selection_list?.map((item) => ({       
        id: item.id,
        party_code: item.party_code,
        company_name: item.company_name,
        name: item.name,
        passport_no: item.passport_no,
        actual_profession: item.actual_profession,
        visa_profession: item.visa_profession,
        agent_name: item.agent_name,
        visa_received_date: item.visa_received_date,
        visa_authorization: item.visa_authorization,
        air_ticket: item.air_ticket,
        service_charges: item.service_charges,
        other_charges: item.other_charges,
        document_charges: item.document_charges,
        consulate_setting_charges: item.consulate_setting_charges,
        partial_charges: item.partial_charges,
        sector_charges: item.sector_charges,
        ticket_charges: item.ticket_charges,
        attestation_charges: item.attestation_charges,
        extra_service_tax: item.extra_service_tax,
        consolidated_charges: item.consolidated_charges,
        consolidated_charges_names: item.consolidated_charges_names,
        mofa_cancel_id: item.mofa_cancel_id,
        is_checked:item.is_checked,
        status:item.status,
        reason: item.reason,
        rc_name: item.rc_name,
        division: item.division,
        is_invoice: item.is_invoice,
        ccp_cancel_type: item.ccp_cancel_type,
      })), 
    };
    return data;
  }
}
