
export interface InvoiceAdminRemarkInterface {
  id: number,
  company_name: string,
  invoice_number: string,
  invoice_date: string,
  invoice_type: string,
  total_charges: number,
  invoice_sector: string,
  courier_date: string,
  received_status: string,
  received_status_date: string,
  given_to: string,
  given_to_date: string,
  given_to_remarks: string,


}

export interface InvoiceAdminRemarkAdapter {
  id: number,
  company_name: string,
  invoice_number: string,
  invoice_date: string,
  invoice_type: string,
  total_charges: number,
  invoice_sector: string,
  courier_date: string,
  received_status: string,
  received_status_date: string,
  given_to: string,
  given_to_date: string,
  given_to_remarks: string,


}

export class InvoiceAdminRemarkConverter {
  // private i: ClientInvoiceChargesInterface
  // private a: ClientInvoiceChargesAdapter

  /**
   * toInterface
   */
  public static toInterface(a: InvoiceAdminRemarkAdapter) {
    const data: InvoiceAdminRemarkInterface = {
      id: a.id,
      company_name: a.company_name,
      invoice_number: a.invoice_number,
      invoice_date: a.invoice_date,
      invoice_type: a.invoice_type,
      total_charges: a.total_charges,
      invoice_sector: a.invoice_sector,
      courier_date: a.courier_date,
      received_status: a.received_status,
      received_status_date: a.received_status_date,
      given_to: a.given_to,
      given_to_date: a.given_to_date,
      given_to_remarks: a.given_to_remarks,


    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: InvoiceAdminRemarkInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: InvoiceAdminRemarkAdapter = {

      id: i.id,
      company_name: i.company_name,
      invoice_number: i.invoice_number,
      invoice_date: i.invoice_date,
      invoice_type: i.invoice_type,
      total_charges: i.total_charges,
      invoice_sector: i.invoice_sector,
      courier_date: i.courier_date,
      received_status: i.received_status,
      received_status_date: i.received_status_date,
      given_to: i.given_to,
      given_to_date: i.given_to_date,
      given_to_remarks: i.given_to_remarks,
    };
    return data;
  }
}



export interface AddInvoiceAdminInterface {
  id: number,
  given_to: string,
  given_to_date: string,
  given_to_remarks: string,
}

export interface AddInvoiceAdminRemarkInterface {

  invoice_list: AddInvoiceAdminInterface[],

}

export interface AddInvoiceAdminRemarkAdapter {

  invoice_list: AddInvoiceAdminInterface[],

}


export class AddInvoiceAdminRemarkConverter {
  // private i: AddCandidateInvoiceNumberInterface
  // private a: AddPenaltyAfterDeploymentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: AddInvoiceAdminRemarkAdapter) {
    const data: AddInvoiceAdminRemarkInterface = {
      invoice_list: a?.invoice_list?.map((item) => ({
        id: item.id,
        given_to:item.given_to ,
        given_to_date:item.given_to_date ,
        given_to_remarks:item.given_to_remarks ,
      })),

    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: AddInvoiceAdminRemarkInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: AddInvoiceAdminRemarkAdapter = {

      invoice_list: i?.invoice_list?.filter(item => 
        item.id !== undefined &&
        item.given_to !==  '' &&
        item.given_to_date !==  '' &&
        item.given_to_remarks !==  ''
      ).map((item) => ({
        id: item.id,
        given_to:item.given_to ,
        given_to_date:item.given_to_date ,
        given_to_remarks:item.given_to_remarks ,
      })),

    };
    return data;
  }
}


