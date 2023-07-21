import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { AddInvoiceRaiseConverter,  CandidateInvoiceRaiseInterface, CandidateInvoiceRaiseListAdapter, CandidateInvoiceRaiseListConverter, CandidateInvoiceRaiseListInterface } from "./type";


export async function readCandidatesInvoiceRaiseList() {
  const path = "/invoice-dpt/candidates-invoice-raise-list";

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
    const dataAdapter = response.data as CandidateInvoiceRaiseListAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(CandidateInvoiceRaiseListConverter.toInterface(element));
    }
  }

  return data as CandidateInvoiceRaiseListInterface[]
}



export async function createCandidatesInvoiceRaiseList(CandidatesTicketCharges:CandidateInvoiceRaiseInterface) {
    const path = "/invoice-dpt/candidates-invoice-raise-list";
  const list :any ={
    selection_list:CandidatesTicketCharges,
  }
    const payload = AddInvoiceRaiseConverter.toAdapter(list);
   console.log(payload)
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
  
  



