export interface TicketProvidedByCompanyInterface {
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
  sector_from: string,
  sector_to: string,
  pnr_no: string,
  departure_date: string,
}


// block_visa
export interface TicketProvidedByCompanyAdapter {
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
  sector_from: string,
  sector_to: string,
  pnr_no: string,
  departure_date: string,
}

export class TicketProvidedByCompanyConverter {
  // private i: TicketDashboardInterface
  // private a: TicketDashboardAdapter

  /**
   * toInterface
   */
  public static toInterface(a: TicketProvidedByCompanyAdapter) {
    const data: TicketProvidedByCompanyInterface = {


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
      sector_from: a.sector_from,
      sector_to: a.sector_to,
      pnr_no: a.pnr_no,
      departure_date: a.departure_date
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: TicketProvidedByCompanyInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: TicketProvidedByCompanyAdapter = {
     
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
      sector_from: i.sector_from,
      sector_to: i.sector_to,
      pnr_no: i.pnr_no,
      departure_date: i.departure_date
    };
    return data;
  }
}
