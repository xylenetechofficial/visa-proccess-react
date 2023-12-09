export interface CandidateDiscountInterface {
  id?: number;
  index_date: string;
  company: number;
  country: number;
  quantity: number;
  visa_date_arabic: string;
  visa_number: string;
  visa_fee: number;
  visa_issued_date: string;
  visa_authorization: number;
  visa_authorization_name: number;
  visa_submission: string;
  arabic_sponsor_name: string;
  sponsor_id: string;
  visa_expiry_date: string;
  division: string;
  om: number;
  rm: number;
  rc: number;
  visa_accountable: number;
  visaProfessionList?: VisaProfesionInterface[];

  isChecked?: any;
}
// 'block_visa' => 'required|array',
// 'visa_profession_list' => 'required|array'

export interface ServerAdapter {
  block_visa: CandidateDiscountAdapter;
  visa_profession_list: VisaProfesionAdapter[];
}

// block_visa
export interface CandidateDiscountAdapter {
  id?: number;
  index_date: string;
  company: number;
  country: number;
  quantity: number;
  visa_date_arabic: string;
  visa_number: string;
  visa_fee: number;
  visa_issued_date: string;
  visa_authorization: number;
  visa_authorization_name: number;
  visa_submission: string;
  arabic_sponsor_name: string;
  sponsor_id: string;
  visa_expiry_date: string;
  division: string;
  om: number;
  rm: number;
  rc: number;
  visa_accountable: number;
  visa_profession_list?: string;
}

export interface VisaProfesionInterface {
  id?: number;
  block_visa_id: number;
  visa_profession: string;
  arabic_visa_category: string;
  quantity: number;
}

export interface VisaProfesionAdapter {
  id?: number;
  block_visa_id: number;
  visa_profession: string;
  arabic_visa_category: string;
  quantity: number;
}

export class CandidateDiscountConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: CandidateDiscountAdapter) {
    const data: CandidateDiscountInterface = {
      id: a.id,
      index_date: a.index_date,
      company: a.company,
      country: a.country,
      quantity: a.quantity,
      visa_date_arabic: a.visa_date_arabic,
      visa_number: a.visa_number,
      visa_fee: a.visa_fee,
      visa_issued_date: a.visa_issued_date,
      visa_authorization: a.visa_authorization,
      visa_authorization_name: a.visa_authorization_name,
      visa_submission: a.visa_submission,
      arabic_sponsor_name: a.arabic_sponsor_name,
      sponsor_id: a.sponsor_id,
      visa_expiry_date: a.visa_expiry_date,
      division: a.division,
      om: a.om,
      rm: a.rm,
      rc: a.rc,
      visa_accountable: a.visa_accountable,
      visaProfessionList: JSON.parse(a.visa_profession_list ?? "[]"),
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: CandidateDiscountInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: CandidateDiscountAdapter = {
      id: i.id,
      index_date: i.index_date,
      company: i.company,
      country: i.country,
      quantity: i.quantity,
      visa_date_arabic: i.visa_date_arabic,
      visa_number: i.visa_number,
      visa_fee: i.visa_fee,
      visa_issued_date: i.visa_issued_date,
      visa_authorization: i.visa_authorization,
      visa_authorization_name: i.visa_authorization_name,
      visa_submission: i.visa_submission,
      arabic_sponsor_name: i.arabic_sponsor_name,
      sponsor_id: i.sponsor_id,
      visa_expiry_date: i.visa_expiry_date,
      division: i.division,
      om: i.om,
      rm: i.rm,
      rc: i.rc,
      visa_accountable: i.visa_accountable,
      visa_profession_list: JSON.stringify(i.visaProfessionList),
    };
    return data;
  }
}

export interface AddCandidateDiscountInterface {
  selection_list: AddSelectionCandidateDiscountInterface[];
}

export interface AddCandidateDiscountAdapter {
  selection_list: AddSelectionCandidateDiscountAdapter[];
}

