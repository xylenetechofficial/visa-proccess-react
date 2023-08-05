
export interface DirectPaymentInterface {
  outstanding_since_2015: number,
  payment_against_2015: number,
  balance_since_2015: number,
  total_payment_received: number,
  total_balance_outstanding: number,
  payment_returned_to_agent: number,
  cancelled_candidates: number,
  rejected_candidates: number,
  flight_candidates: number,
  amount_available_for_adjustment: number,
  table_data_list: VisaProfesionInterface[],

  bulk_payment_list: VisaProfesionInterface[]

}
// 'block_visa' => 'required|array',
// 'visa_profession_list' => 'required|array'

// export interface ServerAdapter {
//   block_visa: AgentPaymentAdapter,
//   visa_profession_list: VisaProfesionAdapter[]
// }

// block_visa
export interface DirectPaymentAdapter {


  outstanding_since_2015: number,
  payment_against_2015: number,
  balance_since_2015: number,
  total_payment_received: number,
  total_balance_outstanding: number,
  payment_returned_to_agent: number,
  cancelled_candidates: number,
  rejected_candidates: number,
  flight_candidates: number,
  amount_available_for_adjustment: number,
  table_data_list: VisaProfesionInterface[],

  bulk_payment_list: VisaProfesionInterface[]

}

export interface VisaProfesionInterface {

  id: number,
  party_code: number,
  company_name: string,
  name: string,
  passport_no: string,
  actual_profession: string,
  visa_profession: string,
  agent_name: string,
  visa_received_date: string,
  visa_authorization: string,
  photo_charges: number,
  training_charges: number,
  other_charges: number,
  document_charges: number,
  service_charges: number,
  partial_charges: number,
  sector_charges: number,
  consulate_setting_charges: number,
  ticket_charges: number,
  attestation_charges: number,
  consolidated_charges: number,
  penalty_after_deployment: number,
  extra_service_tax: number,
  agent_commission: number,
  discount_amount: number,
  received: number,
  balance_amount: number,
  amount: number,
  advance: null,
  payment_date: null


}

export interface VisaProfesionAdapter {
  id?: number;
  block_visa_id: number;
  visa_profession: string;
  arabic_visa_category: string;
  quantity: number;
}
export interface AddDirectPaymentAdvancePaymentInterface {
  name:string,
      amount:number,
      passport_no:string,
      received_date:string,
      remarks:string,

}

export interface AddDirectPaymentAdvancePaymentAdapter {
  name:string,
  amount:number,
  passport_no:string,
  received_date:string,
  remarks:string,
}

export class AddDirectPaymentAdvancePaymentConverter {
  public static toInterface(a: AddDirectPaymentAdvancePaymentAdapter): AddDirectPaymentAdvancePaymentInterface {
    console.log(a,"kkkkkk")
    const data: AddDirectPaymentAdvancePaymentInterface = {
      name:a.name,
      amount:a.amount,
      passport_no:a.passport_no,
      received_date:a.received_date,
      remarks:a.remarks,

    };
    return data;
  }

  public static toAdapter(i: AddDirectPaymentAdvancePaymentInterface): AddDirectPaymentAdvancePaymentAdapter {
    console.log(i,"iiiii")
    const data: AddDirectPaymentAdvancePaymentAdapter = {
      name:i.name,
      amount:i.amount,
      passport_no:i.passport_no,
      received_date:i.received_date,
      remarks:i.remarks,
    };
    return data;
  }
}

export interface AddSelectionAgentPaymentInterface {
  id: number;
  amount: number;
  bulk_payment_id: number;
  advance: number;
  payment_date: string;
}

export interface AddSelectionAgentPaymentAdapter {
  id: number;
  amount: number;
  bulk_payment_id: number;
  advance: number;
  payment_date: string;
}



export interface AgentPaymentAddInterface {

  agent_id: number,
  amount: number,
  description: string,
}
export interface AgentPaymentAddAdapter {

