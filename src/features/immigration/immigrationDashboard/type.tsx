
export interface ImmigrationInterface {

  id: number,
  name: string,
  company_name: string,
  passport_no: string,
  party_code: number,
  division: string,
  pp_issued_date: string,
  pp_expiry_date: string,
  place_of_issue: string,
  date_of_birth: string,
  address: string,
  nominee_name: string,
  nominee_relation: string,
  place_of_birth: string,
  visa_number: string,
  actual_profession: string,
  visa_profession: string,
  agent_name: string,
  agent_location_name: string,
  visa_authorization_name: string,
  visa_issued_date: string,
  visa_received_date: string,
  visa_expire_date: string,
  mol_number: string,
  immigration_required: string,
  immigration_submission_date: string,
  immigration_received_date: string,
  immigration_reject_remarks: string,
  is_without: number


}
// 'block_visa' => 'required|array',
// 'visa_profession_list' => 'required|array'


// block_visa
export interface ImmigrationAdapter {
  id: number,
  name: string,
  company_name: string,
  passport_no: string,
  party_code: number,
  division: string,
  pp_issued_date: string,
  pp_expiry_date: string,
  place_of_issue: string,
  date_of_birth: string,
  address: string,
  nominee_name: string,
  nominee_relation: string,
  place_of_birth: string,
  visa_number: string,
  actual_profession: string,
  visa_profession: string,
  agent_name: string,
  agent_location_name: string,
  visa_authorization_name: string,
  visa_issued_date: string,
  visa_received_date: string,
  visa_expire_date: string,
  mol_number: string,
  immigration_required: string,
  immigration_submission_date: string,
  immigration_received_date: string,
  immigration_reject_remarks: string,
  is_without: number

}

export class ImmigrationConverter {
  // private i: ImmigrationInterface
  // private a: ImmigrationAdapter

  /**
   * toInterface
   */
  public static toInterface(a: ImmigrationAdapter) {
    const data: ImmigrationInterface = {
      id: a?.id,
      name: a?.name,
      company_name: a?.company_name,
      passport_no: a?.passport_no,
      party_code: a?.party_code,
      division: a?.division,
      pp_issued_date: a?.pp_issued_date,
      pp_expiry_date: a?.pp_expiry_date,
      place_of_issue: a?.place_of_issue,
      date_of_birth: a?.date_of_birth,
      address: a?.address,
      nominee_name: a?.nominee_name,
      nominee_relation: a?.nominee_relation,
      place_of_birth: a?.place_of_birth,
      visa_number: a?.visa_number,
      actual_profession: a?.actual_profession,
      visa_profession: a?.visa_profession,
      agent_name: a?.agent_name,
      agent_location_name: a?.agent_location_name,
      visa_authorization_name: a?.visa_authorization_name,
      visa_issued_date: a?.visa_issued_date,
      visa_received_date: a?.visa_received_date,
      visa_expire_date: a?.visa_expire_date,
      mol_number: a?.mol_number,
      immigration_required: a?.immigration_required,
      immigration_submission_date: a?.immigration_submission_date,
      immigration_received_date: a?.immigration_received_date,
      immigration_reject_remarks: a?.immigration_reject_remarks,
      is_without: a?.is_without,
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: ImmigrationInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: ImmigrationAdapter = {
      id: i?.id,
      name: i?.name,
      company_name: i?.company_name,
      passport_no: i?.passport_no,
      party_code: i?.party_code,
      division: i?.division,
      pp_issued_date: i?.pp_issued_date,
      pp_expiry_date: i?.pp_expiry_date,
      place_of_issue: i?.place_of_issue,
      date_of_birth: i?.date_of_birth,
      address: i?.address,
      nominee_name: i?.nominee_name,
      nominee_relation: i?.nominee_relation,
      place_of_birth: i?.place_of_birth,
      visa_number: i?.visa_number,
      actual_profession: i?.actual_profession,
      visa_profession: i?.visa_profession,
      agent_name: i?.agent_name,
      agent_location_name: i?.agent_location_name,
      visa_authorization_name: i?.visa_authorization_name,
      visa_issued_date: i?.visa_issued_date,
      visa_received_date: i?.visa_received_date,
      visa_expire_date: i?.visa_expire_date,
      mol_number: i?.mol_number,
      immigration_required: i?.immigration_required,
      immigration_submission_date: i?.immigration_submission_date,
      immigration_received_date: i?.immigration_received_date,
      immigration_reject_remarks: i?.immigration_reject_remarks,
      is_without: i?.is_without,
    };
    return data;
  }
}


export interface AddImmigrationDashboardInterface {
  selection_list: AddImmigrationInterface[];
}

export interface AddImmigrationDashboardAdapter {
  selection_list: AddImmigrationAdapter[];
}

export class AddInvoiceRaiseConverter {
  public static toInterface(a: AddImmigrationDashboardAdapter): AddImmigrationDashboardInterface {
    console.log(a, "kkkkkk")
    const data: AddImmigrationDashboardInterface = {
      selection_list: a?.selection_list?.map((item) => ({
        id: item?.id,
        is_without: item?.is_without,
        immigration_required: item?.immigration_required,
        immigration_submission_date: item?.immigration_submission_date,
        immigration_received_date: item?.immigration_received_date,
      })),
    };
    return data;
  }

  public static toAdapter(i: AddImmigrationDashboardInterface): AddImmigrationDashboardAdapter {
    console.log(i, "iiiii")
    const data: AddImmigrationDashboardAdapter = {

      selection_list: i?.selection_list?.map((item) => ({
        id: item?.id,
        is_without: item?.is_without,
        immigration_required: item?.immigration_required,
        immigration_submission_date: item?.immigration_submission_date,
        immigration_received_date: item?.immigration_received_date,
      })),
    };
    return data;
  }
}

export interface AddImmigrationInterface {
  id: number,
  is_without: number,
  immigration_required: string,
  immigration_submission_date: string,
  immigration_received_date: string
}

export interface AddImmigrationAdapter {
  id: number,
  is_without: number,
  immigration_required: string,
  immigration_submission_date: string,
  immigration_received_date: string
}

export interface UpdateImmigrationRejectInterface {
  is_without: number,
  immigration_reject_remarks: string,
}

export interface UpdateImmigrationRejectAdapter {
  is_without: number,
  immigration_reject_remarks: string,
}


export class UpdateImmigrationRejectConverter {
  public static toInterface(a: UpdateImmigrationRejectAdapter) {
    console.log(a, "kkkkkk")
    const data: UpdateImmigrationRejectInterface = {
      is_without: a?.is_without,
      immigration_reject_remarks: a?.immigration_reject_remarks
    };
    return data;
  }

  public static toAdapter(i: UpdateImmigrationRejectInterface) {
    console.log(i, "iiiii")
    const data: UpdateImmigrationRejectAdapter = {

      is_without: i?.is_without,
      immigration_reject_remarks: i?.immigration_reject_remarks,
    };
    return data;
  }
}
