export interface DegreeAttestationInterface {
  id?: number;
  candidate_name: string;
  passport_no: string;
  actual_position: string;
  agent_id: number;
  agent_name?: string;
  rc_id: number;
  rc_name?: string;
  company_id: number;
  company_name?: string;
  amout_payable_to_vendor: number;
  amount_receivaled: number;
  vendor_id: number;
  vendor_name?: string;

  checked?: boolean;
}

export interface DegreeAttestationAdapter {
  id?: number;
  candidate_name: string;
  passport_no: string;
  actual_position: string;
  agent_id: number;
  agent_name?: string;
  rc_id: number;
  rc_name?: string;
  company_id: number;
  company_name?: string;
  amout_payable_to_vendor: number;
  amount_receivaled: number;
  vendor_id: number;
  vendor_name?: string;
}

export class DegreeAttestationConverter {
  /**
   * toInterface
   */
  public static toInterface(i: DegreeAttestationAdapter) {
    const data: DegreeAttestationInterface = {
      id: i.id,
      candidate_name: i.candidate_name,
      passport_no: i.passport_no,
      actual_position: i.actual_position,
      agent_id: i.agent_id,
      agent_name: i.agent_name,
      rc_id: i.rc_id,
      rc_name: i.rc_name,
      company_id: i.company_id,
      company_name: i.company_name,
      amout_payable_to_vendor: i.amout_payable_to_vendor,
      amount_receivaled: i.amount_receivaled,
      vendor_id: i.vendor_id,
      vendor_name: i.vendor_name,
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: DegreeAttestationInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: DegreeAttestationAdapter = {
        id: i.id,
        candidate_name: i.candidate_name,
        passport_no: i.passport_no,
        actual_position: i.actual_position,
        agent_id: i.agent_id,
        agent_name: i.agent_name,
        rc_id: i.rc_id,
        rc_name: i.rc_name,
        company_id: i.company_id,
        company_name: i.company_name,
        amout_payable_to_vendor: i.amout_payable_to_vendor,
        amount_receivaled: i.amount_receivaled,
        vendor_id: i.vendor_id,
        vendor_name: i.vendor_name,
    };
    return data;
  }

  public static toInterfaceList(list: DegreeAttestationAdapter[]) {
    const data: DegreeAttestationInterface[] = [];
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      data.push(DegreeAttestationConverter.toInterface(element));
    }
    return data;
  }

  public static toAdapterList(list: DegreeAttestationInterface[]) {
    const data: DegreeAttestationAdapter[] = [];
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      data.push(DegreeAttestationConverter.toAdapter(element));
    }
    return data;
  }
}
