
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import {  AddCandidateInvoiceNumberInterface, AddSelectionPenaltyAfterDeploymentConverter, ClientInvoiceNumberAdapter, ClientInvoiceNumberConverter, ClientInvoiceNumberInterface } from "./type";


export async function readCandidateInvoiceNumbersList() {
  const path = "/invoice-dpt/candidates-invoice-number-list";

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
    const dataAdapter = response.data as ClientInvoiceNumberAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(ClientInvoiceNumberConverter.toInterface(element));
    }
  }

  return data as ClientInvoiceNumberInterface[]
}



export async function createCandidatesInvoiceNumber(ClientAdditionalInvoice:AddCandidateInvoiceNumberInterface) {
    const path = "/invoice-dpt/candidates-invoice-number-list";
  const list :any ={
    selection_list:ClientAdditionalInvoice
  }
    const payload = AddSelectionPenaltyAfterDeploymentConverter.toAdapter(list);
    const response = await ApiHelper.post(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
  
    if (response.code == 200) {
      showMessage_v2({ message: response.message, status: response.code })
    }

    // return
  }
  
 