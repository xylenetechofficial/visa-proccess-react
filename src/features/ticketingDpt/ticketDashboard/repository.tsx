
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { AgentInvoiceAwaitinConverter, AgentInvoiceAwaitingAdapter, AgentInvoiceAwaitingInterface } from "./agentInvoiceAwaitingType";
import { TypingAdapter, TypingConverter, TypingInterface } from "./tryingType";
import { TickeDashboardAdapter2, TickeDashboardInterface2, TicketAdapter, TicketConverter, TicketDashboardAdapter, TicketDashboardConverter, TicketDashboardConverter2, TicketDashboardInterface, TicketInterface } from "./type";
import { AddUnderprocessConverter, UnderprocessAdapter, UnderprocessConverter, UnderprocessInterface } from "./underprocessType";


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
  console.log("first", data)
  return data as TickeDashboardInterface2[]
}



export async function createTicketDashboard(TicketDashboard: TickeDashboardInterface2) {
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


export async function updateTicketDashboard(TicketDashboard: TicketDashboardInterface) {

  const payload = TicketDashboardConverter.toAdapter(TicketDashboard);

  const path = "/ticketing-dpt/tickets-dashboard-list"
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

//get post ticketing-dpt/tickets-dashboard/ticket-to-be-booked-list
//post ticketing-dpt/tickets-dashboard/ticket-to-be-booked-list

export async function readTicketToBeBookedList(ticketDashboard: any) {
  const path = "/ticketing-dpt/tickets-dashboard/ticket-to-be-booked-list";
  console.log(ticketDashboard, "IPA")
  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      ticketing_sector_from: ticketDashboard.ticketing_sector_from,
      ticketing_sector_to: ticketDashboard.ticketing_sector_to
    }
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data = []
  console.log(response.data)
  if (response.data) {
    const dataAdapter = response.data as TicketAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(TicketConverter.toInterface(element));
    }
  }
  console.log("first", data)
  return data as TicketInterface[]

}

export async function updateTicketToBeBookedList(ticketDashboard: TicketInterface[]) {

  const path = "/ticketing-dpt/tickets-dashboard/ticket-to-be-booked-list";

  const list = TicketConverter.toAdapterList(ticketDashboard);
  const payload: any = {
    selection_list: list
  }
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}
//get ticketing-dpt/tickets-dashboard/ticket-under-process-list
//post ticketing-dpt/tickets-dashboard/ticket-under-process-list
//delete ticketing-dpt/tickets-dashboard/ticket-under-process/{id}

export async function readUnderProcessList(ticketDashboard: any) {
  const path = "/ticketing-dpt/tickets-dashboard/ticket-under-process-list";
  console.log(ticketDashboard, "IPA")
  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      ticketing_sector_from: ticketDashboard.ticketing_sector_from,
      ticketing_sector_to: ticketDashboard.ticketing_sector_to
    }
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data = []
  console.log(response.data)
  if (response.data) {
    const dataAdapter = response.data as UnderprocessAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(UnderprocessConverter.toInterface(element));
    }
  }
  console.log("first", data)
  return data as UnderprocessInterface[]

}

  export async function updateUnderProcessReverse(ticketDashboard:UnderprocessInterface){
  
 const path = "ticketing-dpt/tickets-dashboard/ticket-under-process/"+ticketDashboard.id;
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code });
  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}

export async function updateUnderProcessList(ticketDashboard_list: UnderprocessInterface[]) {

  const path = "/ticketing-dpt/tickets-dashboard/ticket-under-process-list";

  const list = UnderprocessConverter.toAdapterList(ticketDashboard_list);
  const payload: any = {
    selection_list: list
  }
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
  if (response.code > 199 && response.code < 300) {
    return true;
  }
}

//   export async function updateUnderProcess(ticketDashboard:UnderprocessInterface[]){
  
//  const path = "/ticketing-dpt/tickets-dashboard/ticket-under-process-list";

//  const list = UnderprocessConverter.toAdapterList(ticketDashboard);
//  const payload :any={
//   selection_list:list
//  }
//  const response = await ApiHelper.post(path, payload, {
//    contentType: ContentType.json,
//    tokenType: AuthTokenType.JWT,
//  });
//  showMessage_v2({ message: response.message, status: response.code });
//  if (response.code > 199 && response.code < 300) {
//    return true;
//  }
//  return false;
//   }

  export async function updateTryingList(ticketDashboard:TypingInterface[]){
  
 const path = "/ticketing-dpt/tickets-dashboard/ticket-trying-list";

 const list = TypingConverter.toAdapterList(ticketDashboard);
 const payload :any={
  selection_list:list
 }
 const response = await ApiHelper.post(path, payload, {
   contentType: ContentType.json,
   tokenType: AuthTokenType.JWT,
 });
 showMessage_v2({ message: response.message, status: response.code });
 if (response.code > 199 && response.code < 300) {
   return true;
 }
 return false;
  }

  export async function   readTrying(ticketDashboard:any){
    const path = "/ticketing-dpt/tickets-dashboard/ticket-trying-list";
  console.log(ticketDashboard,"IPA")
    const response = await ApiHelper.get(path, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT,
      queryParameters:{
        ticketing_sector_from:ticketDashboard.ticketing_sector_from,
        ticketing_sector_to:ticketDashboard.ticketing_sector_to
      }
    });
  
    if (response.code != 200) {
      showMessage_v2({ message: response.message, status: response.code })
    }
  }

//   export async function updateTryingReverse(item:TypingInterface){
   
//     const path = `ticketing-dpt/tickets-dashboard/ticket-trying/${item.id}`;   
//     const response = await ApiHelper.delete(path, {
//       tokenType: AuthTokenType.JWT
//     })
//     showMessage_v2({ message: response.message, status: response.code });
//     if (response.code > 199 && response.code < 300) {
//       return true;
//     }
//   // });

//   if (response.code != 200) {
//     showMessage_v2({ message: response.message, status: response.code })
//   }

//   const data = []
//   console.log(response.data)
//   if (response.data) {
//     const dataAdapter = response.data as TypingAdapter[];
//     for (let i = 0; i < dataAdapter.length; i++) {
//       const element = dataAdapter[i];
//       data.push(TypingConverter.toInterface(element));
//     }
//   }
//   console.log("first", data)
//   return data as TypingInterface[]

// }

export async function updateTryingReverse(item: TypingInterface) {

  const path = `ticketing-dpt/tickets-dashboard/ticket-trying/${item.id}`;
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code });
  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}



