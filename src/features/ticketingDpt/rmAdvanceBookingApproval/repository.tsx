
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { RMAdvanceBookingApprovalAdapter, RMAdvanceBookingApprovalConverter, RMAdvanceBookingApprovalInterface } from "./type";


export async function readRMAdvanceBookingApprovalList(query: {
  status?: string
  page?: number
}) {
  const path = "/ticketing-dpt/rm-advance-booking-approval-list";

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
    const dataAdapter = response.data as RMAdvanceBookingApprovalAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(RMAdvanceBookingApprovalConverter.toInterface(element));
    }
  }
  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return data as RMAdvanceBookingApprovalInterface[]
}



export async function createRMAdvanceBookingApproval(RMAdvanceBookingApproval: RMAdvanceBookingApprovalInterface) {
  const path = "/ticketing-dpt/rm-advance-booking-approval-list";

  const payload = RMAdvanceBookingApprovalConverter.toAdapter(RMAdvanceBookingApproval);
  // TODO FIX first
  const response = await ApiHelper.post(path, { selection_list: [payload] }, {
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


export async function updateRMAdvanceBookingApproval(RMAdvanceBookingApproval: RMAdvanceBookingApprovalInterface) {

  const payload = RMAdvanceBookingApprovalConverter.toAdapter(RMAdvanceBookingApproval);

  const path = "/ticketing-dpt/rm-advance-booking-approval-list";
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}



