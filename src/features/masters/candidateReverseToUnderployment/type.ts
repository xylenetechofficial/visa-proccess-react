export interface CandidateReverseToDeployeMentInterface{
        id: number,
        party_code : string,
        company_name: string,
        candidate_name: string,
        passport_no: string,
        actual_profession: string,
        visa_profession: string,
        agent_name: string,
        is_invoice: string,
        status: string,
        document_charges: number,
        other_charges : string,
        service_charges: number,
        air_line: string,
        pnr_no: string,
        departure_date: string 
}
export interface CandidateReverseToDeployeMentAdapter{
    id: number,
    party_code : string,
    company_name: string,
    candidate_name: string,
    passport_no: string,
    actual_profession: string,
    visa_profession: string,
    agent_name: string,
    is_invoice: string,
    status: string,
    document_charges: number,
    other_charges: string,
    service_charges: number,
    air_line: string,
    pnr_no: string,
    departure_date: string
}
export class CandidateReverseToDeployementConverter {
    // private i: CandidateReverseToDeployeMentInterface
    // private a: CandidateReverseToDeployeMentAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: CandidateReverseToDeployeMentAdapter) {
      const data: CandidateReverseToDeployeMentInterface = {
        id: a.id,
        party_code: a.party_code,
        company_name: a.company_name,
        candidate_name: a.candidate_name,
        passport_no: a.passport_no,
        actual_profession: a.actual_profession,
        visa_profession: a.visa_profession,
        agent_name: a.agent_name,
        is_invoice: a.is_invoice,
        status: a.status,
        document_charges: a.document_charges,
        other_charges: a.other_charges,
        service_charges: a.service_charges,
        air_line: a.air_line,
        pnr_no: a.pnr_no,
        departure_date: a.departure_date,
      };
      return data;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: CandidateReverseToDeployeMentInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: CandidateReverseToDeployeMentAdapter = {
        id: i.id,
        party_code: i.party_code,
        company_name: i.company_name,
        candidate_name: i.candidate_name,
        passport_no: i.passport_no,
        actual_profession: i.actual_profession,
        visa_profession: i.visa_profession,
        agent_name: i.agent_name,
        is_invoice: i.is_invoice,
        status: i.status,
        document_charges: i.document_charges,
        other_charges: i.other_charges,
        service_charges: i.service_charges,
        air_line: i.air_line,
        pnr_no: i.pnr_no,
        departure_date: i.departure_date,
      };
      return data;
    }
  }