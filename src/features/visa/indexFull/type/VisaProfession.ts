export interface VisaProfessionInterface{
    id?:number
    index_date:string
    company_name:string
    party_code:string
    visa_profession:string
    aravic_visa_category:string
    visa_quantity:number
    visa_used:string
    dead_visa_qty:number
    visa_balance:number
    mofa_done:string
    pp_submission:string
                                                             
}

// adapter

export interface VisaProfessionAdapter{
    id?:number
    index_date:string
    company_name:string
    party_code:string
    visa_profession:string
    aravic_visa_category:string
    visa_quantity:number
    visa_used:string
    dead_visa_qty:number
    visa_balance:number
    mofa_done:string
    pp_submission:string
                                                                                   
}

// converter class

export class VisaProfessionConverter {
    // private i: VisaProfessionInterface
    // private a: VisaProfessionAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: VisaProfessionAdapter) {
      const data: VisaProfessionInterface = {
        id:a.id,
        index_date:a.index_date,
        company_name:a.company_name,
        party_code:a.party_code,
        visa_profession:a.visa_profession,
        aravic_visa_category:a.aravic_visa_category,
        visa_quantity:a.visa_quantity,
        visa_used:a.visa_used,
        dead_visa_qty:a.dead_visa_qty,
        visa_balance:a.visa_balance,
        mofa_done:a.mofa_done,
        pp_submission:a.pp_submission,
      };
      return data;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: VisaProfessionInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data:VisaProfessionAdapter = {
        id:i.id,
        index_date:i.index_date,
        company_name:i.company_name,
        party_code:i.party_code,
        visa_profession:i.visa_profession,
        aravic_visa_category:i.aravic_visa_category,
        visa_quantity:i.visa_quantity,
        visa_used:i.visa_used,
        dead_visa_qty:i.dead_visa_qty,
        visa_balance:i.visa_balance,
        mofa_done:i.mofa_done,
        pp_submission:i.pp_submission,
      };
      return data;
    }
  }
  