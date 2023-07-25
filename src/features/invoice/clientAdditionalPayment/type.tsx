
export interface ClientPaymentAddInterface {

  company_name: string,
  invoice_number: string,
  invoice_date: string,
  invoice_amount:number,
  payment_received: number,
  balance_payment: number,
  
}

export interface ClientPaymentAddAdapter {

  company_name: string,
  invoice_number: string,
  invoice_date: string,
  invoice_amount: number,
  payment_received: number,
  balance_payment: number,
 
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
      
      invoice_number: a.invoice_number,
      invoice_date: a.invoice_date,
      invoice_amount: a.invoice_amount,
      payment_received: a.payment_received,
      balance_payment: a.balance_payment,
      
      
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
      invoice_number: i.invoice_number,
      invoice_date: i.invoice_date,
      invoice_amount: i.invoice_amount,
      payment_received: i.payment_received,
      balance_payment: i.balance_payment,
      
      
    };
    return data;
  }
}

export interface ClientPaymentSingleAddInterface {

  company_id: number,
  invoice_number: string,
  invoice_date: string,
  amount: number,
  date: string,
  description: string




}

export interface ClientPaymentSingleAddAdapter {

  company_id: number,
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
      invoice_number:i?.invoice_number,
      invoice_date: i?.invoice_date,
      amount:i?.amount,
      date:i?.date,
      description:i?.description
    };
    return data;
  }
}
