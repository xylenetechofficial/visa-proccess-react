
export interface CandidateDiscountInterface {
  id?: number
  index_date: string,
  company: number,
  country: number,
  quantity: number,
  visa_date_arabic: string,
  visa_number: string,
  visa_fee: number,
  visa_issued_date: string,
  visa_authorization: number,
  visa_submission: string,
  arabic_sponsor_name: string,
  sponsor_id: string,
  visa_expiry_date: string,
  division: string
  om: number,
  rm: number,
  rc: number,
  visa_accountable: number,
  visaProfessionList?:VisaProfesionInterface[]

}
// 'block_visa' => 'required|array',
// 'visa_profession_list' => 'required|array'

export interface ServerAdapter{
  block_visa: CandidateDiscountAdapter,
  visa_profession_list: VisaProfesionAdapter[]
}

// block_visa
export interface CandidateDiscountAdapter {
  id?: number,
  index_date: string,
  company: number,
  country: number,
  quantity: number,
  visa_date_arabic: string,
  visa_number: string,
  visa_fee: number,
  visa_issued_date: string,
  visa_authorization: number,
  visa_submission: string,
  arabic_sponsor_name: string,
  sponsor_id: string,
  visa_expiry_date: string
  division: string
  om: number,
  rm: number,
  rc: number,
  visa_accountable: number,
  visa_profession_list?:string



}

export interface VisaProfesionInterface {
  id?:number;
  block_visa_id: number;
  visa_profession: string;
  arabic_visa_category: string;
  quantity: number;
}

export interface VisaProfesionAdapter {
  id?:number;
  block_visa_id: number;
  visa_profession: string;
  arabic_visa_category: string;
  quantity: number;
}

export class CandidateDiscountConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: CandidateDiscountAdapter) {
    const data: CandidateDiscountInterface = {
      id: a.id,
      index_date: a.index_date,
      company: a.company,
      country: a.country,
      quantity: a.quantity,
      visa_date_arabic: a.visa_date_arabic,
      visa_number: a.visa_number,
      visa_fee: a.visa_fee,
      visa_issued_date: a.visa_issued_date,
      visa_authorization: a.visa_authorization,
      visa_submission: a.visa_submission,
      arabic_sponsor_name: a.arabic_sponsor_name,
      sponsor_id: a.sponsor_id,
      visa_expiry_date: a.visa_expiry_date,
      division: a.division,
      om: a.om,
      rm: a.rm,
      rc: a.rc,
      visa_accountable: a.visa_accountable,
      visaProfessionList:JSON.parse(a.visa_profession_list??"[]")

    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: CandidateDiscountInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: CandidateDiscountAdapter = {
      id: i.id,
      index_date: i.index_date,
      company: i.company,
      country: i.country,
      quantity: i.quantity,
      visa_date_arabic: i.visa_date_arabic,
      visa_number: i.visa_number,
      visa_fee: i.visa_fee,
      visa_issued_date: i.visa_issued_date,
      visa_authorization: i.visa_authorization,
      visa_submission: i.visa_submission,
      arabic_sponsor_name: i.arabic_sponsor_name,
      sponsor_id: i.sponsor_id,
      visa_expiry_date: i.visa_expiry_date,
      division: i.division,
      om: i.om,
      rm: i.rm,
      rc: i.rc,
      visa_accountable: i.visa_accountable,
      visa_profession_list:JSON.stringify(i.visaProfessionList)
    };
    return data;
  }
}



export interface AddCandidateDiscountInterface {
  selection_list: AddSelectionCandidateDiscountInterface[];
}

export interface AddCandidateDiscountAdapter {
  selection_list: AddSelectionCandidateDiscountAdapter[];
}

export class AddCandidateDiscountConverter {
  public static toInterface(a: AddCandidateDiscountAdapter): AddCandidateDiscountInterface {
    console.log(a,"kkkkkk")
    const data: AddCandidateDiscountInterface = {
      selection_list: a?.selection_list?.map((item) => ({
        discount_id: item.discount_id,
            status: item.status,
      })),
    };
    return data;
  }

  public static toAdapter(i: AddCandidateDiscountInterface): AddCandidateDiscountAdapter {
    console.log(i,"iiiii")
    const data: AddCandidateDiscountAdapter = {
      
      selection_list: i?.selection_list.map((item) => ({
        discount_id: item.discount_id,
        status: item.status,
      })),
    };
    return data;
  }
}

export interface AddSelectionCandidateDiscountInterface {
  
  discount_id: number,
  status: number,
}

export interface AddSelectionCandidateDiscountAdapter {
  discount_id: number,
  status: number,
}

