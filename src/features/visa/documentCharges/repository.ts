import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { DocumentChargesAdapter, DocumentChargesConverter, DocumentChargesInterface } from "./type";

export async function readDocumentChargesList() {
    const path = "/visa-dpt/document-charges-list";
  
    const response = await ApiHelper.get(path, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT,
    });
  
    if (response.code != 200) {
      showMessage_v2({ message: response.message, status: response.code })
    }
     
    return DocumentChargesConverter.toInterfaceList(response.data as DocumentChargesAdapter[])
  }
  

  export async function createDocumentCharges(data_list: DocumentChargesInterface[]) {
    console.log(data_list)
    const path = "/visa-dpt/document-charges-list"
  
 
    const payload = {
      selection_list: DocumentChargesConverter.toAdapterList(data_list)
    }
    console.log(payload)
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