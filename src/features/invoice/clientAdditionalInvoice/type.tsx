
export interface ClientAdditionalInvoiceInterface {
 
    id?: number,
    company_id: number,
    company_name?:string,
    invoice_number:string,
    invoice_date:string,
    invoice_amount:string,

  
  }

  
  // block_visa
  export interface ClientAdditionalInvoiceAdapter {
    id?: number,
    company_id: number,
    company_name?:string,
    invoice_number:string,
    invoice_date:string,
    invoice_amount:string,
  }
  
  export class ClientAdditionalInvoiceConverter {
    // private i: ClientAdditionalInvoiceInterface
    // private a: ClientAdditionalInvoiceAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: ClientAdditionalInvoiceAdapter) {
      const data: ClientAdditionalInvoiceInterface = {
        id:a?.id,
        company_id:a?.company_id,
        company_name:a?.company_name,
        invoice_number:a?.invoice_number,
        invoice_date:a?.invoice_date,
        invoice_amount:a?.invoice_amount,
    
      };
      return data;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: ClientAdditionalInvoiceInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: ClientAdditionalInvoiceAdapter = {
        id:i?.id,
        company_id:i?.company_id,
        company_name:i?.company_name,
        invoice_number:i?.invoice_number,
        invoice_date:i?.invoice_date,
        invoice_amount:i?.invoice_amount,
      };
      return data;
    }
  }
  