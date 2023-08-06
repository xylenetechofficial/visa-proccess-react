
export interface ContactPersonInterface {
  id?: number,
  company_name?: string,
  invoice_number?: string,
  invoice_date?: string,
  invoice_type?: string,
  total_charges?: number,
  courier_date?: string,
  courier_received_date?: string,
  submitted_date?: string,
  submitted_by?: string,
  contact_person_name?: string,
  contact_person_remarks?: string,

}

export interface ContactPersonAdapter {
  id?: number,
  company_name?: string,
  invoice_number?: string,
  invoice_date?: string,
  invoice_type?: string,
  total_charges?: number,
  courier_date?: string,
  courier_received_date?: string,
  submitted_date?: string,
  submitted_by?: string,
  contact_person_name?: string,
  contact_person_remarks?: string,



}

export class ContactPersonConverter {
  // private i: ClientInvoiceChargesInterface
  // private a: ClientInvoiceChargesAdapter

  /**
   * toInterface
   */
  public static toInterface(a: ContactPersonAdapter) {
    const data: ContactPersonInterface = {
      id: a.id,
      company_name: a.company_name,
      invoice_number: a.invoice_number,
      invoice_date: a.invoice_date,
      invoice_type: a.invoice_type,
      total_charges: a.total_charges,
      courier_date: a.courier_date,
      courier_received_date: a.courier_received_date,
      submitted_date: a.submitted_date,
      submitted_by: a.submitted_by,
      contact_person_name: a.contact_person_name,
      contact_person_remarks: a.contact_person_remarks,


    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: ContactPersonInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: ContactPersonAdapter = {

      id: i.id,
      company_name: i.company_name,
      invoice_number: i.invoice_number,
      invoice_date: i.invoice_date,
      invoice_type: i.invoice_type,
      total_charges: i.total_charges,
      courier_date: i.courier_date,
      courier_received_date: i.courier_received_date,
      submitted_date: i.submitted_date,
      submitted_by: i.submitted_by,
      contact_person_name: i.contact_person_name,
      contact_person_remarks: i.contact_person_remarks,
    };
    return data;
  }
}



export interface AddContactPersonInterface {

  invoice_list: ContactPersonInterface[],

}

export interface AddContactPersonAdapter {

  invoice_list: ContactPersonInterface[],

}


export class AddContactPersonConverter {
  // private i: AddCandidateInvoiceNumberInterface
  // private a: AddPenaltyAfterDeploymentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: AddContactPersonAdapter) {
    const data: AddContactPersonInterface = {
      invoice_list: a?.invoice_list?.map((item) => ({
        id:item.id,
        contact_person_name: item.contact_person_name,
        contact_person_remarks: item.contact_person_remarks,
      })),

    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: AddContactPersonInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: AddContactPersonAdapter = {

      invoice_list: i?.invoice_list?.map((item) => ({
        id:item.id,
        contact_person_name: item.contact_person_name,
        contact_person_remarks: item.contact_person_remarks,
      })),

    };
    return data;
  }
}
