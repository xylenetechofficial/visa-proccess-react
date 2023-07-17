import { convertDateFormat } from "../../../utils/function";
import { CompanyInterface } from "../../masters/company/type";
import { BlockVisaInterface, VisaProfesionInterface } from "../blockVisa/type";

export interface IndexVisaInterface {
  id?: number;
  index_date: string;
  party_code: string;
  jobOrderNo: string;
  company: number;
  country: number;
  quantity: number;
  visa_date_arabic: string;
  visa_number: string;
  visa_fee: number;
  visa_issued_date: string;
  visa_authorization: number;
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
  visaAllocationList?: VisaAllocationInterface[];
  visaProfessionList?: VisaProfesionInterface[];

  company_name?: string;
  country_name?: string;
  visa_authorization_name?: string;
}
// 'index_visa' => 'required|array',
// 'visa_profession_list' => 'required|array'
// index_date:string,
// company:number,
// party_code:string,
// job_order_id?: number,,
// job_order_no:string,
// block_visa_id:number,
// country:country,
// quantity:string,
// visa_date_arabic:string,
// visa_number:string,
// visa_fee:number,
// visa_issued_date:string,
// visa_authorization:number,
// visa_submission:string,
// arabic_sponsor_name:string,
// sponsor_id:string,
// visa_expiry_date:string,
// division:string,
// om:number,
// rm:number,
// rc:number,
// visa_accountable:number,
// index_visa
export interface IndexVisaAdapter {
  id?: number;
  index_date: string;
  party_code: string;
  job_order_no: string;
  company: number;
  country: number;
  quantity: number;
  visa_date_arabic: string;
  visa_number: string;
  visa_fee: number;
  visa_issued_date: string;
  days: number;
  visa_authorization: number;
  visa_submission: string;
  arabic_sponsor_name: string;
  sponsor_id: string;
  visa_expiry_date: string;
  division: string;
  om: number;
  rm: number;
  rc: number;
  visa_accountable: number;
  visa_allocation_list?: string;
  visa_profession_list?: string;

  company_name?: string;
  country_name?: string;
  visa_authorization_name?: string;
}

export interface JobOrderQuantity {
  total_quantity: string;
  used_quantity: string;
  balance_quantity: string;
}
export class IndexVisaConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: IndexVisaAdapter) {
    const data: IndexVisaInterface = {
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
      jobOrderNo: a.job_order_no,
      party_code: a.party_code,
      visa_accountable: a.visa_accountable,
      visaAllocationList: JSON.parse(a.visa_allocation_list ?? "[]"),
      visaProfessionList: JSON.parse(a.visa_profession_list ?? "[]"),

      company_name: a.company_name,
      country_name: a.country_name,
      visa_authorization_name: a.visa_authorization_name,
      days: a.days
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: IndexVisaInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const visaAllocationList = JSON.stringify(
      VisaAllocationConverter.toAdapterList(i.visaAllocationList ?? [])
    );
    const data: IndexVisaAdapter = {
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
      visa_allocation_list: visaAllocationList,
      job_order_no: i.jobOrderNo,
      party_code: i.party_code,
      visa_profession_list: JSON.stringify(i.visaProfessionList),

      company_name: i.company_name,
      country_name: i.country_name,
      visa_authorization_name: i.visa_authorization_name,
      days: i.days
    };
    return data;
  }
}
export interface VisaAllocationInterface {
  id?: number;
  rc_name: number;
  allocated_quantity: number;
}
export interface VisaAllocationAdapter {
  id?: number;
  rc_id: number;
  quantity: number;
}

export class VisaAllocationConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: VisaAllocationAdapter) {
    const data: VisaAllocationInterface = {
      id: a.id,
      allocated_quantity: a.quantity,
      rc_name: a.rc_id,
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: VisaAllocationInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: VisaAllocationAdapter = {
      id: i.id,
      quantity: i.allocated_quantity,
      rc_id: i.rc_name,
    };
    return data;
  }

  public static toAdapterList(i_list: VisaAllocationInterface[]) {
    const data_list: VisaAllocationAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}

export const selectConverForBlockVisa = (
  blockVisList: BlockVisaInterface[],
  companyList: CompanyInterface[]
) => {
  // console.log("blockVisList: ")
  // console.log(blockVisList)

  // console.log("companyList: ")
  // console.log(companyList)
  const newArray: { name: string; value: number }[] = [];

  for (let i = 0; i < blockVisList.length; i++) {
    let companyName = "";

    // finding company
    for (let j = 0; j < companyList.length; j++) {
      console.log(
        "blockVisList: " +
        blockVisList[i].company +
        " = " +
        "companyList: " +
        companyList[j].id
      );
      if (blockVisList[i].company == companyList[j].id) {
        companyName = companyList[j].name;
        console.log("matched: " + companyName);
        break;
      }
    }
    const name = `${blockVisList[i].visa_number} - ${convertDateFormat(
      blockVisList[i].index_date
    )} - ${companyName}`;
    newArray.push({ name: name, value: blockVisList[i].id ?? 0 });
  }
  return newArray;
};

// ###################################
export interface CancelPartyCodeInterface {
  id?: number;
  user_id: number;
  party_code: number;
  company: number;
  created_at?: string;
  updated_at?: string;
  user_name: string;
  company_name: string;
}

export interface CancelPartyCodeAdapter {
  id?: number;
  user_id: number;
  party_code: number;
  company: number;
  created_at?: string;
  updated_at?: string;
  user_name: string;
  company_name: string;
}

export class CancelPartyCodeConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: CancelPartyCodeAdapter) {
    const data: CancelPartyCodeInterface = {
      id: a.id,
      user_id: a.user_id,
      party_code: a.party_code,
      company: a.company,
      created_at: a.created_at,
      updated_at: a.updated_at,
      user_name: a.user_name,
      company_name: a.company_name,
    };
    return data;
  }

  public static toInterfaceList(a_list: CancelPartyCodeAdapter[]) {
    const data_list: CancelPartyCodeInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: CancelPartyCodeInterface) {
    const data: CancelPartyCodeAdapter = {
      id: i.id,
      user_id: i.user_id,
      party_code: i.party_code,
      company: i.company,
      created_at: i.created_at,
      updated_at: i.updated_at,
      user_name: i.user_name,
      company_name: i.company_name,
    };
    return data;
  }

  public static toAdapterList(i_list: CancelPartyCodeInterface[]) {
    const data_list: CancelPartyCodeAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}
