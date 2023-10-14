import { string } from "prop-types";
import { convertDateFormat } from "../../../utils/function";

export interface AgentReturnPaymentInterface {
  id?: number;
  agent_id: number;
  agent_name?: string;
  amount: number;
  description: string;
  created_at?: string;
}

export interface AgentReturnPaymentAdapter {
  id?: number;
  agent_id: number;
  agent_name?: string;
  amount: number;
  description: string;
  created_at?: string;
}

export class AgentReturnPaymentConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: AgentReturnPaymentAdapter) {
    const data: AgentReturnPaymentInterface = {
      id: a.id,
      agent_id: a.agent_id,
      agent_name: a.agent_name,
      amount: a.amount,
      description: a.description,
      created_at: a.created_at,
    };

    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: AgentReturnPaymentInterface) {
    const data: AgentReturnPaymentAdapter = {
      id: i.id,
      agent_id: i.agent_id,
      // agent_name: i.agent_name,
      amount: i.amount,
      description: i.description,
      // created_at: i.created_at,
    };
    return data;
  }

  public static toAdapterList(i_list: AgentReturnPaymentInterface[]) {
    const data_list: AgentReturnPaymentAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }

  public static toInterfaceList(a_list: AgentReturnPaymentAdapter[]) {
    const data_list: AgentReturnPaymentInterface[] = [];

    for (let i = 0; i < a_list.length; i++) {
      const element = a_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }
}

// ############################################################

export interface MofaPaymentInterface {
  id?: number;
  name: string;
  created_at: string;
  updated_at: string;
  total_mofa_payment: number;
  used_mofa_payment: number;
  balance_mofa_payment: number;
}

export interface MofaPaymentAdapter {
  id?: number;
  name: string;
  created_at: string;
  updated_at: string;
  total_mofa_payment: number;
  used_mofa_payment: number;
  balance_mofa_payment: number;
}

export class MofaPaymentConverter {
  // private i: MofaPaymentInterface
  // private i: MofaPaymentAdapter

  /**
   * toInterface
   */
  public static toInterface(i: MofaPaymentAdapter) {
    const data: MofaPaymentInterface = {
      id: i.id,
      name: i.name,
      created_at: i.created_at,
      updated_at: i.updated_at,
      total_mofa_payment: i.total_mofa_payment,
      used_mofa_payment: i.used_mofa_payment,
      balance_mofa_payment: i.balance_mofa_payment,
    };

    return data;
  }

  /**
   * to interface list
   */
  public static toInterfaceList(i_list: MofaPaymentAdapter[]) {
    const data_list: MofaPaymentInterface[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }
  /**
   * toAdapter
   */
  public static toAdapter(i: MofaPaymentInterface) {
    const data: MofaPaymentAdapter = {
      id: i.id,
      name: i.name,
      created_at: i.created_at,
      updated_at: i.updated_at,
      total_mofa_payment: i.total_mofa_payment,
      used_mofa_payment: i.used_mofa_payment,
      balance_mofa_payment: i.balance_mofa_payment,
    };
    return data;
  }

  /**
   * toAdapter list
   */
  public static toAdapterList(i_list: MofaPaymentInterface[]) {
    const data_list: MofaPaymentAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}

// #######################################

export interface BulkPaymentInterface {
  id?: number;
  agent_id: number;
  agent_name: string;
  amount: number;
  description: string;
  created_at?: string;
  available_amount: number;

  checked?: boolean;
}

export interface BulkPaymentAdapter {
  id?: number;
  agent_id: number;
  agent_name: string;
  amount: number;
  description: string;
  created_at?: string;
  available_amount: number;
}

export class BulkPaymentConverter {
  /**
   * toInterface
   */
  public static toInterface(i: BulkPaymentAdapter) {
    const data: BulkPaymentInterface = {
      id: i.id,
      agent_id: i.agent_id,
      agent_name: i.agent_name,
      amount: i.amount,
      description: i.description,
      created_at: i.created_at,
      available_amount: i.available_amount,
    };

    return data;
  }

  /**
   * to interface list
   */
  public static toInterfaceList(i_list: BulkPaymentAdapter[]) {
    const data_list: BulkPaymentInterface[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }
  /**
   * toAdapter
   */
  public static toAdapter(i: BulkPaymentInterface) {
    const data: BulkPaymentAdapter = {
      id: i.id,
      agent_id: i.agent_id,
      agent_name: i.agent_name,
      amount: i.amount,
      description: i.description,
      created_at: i.created_at,
      available_amount: i.available_amount,
    };
    return data;
  }

  /**
   * toAdapter list
   */
  public static toAdapterList(i_list: BulkPaymentInterface[]) {
    const data_list: BulkPaymentAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}
