export interface VisaIssueDateInterface {
  id?: number;
  name: string;
  company_name: string;
  passport_no: string;
  party_code: number;
  visa_number: string;
  mofa_number: string;
  visa_issue_date: string;
  visa_received_date: string;
}

export interface VisaIssueDateAdapter {
  id?: number;
  name: string;
  company_name: string;
  passport_no: string;
  party_code: number;
  visa_number: string;
  mofa_number: string;
  visa_issue_date: string;
  visa_received_date: string;
}

export class VisaIssueDateConverter {
  // private i: VisaIssueDateInterface
  // private a: VisaIssueDateAdapter

  /**
   * toInterface
   */
  public static toInterface(a: VisaIssueDateAdapter) {
    const data: VisaIssueDateInterface = {
      id: a.id,
      name: a.name,
      company_name: a.company_name,
      visa_number:a.visa_number,
      passport_no: a.passport_no,
      mofa_number: a.mofa_number,
      party_code: a.party_code,
      visa_received_date: a.visa_received_date,
      visa_issue_date: a.visa_issue_date,
    };

    return data;
  }

  public static toAdapterList(i_list: VisaIssueDateInterface[]) {
    const data_list: VisaIssueDateAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: VisaIssueDateInterface) {
    const data: VisaIssueDateAdapter = {
      id: i.id,
      name: i.name,
      company_name: i.company_name,
      visa_number:i.visa_number,
      passport_no: i.passport_no,
      mofa_number: i.mofa_number,
      party_code: i.party_code,
      visa_received_date: i.visa_received_date,
      visa_issue_date: i.visa_issue_date,
    };
    return data;
  }



  public static toInterfaceList(a_list: VisaIssueDateAdapter[]) {
    const data_list: VisaIssueDateInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }
}
