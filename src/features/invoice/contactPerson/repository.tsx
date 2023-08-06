
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { AddContactPersonConverter,  AddContactPersonInterface,  ContactPersonAdapter,  ContactPersonConverter,  ContactPersonInterface} from "./type";




export async function readinvoiceContactPersonList() {
  const path = "/invoice-dpt/invoice-contact-person-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data = []

  if (response.data) {
    const dataAdapter = response.data as ContactPersonAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(ContactPersonConverter.toInterface(element));
    }
  }

  return data as ContactPersonInterface[]
}




export async function createInvoiceDispatch(ContactPerson:ContactPersonInterface[]) {
  const path = "/invoice-dpt/invoice-contact-person-list";
const list :AddContactPersonInterface ={
  invoice_list:ContactPerson,
}
  const payload = AddContactPersonConverter.toAdapter(list);
 
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

