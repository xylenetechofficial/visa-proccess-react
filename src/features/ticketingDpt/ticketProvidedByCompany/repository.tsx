
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { TicketProvidedByCompanyAdapter, TicketProvidedByCompanyConverter, TicketProvidedByCompanyInterface } from "./type";


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

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return TicketProvidedByCompanyConverter.toInterfaceList(response.data as TicketProvidedByCompanyAdapter[])
}



export async function createTicketProvidedByCompanyList(TicketProvidedByCompany: TicketProvidedByCompanyInterface[]) {
  
  const path = "/ticketing-dpt/tickets-provided-by-company-list";

  const payload = {
    selection_list: TicketProvidedByCompanyConverter.toAdapterList(TicketProvidedByCompany)
  }
  
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;

}


export async function updateTicketProvidedByCompanyList(TicketProvidedByCompany: TicketProvidedByCompanyInterface[]) {

  const payload = {
    selection_list: TicketProvidedByCompanyConverter.toAdapterList(TicketProvidedByCompany)
  };

  const path = "/ticketing-dpt/tickets-provided-by-company-list"

  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}



