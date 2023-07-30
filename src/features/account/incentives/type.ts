
export interface IncentiveInterface {
  
  id: number,
  job_order_no: string,
  job_order_date: string,
  company: string,
  country: number,
  division: string,
  ops_manager: string,
  rc_name: string,
  manager_incentive: number,
  staff_incentive: number,
}

export interface IncentiveAdapter {
  
  id: number,
  job_order_no: string,
  job_order_date: string,
  company: string,
  country: number,
  division: string,
  ops_manager: string,
  rc_name: string,
  manager_incentive: number,
  staff_incentive: number,
}

export interface AddIncentiveInterface {
  
  id: number,
  manager_incentive: number,
  staff_incentive: number,

}

export interface AddIncentiveAdapter {

  id: number,
  manager_incentive: number,
  staff_incentive: number,
}
export interface AddJobOrderInterFace{
  job_order_list:AddIncentiveInterface[]
}
export interface AddJobOrderAdapter{
  job_order_list:AddIncentiveAdapter[]
}

export class AddIncentiveConverter {
  public static toInterface(a: AddJobOrderAdapter): AddJobOrderInterFace {
    console.log(a,"kkkkkk")
    const data: AddJobOrderInterFace = {
      job_order_list: a?.job_order_list?.map((item) => ({
        id:item?.id,
        manager_incentive:item?.manager_incentive,
        staff_incentive:item?.staff_incentive,
    })),
  }
    return data;
  }


  public static toAdapter(i: AddJobOrderInterFace): AddJobOrderAdapter {
    console.log(i,"iiiii")
    const data: AddJobOrderAdapter = {
      
      job_order_list: i?.job_order_list?.map((item) => ({
        id:item?.id,
        manager_incentive:item?.manager_incentive,
        staff_incentive:item?.staff_incentive,
    })),
    
  }
  return data;
  }
}


export class IncentiveConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: IncentiveAdapter) {
    const data: IncentiveInterface = {
      
      id: a.id,
      job_order_no: a.job_order_no,
      job_order_date: a.job_order_date,
      company: a.company,
      country: a.country,
      division: a.division,
      ops_manager: a.ops_manager,
      rc_name: a.rc_name,
      manager_incentive: a.manager_incentive,
      staff_incentive: a.staff_incentive,
      

    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: IncentiveInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: IncentiveAdapter = {
      id: i.id,
      job_order_no: i.job_order_no,
      job_order_date: i.job_order_date,
      company: i.company,
      country: i.country,
      division: i.division,
      ops_manager: i.ops_manager,
      rc_name: i.rc_name,
      manager_incentive: i.manager_incentive,
      staff_incentive: i.staff_incentive,



    };
    return data;
  }
}
