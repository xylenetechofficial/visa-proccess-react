
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { AddInvoiceDispatchConverter, AddInvoiceDispatchInterface, InvoiceDispatchAdapter, InvoiceDispatchConverter, InvoiceDispatchInterface } from "./type";




export async function readinvoiceDispatchedList() {
  const path = "/invoice-dpt/invoice-dispatched-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data = []

  if (response.data) {
    const dataAdapter = response.data as InvoiceDispatchAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(InvoiceDispatchConverter.toInterface(element));
    }
  }

  return data as InvoiceDispatchInterface[]
}




export async function createInvoiceDispatch(InvoiceDispatch:InvoiceDispatchInterface[]) {
//   const path = "/invoice-dpt/invoice-dispatched-list";
// const list :AddInvoiceDispatchInterface ={
//   invoice_list:InvoiceDispatch,
// }
//   const payload = AddInvoiceDispatchConverter.toAdapter(list);
 
//   const response = await ApiHelper.post(path, payload, {
//     contentType: ContentType.json,
//     tokenType: AuthTokenType.JWT
//   })

//   showMessage_v2({ message: response.message, status: response.code })

//   if (response.code > 199 && response.code < 300) {
//     return true;
//   }
//   return false;
return true;
}

