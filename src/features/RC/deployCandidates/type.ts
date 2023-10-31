export interface DeployCandidatesInterface {
  id?: number;
  party_code: number
  company_name: string
  name: string
  passport_no: string
  actual_profession: string
  visa_profession: string
  agent_name: string
  rc_name: string
  air_line: string
  pnr_no: string
  departure_date: string
  amount: number
  deployed: string
}

// block_visa
export interface DeployCandidatesAdapter {
  id?: number;
  party_code: number
  company_name: string
  name: string
  passport_no: string
  actual_profession: string
  visa_profession: string
  agent_name: string
  rc_name: string
  air_line: string
  pnr_no: string
  departure_date: string
  amount: number
  deployed: string
}

export class DeployCandidatesConverter {
  // private i: DeployCandidatesInterface
  // private a: DeployCandidatesAdapter

  /**
   * toInterface
   */
  public static toInterface(a: DeployCandidatesAdapter) {
    const data: DeployCandidatesInterface = {
      id: a.id,
      company_name: a.company_name,
      party_code: a.party_code,
      name: a.name,
      passport_no: a.passport_no,
      actual_profession: a.actual_profession,
      visa_profession: a.visa_profession,
      agent_name: a.agent_name,
      rc_name: a.rc_name,
      air_line: a.air_line,
      pnr_no: a.pnr_no,
      departure_date: a.departure_date,
      amount: a.amount,
      deployed: a.deployed,
    };

    return data;
  }

  public static toAdapterList(i_list: DeployCandidatesInterface[]) {
    const data_list: DeployCandidatesAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: DeployCandidatesInterface) {
    const data: DeployCandidatesAdapter = {
      id: i.id,
      company_name: i.company_name,
      party_code: i.party_code,
      name: i.name,
      passport_no: i.passport_no,
      actual_profession: i.actual_profession,
      visa_profession: i.visa_profession,
      agent_name: i.agent_name,
      rc_name: i.rc_name,
      air_line: i.air_line,
      pnr_no: i.pnr_no,
      departure_date: i.departure_date,
      amount: i.amount,
      deployed: i.deployed,
    };
    return data;
  }

  public static toInterfaceList(a_list: DeployCandidatesAdapter[]) {
    const data_list: DeployCandidatesInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }
}
