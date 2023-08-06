
export interface CourierDateInterface {
    
    company_name: string,
    invoice_number: string,
    invoice_date: string,
    invoice_type: string,
    total_charges: number,
    bank_name: string,
    invoice_sector: string,
    courier_date: string
  
  
  }
  
  export interface CourierDateAdapter {
    
    company_name: string,
    invoice_number: string,
    invoice_date: string,
    invoice_type: string,
    total_charges: number,
    bank_name: string,
    invoice_sector: string,
    courier_date: string
  
  
  }
  
  export class CourierDateConverter {
    // private i: ClientInvoiceChargesInterface
    // private a: ClientInvoiceChargesAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: CourierDateAdapter) {
      const data: CourierDateInterface = {
        
        company_name:a.company_name,
        invoice_number:a.invoice_number,
        invoice_date:a.invoice_date,
        invoice_type:a.invoice_type,
        total_charges:a.total_charges,
        bank_name:a.bank_name,
        invoice_sector:a.invoice_sector,
        courier_date:a.courier_date,
  
      };
      return data;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: CourierDateInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: CourierDateAdapter = {
        
        
        company_name:i.company_name,
        invoice_number:i.invoice_number,
        invoice_date:i.invoice_date,
        invoice_type:i.invoice_type,
        total_charges:i.total_charges,
        bank_name:i.bank_name,
        invoice_sector:i.invoice_sector,
        courier_date:i.courier_date,
   };
      return data;
    }
  }
  
  
  
  export interface AllSelectionInvoiceDateInterface {
  
    invoice_list: CourierDateInterface[],
    additional_invoice_list:CourierDateInterface[]
  }
  
  export interface AllSelectionInvoiceDateAdapter {
  
    invoice_list: CourierDateInterface[],
    additional_invoice_list:CourierDateInterface[]
  }
  
 
  export class AllSelectionInvoiceDateConverter {
    // private i: AddCandidateInvoiceNumberInterface
    // private a: AddPenaltyAfterDeploymentAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: AllSelectionInvoiceDateAdapter) {
      const data: AllSelectionInvoiceDateInterface = {
        invoice_list: a?.invoice_list?.map((item) => ({
          company_name:item.company_name,
          invoice_number:item.invoice_number,
          invoice_date:item.invoice_date,
          invoice_type:item.invoice_type,
          total_charges:item.total_charges,
          bank_name:item.bank_name,
          invoice_sector:item.invoice_sector,
          courier_date:item.courier_date,
        })),
        additional_invoice_list:a?.invoice_list?.map((item) => ({
          company_name:item.company_name,
          invoice_number:item.invoice_number,
          invoice_date:item.invoice_date,
          invoice_type:item.invoice_type,
          total_charges:item.total_charges,
          bank_name:item.bank_name,
          invoice_sector:item.invoice_sector,
          courier_date:item.courier_date,
        })),
      };
      return data;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: AllSelectionInvoiceDateInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: AllSelectionInvoiceDateAdapter = {
  
        invoice_list: i?.invoice_list?.map((item) => ({
          company_name:item.company_name,
          invoice_number:item.invoice_number,
          invoice_date:item.invoice_date,
          invoice_type:item.invoice_type,
          total_charges:item.total_charges,
          bank_name:item.bank_name,
          invoice_sector:item.invoice_sector,
          courier_date:item.courier_date,
        })),
        additional_invoice_list:i?.invoice_list?.map((item) => ({
          company_name:item.company_name,
          invoice_number:item.invoice_number,
          invoice_date:item.invoice_date,
          invoice_type:item.invoice_type,
          total_charges:item.total_charges,
          bank_name:item.bank_name,
          invoice_sector:item.invoice_sector,
          courier_date:item.courier_date,
        })),
      };
      return data;
    }
  }
  