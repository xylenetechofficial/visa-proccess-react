export interface FullIndexListInterface {
    "id": number,
    "job_order_no": string,
    "index_date": string,
    "company_name": string,
    "party_code": number,
    "quantity": number,
    "used_qty": number,
    "dead_visa_qty": number,
    "expired_visa_qty": number,
    "cancelled_qty": number,
    "balance_qty": number,
    "visa_issue_date": string,
    "visa_expiry_date": string,
    "country": number,
    "visa_date_arabic": string,
    "visa_number": string,
    "visa_fee": number,
    "visa_authorization": number,
    "visa_submission": string,
    "sponsor_id": string,
    "aravic_sponsor_name": string,
    "division": string,
    "number_of_days_left_for_visa_expiry": number,
    "mofa_done": number,
    "pp_submission": number,
    "visa_cancel": number,
    
}

export interface FullIndexListAdapter {
    "id": number,
    "job_order_no": string,
    "index_date": string,
    "company_name": string,
    "party_code": number,
    "quantity": number,
    "used_qty": number,
    "dead_visa_qty": number,
    "expired_visa_qty": number,
    "cancelled_qty": number,
    "balance_qty": number,
    "visa_issue_date": string,
    "visa_expiry_date": string,
    "country": number,
    "visa_date_arabic": string,
    "visa_number": string,
    "visa_fee": number,
    "visa_authorization": number,
    "visa_submission": string,
    "sponsor_id": string,
    "aravic_sponsor_name": string,
    "division": string,
    "number_of_days_left_for_visa_expiry": number,
    "mofa_done": number,
    "pp_submission": number,
    "visa_cancel": number
}
export class FullIndexListConverter {
    // private i: FullIndexListInterface
    // private a: FullIndexListAdapter

    /**
     * toInterface
     */
    public static toInterface(a: FullIndexListAdapter) {
        const data: FullIndexListInterface = {
            "id": a.id,
            "job_order_no": a.job_order_no,
            "index_date": a.index_date,
            "company_name": a.company_name,
            "party_code": a.party_code,
            "quantity": a.quantity,
            "used_qty": a.used_qty,
            "dead_visa_qty": a.dead_visa_qty,
            "expired_visa_qty": a.expired_visa_qty,
            "cancelled_qty": a.cancelled_qty,
            "balance_qty": a.balance_qty,
            "visa_issue_date": a.visa_issue_date,
            "visa_expiry_date": a.visa_expiry_date,
            "country": a.country,
            "visa_date_arabic": a.visa_date_arabic,
            "visa_number": a.visa_number,
            "visa_fee": a.visa_fee,
            "visa_authorization": a.visa_authorization,
            "visa_submission": a.visa_submission,
            "sponsor_id": a.sponsor_id,
            "aravic_sponsor_name": a.aravic_sponsor_name,
            "division": a.division,
            "number_of_days_left_for_visa_expiry": a.number_of_days_left_for_visa_expiry,
            "mofa_done": a.mofa_done,
            "pp_submission": a.pp_submission,
            "visa_cancel": a.visa_cancel
        };
        return data;
    }

    /**
     * toAdapter
     */
    public static toAdapter(i: FullIndexListInterface) {
        console.log("i"); // Only Dev
        console.log(i); // Only Dev
        const data: FullIndexListAdapter = {
            "id": i.id,
            "job_order_no": i.job_order_no,
            "index_date": i.index_date,
            "company_name": i.company_name,
            "party_code": i.party_code,
            "quantity": i.quantity,
            "used_qty": i.used_qty,
            "dead_visa_qty": i.dead_visa_qty,
            "expired_visa_qty": i.expired_visa_qty,
            "cancelled_qty": i.cancelled_qty,
            "balance_qty": i.balance_qty,
            "visa_issue_date": i.visa_issue_date,
            "visa_expiry_date": i.visa_expiry_date,
            "country": i.country,
            "visa_date_arabic": i.visa_date_arabic,
            "visa_number": i.visa_number,
            "visa_fee": i.visa_fee,
            "visa_authorization": i.visa_authorization,
            "visa_submission": i.visa_submission,
            "sponsor_id": i.sponsor_id,
            "aravic_sponsor_name": i.aravic_sponsor_name,
            "division": i.division,
            "number_of_days_left_for_visa_expiry": i.number_of_days_left_for_visa_expiry,
            "mofa_done": i.mofa_done,
            "pp_submission": i.pp_submission,
            "visa_cancel": i.visa_cancel
        };
        return data;
    }



}
export interface VisaProfessionInterface {
    "id": number,
    "index_date": string,
    "company_name": string,
    "party_code": string,
    "visa_profession": string,
    "aravic_visa_category": string,
    "visa_quantity": number,
    "visa_used": number,
    "dead_visa_qty": number,
    "visa_balance": number,
    "mofa_done": number,
    "pp_submission": number,
    "rejected": number,
    "canceled": number
}
export interface VisaProfessionAdapter {
    "id": number,
    "index_date": string,
    "company_name": string,
    "party_code": string,
    "visa_profession": string,
    "aravic_visa_category": string,
    "visa_quantity": number,
    "visa_used": number,
    "dead_visa_qty": number,
    "visa_balance": number,
    "mofa_done": number,
    "pp_submission": number,
    "rejected": number,
    "canceled": number
}

