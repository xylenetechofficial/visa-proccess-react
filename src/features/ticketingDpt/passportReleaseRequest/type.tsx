export interface PassportReleaseRequestInterface {
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
    release_by_date: string,
}


// block_visa
export interface PassportReleaseRequestAdapter {
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
    release_by_date: string,
}

export class PassportReleaseRequestConverter {
    // private i: TicketDashboardInterface
    // private a: TicketDashboardAdapter

    /**
     * toInterface
     */
    public static toInterface(a: PassportReleaseRequestAdapter) {
        const data: PassportReleaseRequestInterface = {


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
            release_by_date: a.release_by_date,
        };
        return data;
    }

    /**
     * toAdapter
     */
    public static toAdapter(i: PassportReleaseRequestInterface) {
        console.log("i"); // Only Dev
        console.log(i); // Only Dev
        const data: PassportReleaseRequestAdapter = {

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
            release_by_date: i.release_by_date,
        };
        return data;
    }
}
