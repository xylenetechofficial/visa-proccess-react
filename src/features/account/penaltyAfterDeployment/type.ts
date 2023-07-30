
export interface PenaltyAfterDeploymentDashboardInterface {
  actual_profession: string,
  agency: string,
  agency_invoice: string,
  agent_name: string,
  air_ticket: string,
  attestation_charges: number,
  change_issue_type: string,
  company_name: string,
  consolidated_charges: number,
  consolidated_charges_names: string,
  consulate_setting_charges: number,
  departure_date: string,
  discount_amount: number,
  division: string,
  document_charges: number,
  grade: string,
  id: number,
  invoice_raised: string,
  is_invoice: string,
  job_order_no: string,
  mistake_by: string,
  name: string,
  other_charges: number,
  partial_charges: number,
  party_code: number,
  passport_expiry_date: string,
  passport_issued_date: string,
  passport_no: string,
  payment: string,
  penalty_after_departure: number,
  penalty_remarks: string,
  pending_amount: number,
  photo_charges: number,
  pnr_no: string,
  rc: number,
  received: number,
  rm: string,
  sector_charges: number,
  sector_from: string,
  sector_to: string,
  service_charges: number,
  status: string,
  ticket_charges: number,
  training_charges: number,
  visa_authorization: string,
  visa_expiry_date: string,
  visa_issued_date: string,
  visa_profession: string,
}



export interface PenaltyAfterDeploymentDashboardAdapter {
   
  actual_profession: string,
  agency: string,
  agency_invoice: string,
  agent_name: string,
  air_ticket: string,
  attestation_charges: number,
  change_issue_type: string,
  company_name: string,
  consolidated_charges: number,
  consolidated_charges_names: string,
  consulate_setting_charges: number,
  departure_date: string,
  discount_amount: number,
  division: string,
  document_charges: number,
  grade: string,
  id: number,
  invoice_raised: string,
  is_invoice: string,
  job_order_no: string,
  mistake_by: string,
  name: string,
  other_charges: number,
  partial_charges: number,
  party_code: number,
  passport_expiry_date: string,
  passport_issued_date: string,
  passport_no: string,
  payment: string,
  penalty_after_departure: number,
  penalty_remarks: string,
  pending_amount: number,
  photo_charges: number,
  pnr_no: string,
  rc: number,
  received: number,
  rm: string,
  sector_charges: number,
  sector_from: string,
  sector_to: string,
  service_charges: number,
  status: string,
  ticket_charges: number,
  training_charges: number,
  visa_authorization: string,
  visa_expiry_date: string,
  visa_issued_date: string,
  visa_profession: string,
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


export class PenaltyAfterDeploymentDashboardConverter {
  // private i: PenaltyAfterDeploymentDashboardInterface
  // private a: PenaltyAfterDeploymentDashboardAdapter

