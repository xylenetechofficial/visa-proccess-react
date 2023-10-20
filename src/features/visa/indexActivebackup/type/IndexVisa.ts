export interface ActiveIndexInterface{
    id?:number
    job_order_no:string
    index_date:string
    company_name:string
    party_code:string
    quantity:string
    used_qty:number
    dead_visa_qty:string
    expired_visa_qty:number
    cancelled_qty:number
    balance_qty:number
    visa_issue_date:string
    visa_expiry_date:string
    country:string
    visa_date_arabic:string
    visa_number:string	
    visa_fee:string
    visa_authorization:string
    visa_submission:string
    sponsor_id:string
    aravic_sponsor_name:string	
    division:string
    number_of_days_left_for_visa_expiry:string
    mofa_done:string
    pp_submission:string
    visa_cancel:number
                                                                                   
}

// adapter

export interface ActiveIndexAdapter{
    id?:number
    job_order_no:string
    index_date:string
    company_name:string
    party_code:string
    quantity:string
    used_qty:number
    dead_visa_qty:string
    expired_visa_qty:number
    cancelled_qty:number
    balance_qty:number
    visa_issue_date:string
    visa_expiry_date:string
    country:string
    visa_date_arabic:string
    visa_number:string	
    visa_fee:string
    visa_authorization:string
    visa_submission:string
    sponsor_id:string
    aravic_sponsor_name:string	
    division:string
    number_of_days_left_for_visa_expiry:string
    mofa_done:string
    pp_submission:string
    visa_cancel:number
                                                                                   
}

// converter class

export class ActiveIndexConverter {
    // private i: FullIndexInterface
    // private a: FullIndexAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: ActiveIndexAdapter) {
      const data: ActiveIndexInterface = {
        id:a.id,
        job_order_no:a.job_order_no,
        index_date:a.index_date,
        company_name:a.company_name,
        party_code:a.party_code,
        quantity:a.quantity,
        used_qty:a.used_qty,
        dead_visa_qty:a.dead_visa_qty,
        expired_visa_qty:a.expired_visa_qty,
        cancelled_qty:a.cancelled_qty,
        balance_qty:a.balance_qty,
        visa_issue_date:a.visa_issue_date,
        visa_expiry_date:a.visa_expiry_date,
        country:a.country,
        visa_date_arabic:a.visa_date_arabic,
        visa_number:a.visa_number,
        visa_fee:a.visa_fee,
        visa_authorization:a.visa_authorization,
        visa_submission:a.visa_submission,
        sponsor_id:a.sponsor_id,
        aravic_sponsor_name:a.aravic_sponsor_name,
        division:a.division,
        number_of_days_left_for_visa_expiry:a.number_of_days_left_for_visa_expiry,
        mofa_done:a.mofa_done,
        pp_submission:a.pp_submission,
        visa_cancel:a.visa_cancel,
      };
      return data;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: ActiveIndexInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: ActiveIndexAdapter = {
        id:i.id,
        job_order_no:i.job_order_no,
        index_date:i.index_date,
        company_name:i.company_name,
        party_code:i.party_code,
        quantity:i.quantity,
        used_qty:i.used_qty,
        dead_visa_qty:i.dead_visa_qty,
        expired_visa_qty:i.expired_visa_qty,
        cancelled_qty:i.cancelled_qty,
        balance_qty:i.balance_qty,
        visa_issue_date:i.visa_issue_date,
        visa_expiry_date:i.visa_expiry_date,
        country:i.country,
        visa_date_arabic:i.visa_date_arabic,
        visa_number:i.visa_number,
        visa_fee:i.visa_fee,
        visa_authorization:i.visa_authorization,
        visa_submission:i.visa_submission,
        sponsor_id:i.sponsor_id,
        aravic_sponsor_name:i.aravic_sponsor_name,
        division:i.division,
        number_of_days_left_for_visa_expiry:i.number_of_days_left_for_visa_expiry,
        mofa_done:i.mofa_done,
        pp_submission:i.pp_submission,
        visa_cancel:i.visa_cancel,
      };
      return data;
    }
  }
  