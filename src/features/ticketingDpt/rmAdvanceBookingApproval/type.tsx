export interface RMAdvanceBookingApprovalInterface {
    id?: number,
    party_code: string,
    company_name: string,
    candidate_name: string,
    pp_no: string,
    actual_profession: string,
    visa_profession: string,
    agent: string,
    given_to: string,
    payment: string,
    is_invoice: string,
    emigration_required:string,
    emigration_done:string,
    payment_date: string,
}


// block_visa
export interface RMAdvanceBookingApprovalAdapter {
    id?: number,
    party_code: string,
    company_name: string,
    candidate_name: string,
    pp_no: string,
    actual_profession: string,
    visa_profession: string,
    agent: string,
    given_to: string,
    payment: string,
    is_invoice: string,
    emigration_required:string,
    emigration_done:string,
    payment_date: string,
}

export class RMAdvanceBookingApprovalConverter {
    // private i: RMAdvanceBookingApprovalInterface
    // private a: RMAdvanceBookingApprovalAdapter

    /**
     * toInterface
     */
    public static toInterface(a: RMAdvanceBookingApprovalAdapter) {
        const data: RMAdvanceBookingApprovalInterface = {


            id:a.id,
            party_code:a.party_code,
            company_name:a.company_name,
            candidate_name:a.candidate_name,
            pp_no:a.pp_no,
            actual_profession:a.actual_profession,
            visa_profession:a.visa_profession,
            agent:a.agent,
            given_to:a.given_to,
            payment:a.payment,
            is_invoice:a.is_invoice,
            emigration_required:a.emigration_required,
            emigration_done:a.emigration_done,
            payment_date:a.payment_date,
        };
        return data;
    }

    /**
     * toAdapter
     */
    public static toAdapter(i: RMAdvanceBookingApprovalInterface) {
        console.log("i"); // Only Dev
        console.log(i); // Only Dev
        const data: RMAdvanceBookingApprovalAdapter = {

            id:i.id,
            party_code:i.party_code,
            company_name:i.company_name,
            candidate_name:i.candidate_name,
            pp_no:i.pp_no,
            actual_profession:i.actual_profession,
            visa_profession:i.visa_profession,
            agent:i.agent,
            given_to:i.given_to,
            payment:i.payment,
            is_invoice:i.is_invoice,
            emigration_required:i.emigration_required,
            emigration_done:i.emigration_done,
            payment_date:i.payment_date,
        };
        return data;
    }
}
