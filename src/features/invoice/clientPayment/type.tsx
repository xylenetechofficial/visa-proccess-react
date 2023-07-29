
export interface ClientPaymentAddInterface {

  company_name: string,
  company_id: number,
  invoice_number: string,
  invoice_date: string,
  other_charges: number,
  service_charges: number,
  ticket_charges: number,
  total_charges: number,
  payment_received: number,
  balance_payment: number,
  suspense_amount: string,
  bank_name: string




}

export interface ClientPaymentAddAdapter {


  company_name: string,
  company_id: number,
  invoice_number: string,
  invoice_date: string,
  other_charges: number,
  service_charges: number,
  ticket_charges: number,
  total_charges: number,
  payment_received: number,
  balance_payment: number,
  suspense_amount: string,
  bank_name: string

}

export class ClientPaymentAddConverter {
  // private i: ClientPaymentAddInterface
  // private a: ClientPaymentAddAdapter

  /**
   * toInterface
   */
  public static toInterface(a: ClientPaymentAddAdapter) {
    const data: ClientPaymentAddInterface = {

      company_name: a.company_name,
      company_id: a.company_id,
      invoice_number: a.invoice_number,
      invoice_date: a.invoice_date,
      other_charges: a.other_charges,
      service_charges: a.service_charges,
      ticket_charges: a.ticket_charges,
      total_charges: a.total_charges,
      payment_received: a.payment_received,
      balance_payment: a.balance_payment,
      suspense_amount: a.suspense_amount,
      bank_name: a.bank_name,
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: ClientPaymentAddInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: ClientPaymentAddAdapter = {

      company_name: i.company_name,
      company_id: i.company_id,
      invoice_number: i.invoice_number,
      invoice_date: i.invoice_date,
      other_charges: i.other_charges,
      service_charges: i.service_charges,
      ticket_charges: i.ticket_charges,
      total_charges: i.total_charges,
      payment_received: i.payment_received,
      balance_payment: i.balance_payment,
      suspense_amount: i.suspense_amount,
      bank_name: i.bank_name,
    };
    return data;
  }
}

export interface ClientPaymentSingleAddInterface {

  company_id: number,
  company_name: string,
  invoice_number: string,
  invoice_date: string,
  amount: number,
  date: string,
  description: string




}

export interface ClientPaymentSingleAddAdapter {

  company_id: number,
  company_name: string,

  invoice_number: string,
  invoice_date: string,
  amount: number,
  date: string,
  description: string
}

export class ClientPaymentSingleAddConverter {
  // private i: ClientPaymentAddInterface
  // private a: ClientPaymentAddAdapter

  /**
   * toInterface
   */
  public static toInterface(a: ClientPaymentSingleAddAdapter) {
    const data: ClientPaymentSingleAddInterface = {
      company_id:a?.company_id,
      company_name:a.company_name,
      invoice_number:a?.invoice_number,
      invoice_date:a?.invoice_date,
      amount:a?.amount,
      date:a?.date,
      description:a?.description
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: ClientPaymentSingleAddInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: ClientPaymentSingleAddAdapter = {
      company_id:i?.company_id,
      company_name:i.company_name,
      invoice_number:i?.invoice_number,
      invoice_date: i?.invoice_date,
      amount:i?.amount,
      date:i?.date,
      description:i?.description
    };
    return data;
  }
}
