
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { ClientAdditionalInvoiceAdapter, ClientAdditionalInvoiceConverter, ClientAdditionalInvoiceInterface } from "./type";

export async function readClientAdditionalInvoiceList() {
  const path = "/invoice-dpt/client-additional-invoice-list";

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
    const dataAdapter = response.data as ClientAdditionalInvoiceAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(ClientAdditionalInvoiceConverter.toInterface(element));
    }
  }

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
  
  



