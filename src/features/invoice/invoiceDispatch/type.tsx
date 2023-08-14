
export interface InvoiceDispatchInterface {
    id:number,
    company_name?: string,
    invoice_number: string,
    invoice_date: string,
    invoice_type: string,
    total_charges: number,
    invoice_sector: string,
    courier_date: string,
    received: string,
    received_date:string ,
  
  
  }
  
  export interface InvoiceDispatchAdapter {
    id:number,
    company_name?: string,
    invoice_number: string,
    invoice_date: string,
    invoice_type: string,
    total_charges: number,
    invoice_sector: string,
    courier_date: string,
    received: string,
    received_date:string ,
  
  
  }
  
  export class InvoiceDispatchConverter {
    // private i: ClientInvoiceChargesInterface
    // private a: ClientInvoiceChargesAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: InvoiceDispatchAdapter) {
      const data: InvoiceDispatchInterface = {
        id:a.id,
        company_name:a.company_name,
        invoice_number:a.invoice_number,
        invoice_date:a.invoice_date,
        invoice_type:a.invoice_type,
        total_charges:a.total_charges,
        invoice_sector:a.invoice_sector,
        courier_date:a.courier_date,
        received:a.received,
        received_date:a.received_date
  
      };
      return data;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: InvoiceDispatchInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: InvoiceDispatchAdapter = {
        
        id:i.id,
        company_name:i.company_name,
        invoice_number:i.invoice_number,
        invoice_date:i.invoice_date,
        invoice_type:i.invoice_type,
        total_charges:i.total_charges,
        invoice_sector:i.invoice_sector,
        courier_date:i.courier_date,
        received:i.received,
        received_date:i.received_date
   };
      return data;
    }
  }
  
  
  export interface AddInvoiceInterface {
    id:number,
    received:string,
    received_date:string,
  }
  
  export interface AddInvoiceDispatchInterface {
  
    invoice_list: AddInvoiceInterface[],
    
  }
  
  export interface AddInvoiceDispatchAdapter {
  
    invoice_list: AddInvoiceInterface[],
    
  }
  
 
  export class AddInvoiceDispatchConverter {
    // private i: AddCandidateInvoiceNumberInterface
    // private a: AddPenaltyAfterDeploymentAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: AddInvoiceDispatchAdapter) {
      const data: AddInvoiceDispatchInterface = {
        invoice_list: a?.invoice_list?.map((item) => ({
          id:item.id,
          received:item.received,
          received_date:item.received_date,
        })),
    
      };
      return data;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: AddInvoiceDispatchInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: AddInvoiceDispatchAdapter = {
  
        invoice_list: i?.invoice_list?.map((item) => ({
          id:item.id,
          received:item.received,
          received_date:item.received_date,})),
        
      };
      return data;
    }
  }
  