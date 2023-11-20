
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import {  AddInvoiceAdminInterface, AddInvoiceAdminRemarkConverter, InvoiceAdminRemarkAdapter, InvoiceAdminRemarkConverter, InvoiceAdminRemarkInterface } from "./type";




export async function readInvoiceAdminRemarkList(
  queryParameters: {
    page: number
  }
) {
  const path = "/invoice-dpt/invoice-admin-remarks-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: queryParameters,
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

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );
  return data as InvoiceAdminRemarkInterface[]
}




export async function createInvoiceAdminRemark(InvoiceAdminRemark:AddInvoiceAdminInterface[]) {
  const path = "/invoice-dpt/invoice-admin-remarks-list";
const list :any ={
  invoice_list:InvoiceAdminRemark,
}
  const payload = AddInvoiceAdminRemarkConverter.toAdapter(list);
//  const payload = list;
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

