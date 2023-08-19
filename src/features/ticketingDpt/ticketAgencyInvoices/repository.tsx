
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { AddTicketAgencyConverter, TicketAgencyInvoicesAdapter, TicketAgencyInvoicesConverter, TicketAgencyInvoicesInterface } from "./type";


export async function readTicketAgencyInvoicesList() {
  const path = "/ticketing-dpt/ticket-agency-invoice-list";
  
  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data = []
  console.log(response.data)
  if (response.data) {
    const dataAdapter = response.data as TicketAgencyInvoicesAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(TicketAgencyInvoicesConverter.toInterface(element));
    }
  }

  return data as TicketAgencyInvoicesInterface[]
}



export async function createTicketAgencyInvoices(TicketAgencyInvoices:TicketAgencyInvoicesInterface[]) {
    const path = "/ticketing-dpt/ticket-agency-invoice-list";
  const list = {
selection_list:TicketAgencyInvoices
  }
    const payload = AddTicketAgencyConverter.toAdapter(list);
    const response = await ApiHelper.post(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
  
    if (response.code != 200) {
      showMessage_v2({ message: response.message, status: response.code })
    }
  
    const data = []
    console.log(response.data)
    if (response.data) {
      const dataAdapter = response.data as TicketAgencyInvoicesAdapter[];
      for (let i = 0; i < dataAdapter.length; i++) {
        const element = dataAdapter[i];
        data.push(TicketAgencyInvoicesConverter.toInterface(element));
      }
    }
  
    return data as TicketAgencyInvoicesInterface[]
  }
  
  
  export async function updateTicketAgencyInvoices( TicketAgencyInvoices: TicketAgencyInvoicesInterface) {

    const payload = TicketAgencyInvoicesConverter.toAdapter(TicketAgencyInvoices);
  
    const path = "/ticketing-dpt/ticket-agency-invoice-list"
    const response = await ApiHelper.patch(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
    showMessage_v2({ message: response.message, status: response.code })
  
  }



