export interface ServiceChargesInterface {
  actual_profession: string,
  agent_commission: string,
  agent_name: string,
  air_ticket: string,
  cancel_charges: string,
  color_code: string,
  comments: string,
  company_name: string,
  consulate_setting_charges: string,
  document_charges: string,
  flight_ticket_amount: string,
  id: number,
  invoice_service_charges: string,
  invoice_service_currency: string,
  invoice_ticket_charges: string,
  invoice_ticket_currency: string,
  is_without: number,
  name: string,
  other_charges: string,
  partial_charges: string,
  party_code: string,
  passport_no: string,
  process_charges: string,
  raise_invoice: string,
  sector_charges: string,
  service_charges: string,
  ticket_charges: string,
  visa_profession: string,
  visa_received_date: string,
  waive_off_sector_charges: string,

}

export interface ServiceChargesAdapter {
  actual_profession: string,
  agent_commission: string,
  agent_name: string,
  air_ticket: string,
  cancel_charges: string,
  color_code: string,
  comments: string,
  company_name: string,
  consulate_setting_charges: string,
  document_charges: string,
  flight_ticket_amount: string,
  id: number,
  invoice_service_charges: string,
  invoice_service_currency: string,
  invoice_ticket_charges: string,
  invoice_ticket_currency: string,
  is_without: number,
  name: string,
  other_charges: string,
  partial_charges: string,
  party_code: string,
  passport_no: string,
  process_charges: string,
  raise_invoice: string,
  sector_charges: string,
  service_charges: string,
  ticket_charges: string,
  visa_profession: string,
  visa_received_date: string,
  waive_off_sector_charges: string,

}


export class ServiceChargesConverter {
  // private i: ServiceChargesInterface
  // private a: ServiceChargesAdapter

  /**
   * toInterface
   */
  public static toInterface(a: ServiceChargesAdapter) {
    const data: ServiceChargesInterface = {
      actual_profession: a.actual_profession,
      agent_commission: a.agent_commission,
      agent_name: a.agent_name,
      air_ticket: a.air_ticket,
      cancel_charges: a.cancel_charges,
      color_code: a.color_code,
      comments: a.comments,
      company_name: a.company_name,
      consulate_setting_charges: a.consulate_setting_charges,
      document_charges: a.document_charges,
      flight_ticket_amount: a.flight_ticket_amount,
      id: a.id,
      invoice_service_charges: a.invoice_service_charges,
      invoice_service_currency: a.invoice_service_currency,
      invoice_ticket_charges: a.invoice_ticket_charges,
      invoice_ticket_currency: a.invoice_ticket_currency,
      is_without: a.is_without,
      name: a.name,
      other_charges: a.other_charges,
      partial_charges: a.partial_charges,
      party_code: a.party_code,
      passport_no: a.passport_no,
      process_charges: a.process_charges,
      raise_invoice: a.raise_invoice,
      sector_charges: a.sector_charges,
      service_charges: a.service_charges,
      ticket_charges: a.ticket_charges,
      visa_profession: a.visa_profession,
      visa_received_date: a.visa_received_date,
      waive_off_sector_charges: a.waive_off_sector_charges,
    };
    return data;
  }

  /**
   * toAdapter
   */
  public static toAdapter(i: ServiceChargesInterface) {
    console.log("i"); // Only Dev
    console.log(i); // Only Dev
    const data: ServiceChargesAdapter = {
      actual_profession: i.actual_profession,
      agent_commission: i.agent_commission,
      agent_name: i.agent_name,
      air_ticket: i.air_ticket,
      cancel_charges: i.cancel_charges,
      color_code: i.color_code,
      comments: i.comments,
      company_name: i.company_name,
      consulate_setting_charges: i.consulate_setting_charges,
      document_charges: i.document_charges,
      flight_ticket_amount: i.flight_ticket_amount,
      id: i.id,
      invoice_service_charges: i.invoice_service_charges,
      invoice_service_currency: i.invoice_service_currency,
      invoice_ticket_charges: i.invoice_ticket_charges,
      invoice_ticket_currency: i.invoice_ticket_currency,
      is_without: i.is_without,
      name: i.name,
      other_charges: i.other_charges,
      partial_charges: i.partial_charges,
      party_code: i.party_code,
      passport_no: i.passport_no,
      process_charges: i.process_charges,
      raise_invoice: i.raise_invoice,
      sector_charges: i.sector_charges,
      service_charges: i.service_charges,
      ticket_charges: i.ticket_charges,
      visa_profession: i.visa_profession,
      visa_received_date: i.visa_received_date,
      waive_off_sector_charges: i.waive_off_sector_charges,
    };
    return data;
  }
}







export interface AddServiceInterface {

  id: number,
  other_charges: string,
  sector_charges: string,
  partial_charges: string,
  service_charges: string,
  agent_commission: string,
  waive_off_sector_charges: string,
  comments: string,
  raise_invoice: string,
  invoice_service_charges: string,
  invoice_service_currency: string,
  invoice_ticket_charges: string,
  invoice_ticket_currency: string,


}

export interface AddServiceAdapter {

  id: number,
  other_charges: string,
  sector_charges: string,
  partial_charges: string,
  service_charges: string,
  agent_commission: string,
  waive_off_sector_charges: string,
  comments: string,
  raise_invoice: string,
  invoice_service_charges: string,
  invoice_service_currency: string,
  invoice_ticket_charges: string,
  invoice_ticket_currency: string,
}
export interface AddServiceChargesInterFace {
  selection_list: AddServiceInterface[]
}
export interface AddServiceChargesAdapter {
  selection_list: AddServiceAdapter[]
}

export class AddServiceConverter {
  public static toInterface(a: AddServiceChargesAdapter): AddServiceChargesInterFace {
    console.log(a, "kkkkkk")
    const data: AddServiceChargesInterFace = {
      selection_list: a?.selection_list?.map((item) => ({
        id: item.id,
        other_charges: item.other_charges,
        sector_charges: item.sector_charges,
        partial_charges: item.partial_charges,
        service_charges: item.service_charges,
        agent_commission: item.agent_commission,
        waive_off_sector_charges: item.waive_off_sector_charges,
        comments: item.comments,
        raise_invoice: item.raise_invoice,
        invoice_service_charges: item.invoice_service_charges,
        invoice_service_currency: item.invoice_service_currency,
        invoice_ticket_charges: item.invoice_ticket_charges,
        invoice_ticket_currency: item.invoice_ticket_currency,
      
      })),
    }
    return data;
  }


  public static toAdapter(i: AddServiceChargesInterFace): AddServiceChargesAdapter {
    console.log(i, "iiiii")
    const data: AddServiceChargesAdapter = {

      selection_list: i?.selection_list?.map((item) => ({
        id: item.id,
        other_charges: item.other_charges,
        sector_charges: item.sector_charges,
        partial_charges: item.partial_charges,
        service_charges: item.service_charges,
        agent_commission: item.agent_commission,
        waive_off_sector_charges: item.waive_off_sector_charges,
        comments: item.comments,
        raise_invoice: item.raise_invoice,
        invoice_service_charges: item.invoice_service_charges,
        invoice_service_currency: item.invoice_service_currency,
        invoice_ticket_charges: item.invoice_ticket_charges,
        invoice_ticket_currency: item.invoice_ticket_currency,
      
      })),

    }
    return data;
  }
}

