

export interface TicketReissueInterface {
    id: number
    company_name: string
    candidate_name: string
    passport_no: string
    agent_name: string
    rc_name: string
    payment: string
    given_to: string
    departure_date: string
    ticket_charges: number
    ticketing_previous_reissue_charge: number
    ticketing_reissue_charge: number
    ticketing_mistake_by: string

}


export interface TicketReissueAdapter {

    id: number
    company_name: string
    candidate_name: string
    passport_no: string
    agent_name: string
    rc_name: string
    payment: string
    given_to: string
    departure_date: string
    ticket_charges: number
    ticketing_previous_reissue_charge: number
    ticketing_reissue_charge: number
    ticketing_mistake_by: string
}


export class TicketReissueConverter {
    // private i: TicketReissueInterface
    // private a: TicketReissueAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: TicketReissueAdapter) {
      const data: TicketReissueInterface = {
        id: a.id,
        company_name: a.company_name,
        candidate_name: a.candidate_name,
        passport_no: a.passport_no,
        agent_name: a.agent_name,
        rc_name: a.rc_name,
        payment: a.payment,
        given_to: a.given_to,
        departure_date: a.departure_date,
        ticket_charges: a.ticket_charges,
        ticketing_previous_reissue_charge: a.ticketing_previous_reissue_charge,
        ticketing_reissue_charge: a.ticketing_reissue_charge,
        ticketing_mistake_by: a.ticketing_mistake_by,

      };
      return data;
    }
  
  
  
    public static toInterfaceList(a_list: TicketReissueAdapter[]) {
      const data_list: TicketReissueInterface[] = [];
  
      for (let i = 0; i < a_list.length; i++) {
        const element = a_list[i];
        data_list.push(this.toInterface(element));
      }
  
      return data_list;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: TicketReissueInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: TicketReissueAdapter = {
        id: i.id,
        company_name: i.company_name,
        candidate_name: i.candidate_name,
        passport_no: i.passport_no,
        agent_name: i.agent_name,
        rc_name: i.rc_name,
        payment: i.payment,
        given_to: i.given_to,
        departure_date: i.departure_date,
        ticket_charges: i.ticket_charges,
        ticketing_previous_reissue_charge: i.ticketing_previous_reissue_charge,
        ticketing_reissue_charge: i.ticketing_reissue_charge,
        ticketing_mistake_by: i.ticketing_mistake_by,
       
      };
      return data;
    }
  
  
  
    public static toAdapterList(i_list: TicketReissueInterface[]) {
      const data_list: TicketReissueAdapter[] = [];
  
      for (let i = 0; i < i_list.length; i++) {
        const element = i_list[i];
        data_list.push(this.toAdapter(element));
      }
  
      return data_list;
    }
  }