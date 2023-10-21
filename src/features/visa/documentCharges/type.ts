

export interface DocumentChargesInterface{
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
    document_charges:string
   
  }
  
  // adapter
  
  export interface DocumentChargesAdapter{
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
    document_charges:string
                                                                                     
  }
  
  // converter class
  
  export class DocumentChargesConverter {
      // private i: DocumentChargesInterface
      // private a: DocumentChargesAdapter
    
      /**
       * toInterface
       */
      public static toInterface(a: DocumentChargesAdapter) {
        const data: DocumentChargesInterface = {
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
          document_charges:a.document_charges,
        
        };
        return data;
      }

      public static toInterfaceList(a_list: DocumentChargesAdapter[]) {
        const data_list: DocumentChargesInterface[] = [];
    
        for (let i = 0; i < a_list.length; i++) {
          const element = a_list[i];
          data_list.push(this.toInterface(element));
        }
    
        return data_list;
      }

    
      /**
       * toAdapter
       */
      public static toAdapter(i: DocumentChargesInterface) {
        console.log("i"); // Only Dev
        console.log(i); // Only Dev
        const data: DocumentChargesAdapter = {
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
          document_charges:i.document_charges,
         
        };
        return data;
      }

      public static toAdapterList(i_list: DocumentChargesInterface[]) {
        const data_list: DocumentChargesAdapter[] = [];
    
        for (let i = 0; i < i_list.length; i++) {
          const element = i_list[i];
          data_list.push(this.toAdapter(element));
        }
    
        return data_list;
      }
    }
    