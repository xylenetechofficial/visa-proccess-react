

// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { AddCandidatesTicketChargesInterface, AddChargesConverter, AddChargesInterface, CandidatesTicketChargesAdapter, CandidatesTicketChargesConverter, CandidatesTicketChargesInterface } from "./type";

export async function readCandidatesTicketChargesList(
  queryParameters: {
    page: number
  }
) {
  const path = "/invoice-dpt/candidates-ticket-charge-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: queryParameters,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data = []
  console.log(response.data)
  if (response.data) {
    const dataAdapter = response.data as CandidatesTicketChargesAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(CandidatesTicketChargesConverter.toInterface(element));
    }
  }

  return data as CandidatesTicketChargesInterface[]
}



export async function createCandidatesTicketCharges(CandidatesTicketCharges:AddCandidatesTicketChargesInterface) {
    const path = "/invoice-dpt/candidates-ticket-charge-list";
  const list :any ={
    selection_list:CandidatesTicketCharges,
  }
    const payload = AddChargesConverter.toAdapter(list);
   
    const response = await ApiHelper.post(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
  
    showMessage_v2({ message: response.message, status: response.code })

    if (response.code > 199 && response.code < 300) {
      return true;
    }
    return false;
  }
  
  



