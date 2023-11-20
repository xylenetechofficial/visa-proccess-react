
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { ClientAdditionalInvoiceAdapter, ClientAdditionalInvoiceConverter, ClientAdditionalInvoiceInterface } from "./type";

export async function readClientAdditionalInvoiceList(
  queryParameters: {
    page: number
  }
) {
  const path = "/invoice-dpt/client-additional-invoice-list";

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
    const dataAdapter = response.data as ClientAdditionalInvoiceAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(ClientAdditionalInvoiceConverter.toInterface(element));
    }

  }
await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );
  return data as ClientAdditionalInvoiceInterface[]
}



export async function createClientAdditionalInvoice(ClientAdditionalInvoice:ClientAdditionalInvoiceInterface) {
    const path = "/invoice-dpt/client-additional-invoice";
  
    const payload = ClientAdditionalInvoiceConverter.toAdapter(ClientAdditionalInvoice);
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
      const dataAdapter = response.data as ClientAdditionalInvoiceAdapter[];
      for (let i = 0; i < dataAdapter.length; i++) {
        const element = dataAdapter[i];
        data.push(ClientAdditionalInvoiceConverter.toInterface(element));
      }
    }
  
    return data as ClientAdditionalInvoiceInterface[]
  }
  
  
  export async function updateClientAdditionalInvoice(id: number, clientAdditionalInvoice: ClientAdditionalInvoiceInterface) {

    const payload = ClientAdditionalInvoiceConverter.toAdapter(clientAdditionalInvoice);
  
    const path = "/invoice-dpt/client-additional-invoice/" + id
    const response = await ApiHelper.patch(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
    showMessage_v2({ message: response.message, status: response.code })
  
  }

  export async function deleteClientAdditinalInvoice(id: number) {

    const path = "/invoice-dpt/client-additional-invoice/" + id
    const response = await ApiHelper.delete(path, {
      tokenType: AuthTokenType.JWT
    })
  
    showMessage_v2({ message: response.message, status: response.code })
  
  }

