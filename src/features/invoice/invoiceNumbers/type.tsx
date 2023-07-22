
export interface ClientInvoiceNumberInterface {

  id: number,
  party_code: number,
  company_name: string,
  candidate_name: string,
  passport_no: string,
  actual_profession: string,
  visa_profession: string,
  agent_name: string,
  division: string,
  rc_name: string,
  invoice_number: string,
  invoice_date: string,
  bank_id: number,
  is_without: number




}
// 'block_visa' => 'required|array',
// 'visa_profession_list' => 'required|array'


// block_visa
export interface ClientInvoiceNumberAdapter {

  id: number,
  party_code: number,
  company_name: string,
  candidate_name: string,
  passport_no: string,
  actual_profession: string,
  visa_profession: string,
  agent_name: string,
  division: string,
  rc_name: string,
  invoice_number: string,
  invoice_date: string,
  bank_id: number,
  is_without: number
}

export class ClientInvoiceNumberConverter {
  // private i: ClientInvoiceNumberInterface
  // private a: ClientInvoiceNumberAdapter

  /**
   * toInterface
   */
  public static toInterface(a: ClientInvoiceNumberAdapter) {
    const data: ClientInvoiceNumberInterface = {

      id: a?.id,
      party_code: a?.party_code,
      company_name: a?.company_name,
      candidate_name: a?.candidate_name,
      passport_no: a?.passport_no,
      actual_profession: a?.actual_profession,
      visa_profession: a?.visa_profession,
      agent_name: a?.agent_name,
      division: a?.division,
      rc_name: a?.rc_name,
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
  public static toAdapter(i: ClientInvoiceNumberInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: ClientInvoiceNumberAdapter = {
      id: i?.id,
      party_code: i?.party_code,
      company_name: i?.company_name,
      candidate_name: i?.candidate_name,
      passport_no: i?.passport_no,
      actual_profession: i?.actual_profession,
      visa_profession: i?.visa_profession,
      agent_name: i?.agent_name,
      division: i?.division,
      rc_name: i?.rc_name,
      invoice_number: i?.invoice_number,
      invoice_date: i?.invoice_date,
      bank_id: i?.bank_id,
      is_without: i?.is_without,
    };
    return data;
  }
}




// export interface AddCandidateInvoiceNumberInterface {

//   id: number,
//   invoice_number: string,
//   invoice_date: string,
//   bank_id: number,
//   is_without: number

// }

// block_visa
// export interface AddCandidateInvoiceNumberAdapter {

//   id: number,
//   invoice_number: string,
//   invoice_date: string,
//   bank_id: number,
//   is_without: number
// }

// export class AddCandidateInvoiceNumberConverter {
//   // private i: AddCandidateInvoiceNumberInterface
//   // private a: AddCandidateInvoiceNumberAdapter

//   /**
//    * toInterface
//    */
//   public static toInterface(a: AddCandidateInvoiceNumberAdapter) {
//     const data: AddCandidateInvoiceNumberInterface = {

//       id: a?.id,
//       is_without: a?.is_without,
//       invoice_number: a?.invoice_number,
//       invoice_date: a?.invoice_date,
//       bank_id: a?.bank_id,
      
   
//     };
//     return data;
//   }

//   /**
//    * toAdapter
//    */
//   public static toAdapter(i: AddCandidateInvoiceNumberInterface) {
//     console.log("i"); // Only Dev
//     console.log(i); // Only Dev
//     const data: AddCandidateInvoiceNumberAdapter = {
//       id: i?.id,
//       is_without: i?.is_without,
//       invoice_number: i?.invoice_number,
//       invoice_date: i?.invoice_date,
//       bank_id: i?.bank_id,
   
      
//     };
//     return data;
//   }
// }



export interface AddSelectionInvoiceNumberInterface {

  selection_list:AddCandidateInvoiceNumberInterface[]
}

export interface AddCandidateInvoiceNumberAdapter {
  
  selection_list:AddCandidateInvoiceNumberInterface[],
}


export interface AddCandidateInvoiceNumberInterface {
  id: number,
  invoice_number: string,
  invoice_date: string,
  bank_id: number,
  is_without: number
}

export interface AddPenaltyAfterDeploymentAdapter {
  id: number,
  invoice_number: string,
  invoice_date: string,
  bank_id: number,
  is_without: number
}



export class AddSelectionPenaltyAfterDeploymentConverter {
  // private i: AddCandidateInvoiceNumberInterface
  // private a: AddPenaltyAfterDeploymentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: AddCandidateInvoiceNumberAdapter) {
    const data: AddSelectionInvoiceNumberInterface = {
      selection_list: a?.selection_list?.map((item) => ({
        id: item?.id,
        is_without: item?.is_without,
        invoice_number: item?.invoice_number,
        invoice_date: item?.invoice_date,
        bank_id: item?.bank_id,
    })),
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: AddSelectionInvoiceNumberInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: AddCandidateInvoiceNumberAdapter = {
   
      selection_list: i?.selection_list?.map((item) => ({
        id: item?.id,
        is_without: item?.is_without,
        invoice_number: item?.invoice_number,
        invoice_date: item?.invoice_date,
        bank_id: item?.bank_id,
  
      })),
    };
    return data;
  }
}
