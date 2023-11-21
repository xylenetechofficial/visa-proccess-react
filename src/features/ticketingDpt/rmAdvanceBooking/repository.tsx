
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { RMAdvanceBookingAdapter, RMAdvanceBookingConverter, RMAdvanceBookingInterface } from "./type";


export async function readRMAdvanceBookingList(query: {
  status?: string
  page?: number
  immigration_status?: any
}) {
  const path = "/ticketing-dpt/rm-advance-booking-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      page: query.page ?? 0,
      status: query.status ?? "",
      immigration_status: query.immigration_status ?? ""
    },
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );
console.log(response.data);   // Only Dev
  return RMAdvanceBookingConverter.toInterfaceList(response.data as RMAdvanceBookingAdapter[])
}



export async function createRMAdvanceBooking(list: RMAdvanceBookingInterface[]) {
  const path = "/ticketing-dpt/rm-advance-booking-list";

  const payload = {
    selection_list: RMAdvanceBookingConverter.toAdapterList(list)
  }

  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  if (response.code > 199 && response.code < 300)
    return true
  else
    return false
}


export async function updateRMAdvanceBooking(list: RMAdvanceBookingInterface[]) {
  const path = "/ticketing-dpt/rm-advance-booking-list";

  const payload = {
    selection_list: RMAdvanceBookingConverter.toAdapterList(list)
  }

  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

  if (response.code > 199 && response.code < 300)
    return true
  else
    return false
}



