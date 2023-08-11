export interface BlockVisaInterface {
  id?: number;
  index_date: string;
  company: number;
  company_name?: string;
  country: number;
  country_name?: string;
  quantity: number;
  visa_date_arabic: string;
  visa_number: string;
  visa_fee: number;
  visa_issued_date: string;
  visa_authorization: number;
  visa_authorization_name?: string;
  visa_submission: string;
  arabic_sponsor_name: string;
  sponsor_id: string;
  days: number;
  visa_expiry_date: string;
  division: string;
  om: number;
  rm: number;
  rc: number;
  visa_accountable: number;
  visaProfessionList: VisaProfesionInterface[];
  balanceQuantity?: number;
}
// 'block_visa' => 'required|array',
// 'visa_profession_list' => 'required|array'

export interface ServerAdapter {
  block_visa: BlockVisaAdapter;
  visa_profession_list: VisaProfesionAdapter[];
}

// block_visa
export interface BlockVisaAdapter {
  id?: number;
  index_date: string;
  company: number;
  company_name?: string;
  country: number;
  country_name?: string;
  quantity: number;
  visa_date_arabic: string;
  visa_number: string;
  visa_fee: number;
  visa_issued_date: string;
  visa_authorization: number;
  visa_authorization_name?: string;
  visa_submission: string;
  arabic_sponsor_name: string;
  sponsor_id: string;
  visa_expiry_date: string;
  division: string;
  om: number;
  rm: number;
  rc: number;
  visa_accountable: number;
  visa_profession_list?: string;
  days: number;
  balance_quantity?: number;
}

export interface VisaProfesionInterface {
  id?: number;
  block_visa_id: number;
  visa_profession: string;
  arabic_visa_category: string;
  quantity: number;
}

export interface VisaProfesionAdapter {
  id?: number;
  block_visa_id: number;
  visa_profession: string;
  arabic_visa_category: string;
  quantity: number;
}

export class BlockVisaConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: BlockVisaAdapter) {
    const data: BlockVisaInterface = {
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
      visaProfessionList: JSON.parse(a.visa_profession_list ?? "[]"),
      days: a.days,
      balanceQuantity: a.balance_quantity,
      company_name: a.company_name,
      country_name: a.country_name,
      visa_authorization_name: a.visa_authorization_name,
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: BlockVisaInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: BlockVisaAdapter = {
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
      visa_profession_list: JSON.stringify(i.visaProfessionList),
      days: i.days,
      balance_quantity: i.balanceQuantity,


      company_name: i.company_name,
      country_name: i.country_name,
      visa_authorization_name: i.visa_authorization_name,
    };
    return data;
  }
}
