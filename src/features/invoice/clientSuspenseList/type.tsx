
export interface ClientSuspenseInterface {
 
    id?: number,
    company_id: number,
    company_name:string,
    payment_received_date:string,
    amount_received:number,
    payment_description:string,

  
  }

  
  // block_visa
  export interface ClientSuspenseAdapter {
    id?: number,
    company_id: number,
    company_name:string,
    payment_received_date:string,
    amount_received:number,
    payment_description:string,
  }
  
  export class ClientSuspenseConverter {
    // private i: ClientSuspenseInterface
    // private a: ClientSuspenseAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: ClientSuspenseAdapter) {
      const data: ClientSuspenseInterface = {
        id:a?.id,
        company_id:a?.company_id,
        company_name:a?.company_name,
        payment_received_date:a?.payment_received_date,
        amount_received:a?.amount_received,
        payment_description:a?.payment_description,
    
      };
      return data;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: ClientSuspenseInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: ClientSuspenseAdapter = {
        id:i?.id,
        company_id:i?.company_id,
        company_name:i?.company_name,
        payment_received_date:i?.payment_received_date,
        amount_received:i?.amount_received,
        payment_description:i?.payment_description,
      };
      return data;
    }
  }
  