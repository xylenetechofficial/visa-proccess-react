export interface ProjectStatusKSAInterface {
  isChecked?: boolean;
  sector_name: string;
  job_order_no: number;
  company_name: string;
  division: string;
  om_name: string;
  rc_name?: string;
  job_quantity: number;
  visa_quantity: number;
  selection: number;
  mofa_done: number;
  under_mofa: number;
  under_submission: number;
  visa_received: number;
  emigration_cleared: number;
  visa_cancelled: number;
  balance_visa: number;
  deployed: number;
  balance_to_deploy: number;
  vacancy_unfilled: number;
  no_of_days_lapse: number;
  status: string;
  ksa_status: string;
  job_order_no_url?: string;

}
export interface ProjectStatusKSAAdapter {
  sector_name: string;
  job_order_no: number;
  company_name: string;
  division: string;
  om_name: string;
  rc_name?: string;
  job_quantity: number;
  visa_quantity: number;
  selection: number;
  mofa_done: number;
  under_mofa: number;
  under_submission: number;
  visa_received: number;
  emigration_cleared: number;
  visa_cancelled: number;
  balance_visa: number;
  deployed: number;
  balance_to_deploy: number;
  vacancy_unfilled: number;
  no_of_days_lapse: number;
  status: string;
  ksa_status: string;
  job_order_no_url?: string;
}

export class ProjectStatusKSAConverter {
  // private i: ProjectStatusKSAInterface
  // private a: ProjectStatusKSAAdapter

  /**
   * toInterface
   */
  public static toInterface(a: ProjectStatusKSAAdapter) {
    const data: ProjectStatusKSAInterface = {
      sector_name: a.sector_name,
      job_order_no: a.job_order_no,
      company_name: a.company_name,
      division: a.division,
      om_name: a.om_name,
      rc_name: a.rc_name,
      job_quantity: a.job_quantity,
      visa_quantity: a.visa_quantity,
      selection: a.selection,
      mofa_done: a.mofa_done,
      under_mofa: a.under_mofa,
      under_submission: a.under_submission,
      visa_received: a.visa_received,
      emigration_cleared: a.emigration_cleared,
      visa_cancelled: a.visa_cancelled,
      balance_visa: a.balance_visa,
      deployed: a.deployed,
      balance_to_deploy: a.balance_to_deploy,
      vacancy_unfilled: a.vacancy_unfilled,
      no_of_days_lapse: a.no_of_days_lapse,
      status: a.status,
      ksa_status: a.ksa_status,
      job_order_no_url:a.job_order_no_url,
    };
    return data;
  }

    /**
   * to interface list
   */
    public static toInterfaceList(i_list: ProjectStatusKSAAdapter[]) {
      const data_list: ProjectStatusKSAInterface[] = [];
  
      for (let i = 0; i < i_list.length; i++) {
        const element = i_list[i];
        data_list.push(this.toInterface(element));
      }
  
      return data_list;
    }

  /**
   * toAdapter
   */
  public static toAdapter(i: ProjectStatusKSAInterface) {
    const data: ProjectStatusKSAAdapter = {
      sector_name: i.sector_name,
      job_order_no: i.job_order_no,
      company_name: i.company_name,
      division: i.division,
      om_name: i.om_name,
      rc_name: i.rc_name,
      job_quantity: i.job_quantity,
      visa_quantity: i.visa_quantity,
      selection: i.selection,
      mofa_done: i.mofa_done,
      under_mofa: i.under_mofa,
      under_submission: i.under_submission,
      visa_received: i.visa_received,
      emigration_cleared: i.emigration_cleared,
      visa_cancelled: i.visa_cancelled,
      balance_visa: i.balance_visa,
      deployed: i.deployed,
      balance_to_deploy: i.balance_to_deploy,
      vacancy_unfilled: i.vacancy_unfilled,
      no_of_days_lapse: i.no_of_days_lapse,
      status: i.status,
      ksa_status: i.ksa_status,
      job_order_no_url:i.job_order_no_url,
    };
    return data;
  }

    /**
   * toAdapter list
   */
    public static toAdapterList(i_list: ProjectStatusKSAInterface[]) {
      const data_list: ProjectStatusKSAAdapter[] = [];
  
      for (let i = 0; i < i_list.length; i++) {
        const element = i_list[i];
        data_list.push(this.toAdapter(element));
      }
  
      return data_list;
    }
}
