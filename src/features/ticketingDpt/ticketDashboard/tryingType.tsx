export interface TypingInterface {

    id:number,
    setting_visa:string,
    job_order_no:string,
    company_name:string,
    candidate_name:string,
    passport_no:string,
    actual_profession:string,
    mofa_number:string,
    agent_name:string,
    rc_name:string,
    visa_received_date:string,
    visa_expire_date:string,
    ticketing_sector_from:string,
    ticketing_sector_to:string,
    air_ticket:string,
    ticketing_pnr_no:string,
    ticketing_departure_date:string,
    ticket_issue_date:string,
    agency:number,
    amount:number,
    required_date:string,
    priority:string,
    air_line:string,
    visa_no:string,
    visa_date:string,
    pp_expiry_date:string,
    visa_issued_date:string,

}

export interface TypingAdapter {

    id:number,
    setting_visa:string,
    job_order_no:string,
    company_name:string,
    candidate_name:string,
    passport_no:string,
    actual_profession:string,
    mofa_number:string,
    agent_name:string,
    rc_name:string,
    visa_received_date:string,
    visa_expire_date:string,
    ticketing_sector_from:string,
    ticketing_sector_to:string,
    air_ticket:string,
    ticketing_pnr_no:string,
    ticketing_departure_date:string,
    ticket_issue_date:string,
    agency:number,
    amount:number,
    required_date:string,
    priority:string,
    air_line:string,
    visa_no:string,
    visa_date:string,
    pp_expiry_date:string,
    visa_issued_date:string,

}

export class TypingConverter {
    public static toInterface(a: TypingAdapter) {
        const data: TypingInterface = {

            id:a.id,
            setting_visa:a.setting_visa,
            job_order_no:a.job_order_no,
            company_name:a.company_name,
            candidate_name:a.candidate_name,
            passport_no:a.passport_no,
            actual_profession:a.actual_profession,
            mofa_number:a.mofa_number,
            agent_name:a.agent_name,
            rc_name:a.rc_name,
            visa_received_date:a.visa_received_date,
            visa_expire_date:a.visa_expire_date,
            ticketing_sector_from:a.ticketing_sector_from,
            ticketing_sector_to:a.ticketing_sector_to,
            air_ticket:a.air_ticket,
            ticketing_pnr_no:a.ticketing_pnr_no,
            ticketing_departure_date:a.ticketing_departure_date,
            ticket_issue_date:a.ticket_issue_date,
            agency:a.agency,
            amount:a.amount,
            required_date:a.required_date,
            priority:a.priority,
            air_line:a.air_line,
            visa_no:a.visa_no,
            visa_date:a.visa_date,
            pp_expiry_date:a.pp_expiry_date,
            visa_issued_date:a.visa_issued_date,
        
        };
        return data;
    }

    public static toAdapter(i: TypingInterface) {
        const data: TypingAdapter = {
            id:i.id,
            setting_visa:i.setting_visa,
            job_order_no:i.job_order_no,
            company_name:i.company_name,
            candidate_name:i.candidate_name,
            passport_no:i.passport_no,
            actual_profession:i.actual_profession,
            mofa_number:i.mofa_number,
            agent_name:i.agent_name,
            rc_name:i.rc_name,
            visa_received_date:i.visa_received_date,
            visa_expire_date:i.visa_expire_date,
            ticketing_sector_from:i.ticketing_sector_from,
            ticketing_sector_to:i.ticketing_sector_to,
            air_ticket:i.air_ticket,
            ticketing_pnr_no:i.ticketing_pnr_no,
            ticketing_departure_date:i.ticketing_departure_date,
            ticket_issue_date:i.ticket_issue_date,
            agency:i.agency,
            amount:i.amount,
            required_date:i.required_date,
            priority:i.priority,
            air_line:i.air_line,
            visa_no:i.visa_no,
            visa_date:i.visa_date,
            pp_expiry_date:i.pp_expiry_date,
            visa_issued_date:i.visa_issued_date,
        };
        return data;
    }
    public static toAdapterList(i_list: TypingInterface[]) {
        const data_list: TypingAdapter[] = [];

        for (let i = 0; i < i_list.length; i++) {
            const element = i_list[i];
            data_list.push(this.toAdapter(element));
        }

        return data_list;
    }
}