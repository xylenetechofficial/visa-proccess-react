
export interface InvoiceSubmitInterface {
  id?: number,
  company_name?: string,
  invoice_number?: string,
  invoice_date?: string,
  invoice_type?: string,
  total_charges?: number,
  invoice_sector?: string,
  courier_date?: string,
  received_status: string,
  received_status_date: string,
  given_to: string,
  given_to_date: string,
  status: string,
  remarks: string,
  submit_file: string,
  submit_remarks: string
}

export interface InvoiceSubmitAdapter {
  id?: number,
  company_name?: string,
  invoice_number?: string,
  invoice_date?: string,
  invoice_type?: string,
  total_charges?: number,
  invoice_sector?: string,
  courier_date?: string,
  received_status: string,
  received_status_date: string,
  given_to: string,
  given_to_date: string,
  status: string,
  remarks: string,
  submit_file: string,
  submit_remarks: string


}

export class InvoiceSubmitConverter {
  // private i: ClientInvoiceChargesInterface
  // private a: ClientInvoiceChargesAdapter

  /**
   * toInterface
   */
  public static toInterface(a: InvoiceSubmitAdapter) {
    const data: InvoiceSubmitInterface = {
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
      status: a.status,
      remarks: a.remarks,
      submit_file: a.submit_file,
      submit_remarks: a.submit_remarks,

    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: InvoiceSubmitInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: InvoiceSubmitAdapter = {

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
      status: i.status,
      remarks: i.remarks,
      submit_file: i.submit_file,
      submit_remarks: i.submit_remarks,
    };
    return data;
  }
}

