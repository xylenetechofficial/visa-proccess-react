export interface TicketReIssueApprovedInterface {
    "id": number,
    "company_name": string,
    "candidate_name": string,
    "passport_no": string,
    "agent_name": string,
    "rc_name": string,
    "payment": string,
    "given_to": string,
    "departure_date": string,
    "ticket_charges": number,
    "ticketing_previous_reissue_charge": number,
    "ticketing_reissue_charge": number,
    "ticketing_mistake_by": string,
    "is_select":number

}
export interface TicketReIssueApprovedAdapter {
    "id": number,
    "company_name": string,
    "candidate_name": string,
    "passport_no": string,
    "agent_name": string,
    "rc_name": string,
    "payment": string,
    "given_to": string,
    "departure_date": string,
    "ticket_charges": number,
    "ticketing_previous_reissue_charge": number,
    "ticketing_reissue_charge": number,
    "ticketing_mistake_by": string,
    "is_select":number
}

export class TicketReIssueApprovedConverter {
    // private i: BookingRequestInterface
    // private a: BookingRequestAdapter
  
    /**
     * toInterface
     */
    public static toInterface(a: TicketReIssueApprovedAdapter) {
      const data: TicketReIssueApprovedInterface = {
        "id":a.id ,
        "company_name":a.company_name ,
        "candidate_name":a.candidate_name ,
        "passport_no":a.passport_no ,
        "agent_name":a.agent_name ,
        "rc_name":a.rc_name ,
        "payment":a.payment ,
        "given_to":a.given_to ,
        "departure_date":a.departure_date ,
        "ticket_charges":a.ticket_charges ,
        "ticketing_previous_reissue_charge":a.ticketing_previous_reissue_charge ,
        "ticketing_reissue_charge":a.ticketing_reissue_charge ,
        "ticketing_mistake_by":a.ticketing_mistake_by ,
        "is_select":a.is_select
      };
      return data;
    }
  
    /**
     * toAdapter
     */
    public static toAdapter(i: TicketReIssueApprovedInterface) {
      console.log("i"); // Only Dev
      console.log(i); // Only Dev
      const data: TicketReIssueApprovedAdapter = {
        "id":i.id ,
        "company_name":i.company_name ,
        "candidate_name":i.candidate_name ,
        "passport_no":i.passport_no ,
        "agent_name":i.agent_name ,
        "rc_name":i.rc_name ,
        "payment":i.payment ,
        "given_to":i.given_to ,
        "departure_date":i.departure_date ,
        "ticket_charges":i.ticket_charges ,
        "ticketing_previous_reissue_charge":i.ticketing_previous_reissue_charge ,
        "ticketing_reissue_charge":i.ticketing_reissue_charge ,
        "ticketing_mistake_by":i.ticketing_mistake_by ,
        "is_select":i.is_select
      };
      return data;
    }
    public static toInterfaceList(a_list: TicketReIssueApprovedAdapter[]) {
      const data_list: TicketReIssueApprovedInterface[] = [];
  
      for (let i = 0; i < a_list.length; i++) {
        const element = a_list[i];
        data_list.push(this.toAdapter(element));
      }
  
      return data_list;
    }

    public static toAdapterList(i_list: TicketReIssueApprovedInterface[]) {
      const data_list: TicketReIssueApprovedAdapter[] = [];
  
      for (let i = 0; i < i_list.length; i++) {
        const element = i_list[i];
        data_list.push(this.toAdapter(element));
      }
  
      return data_list;
    }
  }