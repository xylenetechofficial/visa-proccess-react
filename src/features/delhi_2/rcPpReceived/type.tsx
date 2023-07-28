
export interface PP_RC_CandidateInterface {

    id?: number,
    name: string
    passport_no: string
    company_name: string
    party_code: number
    actual_profession: string
    visa_profession: string
    visa_submitted_date: any
    visa_received_date: string
    agent_name: string
    total_service_charges: string
    amount_received: string
    amount_received_delhi: string
    given_to_delhi_office_date: string
    is_without: number
    dad_pp_received: number
    dad_pp_received_date: string
  }
  
  
  
  
  export interface PP_RC_CandidateAdapter {
    id?: number,
    name: string
    passport_no: string
    company_name: string
    party_code: number
    actual_profession: string
    visa_profession: string
    visa_submitted_date: any
    visa_received_date: string
    agent_name: string
    total_service_charges: string
    amount_received: string
    amount_received_delhi: string
    given_to_delhi_office_date: string
    dad_pp_received: number
    dad_pp_received_date: string
    is_without: number
  }
  
  
  
  export class PP_RC_CandidateConverter {
    // private i: PP_RC_CandidateInterface
    // private a: PP_RC_CandidateAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: PP_RC_CandidateAdapter) {
      const data: PP_RC_CandidateInterface = {
        id: a.id,
        name: a.name,
        passport_no: a.passport_no,
        company_name: a.company_name,
        party_code: a.party_code,
        actual_profession: a.actual_profession,
        visa_profession: a.visa_profession,
        visa_submitted_date: a.visa_submitted_date,
        visa_received_date: a.visa_received_date,
        agent_name: a.agent_name,
        total_service_charges: a.total_service_charges,
        amount_received: a.amount_received,
        amount_received_delhi: a.amount_received_delhi,
        given_to_delhi_office_date: a.given_to_delhi_office_date,
        dad_pp_received: a.dad_pp_received,
        dad_pp_received_date: a.dad_pp_received_date,
        is_without: a.is_without,
  
      };
      return data;
    }
  
  
  
    public static toInterfaceList(a_list: PP_RC_CandidateAdapter[]) {
      const data_list: PP_RC_CandidateInterface[] = [];
  
      for (let i = 0; i < a_list.length; i++) {
        const element = a_list[i];
        data_list.push(this.toAdapter(element));
      }
  
      return data_list;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: PP_RC_CandidateInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: PP_RC_CandidateAdapter = {
        id: i.id,
        name: i.name,
        passport_no: i.passport_no,
        company_name: i.company_name,
        party_code: i.party_code,
        actual_profession: i.actual_profession,
        visa_profession: i.visa_profession,
        visa_submitted_date: i.visa_submitted_date,
        visa_received_date: i.visa_received_date,
        agent_name: i.agent_name,
        total_service_charges: i.total_service_charges,
        amount_received: i.amount_received,
        amount_received_delhi: i.amount_received_delhi,
        given_to_delhi_office_date: i.given_to_delhi_office_date,
        dad_pp_received: i.dad_pp_received,
        dad_pp_received_date: i.dad_pp_received_date,
        is_without: i.is_without,
      }
  
      return data;
    }
  
  
  
    public static toAdapterList(i_list: PP_RC_CandidateInterface[]) {
      const data_list: PP_RC_CandidateAdapter[] = [];
  
      for (let i = 0; i < i_list.length; i++) {
        const element = i_list[i];
        data_list.push(this.toAdapter(element));
      }
  
      return data_list;
    }
  }