
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { AddBookingRequestConverter, BookingRequestAdapter, BookingRequestConverter, BookingRequestInterface } from "./type";


export async function readTicketBookingRequestList(query: {
  status?: string
  page?: number
}) {
  const path = "/ticketing-dpt/booking-request-list";

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
    const dataAdapter = response.data as BookingRequestAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(BookingRequestConverter.toInterface(element));
    }
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return data as BookingRequestInterface[]
}



export async function createTicketBookingRequest(TicketBookingRequest:BookingRequestInterface[]) {
    const path = "/ticketing-dpt/booking-request-list";
  const list :any ={
    selection_list:TicketBookingRequest
  }
    const payload = AddBookingRequestConverter.toAdapter(list);
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
      const dataAdapter = response.data as BookingRequestAdapter[];
      for (let i = 0; i < dataAdapter.length; i++) {
        const element = dataAdapter[i];
        data.push(BookingRequestConverter.toInterface(element));
      }
    }
  
    return data as BookingRequestInterface[]
  }
  
  
  export async function updateTicketBookingRequest( TicketBookingRequest: BookingRequestInterface) {

    const payload = BookingRequestConverter.toAdapter(TicketBookingRequest);
  
    const path = "/ticketing-dpt/booking-request-list"
    const response = await ApiHelper.patch(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
    showMessage_v2({ message: response.message, status: response.code })
  
  }



