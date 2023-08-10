export interface TicketAgencyInvoicesInterface {

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
    tally_entry: string,
}


// block_visa
export interface TicketAgencyInvoicesAdapter {
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
    tally_entry: string,
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
            tally_entry: a.tally_entry,
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
            tally_entry: i.tally_entry,
        };
        return data;
    }
}
