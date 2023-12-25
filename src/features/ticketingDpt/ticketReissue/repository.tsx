import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { TicketIssueAdapter, TicketIssueConverter, TicketIssueInterface } from "./type";


export async function readTicketIssueList(query: {
  status?: string
  page?: number
}) {
  const path = "/ticketing-dpt/ticket-reissue-list";

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
  //   console.log(response.data)
  if (response.data) {
    const dataAdapter = response.data as TicketIssueAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(TicketIssueConverter.toInterface(element));
    }
  }
  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return data as TicketIssueInterface[]
}



export async function createTicketIssueList(TicketBookingRequest: TicketIssueInterface) {
  const path = "/ticketing-dpt/ticket-reissue";
  //   const list :any ={
  //     selection_list:TicketBookingRequest
  //   }
  const payload = TicketIssueConverter.toAdapter(TicketBookingRequest);
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



export async function readReissueList(query: {
  status?: string
  page?: number
}) {
  const path = "/ticketing-dpt/ticket-reissue/reissue-list";

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

  return TicketIssueConverter.toInterfaceList(response.data as TicketIssueInterface[])
}



export async function updateRissueList(TicketBookingRequestList: TicketIssueInterface[]) {
  const path = "/ticketing-dpt/ticket-reissue/reissue-list";

  const payload = {
    reissue_list: TicketIssueConverter.toAdapterList(TicketBookingRequestList)
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




