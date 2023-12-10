
export interface ImmigrationInterface {

  id?: number,
  name: string
  company_name: string
  passport_no: string
  party_code: number
  division: string
  pp_issued_date: string
  pp_expiry_date: string
  place_of_issue: string
  date_of_birth: string
  address: string
  nominee_name: string
  nominee_relation: string
  place_of_birth: string
  visa_number: string
  actual_profession: string
  visa_profession: string
  agent_name: string
  agent_location_name: string
  visa_authorization_name: string
  visa_issued_date: any
  visa_received_date: string
  visa_expire_date: any
  mol_number: string
  immigration_required: string
  immigration_submission_date: string
  immigration_received_date: string
  immigration_reject_remarks: string
  is_without: number
  color_code?:string


  checked?:number
}


export interface ImmigrationAdapter {
  id?: number,
  name: string
  company_name: string
  passport_no: string
  party_code: number
  division: string
  pp_issued_date: string
  pp_expiry_date: string
  place_of_issue: string
  date_of_birth: string
  address: string
  nominee_name: string
  nominee_relation: string
  place_of_birth: string
  visa_number: string
  actual_profession: string
  visa_profession: string
  agent_name: string
  agent_location_name: string
  visa_authorization_name: string
  visa_issued_date: any
  visa_received_date: string
  visa_expire_date: any
  mol_number: string
  immigration_required: string
  immigration_submission_date: string
  immigration_received_date: string
  immigration_reject_remarks: string
  is_without: number
  color_code?:string
}

export class ImmigrationConverter {
  // private i: ImmigrationInterface
  // private a: ImmigrationAdapter

  /**
   * toInterface
   */
  public static toInterface(a: ImmigrationAdapter) {
    const data: ImmigrationInterface = {
      id: a.id,
      name: a.name,
      company_name: a.company_name,
      passport_no: a.passport_no,
      party_code: a.party_code,
      division: a.division,
      pp_issued_date: a.pp_issued_date,
      pp_expiry_date: a.pp_expiry_date,
      place_of_issue: a.place_of_issue,
      date_of_birth: a.date_of_birth,
      address: a.address,
      nominee_name: a.nominee_name,
      nominee_relation: a.nominee_relation,
      place_of_birth: a.place_of_birth,
      visa_number: a.visa_number,
      actual_profession: a.actual_profession,
      visa_profession: a.visa_profession,
      agent_name: a.agent_name,
      agent_location_name: a.agent_location_name,
      visa_authorization_name: a.visa_authorization_name,
      visa_issued_date: a.visa_issued_date,
      visa_received_date: a.visa_received_date,
      visa_expire_date: a.visa_expire_date,
      mol_number: a.mol_number,
      immigration_required: a.immigration_required,
      immigration_submission_date: a.immigration_submission_date,
      immigration_received_date: a.immigration_received_date,
      immigration_reject_remarks: a.immigration_reject_remarks,
      is_without: a.is_without,
      color_code:a.color_code
    };
    return data;
  }



  public static toInterfaceList(a_list: ImmigrationAdapter[]) {
    const data_list: ImmigrationInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: ImmigrationInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: ImmigrationAdapter = {
      id: i.id,
      name: i.name,
      company_name: i.company_name,
      passport_no: i.passport_no,
      party_code: i.party_code,
      division: i.division,
      pp_issued_date: i.pp_issued_date,
      pp_expiry_date: i.pp_expiry_date,
      place_of_issue: i.place_of_issue,
      date_of_birth: i.date_of_birth,
      address: i.address,
      nominee_name: i.nominee_name,
      nominee_relation: i.nominee_relation,
      place_of_birth: i.place_of_birth,
      visa_number: i.visa_number,
      actual_profession: i.actual_profession,
      visa_profession: i.visa_profession,
      agent_name: i.agent_name,
      agent_location_name: i.agent_location_name,
      visa_authorization_name: i.visa_authorization_name,
      visa_issued_date: i.visa_issued_date,
      visa_received_date: i.visa_received_date,
      visa_expire_date: i.visa_expire_date,
      mol_number: i.mol_number,
      immigration_required: i.immigration_required,
      immigration_submission_date: i.immigration_submission_date,
      immigration_received_date: i.immigration_received_date,
      immigration_reject_remarks: i.immigration_reject_remarks,
      is_without: i.is_without,
      color_code:i.color_code
    };
    return data;
  }



  public static toAdapterList(i_list: ImmigrationInterface[]) {
    const data_list: ImmigrationAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}