  /**
   * toInterface
   */
  public static toInterface(a: PenaltyAfterDeploymentDashboardAdapter) {
    const data: PenaltyAfterDeploymentDashboardInterface = {
      
  actual_profession:a.actual_profession ,
  agency:a.agency ,
  agency_invoice:a.agency_invoice ,
  agent_name:a.agent_name ,
  air_ticket:a.air_ticket ,
  attestation_charges:a.attestation_charges ,
  change_issue_type:a.change_issue_type ,
  company_name:a.company_name ,
  consolidated_charges:a.consolidated_charges ,
  consolidated_charges_names:a.consolidated_charges_names ,
  consulate_setting_charges:a.consulate_setting_charges ,
  departure_date:a.departure_date ,
  discount_amount:a.discount_amount ,
  division:a.division ,
  document_charges:a.document_charges ,
  grade:a.grade ,
  id:a.id ,
  invoice_raised:a.invoice_raised ,
  is_invoice:a.is_invoice ,
  job_order_no:a.job_order_no ,
  mistake_by:a.mistake_by ,
  name:a.name ,
  other_charges:a.other_charges ,
  partial_charges:a.partial_charges ,
  party_code:a.party_code ,
  passport_expiry_date:a.passport_expiry_date ,
  passport_issued_date:a.passport_issued_date ,
  passport_no:a.passport_no ,
  payment:a.payment ,
  penalty_after_departure:a.penalty_after_departure ,
  penalty_remarks:a.penalty_remarks ,
  pending_amount:a.pending_amount ,
  photo_charges:a.photo_charges ,
  pnr_no:a.pnr_no ,
  rc:a.rc ,
  received:a.received ,
  rm:a.rm ,
  sector_charges:a.sector_charges ,
  sector_from:a.sector_from ,
  sector_to:a.sector_to ,
  service_charges:a.service_charges ,
  status:a.status ,
  ticket_charges:a.ticket_charges ,
  training_charges:a.training_charges ,
  visa_authorization:a.visa_authorization ,
  visa_expiry_date:a.visa_expiry_date ,
  visa_issued_date:a.visa_issued_date ,
  visa_profession:a.visa_profession ,

    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: PenaltyAfterDeploymentDashboardInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: PenaltyAfterDeploymentDashboardAdapter = {         
  actual_profession:i.actual_profession ,
  agency:i.agency ,
  agency_invoice:i.agency_invoice ,
  agent_name:i.agent_name ,
  air_ticket:i.air_ticket ,
  attestation_charges:i.attestation_charges ,
  change_issue_type:i.change_issue_type ,
  company_name:i.company_name ,
  consolidated_charges:i.consolidated_charges ,
  consolidated_charges_names:i.consolidated_charges_names ,
  consulate_setting_charges:i.consulate_setting_charges ,
  departure_date:i.departure_date ,
  discount_amount:i.discount_amount ,
  division:i.division ,
  document_charges:i.document_charges ,
  grade:i.grade ,
  id:i.id ,
  invoice_raised:i.invoice_raised ,
  is_invoice:i.is_invoice ,
  job_order_no:i.job_order_no ,
  mistake_by:i.mistake_by ,
  name:i.name ,
  other_charges:i.other_charges ,
  partial_charges:i.partial_charges ,
  party_code:i.party_code ,
  passport_expiry_date:i.passport_expiry_date ,
  passport_issued_date:i.passport_issued_date ,
  passport_no:i.passport_no ,
  payment:i.payment ,
  penalty_after_departure:i.penalty_after_departure ,
  penalty_remarks:i.penalty_remarks ,
  pending_amount:i.pending_amount ,
  photo_charges:i.photo_charges ,
  pnr_no:i.pnr_no ,
  rc:i.rc ,
  received:i.received ,
  rm:i.rm ,
  sector_charges:i.sector_charges ,
  sector_from:i.sector_from ,
  sector_to:i.sector_to ,
  service_charges:i.service_charges ,
  status:i.status ,
  ticket_charges:i.ticket_charges ,
  training_charges:i.training_charges ,
  visa_authorization:i.visa_authorization ,
  visa_expiry_date:i.visa_expiry_date ,
  visa_issued_date:i.visa_issued_date ,
  visa_profession:i.visa_profession ,


    };
    return data;
  }
}

export interface AddSelectionPenaltyAfterDeploymentInterface {

  selection_list:AddPenaltyAfterDeploymentInterface[]
}

export interface AddSelectionPenaltyAfterDeploymentAdapter {
  
  selection_list:AddPenaltyAfterDeploymentInterface[],
}


export interface AddPenaltyAfterDeploymentInterface {

  id: number,
  penalty_after_departure: number,
  penalty_remarks: string
}

export interface AddPenaltyAfterDeploymentAdapter {
  
  id: number,
  penalty_after_departure: number,
  penalty_remarks: string
}



export class AddSelectionPenaltyAfterDeploymentConverter {
  // private i: AddPenaltyAfterDeploymentInterface
  // private a: AddPenaltyAfterDeploymentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: AddSelectionPenaltyAfterDeploymentAdapter) {
    const data: AddSelectionPenaltyAfterDeploymentInterface = {
      selection_list: a?.selection_list?.map((item) => ({
      id: item.id,
      penalty_after_departure: item.penalty_after_departure,
      penalty_remarks: item.penalty_remarks
    })),
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: AddSelectionPenaltyAfterDeploymentInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: AddSelectionPenaltyAfterDeploymentAdapter = {
   
      selection_list: i?.selection_list?.map((item) => ({
        id: item?.id,
        penalty_after_departure: item?.penalty_after_departure,
        penalty_remarks: item?.penalty_remarks
  
      })),
    };
    return data;
  }
}
