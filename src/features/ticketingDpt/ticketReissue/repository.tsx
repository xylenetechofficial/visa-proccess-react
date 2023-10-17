import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { TicketIssueAdapter, TicketIssueConverter, TicketIssueInterface } from "./type";


export async function readTicketIssueList() {
  const path = "/ticketing-dpt/ticket-reissue-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
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





