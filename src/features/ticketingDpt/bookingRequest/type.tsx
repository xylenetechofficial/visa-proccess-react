export interface BookingRequestInterface {
 
    id?: number,
    company_id: number,
    invoice_number:string,
    invoice_date:string,
    invoice_amount:string,

  
  }

  
  // block_visa
  export interface BookingRequestAdapter {
    id?: number,
    company_id: number,
    invoice_number:string,
    invoice_date:string,
    invoice_amount:string,
  }
  
  export class BookingRequestConverter {
    // private i: BookingRequestInterface
    // private a: BookingRequestAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: BookingRequestAdapter) {
      const data: BookingRequestInterface = {
        id:a?.id,
        company_id:a?.company_id,
        invoice_number:a?.invoice_number,
        invoice_date:a?.invoice_date,
        invoice_amount:a?.invoice_amount,
    
      };
      return data;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: BookingRequestInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: BookingRequestAdapter = {
        id:i?.id,
        company_id:i?.company_id,
        invoice_number:i?.invoice_number,
        invoice_date:i?.invoice_date,
        invoice_amount:i?.invoice_amount,
      };
      return data;
    }
  }
  