export class AddCandidateDiscountConverter {
  public static toInterface(
    a: AddCandidateDiscountAdapter
  ): AddCandidateDiscountInterface {
    console.log(a, "kkkkkk");
    const data: AddCandidateDiscountInterface = {
      selection_list: a?.selection_list?.map((item) => ({
        discount_id: item.discount_id,
        status: item.status,
      })),
    };
    return data;
  }

  public static toAdapter(
    i: AddCandidateDiscountInterface
  ): AddCandidateDiscountAdapter {
    console.log(i, "iiiii");
    const data: AddCandidateDiscountAdapter = {
      selection_list: i?.selection_list.map((item) => ({
        discount_id: item.discount_id,
        status: item.status,
      })),
    };
    return data;
  }
}

export interface AddSelectionCandidateDiscountInterface {
  discount_id: number;
  status: number;
}

export interface AddSelectionCandidateDiscountAdapter {
  discount_id: number;
  status: number;
}

export interface AddCandidateDiscountListInterface {
  selection_list: AddSelectionCandidateDiscountListInterface[];
}

export interface AddCandidateDiscountListAdapter {
  selection_list: AddSelectionCandidateDiscountListAdapter[];
}

export class AddCandidateDiscountListConverter {
  public static toInterface(
    a: AddCandidateDiscountListAdapter
  ): AddCandidateDiscountListInterface {
    console.log(a, "kkkkkk");
    const data: AddCandidateDiscountListInterface = {
      selection_list: a?.selection_list
        .filter((item) => item.discount_type !== "")
        .map((item) => ({
          discount: item.discount,
          discount_remarks: item.discount_remarks,
          discount_type: item.discount_type,
          id: item.id,
        })),
    };
    return data;
  }

  public static toAdapter(
    i: AddCandidateDiscountListInterface
  ): AddCandidateDiscountListAdapter {
    console.log(i, "iiiii");
    const data: AddCandidateDiscountListAdapter = {
      selection_list: i?.selection_list
        ?.filter((item) => item?.discount_type !== "")
        .map((item) => ({
          discount: item.discount,
          discount_remarks: item.discount_remarks,
          discount_type: item.discount_type,
          id: item.id,
        })),
    };
    console.log(data, "AWAWAWAW");
    return data;
  }
}

export interface AddSelectionCandidateDiscountListInterface {
  discount: string;
  discount_remarks: string;
  discount_type: string;
  id: number;
}

export interface AddSelectionCandidateDiscountListAdapter {
  discount: string;
  discount_remarks: string;
  discount_type: string;
  id: number;
}

export interface CandidateDiscountInterface2 {
  id: number;
  party_code: number;
  company_name: string;
  name: string;
  passport_no: string;
  actual_profession: string;
  visa_profession: string;
  agent_name: string;
  visa_received_date: string;
  visa_authorization: number;
  visa_authorization_name: string;
  air_ticket: string;
  service_charges: number;
  other_charges: number;
  document_charges: number;
  consulate_setting_charges: number;
  partial_charges: number;
  sector_charges: number;
  ticket_charges: number;
  attestation_charges: number;
  extra_service_tax: number;
  consolidated_charges: number;
  consolidated_charges_names: string;
  discount_given: number;
  discount: string;
  discount_type: string;
  discount_remarks: string;
  color_code: string;
  is_without: number;
}

export interface CandidateDiscountAdapter2 {
  id: number;
  party_code: number;
  company_name: string;
  name: string;
  passport_no: string;
  actual_profession: string;
  visa_profession: string;
  agent_name: string;
  visa_received_date: string;
  visa_authorization: number;
  visa_authorization_name: string;
  air_ticket: string;
  service_charges: number;
  other_charges: number;
  document_charges: number;
  consulate_setting_charges: number;
  partial_charges: number;
  sector_charges: number;
  ticket_charges: number;
  attestation_charges: number;
  extra_service_tax: number;
  consolidated_charges: number;
  consolidated_charges_names: string;
  discount_given: number;
  discount: string;
  discount_type: string;
  discount_remarks: string;
  color_code: string;
  is_without: number;
}

