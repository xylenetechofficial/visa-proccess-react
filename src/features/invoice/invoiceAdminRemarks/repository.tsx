
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import {  InvoiceAdminRemarkAdapter, InvoiceAdminRemarkConverter, InvoiceAdminRemarkInterface } from "./type";




export async function readInvoiceAdminRemarkList() {
  const path = "/invoice-dpt/invoice-admin-remarks-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data = []

  if (response.data) {
    const dataAdapter = response.data as InvoiceAdminRemarkAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(InvoiceAdminRemarkConverter.toInterface(element));
    }
  }

  return data as InvoiceAdminRemarkInterface[]
}




export async function createInvoiceAdminRemark(InvoiceAdminRemark:InvoiceAdminRemarkInterface[]) {
  const path = "/invoice-dpt/invoice-admin-remarks-list";
const list :any ={
  invoice_list:InvoiceAdminRemark,
}
  // const payload = AddInvoiceAdminRemarkConverter.toAdapter(list);
 const payload = list;
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

