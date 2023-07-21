
export interface CandidatesTicketChargesInterface {

  // id?: number,
  // party_code: number,
  // company_name: string,
  // name: string,
  // passport_no: string,
  // actual_profession: string,
  // visa_profession: string,
  // visa_received_date: string,
  // agent_name: string,
  // division: string,
  // visa_authorization: string,
  // rc: string,
  // other_charges: string,
  // service_charges: string,
  // ticket_charges: string,

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
  service_charges: number,
  ticket_charges: number,
  ticket_charge_currency: number,
  is_without: number



}
// 'block_visa' => 'required|array',
// 'visa_profession_list' => 'required|array'


// block_visa
export interface CandidatesTicketChargesAdapter {

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
  service_charges: number,
  ticket_charges: number,
  ticket_charge_currency: number,
  is_without: number
}

export class CandidatesTicketChargesConverter {
  // private i: CandidatesTicketChargesInterface
  // private a: CandidatesTicketChargesAdapter

  /**
   * toInterface
   */
  public static toInterface(a: CandidatesTicketChargesAdapter) {
    const data: CandidatesTicketChargesInterface = {

      id: a.id,
      party_code: a.party_code,
      company_name: a.company_name,
      candidate_name: a.candidate_name,
      passport_no: a.passport_no,
      actual_profession: a.actual_profession,
      visa_profession: a.visa_profession,
      agent_name: a.agent_name,
      division: a.division,
      visa_authorisation_name: a.visa_authorisation_name,
      rc_name: a.rc_name,
      other_charges: a.other_charges,
      service_charges: a.service_charges,
      ticket_charges: a.ticket_charges,
      ticket_charge_currency: a.ticket_charge_currency,
      is_without: a.is_without
    }
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: CandidatesTicketChargesInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: CandidatesTicketChargesAdapter = {
      id: i.id,
      party_code: i.party_code,
      company_name: i.company_name,
      candidate_name: i.candidate_name,
      passport_no: i.passport_no,
      actual_profession: i.actual_profession,
      visa_profession: i.visa_profession,
      agent_name: i.agent_name,
      division: i.division,
      visa_authorisation_name: i.visa_authorisation_name,
      rc_name: i.rc_name,
      other_charges: i.other_charges,
      service_charges: i.service_charges,
      ticket_charges: i.ticket_charges,
      ticket_charge_currency: i.ticket_charge_currency,
      is_without: i.is_without

    };
    return data;
  }
}



export interface AddChargesInterface {

  selection_list:AddCandidatesTicketChargesInterface[]
}

export interface AddChargesAdapter {
  
  selection_list:AddCandidatesTicketChargesInterface[],
}


export interface AddCandidatesTicketChargesInterface {

  id:number,
  is_without:number,
  ticket_charges:number,
  ticket_charge_currency:string
}

export interface AddCandidatesTicketChargesAdapter {
  
  id:number,
  is_without:number,
  ticket_charges:number,
  ticket_charge_currency:string
}



export class AddChargesConverter {
  // private i: AddCandidatesTicketChargesInterface
  // private a: AddCandidatesTicketChargesAdapter

  /**
   * toInterface
   */
  public static toInterface(a: AddChargesAdapter) {
    const data: AddChargesInterface = {
      selection_list: a?.selection_list?.map((item) => ({
        id:item?.id,
        is_without:item?.is_without,
        ticket_charges:item?.ticket_charges,
        ticket_charge_currency:item?.ticket_charge_currency,
    })),
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: AddChargesInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: AddChargesAdapter = {
   
      selection_list: i?.selection_list?.map((item) => ({
        id:item?.id,
        is_without:item?.is_without,
        ticket_charges:item?.ticket_charges,
        ticket_charge_currency:item?.ticket_charge_currency,
      })),
    };
    return data;
  }
}
