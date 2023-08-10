
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { BookingRequestAdapter, BookingRequestConverter, BookingRequestInterface } from "./type";


export async function readTicketBookingRequestList() {
  const path = "/ticketing-dpt/booking-request-list";

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
    const dataAdapter = response.data as BookingRequestAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(BookingRequestConverter.toInterface(element));
    }
  }

  return data as BookingRequestInterface[]
}



export async function createTicketBookingRequest(TicketBookingRequest:BookingRequestInterface) {
    const path = "/ticketing-dpt/booking-request-list";
  
    const payload = BookingRequestConverter.toAdapter(TicketBookingRequest);
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



