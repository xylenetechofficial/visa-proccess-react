// import { arrayToSum } from "../../../utils/function";

// Actual Profession Interface
export interface ActualProfessionInterface {
  id?: number;
  jobOrder_id: number;
  actual_profession?: string;
  grade?: number;
  sector?: number;
  sector_charge?: number;
  quantity?: number;
  seletion_target_quantity?: number;
  min_salary?: number;
  max_salary?: number;
  job_description?: string;
  master_service_charges?: number;
  differed_service_charges?: number;
  service_charges?: number;
  partial_charges?: number;
  consodilate_charges?: string;
  consodilate_charges_name?: string[];
  consodilate_charges_value?: string[];
  consolidate_charges_id?: string[];
  agent_commission?: number;
  air_ticket?: string;
  is_invoice?: number;
  invoice_service_charges?: number;
  invoice_ticket_charges?: number;
  invoice_service_charges_currency?: number;

  is_master_sector?: number;
}
export interface ActualProfessionAdapter {
  id?: number;
  job_order_id: number;
  actual_profession?: string;
  quantity?: number;
  differed_service_charges?: number;
  master_service_charges?: number;
  job_description?: string;
  max_salary?: number;
  min_salary?: number;
  seletion_target_quantity?: number;
  sector?: number;
  sector_charge?: number;
  grade?: number;
  service_charges?: number;
  partial_charges?: number;
  consodilate_charges?: string;
  consodilate_charges_name?: string;
  consolidate_charges_id?: string;
  consolidate_charges_value?: string;
  agent_commission?: number;
  air_ticket?: string;
  is_invoice?: number;
  invoice_service_charges?: number;
  invoice_ticket_charges?: number;
  invoice_service_charges_currency?: number;
}
export class ActualProfessionConverter {
  // private i: ActualProfessionInterface
  // private a: ActualProfessionAdapter

  /**
   * toInterface
   */
  public static toInterface(a: ActualProfessionAdapter) {
    const data: ActualProfessionInterface = {
      id: a.id,
      jobOrder_id: a.job_order_id,
      actual_profession: a.actual_profession,
      quantity: a.quantity,
      differed_service_charges: a.differed_service_charges,
      master_service_charges: a.master_service_charges,
      job_description: a.job_description,
      min_salary: a.max_salary,
      max_salary: a.min_salary,
      seletion_target_quantity: a.seletion_target_quantity,
      sector: a.sector,
      sector_charge:a.sector_charge,
      grade: a.grade,
      service_charges: a.service_charges,
      partial_charges: a.partial_charges,
      consodilate_charges: a.consodilate_charges,
      consodilate_charges_name: a.consodilate_charges_name?.split(","),
      consolidate_charges_id: a.consolidate_charges_id?.split(","),
      agent_commission: a.agent_commission,
      air_ticket: a.air_ticket,
      is_invoice: a.is_invoice,
      invoice_service_charges: a.invoice_service_charges,
      invoice_ticket_charges: a.invoice_ticket_charges,
      invoice_service_charges_currency: a.invoice_service_charges_currency,
    };
    return data;
  }

  /**
   * to interface list
   */
  public static toInterfaceList(i_list: ActualProfessionAdapter[]) {
    const data_list: ActualProfessionInterface[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: ActualProfessionInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: ActualProfessionAdapter = {
      id: i.id,
      job_order_id: i.jobOrder_id,
      actual_profession: i.actual_profession,
      quantity: i.quantity,
      differed_service_charges: i.differed_service_charges,
      master_service_charges: i.master_service_charges,
      job_description: i.job_description,
      min_salary: i.max_salary,
      max_salary: i.min_salary,
      seletion_target_quantity: i.seletion_target_quantity,
      sector: i.sector,
      sector_charge:i.sector_charge,
      grade: i.grade,
      service_charges: i.service_charges,
      partial_charges: i.partial_charges,
      consodilate_charges: i.consodilate_charges,
      consodilate_charges_name: i.consodilate_charges_name?.join(","),
      consolidate_charges_id: i.consolidate_charges_id?.join(","),

      agent_commission: i.agent_commission,
      air_ticket: i.air_ticket,
      is_invoice: i.is_invoice,
      invoice_service_charges: i.invoice_service_charges,
      invoice_ticket_charges: i.invoice_ticket_charges,
      invoice_service_charges_currency: i.invoice_service_charges_currency,
    };
    console.log('ActualProfessionAdapter');   // Only Dev
    console.log(data);   // Only Dev
    return data;
  }

  /**
   * toAdapter list
   */
  public static toAdapterList(i_list: ActualProfessionInterface[]) {
    const data_list: ActualProfessionAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}

//   Special Instruction
export interface SpecialInstructionInterface {
  id?: number;
  jobOrder_id: number;
  agentId: number;
  agent_commission: number;
}
export interface SpecialInstructionAdapter {
  id?: number;
  job_order_id: number;
  agent_id: number;
  agent_commission: number;
}

export class SpecialInstructionConverter {
  // private i: SpecialInstructionInterface
  // private a: SpecialInstructionAdapter

  /**
   * toInterface
   */
  public static toInterface(a: SpecialInstructionAdapter) {
    const data: SpecialInstructionInterface = {
      id: a.id,
      jobOrder_id: a.job_order_id,
      agentId: a.agent_id,
      agent_commission: a.agent_commission,
    };
    return data;
  }

  /**
   * to interface list
   */
  public static toInterfaceList(i_list: SpecialInstructionAdapter[]) {
    const data_list: SpecialInstructionInterface[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: SpecialInstructionInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: SpecialInstructionAdapter = {
      id: i.id,
      job_order_id: i.jobOrder_id,
      agent_id: i.agentId,
      agent_commission: i.agent_commission,
    };
    return data;
  }

  /**
   * toAdapter list
   */
  public static toAdapterList(i_list: SpecialInstructionInterface[]) {
    const data_list: SpecialInstructionAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}

// EDOC
export interface EdocInterface {
  id?: number;
  jobOrder_id: number;
  actualProfession: string;
  EDOC: number;
  commission: number;
  visaCost: number;
}

export interface EdocAdapter {
  id?: number;
  job_order_id: number;
  actual_profession: string;
  EDOC: number;
  commission: number;
  visa_cost: number;
}

export class EdocConverter {
  // private i: EdocInterface
  // private a: EdocAdapter

  /**
   * toInterface
   */
  public static toInterface(a: EdocAdapter) {
    const data: EdocInterface = {
      id: a.id,
      jobOrder_id: a.job_order_id,
      actualProfession: a.actual_profession,
      EDOC: a.EDOC,
      commission: a.commission,
      visaCost: a.visa_cost,
    };
    return data;
  }

  /**
   * to interface list
   */
  public static toInterfaceList(i_list: EdocAdapter[]) {
    const data_list: EdocInterface[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: EdocInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: EdocAdapter = {
      id: i.id,
      job_order_id: i.jobOrder_id,
      actual_profession: i.actualProfession,
      EDOC: i.EDOC,
      commission: i.commission,
      visa_cost: i.visaCost,
    };
    return data;
  }

  /**
   * toAdapter list
   */
  public static toAdapterList(i_list: EdocInterface[]) {
    const data_list: EdocAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}