export class CandidateDiscountConverter2 {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: CandidateDiscountAdapter2) {
    const data: CandidateDiscountInterface2 = {
      id: a.id,
      party_code: a.party_code,
      company_name: a.company_name,
      name: a.name,
      passport_no: a.passport_no,
      actual_profession: a.actual_profession,
      visa_profession: a.visa_profession,
      agent_name: a.agent_name,
      visa_received_date: a.visa_received_date,
      visa_authorization: a.visa_authorization,
      visa_authorization_name: a.visa_authorization_name,
      air_ticket: a.air_ticket,
      service_charges: a.service_charges,
      other_charges: a.other_charges,
      document_charges: a.document_charges,
      consulate_setting_charges: a.consulate_setting_charges,
      partial_charges: a.partial_charges,
      sector_charges: a.sector_charges,
      ticket_charges: a.ticket_charges,
      attestation_charges: a.attestation_charges,
      extra_service_tax: a.extra_service_tax,
      consolidated_charges: a.consolidated_charges,
      consolidated_charges_names: a.consolidated_charges_names,
      discount_given: a.discount_given,
      discount: a.discount,
      discount_type: a.discount_type,
      discount_remarks: a.discount_remarks,
      color_code: a.color_code,
      is_without: a.is_without,
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: CandidateDiscountInterface2) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: CandidateDiscountAdapter2 = {
      id: i.id,
      party_code: i.party_code,
      company_name: i.company_name,
      name: i.name,
      passport_no: i.passport_no,
      actual_profession: i.actual_profession,
      visa_profession: i.visa_profession,
      agent_name: i.agent_name,
      visa_received_date: i.visa_received_date,
      visa_authorization: i.visa_authorization,
      visa_authorization_name: i.visa_authorization_name,
      air_ticket: i.air_ticket,
      service_charges: i.service_charges,
      other_charges: i.other_charges,
      document_charges: i.document_charges,
      consulate_setting_charges: i.consulate_setting_charges,
      partial_charges: i.partial_charges,
      sector_charges: i.sector_charges,
      ticket_charges: i.ticket_charges,
      attestation_charges: i.attestation_charges,
      extra_service_tax: i.extra_service_tax,
      consolidated_charges: i.consolidated_charges,
      consolidated_charges_names: i.consolidated_charges_names,
      discount_given: i.discount_given,
      discount: i.discount,
      discount_type: i.discount_type,
      discount_remarks: i.discount_remarks,
      color_code: i.color_code,
      is_without: i.is_without,
    };
    return data;
  }
}

// ##########     don't change    ########## \\

export interface DiscountInterface {
  id?: number;
  candidate_id: number;
  candidate_name?: string;
  candidate_passport_no?: string;
  discount: number;
  discount_type: string;
  discount_remarks: string;
  status?: string;
  approved_by?: string;
  user_id?: number;

  checked?:number
}

export interface DiscountAdapter {
  id?: number;
  candidate_id: number;
  candidate_name?: string;
  candidate_passport_no?: string;
  discount: number;
  discount_type: string;
  discount_remarks: string;
  status?: string;
  approved_by?: string;
  user_id?: number;
}

export class DiscountConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(i: DiscountAdapter) {
    const data: DiscountInterface = {
      id: i.id,
      candidate_id: i.candidate_id,
      candidate_name: i.candidate_name,
      candidate_passport_no: i.candidate_passport_no,
      discount: i.discount,
      discount_type: i.discount_type,
      discount_remarks: i.discount_remarks,
      status: i.status,
      approved_by: i.approved_by,
      user_id: i.user_id,
    };
    return data;
  }

  public static toInterfaceList(a_list: DiscountAdapter[]) {
    const data_list: DiscountInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: DiscountInterface) {
    const data: DiscountAdapter = {
      id: i.id,
      candidate_id: i.candidate_id,
      candidate_name: i.candidate_name,
      candidate_passport_no: i.candidate_passport_no,
      discount: i.discount,
      discount_type: i.discount_type,
      discount_remarks: i.discount_remarks,
      status: i.status,
      approved_by: i.approved_by,
      user_id: i.user_id,
    };
    return data;
  }

  public static toAdapterList(i_list: DiscountInterface[]) {
    const data_list: DiscountAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}
