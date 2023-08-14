
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { AddTicketProvidedConverter, TicketProvidedByCompanyAdapter, TicketProvidedByCompanyConverter, TicketProvidedByCompanyInterface } from "./type";


export async function readTicketProvidedByCompanyList() {
  const path = "/ticketing-dpt/tickets-provided-by-company-list";
  
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
    const dataAdapter = response.data as TicketProvidedByCompanyAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(TicketProvidedByCompanyConverter.toInterface(element));
    }
  }

  return data as TicketProvidedByCompanyInterface[]
}



export async function createTicketProvidedByCompany(TicketProvidedByCompany:TicketProvidedByCompanyInterface[]) {
    const path = "/ticketing-dpt/tickets-provided-by-company-list";
  const list :any ={
    selection_list:TicketProvidedByCompany,
  }
    const payload = AddTicketProvidedConverter.toAdapter(list);
    const response = await ApiHelper.post(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
  
    
      showMessage_v2({ message: response.message, status: response.code })
    
  
    if (response.code > 199 && response.code < 300) {
      return true;
    }
    return false;
    // const data = []
    // console.log(response.data)
    // if (response.data) {
    //   const dataAdapter = response.data as TicketProvidedByCompanyAdapter[];
    //   for (let i = 0; i < dataAdapter.length; i++) {
    //     const element = dataAdapter[i];
    //     data.push(TicketProvidedByCompanyConverter.toInterface(element));
    //   }
    // }
  
    // return data as TicketProvidedByCompanyInterface[]
  }
  
  
  export async function updateTicketProvidedByCompany( TicketProvidedByCompany: TicketProvidedByCompanyInterface) {

    const payload = TicketProvidedByCompanyConverter.toAdapter(TicketProvidedByCompany);
  
    const path = "/ticketing-dpt/tickets-provided-by-company-list"
    const response = await ApiHelper.patch(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
    showMessage_v2({ message: response.message, status: response.code })
  
  }



