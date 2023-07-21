
export interface ClientInvoiceAddInterface {
 
    id?: number,
    party_code: number,
    company_name: string,
    name: string,
    passport_no: string,
    actual_profession: string,
    visa_profession: string,
    visa_received_date: string,
    agent_name: string,
    division:string,
    visa_authorization: string,
    rc:string,
    other_charges:string,
    service_charges:string,

    

  
  }
  // 'block_visa' => 'required|array',
  // 'visa_profession_list' => 'required|array'
  
  
  // block_visa
  export interface ClientInvoiceAddAdapter {
   
    id?: number,
    party_code: number,
    company_name: string,
    name: string,
    passport_no: string,
    actual_profession: string,
    visa_profession: string,
    visa_received_date: string,
    agent_name: string,
    division:string,
    visa_authorization: string,
    rc:string,
    other_charges:string,
    service_charges:string,
  }
  
  export class ClientInvoiceAddConverter {
    // private i: ClientInvoiceAddInterface
    // private a: ClientInvoiceAddAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: ClientInvoiceAddAdapter) {
      const data: ClientInvoiceAddInterface = {
        id:a?.id,
        name:a?.name,
        company_name:a?.company_name,
        passport_no:a?.passport_no,
        party_code:a?.party_code,
        division:a?.division,
        actual_profession:a?.actual_profession,
        visa_profession:a?.visa_profession,
        agent_name:a?.agent_name,
        visa_authorization:a?.visa_authorization,
        visa_received_date:a?.visa_received_date,
        rc:a?.rc,
        other_charges:a?.other_charges,
        service_charges:a?.service_charges,
      };
      return data;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: ClientInvoiceAddInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: ClientInvoiceAddAdapter = {
        id:i?.id,
        name:i?.name,
        company_name:i?.company_name,
        passport_no:i?.passport_no,
        party_code:i?.party_code,
        division:i?.division,
        actual_profession:i?.actual_profession,
        visa_profession:i?.visa_profession,
        agent_name:i?.agent_name,
        visa_authorization:i?.visa_authorization,
        visa_received_date:i?.visa_received_date,
        rc:i?.rc,
        other_charges:i?.other_charges,
        service_charges:i?.service_charges,
        
        
      };
      return data;
    }
  }
  