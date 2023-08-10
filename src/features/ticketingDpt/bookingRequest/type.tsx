export interface BookingRequestInterface {

  id?: number,
  party_code: string,
  company_name: string,
  candidate_name: string,
  pp_no: string,
  actual_profession: string,
  visa_profession: string,
  agent: string,
  rc_name: string,
  visa_received_date: string,
  visa_expiry_date: string,
  is_invoice: string,
  air_ticket: string,
  division: string,
  emigration_required: string,
  emigration_done: string,
  sector_from: string,
  sector_to: string,
  require_date: string,
  priority: string,
  sector_charges: string
}


// block_visa
export interface BookingRequestAdapter {

  id?: number,
  party_code: string,
  company_name: string,
  candidate_name: string,
  pp_no: string,
  actual_profession: string,
  visa_profession: string,
  agent: string,
  rc_name: string,
  visa_received_date: string,
  visa_expiry_date: string,
  is_invoice: string,
  air_ticket: string,
  division: string,
  emigration_required: string,
  emigration_done: string,
  sector_from: string,
  sector_to: string,
  require_date: string,
  priority: string,
  sector_charges: string
}

export class BookingRequestConverter {
  // private i: BookingRequestInterface
  // private a: BookingRequestAdapter

  /**
   * toInterface
   */
  public static toInterface(a: BookingRequestAdapter) {
    const data: BookingRequestInterface = {


      id: a.id,
      party_code: a.party_code,
      company_name: a.company_name,
      candidate_name: a.candidate_name,
      pp_no: a.pp_no,
      actual_profession: a.actual_profession,
      visa_profession: a.visa_profession,
      agent: a.agent,
      rc_name: a.rc_name,
      visa_received_date: a.visa_received_date,
      visa_expiry_date: a.visa_expiry_date,
      is_invoice: a.is_invoice,
      air_ticket: a.air_ticket,
      division: a.division,
      emigration_required: a.emigration_required,
      emigration_done: a.emigration_done,
      sector_from: a.sector_from,
      sector_to: a.sector_to,
      require_date: a.require_date,
      priority: a.priority,
      sector_charges: a.sector_charges,
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: BookingRequestInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: BookingRequestAdapter = {
      id: i.id,
      party_code: i.party_code,
      company_name: i.company_name,
      candidate_name: i.candidate_name,
      pp_no: i.pp_no,
      actual_profession: i.actual_profession,
      visa_profession: i.visa_profession,
      agent: i.agent,
      rc_name: i.rc_name,
      visa_received_date: i.visa_received_date,
      visa_expiry_date: i.visa_expiry_date,
      is_invoice: i.is_invoice,
      air_ticket: i.air_ticket,
      division: i.division,
      emigration_required: i.emigration_required,
      emigration_done: i.emigration_done,
      sector_from: i.sector_from,
      sector_to: i.sector_to,
      require_date: i.require_date,
      priority: i.priority,
      sector_charges: i.sector_charges,
    };
    return data;
  }
}
