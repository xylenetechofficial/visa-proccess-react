export interface RMAdvanceBookingInterface {
    id?: number,
    party_code: string,
    company_name: string,
    candidate_name: string,
    pp_no: string,
    actual_profession: string,
    visa_profession: string,
    agent: string,
    visa_received_date: string,
    visa_authorization: string,
    given_to: string,
    payment: string,
    is_invoice: string,
    advance: string,
    payment_date: string,
}


// block_visa
export interface RMAdvanceBookingAdapter {
    id?: number,
    party_code: string,
    company_name: string,
    candidate_name: string,
    pp_no: string,
    actual_profession: string,
    visa_profession: string,
    agent: string,
    visa_received_date: string,
    visa_authorization: string,
    given_to: string,
    payment: string,
    is_invoice: string,
    advance: string,
    payment_date: string,
}

export class RMAdvanceBookingConverter {
    // private i: RMAdvanceBookingInterface
    // private a: RMAdvanceBookingAdapter

    /**
     * toInterface
     */
    public static toInterface(a: RMAdvanceBookingAdapter) {
        const data: RMAdvanceBookingInterface = {


            id: a.id,
            party_code: a.party_code,
            company_name: a.company_name,
            candidate_name: a.candidate_name,
            pp_no: a.pp_no,
            actual_profession: a.actual_profession,
            visa_profession: a.visa_profession,
            agent: a.agent,
            visa_received_date: a.visa_received_date,
            visa_authorization: a.visa_authorization,
            given_to: a.given_to,
            payment: a.payment,
            is_invoice: a.is_invoice,
            advance: a.advance,
            payment_date: a.payment_date,
        };
        return data;
    }

    /**
     * toAdapter
     */
    public static toAdapter(i: RMAdvanceBookingInterface) {
        console.log("i"); // Only Dev
        console.log(i); // Only Dev
        const data: RMAdvanceBookingAdapter = {

            id: i.id,
            party_code: i.party_code,
            company_name: i.company_name,
            candidate_name: i.candidate_name,
            pp_no: i.pp_no,
            actual_profession: i.actual_profession,
            visa_profession: i.visa_profession,
            agent: i.agent,
            visa_received_date: i.visa_received_date,
            visa_authorization: i.visa_authorization,
            given_to: i.given_to,
            payment: i.payment,
            is_invoice: i.is_invoice,
            advance: i.advance,
            payment_date: i.payment_date,
        };
        return data;
    }
}



export interface AddRMAdvanceInterface {

    selection_list: RMAdvanceBookingInterface[],
    
  }
  
  export interface AddRMAdvanceAdapter {
  
    selection_list: RMAdvanceBookingInterface[],
    
  }
  
  
  export class AddRMAdvanceConverter {
    // private i: AddCandidateInvoiceNumberInterface
    // private a: AddPenaltyAfterDeploymentAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: AddRMAdvanceAdapter) {
      const data: AddRMAdvanceInterface = {
        selection_list: a?.selection_list?.map((item) => ({
       
         
            id: item.id,
            party_code: item.party_code,
            company_name: item.company_name,
            candidate_name: item.candidate_name,
            pp_no: item.pp_no,
            actual_profession: item.actual_profession,
            visa_profession: item.visa_profession,
            agent: item.agent,
            visa_received_date: item.visa_received_date,
            visa_authorization: item.visa_authorization,
            given_to: item.given_to,
            payment: item.payment,
            is_invoice: item.is_invoice,
            advance: item.advance,
            payment_date: item.payment_date,
        })),
    
      };
      return data;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: AddRMAdvanceInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: AddRMAdvanceAdapter = {
  
        selection_list: i?.selection_list?.map((item) => ({
            id: item.id,
            party_code: item.party_code,
            company_name: item.company_name,
            candidate_name: item.candidate_name,
            pp_no: item.pp_no,
            actual_profession: item.actual_profession,
            visa_profession: item.visa_profession,
            agent: item.agent,
            visa_received_date: item.visa_received_date,
            visa_authorization: item.visa_authorization,
            given_to: item.given_to,
            payment: item.payment,
            is_invoice: item.is_invoice,
            advance: item.advance,
            payment_date: item.payment_date,
      })),
        
      };
      return data;
    }
  }