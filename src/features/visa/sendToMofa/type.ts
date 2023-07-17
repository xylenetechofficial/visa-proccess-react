import { convertDateFormat } from "../../../utils/function"


export interface SendToMofa_JobOrderInterface {
  id?: number,
  jobOrderId: number,
  jobOrderNo: string,
  company: string,
  candidateName: string,
  passportNo: string,
  passortIssuwDate: string,
  passortExpiryDate: string,
  acctualProfession: string,
  agent: string,
  rs: string,
  rm: string,
  rc: string,
  approvalDate: string,
  medicalStatus: string,
  selectionStatus: string,
  currentStatus: string,
  partyCode: string,
  visaProfession: string,
  PartyCode_VisaProfession?: string,
  checked?: boolean,
  party_code_list?: {
    party_code: string,
    visa_profession: string
    name: string
  }[],

}

export interface SendToMofa_JobOrderAdapter {
  id?: number,
  job_order_id: number,
  job_order_no: string,
  company_name: string,
  name: string,
  passport_no: string,
  pp_issued_date: string,
  pp_expiry_date: string,
  actual_profession: string,

  agent_name: string,
  rs_name: string,
  rm_name: string,
  rc_name: string,
  approval_date: string,

  medical_status: string,
  selection_status: string,
  current_status: string,

  party_code: string,
  visa_profession: string,

  party_code_list?: {
    party_code: string,
    visa_profession: string
    name: string
  }[],




}



export class SendToMofa_JobOrderConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: SendToMofa_JobOrderAdapter) {
    const data: SendToMofa_JobOrderInterface = {
      acctualProfession: a.actual_profession,
      agent: a.agent_name,
      rs: a.rs_name,
      rm: a.rm_name,
      rc: a.rc_name,
      approvalDate: convertDateFormat(a.approval_date),
      medicalStatus: a.medical_status,
      selectionStatus: a.selection_status,
      partyCode: a.party_code,
      candidateName: a.name,
      company: a.company_name,
      jobOrderNo: a.job_order_no,
      passportNo: a.passport_no,
      passortIssuwDate: convertDateFormat(a.pp_issued_date),
      passortExpiryDate: convertDateFormat(a.pp_expiry_date),
      id: a.id,
      currentStatus: a.current_status,
      jobOrderId: a.job_order_id,
      visaProfession: a.visa_profession,
      party_code_list:a.party_code_list


    }


    return data;
  }


  /**
   * toAdapter
   */
  public static toAdapter(i: SendToMofa_JobOrderInterface) {
    const data: SendToMofa_JobOrderAdapter = {
      actual_profession: i.acctualProfession,
      agent_name: i.agent,
      rs_name: i.rs,
      rm_name: i.rm,
      rc_name: i.rc,
      approval_date: i.approvalDate,
      medical_status: i.medicalStatus,
      selection_status: i.selectionStatus,
      party_code: i.partyCode,
      company_name: i.company,
      job_order_no: i.jobOrderNo,
      passport_no: i.passportNo,
      pp_issued_date: i.passortIssuwDate,
      pp_expiry_date: i.passortExpiryDate,
      id: i.id,
      current_status: i.currentStatus,
      job_order_id: i.jobOrderId,
      name: i.candidateName,
      visa_profession: i.visaProfession,
      party_code_list: i.party_code_list
    };
    return data;
  }

  public static toAdapterList(i_list: SendToMofa_JobOrderInterface[]) {
    const data_list: SendToMofa_JobOrderAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }

  public static toInterfaceList(a_list: SendToMofa_JobOrderAdapter[]) {
    const data_list: SendToMofa_JobOrderInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }
}

