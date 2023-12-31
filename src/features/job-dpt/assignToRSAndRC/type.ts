export interface JobOrderInterface {
  id?: number;
  type: string;
  date: string;
  CountryId: number;
  MOL: number;
  workPermit: number;
  sectorId: number;
  bde_id: number;
  bde_name?: string;
  companyId: number;
  client_country_name?: string;
  company_name?: string;
  division: string;
  departureSectorId: number;
  jobOrderNumber?: string;
  operationManagerId: number;
  recruitmentManagerId: number;
  rsId: number;
  rcId: number;
  operation_manager_name?: string;
  recruitment_manager_name?: string;
  rs_name?: string;
  rc_name?: string;
  file1?: File;
  file2?: File;
  file3?: File;
  file4?: File;
  file5?: File;

  file1_url?: string;
  file2_url?: string;
  file3_url?: string;
  file4_url?: string;
  file5_url?: string;
}

export interface JobOrderAdapter {
  id?: number;
  date: string;
  type: string;
  client_country: number;
  mol: number;
  work_permit: number;
  sector: number;
  bde_id: number;
  bde_name?: string;
  company: number;
  client_country_name?: string;
  company_name?: string;
  division: string;
  departure_sector: number;
  job_order_no?: string;
  operation_manager: number;
  recruitment_manager: number;
  rs: number;
  rc: number;
  operation_manager_name?: string;
  recruitment_manager_name?: string;
  rs_name?: string;
  rc_name?: string;
  file1?: File;
  file2?: File;
  file3?: File;
  file4?: File;
  file5?: File;

  file1_url?: string;
  file2_url?: string;
  file3_url?: string;
  file4_url?: string;
  file5_url?: string;
}
export class JobOrderConverter {
  // private i: AgentInterface
  // private a: AgentAdapter

  /**
   * toInterface
   */
  public static toInterface(a: JobOrderAdapter) {
    const data: JobOrderInterface = {
      id: a.id,
      type: a.type,
      date: a.date,
      CountryId: a.client_country,
      MOL: a.mol,
      workPermit: a.work_permit,
      sectorId: a.sector,
      bde_id: a.bde_id,
      bde_name: a.bde_name,
      companyId: a.company,
      client_country_name: a.client_country_name,
      company_name: a.company_name,
      division: a.division,
      departureSectorId: a.departure_sector,
      jobOrderNumber: a.job_order_no,
      operationManagerId: a.operation_manager,
      recruitmentManagerId: a.recruitment_manager,
      rcId: a.rc,
      rsId: a.rs,
      operation_manager_name: a.operation_manager_name,
      recruitment_manager_name: a.recruitment_manager_name,
      rs_name: a.rs_name,
      rc_name: a.rc_name,
      file1: a.file1,
      file2: a.file2,
      file3: a.file3,
      file4: a.file4,
      file5: a.file5,

      file1_url: a.file1_url,
      file2_url: a.file2_url,
      file3_url: a.file3_url,
      file4_url: a.file4_url,
      file5_url: a.file5_url,
    };
    return data;
  }

  /**
   * to interface list
   */
  public static toInterfaceList(i_list: JobOrderAdapter[]) {
    const data_list: JobOrderInterface[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toInterface(element));
    }

    return data_list;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: JobOrderInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: JobOrderAdapter = {
      id: i.id,
      date: i.date,
      type: i.type,
      client_country: i.companyId,
      mol: i.MOL,
      work_permit: i.workPermit,
      sector: i.sectorId,
      bde_id: i.bde_id,
      bde_name: i.bde_name,
      company: i.companyId,
      client_country_name: i.client_country_name,
      company_name: i.company_name,
      division: i.division,
      departure_sector: i.departureSectorId,
      operation_manager: i.operationManagerId,
      recruitment_manager: i.recruitmentManagerId,
      rc: i.rcId,
      rs: i.rsId,
      operation_manager_name: i.operation_manager_name,
      recruitment_manager_name: i.recruitment_manager_name,
      rs_name: i.rs_name,
      rc_name: i.rc_name,
      file1: i.file1,
      file2: i.file2,
      file3: i.file3,
      file4: i.file4,
      file5: i.file5,
    };
    return data;
  }

  /**
   * to adapter list
   */
  public static toAdapterList(i_list: JobOrderInterface[]) {
    const data_list: JobOrderAdapter[] = [];

    for (let i = 0; i < i_list.length; i++) {
      const element = i_list[i];
      data_list.push(this.toAdapter(element));
    }

    return data_list;
  }
}
