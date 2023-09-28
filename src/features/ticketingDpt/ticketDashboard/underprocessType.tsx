export interface UnderprocessInterface {

    actual_profession: string,
    agency: number
    agent_name: string,
    air_line: string,
    air_ticket: string,
    amount: number,
    candidate_name: string,
    company_name: string,
    id: number,
    job_order_no: string,
    mofa_number: string,
    passport_no: string,
    pp_expiry_date: string,
    priority: string,
    rc_name: string,
    required_date: string,
    setting_visa: string,
    ticket_issue_date: string,
    ticketing_departure_date: string,
    ticketing_pnr_no: string,
    ticketing_sector_from: string,
    ticketing_sector_to: string,
    visa_date: string,
    visa_expire_date: string,
    visa_issued_date: string,
    visa_no: string,
    visa_received_date: string,
}

export interface UnderprocessAdapter {

    actual_profession: string,
    agency: number
    agent_name: string,
    air_line: string,
    air_ticket: string,
    amount: number,
    candidate_name: string,
    company_name: string,
    id: number,
    job_order_no: string,
    mofa_number: string,
    passport_no: string,
    pp_expiry_date: string,
    priority: string,
    rc_name: string,
    required_date: string,
    setting_visa: string,
    ticket_issue_date: string,
    ticketing_departure_date: string,
    ticketing_pnr_no: string,
    ticketing_sector_from: string,
    ticketing_sector_to: string,
    visa_date: string,
    visa_expire_date: string,
    visa_issued_date: string,
    visa_no: string,
    visa_received_date: string,
}

export class UnderprocessConverter {
    public static toInterface(a: UnderprocessAdapter) {
        const data: UnderprocessInterface = {

            actual_profession: a.actual_profession,
            agency: a.agency,
            agent_name: a.agent_name,
            air_line: a.air_line,
            air_ticket: a.air_ticket,
            amount: a.amount,
            candidate_name: a.candidate_name,
            company_name: a.company_name,
            id: a.id,
            job_order_no: a.job_order_no,
            mofa_number: a.mofa_number,
            passport_no: a.passport_no,
            pp_expiry_date: a.pp_expiry_date,
            priority: a.priority,
            rc_name: a.rc_name,
            required_date: a.required_date,
            setting_visa: a.setting_visa,
            ticket_issue_date: a.ticket_issue_date,
            ticketing_departure_date: a.ticketing_departure_date,
            ticketing_pnr_no: a.ticketing_pnr_no,
            ticketing_sector_from: a.ticketing_sector_from,
            ticketing_sector_to: a.ticketing_sector_to,
            visa_date: a.visa_date,
            visa_expire_date: a.visa_expire_date,
            visa_issued_date: a.visa_issued_date,
            visa_no: a.visa_no,
            visa_received_date: a.visa_received_date,

        };
        return data;
    }

    public static toAdapter(i: UnderprocessInterface) {
        const data: UnderprocessAdapter = {
            actual_profession: i.actual_profession,
            agency: i.agency,
            agent_name: i.agent_name,
            air_line: i.air_line,
            air_ticket: i.air_ticket,
            amount: i.amount,
            candidate_name: i.candidate_name,
            company_name: i.company_name,
            id: i.id,
            job_order_no: i.job_order_no,
            mofa_number: i.mofa_number,
            passport_no: i.passport_no,
            pp_expiry_date: i.pp_expiry_date,
            priority: i.priority,
            rc_name: i.rc_name,
            required_date: i.required_date,
            setting_visa: i.setting_visa,
            ticket_issue_date: i.ticket_issue_date,
            ticketing_departure_date: i.ticketing_departure_date,
            ticketing_pnr_no: i.ticketing_pnr_no,
            ticketing_sector_from: i.ticketing_sector_from,
            ticketing_sector_to: i.ticketing_sector_to,
            visa_date: i.visa_date,
            visa_expire_date: i.visa_expire_date,
            visa_issued_date: i.visa_issued_date,
            visa_no: i.visa_no,
            visa_received_date: i.visa_received_date,
        };
        return data;
    }
    public static toAdapterList(i_list: UnderprocessInterface[]) {
        const data_list: UnderprocessAdapter[] = [];

        for (let i = 0; i < i_list.length; i++) {
            const element = i_list[i];
            data_list.push(this.toAdapter(element));
        }

        return data_list;
    }
}