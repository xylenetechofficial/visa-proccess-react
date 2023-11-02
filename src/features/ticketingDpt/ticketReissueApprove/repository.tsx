import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { TicketReIssueApprovedAdapter, TicketReIssueApprovedConverter, TicketReIssueApprovedInterface, TicketReIssueApprovedListConverter, TicketReIssueApprovedListInterface } from "./type";


export async function readTicketReIssueApprovedList(query: {
  status?: string
  page?: number
}) {
  const path = "/ticketing-dpt/ticket-reissue-approve-list";

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
    const dataAdapter = response.data as TicketReIssueApprovedAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(TicketReIssueApprovedConverter.toInterface(element));
    }
  }


  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return data as TicketReIssueApprovedInterface[]
}



export async function createTicketReIssueApprovedList(TicketBookingRequest: TicketReIssueApprovedInterface[]) {
  const path = "/ticketing-dpt/ticket-reissue-approve-list";
  const list: TicketReIssueApprovedListInterface = {
    selection_list: TicketBookingRequest
  }
  const payload = TicketReIssueApprovedListConverter.toAdapter(list);
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  if (response.code > 199 || response.code < 300) {
    return true
  } else {
    return false
  }
}





