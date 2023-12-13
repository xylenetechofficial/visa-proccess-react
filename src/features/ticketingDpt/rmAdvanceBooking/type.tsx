export interface RMAdvanceBookingInterface {
  id?: number,
  party_code: string,
  company_name: string,
  candidate_name: string,
  pp_no: string,
  actual_profession: string,
  visa_profession: string,
  agent: string,
  visa_received_date: string,
  visa_authorization: string,
  given_to: string,
  payment: string,
  is_invoice: string,
  advance: string,
  payment_date: string,
  is_pendding?: boolean,

  is_approve?: number,
  checked?:number
}


export interface RMAdvanceBookingAdapter {
  id?: number,
  party_code: string,
  company_name: string,
  candidate_name: string,
  pp_no: string,
  actual_profession: string,
  visa_profession: string,
  agent: string,
  visa_received_date: string,
  visa_authorization: string,
  given_to: string,
  payment: string,
  is_invoice: string,
  advance: string,
  payment_date: string,
  is_pendding?: boolean,
}

export class RMAdvanceBookingConverter {

  /**
   * toInterface
   */
  public static toInterface(a: RMAdvanceBookingAdapter) {
    const data: RMAdvanceBookingInterface = {
      id: a.id,
      party_code: a.party_code,
      company_name: a.company_name,
      candidate_name: a.candidate_name,
      pp_no: a.pp_no,
      actual_profession: a.actual_profession,
      visa_profession: a.visa_profession,
      agent: a.agent,
      visa_received_date: a.visa_received_date,
      visa_authorization: a.visa_authorization,
      given_to: a.given_to,
      payment: a.payment,
      is_invoice: a.is_invoice,
      advance: a.advance,
      payment_date: a.payment_date,
      is_pendding: a.is_pendding,
    };
    console.log("SV: ", a);   // Only Dev
    console.log("IV: ", data);   // Only Dev
    return data;
  }


  public static toInterfaceList(a_list: RMAdvanceBookingInterface[]) {
    const data_list: RMAdvanceBookingInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: RMAdvanceBookingInterface) {
    const data: RMAdvanceBookingAdapter = {

      id: i.id,
      party_code: i.party_code,
      company_name: i.company_name,
      candidate_name: i.candidate_name,
      pp_no: i.pp_no,
      actual_profession: i.actual_profession,
      visa_profession: i.visa_profession,
      agent: i.agent,
      visa_received_date: i.visa_received_date,
      visa_authorization: i.visa_authorization,
      given_to: i.given_to,
      payment: i.payment,
      is_invoice: i.is_invoice,
      advance: i.advance,
      payment_date: i.payment_date,
    };
    return data;
  }


  public static toAdapterList(i_list: RMAdvanceBookingInterface[]) {
    const data_list: RMAdvanceBookingAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}