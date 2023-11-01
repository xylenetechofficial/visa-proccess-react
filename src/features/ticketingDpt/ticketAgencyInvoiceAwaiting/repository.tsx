
import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { TicketAgencyInvoiceAwaitingAdapter, TicketAgencyInvoiceAwaitingConverter, TicketAgencyInvoiceAwaitingInterface } from "./type";


export async function readTicketAgencyInvoiceAwaitingList(query: {
  status?: string
  page?: number
}) {
  const path = "/ticketing-dpt/ticket-agency-invoice-awaiting-list";

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

  return TicketAgencyInvoiceAwaitingConverter.toInterfaceList(response.data as TicketAgencyInvoiceAwaitingAdapter[])
}



export async function createTicketAgencyInvoiceAwaitingList(data_list: TicketAgencyInvoiceAwaitingInterface[]) {
  const path = "/ticketing-dpt/ticket-agency-invoice-awaiting-list";

  const payload = {
    selection_list: TicketAgencyInvoiceAwaitingConverter.toAdapterList(data_list)
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



export async function updateTicketAgencyInvoiceAwaitingList(data: TicketAgencyInvoiceAwaitingInterface[]) {
  const path = "/ticketing-dpt/ticket-agency-invoice-awaiting-list";

  const payload = {
    selection_list: TicketAgencyInvoiceAwaitingConverter.toAdapterList(data)
  };

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





