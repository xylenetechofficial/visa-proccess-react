
export interface DubaiDataEntryInterface {
  id?: number
  companyName: string,
  candidateName: string,
  passportNo: string,
  ppIssueDate: string,
  ppExpiryDate: string,
  placeOfIssue: string,
  dateOfBirth: string,
  placeOfBirth: string,
  address: string,
  nomineeName: string,
  nomineeRelation: string,
  religion: string,
  actualProfession: string,
  visaProfession: string,
  agent: string,
  division: string,
  rm: string,
  rs:string,
  rc: string,
  molDate: string,
  workPermitDate: string,
  ppCopy: string,
  ppReceived: number,
  ppReceivedDate: string,
  documentCharges: number,
  reject?: string,
  backedOut?: string,
}

export interface DubaiDataEntryAdapter {
  id?:number,
  name:string,
  passport_no:string,
  
  
  pp_issued_date:string,
  pp_expiry_date:string,
  place_of_issue:string,
  
  date_of_birth:string,
  place_of_birth:string,
  address:string,
  
  nominee_name:string,
  nominee_relation:string,
  religion:string,
  
  actual_profession:string,
  visa_profession:string,
  
  agent_name:string,
  division:string,
  rm_name:string,
  rs_name:string,
  rc_name:string,
  
  mol_received_date:string,
  work_permit_received_date:string,
  pp_copy:string,
  
  pp_received:number,
  pp_received_date:string,
  document_charges:number,
  company_name:string,
}



export class DubaiDataEntryConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: DubaiDataEntryAdapter) {
    const data: DubaiDataEntryInterface = {
      id: a.id,
      candidateName:a.name,
      companyName:a.company_name,
      passportNo:a.passport_no,
      ppIssueDate:a.pp_issued_date,
      ppExpiryDate:a.pp_expiry_date,
      placeOfIssue:a.place_of_issue,
      dateOfBirth:a.date_of_birth,
      placeOfBirth:a.place_of_birth,
      address:a.address,
      nomineeName:a.nominee_name,
      nomineeRelation:a.nominee_relation,
      religion:a.religion,
      actualProfession:a.actual_profession,
      visaProfession:a.visa_profession,
      agent:a.agent_name,
      division:a.division,
      rm:a.rm_name,
      rs:a.rs_name,
      rc:a.rc_name,
      molDate:a.mol_received_date,
      workPermitDate:a.work_permit_received_date,
      ppCopy:a.pp_copy,
      ppReceived:a.pp_received,
      ppReceivedDate:a.pp_received_date,
      documentCharges:a.document_charges,
      // reject:a,
      // backedOut:a., 

    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i:DubaiDataEntryInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: DubaiDataEntryAdapter = {
      company_name:i.companyName,
      id:i.id,
      name:i.candidateName,
      passport_no:i.passportNo,
      pp_issued_date:i.ppIssueDate,
      pp_expiry_date:i.ppExpiryDate,
      place_of_issue:i.placeOfIssue,
      date_of_birth:i.dateOfBirth,
      place_of_birth:i.placeOfBirth,
      address:i.address,
      nominee_name:i.nomineeName,
      nominee_relation:i.nomineeRelation,
      religion:i.religion,
      actual_profession:i.actualProfession,
      visa_profession:i.visaProfession,
      agent_name:i.agent,
      division:i.division,
      rm_name:i.rm,
      rs_name:i.rs,
      rc_name:i.rc,
      mol_received_date:i.molDate,
      work_permit_received_date:i.workPermitDate,
      pp_copy:i.ppCopy,
      pp_received:i.ppReceived,
      pp_received_date:i.ppReceivedDate,
      document_charges:i.documentCharges,
    };
    return data;
  }

  public static toInterfaceList(list:DubaiDataEntryAdapter[]){
    // const dataAdapter = response.data as DubaiDataEntryAdapter[];
    const data:DubaiDataEntryInterface[]=[]
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      data.push(DubaiDataEntryConverter.toInterface(element));
    }
    return data;
  }

  public static toAdapterList(list:DubaiDataEntryInterface[]){
    // const dataAdapter = response.data as DubaiDataEntryAdapter[];
    const data:DubaiDataEntryAdapter[]=[]
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      data.push(DubaiDataEntryConverter.toAdapter(element));
    }
    return data;
  }
}

