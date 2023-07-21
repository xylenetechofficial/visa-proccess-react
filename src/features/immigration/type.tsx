
export interface ImmigrationInterface {
 
    id?: number,
    
    name: string,
    company_name: string,
    passport_no: string,
    isChecked:number,
    arn:string,
    immigration_required:string,
    submission_date:string,
    received_date:string,
    party_code: number,
    division:string,
    passport_issued_date:string,
    passport_expiry_date:string,
    place_of_issue:string,
    date_of_birth:string,
    address:string,
    nominee_name:string,
    nominee_relation:string,
    place_of_birth:string,
    visa_number:string,
    actual_profession: string,
    visa_profession: string,
    agent_name: string,
    agent_location:string,
    visa_authorization: string,
    visa_issued_date:string,
    visa_received_date: string,
    visa_expire_date:string,
    mol_number:number,
    reject:number
    

  
  }
  // 'block_visa' => 'required|array',
  // 'visa_profession_list' => 'required|array'
  
  
  // block_visa
  export interface ImmigrationAdapter {
    id?: number,
    
    name: string,
    company_name: string,
    passport_no: string,
    isChecked:number,
    arn:string,
    immigration_required:string,
    submission_date:string,
    received_date:string,
    party_code: number,
    division:string,
    passport_issued_date:string,
    passport_expiry_date:string,
    place_of_issue:string,
    date_of_birth:string,
    address:string,
    nominee_name:string,
    nominee_relation:string,
    place_of_birth:string,
    visa_number:string,
    actual_profession: string,
    visa_profession: string,
    agent_name: string,
    agent_location:string,
    visa_authorization: string,
    visa_issued_date:string,
    visa_received_date: string,
    visa_expire_date:string,
    mol_number:number,
    reject:number
  }
  
  export class ImmigrationConverter {
    // private i: ImmigrationInterface
    // private a: ImmigrationAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: ImmigrationAdapter) {
      const data: ImmigrationInterface = {
        id:a?.id,
        name:a?.name,
        company_name:a?.company_name,
        passport_no:a?.passport_no,
        isChecked:a?.isChecked,
        arn:a?.arn,
        immigration_required:a?.immigration_required,
        submission_date:a?.submission_date,
        received_date:a?.received_date,
        party_code:a?.party_code,
        division:a?.division,
        passport_issued_date:a?.passport_issued_date,
        passport_expiry_date:a?.passport_expiry_date,
        place_of_issue:a?.place_of_issue,
        date_of_birth:a?.date_of_birth,
        address:a?.address,
        nominee_name:a?.nominee_name,
        nominee_relation:a?.nominee_relation,
        place_of_birth:a?.place_of_birth,
        visa_number:a?.visa_number,
        actual_profession:a?.actual_profession,
        visa_profession:a?.visa_profession,
        agent_name:a?.agent_name,
        agent_location:a?.agent_location,
        visa_authorization:a?.visa_authorization,
        visa_issued_date:a?.visa_issued_date,
        visa_received_date:a?.visa_received_date,
        visa_expire_date:a?.visa_expire_date,
        mol_number:a?.mol_number,
        reject:a?.reject,
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
        id:i?.id,
        name:i?.name,
        company_name:i?.company_name,
        passport_no:i?.passport_no,
        isChecked:i?.isChecked,
        arn:i?.arn,
        immigration_required:i?.immigration_required,
        submission_date:i?.submission_date,
        received_date:i?.received_date,
        party_code:i?.party_code,
        division:i?.division,
        passport_issued_date:i?.passport_issued_date,
        passport_expiry_date:i?.passport_expiry_date,
        place_of_issue:i?.place_of_issue,
        date_of_birth:i?.date_of_birth,
        address:i?.address,
        nominee_name:i?.nominee_name,
        nominee_relation:i?.nominee_relation,
        place_of_birth:i?.place_of_birth,
        visa_number:i?.visa_number,
        actual_profession:i?.actual_profession,
        visa_profession:i?.visa_profession,
        agent_name:i?.agent_name,
        agent_location:i?.agent_location,
        visa_authorization:i?.visa_authorization,
        visa_issued_date:i?.visa_issued_date,
        visa_received_date:i?.visa_received_date,
        visa_expire_date:i?.visa_expire_date,
        mol_number:i?.mol_number,
        reject:i?.reject,
      };
      return data;
    }
  }
  