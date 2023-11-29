import { TicketIssueAdapter, TicketIssueConverter, TicketIssueInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readTicketIssueList(queryParameters:{
  page?: number,
  status?:string,
}) {


  const path = "/domestic-ticket/ticket-issue-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: queryParameters,
  });


  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
    return []
  }

  // return response.data as TicketIssueInterface[];
 const data=[]
  if(response.data){
    const dataAdapter = response.data as TicketIssueAdapter[];
     for (let i = 0; i < dataAdapter.length; i++) {
       const element = dataAdapter[i];
       data.push(TicketIssueConverter.toInterface(element));
     }
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return data as TicketIssueInterface[];

}





export async function createTicketIssue(interviewSchedule: TicketIssueInterface) {
  const path = "/domestic-ticket/ticket-issue"

  const payload =TicketIssueConverter.toAdapter(interviewSchedule)
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })
}

export async function updateTicketIssue(id: number, interviewSchedule: TicketIssueInterface) {



  const payload =TicketIssueConverter.toAdapter(interviewSchedule)

  const path = "/domestic-ticket/ticket-issue/" + id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteTicketIssue(id: number) {

  const path = "/domestic-ticket/ticket-issue/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}
