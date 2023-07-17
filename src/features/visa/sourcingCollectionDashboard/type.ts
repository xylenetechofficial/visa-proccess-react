import { convertDateFormat } from "../../../utils/function"
import { CompanyInterface } from "../../masters/company/type"
import { BlockVisaInterface, } from "../blockVisa/type"

export interface Src_Col_Dash_JobOrderInterface {
  id?: number
  jobOrderNo: string,
  company: string,
  division: string,
  quantityAsPerJob: number,
  selectionQty: number,
  docsCollectedQty: number,
  docsBalanceForCollections: number,
  BackedOutUnfit: number,
 

}

export interface Src_Col_Dash_JobOrderAdapter {
  job_order_id?: number,
  job_order_no: string,
  company_name: string,
  division: string,
  quantity_per_job_order: number,
  selection_quantity: number,
  docs_collection_quantity: number,
  docs_balance_for_collection: number,
  backed_out_or_unfit: number



}



export class Src_Col_Dash_JobOrderConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: Src_Col_Dash_JobOrderAdapter) {
    const data: Src_Col_Dash_JobOrderInterface = {
      BackedOutUnfit: a.backed_out_or_unfit,
      company: a.company_name,
      division: a.division,
      jobOrderNo: a.job_order_no,
      quantityAsPerJob: a.quantity_per_job_order,
      selectionQty: a.selection_quantity,
      docsCollectedQty: a.docs_collection_quantity,
      docsBalanceForCollections: a.docs_balance_for_collection,
      id: a.job_order_id



    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: Src_Col_Dash_JobOrderInterface) {
    const data: Src_Col_Dash_JobOrderAdapter = {
      backed_out_or_unfit: i.BackedOutUnfit,
      company_name: i.company,
      division: i.division,
      job_order_no: i.jobOrderNo,
      quantity_per_job_order: i.quantityAsPerJob,
      selection_quantity: i.selectionQty,
      docs_collection_quantity: i.docsCollectedQty,
      docs_balance_for_collection: i.docsBalanceForCollections,
      job_order_id: i.id

    };
    return data;
  }

  public static toAdapterList(i_list: Src_Col_Dash_JobOrderInterface[]) {
    const data_list: Src_Col_Dash_JobOrderAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }

  public static toInterfaceList(a_list: Src_Col_Dash_JobOrderAdapter[]) {
    const data_list: Src_Col_Dash_JobOrderInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }
}


// candiate

export interface Src_Col_Dash_CandidateInterface {
  id?: number
  candidateCode: number,
  name: string,
  passportNo: string,
  passportIssueDate: string,
  passportExpiryDate: string,
  ActualProfession: string,
  rcName: string,
  totalSalary: number,
  agent: string,
  agent_name?: string,
  age: number,
  InterviewSector: string,
  contactNo: string,
  medicalStatus: string,
  medical: number,
  pp: number,
  photo: number,
  status: string,
  docsForwardedToRc: number,
  checked?: boolean,

}

export interface Src_Col_Dash_CandidateAdapter {
  id: number,
  name: string,
  passport_no: string,
  pp_issued_date: string,
  pp_expiry_date: string,
  actual_profession: string,
  rc_name: string,
  total_salary: number,
  agent: string,
  agent_name?: string,
  age: number,
  sector: string,
  contact_no: string,
  medical_status: string,
  medical: number,
  pp: number,
  photo: number,
  status: string,
  docs_forwarded_to_rc: number,


}


export class Src_Col_Dash_CandidateConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: Src_Col_Dash_CandidateAdapter) {
    const data: Src_Col_Dash_CandidateInterface = {
      ActualProfession: a.actual_profession,
      age: a.age,
      candidateCode: a.id,
      contactNo: a.contact_no,
      docsForwardedToRc: a.docs_forwarded_to_rc,
      medical: a.medical,
      agent: a.agent,
      agent_name: a.agent_name,
      InterviewSector: a.sector,
      medicalStatus: a.medical_status,
      name: a.name,
      passportNo: a.passport_no,
      passportIssueDate: a.pp_issued_date,
      passportExpiryDate: a.pp_expiry_date,
      photo: a.photo,
      status: a.status,
      totalSalary: a.total_salary,
      rcName: a.rc_name,
      pp: a.pp,
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: Src_Col_Dash_CandidateInterface) {
    const data: Src_Col_Dash_CandidateAdapter = {
      actual_profession: i.ActualProfession,
      age: i.age,
      id: i.candidateCode,
      contact_no: i.contactNo,
      docs_forwarded_to_rc: i.docsForwardedToRc,
      medical: i.medical,
      agent_name: i.agent_name,
      agent: i.agent,
      sector: i.InterviewSector,
      medical_status: i.medicalStatus,
      name: i.name,
      passport_no: i.passportNo,
      pp_issued_date: i.passportIssueDate,
      pp_expiry_date: i.passportExpiryDate,
      photo: i.photo,
      status: i.status,
      total_salary: i.totalSalary,
      rc_name: i.rcName,
      pp: i.pp,

    };
    return data;
  }

  public static toAdapterList(i_list: Src_Col_Dash_CandidateInterface[]) {
    const data_list: Src_Col_Dash_CandidateAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }

  public static toInterfaceList(a_list: Src_Col_Dash_CandidateAdapter[]) {
    const data_list: Src_Col_Dash_CandidateInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }
}





















