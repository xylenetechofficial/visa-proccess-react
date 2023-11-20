
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import {  AddCandidateInvoiceChargesInterface, AddSelectionPenaltyAfterDeploymentConverter, ClientInvoiceChargesAdapter, ClientInvoiceChargesConverter, ClientInvoiceChargesInterface } from "./type";


export async function readCandidateInvoiceChargessList(
  queryParameters: {
    page: number
  }
) {
  const path = "/invoice-dpt/candidates-invoice-charge-list";

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
    const dataAdapter = response.data as ClientInvoiceChargesAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(ClientInvoiceChargesConverter.toInterface(element));
    }
  }


  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return data as ClientInvoiceChargesInterface[]
}



export async function createCandidatesInvoiceCharges(ClientAdditionalInvoice:AddCandidateInvoiceChargesInterface) {
    const path = "/invoice-dpt/candidates-invoice-charge-list";
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

    return
  }
  
 