import { convertDateFormat } from "../../../utils/function";
import { VisaAllocationInterface } from "../indexVisa/type";

export interface VisaReceivedInterface {
  id?: number;
  candidateNo: number;
  partyCode: string;
  companyName: string;
  candiddateName: string;
  passportNo: string;
  actualProfession: string;
  visaProfession: string;
  agent: string;
  rc: string;
  mofaNumber: string;
  visaAuthorization: string;
  division: string;
  visaFee: string;
  ppCopy: string;
  visaNo: string;
  submissionDate: string;
  visaReceivedDate: string;
  documentCharges: string;
  status: string;
  folderLocation: string;
  placeOfIssue: string;
  is_without: number;
  checked?: boolean;
}

export interface VisaReceivedAdapter {
  id: number;
  party_code: string;
  company_name: string;
  name: string;
  passport_no: string;
  actual_profession: string;

  visa_profession: string;
  agent_name: string;
  rc_name: string;

  mofa_number: string;
  visa_authorization: string;
  division: string;

  visa_fee: string;
  pp_copy: string;
  visa_no: string;

  submission_date: string;
  visa_received_date: string;
  place_of_issue: string;

  document_charges: string;
  status: string;
  folder_location: string;
  is_without: number;
}

export class VisaReceivedConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: VisaReceivedAdapter) {
    const data: VisaReceivedInterface = {
      actualProfession: a.actual_profession,
      agent: a.agent_name,
      candidateNo: a.id,
      candiddateName: a.name,
      companyName: a.company_name,
      division: a.division,
      documentCharges: a.document_charges,
      folderLocation: a.folder_location,
      mofaNumber: a.mofa_number,
      partyCode: a.party_code,
      passportNo: a.passport_no,
      ppCopy: a.pp_copy,
      rc: a.rc_name,
      submissionDate: a.submission_date,
      status: a.status,
      visaAuthorization: a.visa_authorization,
      visaFee: a.visa_fee,
      visaNo: a.visa_no,
      visaReceivedDate: a.visa_received_date,
      visaProfession: a.visa_profession,
      id: a.id,
      placeOfIssue: a.place_of_issue,
      is_without: a.is_without,
    };

    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: VisaReceivedInterface) {
    const data: VisaReceivedAdapter = {
      actual_profession: i.actualProfession,
      agent_name: i.agent,
      name: i.candiddateName,
      company_name: i.companyName,
      division: i.division,
      document_charges: i.documentCharges,
      folder_location: i.folderLocation,
      mofa_number: i.mofaNumber,
      party_code: i.partyCode,
      passport_no: i.passportNo,
      pp_copy: i.ppCopy,
      rc_name: i.rc,
      submission_date: i.submissionDate,
      status: i.status,
      visa_authorization: i.visaAuthorization,
      visa_fee: i.visaFee,
      visa_no: i.visaNo,
      visa_received_date: i.visaReceivedDate,
      visa_profession: i.visaProfession,
      id: i.candidateNo,
      place_of_issue: i.placeOfIssue,
      is_without: i.is_without,
    };
    return data;
  }

  public static toAdapterList(i_list: VisaReceivedInterface[]) {
    const data_list: VisaReceivedAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }

  public static toInterfaceList(a_list: VisaReceivedAdapter[]) {
    const data_list: VisaReceivedInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }
}
