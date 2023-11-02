
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { AddTicketProvidedConverter, TicketProvidedByCompanyAdapter, TicketProvidedByCompanyConverter, TicketProvidedByCompanyInterface } from "./type";


export async function readTicketProvidedByCompanyList(query: {
  status?: string
  page?: number
}) {
  const path = "/ticketing-dpt/tickets-provided-by-company-list";
  
  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      page: query.page ?? 0,
      status: query.status ?? "",
    },
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
  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return data as TicketProvidedByCompanyInterface[]
}



export async function createTicketProvidedByCompany(TicketProvidedByCompany:TicketProvidedByCompanyInterface[]) {
    const path = "/ticketing-dpt/tickets-provided-by-company-list";
    console.log(TicketProvidedByCompany)
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



