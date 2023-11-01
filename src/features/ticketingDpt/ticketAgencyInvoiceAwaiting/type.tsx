export interface TicketAgencyInvoiceAwaitingInterface {
  id?: number;
  party_code: number
  company_name: string
  candidate_name: string
  passport_no: string
  actual_profession: string
  visa_profession: string
  agent_name: string
  rc_name: string
  visa_received_date: string
  visa_expire_date: string
  ticketing_sector_from: number
  ticketing_sector_to: number
  ticketing_pnr_no: string
  ticketing_departure_date: string
  required_date: string
  priority: string
  air_ticket: string
  air_line: string
  ticket_issue_date: string
  agency: string
  amount: number
  ticketing_invoice_no: string
  ticketing_invoice_date: string

  
  checked?:number
}

export interface TicketAgencyInvoiceAwaitingAdapter {
  id?: number;
  party_code: number
  company_name: string
  candidate_name: string
  passport_no: string
  actual_profession: string
  visa_profession: string
  agent_name: string
  rc_name: string
  visa_received_date: string
  visa_expire_date: string
  ticketing_sector_from: number
  ticketing_sector_to: number
  ticketing_pnr_no: string
  ticketing_departure_date: string
  required_date: string
  priority: string
  air_ticket: string
  air_line: string
  ticket_issue_date: string
  agency: string
  amount: number
  ticketing_invoice_no: string
  ticketing_invoice_date: string
}

export class TicketAgencyInvoiceAwaitingConverter {
  // private i: TicketAgencyInvoiceAwaitingInterface
  // private a: TicketAgencyInvoiceAwaitingAdapter

  /**
   * toInterface
   */
  public static toInterface(a: TicketAgencyInvoiceAwaitingAdapter) {
    const data: TicketAgencyInvoiceAwaitingInterface = {
      id: a.id,
      party_code: a.party_code,
      company_name: a.company_name,
      candidate_name: a.candidate_name,
      passport_no: a.passport_no,
      actual_profession: a.actual_profession,
      visa_profession: a.visa_profession,
      agent_name: a.agent_name,
      rc_name: a.rc_name,
      visa_received_date: a.visa_received_date,
      visa_expire_date: a.visa_expire_date,
      ticketing_sector_from: a.ticketing_sector_from,
      ticketing_sector_to: a.ticketing_sector_to,
      ticketing_pnr_no: a.ticketing_pnr_no,
      ticketing_departure_date: a.ticketing_departure_date,
      required_date: a.required_date,
      priority: a.priority,
      air_ticket: a.air_ticket,
      air_line: a.air_line,
      ticket_issue_date: a.ticket_issue_date,
      agency: a.agency,
      amount: a.amount,
      ticketing_invoice_no: a.ticketing_invoice_no,
      ticketing_invoice_date:a.ticketing_invoice_date
    };

    return data;

  }

  public static toInterfaceList(a_list: TicketAgencyInvoiceAwaitingAdapter[]) {
    const data_list: TicketAgencyInvoiceAwaitingInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: TicketAgencyInvoiceAwaitingInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: TicketAgencyInvoiceAwaitingAdapter = {
      id: i.id,
      party_code: i.party_code,
      company_name: i.company_name,
      candidate_name: i.candidate_name,
      passport_no: i.passport_no,
      actual_profession: i.actual_profession,
      visa_profession: i.visa_profession,
      agent_name: i.agent_name,
      rc_name: i.rc_name,
      visa_received_date: i.visa_received_date,
      visa_expire_date: i.visa_expire_date,
      ticketing_sector_from: i.ticketing_sector_from,
      ticketing_sector_to: i.ticketing_sector_to,
      ticketing_pnr_no: i.ticketing_pnr_no,
      ticketing_departure_date: i.ticketing_departure_date,
      required_date: i.required_date,
      priority: i.priority,
      air_ticket: i.air_ticket,
      air_line: i.air_line,
      ticket_issue_date: i.ticket_issue_date,
      agency: i.agency,
      amount: i.amount,
      ticketing_invoice_no: i.ticketing_invoice_no,
      ticketing_invoice_date: i.ticketing_invoice_date,
    };
    return data;
  }

  public static toAdapterList(i_list: TicketAgencyInvoiceAwaitingInterface[]) {
    const data_list: TicketAgencyInvoiceAwaitingAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}


