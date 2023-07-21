


export interface CandidateInvoiceRaiseListInterface {

  id: number,
  party_code: number,
  company_name: string,
  candidate_name: string,
  passport_no: number,
  actual_profession: string,
  visa_profession: string,
  agent_name: string,
  division: string,
  visa_authorisation_name: string,
  rc_name: string,
  other_charges: number,
  service_charges: number,
  ticket_charges: string,
  total_charges: number,
  invoice_number: string,
  invoice_date: string,
  bank_id: number,
  is_without: number

}

export interface CandidateInvoiceRaiseListAdapter {

  id: number,
  party_code: number,
  company_name: string,
  candidate_name: string,
  passport_no: number,
  actual_profession: string,
  visa_profession: string,
  agent_name: string,
  division: string,
  visa_authorisation_name: string,
  rc_name: string,
  other_charges: number,
  service_charges: number,
  ticket_charges: string,
  total_charges: number,
  invoice_number: string,
  invoice_date: string,
  bank_id: number,
  is_without: number
}

export class CandidateInvoiceRaiseListConverter {
  // private i: CandidateInvoiceRaiseListInterface
  // private a: CandidateInvoiceRaiseListAdapter

  /**
   * toInterface
   */
  public static toInterface(a: CandidateInvoiceRaiseListAdapter) {
    const data: CandidateInvoiceRaiseListInterface = {

      id: a?.id,
      party_code: a?.party_code,
      company_name: a?.company_name,
      candidate_name: a?.candidate_name,
      passport_no: a?.passport_no,
      actual_profession: a?.actual_profession,
      visa_profession: a?.visa_profession,
      agent_name: a?.agent_name,
      division: a?.division,
      visa_authorisation_name: a?.visa_authorisation_name,
      rc_name: a?.rc_name,
      other_charges: a?.other_charges,
      service_charges: a?.service_charges,
      ticket_charges: a?.ticket_charges,
      total_charges: a?.total_charges,
      invoice_number: a?.invoice_number,
      invoice_date: a?.invoice_date,
      bank_id: a?.bank_id,
      is_without: a?.is_without,

    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: CandidateInvoiceRaiseListInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: CandidateInvoiceRaiseListAdapter = {
      id: i?.id,
      party_code: i?.party_code,
      company_name: i?.company_name,
      candidate_name: i?.candidate_name,
      passport_no: i?.passport_no,
      actual_profession: i?.actual_profession,
      visa_profession: i?.visa_profession,
      agent_name: i?.agent_name,
      division: i?.division,
      visa_authorisation_name: i?.visa_authorisation_name,
      rc_name: i?.rc_name,
      other_charges: i?.other_charges,
      service_charges: i?.service_charges,
      ticket_charges: i?.ticket_charges,
      total_charges: i?.total_charges,
      invoice_number: i?.invoice_number,
      invoice_date: i?.invoice_date,
      bank_id: i?.bank_id,
      is_without: i?.is_without,

    };
    return data;
  }
}
export interface AddInvoiceRaiseInterface {
  selection_list: CandidateInvoiceRaiseInterface[];
}

export interface AddInvoiceRaiseAdapter {
  selection_list: CandidateInvoiceRaiseAdapter[];
}

export class AddInvoiceRaiseConverter {
  public static toInterface(a: AddInvoiceRaiseAdapter): AddInvoiceRaiseInterface {
    console.log(a,"kkkkkk")
    const data: AddInvoiceRaiseInterface = {
      selection_list: a?.selection_list?.map((item) => ({
        id: item.id,
        is_without: item.is_without,
        total_charges: item.total_charges,
        invoice_number: item.invoice_number,
        invoice_date: item.invoice_date,
        bank_id: item.bank_id,
      })),
    };
    return data;
  }

  public static toAdapter(i: AddInvoiceRaiseInterface): AddInvoiceRaiseAdapter {
    console.log(i,"iiiii")
    const data: AddInvoiceRaiseAdapter = {
      
      selection_list: i?.selection_list?.map((item) => ({
        id: item.id,
        is_without: item.is_without,
        total_charges: item.total_charges,
        invoice_number: item.invoice_number,
        invoice_date: item.invoice_date,
        bank_id: item.bank_id,
      })),
    };
    return data;
  }
}

export interface CandidateInvoiceRaiseInterface {
  id: number,
  is_without: number,
  total_charges: number,
  invoice_number: string,
  invoice_date: string,
  bank_id: number
}

export interface CandidateInvoiceRaiseAdapter {
  id: number,
  is_without: number,
  total_charges: number,
  invoice_number: string,
  invoice_date: string,
  bank_id: number
}

