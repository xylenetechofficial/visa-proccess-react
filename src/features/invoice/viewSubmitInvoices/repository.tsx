
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { InvoiceSubmitAdapter, InvoiceSubmitConverter, InvoiceSubmitInterface } from "./type";





export async function readinvoiceSubmitList(
  queryParameters: {
    page: number
  }
) {
  const path = "/invoice-dpt/invoice-submit-list";

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
    console.log(response.data)
    const dataAdapter = response.data as InvoiceSubmitAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      console.log(dataAdapter,dataAdapter[i])
      const element = dataAdapter[i];
      data.push(InvoiceSubmitConverter.toInterface(element));
    }
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );
  return data as InvoiceSubmitInterface[]
}




export async function createInvoiceSubmit(id:number, ContactPerson:InvoiceSubmitInterface) {
  const path = "/invoice-dpt/invoice-submit/"+ id;
  
  // const payload = InvoiceSubmitConverter.toAdapter(ContactPerson);
 
  const response = await ApiHelper.post(path, ContactPerson, {
    contentType: ContentType.form,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;

}

