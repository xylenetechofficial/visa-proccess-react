
export interface PenaltyChargesInterface{
    id?:number
    party_code: number
    company_name: string
    candidate_name: string
    passport_no: string
    actual_profession: string
    visa_profession: string
    agent: string
    visa_recieved_date: string
    process_charges:string   
    training_charges:string 
    sector_charges:string 
    partial_charges:string 
    consulate_setting_charges:string
    client_invoice:string
    penalty_charges:string
  }
  
  // adapter
  
  export interface PenaltyChargesAdapter{
    id?:number
    party_code: number
    company_name: string
    candidate_name: string
    passport_no: string
    actual_profession: string
    visa_profession: string
    agent: string
    visa_recieved_date: string
    process_charges:string   
    training_charges:string 
    sector_charges:string 
    partial_charges:string 
    consulate_setting_charges:string
    client_invoice:string
    penalty_charges:string
                                                                                     
  }
  
  // converter class
  
  export class PenaltyChargesConverter {
      // private i: PenaltyChargesInterface
      // private a: PenaltyChargesAdapter
    
      /**
       * toInterface
       */
      public static toInterface(a: PenaltyChargesAdapter) {
        const data: PenaltyChargesInterface = {
          id:a.id,
          party_code:a.party_code,
          company_name: a.company_name,
          candidate_name: a.candidate_name,
          passport_no: a.passport_no,
          actual_profession: a.actual_profession,
          visa_profession: a.visa_profession,
          agent: a.agent,
          visa_recieved_date: a.visa_recieved_date,
          process_charges:a.process_charges,   
          training_charges:a.training_charges,
          sector_charges:a.sector_charges,
          partial_charges:a.partial_charges,
          consulate_setting_charges:a.consulate_setting_charges,
          client_invoice:a.client_invoice,
          penalty_charges:a.penalty_charges,
        };
        return data;
      }
    
      public static toInterfaceList(a_list: PenaltyChargesAdapter[]) {
        const data_list: PenaltyChargesInterface[] = [];
    
        for (let i = 0; i < a_list.length; i++) {
          const element = a_list[i];
          data_list.push(this.toInterface(element));
        }
    
        return data_list;
      }

      /**
       * toAdapter
       */
      public static toAdapter(i: PenaltyChargesInterface) {
        console.log("i"); // Only Dev
        console.log(i); // Only Dev
        const data: PenaltyChargesAdapter = {
          id:i.id,
          party_code:i.party_code,
          company_name: i.company_name,
          candidate_name: i.candidate_name,
          passport_no: i.passport_no,
          actual_profession: i.actual_profession,
          visa_profession: i.visa_profession,
          agent: i.agent,
          visa_recieved_date: i.visa_recieved_date,
          process_charges:i.process_charges,   
          training_charges:i.training_charges,
          sector_charges:i.sector_charges,
          partial_charges:i.partial_charges,
          consulate_setting_charges:i.consulate_setting_charges,
          client_invoice:i.client_invoice,
          penalty_charges:i.penalty_charges,
        };
        return data;
      }

      public static toAdapterList(i_list: PenaltyChargesInterface[]) {
        const data_list: PenaltyChargesAdapter[] = [];
    
        for (let i = 0; i < i_list.length; i++) {
          const element = i_list[i];
          data_list.push(this.toAdapter(element));
        }
    
        return data_list;
      }

    }
    