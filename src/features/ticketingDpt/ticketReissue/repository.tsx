import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { TicketReissueAdapter, TicketReissueConverter } from "./type";



export async function readTicketReissueList() {
    const path = "/ticketing-dpt/ticket-reissue-list";
  
    const response = await ApiHelper.get(path, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT,
    });
    
  console.log(response.data)

    if (response.code != 200) {
      showMessage_v2({ message: response.message, status: response.code })
    }
  
    return TicketReissueConverter.toInterfaceList(response.data as TicketReissueAdapter[])
  }