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


export interface AddTicketProvidedInterface {

  selection_list: TicketProvidedByCompanyInterface[],
  
}

export interface AddTicketProvidedAdapter {

  selection_list: TicketProvidedByCompanyAdapter[],
  
}


export class AddTicketProvidedConverter {
  // private i: AddCandidateInvoiceNumberInterface
  // private a: AddPenaltyAfterDeploymentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: AddTicketProvidedAdapter) {
    const data: AddTicketProvidedInterface = {
      selection_list: a?.selection_list?.map((item) => ({
     
        id: item.id,
        party_code: item.party_code,
        company_name: item.company_name,
        candidate_name: item.candidate_name,
        pp_no: item.pp_no,
        actual_profession: item.actual_profession,
        visa_profession: item.visa_profession,
        agent: item.agent,
        rc_name: item.rc_name,
        visa_received_date: item.visa_received_date,
        visa_expiry_date: item.visa_expiry_date,
        sector_from: item.sector_from,
        sector_to: item.sector_to,
        pnr_no: item.pnr_no,
        departure_date: item.departure_date
      })),
  
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: AddTicketProvidedInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: AddTicketProvidedAdapter = {

      selection_list: i?.selection_list?.filter(item => item.sector_from !== undefined && item.sector_to !== undefined && item.pnr_no !== undefined && item.departure_date !== undefined).map((item) => ({
        id: item.id,
        party_code: item.party_code,
        company_name: item.company_name,
        candidate_name: item.candidate_name,
        pp_no: item.pp_no,
        actual_profession: item.actual_profession,
        visa_profession: item.visa_profession,
        agent: item.agent,
        rc_name: item.rc_name,
        visa_received_date: item.visa_received_date,
        visa_expiry_date: item.visa_expiry_date,
        sector_from: item.sector_from,
        sector_to: item.sector_to,
        pnr_no: item.pnr_no,
        departure_date: item.departure_date
    })),
      
    };
    return data;
  }
}