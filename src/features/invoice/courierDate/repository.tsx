
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { AllSelectionInvoiceDateAdapter, AllSelectionInvoiceDateConverter, AllSelectionInvoiceDateInterface, CourierDateAdapter, CourierDateConverter, CourierDateInterface } from "./type";



export async function readCourierDateEntrylist() {
  const path = "/invoice-dpt/invoice-courier-date-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data = []
  console.log(response.data,"SSS")
  if (response.data) {
    const dataAdapter = response.data as AllSelectionInvoiceDateAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(AllSelectionInvoiceDateConverter.toInterface(element));
    }
  }
console.log(data,"aa")
return response.data
  // return data as AllSelectionInvoiceDateInterface[]
}
export async function createInvoiceDate (item : AllSelectionInvoiceDateInterface){
  const path = "/invoice-dpt/invoice-courier-date-list";

  const payload = AllSelectionInvoiceDateConverter.toAdapter(item);

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