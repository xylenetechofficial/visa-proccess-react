
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import {  BookingRequestConverter, BookingRequestInterface } from "./type";


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

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return BookingRequestConverter.toInterfaceList(response.data as BookingRequestInterface[])
}



export async function createTicketBookingRequest(TicketBookingRequest:BookingRequestInterface[]) {
    const path = "/ticketing-dpt/booking-request-list";

  const payload ={
    selection_list:BookingRequestConverter.toAdapterList(TicketBookingRequest)
  }

    const response = await ApiHelper.post(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
    showMessage_v2({ message: response.message, status: response.code })
    if(response.code >199 && response.code < 300){
      return true;
    }
    return false;

  }
  
  
  export async function updateTicketBookingRequestList( TicketBookingRequest: BookingRequestInterface[]) {

    const payload ={
       selection_list: BookingRequestConverter.toAdapterList(TicketBookingRequest)
    };
  
    const path = "/ticketing-dpt/booking-request-list"
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



