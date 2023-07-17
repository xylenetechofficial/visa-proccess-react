
export interface CandidateDiscountApproveRejectInterface {

  candidate_id:number,
  agent_id:number,
  amount:number,
  remarks:string

}
// 'block_visa' => 'required|array',
// 'visa_profession_list' => 'required|array'

export interface ServerAdapter{
  block_visa: CandidateDiscountApproveRejectAdapter,
  visa_profession_list: VisaProfesionAdapter[]
}

// block_visa
export interface CandidateDiscountApproveRejectAdapter {
  candidate_id:number,
  agent_id:number,
  amount:number,
  remarks:string



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

export class CandidateDiscountApproveRejectConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: CandidateDiscountApproveRejectAdapter) {
    const data: CandidateDiscountApproveRejectInterface = {
   

      candidate_id:a.candidate_id,
      agent_id:a.agent_id,
      amount:a.amount,
      remarks:a.remarks

    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: CandidateDiscountApproveRejectInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: CandidateDiscountApproveRejectAdapter = {
      candidate_id: i.candidate_id,
      agent_id: i.agent_id,
      amount: i.amount,
      remarks: i.remarks
    };
    return data;
  }
}

