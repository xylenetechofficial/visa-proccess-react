export interface MofaPaymentInterface {
  id?: number;
  visa_authorisation_id: number;
  visa_authorisation_name?: string;
  payment: number;
  date: string;
  narration: string;
}

export interface MofaPaymentAdapter {
  id?: number;
  visa_authorisation_id: number;
  visa_authorisation_name?: string;
  payment: number;
  date: string;
  narration: string;
}

export class MofaPaymentConverter {
  // private i: MofaPaymentInterface
  // private a: MofaPaymentAdapter

  /**
   * to interface
   */
  public static toInterface(a: MofaPaymentAdapter) {
    const data: MofaPaymentInterface = {
      id: a.id,
      visa_authorisation_id: a.visa_authorisation_id,
      visa_authorisation_name: a.visa_authorisation_name,
      payment: a.payment,
      date: a.date,
      narration: a.narration,
    };
    return data;
  }

  /**
   * to interface list
   */
  public static toInterfaceList(i_list: MofaPaymentAdapter[]) {
    const data_list: MofaPaymentInterface[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }

  /**
   * to adapter
   */
  public static toAdapter(i: MofaPaymentInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: MofaPaymentAdapter = {
      // id: i.id,
      visa_authorisation_id: i.visa_authorisation_id,
      // visa_authorisation_name: i.visa_authorisation_name,
      payment: i.payment,
      date: i.date,
      narration: i.narration,
    };
    return data;
  }

  /**
   * to adapter list
   */
  public static toAdapterList(i_list: MofaPaymentInterface[]) {
    const data_list: MofaPaymentAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}
