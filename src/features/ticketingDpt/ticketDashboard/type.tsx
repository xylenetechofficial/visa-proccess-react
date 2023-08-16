export interface TicketDashboardInterface {

    id?: number,
    setting_visa:string,
    job_order_no:string,
    company_name: string,
    candidate_name: string,
    pp_no: string,
    actual_profession: string,
    mofa_no: string,
    agent: string,
    rc_name: string,
    visa_received_date: string,
    visa_expiry_date: string,
    
    
    
    
    
    sector_from: string,
    sector_to: string,
    require_date: string,
    
    priority: string,
    air_ticket: string,
    visa_authorization:string,
    division: string,
    under_process?:string,
    trying?:string
  }
  
  
  // block_visa
  export interface TicketDashboardAdapter {
    id?: number,
    setting_visa:string,
    job_order_no:string,
    company_name: string,
    candidate_name: string,
    pp_no: string,
    actual_profession: string,
    mofa_no: string,
    agent: string,
    rc_name: string,
    visa_received_date: string,
    visa_expiry_date: string,
    
    
    
    
    
    sector_from: string,
    sector_to: string,
    require_date: string,
    
    priority: string,
    air_ticket: string,
    visa_authorization:string,
    division: string,
    under_process?:string,
    trying?:string}
  
  export class TicketDashboardConverter {
    // private i: TicketDashboardInterface
    // private a: TicketDashboardAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: TicketDashboardAdapter) {
      const data: TicketDashboardInterface = {
  
  
        id: a.id,
        setting_visa:a.setting_visa,
        job_order_no:a.job_order_no,
        company_name: a.company_name,
        candidate_name: a.candidate_name,
        pp_no: a.pp_no,
        actual_profession: a.actual_profession,
        mofa_no: a.mofa_no,
        agent: a.agent,
        rc_name: a.rc_name,
        visa_received_date: a.visa_received_date,
        visa_expiry_date: a.visa_expiry_date,
      
        sector_from: a.sector_from,
        sector_to: a.sector_to,
        require_date: a.require_date,
        priority: a.priority,
        air_ticket: a.air_ticket,
        division: a.division,
        visa_authorization:a.visa_authorization,
        
        under_process:a.under_process,
        trying:a.trying,
        
      };
      return data;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: TicketDashboardInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: TicketDashboardAdapter = {
        id: i.id,
        setting_visa:i.setting_visa,
        job_order_no:i.job_order_no,
        company_name: i.company_name,
        candidate_name: i.candidate_name,
        pp_no: i.pp_no,
        actual_profession: i.actual_profession,
        mofa_no: i.mofa_no,
        agent: i.agent,
        rc_name: i.rc_name,
        visa_received_date: i.visa_received_date,
        visa_expiry_date: i.visa_expiry_date,
      
        sector_from: i.sector_from,
        sector_to: i.sector_to,
        require_date: i.require_date,
        priority: i.priority,
        air_ticket: i.air_ticket,
        division: i.division,
        visa_authorization:i.visa_authorization,
        
        under_process:i.under_process,
        trying:i.trying,
        };
      return data;
    }
    public static toAdapterList (i:AddTicketDashboardInterface): AddTicketDashboardAdapter {
      console.log(i,"kkkkkk")
      const data: AddTicketDashboardAdapter = {
        selection_list: i?.selection_list?.filter(item =>
           item.id !==undefined &&
          item.under_process !=='' &&
          item.trying !=='' 
         
          ).map((item) => ({
          id: item.id,
        setting_visa:item.setting_visa,
        job_order_no:item.job_order_no,
        company_name: item.company_name,
        candidate_name: item.candidate_name,
        pp_no: item.pp_no,
        actual_profession: item.actual_profession,
        mofa_no: item.mofa_no,
        agent: item.agent,
        rc_name: item.rc_name,
        visa_received_date: item.visa_received_date,
        visa_expiry_date: item.visa_expiry_date,
      
        sector_from: item.sector_from,
        sector_to: item.sector_to,
        require_date: item.require_date,
        priority: item.priority,
        air_ticket: item.air_ticket,
        division: item.division,
        visa_authorization:item.visa_authorization,
        
        under_process:item.under_process,
        trying:item.trying,
       
        })),
      };
      return data;
    }
  }
  
  export interface AddTicketDashboardInterface {
    selection_list: TicketDashboardInterface[];
  }
  
  export interface AddTicketDashboardAdapter {
    selection_list: TicketDashboardAdapter[];
  }
  