import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { TicketReIssueApprovedAdapter, TicketReIssueApprovedConverter, TicketReIssueApprovedInterface, TicketReIssueApprovedListConverter, TicketReIssueApprovedListInterface } from "./type";


export async function readTicketReIssueApprovedList() {
  const path = "/ticketing-dpt/ticket-reissue-approve-list";

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
    const dataAdapter = response.data as TicketReIssueApprovedAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(TicketReIssueApprovedConverter.toInterface(element));
    }
  }

  return data as TicketReIssueApprovedInterface[]
}



export async function createTicketReIssueApprovedList(TicketBookingRequest:TicketReIssueApprovedInterface[]) {
    const path = "/ticketing-dpt/ticket-reissue-approve-list";
  const list :TicketReIssueApprovedListInterface ={
    selection_list:TicketBookingRequest
  }
    const payload = TicketReIssueApprovedListConverter.toAdapter(list);
    const response = await ApiHelper.post(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
  
    if (response.code != 200) {
      showMessage_v2({ message: response.message, status: response.code })
    }
    //   const data = []
    // console.log(response.data)
    // if (response.data) {
    //   const dataAdapter = response.data as TicketReIssueApprovedAdapter[];
    //   for (let i = 0; i < dataAdapter.length; i++) {
    //     const element = dataAdapter[i];
    //     data.push(TicketReIssueApprovedConverter.toInterface(element));
    //   }
    // }
  
    // return data as TicketReIssueApprovedInterface[]
  
  }
  
  



