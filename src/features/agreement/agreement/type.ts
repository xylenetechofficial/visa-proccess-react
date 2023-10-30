
export interface AgreementInterface {
  id?: number
  party_code: number
  company_name: string
  name: string
  passport_no: string
  actual_profession: string
  visa_profession: string
  agent_name: string
  rc_name: string
  visa_received_date: string
  visa_expiry_date: any
  sector_to:any
  sector_from: any
  departure_date: any
  payment_cleared: any
  reported_for_agreement: any
  remarks: string
  contact_details: any

}

export interface AgreementAdapter{
  id?: number
  party_code: number
  company_name: string
  name: string
  passport_no: string
  actual_profession: string
  visa_profession: string
  agent_name: string
  rc_name: string
  visa_received_date: string
  visa_expiry_date: any
  sector_from: any
  sector_to:any
  departure_date: any
  payment_cleared: any
  reported_for_agreement: any
  remarks: string
  contact_details: any

  
}


export class AgreementConverter {
  // private i: AgreementInterface
  // private a: AgreementAdapter

  /**
   * toInterface
   */
  public static toInterface(a: AgreementAdapter) {
    const data: AgreementInterface = {
      id: a.id,
      party_code:a.party_code ,
      company_name: a.company_name,
      name:a.name ,
      passport_no:a.passport_no,
      actual_profession: a.actual_profession,
      visa_profession: a.visa_profession,
      agent_name:a.agent_name,
      rc_name:a.rc_name,
      visa_received_date:a.visa_received_date,
      visa_expiry_date:a.visa_expiry_date,
      sector_from:a.sector_from,
      sector_to:a.sector_to,
      departure_date:a.departure_date,
      payment_cleared:a.payment_cleared,
      reported_for_agreement:a.reported_for_agreement,
      remarks:a.remarks,
      contact_details:a.contact_details
     
    };
    return data;
  }



  public static toInterfaceList(a_list: AgreementAdapter[]) {
    const data_list: AgreementInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: AgreementInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: AgreementAdapter = {
      id: i.id,
      party_code:i.party_code ,
      company_name: i.company_name,
      name:i.name ,
      passport_no:i.passport_no,
      actual_profession: i.actual_profession,
      visa_profession: i.visa_profession,
      agent_name:i.agent_name,
      rc_name:i.rc_name,
      visa_received_date:i.visa_received_date,
      visa_expiry_date:i.visa_expiry_date,
      sector_from:i.sector_from,
      sector_to:i.sector_to,
      departure_date:i.departure_date,
      payment_cleared:i.payment_cleared,
      reported_for_agreement:i.reported_for_agreement,
      remarks:i.remarks,
      contact_details:i.contact_details

    };
    return data;
  }



  public static toAdapterList(i_list: AgreementInterface[]) {
    const data_list: AgreementAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}
