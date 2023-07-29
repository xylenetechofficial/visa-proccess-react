
export interface ClientAdditionalPaymentInterface {

  company_name: string
  invoice_number: string
  invoice_date: string
  invoice_amount: number
  payment_received: number
  balance_payment: number
  company_id: number
}

export interface ClientAdditionalPaymentAdapter {

  company_name: string
  invoice_number: string
  invoice_date: string
  invoice_amount: number
  payment_received: number
  balance_payment: number
  company_id: number
}

export class ClientAdditionalPaymentConverter {
  // private i: ClientAdditionalPaymentInterface
  // private a: ClientAdditionalPaymentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: ClientAdditionalPaymentAdapter) {
    const data: ClientAdditionalPaymentInterface = {

      company_name: a.company_name,
      company_id: a.company_id,
      invoice_number: a.invoice_number,
      invoice_date: a.invoice_date,
      invoice_amount: a.invoice_amount,
      payment_received: a.payment_received,
      balance_payment: a.balance_payment,


    };
    return data;
  }

  public static toInterfaceList(a_list: ClientAdditionalPaymentAdapter[]) {
    const data_list: ClientAdditionalPaymentInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: ClientAdditionalPaymentInterface) {
    const data: ClientAdditionalPaymentAdapter = {

      company_name: i.company_name,
      company_id: i.company_id,
      invoice_number: i.invoice_number,
      invoice_date: i.invoice_date,
      invoice_amount: i.invoice_amount,
      payment_received: i.payment_received,
      balance_payment: i.balance_payment,


    };
    return data;
  }

  public static toAdapterList(i_list: ClientAdditionalPaymentInterface[]) {
    const data_list: ClientAdditionalPaymentAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}

// #######################################################################################

export interface PaymentInterface {
  id?: number
  company_id: number
  invoice_number: string
  invoice_date: string
  client_suspend_amount_id?: number
  amount: number
  date: string
  description: string
  created_at?: string
  updated_at?: string
  company_name?: string
}


export interface PaymentAdapter {
  id?: number
  company_id: number
  invoice_number: string
  invoice_date: string
  client_suspend_amount_id?: number
  amount: number
  date: string
  description: string
  created_at?: string
  updated_at?: string
  company_name?: string
}


export class PaymentConverter {
  // private i: ClientPaymentAddInterface
  // private a: ClientPaymentAddAdapter

  /**
   * toInterface
   */
  public static toInterface(a: PaymentAdapter) {
    const data: PaymentInterface = {
      id: a.id,
      company_id: a.company_id,
      invoice_number: a.invoice_number,
      invoice_date: a.invoice_date,
      client_suspend_amount_id: a.client_suspend_amount_id,
      amount: a.amount,
      date: a.date,
      description: a.description,
      created_at: a.created_at,
      updated_at: a.updated_at,
      company_name: a.company_name,
    }

    return data;
  }

  public static toInterfaceList(a_list: PaymentAdapter[]) {
    const data_list: PaymentInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: PaymentInterface) {
    const data: PaymentAdapter = {
      id: i.id,
      company_id: i.company_id,
      invoice_number: i.invoice_number,
      invoice_date: i.invoice_date,
      client_suspend_amount_id: i.client_suspend_amount_id,
      amount: i.amount,
      date: i.date,
      description: i.description,
      created_at: i.created_at,
      updated_at: i.updated_at,
      company_name: i.company_name,

    };
    return data;
  }

  public static toAdapterList(i_list: PaymentInterface[]) {
    const data_list: PaymentAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}

// #######################################################################################


export interface SuspenseAdjustAmountInterface {
  id: number
  name: string
}


export interface SuspenseAdjustAmountAdapter {
  id: number
  name: string
}


export class SuspenseAdjustAmountConverter {
  // private i: ClientSuspenseAdjustAmountAddInterface
  // private a: ClientSuspenseAdjustAmountAddAdapter

  /**
   * toInterface
   */
  public static toInterface(i: SuspenseAdjustAmountAdapter) {
    const data: SuspenseAdjustAmountInterface = {
      id: i.id,
      name: i.name
    }

    return data;
  }

  public static toInterfaceList(a_list: SuspenseAdjustAmountAdapter[]) {
    const data_list: SuspenseAdjustAmountInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: SuspenseAdjustAmountInterface) {
    const data: SuspenseAdjustAmountAdapter = {
      id: i.id,
      name: i.name
    };
    return data;
  }

  public static toAdapterList(i_list: SuspenseAdjustAmountInterface[]) {
    const data_list: SuspenseAdjustAmountAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}