export class FVisaProfessionConverter {
    // private i: VisaProfessionInterface
    // private a: VisaProfessionAdapter

    /**
     * toInterface
     */
    public static toInterface(a: VisaProfessionAdapter) {
        const data: VisaProfessionInterface = {
            "id": a.id,
            "index_date": a.index_date,
            "company_name": a.company_name,
            "party_code": a.party_code,
            "visa_profession": a.visa_profession,
            "aravic_visa_category": a.aravic_visa_category,
            "visa_quantity": a.visa_quantity,
            "visa_used": a.visa_used,
            "dead_visa_qty": a.dead_visa_qty,
            "visa_balance": a.visa_balance,
            "mofa_done": a.mofa_done,
            "pp_submission": a.pp_submission,
            "rejected": a.rejected,
            "canceled": a.canceled
        };
        return data;
    }

    /**
     * toAdapter
     */
    public static toAdapter(i: VisaProfessionInterface) {
        console.log("i"); // Only Dev
        console.log(i); // Only Dev
        const data: VisaProfessionAdapter = {
            "id": i.id,
            "index_date": i.index_date,
            "company_name": i.company_name,
            "party_code": i.party_code,
            "visa_profession": i.visa_profession,
            "aravic_visa_category": i.aravic_visa_category,
            "visa_quantity": i.visa_quantity,
            "visa_used": i.visa_used,
            "dead_visa_qty": i.dead_visa_qty,
            "visa_balance": i.visa_balance,
            "mofa_done": i.mofa_done,
            "pp_submission": i.pp_submission,
            "rejected": i.rejected,
            "canceled": i.canceled
        };
        return data;
    }



}

export interface VisaProfessionEditInterface {
    aravic_visa_category: string,
    canceled: number,
    company_name: string,
    dead_visa_qty: number,
    id: number,
    index_date: string,
    mofa_done: number,
    party_code: string,
    pp_submission: number,
    rejected: number,
    visa_balance: number,
    visa_profession: string,
    visa_quantity: number,
    visa_used: number,
    remarks:string
}
export interface VisaProfessionEditAdapter {
    aravic_visa_category: string,
    canceled: number,
    company_name: string,
    dead_visa_qty: number,
    id: number,
    index_date: string,
    mofa_done: number,
    party_code: string,
    pp_submission: number,
    rejected: number,
    visa_balance: number,
    visa_profession: string,
    visa_quantity: number,
    visa_used: number,
    remarks:string
}

export class VisaProfessionEditConverter {
    // private i: VisaProfessionEditInterface
    // private a: VisaProfessionEditAdapter

    /**
     * toInterface
     */
    public static toInterface(a: VisaProfessionEditAdapter) {
        const data: VisaProfessionEditInterface = {
            aravic_visa_category: a.aravic_visa_category,
            canceled: a.canceled,
            company_name: a.company_name,
            dead_visa_qty: a.dead_visa_qty,
            id: a.id,
            index_date: a.index_date,
            mofa_done: a.mofa_done,
            party_code: a.party_code,
            pp_submission: a.pp_submission,
            rejected: a.rejected,
            visa_balance: a.visa_balance,
            visa_profession: a.visa_profession,
            visa_quantity: a.visa_quantity,
            visa_used: a.visa_used,
            remarks:a.remarks
        };
        return data;
    }

    /**
     * toAdapter
     */
    public static toAdapter(i: VisaProfessionEditInterface) {
        console.log("i"); // Only Dev
        console.log(i); // Only Dev
        const data: VisaProfessionEditAdapter = {
            aravic_visa_category: i.aravic_visa_category,
            canceled: i.canceled,
            company_name: i.company_name,
            dead_visa_qty: i.dead_visa_qty,
            id: i.id,
            index_date: i.index_date,
            mofa_done: i.mofa_done,
            party_code: i.party_code,
            pp_submission: i.pp_submission,
            rejected: i.rejected,
            visa_balance: i.visa_balance,
            visa_profession: i.visa_profession,
            visa_quantity: i.visa_quantity,
            visa_used: i.visa_used,
            remarks:i.remarks
        };
        return data;
    }



}