export interface TicketAgencyInvoicesInterface {

    id: number,
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
    required_date: string,
    priority: string,
    air_ticket: string,
    air_line: string,
    ticket_issue_date: string,
    pnr_no: string,
    departure_date: string,
    agency: string,
    amount: string,
    invoice_no: string,
    invoice_date: string,
    ticketing_tally_entry: number,
}


// block_visa
export interface TicketAgencyInvoicesAdapter {
    id: number,
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
    required_date: string,
    priority: string,
    air_ticket: string,
    air_line: string,
    ticket_issue_date: string,
    pnr_no: string,
    departure_date: string,
    agency: string,
    amount: string,
    invoice_no: string,
    invoice_date: string,
    ticketing_tally_entry: number,
}

export class TicketAgencyInvoicesConverter {
    // private i: TicketAgencyInvoicesInterface
    // private a: TicketAgencyInvoicesAdapter

    /**
     * toInterface
     */
    public static toInterface(a: TicketAgencyInvoicesAdapter) {
        const data: TicketAgencyInvoicesInterface = {


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
            required_date: a.required_date,
            priority: a.priority,
            air_ticket: a.air_ticket,
            air_line: a.air_line,
            ticket_issue_date: a.ticket_issue_date,
            pnr_no: a.pnr_no,
            departure_date: a.departure_date,
            agency: a.agency,
            amount: a.amount,
            invoice_no: a.invoice_no,
            invoice_date: a.invoice_date,
            ticketing_tally_entry: a.ticketing_tally_entry,
        };
        return data;
    }

    /**
     * toAdapter
     */
    public static toAdapter(i: TicketAgencyInvoicesInterface) {
        console.log("i"); // Only Dev
        console.log(i); // Only Dev
        const data: TicketAgencyInvoicesAdapter = {
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
            required_date: i.required_date,
            priority: i.priority,
            air_ticket: i.air_ticket,
            air_line: i.air_line,
            ticket_issue_date: i.ticket_issue_date,
            pnr_no: i.pnr_no,
            departure_date: i.departure_date,
            agency: i.agency,
            amount: i.amount,
            invoice_no: i.invoice_no,
            invoice_date: i.invoice_date,
            ticketing_tally_entry: i.ticketing_tally_entry,
        };
        return data;
    }
}



export interface AddTicketAgencyInterface {

    selection_list: TicketAgencyInvoicesInterface[],
    
  }
  
  export interface AddTicketAgencyAdapter {
  
    selection_list: TicketAgencyInvoicesAdapter[],
    
  }
  
  
  export class AddTicketAgencyConverter {
    // private i: AddCandidateInvoiceNumberInterface
    // private a: AddPenaltyAfterDeploymentAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: AddTicketAgencyAdapter) {
      const data: AddTicketAgencyInterface = {
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
            required_date: item.required_date,
            priority: item.priority,
            air_ticket: item.air_ticket,
            air_line: item.air_line,
            ticket_issue_date: item.ticket_issue_date,
            pnr_no: item.pnr_no,
            departure_date: item.departure_date,
            agency: item.agency,
            amount: item.amount,
            invoice_no: item.invoice_no,
            invoice_date: item.invoice_date,
            ticketing_tally_entry: item.ticketing_tally_entry,
        })),
    
      };
      return data;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: AddTicketAgencyInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: AddTicketAgencyAdapter = {
  
        selection_list: i?.selection_list?.filter(item =>
             item.ticketing_tally_entry !== 0 
             ).map((item) => ({
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
            required_date: item.required_date,
            priority: item.priority,
            air_ticket: item.air_ticket,
            air_line: item.air_line,
            ticket_issue_date: item.ticket_issue_date,
            pnr_no: item.pnr_no,
            departure_date: item.departure_date,
            agency: item.agency,
            amount: item.amount,
            invoice_no: item.invoice_no,
            invoice_date: item.invoice_date,
            ticketing_tally_entry: item.ticketing_tally_entry,
      })),
        
      };
      return data;
    }
  }