  agent_id: number,
  amount: number,
  description: string,
}

export class AgentPaymentAddConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: AgentPaymentAddAdapter) {
    const data: AgentPaymentAddInterface = {

      agent_id: a.agent_id,
      amount: a.amount,
      description: a.description

    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: AgentPaymentAddInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: AgentPaymentAddAdapter = {
      agent_id: i.agent_id,
      amount: i.amount,
      description: i.description
    };
    return data;
  }
}

export class DirectPaymentConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: DirectPaymentAdapter) {
    const data: DirectPaymentInterface = {

      outstanding_since_2015: a.outstanding_since_2015,
      payment_against_2015: a.payment_against_2015,
      balance_since_2015: a.balance_since_2015,
      total_payment_received: a.total_payment_received,
      total_balance_outstanding: a.total_balance_outstanding,
      payment_returned_to_agent: a.payment_returned_to_agent,
      cancelled_candidates: a.cancelled_candidates,
      rejected_candidates: a.rejected_candidates,
      flight_candidates: a.flight_candidates,
      amount_available_for_adjustment: a.amount_available_for_adjustment,
      table_data_list: a.table_data_list.map(item => ({ ...item })),

      bulk_payment_list: a.bulk_payment_list.map(item => ({ ...item }))
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: DirectPaymentInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: DirectPaymentAdapter = {
      outstanding_since_2015: i.outstanding_since_2015,
      payment_against_2015: i.payment_against_2015,
      balance_since_2015: i.balance_since_2015,
      total_payment_received: i.total_payment_received,
      total_balance_outstanding: i.total_balance_outstanding,
      payment_returned_to_agent: i.payment_returned_to_agent,
      cancelled_candidates: i.cancelled_candidates,
      rejected_candidates: i.rejected_candidates,
      flight_candidates: i.flight_candidates,
      amount_available_for_adjustment: i.amount_available_for_adjustment,
      table_data_list: i.table_data_list.map(item => ({ ...item })),

      bulk_payment_list: i.bulk_payment_list.map(item => ({ ...item }))
    };
    return data;
  }
}

// Candidate Advance Payment Interface and Adapter , converter start
export interface CandidateAdvancePaymentInterface {
  name:string,
  passport_no:string,
  amount:number,
  received_date:string,
  remarks:string
}
export interface CandidateAdvancePaymentAdapter {
  name:string,
  passport_no:string,
  amount:number,
  received_date:string,
  remarks:string
}

export class CandidateAdvancePaymentConverter {
 // private i: CandidateAdvancePaymentInterface
  // private a: CandidateAdvancePaymentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: CandidateAdvancePaymentAdapter) {
    const data: CandidateAdvancePaymentInterface = {

      name: a.name,
      passport_no: a.passport_no,
      amount: a.amount,
      received_date:a.received_date,
      remarks:a.remarks

    };
    return data;
  }
  /**
   * toAdapter
   */
  public static toAdapter(i: CandidateAdvancePaymentInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: CandidateAdvancePaymentAdapter = {
      name: i.name,
      passport_no: i.passport_no,
      amount: i.amount,
      received_date:i.received_date,
      remarks:i.remarks
    };
    return data;
  }
}
// Candidate Advance Payment Interface ,  Adapter and Converter start

export interface AdvancePaymentInterface {
  id: number,
  name: string,
  amount: number,
  passport_no: string,
  received_date: string,
  remarks: string,
  used: string,
  created_at: string,
  updated_at: string
}
export interface AdvancePaymentAdapter {
  id: number,
  name: string,
  amount: number,
  passport_no: string,
  received_date: string,
  remarks: string,
  used: string,
  created_at: string,
  updated_at: string
}

export class AdvancePaymentConverter{
   // private i: AdvancePaymentInterface
  // private a: AdvancePaymentAdapter

  /**
   * toInterface
   */

