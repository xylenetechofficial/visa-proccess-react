
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { TickeDashboardAdapter2, TickeDashboardInterface2, TicketDashboardAdapter, TicketDashboardConverter, TicketDashboardConverter2, TicketDashboardInterface } from "./type";


export async function readTicketDashboardList() {
  const path = "/ticketing-dpt/tickets-dashboard-list";
  
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
    const dataAdapter = response.data as TickeDashboardAdapter2[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(TicketDashboardConverter2.toInterface(element));
    }
  }

  return data as TickeDashboardInterface2[]
}



export async function createTicketDashboard(TicketDashboard:TickeDashboardInterface2) {
    const path = "/ticketing-dpt/tickets-dashboard-list";

    const payload = TicketDashboardConverter2.toAdapter(TicketDashboard);
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
      const dataAdapter = response.data as TicketDashboardAdapter[];
      for (let i = 0; i < dataAdapter.length; i++) {
        const element = dataAdapter[i];
        data.push(TicketDashboardConverter.toInterface(element));
      }
    }
  
    return data as TicketDashboardInterface[]
  }
  
  
  export async function updateTicketDashboard( TicketDashboard: TicketDashboardInterface) {

    const payload = TicketDashboardConverter.toAdapter(TicketDashboard);
  
    const path = "/ticketing-dpt/tickets-dashboard-list"
    const response = await ApiHelper.patch(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
    showMessage_v2({ message: response.message, status: response.code })
  
  }


 



