
export interface ClientPaymentInterface {
  company_name: string
  company_id: number
  invoice_number: string
  invoice_date: string
  other_charges: number
  service_charges: number
  ticket_charges: number
  total_charges: number
  payment_received: number
  balance_payment: number
  suspense_amount: string
  bank_name: string
}

export interface ClientPaymentAdapter {
  company_name: string
  company_id: number
  invoice_number: string
  invoice_date: string
  other_charges: number
  service_charges: number
  ticket_charges: number
  total_charges: number
  payment_received: number
  balance_payment: number
  suspense_amount: string
  bank_name: string
}

export class ClientPaymentConverter {
  // private i: ClientPaymentInterface
  // private a: ClientPaymentAdapter

  /**
   * toInterface
   */
  public static toInterface(i: ClientPaymentAdapter) {
    const data: ClientPaymentInterface = {
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
    }
    return data;
  }

  public static toInterfaceList(a_list: ClientPaymentAdapter[]) {
    const data_list: ClientPaymentInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: ClientPaymentInterface) {
    const data: ClientPaymentAdapter = {
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

  public static toAdapterList(i_list: ClientPaymentInterface[]) {
    const data_list: ClientPaymentAdapter[] = [];

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
  public static toInterface(i: PaymentAdapter) {
    const data: PaymentInterface = {
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


// #######################################################################################


export interface CandidateInterface {
  name: string
  passport_no: string
  visa_profession: string
  actual_visa_profession: string
  other_charges: number
  service_charges: number
  ticket_charges: number
  total_charge: number
}


export interface CandidateAdapter {
  name: string
  passport_no: string
  visa_profession: string
  actual_visa_profession: string
  other_charges: number
  service_charges: number
  ticket_charges: number
  total_charge: number
}


export class CandidateConverter {
  // private i: ClientCandidateAddInterface
  // private a: ClientCandidateAddAdapter

  /**
   * toInterface
   */
  public static toInterface(i: CandidateAdapter) {
    const data: CandidateInterface = {
      name: i.name,
      passport_no: i.passport_no,
      visa_profession: i.visa_profession,
      actual_visa_profession: i.actual_visa_profession,
      other_charges: i.other_charges,
      service_charges: i.service_charges,
      ticket_charges: i.ticket_charges,
      total_charge: i.total_charge,
    }

    return data;
  }

  public static toInterfaceList(a_list: CandidateAdapter[]) {
    const data_list: CandidateInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: CandidateInterface) {
    const data: CandidateAdapter = {
      name: i.name,
      passport_no: i.passport_no,
      visa_profession: i.visa_profession,
      actual_visa_profession: i.actual_visa_profession,
      other_charges: i.other_charges,
      service_charges: i.service_charges,
      ticket_charges: i.ticket_charges,
      total_charge: i.total_charge,

    };
    return data;
  }

  public static toAdapterList(i_list: CandidateInterface[]) {
    const data_list: CandidateAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}