  public static toInterface(a: AdvancePaymentAdapter) {
    const data: AdvancePaymentInterface = {

      id:a.id,
      name:a.name,
      amount:a.amount,
      passport_no:a.passport_no,
      received_date:a.received_date,
      remarks:a.remarks,
      used:a.used,
      created_at:a.created_at,
      updated_at:a.updated_at
    };
    return data;
  }
  /**
   * toAdapter
   */
  public static toAdapter(i: AdvancePaymentInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: AdvancePaymentAdapter = {
      id:i.id,
      name:i.name,
      amount:i.amount,
      passport_no:i.passport_no,
      received_date:i.received_date,
      remarks:i.remarks,
      used:i.used,
      created_at:i.created_at,
      updated_at:i.updated_at,
    };
    return data;
  }
}

export interface CandidatePaymentInterface {
  
  candidate_id:number,
  agent_id:number,
  amount:number,
  remarks:string,

}

export interface CandidatePaymentadapter {
  
  candidate_id:number,
  agent_id:number,
  amount:number,
  remarks:string,

}

export class CandidatePaymentConverter{
     // private i: CandidatePaymentInterface
  // private a: CandidatePaymentadapter

  /**
   * toInterface
   */
  public static toInterface(a: CandidatePaymentadapter) {
    const data: CandidatePaymentInterface = {
      candidate_id:a.candidate_id,
      agent_id:a.agent_id,
      amount:a.amount,
      remarks:a.remarks,
    };
    return data;
  }
  /**
   * toAdapter
   */
  public static toAdapter(i: CandidatePaymentInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: CandidatePaymentadapter = {
      candidate_id:i.candidate_id,
      agent_id:i.agent_id,
      amount:i.amount,
      remarks:i.remarks,
    };
    return data;
  }
}


export interface AgentPaymentReceivedPaymentListInterface
{
  name:string,
  passport_no:string,
  amount:number,
  created_at:string,
  payment_entry_by:string,
}

export interface AgentPaymentReceivedPaymentListAdapter
{
  name:string,
  passport_no:string,
  amount:number,
  created_at:string,
  payment_entry_by:string,
}

export class AgentPaymentReceivedPaymentListConverter{
  // private i: AgentPaymentReceivedPaymentListInterface
// private a: AgentPaymentReceivedPaymentListAdapter

/**
* toInterface
*/
public static toInterface(a: AgentPaymentReceivedPaymentListAdapter) {
 const data: AgentPaymentReceivedPaymentListInterface = {

  name:a.name,
  passport_no:a.passport_no,
  amount:a.amount,
  created_at:a.created_at,
  payment_entry_by:a.payment_entry_by,
 };
 return data;
}
/**
* toAdapter
*/
public static toAdapter(i: AgentPaymentReceivedPaymentListInterface) {
 console.log("i"); // Only Dev
 console.log(i); // Only Dev
 const data: AgentPaymentReceivedPaymentListAdapter = {
  name:i.name,
  passport_no:i.passport_no,
  amount:i.amount,
  created_at:i.created_at,
  payment_entry_by:i.payment_entry_by,
 };
 return data;
}
}


export interface AgentPaymentByIDInterface {
  agent_id?:number,
  passport_no?:string,

}
export interface AgentPaymentByIDAdapter {
  agent_id?:number,
  passport_no?:string,

}

export class AgentPaymentByIDConverter{
    // private i: AgentPaymentByIDInterface
  // private a: AgentPaymentByIDAdapter

  /**
   * toInterface
   */

  public static toInterface(a: AgentPaymentByIDAdapter) {
    const data: AgentPaymentByIDInterface = {
      agent_id:a.agent_id,
      passport_no:a.passport_no,
    
    };
    return data;
  }
    /**
   * toAdapter
   */
    public static toAdapter(i: AgentPaymentByIDInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: AgentPaymentByIDAdapter = {
        agent_id:i.agent_id,
        passport_no:i.passport_no,
      };
      return `agent_id=${i.agent_id}&passport_no=${i.passport_no}`;
    }
}