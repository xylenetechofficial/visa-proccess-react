

export interface ConsulateChargesInterface{
    id?:number
    candidate_name: string
    party_code: number
    company_name: string
    passport_no: string
    actual_profession: string
    visa_profession: string
    agent: string
    mufa_number: string
    visa_authorization:string   
    division:string 
    visa_submission:string 
    visa_fee:string 
    consulate_setting_charges:string
   
  }
  
  // adapter
  
  export interface ConsulateChargesAdapter{
    id?:number
    party_code: number
    company_name: string
    candidate_name: string
    passport_no: string
    actual_profession: string
    visa_profession: string
    agent: string
    mufa_number: string
    visa_authorization:string   
    division:string 
    visa_submission:string 
    visa_fee:string 
    consulate_setting_charges:string
                                                                                     
  }
  
  // converter class
  
  export class ConsulateChargesConverter {
      // private i: ConsulateChargesInterface
      // private a: ConsulateChargesAdapter
    
      /**
       * toInterface
       */
      public static toInterface(a: ConsulateChargesAdapter) {
        const data: ConsulateChargesInterface = {
          id:a.id,
          party_code:a.party_code,
          company_name: a.company_name,
          candidate_name: a.candidate_name,
          passport_no: a.passport_no,
          actual_profession: a.actual_profession,
          visa_profession: a.visa_profession,
          agent: a.agent,
          mufa_number: a.mufa_number,
          visa_authorization:a.visa_authorization,   
          division:a.division,
          visa_submission:a.visa_submission,
          visa_fee:a.visa_fee,
          consulate_setting_charges:a.consulate_setting_charges,
        
        };
        return data;
      }
    
      /**
       * toAdapter
       */
      public static toAdapter(i: ConsulateChargesInterface) {
        console.log("i"); // Only Dev
        console.log(i); // Only Dev
        const data: ConsulateChargesAdapter = {
          id:i.id,
          party_code:i.party_code,
          company_name: i.company_name,
          candidate_name: i.candidate_name,
          passport_no: i.passport_no,
          actual_profession: i.actual_profession,
          visa_profession: i.visa_profession,
          agent: i.agent,
          mufa_number: i.mufa_number,
          visa_authorization:i.visa_authorization,   
          division:i.division,
          visa_submission:i.visa_submission,
          visa_fee:i.visa_fee,
          consulate_setting_charges:i.consulate_setting_charges,
         
        };
        return data;
      }
    }
    