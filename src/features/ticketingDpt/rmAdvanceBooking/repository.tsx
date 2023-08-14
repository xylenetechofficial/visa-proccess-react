
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { AddRMAdvanceConverter, RMAdvanceBookingAdapter, RMAdvanceBookingConverter, RMAdvanceBookingInterface } from "./type";


export async function readRMAdvanceBookingList() {
  const path = "/ticketing-dpt/rm-advance-booking-list";
  
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
    const dataAdapter = response.data as RMAdvanceBookingAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(RMAdvanceBookingConverter.toInterface(element));
    }
  }

  return data as RMAdvanceBookingInterface[]
}



export async function createRMAdvanceBooking(RMAdvanceBooking:RMAdvanceBookingInterface[]) {
    const path = "/ticketing-dpt/rm-advance-booking-list";
  const list:any ={
    selection_list:RMAdvanceBooking
  }
    const payload = AddRMAdvanceConverter.toAdapter(list);
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
      const dataAdapter = response.data as RMAdvanceBookingAdapter[];
      for (let i = 0; i < dataAdapter.length; i++) {
        const element = dataAdapter[i];
        data.push(RMAdvanceBookingConverter.toInterface(element));
      }
    }
  
    return data as RMAdvanceBookingInterface[]
  }
  
  
  export async function updateRMAdvanceBooking( RMAdvanceBooking: RMAdvanceBookingInterface) {

    const payload = RMAdvanceBookingConverter.toAdapter(RMAdvanceBooking);
  
    const path = "/ticketing-dpt/rm-advance-booking-list"
    const response = await ApiHelper.patch(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
    showMessage_v2({ message: response.message, status: response.code })
  
  }



