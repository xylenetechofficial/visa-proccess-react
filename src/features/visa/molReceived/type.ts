import { convertDateFormat } from "../../../utils/function"


export interface MolReceivedInterface {
  id: number,
  name: string,
  passportNo: string,

  ppIssueDate: string,
  ppExpiryDate: string,
  placeOfIssue: string,

  dateOfBirth: string,
  placeOfBirth: string,
  address: string,
  religion: string,

  actualProfession: string,
  visaProfession: string,
  agent: string,
  division: string,

  RM: string,
  rc: string,
  rs: string,

  ppCopy: string,
  molPPReceivedDate: string,
  // molForwarded?: number,
  molForwardedDate: string,
  
  molReceievedStatus:string,
  molReceiedDate:string,
  molNumber:string,
  checked?:number,
}

export interface MolReceivedAdapter {
  id:number,
  name:string,
  passport_no:string,
  
  pp_issued_date:string,
  pp_expiry_date:string,
  place_of_issue:string,
  
  date_of_birth:string,
  place_of_birth:string,
  address:string,
  religion:string,
  
  actual_profession:string,
  visa_profession:string,
  agent_name:string,
  division:string,
  
  rm_name:string,
  rs_name:string,
  rc_name:string,
  
  pp_copy:string,
  pp_received_date:string,
  // mol_forwarded:string,
  mol_forwarded_date:string,
  
  mol_receive_status:string,
  mol_received_date:string,
  mol_number:string,
  




}



export class MolReceivedConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: MolReceivedAdapter) {
    const data: MolReceivedInterface = {
      id: a.id,
      name: a.name,
      passportNo: a.passport_no,
      ppIssueDate: a.pp_issued_date,
      ppExpiryDate: a.pp_expiry_date,
      placeOfIssue: a.place_of_birth,
      dateOfBirth: a.date_of_birth,
      placeOfBirth: a.place_of_birth,
      address: a.address,
      religion: a.religion,
      actualProfession: a.actual_profession,
      visaProfession: a.visa_profession,
      agent: a.agent_name,
      division: a.division,
      RM: a.rm_name,
      rc: a.rc_name,
      rs: a.rs_name,
      ppCopy: a.pp_copy,
      molPPReceivedDate: a.pp_received_date,
      // molForwarded: a.mol_forwarded,
      molForwardedDate: a.mol_forwarded_date,
      molNumber:a.mol_number,
      molReceiedDate:a.mol_received_date,
      molReceievedStatus:a.mol_receive_status,
      
          


    }


    return data;
  }


  /**
   * toAdapter
   */
  public static toAdapter(i: MolReceivedInterface) {
    const data: MolReceivedAdapter = {
      id:i.id,
      name:i.name,
      passport_no:i.passportNo,
      pp_issued_date:i.ppIssueDate,
      pp_expiry_date:i.ppExpiryDate,
      place_of_issue:i.placeOfIssue,
      date_of_birth:i.dateOfBirth,
      place_of_birth:i.placeOfBirth,
      address:i.address,
      religion:i.religion,
      actual_profession:i.actualProfession,
      visa_profession:i.visaProfession,
      agent_name:i.agent,
      division:i.division,
      rm_name:i.RM,
      rc_name:i.rc,
      rs_name:i.rs,
      pp_copy:i.ppCopy,
      pp_received_date:i.molPPReceivedDate,
      // mol_forwarded:i.molForwarded,

      mol_forwarded_date:i.molForwardedDate,
      mol_number:i.molNumber,
      mol_receive_status:i.molReceievedStatus,
      mol_received_date:i.molReceiedDate,
      
    };
    return data;
  }

  public static toAdapterList(i_list: MolReceivedInterface[]) {
    const data_list: MolReceivedAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }

  public static toInterfaceList(a_list: MolReceivedAdapter[]) {
    const data_list: MolReceivedInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }
}

