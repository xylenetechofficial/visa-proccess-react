import { convertDateFormat } from "../../../utils/function";

export interface SubmissionDashboardInterface {
  id: number;
  party_code: string;
  company_name: string;
  name: string;
  passport_no: string;

  mofa_number: string;
  visa_profession: string;
  visa_authorization: string;
  visa_submission: string;
  visa_no: string;

  submission_date: string;
  visa_issue_date: string;
  visa_received_date: string;
  arabic_sponsor_name: string;
  arabic_visa_category: string;
  visa_arabic_date: string;

  pp_issued_date: string;
  pp_expiry_date: string;
  place_of_issue: string;

  date_of_birth: string;
  place_of_birth: string;
  address: string;

  actual_profession: string;

  agent_name: string;
  division: string;
  rm_name: string;
  rs_name: string;
  rc_name: string;

  cancelled_candidates: string;
  document_charges: number;
  consulate_charges: number;

  remarks: string;
  reject: number;
  is_without: number;
  checked?: boolean;

  mofa_rejecte_remarks?: string;
  color_code?: string;
}

export interface SubmissionDashboardAdapter {
  id: number;
  party_code: string;
  company_name: string;
  name: string;
  passport_no: string;

  mofa_number: string;
  visa_profession: string;
  visa_authorization: string;
  visa_submission: string;
  visa_no: string;

  submission_date: string;
  visa_issue_date: string;
  visa_received_date: string;
  arabic_sponsor_name: string;
  arabic_visa_category: string;
  visa_arabic_date: string;

  pp_issued_date: string;
  pp_expiry_date: string;
  place_of_issue: string;

  date_of_birth: string;
  place_of_birth: string;
  address: string;

  actual_profession: string;

  agent_name: string;
  division: string;
  rm_name: string;
  rs_name: string;
  rc_name: string;

  cancelled_candidates: string;
  document_charges: number;
  consulate_charges: number;

  remarks: string;
  rejected: number;

  is_without: number;
  mofa_rejecte_remarks?: string;

  color_code?: string;
}

export class SubmissionDashboardConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: SubmissionDashboardAdapter) {
    const data: SubmissionDashboardInterface = {
      id: a.id,
      party_code: a.party_code,
      company_name: a.company_name,
      name: a.name,
      passport_no: a.passport_no,

      mofa_number: a.mofa_number,
      visa_profession: a.visa_profession,
      visa_authorization: a.visa_authorization,
      visa_submission: a.visa_submission,
      visa_no: a.visa_no,

      submission_date: a.submission_date,
      visa_issue_date: a.visa_issue_date,
      visa_received_date: a.visa_received_date,
      arabic_sponsor_name: a.arabic_sponsor_name,
      arabic_visa_category: a.arabic_visa_category,
      visa_arabic_date: a.visa_arabic_date,

      pp_issued_date: a.pp_issued_date,
      pp_expiry_date: a.pp_expiry_date,
      place_of_issue: a.place_of_issue,

      date_of_birth: a.date_of_birth,
      place_of_birth: a.place_of_birth,
      address: a.address,

      actual_profession: a.actual_profession,

      agent_name: a.agent_name,
      division: a.division,
      rm_name: a.rm_name,
      rs_name: a.rs_name,
      rc_name: a.rc_name,

      cancelled_candidates: a.cancelled_candidates,
      document_charges: a.document_charges,
      consulate_charges: a.consulate_charges,

      remarks: a.remarks,
      reject: a.rejected,

      is_without: a.is_without,

      mofa_rejecte_remarks: a.mofa_rejecte_remarks,
      
      color_code: a.color_code,
    };

    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: SubmissionDashboardInterface) {
    const data: SubmissionDashboardAdapter = {
      id: i.id,
      party_code: i.party_code,
      company_name: i.company_name,
      name: i.name,
      passport_no: i.passport_no,
      mofa_number: i.mofa_number,
      visa_profession: i.visa_profession,
      visa_authorization: i.visa_authorization,
      visa_submission: i.visa_submission,
      visa_no: i.visa_no,
      submission_date: i.submission_date,
      visa_issue_date: i.visa_issue_date,
      visa_received_date: i.visa_received_date,
      arabic_sponsor_name: i.arabic_sponsor_name,
      arabic_visa_category: i.arabic_visa_category,
      visa_arabic_date: i.visa_arabic_date,
      pp_issued_date: i.pp_issued_date,
      pp_expiry_date: i.pp_expiry_date,
      place_of_issue: i.place_of_issue,
      date_of_birth: i.date_of_birth,
      place_of_birth: i.place_of_birth,
      address: i.address,
      actual_profession: i.actual_profession,
      agent_name: i.agent_name,
      division: i.division,
      rm_name: i.rm_name,
      rs_name: i.rs_name,
      rc_name: i.rc_name,
      cancelled_candidates: i.cancelled_candidates,
      document_charges: i.document_charges,
      consulate_charges: i.consulate_charges,
      remarks: i.remarks,
      rejected: i.reject,
      is_without: i.is_without,

      mofa_rejecte_remarks: i.mofa_rejecte_remarks,
    };
    return data;
  }

  public static toAdapterList(i_list: SubmissionDashboardInterface[]) {
    const data_list: SubmissionDashboardAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }

  public static toInterfaceList(a_list: SubmissionDashboardAdapter[]) {
    const data_list: SubmissionDashboardInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }
}
