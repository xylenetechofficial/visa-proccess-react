
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { RMAdvanceBookingApprovalAdapter, RMAdvanceBookingApprovalConverter, RMAdvanceBookingApprovalInterface } from "./type";


export async function readRMAdvanceBookingApprovalList() {
  const path = "/ticketing-dpt/rm-advance-booking-approval-list";
  
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
    const dataAdapter = response.data as RMAdvanceBookingApprovalAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(RMAdvanceBookingApprovalConverter.toInterface(element));
    }
  }

  return data as RMAdvanceBookingApprovalInterface[]
}



export async function createRMAdvanceBookingApproval(RMAdvanceBookingApproval:RMAdvanceBookingApprovalInterface) {
    const path = "/ticketing-dpt/rm-advance-booking-approval-list";
  
    const payload = RMAdvanceBookingApprovalConverter.toAdapter(RMAdvanceBookingApproval);
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
      const dataAdapter = response.data as RMAdvanceBookingApprovalAdapter[];
      for (let i = 0; i < dataAdapter.length; i++) {
        const element = dataAdapter[i];
        data.push(RMAdvanceBookingApprovalConverter.toInterface(element));
      }
    }
  
    return data as RMAdvanceBookingApprovalInterface[]
  }
  
  
  export async function updateRMAdvanceBookingApproval( RMAdvanceBookingApproval: RMAdvanceBookingApprovalInterface) {

    const payload = RMAdvanceBookingApprovalConverter.toAdapter(RMAdvanceBookingApproval);
  
    const path = "/ticketing-dpt/rm-advance-booking-approval-list";
    const response = await ApiHelper.patch(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
    showMessage_v2({ message: response.message, status: response.code })
  
  }



