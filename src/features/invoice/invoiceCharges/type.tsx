
export interface ClientInvoiceChargesInterface {
  id: number,
  party_code: number,
  company_name: string,
  candidate_name: string,
  passport_no: string,
  actual_profession: string,
  visa_profession: string,
  agent_name: string,
  division: string,
  visa_authorisation_name: string,
  rc_name: string,
  other_charges: number,
  other_charge_currency: string,
  service_charges: number,
  service_charge_currency: string,
  ticket_charges: number,
  ticket_charge_currency: string,
  total_charges: number,
  is_without: number


}

export interface ClientInvoiceChargesAdapter {

  id: number,
  party_code: number,
  company_name: string,
  candidate_name: string,
  passport_no: string,
  actual_profession: string,
  visa_profession: string,
  agent_name: string,
  division: string,
  visa_authorisation_name: string,
  rc_name: string,
  other_charges: number,
  other_charge_currency: string,
  service_charges: number,
  service_charge_currency: string,
  ticket_charges: number,
  ticket_charge_currency: string,
  total_charges: number,
  is_without: number

}

export class ClientInvoiceChargesConverter {
  // private i: ClientInvoiceChargesInterface
  // private a: ClientInvoiceChargesAdapter

  /**
   * toInterface
   */
  public static toInterface(a: ClientInvoiceChargesAdapter) {
    const data: ClientInvoiceChargesInterface = {

      id: a?.id,
      party_code: a?.party_code,
      company_name: a?.company_name,
      candidate_name: a?.candidate_name,
      passport_no: a?.passport_no,
      actual_profession: a?.actual_profession,
      visa_profession: a?.visa_profession,
      agent_name: a?.agent_name,
      division: a?.division,
      visa_authorisation_name: a?.visa_authorisation_name,
      rc_name: a?.rc_name,
      other_charges: a?.other_charges,
      other_charge_currency: a?.other_charge_currency,
      service_charges: a?.service_charges,
      service_charge_currency: a?.service_charge_currency,
      ticket_charges: a?.ticket_charges,
      ticket_charge_currency: a?.ticket_charge_currency,
      total_charges: a?.total_charges,
      is_without: a?.is_without,

    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: ClientInvoiceChargesInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: ClientInvoiceChargesAdapter = {
      id: i?.id,
      party_code: i?.party_code,
      company_name: i?.company_name,
      candidate_name: i?.candidate_name,
      passport_no: i?.passport_no,
      actual_profession: i?.actual_profession,
      visa_profession: i?.visa_profession,
      agent_name: i?.agent_name,
      division: i?.division,
      visa_authorisation_name: i?.visa_authorisation_name,
      rc_name: i?.rc_name,
      other_charges: i?.other_charges,
      other_charge_currency: i?.other_charge_currency,
      service_charges: i?.service_charges,
      service_charge_currency: i?.service_charge_currency,
      ticket_charges: i?.ticket_charges,
      ticket_charge_currency: i?.ticket_charge_currency,
      total_charges: i?.total_charges,
      is_without: i?.is_without,
    };
    return data;
  }
}



export interface AddSelectionInvoiceChargesInterface {

  selection_list: AddCandidateInvoiceChargesInterface[]
}

export interface AddCandidateInvoiceChargesAdapter {

  selection_list: AddCandidateInvoiceChargesInterface[],
}


export interface AddCandidateInvoiceChargesInterface {
  id:number,
  is_without:number,
  other_charges:number,
  other_charge_currency:string,
  service_charges:number,
  service_charge_currency:string,
  ticket_charges:number,
  ticket_charge_currency:string,
  total_charges:number
}

export class AddSelectionPenaltyAfterDeploymentConverter {
  // private i: AddCandidateInvoiceNumberInterface
  // private a: AddPenaltyAfterDeploymentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: AddCandidateInvoiceChargesAdapter) {
    const data: AddSelectionInvoiceChargesInterface = {
      selection_list: a?.selection_list?.map((item) => ({
        id: item?.id,
        is_without: item?.is_without,
        other_charges: item?.other_charges,
        other_charge_currency: item?.other_charge_currency,
        service_charges: item?.service_charges,
        service_charge_currency: item?.service_charge_currency,
        ticket_charges: item?.ticket_charges,
        ticket_charge_currency: item?.ticket_charge_currency,
        total_charges: item?.total_charges,
     
      })),
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: AddSelectionInvoiceChargesInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: AddCandidateInvoiceChargesAdapter = {

      selection_list: i?.selection_list?.map((item) => ({
        id: item?.id,
        is_without: item?.is_without,
        other_charges: item?.other_charges,
        other_charge_currency: item?.other_charge_currency,
        service_charges: item?.service_charges,
        service_charge_currency: item?.service_charge_currency,
        ticket_charges: item?.ticket_charges,
        ticket_charge_currency: item?.ticket_charge_currency,
        total_charges: item?.total_charges,
      })),
    };
    return data;
  }
}
